(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./extensions", "./editors", "./ast", "./typechecker"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./extensions"), require("./editors"), require("./ast"), require("./typechecker"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.extensions, global.editors, global.ast, global.typechecker);
    global.services = mod.exports;
  }
})(this, function (exports, _fableCore, _extensions, _editors, _ast, _typechecker) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CheckingService = exports.LineRange = exports.Position = exports.CheckingMessage = exports.EditorService = exports.EditorWorkerMessage = undefined;
  exports.offsetToLocation = offsetToLocation;
  exports.rangeToLoc = rangeToLoc;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  var EditorWorkerMessage = exports.EditorWorkerMessage = function () {
    function EditorWorkerMessage(caseName, fields) {
      _classCallCheck(this, EditorWorkerMessage);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(EditorWorkerMessage, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsUnions(this, other);
      }
    }, {
      key: "CompareTo",
      value: function CompareTo(other) {
        return _fableCore.Util.compareUnions(this, other);
      }
    }]);

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
                    _extensions.Log.trace("editors", "updating...");

                    if (_arg3.Fields[0] !== lastText) {
                      return builder_.Bind(_this.update(_arg3.Fields[0]), function (_arg5) {
                        return builder_.Return();
                      });
                    } else {
                      return builder_.Zero();
                    }
                  }), function (_arg6) {
                    _extensions.Log.exn("editors", "update failed: %O", _arg6);

                    return builder_.Zero();
                  }), builder_.Delay(function (unitVar_1) {
                    return builder_.ReturnFrom(loop(_arg3.Fields[0])(pending));
                  })) : _arg3.Case === "Refersh" ? builder_.Combine(pending === 1 ? builder_.TryWith(builder_.Delay(function (unitVar_1) {
                    _extensions.Log.trace("editors", "updating...");

                    if (_arg3.Fields[0] !== lastText) {
                      return builder_.Bind(_this.update(_arg3.Fields[0]), function (_arg7) {
                        return builder_.Return();
                      });
                    } else {
                      return builder_.Zero();
                    }
                  }), function (_arg8) {
                    _extensions.Log.exn("editors", "update failed: %O", _arg8);

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
                    }(_fableCore.defaultAsyncBuilder));

                    return builder_.ReturnFrom(loop(lastText)(pending + 1));
                  }();
                });
              });
            }(_fableCore.defaultAsyncBuilder);
          };
        };

        return loop("")(0);
      });
    }

    _createClass(EditorService, [{
      key: "UpdateSource",
      value: function UpdateSource(text, immediately) {
        if (_fableCore.Util.equals(immediately, true)) {
          this.agent.post(new EditorWorkerMessage("UpdateNow", [text]));
        } else {
          this.agent.post(new EditorWorkerMessage("Update", [text]));
        }
      }
    }, {
      key: "update",
      value: function update(text) {
        var _this2 = this;

        return function (builder_) {
          return builder_.Delay(function (unitVar) {
            _extensions.Log.event("options", "update", _this2.article, text);

            return builder_.Bind(_this2.checker(text), function (_arg1) {
              _extensions.Log.trace("service", "Collecting editors");

              return builder_.Bind(_extensions.Async.collect(function (cmd) {
                return (0, _editors.collectCmdEditors)(cmd);
              }, _arg1[1].Body), function (_arg2) {
                var eds = _fableCore.List.mapIndexed(function (i, v) {
                  return [i, v];
                }, _arg2);

                var filteredEds = _fableCore.List.map(function (tuple) {
                  return tuple[1];
                }, _fableCore.List.filter(function (tupledArg) {
                  return !_fableCore.Seq.exists(function (tupledArg_1) {
                    return tupledArg_1[0] !== tupledArg[0] ? _ast.Ranges.strictSubRange(tupledArg[1].Range, tupledArg_1[1].Range) : false;
                  }, eds);
                }, eds));

                _extensions.Log.trace("service", "Rendering %s out of %s", filteredEds.length, eds.length);

                _this2.renderEditors.Trigger(filteredEds);

                return builder_.Zero();
              });
            });
          });
        }(_fableCore.defaultAsyncBuilder);
      }
    }, {
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

    _createClass(CheckingMessage, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsUnions(this, other);
      }
    }]);

    return CheckingMessage;
  }();

  _fableCore.Util.setInterfaces(CheckingMessage.prototype, ["FSharpUnion", "System.IEquatable"], "TheGamma.Services.CheckingMessage");

  var Position = exports.Position = function () {
    function Position(line, column) {
      _classCallCheck(this, Position);

      this.Line = line;
      this.Column = column;
    }

    _createClass(Position, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }, {
      key: "CompareTo",
      value: function CompareTo(other) {
        return _fableCore.Util.compareRecords(this, other);
      }
    }]);

    return Position;
  }();

  _fableCore.Util.setInterfaces(Position.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Services.Position");

  var LineRange = exports.LineRange = function () {
    function LineRange(start, end) {
      _classCallCheck(this, LineRange);

      this.Start = start;
      this.End = end;
    }

    _createClass(LineRange, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }, {
      key: "CompareTo",
      value: function CompareTo(other) {
        return _fableCore.Util.compareRecords(this, other);
      }
    }]);

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

      this.errorsReported = new _fableCore.Event();
      this.agent = _fableCore.MailboxProcessor.start(function (inbox) {
        var loop = function loop(lastCode) {
          return function (lastResult) {
            return function (builder_) {
              return builder_.Delay(function (unitVar) {
                return builder_.Bind(inbox.receive(), function (_arg1) {
                  return _arg1.Case === "TypeCheck" ? _arg1.Fields[0] === lastCode ? function () {
                    var code = _arg1.Fields[0];
                    var repl = _arg1.Fields[1];
                    {
                      _extensions.Log.trace("service", "Returning previous result");

                      repl.reply(lastResult);
                      return builder_.ReturnFrom(loop(lastCode)(lastResult));
                    }
                  }() : _arg1.Case === "TypeCheck" ? function () {
                    _extensions.Log.trace("service", "Type checking source code");

                    return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(globals), function (_arg5) {
                      return builder_.TryWith(builder_.Delay(function (unitVar_1) {
                        _extensions.Log.event("compiler", "check-source", article, _arg1.Fields[0]);

                        return builder_.Bind((0, _typechecker.typeCheck)(_arg5, _arg1.Fields[0]), function (_arg6) {
                          _extensions.Log.trace("service", "Type checking completed");

                          var lengths = _fableCore.List.map(function (l) {
                            return l.length;
                          }, _fableCore.Seq.toList(_arg1.Fields[0].split("\n")));

                          var errors = _fableCore.List.map(function (e) {
                            return new _ast.Error(e.Number, e.Message, rangeToLoc(lengths, e.Range));
                          }, _arg6[0]);

                          _this3.errorsReported.Trigger([_arg1.Fields[0], errors]);

                          var result = [errors.tail == null, _arg6[1]];

                          _arg1.Fields[1].reply(result);

                          return builder_.ReturnFrom(loop(_arg1.Fields[0])(result));
                        });
                      }), function (_arg7) {
                        _extensions.Log.exn("service", "Type checking failed: %O", _arg7);

                        _arg1.Fields[1].reply([false, _this3.emptyProg()]);

                        return builder_.ReturnFrom(loop(lastCode)(lastResult));
                      });
                    });
                  }() : function () {
                    throw ["c:\\tomas\\public\\thegamma\\thegamma-script\\src\\thegamma\\services.fs", 93, 12];
                  }() : function () {
                    var code = _arg1.Fields[0];
                    var repl = _arg1.Fields[1];
                    return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(globals), function (_arg2) {
                      return builder_.Combine(builder_.TryWith(builder_.Delay(function (unitVar_1) {
                        return builder_.Bind((0, _typechecker.typeCheck)(_arg2, code), function (_arg3) {
                          repl.reply(_arg3[0].tail == null);
                          return builder_.Zero();
                        });
                      }), function (_arg4) {
                        _extensions.Log.exn("service", "Type checking failed: %O", _arg4);

                        repl.reply(false);
                        return builder_.Zero();
                      }), builder_.Delay(function (unitVar_1) {
                        return builder_.ReturnFrom(loop(lastCode)(lastResult));
                      }));
                    });
                  }();
                });
              });
            }(_fableCore.defaultAsyncBuilder);
          };
        };

        return loop("")([false, _this3.emptyProg()]);
      });
    }

    _createClass(CheckingService, [{
      key: "TypeCheck",
      value: function TypeCheck(code) {
        return this.agent.postAndAsyncReply(function (ch) {
          return new CheckingMessage("TypeCheck", [code, ch]);
        });
      }
    }, {
      key: "IsWellTyped",
      value: function IsWellTyped(code) {
        return this.agent.postAndAsyncReply(function (ch) {
          return new CheckingMessage("IsWellTyped", [code, ch]);
        });
      }
    }, {
      key: "emptyProg",
      value: function emptyProg() {
        return new _ast.Program(new _fableCore.List(), new _ast.Range(0, 0));
      }
    }, {
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