(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "../libraries/common", "./editors", "./ast/astops", "./ast/ast", "./analyzer/binder", "./parser/parser", "./analyzer/typechecker"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("../libraries/common"), require("./editors"), require("./ast/astops"), require("./ast/ast"), require("./analyzer/binder"), require("./parser/parser"), require("./analyzer/typechecker"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.common, global.editors, global.astops, global.ast, global.binder, global.parser, global.typechecker);
    global.services = mod.exports;
  }
})(this, function (exports, _fableCore, _common, _editors, _astops, _ast, _binder, _parser, _typechecker) {
  "use strict";

  exports.__esModule = true;
  exports.CheckingService = exports.LineRange = exports.Position = exports.CheckingMessage = exports.EditorService = exports.EditorWorkerMessage = undefined;
  exports.offsetToLocation = offsetToLocation;
  exports.rangeToLoc = rangeToLoc;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EditorWorkerMessage = exports.EditorWorkerMessage = function () {
    function EditorWorkerMessage(caseName, fields) {
      _classCallCheck(this, EditorWorkerMessage);

      this.Case = caseName;
      this.Fields = fields;
    }

    EditorWorkerMessage.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    EditorWorkerMessage.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return EditorWorkerMessage;
  }();

  _fableCore.Util.setInterfaces(EditorWorkerMessage.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Services.EditorWorkerMessage");

  var EditorService = exports.EditorService = function () {
    function EditorService(article, checker, delay) {
      var _this = this;

      _classCallCheck(this, EditorService);

      this.article = article;
      this.checker = checker;
      this.renderEditors = new _fableCore.Event();
      this.agent = _fableCore.MailboxProcessor.start(function (inbox) {
        var loop = function loop(lastText) {
          return function (pending) {
            return function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(inbox.receive(), function (_arg3) {
                  return _arg3.Case === "UpdateNow" ? builder_.Combine(builder_.TryWith(builder_.Delay(function (unitVar_1) {
                    _common.Log.trace("editors", "updating...");

                    if (_arg3.Fields[0] !== lastText) {
                      return builder_.Bind(_this.update(_arg3.Fields[0]), function (_arg5) {
                        return builder_.Return();
                      });
                    } else {
                      return builder_.Zero();
                    }
                  }), function (_arg6) {
                    _common.Log.exn("editors", "update failed: %O", _arg6);

                    return builder_.Zero();
                  }), builder_.Delay(function (unitVar_1) {
                    return builder_.ReturnFrom(loop(_arg3.Fields[0])(pending));
                  })) : _arg3.Case === "Refersh" ? builder_.Combine(pending === 1 ? builder_.TryWith(builder_.Delay(function (unitVar_1) {
                    _common.Log.trace("editors", "updating...");

                    if (_arg3.Fields[0] !== lastText) {
                      return builder_.Bind(_this.update(_arg3.Fields[0]), function (_arg7) {
                        return builder_.Return();
                      });
                    } else {
                      return builder_.Zero();
                    }
                  }), function (_arg8) {
                    _common.Log.exn("editors", "update failed: %O", _arg8);

                    return builder_.Zero();
                  }) : builder_.Zero(), builder_.Delay(function (unitVar_1) {
                    return builder_.ReturnFrom(loop(_arg3.Fields[0])(pending - 1));
                  })) : function () {
                    (function (arg00) {
                      _fableCore.Async.startImmediate(arg00);
                    })(function (builder__1) {
                      return builder__1.Delay(function (unitVar_1) {
                        return builder__1.Bind(_fableCore.Async.sleep(delay), function (_arg4) {
                          inbox.post(new EditorWorkerMessage("Refersh", [_arg3.Fields[0]]));
                          return builder__1.Zero();
                        });
                      });
                    }(_fableCore.AsyncBuilder.singleton));

                    return builder_.ReturnFrom(loop(lastText)(pending + 1));
                  }();
                });
              });
            }(_fableCore.AsyncBuilder.singleton);
          };
        };

        return loop("")(0);
      });
    }

    EditorService.prototype.UpdateSource = function UpdateSource(text, immediately) {
      if (_fableCore.Util.equals(immediately, true)) {
        this.agent.post(new EditorWorkerMessage("UpdateNow", [text]));
      } else {
        this.agent.post(new EditorWorkerMessage("Update", [text]));
      }
    };

    EditorService.prototype.update = function update(text) {
      var _this2 = this;

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          _common.Log.event("options", "update", _this2.article, text);

          return builder_.Bind(_this2.checker(text), function (_arg1) {
            _common.Log.trace("service", "Collecting editors");

            return builder_.Bind(_common.Async.collect(function (cmd) {
              return (0, _editors.collectCmdEditors)(cmd);
            }, _arg1[2].Body.Node), function (_arg2) {
              var eds = _fableCore.List.mapIndexed(function (i, v) {
                return [i, v];
              }, _arg2);

              var filteredEds = _fableCore.List.map(function (tuple) {
                return tuple[1];
              }, _fableCore.List.filter(function (tupledArg) {
                return !_fableCore.Seq.exists(function (tupledArg_1) {
                  return tupledArg_1[0] !== tupledArg[0] ? (0, _astops.strictSubRange)(tupledArg[1].Range, tupledArg_1[1].Range) : false;
                }, eds);
              }, eds));

              _common.Log.trace("service", "Rendering %s out of %s", filteredEds.length, eds.length);

              _this2.renderEditors.Trigger(filteredEds);

              return builder_.Zero();
            });
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    _createClass(EditorService, [{
      key: "EditorsUpdated",
      get: function get() {
        return this.renderEditors.Publish;
      }
    }]);

    return EditorService;
  }();

  _fableCore.Util.setInterfaces(EditorService.prototype, [], "TheGamma.Services.EditorService");

  var CheckingMessage = exports.CheckingMessage = function () {
    function CheckingMessage(caseName, fields) {
      _classCallCheck(this, CheckingMessage);

      this.Case = caseName;
      this.Fields = fields;
    }

    CheckingMessage.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    return CheckingMessage;
  }();

  _fableCore.Util.setInterfaces(CheckingMessage.prototype, ["FSharpUnion", "System.IEquatable"], "TheGamma.Services.CheckingMessage");

  var Position = exports.Position = function () {
    function Position(line, column) {
      _classCallCheck(this, Position);

      this.Line = line;
      this.Column = column;
    }

    Position.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    Position.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return Position;
  }();

  _fableCore.Util.setInterfaces(Position.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Services.Position");

  var LineRange = exports.LineRange = function () {
    function LineRange(start, end) {
      _classCallCheck(this, LineRange);

      this.Start = start;
      this.End = end;
    }

    LineRange.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    LineRange.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return LineRange;
  }();

  _fableCore.Util.setInterfaces(LineRange.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Services.LineRange");

  function offsetToLocation(lines, offs, lengths) {
    var $target1 = function $target1() {
      return lengths.tail == null ? new Position(lines, offs) : offsetToLocation(lines + 1, offs - lengths.head - 1, lengths.tail);
    };

    if (lengths.tail != null) {
      if (offs <= lengths.head) {
        var l = lengths.head;
        var lengths_1 = lengths.tail;
        return new Position(lines, offs);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function rangeToLoc(lengths, rng) {
    return new LineRange(offsetToLocation(1, rng.Start, lengths), offsetToLocation(1, rng.Start, lengths));
  }

  var CheckingService = exports.CheckingService = function () {
    function CheckingService(article, globals) {
      var _this3 = this;

      _classCallCheck(this, CheckingService);

      this.globals = globals;
      this.errorsReported = new _fableCore.Event();
      var emptyProg = new _ast.Program((0, _astops.node)(new _ast.Range(0, 0), new _fableCore.List()));
      this.bindingContext = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this3.globals), function (_arg1) {
            return builder_.Return((0, _binder.createContext)(_arg1, article));
          });
        });
      }(_fableCore.AsyncBuilder.singleton));
      this.agent = _fableCore.MailboxProcessor.start(function (inbox) {
        var loop = function loop(lastCode) {
          return function (lastResult) {
            return function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(inbox.receive(), function (_arg6) {
                  return _arg6.Case === "TypeCheck" ? _arg6.Fields[0] === lastCode ? function () {
                    var code = _arg6.Fields[0];
                    var repl = _arg6.Fields[1];
                    {
                      _common.Log.trace("service", "Returning previous result");

                      repl.reply(lastResult);
                      return builder_.ReturnFrom(loop(lastCode)(lastResult));
                    }
                  }() : _arg6.Case === "TypeCheck" ? function () {
                    _common.Log.trace("service", "Type checking source code");

                    return builder_.Bind(_this3.typeCheck(_arg6.Fields[0]), function (_arg8) {
                      return _arg8 == null ? function () {
                        _arg6.Fields[1].reply([false, new _binder.BindingResult([]), emptyProg]);

                        return builder_.ReturnFrom(loop(lastCode)(lastResult));
                      }() : function () {
                        var prog = _arg8[0];
                        var errors = _arg8[2];
                        var ents = _arg8[1];

                        _this3.errorsReported.Trigger([_arg6.Fields[0], errors]);

                        var result = [errors.length === 0, ents, prog];

                        _arg6.Fields[1].reply(result);

                        return builder_.ReturnFrom(loop(_arg6.Fields[0])(result));
                      }();
                    });
                  }() : function () {
                    throw ["C:\\Tomas\\Public\\thegamma\\thegamma-script\\src\\thegamma\\services.fs", 119, 12];
                  }() : function () {
                    var code = _arg6.Fields[0];
                    var repl = _arg6.Fields[1];
                    return builder_.Bind(_this3.typeCheck(code), function (_arg7) {
                      return builder_.Combine(function () {
                        var $target1 = function $target1() {
                          repl.reply(false);
                          return builder_.Zero();
                        };

                        if (_arg7 != null) {
                          if (function () {
                            var errs = _arg7[2];
                            return errs.length === 0;
                          }()) {
                            var errs = _arg7[2];
                            repl.reply(true);
                            return builder_.Zero();
                          } else {
                            return $target1();
                          }
                        } else {
                          return $target1();
                        }
                      }(), builder_.Delay(function (unitVar_1) {
                        return builder_.ReturnFrom(loop(lastCode)(lastResult));
                      }));
                    });
                  }();
                });
              });
            }(_fableCore.AsyncBuilder.singleton);
          };
        };

        return loop("")([false, new _binder.BindingResult([]), emptyProg]);
      });
    }

    CheckingService.prototype.TypeCheck = function TypeCheck(code) {
      return this.agent.postAndAsyncReply(function (ch) {
        return new CheckingMessage("TypeCheck", [code, ch]);
      });
    };

    CheckingService.prototype.IsWellTyped = function IsWellTyped(code) {
      return this.agent.postAndAsyncReply(function (ch) {
        return new CheckingMessage("IsWellTyped", [code, ch]);
      });
    };

    CheckingService.prototype.errorsToLineCol = function errorsToLineCol(code, errors) {
      var lengths = _fableCore.List.map(function (l) {
        return l.length;
      }, _fableCore.Seq.toList(code.split("\n")));

      return errors.map(function (e) {
        return new _ast.Error(e.Number, e.Message, rangeToLoc(lengths, e.Range));
      });
    };

    CheckingService.prototype.typeCheck = function typeCheck(code) {
      var _this4 = this;

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this4.globals), function (_arg2) {
            return builder_.TryWith(builder_.Delay(function (unitVar_1) {
              var patternInput = (0, _parser.parseProgram)(code);
              return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this4.bindingContext), function (_arg3) {
                var patternInput_1 = (0, _binder.bindProgram)(_arg3, patternInput[0]);
                return builder_.Bind((0, _typechecker.typeCheckProgram)(_arg2, patternInput_1[1], patternInput_1[0]), function (_arg4) {
                  var typeErrors = (0, _typechecker.collectTypeErrors)(patternInput_1[0]);

                  _common.Log.trace("service", "Type checking completed");

                  var errors = function () {
                    var errors = patternInput[1].concat(typeErrors);
                    return _this4.errorsToLineCol(code, errors);
                  }();

                  return builder_.Return([patternInput[0], patternInput_1[1], errors]);
                });
              });
            }), function (_arg5) {
              _common.Log.exn("service", "Type checking failed: %O", _arg5);

              return builder_.Return();
            });
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    _createClass(CheckingService, [{
      key: "ErrorsReported",
      get: function get() {
        return this.errorsReported.Publish;
      }
    }]);

    return CheckingService;
  }();

  _fableCore.Util.setInterfaces(CheckingService.prototype, [], "TheGamma.Services.CheckingService");
});
//# sourceMappingURL=services.js.map