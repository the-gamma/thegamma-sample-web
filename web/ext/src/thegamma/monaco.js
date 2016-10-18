(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./parser/tokenizer", "../libraries/common", "./ast/typeops", "./ast/astops", "monaco"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./parser/tokenizer"), require("../libraries/common"), require("./ast/typeops"), require("./ast/astops"), require("monaco"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.tokenizer, global.common, global.typeops, global.astops, global.monaco);
    global.monaco = mod.exports;
  }
})(this, function (exports, _fableCore, _tokenizer, _common, _typeops, _astops, _monaco) {
  "use strict";

  exports.__esModule = true;
  exports.tokensProvider = exports.noState = exports.LocationMapper = undefined;
  exports.getColorClass = getColorClass;
  exports.createCompletionProvider = createCompletionProvider;
  exports.setupMonacoServices = setupMonacoServices;
  exports.createMonacoEditor = createMonacoEditor;

  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    return obj;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _noState, _tokensProvider;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LocationMapper = exports.LocationMapper = function () {
    function LocationMapper(code) {
      _classCallCheck(this, LocationMapper);

      this.lengths = Int32Array.from(_fableCore.Seq.map(function (s) {
        return s.length;
      }, code.split("\n")));
    }

    LocationMapper.prototype.AbsoluteToLineCol = function AbsoluteToLineCol(offs) {
      var line = 0;
      var col = 0;
      var offs_1 = offs;

      while (line <= this.lengths.length ? offs_1 > this.lengths[line] : false) {
        offs_1 = offs_1 - this.lengths[line] - 1;
        line = line + 1;
      }

      return [line + 1, offs_1 + 1];
    };

    LocationMapper.prototype.LineColToAbsolute = function LineColToAbsolute(line, col) {
      var offs = 0;

      for (var l = 1; l <= line - 1; l++) {
        offs = offs + this.lengths[l - 1] + 1;
      }

      return offs + col - 1;
    };

    return LocationMapper;
  }();

  _fableCore.Util.setInterfaces(LocationMapper.prototype, [], "TheGamma.Monaco.LocationMapper");

  _monaco = monaco;
  var noState = exports.noState = (_noState = {}, _noState[_fableCore.Symbol.interfaces] = ["Fable.Import.monaco.languages.IState"], _noState.clone = function clone() {
    return this;
  }, _noState.equals = function equals(other) {
    return true;
  }, _noState);

  function getColorClass(_arg1) {
    var $target1 = function $target1() {
      return "ident";
    };

    var $target3 = function $target3() {
      return "keyword";
    };

    if (_arg1.Case === "String") {
      return "string";
    } else {
      if (_arg1.Case === "QIdent") {
        return $target1();
      } else {
        if (_arg1.Case === "Ident") {
          return $target1();
        } else {
          if (_arg1.Case === "Dot") {
            return "operator";
          } else {
            if (_arg1.Case === "By") {
              return $target3();
            } else {
              if (_arg1.Case === "To") {
                return $target3();
              } else {
                if (_arg1.Case === "Let") {
                  return $target3();
                } else {
                  if (_arg1.Case === "Boolean") {
                    return $target3();
                  } else {
                    if (_arg1.Case === "Fun") {
                      return $target3();
                    } else {
                      if (_arg1.Case === "Arrow") {
                        return $target3();
                      } else {
                        if (_arg1.Case === "Number") {
                          return "number";
                        } else {
                          return "";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  var tokensProvider = exports.tokensProvider = (_tokensProvider = {}, _tokensProvider[_fableCore.Symbol.interfaces] = ["Fable.Import.monaco.languages.TokensProvider"], _tokensProvider.tokenize = function tokenize(line, state) {
    var tokens = {};
    tokens.endState = noState;
    tokens.tokens = [];
    var patternInput = (0, _tokenizer.tokenize)(line);

    for (var idx = 0; idx <= patternInput[0].length - 1; idx++) {
      var t = patternInput[0][idx];
      var tok = {};
      tok.startIndex = t.Range.Start;
      tok.scopes = getColorClass(t.Token);
      tokens.tokens.push(tok);
    }

    return tokens;
  }, _tokensProvider.getInitialState = function getInitialState() {
    return noState;
  }, _tokensProvider);

  function createCompletionProvider(getService) {
    var _triggerCharacters, _ref, _mutatorMap;

    return _ref = {}, _ref[_fableCore.Symbol.interfaces] = ["Fable.Import.monaco.languages.CompletionItemProvider"], _triggerCharacters = "triggerCharacters", _mutatorMap = {}, _mutatorMap[_triggerCharacters] = _mutatorMap[_triggerCharacters] || {}, _mutatorMap[_triggerCharacters].get = function () {
      return Array.from(_fableCore.List.ofArray(["."]));
    }, _ref.provideCompletionItems = function provideCompletionItems(model, position, token) {
      return function (arg00) {
        return _fableCore.Async.startAsPromise(arg00);
      }(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.TryWith(builder_.Delay(function (unitVar_1) {
            var svc = getService(model.uri.toString());
            var input = model.getValue(1, false);

            _common.Log.event("editor", "completions", "", {
              source: input,
              position: position
            });

            var conv = new LocationMapper(input);
            var loc = conv.LineColToAbsolute((position.lineNumber + 0x80000000 >>> 0) - 0x80000000, (position.column + 0x80000000 >>> 0) - 0x80000000);
            return builder_.Bind(svc.TypeCheck(input), function (_arg1) {
              var optMembers = _fableCore.Seq.tryPick(function (tupledArg) {
                var $target1 = function $target1() {
                  var $target1 = function $target1() {
                    return null;
                  };

                  if (tupledArg[1].Kind.Case === "NamedMember") {
                    if (tupledArg[1].Kind.Fields[1].Type != null) {
                      var n = tupledArg[1].Kind.Fields[0];
                      var t = tupledArg[1].Kind.Fields[1].Type;
                      {
                        _common.Log.trace("completions", "Ignoring '%s' at location %s-%s (current=%s)", n.Name, tupledArg[0].Start, tupledArg[0].End, loc);

                        return null;
                      }
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                };

                if (tupledArg[1].Kind.Case === "NamedMember") {
                  if (tupledArg[1].Kind.Fields[1].Type != null) {
                    if (function () {
                      var t = tupledArg[1].Kind.Fields[1].Type;

                      if (loc >= tupledArg[0].Start) {
                        return loc <= tupledArg[0].End + 1;
                      } else {
                        return false;
                      }
                    }()) {
                      var t = tupledArg[1].Kind.Fields[1].Type;

                      _common.Log.trace("completions", "Antecedant at current location: %O", t);

                      var matchValue = (0, _typeops.reduceType)(t);

                      if (matchValue.Case === "Object") {
                        var mems = matchValue.Fields[0].Members;
                        return [tupledArg[0], mems];
                      }
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              }, _arg1[1].Entities);

              var convertRange = function convertRange(rng) {
                var patternInput = conv.AbsoluteToLineCol(rng.Start);
                var patternInput_1 = conv.AbsoluteToLineCol(rng.End);
                var res = {};
                res.startColumn = patternInput[1];
                res.startLineNumber = patternInput[0];
                res.endColumn = patternInput_1[1] + 1;
                res.endLineNumber = patternInput_1[0];
                return res;
              };

              if (optMembers != null) {
                var _ret = function () {
                  var nameRange = optMembers[0];
                  var members = optMembers[1];
                  var nameRange_1 = convertRange(nameRange);

                  _common.Log.trace("completions", "providing %s members at %O", members.length, nameRange_1);

                  var completion = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                    return _fableCore.Seq.map(function (m) {
                      var ci = {};
                      var patternInput = m.Case === "Property" ? [m.Fields[0], 9] : [m.Fields[0], 1];
                      ci.kind = patternInput[1];
                      ci.label = patternInput[0];
                      ci.insertText = (0, _astops.escapeIdent)(patternInput[0]);
                      ci.filterText = patternInput[0];

                      if (m.Case === "Method") {
                        var patternInput_1 = function () {
                          var folder = function folder(tupledArg) {
                            return function (s) {
                              return tupledArg[1].length > 100 ? [new _fableCore.List(tupledArg[1], tupledArg[0]), s] : [tupledArg[0], tupledArg[1] === "" ? s : tupledArg[1] + "," + s];
                            };
                          };

                          var arg = [new _fableCore.List(), ""];
                          return function (source) {
                            return _fableCore.Seq.fold(function ($var21, $var22) {
                              return folder($var21)($var22);
                            }, [arg[0], arg[1]], source);
                          };
                        }()(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
                          return _fableCore.Seq.collect(function (matchValue) {
                            return _fableCore.Seq.singleton((matchValue[1] ? "?" : "") + matchValue[0]);
                          }, m.Fields[1]);
                        })));

                        var args = _fableCore.String.join(",\n", _fableCore.List.reverse(new _fableCore.List(patternInput_1[1], patternInput_1[0])));

                        ci.documentation = "(" + args + ")";
                      }

                      var eo = {};
                      eo.text = (0, _astops.escapeIdent)(patternInput[0]);
                      eo.range = nameRange_1;
                      ci.textEdit = eo;
                      return ci;
                    }, members);
                  }));

                  _common.Log.trace("completions", "returning %O", Array.from(completion));

                  return {
                    v: builder_.Return(Array.from(completion))
                  };
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
              } else {
                _common.Log.trace("completions", "no members at %s", loc);

                return builder_.Return(Array.from(new _fableCore.List()));
              }
            });
          }), function (_arg2) {
            _common.Log.exn("completions", "completions failed %O", _arg2);

            return builder_.Return([]);
          });
        });
      }(_fableCore.AsyncBuilder.singleton));
    }, _ref.resolveCompletionItem = function resolveCompletionItem(item, token) {
      return item;
    }, _defineEnumerableProperties(_ref, _mutatorMap), _ref;
  }

  function setupMonacoServices(getService) {
    var lang = {};
    lang.id = "thegamma";

    _monaco.languages.setTokensProvider("thegamma", tokensProvider);

    _monaco.languages.registerCompletionItemProvider("thegamma", createCompletionProvider(getService));

    _monaco.languages.register(lang);
  }

  function createMonacoEditor(id, code, customize) {
    var services = {};
    var options = {};
    var scroll = {};
    scroll.vertical = "none";
    scroll.horizontal = "auto";
    options.scrollbar = scroll;
    options.value = code;
    options.language = "thegamma";
    options.lineNumbersMinChars = 3;
    options.contextmenu = false;
    options.scrollBeyondLastLine = false;
    options.overviewRulerLanes = 0;
    customize(options);
    return _monaco.editor.create(document.getElementById(id), options, services);
  }
});
//# sourceMappingURL=monaco.js.map