(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../thegamma/extensions", "fable-core", "../thegamma/typechecker", "../thegamma/providers", "../thegamma/pivot", "../thegamma/ast", "../gui/html", "../thegamma/services", "../thegamma/codegen", "../libraries/series", "../thegamma/restruntime", "../libraries/google/charts", "../libraries/tables", "../libraries/maps", "../thegamma/monaco", "../thegamma/editors", "core-js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../thegamma/extensions"), require("fable-core"), require("../thegamma/typechecker"), require("../thegamma/providers"), require("../thegamma/pivot"), require("../thegamma/ast"), require("../gui/html"), require("../thegamma/services"), require("../thegamma/codegen"), require("../libraries/series"), require("../thegamma/restruntime"), require("../libraries/google/charts"), require("../libraries/tables"), require("../libraries/maps"), require("../thegamma/monaco"), require("../thegamma/editors"), require("core-js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extensions, global.fableCore, global.typechecker, global.providers, global.pivot, global.ast, global.html, global.services, global.codegen, global.series, global.restruntime, global.charts, global.tables, global.maps, global.monaco, global.editors, global.coreJs);
    global.main = mod.exports;
  }
})(this, function (exports, _extensions, _fableCore, _typechecker, _providers, _pivot, _ast, _html, _services, _codegen, _series, _restruntime, _charts, _tables, _maps, _monaco, _editors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.globalExprs = exports.globalTypes = exports.types = exports.ProvidedTypes = exports.services = undefined;
  exports.findElements = findElements;
  exports.tryFindChildElement = tryFindChildElement;
  exports.findChildElement = findChildElement;
  exports.withClass = withClass;
  exports.callShowMethod = callShowMethod;
  exports.renderErrors = renderErrors;
  exports.setupEditor = setupEditor;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var services = exports.services = (0, _extensions.isLocalHost)() ? "http://127.0.0.1:10042/" : "http://thegamma-services.azurewebsites.net/";

  var ProvidedTypes = exports.ProvidedTypes = function ProvidedTypes(lookupNamed, globals) {
    _classCallCheck(this, ProvidedTypes);

    this.LookupNamed = lookupNamed;
    this.Globals = globals;
  };

  _fableCore.Util.setInterfaces(ProvidedTypes.prototype, ["FSharpRecord"], "Main.ProvidedTypes");

  var types = exports.types = function (arg00) {
    return function (arg10) {
      return (0, _extensions.Async$2EStartAsFuture$2EStatic)(arg00, arg10);
    };
  }("types")(function (builder_) {
    return builder_.Delay(function (unitVar) {
      var named = _fableCore.Map.create(null, new _fableCore.GenericComparer(function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      }));

      var lookupNamed = function lookupNamed(n) {
        return function (tyargs) {
          var matchValue = _fableCore.Map.tryFind(n, named);

          if (matchValue == null) {
            _extensions.Log.error("Could not find named type '%s'", n);

            throw _fableCore.String.fsFormat("Could not find named type '%s'")(function (x) {
              return x;
            })(n);
          } else {
            var tya = matchValue[1];
            var r = matchValue[0];

            if (tya.length !== tyargs.length) {
              _extensions.Log.error("Named type '%s' has mismatching length of type arguments", n);

              throw _fableCore.String.fsFormat("Named type '%s' has mismatching length of type arguments")(function (x) {
                return x;
              })(n);
            }

            return (0, _typechecker.applyTypes)(_fableCore.Map.create(_fableCore.Seq.toList(_fableCore.Seq.zip(tya, tyargs)), new _fableCore.GenericComparer(function (x, y) {
              return x < y ? -1 : x > y ? 1 : 0;
            })), r);
          }
        };
      };

      var restTys = _fableCore.List.ofArray([_providers.RestProvider.provideRestType(lookupNamed, "olympics1", services + "olympics", ""), _providers.RestProvider.provideRestType(lookupNamed, "olympics", services + "pivot", "source=" + services + "olympics"), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy1", services + "smlouvy", ""), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy2", services + "pivot", "source=" + services + "smlouvy"), _providers.RestProvider.provideRestType(lookupNamed, "adventure", services + "adventure", ""), _providers.RestProvider.provideRestType(lookupNamed, "world", services + "worldbank", ""), (0, _pivot.providePivotType)(services + "pdata/olympics", "olympics2", lookupNamed, _fableCore.List.ofArray([["Games", "string"], ["Year", "num"], ["Sport", "string"], ["Discipline", "string"], ["Athlete", "string"], ["Team", "string"], ["Gender", "string"], ["Event", "string"], ["Medal", "string"], ["Gold", "num"], ["Silver", "num"], ["Bronze", "num"]])), (0, _pivot.providePivotType)(services + "pdata/smlouvy", "smlouvy", lookupNamed, _fableCore.List.ofArray([["Uzavřeno", "string"], ["Publikováno", "string"], ["Hodnota", "num"], ["Chybí hodnota", "string"], ["Subjekt", "string"], ["Útvar", "string"], ["Schválil", "string"], ["Předmět", "string"], ["Odkaz", "string"], ["Platnost", "string"], ["Příjemci", "string"], ["Příjemci (IČO)", "string"]])), new _providers.ProvidedType("NamedType", ["value", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["seq", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["async", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])])]);

      return builder_.Bind(_providers.FSharpProvider.provideFSharpTypes(lookupNamed, "/ext/libraries.json?" + String(function () {
        var copyOfStruct = _fableCore.Date.now();

        return _fableCore.Date.ticks(copyOfStruct);
      }())), function (_arg1) {
        var allTys = _fableCore.List.append(restTys, _arg1);

        named = _fableCore.Map.create(_fableCore.Seq.choose(function (_arg2) {
          return _arg2.Case === "NamedType" ? [_arg2.Fields[0], [_arg2.Fields[2], _arg2.Fields[1]]] : null;
        }, allTys), new _fableCore.GenericComparer(function (x, y) {
          return x < y ? -1 : x > y ? 1 : 0;
        }));

        var globals = _fableCore.Map.create(_fableCore.List.choose(function (_arg3) {
          return _arg3.Case === "GlobalValue" ? [_arg3.Fields[0], [_arg3.Fields[1], _arg3.Fields[2]]] : null;
        }, allTys), new _fableCore.GenericComparer(function (x, y) {
          return x < y ? -1 : x > y ? 1 : 0;
        }));

        return builder_.Return(new ProvidedTypes(lookupNamed, globals));
      });
    });
  }(_fableCore.defaultAsyncBuilder));

  var globalTypes = exports.globalTypes = function (arg00) {
    return function (arg10) {
      return (0, _extensions.Async$2EStartAsFuture$2EStatic)(arg00, arg10);
    };
  }("global types")(function (builder_) {
    return builder_.Delay(function (unitVar) {
      return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(types), function (_arg1) {
        return builder_.Return(_fableCore.Map.map(function (_arg2, tupledArg) {
          return tupledArg[1];
        }, _arg1.Globals));
      });
    });
  }(_fableCore.defaultAsyncBuilder));

  var globalExprs = exports.globalExprs = function (arg00) {
    return function (arg10) {
      return (0, _extensions.Async$2EStartAsFuture$2EStatic)(arg00, arg10);
    };
  }("global exps")(function (builder_) {
    return builder_.Delay(function (unitVar) {
      return builder_.Bind((0, _extensions.Async$2EAwaitFuture$2EStatic)(types), function (_arg1) {
        return builder_.Return(_fableCore.Map.map(function (_arg2, tupledArg) {
          return tupledArg[0];
        }, _arg1.Globals));
      });
    });
  }(_fableCore.defaultAsyncBuilder));

  function findElements(f, el) {
    var loop = function loop(acc) {
      return function (el_1) {
        return el_1 == null ? acc : function () {
          var acc_1 = (el_1.nodeType === 1 ? f(el_1) : false) ? _fableCore.List.ofArray([el_1], acc) : acc;
          return loop(loop(acc_1)(el_1.firstChild))(el_1.nextSibling);
        }();
      };
    };

    return loop(new _fableCore.List())(el.firstChild);
  }

  function tryFindChildElement(f, el) {
    var loop = function loop(el_1) {
      return el_1 == null ? null : (el_1.nodeType === 1 ? f(el_1) : false) ? el_1 : function () {
        var matchValue = loop(el_1.firstChild);

        if (matchValue == null) {
          return loop(el_1.nextSibling);
        } else {
          return matchValue;
        }
      }();
    };

    return loop(el.firstChild);
  }

  function findChildElement(f, e) {
    return tryFindChildElement(f, e);
  }

  function withClass(cls, el) {
    return el.classList.contains(cls);
  }

  function callShowMethod(outId, cmd) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return cmd.Command.Case === "Expr" ? builder_.Bind((0, _typechecker.getObjectMembers)(cmd.Command.Fields[0].Type), function (_arg1) {
          return _arg1.Case === "Members" ? function () {
            var hasShow = _arg1.Fields[0].some(function (_arg2) {
              var $target1 = function $target1() {
                return false;
              };

              if (_arg2.Case === "Method") {
                if (_arg2.Fields[0] === "show") {
                  if (_arg2.Fields[1].tail == null) {
                    if (_arg2.Fields[2].tail != null) {
                      if (_arg2.Fields[2].head[2].Case === "Primitive") {
                        if (_arg2.Fields[2].head[2].Fields[0] === "string") {
                          if (_arg2.Fields[2].tail.tail == null) {
                            return true;
                          } else {
                            return $target1();
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
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              } else {
                return $target1();
              }
            });

            if (hasShow) {
              var rng = new _ast.Range(cmd.Command.Fields[0].Range.End, cmd.Command.Fields[0].Range.End);
              var outExpr = new _ast.Expr(new _ast.ExprKind("String", [outId]), rng, new _ast.Type("Primitive", ["string"]));

              var args = _fableCore.List.ofArray([new _ast.Argument(null, outExpr)]);

              var newE = new _ast.Expr(new _ast.ExprKind("Call", [cmd.Command.Fields[0], new _ast.Name("show", rng), args]), cmd.Command.Fields[0].Range, cmd.Command.Fields[0].Type);
              return builder_.Return(new _ast.Command(new _ast.CommandKind("Expr", [newE]), cmd.Range));
            } else {
              return builder_.Return(cmd);
            }
          }() : builder_.Return(cmd);
        }) : builder_.Return(cmd);
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function renderErrors(article, el, source, errors) {
    if (!_fableCore.Seq.isEmpty(errors)) {
      _extensions.Log.event("compiler", "errors", article, {
        source: source,
        errors: Int32Array.from(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.map(function (e) {
            return e.Number;
          }, errors);
        }))
      });
    }

    (function (dom) {
      (0, _html.renderTo)(el, dom);
    })(function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("ul")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "error")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.map(function (e) {
        return function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("span")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "err")]))(_fableCore.List.ofArray([(0, _html.text)(_fableCore.String.fsFormat("error %d")(function (x) {
          return x;
        })(e.Number))])), (0, _html.text)(" "), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("span")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "loc")]))(_fableCore.List.ofArray([(0, _html.text)(_fableCore.String.fsFormat("at line %d col %d")(function (x) {
          return x;
        })(e.Range.Start.Line)(e.Range.Start.Column))])), (0, _html.text)(": " + e.Message)]));
      }, _fableCore.Seq.sortWith(function (x, y) {
        return _fableCore.Util.compare(function (e) {
          return e.Range.Start;
        }(x), function (e) {
          return e.Range.Start;
        }(y));
      }, errors));
    }))));
  }

  function setupEditor(parent) {
    var source = _fableCore.String.trim(findChildElement(function () {
      var cls = "ia-source";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent).innerText, "both");

    var compiled = function () {
      var $var1 = tryFindChildElement(function () {
        var cls = "ia-compiled";
        return function (el) {
          return withClass(cls, el);
        };
      }(), parent);

      if ($var1 != null) {
        return function (el) {
          return _fableCore.String.trim(el.innerText, "both");
        }($var1);
      } else {
        return $var1;
      }
    }();

    var outputId = findChildElement(function () {
      var cls = "ia-output";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent).id;
    var runBtn = findChildElement(function () {
      var cls = "ia-run";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var shareBtn = findChildElement(function () {
      var cls = "ia-share";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var showCodeBtn = findChildElement(function () {
      var cls = "ia-show-source";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var showOptionsBtn = tryFindChildElement(function () {
      var cls = "ia-show-options";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var editorEl = findChildElement(function () {
      var cls = "ia-editor";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var monacoEl = findChildElement(function () {
      var cls = "ia-monaco";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var errorsEl = findChildElement(function () {
      var cls = "ia-errors";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var optionsEl = findChildElement(function () {
      var cls = "ia-options";
      return function (el) {
        return withClass(cls, el);
      };
    }(), parent);
    var article = parent.dataset["article"];
    var checkingService = new _services.CheckingService(article, globalTypes);
    var editorService = new _services.EditorService(article, function (arg00) {
      return checkingService.TypeCheck(arg00);
    }, 2000);

    _fableCore.Observable.add(function (tupledArg) {
      renderErrors(article, errorsEl, tupledArg[0], tupledArg[1]);
    }, checkingService.ErrorsReported);

    var run = function run(text) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          _extensions.Log.event("compiler", "run", article, text);

          return builder_.Bind(function (builder__1) {
            return builder__1.Delay(function (unitVar_1) {
              var $target1 = function $target1() {
                return builder__1.Bind(checkingService.TypeCheck(text), function (_arg1) {
                  return builder__1.Bind(_extensions.Async.map(function (cmd) {
                    return callShowMethod(outputId, cmd);
                  }, _arg1[1].Body), function (_arg2) {
                    var prog = new _ast.Program(_arg2, _arg1[1].Range);
                    return builder__1.ReturnFrom((0, _codegen.compileAndRun)(globalExprs, text, prog));
                  });
                });
              };

              if (compiled != null) {
                if (text === source) {
                  var compiled_1 = compiled;
                  return builder__1.Return(compiled_1);
                } else {
                  return $target1();
                }
              } else {
                return $target1();
              }
            });
          }(_fableCore.defaultAsyncBuilder), function (_arg3) {
            var s = _series.series.create(function (builder__1) {
              return builder__1.Delay(function (unitVar_1) {
                return builder__1.Return([]);
              });
            }(_fableCore.defaultAsyncBuilder), "", "", "");

            new _restruntime.RuntimeContext("lol", "", "troll");

            (function (c) {
              return function (s_1) {
                return (0, _restruntime.trimLeft)(c, s_1);
              };
            });

            (function (arg00) {
              return _charts.chart.bar(arg00);
            });

            _tables.table.create(s);

            _maps.timeline.create(s);

            _series.series.values(new Int32Array([1]));

            eval(_arg3);
            return builder_.Zero();
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    setRunner(article, function (unitVar0) {
      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(run(source));
    });
    var ed = new _fableCore.Lazy(function (unitVar0) {
      var ed = (0, _monaco.createMonacoEditor)(monacoEl.id, source, function (opts) {
        opts.fontFamily = "Inconsolata";
        opts.fontSize = 15;
        opts.lineHeight = 20;
      });

      var resizeEditor = function resizeEditor(text) {
        var dim = {};
        dim.width = parent.clientWidth - 40;

        if (100 > 20 + text.split("\n").length * 20) {
          dim.height = 100;
        } else {
          dim.height = 20 + text.split("\n").length * 20;
        }

        ed.layout(dim);
        monacoEl.style.height = String(dim.height) + "px";
      };

      ed.getModel().onDidChangeContent(function (_arg1) {
        var text = ed.getModel().getValue(1, false);
        editorService.UpdateSource(text);
        resizeEditor(text);
      });
      resizeEditor(source);
      return ed;
    });

    var getText = function getText(unitVar0) {
      return !ed.isValueCreated ? source : ed.value.getModel().getValue(1, false);
    };

    var setText = function setText(edit) {
      return function (membr) {
        return function (t) {
          _extensions.Log.event("options", "set-text", article, {
            edit: edit,
            member: membr
          });

          ed.value.getModel().setValue(t);

          if (function () {
            return showOptionsBtn != null;
          }()) {
            editorService.UpdateSource(t, true);
          }

          (function (arg00) {
            _fableCore.Async.startImmediate(arg00);
          })(run(t));
        };
      };
    };

    var optionsVisible = false;
    var editorVisible = false;

    var showOrHideActions = function showOrHideActions(unitVar0) {
      var vis = (optionsVisible ? true : editorVisible) ? "inline" : "none";
      var modf = getText() !== source;
      runBtn.style.display = vis;

      if (modf) {
        shareBtn.style.display = "inline";
      } else {
        shareBtn.style.display = vis;
      }
    };

    _fableCore.Seq.iterate(function (btn) {
      _fableCore.Observable.add(function (eds) {
        (function (dom) {
          (0, _html.renderTo)(optionsEl, dom);
        })(function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "ia-editor-panel")]))(_fableCore.List.map(function () {
          var typeCheck = function typeCheck(arg00) {
            return checkingService.IsWellTyped(arg00);
          };

          var setValue = setText;
          var origText = getText();
          return function (_arg1) {
            return (0, _editors.renderEditor)(typeCheck, setValue, origText, _arg1);
          };
        }(), _fableCore.Seq.toList(_fableCore.Seq.sortWith(function (x, y) {
          return _fableCore.Util.compare(function (ed_1) {
            return ed_1.Range.Start;
          }(x), function (ed_1) {
            return ed_1.Range.Start;
          }(y));
        }, eds)))));
      }, editorService.EditorsUpdated);

      btn.onclick = function (_arg2) {
        optionsVisible = !optionsVisible;
        showOrHideActions();

        if (optionsVisible) {
          optionsEl.style.display = "block";
        } else {
          optionsEl.style.display = "none";
        }

        _extensions.Log.event("gui", "options", article, optionsVisible);

        if (optionsVisible) {
          editorService.UpdateSource(getText());
        }

        return null;
      };
    }, function () {
      var $var2 = showOptionsBtn;

      if ($var2 != null) {
        return [$var2];
      } else {
        return [];
      }
    }());

    var switchEditor = function switchEditor(unitVar0) {
      editorVisible = !editorVisible;
      showOrHideActions();

      if (editorVisible) {
        editorEl.style.display = "block";
      } else {
        editorEl.style.display = "none";
      }

      _extensions.Log.event("gui", "editor", article, editorVisible);

      if (editorVisible) {
        ed.value;
      }
    };

    showCodeBtn.onclick = function (_arg3) {
      switchEditor();
      return null;
    };

    if (source.indexOf("empty.create") >= 0) {
      switchEditor();
    }

    shareBtn.onclick = function (e) {
      var text = getText();

      _extensions.Log.event("gui", "share", article, text);

      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind(checkingService.TypeCheck(text), function (_arg7) {
            return builder_.Bind(_extensions.Async.map(function () {
              var outId = "output-id-placeholder";
              return function (cmd) {
                return callShowMethod(outId, cmd);
              };
            }(), _arg7[1].Body), function (_arg8) {
              var prog = new _ast.Program(_arg8, _arg7[1].Range);
              return builder_.Bind((0, _codegen.compileAndRun)(globalExprs, text, prog), function (_arg9) {
                return !_arg7[0] ? function () {
                  cannotShareSnippet();
                  return builder_.Zero();
                }() : function () {
                  shareSnippet(text, _arg9);
                  return builder_.Zero();
                }();
              });
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder));

      return null;
    };

    runBtn.onclick = function (e) {
      _extensions.Log.event("gui", "run", article, "click");

      return function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      }(run(getText()));
    };
  }

  (0, _monaco.setupMonacoServices)(globalTypes);
  {
    var inputSequence = findElements(function () {
      var cls = "ia-figure";
      return function (el) {
        return withClass(cls, el);
      };
    }(), document.body);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = inputSequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;
        setupEditor(el);
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
  }
});
//# sourceMappingURL=main.js.map