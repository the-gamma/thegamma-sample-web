(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./typechecker", "./extensions", "./codegen", "monaco"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./typechecker"), require("./extensions"), require("./codegen"), require("monaco"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.typechecker, global.extensions, global.codegen, global.monaco);
    global.monaco = mod.exports;
  }
})(this, function (exports, _fableCore, _typechecker, _extensions, _codegen, _monaco) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.tokensProvider = exports.noState = undefined;
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

  var _noState, _tokensProvider;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  _monaco = monaco;
  var noState = exports.noState = (_noState = {}, _defineProperty(_noState, _fableCore.Symbol.interfaces, ["Fable.Import.monaco.languages.IState"]), _defineProperty(_noState, "clone", function clone() {
    return this;
  }), _defineProperty(_noState, "equals", function equals(other) {
    return true;
  }), _noState);

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

  var tokensProvider = exports.tokensProvider = (_tokensProvider = {}, _defineProperty(_tokensProvider, _fableCore.Symbol.interfaces, ["Fable.Import.monaco.languages.TokensProvider"]), _defineProperty(_tokensProvider, "tokenize", function tokenize(line, state) {
    var tokens = {};
    tokens.endState = noState;
    tokens.tokens = [];
    var patternInput = (0, _typechecker.tokenize)(line);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = patternInput[1][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var t = _step.value;
        var tok = {};
        tok.startIndex = t.Range.Start;
        tok.scopes = getColorClass(t.Token);
        tokens.tokens.push(tok);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return tokens;
  }), _defineProperty(_tokensProvider, "getInitialState", function getInitialState() {
    return noState;
  }), _tokensProvider);

  function createCompletionProvider(globals) {
    var _triggerCharacters, _ref, _mutatorMap;

    return _ref = {}, _defineProperty(_ref, _fableCore.Symbol.interfaces, ["Fable.Import.monaco.languages.CompletionItemProvider"]), _triggerCharacters = "triggerCharacters", _mutatorMap = {}, _mutatorMap[_triggerCharacters] = _mutatorMap[_triggerCharacters] || {}, _mutatorMap[_triggerCharacters].get = function () {
      return Array.from(_fableCore.List.ofArray(["."]));
    }, _defineProperty(_ref, "provideCompletionItems", function provideCompletionItems(model, position, token) {
      return function (arg00) {
        return _fableCore.Async.startAsPromise(arg00);
      }(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.TryWith(builder_.Delay(function (unitVar_1) {
            var input = model.getValue(1, false);

            _extensions.Log.event("editor", "completions", "", {
              source: input,
              position: position
            });

            var lines = input.split("\n");
            return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(globals), function (_arg1) {
              return builder_.Bind((0, _typechecker.typeCheck)(_arg1, input), function (_arg2) {
                return builder_.Bind((0, _typechecker.collectProgramInfo)(function () {
                  var Completions = new _fableCore.List();
                  return new _typechecker.EditorInfo(input, Completions);
                }(), _arg2[1]), function (_arg3) {
                  var absPosition = Math.floor(position.column) - 1 + _fableCore.Seq.fold(function (x, y) {
                    return x + y;
                  }, 0, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                    return _fableCore.Seq.map(function (i) {
                      return lines[i - 1].length + 1;
                    }, _fableCore.Seq.range(1, Math.floor(position.lineNumber) - 1));
                  })));

                  var optMembers = _fableCore.Seq.tryHead(_fableCore.Seq.toList(_fableCore.Seq.sortWith(function (x, y) {
                    return _fableCore.Util.compare(function (tupledArg) {
                      return -tupledArg[0].Start;
                    }(x), function (tupledArg) {
                      return -tupledArg[0].Start;
                    }(y));
                  }, _fableCore.List.filter(function (tupledArg) {
                    return absPosition >= tupledArg[0].Start ? absPosition <= tupledArg[0].End : false;
                  }, _arg3.Completions))));

                  var log = Array.from(_fableCore.Seq.delay(function (unitVar_2) {
                    return _fableCore.Seq.collect(function (matchValue) {
                      return _fableCore.Seq.singleton(function () {
                        var opts = _fableCore.String.join(", ", _fableCore.Seq.map(function (m) {
                          return m.Name;
                        }, _fableCore.Seq.truncate(3, matchValue[2])));

                        return _fableCore.String.fsFormat("%d - %d: %s...")(function (x) {
                          return x;
                        })(matchValue[0].Start)(matchValue[0].End)(opts);
                      }());
                    }, _arg3.Completions);
                  }));

                  _extensions.Log.trace("completions", "requested at: %O", position);

                  _extensions.Log.trace("completions", "available: %O", log);

                  var lengths = _fableCore.Seq.toList(function (array) {
                    return Int32Array.from(_fableCore.Seq.map(function (str) {
                      return str.length;
                    }, array));
                  }(lines));

                  var convertRange = function convertRange(rng) {
                    var s = (0, _codegen.offsetToLocation)(1, rng.Start, lengths);
                    var e = (0, _codegen.offsetToLocation)(1, rng.End, lengths);
                    var res = {};
                    res.startColumn = s.column + 1;
                    res.startLineNumber = s.line;
                    res.endColumn = e.column + 1;
                    res.endLineNumber = e.line;
                    return res;
                  };

                  if (optMembers != null) {
                    var nameRange = optMembers[1];
                    var members = optMembers[2];
                    var nameRange_1 = convertRange(nameRange);

                    var completion = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                      return _fableCore.Seq.map(function (m) {
                        var ci = {};
                        var patternInput = m.Case === "Property" ? [m.Fields[0], 9] : [m.Fields[0], 1];
                        ci.kind = patternInput[1];
                        ci.label = patternInput[0];
                        ci.insertText = (0, _typechecker.needsEscaping)(patternInput[0]) ? "'" + patternInput[0] + "'" : patternInput[0];
                        ci.filterText = patternInput[0];

                        if (m.Case === "Method") {
                          var patternInput_1 = function () {
                            var folder = function folder(tupledArg) {
                              return function (s) {
                                return tupledArg[1].length > 100 ? [_fableCore.List.ofArray([tupledArg[1]], tupledArg[0]), s] : [tupledArg[0], tupledArg[1] === "" ? s : tupledArg[1] + "," + s];
                              };
                            };

                            var arg = [new _fableCore.List(), ""];
                            return function (source) {
                              return _fableCore.Seq.fold(function ($var22, $var23) {
                                return folder($var22)($var23);
                              }, [arg[0], arg[1]], source);
                            };
                          }()(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
                            return _fableCore.Seq.collect(function (matchValue) {
                              return _fableCore.Seq.singleton((matchValue[1] ? "?" : "") + matchValue[0]);
                            }, m.Fields[2]);
                          })));

                          var args = _fableCore.String.join(",\n", _fableCore.List.reverse(_fableCore.List.ofArray([patternInput_1[1]], patternInput_1[0])));

                          ci.documentation = "(" + args + ")";
                        }

                        var eo = {};

                        if ((0, _typechecker.needsEscaping)(patternInput[0])) {
                          eo.text = "'" + patternInput[0] + "'";
                        } else {
                          eo.text = patternInput[0];
                        }

                        eo.range = nameRange_1;
                        ci.textEdit = eo;
                        return ci;
                      }, members);
                    }));

                    _extensions.Log.trace("completions", "returning %O", Array.from(completion));

                    return builder_.Return(Array.from(completion));
                  } else {
                    _extensions.Log.trace("completions", "no members at %s", absPosition);

                    return builder_.Return(Array.from(new _fableCore.List()));
                  }
                });
              });
            });
          }), function (_arg4) {
            _extensions.Log.exn("completions", "type checking failed %O", _arg4);

            return builder_.Return(Array.from(new _fableCore.List()));
          });
        });
      }(_fableCore.defaultAsyncBuilder));
    }), _defineProperty(_ref, "resolveCompletionItem", function resolveCompletionItem(item, token) {
      return item;
    }), _defineEnumerableProperties(_ref, _mutatorMap), _ref;
  }

  function setupMonacoServices(globals) {
    var lang = {};
    lang.id = "thegamma";

    _monaco.languages.setTokensProvider("thegamma", tokensProvider);

    _monaco.languages.registerCompletionItemProvider("thegamma", createCompletionProvider(globals));

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