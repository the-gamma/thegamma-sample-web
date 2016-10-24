(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../libraries/common", "fable-core", "../thegamma/ast/ast", "../thegamma/providers/providers", "../thegamma/providers/pivot", "../thegamma/analyzer/interpreter", "../thegamma/ast/typeops", "../libraries/tables", "../thegamma/analyzer/typechecker", "../thegamma/ast/astops", "../thegamma/monaco", "../thegamma/parser/parser", "../gui/html", "../thegamma/services", "../thegamma/codegen/codegen", "../libraries/series", "../thegamma/codegen/runtime", "../libraries/google/charts", "../libraries/maps", "../thegamma/editors", "core-js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../libraries/common"), require("fable-core"), require("../thegamma/ast/ast"), require("../thegamma/providers/providers"), require("../thegamma/providers/pivot"), require("../thegamma/analyzer/interpreter"), require("../thegamma/ast/typeops"), require("../libraries/tables"), require("../thegamma/analyzer/typechecker"), require("../thegamma/ast/astops"), require("../thegamma/monaco"), require("../thegamma/parser/parser"), require("../gui/html"), require("../thegamma/services"), require("../thegamma/codegen/codegen"), require("../libraries/series"), require("../thegamma/codegen/runtime"), require("../libraries/google/charts"), require("../libraries/maps"), require("../thegamma/editors"), require("core-js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.common, global.fableCore, global.ast, global.providers, global.pivot, global.interpreter, global.typeops, global.tables, global.typechecker, global.astops, global.monaco, global.parser, global.html, global.services, global.codegen, global.series, global.runtime, global.charts, global.maps, global.editors, global.coreJs);
    global.main = mod.exports;
  }
})(this, function (exports, _common, _fableCore, _ast, _providers, _pivot, _interpreter, _typeops, _tables, _typechecker, _astops, _monaco, _parser, _html, _services, _codegen, _series, _runtime, _charts, _maps, _editors) {
  "use strict";

  exports.__esModule = true;
  exports.servicesLookup = exports.PreviewService = exports.marker = exports.PivotEditorState = exports.PivotEditorAction = exports.PivotEditorMenus = exports.PivotSection = exports.globalExprs = exports.globalTypes = exports.types = exports.ProvidedTypes = exports.services = undefined;
  exports.findElements = findElements;
  exports.tryFindChildElement = tryFindChildElement;
  exports.findChildElement = findChildElement;
  exports.withClass = withClass;
  exports.pickMetaByType = pickMetaByType;
  exports.pickPivotFields = pickPivotFields;
  exports.pickPivotTransformations = pickPivotTransformations;
  exports.tryFindPreview = tryFindPreview;
  exports.commandAtLocation = commandAtLocation;
  exports.transformName = transformName;
  exports.createPivotSections = createPivotSections;
  exports.collectChain = collectChain;
  exports.collectFirstChain = collectFirstChain;
  exports.updateBody = updateBody;
  exports.hideMenus = hideMenus;
  exports.editorLocation = editorLocation;
  exports.selectName = selectName;
  exports.tryTransformChain = tryTransformChain;
  exports.replaceAndSelectMarker = replaceAndSelectMarker;
  exports.reconstructChain = reconstructChain;
  exports.createChainNode = createChainNode;
  exports.updatePivotState = updatePivotState;
  exports.renderNodeList = renderNodeList;
  exports.renderContextMenu = renderContextMenu;
  exports.renderAddPropertyMenu = renderAddPropertyMenu;
  exports.renderSection = renderSection;
  exports.renderPivot = renderPivot;
  exports.callShowMethod = callShowMethod;
  exports.renderErrors = renderErrors;
  exports.setupEditor = setupEditor;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var services = exports.services = (0, _common.isLocalHost)() ? "http://127.0.0.1:10042/" : "http://thegamma-services.azurewebsites.net/";

  var ProvidedTypes = exports.ProvidedTypes = function ProvidedTypes(lookupNamed, globals) {
    _classCallCheck(this, ProvidedTypes);

    this.LookupNamed = lookupNamed;
    this.Globals = globals;
  };

  _fableCore.Util.setInterfaces(ProvidedTypes.prototype, ["FSharpRecord"], "Main.ProvidedTypes");

  var types = exports.types = function (arg00) {
    return function (arg10) {
      return (0, _common.Async$2EStartAsNamedFuture$2EStatic)(arg00, arg10);
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
            _common.Log.error("Could not find named type '%s'", n);

            throw _fableCore.String.fsFormat("Could not find named type '%s'")(function (x) {
              return x;
            })(n);
          } else {
            var tya = matchValue[1];
            var r = matchValue[0];

            if (tya.length !== tyargs.length) {
              _common.Log.error("Named type '%s' has mismatching length of type arguments", n);

              throw _fableCore.String.fsFormat("Named type '%s' has mismatching length of type arguments")(function (x) {
                return x;
              })(n);
            }

            if (tya.length > 0) {
              return new _ast.Type("App", [r, tyargs]);
            } else {
              return r;
            }
          }
        };
      };

      var restTys = _fableCore.List.ofArray([_providers.RestProvider.provideRestType(lookupNamed, "olympics1", services + "olympics", ""), _providers.RestProvider.provideRestType(lookupNamed, "olympics3", services + "pivot", "source=" + services + "olympics"), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy1", services + "smlouvy", ""), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy2", services + "pivot", "source=" + services + "smlouvy"), _providers.RestProvider.provideRestType(lookupNamed, "adventure", services + "adventure", ""), _providers.RestProvider.provideRestType(lookupNamed, "world", services + "worldbank", ""), (0, _pivot.providePivotType)(services + "pdata/olympics", "olympics", lookupNamed, _fableCore.List.ofArray([["Games", new _ast.PrimitiveType("String", [])], ["Year", new _ast.PrimitiveType("Number", [])], ["Sport", new _ast.PrimitiveType("String", [])], ["Discipline", new _ast.PrimitiveType("String", [])], ["Athlete", new _ast.PrimitiveType("String", [])], ["Team", new _ast.PrimitiveType("String", [])], ["Gender", new _ast.PrimitiveType("String", [])], ["Event", new _ast.PrimitiveType("String", [])], ["Medal", new _ast.PrimitiveType("String", [])], ["Gold", new _ast.PrimitiveType("Number", [])], ["Silver", new _ast.PrimitiveType("Number", [])], ["Bronze", new _ast.PrimitiveType("Number", [])]])), (0, _pivot.providePivotType)(services + "pdata/smlouvy", "smlouvy", lookupNamed, _fableCore.List.ofArray([["Uzav\u0159eno", new _ast.PrimitiveType("String", [])], ["Publikov\xE1no", new _ast.PrimitiveType("String", [])], ["Hodnota", new _ast.PrimitiveType("Number", [])], ["Chyb\xED hodnota", new _ast.PrimitiveType("String", [])], ["Subjekt", new _ast.PrimitiveType("String", [])], ["\xDAtvar", new _ast.PrimitiveType("String", [])], ["Schv\xE1lil", new _ast.PrimitiveType("String", [])], ["P\u0159edm\u011Bt", new _ast.PrimitiveType("String", [])], ["Odkaz", new _ast.PrimitiveType("String", [])], ["Platnost", new _ast.PrimitiveType("String", [])], ["P\u0159\xEDjemci", new _ast.PrimitiveType("String", [])], ["P\u0159\xEDjemci (I\u010CO)", new _ast.PrimitiveType("String", [])]])), new _providers.ProvidedType("NamedType", ["value", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["object", new _fableCore.List(), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["seq", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["async", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])])]);

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

        var globals = _fableCore.List.choose(function (_arg3) {
          return _arg3.Case === "GlobalValue" ? [_arg3.Fields[0], _arg3.Fields[1], _arg3.Fields[2], _arg3.Fields[3]] : null;
        }, allTys);

        return builder_.Return(new ProvidedTypes(lookupNamed, globals));
      });
    });
  }(_fableCore.AsyncBuilder.singleton));

  var globalTypes = exports.globalTypes = function (arg00) {
    return function (arg10) {
      return (0, _common.Async$2EStartAsNamedFuture$2EStatic)(arg00, arg10);
    };
  }("global types")(function (builder_) {
    return builder_.Delay(function (unitVar) {
      return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(types), function (_arg1) {
        _common.Log.trace("typechecker", "Global values: %O", Array.from(_arg1.Globals));

        return builder_.Return(_fableCore.List.map(function (tupledArg) {
          return (0, _interpreter.globalEntity)(tupledArg[0], tupledArg[1], tupledArg[3], tupledArg[2]);
        }, _arg1.Globals));
      });
    });
  }(_fableCore.AsyncBuilder.singleton));

  var globalExprs = exports.globalExprs = function (arg00) {
    return function (arg10) {
      return (0, _common.Async$2EStartAsNamedFuture$2EStatic)(arg00, arg10);
    };
  }("global exps")(function (builder_) {
    return builder_.Delay(function (unitVar) {
      return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(types), function (_arg1) {
        return builder_.Return(_fableCore.Map.create(_fableCore.List.map(function (tupledArg) {
          return [tupledArg[0], tupledArg[2]];
        }, _arg1.Globals), new _fableCore.GenericComparer(function (x, y) {
          return x < y ? -1 : x > y ? 1 : 0;
        })));
      });
    });
  }(_fableCore.AsyncBuilder.singleton));

  function findElements(f, el) {
    var loop = function loop(acc) {
      return function (el_1) {
        return el_1 == null ? acc : function () {
          var acc_1 = (el_1.nodeType === 1 ? f(el_1) : false) ? new _fableCore.List(el_1, acc) : acc;
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

  function pickMetaByType(ctx, typ, metas) {
    return _fableCore.Seq.tryPick(function (m) {
      return (m.Context === ctx ? m.Type === typ : false) ? m.Data : null;
    }, metas);
  }

  function pickPivotFields(expr) {
    var matchValue = expr.Entity;

    var $target0 = function $target0(m) {
      var matchValue_1 = pickMetaByType("http://schema.thegamma.net/pivot", "Fields", m);

      if (matchValue_1 != null) {
        return matchValue_1;
      }
    };

    var $target1 = function $target1() {
      return null;
    };

    if (matchValue != null) {
      if (matchValue.Kind.Case === "ChainElement") {
        return $target0(matchValue.Meta);
      } else {
        if (matchValue.Kind.Case === "GlobalValue") {
          return $target0(matchValue.Meta);
        } else {
          if (matchValue.Kind.Case === "Variable") {
            return $target0(matchValue.Kind.Fields[1].Meta);
          } else {
            return $target1();
          }
        }
      }
    } else {
      return $target1();
    }
  }

  function pickPivotTransformations(expr) {
    var matchValue = expr.Entity;

    var $target2 = function $target2() {
      return null;
    };

    if (matchValue != null) {
      if (matchValue.Kind.Case === "ChainElement") {
        var m = matchValue.Meta;
        var matchValue_1 = pickMetaByType("http://schema.thegamma.net/pivot", "Transformations", m);

        if (matchValue_1 != null) {
          return matchValue_1;
        }
      } else {
        if (matchValue.Kind.Case === "GlobalValue") {
          var _m = matchValue.Meta;
          return new _fableCore.List();
        } else {
          return $target2();
        }
      }
    } else {
      return $target2();
    }
  }

  function tryFindPreview(globals, ent) {
    var nm = new _ast.Name("preview");

    var matchValue = function () {
      var $var78 = ent.Type;

      if ($var78 != null) {
        return function (t) {
          return (0, _typeops.reduceType)(t);
        }($var78);
      } else {
        return $var78;
      }
    }();

    var $target0 = function $target0() {
      var res = (0, _interpreter.evaluate)(globals, ent);

      var $target1 = function $target1() {
        return null;
      };

      if (res != null) {
        if (res.Preview != null) {
          var _ret = function () {
            var p = res.Preview;
            return {
              v: function v(id) {
                _tables.table.create(p).set(null, false).show(id);
              }
            };
          }();

          if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    };

    var $target1 = function $target1() {
      return null;
    };

    if (matchValue != null) {
      if (matchValue.Case === "Object") {
        var activePatternResult174289 = (0, _typechecker.$FindMethod$_$)(nm, matchValue.Fields[0]);

        if (activePatternResult174289 != null) {
          return $target0();
        } else {
          var activePatternResult174290 = (0, _typechecker.$FindProperty$_$)(nm, matchValue.Fields[0]);

          if (activePatternResult174290 != null) {
            return $target0();
          } else {
            return $target1();
          }
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function commandAtLocation(loc, program) {
    return _fableCore.Seq.tryFind(function (cmd) {
      return cmd.Range.Start <= loc ? cmd.Range.End + 1 >= loc : false;
    }, program.Body.Node);
  }

  function transformName(_arg1) {
    return _arg1.Case === "Empty" ? "empty" : _arg1.Case === "FilterBy" ? "filter by" : _arg1.Case === "GetSeries" ? "get series" : _arg1.Case === "GetTheData" ? "get the data" : _arg1.Case === "GroupBy" ? "group by" : _arg1.Case === "Paging" ? "paging" : _arg1.Case === "SortBy" ? "sort by" : "drop columns";
  }

  var PivotSection = exports.PivotSection = function PivotSection(transformation, nodes) {
    _classCallCheck(this, PivotSection);

    this.Transformation = transformation;
    this.Nodes = nodes;
  };

  _fableCore.Util.setInterfaces(PivotSection.prototype, ["FSharpRecord"], "Main.PivotSection");

  function createPivotSections(tfss) {
    var loop = function loop(acc) {
      return function (tupledArg) {
        return function (_arg1) {
          var $target1 = function $target1() {
            return _arg1.tail == null ? function () {
              var current = new PivotSection(tupledArg[0], _fableCore.List.reverse(tupledArg[1]));
              return _fableCore.List.reverse(new _fableCore.List(current, acc));
            }() : function () {
              var tfs = _arg1.head[1];
              var e = _arg1.head[0];
              var current = new PivotSection(tupledArg[0], _fableCore.List.reverse(tupledArg[1]));
              return loop(new _fableCore.List(current, acc))([tfs.head, _fableCore.List.ofArray([e]), tfs.length])(_arg1.tail);
            }();
          };

          if (_arg1.tail != null) {
            if (function () {
              var tfs = _arg1.head[1];
              var e = _arg1.head[0];

              if (transformName(tfs.head) === transformName(tupledArg[0])) {
                return tfs.length === tupledArg[2];
              } else {
                return false;
              }
            }()) {
              var e = _arg1.head[0];
              var tfs = _arg1.head[1];
              var _tfss_ = _arg1.tail;
              return loop(acc)([tfs.head, new _fableCore.List(e, tupledArg[1]), tupledArg[2]])(_tfss_);
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        };
      };
    };

    var tfss_1 = _fableCore.List.choose(function (node) {
      var matchValue = pickPivotTransformations(node);

      if (matchValue == null) {
        return null;
      } else {
        var tfs = _fableCore.List.filter(function (_arg2) {
          return _arg2.Case === "Empty" ? false : true;
        }, matchValue);

        if (tfs.tail == null) {
          return null;
        } else {
          return [node, tfs];
        }
      }
    }, tfss);

    if (tfss_1.tail == null) {
      return new _fableCore.List();
    } else {
      var tfs = tfss_1.head[1];
      var e = tfss_1.head[0];
      return loop(new _fableCore.List())([tfs.head, _fableCore.List.ofArray([e]), tfs.length])(tfss_1.tail);
    }
  }

  function collectChain(acc, node) {
    var $target0 = function $target0(e, n) {
      return collectChain(new _fableCore.List([n.Range.Start, node], acc), e);
    };

    var $target2 = function $target2() {
      return null;
    };

    if (node.Node.Case === "Call") {
      if (node.Node.Fields[0] != null) {
        return $target0(node.Node.Fields[0], node.Node.Fields[1]);
      } else {
        return $target2();
      }
    } else {
      if (node.Node.Case === "Property") {
        return $target0(node.Node.Fields[0], node.Node.Fields[1]);
      } else {
        if (node.Node.Case === "Variable") {
          var n = node.Node.Fields[0];
          return new _fableCore.List([n.Range.Start, node], acc);
        } else {
          return $target2();
        }
      }
    }
  }

  function collectFirstChain(expr) {
    var matchValue = collectChain(new _fableCore.List(), expr);

    var $target1 = function $target1() {
      var activePatternResult174308 = (0, _astops.$ExprLeaf$ExprNode$)(expr.Node);

      if (activePatternResult174308.Case === "Choice2Of2") {
        var _ret2 = function () {
          var es = activePatternResult174308.Fields[0][0];
          var ns = activePatternResult174308.Fields[0][1];
          {
            var _ret3 = function () {
              var loop = function loop(acc) {
                return function (es_1) {
                  return es_1.tail != null ? function () {
                    var matchValue_1 = collectFirstChain(es_1.head);

                    if (matchValue_1 != null) {
                      var _ret4 = function () {
                        var recreate = matchValue_1[0];
                        var chain = matchValue_1[1];

                        var recreate_1 = function recreate_1(newChain) {
                          var _Node = (0, _astops.rebuildExprNode)(es_1.head.Node, _fableCore.List.append(_fableCore.List.reverse(acc), _fableCore.List.append(_fableCore.List.ofArray([recreate(newChain)]), es_1.tail)), ns);

                          return new _ast.Node(expr.WhiteBefore, expr.WhiteAfter, expr.Range, _Node, expr.Entity);
                        };

                        return {
                          v: [recreate_1, chain]
                        };
                      }();

                      if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
                    } else {
                      return loop(new _fableCore.List(es_1.head, acc))(es_1.tail);
                    }
                  }() : null;
                };
              };

              return {
                v: {
                  v: loop(new _fableCore.List())(es)
                }
              };
            }();

            if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
          }
        }();

        if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
      }
    };

    if (matchValue != null) {
      if (matchValue.tail != null) {
        var chain = matchValue;
        return [function (x) {
          return x;
        }, chain];
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  var PivotEditorMenus = exports.PivotEditorMenus = function () {
    function PivotEditorMenus(caseName, fields) {
      _classCallCheck(this, PivotEditorMenus);

      this.Case = caseName;
      this.Fields = fields;
    }

    PivotEditorMenus.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    PivotEditorMenus.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return PivotEditorMenus;
  }();

  _fableCore.Util.setInterfaces(PivotEditorMenus.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "Main.PivotEditorMenus");

  var PivotEditorAction = exports.PivotEditorAction = function PivotEditorAction(caseName, fields) {
    _classCallCheck(this, PivotEditorAction);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(PivotEditorAction.prototype, ["FSharpUnion"], "Main.PivotEditorAction");

  var PivotEditorState = exports.PivotEditorState = function PivotEditorState(globals, code, program, mapper, location, body, menus, selection, focus) {
    _classCallCheck(this, PivotEditorState);

    this.Globals = globals;
    this.Code = code;
    this.Program = program;
    this.Mapper = mapper;
    this.Location = location;
    this.Body = body;
    this.Menus = menus;
    this.Selection = selection;
    this.Focus = focus;
  };

  _fableCore.Util.setInterfaces(PivotEditorState.prototype, ["FSharpRecord"], "Main.PivotEditorState");

  function updateBody(state) {
    var matchValue = commandAtLocation(state.Location, state.Program);

    if (matchValue != null) {
      var patternInput = state.Mapper.AbsoluteToLineCol(matchValue.Range.End + 1);

      var $target0 = function $target0(expr) {
        var Body = expr;
        return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, Body, state.Menus, state.Selection, state.Focus);
      };

      if (matchValue.Node.Case === "Let") {
        return $target0(matchValue.Node.Fields[1]);
      } else {
        return $target0(matchValue.Node.Fields[0]);
      }
    } else {
      var Body = null;
      return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, Body, state.Menus, state.Selection, state.Focus);
    }
  }

  function hideMenus(state) {
    var Menus = new PivotEditorMenus("Hidden", []);
    return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, state.Body, Menus, state.Selection, state.Focus);
  }

  function editorLocation(mapper, startIndex, endIndex) {
    var patternInput = mapper.AbsoluteToLineCol(startIndex);
    var patternInput_1 = mapper.AbsoluteToLineCol(endIndex);
    var rng = {};
    rng.startLineNumber = patternInput[0];
    rng.startColumn = patternInput[1];
    rng.endLineNumber = patternInput_1[0];
    rng.endColumn = patternInput_1[1];
    return rng;
  }

  function selectName(nd, state) {
    var rng = function () {
      var $target0 = function $target0(n) {
        return n.Range;
      };

      if (nd.Node.Case === "Call") {
        return $target0(nd.Node.Fields[1]);
      } else {
        if (nd.Node.Case === "Property") {
          return $target0(nd.Node.Fields[1]);
        } else {
          return nd.Range;
        }
      }
    }();

    var loc = editorLocation(state.Mapper, rng.Start, rng.End + 1);
    var Selection = loc;
    return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, state.Body, state.Menus, Selection, state.Focus);
  }

  function tryTransformChain(f, state) {
    return state.Body != null ? function () {
      var matchValue = collectFirstChain(state.Body);

      if (matchValue != null) {
        var recreate = matchValue[0];
        var chain = matchValue[1];
        var sections = createPivotSections(_fableCore.List.map(function (tuple) {
          return tuple[1];
        }, chain));
        return hideMenus(f(state.Body)(recreate)(_fableCore.List.map(function (tuple) {
          return tuple[1];
        }, chain))(sections));
      } else {
        return hideMenus(state);
      }
    }() : hideMenus(state);
  }

  var marker = exports.marker = "InsertPropertyHere";

  function replaceAndSelectMarker(newName, state) {
    var startIndex = state.Code.indexOf(marker);

    var newCode = _fableCore.String.replace(state.Code, marker, (0, _astops.escapeIdent)(newName));

    var mapper = new _monaco.LocationMapper(state.Code);
    var rng = editorLocation(mapper, startIndex, startIndex + (0, _astops.escapeIdent)(newName).length);
    var Selection = rng;
    return new PivotEditorState(state.Globals, newCode, state.Program, state.Mapper, state.Location, state.Body, state.Menus, Selection, state.Focus);
  }

  function reconstructChain(state, body, newNodes) {
    var newBody = _fableCore.Seq.fold(function (prev, part) {
      return part.Node.Case === "Property" ? function () {
        var _Node = new _ast.Expr("Property", [prev, part.Node.Fields[1]]);

        return new _ast.Node(part.WhiteBefore, part.WhiteAfter, part.Range, _Node, part.Entity);
      }() : part.Node.Case === "Call" ? function () {
        var _Node = new _ast.Expr("Call", [prev, part.Node.Fields[1], part.Node.Fields[2]]);

        return new _ast.Node(part.WhiteBefore, part.WhiteAfter, part.Range, _Node, part.Entity);
      }() : function () {
        throw "Unexpected node in call chain";
      }();
    }, newNodes.head, newNodes.tail);

    var newCode = _fableCore.String.trim((0, _astops.formatSingleExpression)(newBody), "both");

    var newCode_1 = state.Code.substr(0, body.Range.Start) + newCode + state.Code.substr(body.Range.End + 1);
    return new PivotEditorState(state.Globals, newCode_1, state.Program, state.Mapper, state.Location, state.Body, state.Menus, state.Selection, state.Focus);
  }

  function createChainNode(args) {
    var node = function node(nd) {
      return (0, _astops.node)(new _ast.Range(0, 0), nd);
    };

    if (args != null) {
      var args_1 = _fableCore.List.map(function (a) {
        return new _ast.Argument(null, node(a));
      }, args);

      return node(new _ast.Expr("Call", [null, node(new _ast.Name(marker)), node(args_1)]));
    } else {
      return node(new _ast.Expr("Property", [node(new _ast.Expr("Empty", [])), node(new _ast.Name(marker))]));
    }
  }

  function updatePivotState(state, event) {
    return event.Case === "UpdateLocation" ? hideMenus(updateBody(new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, event.Fields[0], state.Body, state.Menus, state.Selection, state.Focus))) : event.Case === "UpdateSource" ? hideMenus(updateBody(new PivotEditorState(state.Globals, event.Fields[0], event.Fields[2], event.Fields[3], event.Fields[1], state.Body, state.Menus, state.Selection, state.Focus))) : event.Case === "SwitchMenu" ? new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, state.Body, event.Fields[0], state.Selection, state.Focus) : event.Case === "SetFocus" ? function () {
      var Focus = [event.Fields[0], event.Fields[1]];
      return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, state.Body, state.Menus, state.Selection, Focus);
    }() : event.Case === "Multiplex" ? function () {
      var folder = function folder(state_1) {
        return function (event_1) {
          return updatePivotState(state_1, event_1);
        };
      };

      return function (list) {
        return _fableCore.Seq.fold(function ($var79, $var80) {
          return folder($var79)($var80);
        }, state, list);
      };
    }()(event.Fields[0]) : event.Case === "SelectChainElement" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var loop = function loop(before) {
              return function (chain_1) {
                var $target1 = function $target1() {
                  return chain_1.tail == null ? [before, before, before] : chain_1.tail.tail == null ? function () {
                    var c = chain_1.head;
                    return [before, c, c];
                  }() : function () {
                    var after = chain_1.tail.head;
                    var c = chain_1.head;
                    return [before, c, after];
                  }();
                };

                if (chain_1.tail != null) {
                  if (chain_1.head.Range.End + 1 < state.Location) {
                    var c = chain_1.head;
                    var chain_2 = chain_1.tail;
                    return loop(c)(chain_2);
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              };
            };

            var patternInput = loop(chain.head)(chain.tail);
            return selectName(event.Fields[0] < 0 ? patternInput[0] : event.Fields[0] > 0 ? patternInput[2] : patternInput[1], state);
          };
        };
      };
    }, state) : event.Case === "SelectRange" ? function () {
      var Selection = editorLocation(state.Mapper, event.Fields[0].Start, event.Fields[0].End + 1);
      return new PivotEditorState(state.Globals, state.Code, state.Program, state.Mapper, state.Location, state.Body, state.Menus, Selection, state.Focus);
    }() : event.Case === "ReplaceRange" ? function () {
      _common.Log.trace("live", "Replace '%s' with '%s'", state.Code.substr(event.Fields[0].Start, event.Fields[0].End - event.Fields[0].Start + 1), event.Fields[1]);

      var newCode = state.Code.substr(0, event.Fields[0].Start) + event.Fields[1] + state.Code.substr(event.Fields[0].End + 1);
      var location = editorLocation(new _monaco.LocationMapper(newCode), event.Fields[0].Start, event.Fields[0].Start + event.Fields[1].length);
      var Selection = location;
      return new PivotEditorState(state.Globals, newCode, state.Program, state.Mapper, state.Location, state.Body, state.Menus, Selection, state.Focus);
    }() : event.Case === "AddElement" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var newNodes = _fableCore.List.collect(function (nd) {
              return !_fableCore.Util.equals(nd.Entity.Symbol, event.Fields[0]) ? _fableCore.List.ofArray([nd]) : _fableCore.List.ofArray([nd, createChainNode(event.Fields[2])]);
            }, chain);

            return function (state_1) {
              return replaceAndSelectMarker(event.Fields[1], state_1);
            }(reconstructChain(state, body, newNodes));
          };
        };
      };
    }, state) : event.Case === "ReplaceElement" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var newNodes = _fableCore.List.map(function (nd) {
              return !_fableCore.Util.equals(nd.Entity.Symbol, event.Fields[0]) ? nd : createChainNode(event.Fields[2]);
            }, chain);

            return function (state_1) {
              return replaceAndSelectMarker(event.Fields[1], state_1);
            }(reconstructChain(state, body, newNodes));
          };
        };
      };
    }, state) : event.Case === "RemoveElement" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var beforeDropped = _fableCore.Seq.tryLast(_fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (nd) {
              return !_fableCore.Util.equals(nd.Entity.Symbol, event.Fields[0]);
            }, chain)));

            var beforeDropped_1 = beforeDropped != null ? beforeDropped : chain.head;

            var newNodes = _fableCore.List.filter(function (nd) {
              return !_fableCore.Util.equals(nd.Entity.Symbol, event.Fields[0]);
            }, chain);

            return function (state_1) {
              return selectName(beforeDropped_1, state_1);
            }(reconstructChain(state, body, newNodes));
          };
        };
      };
    }, state) : event.Case === "RemoveSection" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var beforeDropped = _fableCore.Seq.tryLast(_fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (nd) {
              return !_fableCore.Util.equals(nd.Entity.Symbol, event.Fields[0]);
            }, _fableCore.List.map(function (sec) {
              return sec.Nodes.head;
            }, sections))));

            var beforeDropped_1 = beforeDropped != null ? beforeDropped : chain.head;

            var newNodes = _fableCore.List.filter(function (sec) {
              return !_fableCore.Util.equals(sec.Nodes.head.Entity.Symbol, event.Fields[0]);
            }, sections);

            var newNodes_1 = new _fableCore.List(chain.head, _fableCore.List.collect(function (sec) {
              return sec.Nodes;
            }, newNodes));
            return function (state_1) {
              return selectName(beforeDropped_1, state_1);
            }(reconstructChain(state, body, newNodes_1));
          };
        };
      };
    }, state) : event.Case === "AddTransform" ? tryTransformChain(function (body) {
      return function (recreate) {
        return function (chain) {
          return function (sections) {
            var whites = _fableCore.Seq.countBy(function (x) {
              return x;
            }, _fableCore.List.map(function (sec) {
              return (0, _astops.formatWhiteAfterExpr)(_fableCore.Seq.last(sec.Nodes));
            }, sections));

            var patternInput = _fableCore.Seq.reduce(function (f) {
              return function (x, y) {
                return f(x) > f(y) ? x : y;
              };
            }(function (tupledArg) {
              return tupledArg[0] === "" ? 0 : tupledArg[1];
            }), new _fableCore.List(["", 0], whites));

            _common.Log.trace("live", "Whitespace of sections: %O, inserting '%s'", Array.from(whites), patternInput[0]);

            var node = function node(n) {
              return (0, _astops.node)(new _ast.Range(0, 0), n);
            };

            var patternInput_1 = function () {
              var res = function res(k) {
                return function (l) {
                  return [k, function (_arg1) {
                    return l;
                  }];
                };
              };

              if (event.Fields[0].Case === "SortBy") {
                return res("sort data")(_fableCore.List.ofArray([marker, "then"]));
              } else {
                if (event.Fields[0].Case === "FilterBy") {
                  return res("filter data")(_fableCore.List.ofArray([marker, "then"]));
                } else {
                  if (event.Fields[0].Case === "Paging") {
                    return res("paging")(_fableCore.List.ofArray([marker, "then"]));
                  } else {
                    if (event.Fields[0].Case === "GetSeries") {
                      return res("get series")(_fableCore.List.ofArray([marker]));
                    } else {
                      if (event.Fields[0].Case === "GetTheData") {
                        return res("get the data")(_fableCore.List.ofArray([marker]));
                      } else {
                        if (event.Fields[0].Case === "GroupBy") {
                          return ["group data", function (expr) {
                            _common.Log.trace("live", "Pick fields of %O, got: %O", expr, pickPivotFields(expr));

                            var matchValue = pickPivotFields(expr);

                            var $target1 = function $target1() {
                              return _fableCore.List.ofArray([marker, "by <Property>", "then"]);
                            };

                            if (matchValue != null) {
                              if (matchValue.tail != null) {
                                var f = matchValue.head;
                                return _fableCore.List.ofArray([marker, "by " + f.Name, "then"]);
                              } else {
                                return $target1();
                              }
                            } else {
                              return $target1();
                            }
                          }];
                        } else {
                          if (event.Fields[0].Case === "Empty") {
                            return res("")(new _fableCore.List());
                          } else {
                            return res("drop columns")(_fableCore.List.ofArray([marker, "then"]));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }();

            var injectCall = function injectCall(expr) {
              return (0, _parser.whiteAfter)(_fableCore.List.ofArray([new _ast.Token(new _ast.TokenKind("White", [patternInput[0]]), new _ast.Range(0, 0))]), function () {
                var folder = function folder(expr_1) {
                  return function (name) {
                    return node(new _ast.Expr("Property", [expr_1, node(new _ast.Name(name))]));
                  };
                };

                return function (list) {
                  return _fableCore.Seq.fold(function ($var81, $var82) {
                    return folder($var81)($var82);
                  }, expr, list);
                };
              }()(patternInput_1[1](expr)));
            };

            var tryInjectBefore = function tryInjectBefore(prev) {
              return function (part) {
                var matchValue = pickPivotTransformations(part);

                var $target0 = function $target0() {
                  return [true, injectCall(prev)];
                };

                var $target1 = function $target1() {
                  return [false, prev];
                };

                if (matchValue != null) {
                  if (matchValue.tail != null) {
                    if (matchValue.head.Case === "GetSeries") {
                      return $target0();
                    } else {
                      if (matchValue.head.Case === "GetTheData") {
                        return $target0();
                      } else {
                        return $target1();
                      }
                    }
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              };
            };

            var patternInput_2 = _fableCore.Seq.fold(function (tupledArg, part) {
              var patternInput_2 = tupledArg[0] ? [tupledArg[0], tupledArg[1]] : tryInjectBefore(tupledArg[1])(part);

              if (part.Node.Case === "Property") {
                return [patternInput_2[0], function () {
                  var _Node = new _ast.Expr("Property", [patternInput_2[1], part.Node.Fields[1]]);

                  return new _ast.Node(part.WhiteBefore, part.WhiteAfter, part.Range, _Node, part.Entity);
                }()];
              } else {
                if (part.Node.Case === "Call") {
                  return [patternInput_2[0], function () {
                    var _Node = new _ast.Expr("Call", [patternInput_2[1], part.Node.Fields[1], part.Node.Fields[2]]);

                    return new _ast.Node(part.WhiteBefore, part.WhiteAfter, part.Range, _Node, part.Entity);
                  }()];
                } else {
                  throw "Unexpected node in call chain";
                }
              }
            }, [false, chain.head], chain.tail);

            var newBody = recreate(patternInput_2[0] ? patternInput_2[1] : injectCall(patternInput_2[1]));

            var newCode = _fableCore.String.trim((0, _astops.formatSingleExpression)(newBody), "both");

            var newCode_1 = state.Code.substr(0, body.Range.Start) + newCode + state.Code.substr(body.Range.End + 1);
            return function (state_1) {
              return replaceAndSelectMarker(patternInput_1[0], state_1);
            }(new PivotEditorState(state.Globals, newCode_1, state.Program, state.Mapper, state.Location, state.Body, state.Menus, state.Selection, state.Focus));
          };
        };
      };
    }, state) : new PivotEditorState(event.Fields[0], state.Code, state.Program, state.Mapper, state.Location, state.Body, state.Menus, state.Selection, state.Focus);
  }

  function renderNodeList(trigger, nodes) {
    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.collect(function (nd) {
        var $target1 = function $target1() {
          return _fableCore.Seq.empty();
        };

        if (nd.Node.Case === "Property") {
          if (nd.Node.Fields[1].Node.Name !== "then") {
            var n = nd.Node.Fields[1];
            return _fableCore.Seq.singleton(function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("span")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectRange", [n.Range])))]))(_fableCore.List.ofArray([(0, _html.text)(n.Node.Name)])), function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("RemoveElement", [nd.Entity.Symbol])))]))(_fableCore.List.ofArray([function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-times")]))(new _fableCore.List())]))])));
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      }, nodes);
    }));
  }

  function renderContextMenu(trigger) {
    return function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "right"), (0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SwitchMenu", [new PivotEditorMenus("ContextualDropdownOpen", [])])))]))(_fableCore.List.ofArray([function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-plus")]))(new _fableCore.List())]));
  }

  function renderAddPropertyMenu(trigger, f, nodes) {
    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      var lastNode = _fableCore.Seq.find(function (_arg1) {
        return _arg1.Node.Case === "Property" ? function () {
          var n = _arg1.Node.Fields[1];
          return n.Node.Name !== "then";
        }() : true;
      }, _fableCore.List.reverse(nodes));

      var matchValue = lastNode.Entity.Type;

      var $target1 = function $target1() {
        return _fableCore.Seq.empty();
      };

      if (matchValue != null) {
        if (matchValue.Case === "Object") {
          var _ret5 = function () {
            var obj = matchValue.Fields[0];

            var members = _fableCore.Seq.sortWith(function (x, y) {
              return _fableCore.Util.compare(x, y);
            }, _fableCore.Seq.choose(function (_arg2) {
              var $target1_1 = function $target1_1() {
                return null;
              };

              if (_arg2.Case === "Property") {
                if (f(_arg2.Fields[0])) {
                  var n = _arg2.Fields[0];
                  return n;
                } else {
                  return $target1_1();
                }
              } else {
                return $target1_1();
              }
            }, obj.Members));

            return {
              v: _fableCore.Seq.singleton(function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("ul")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                return _fableCore.Seq.map(function (n) {
                  return function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("AddElement", [lastNode.Entity.Symbol, n, null])))]))(_fableCore.List.ofArray([(0, _html.text)(n)]))]));
                }, members);
              }))))
            };
          }();

          if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }));
  }

  function renderSection(triggerEvent, section) {
    var trigger = function trigger(action) {
      return function (_arg1) {
        return function (e) {
          e.cancelBubble = true;
          triggerEvent(action);
        };
      };
    };

    var triggerWith = function triggerWith(f) {
      return function (el) {
        return function (e) {
          e.cancelBubble = true;
          triggerEvent(f(el));
        };
      };
    };

    var getNodeNameAndSymbol = function getNodeNameAndSymbol(_arg1) {
      var $target1 = function $target1() {
        return ["", null];
      };

      if (_arg1 != null) {
        if (_arg1.Node.Case === "Property") {
          if (_arg1.Entity != null) {
            var e = _arg1.Entity;
            var n = _arg1.Node.Fields[1];
            return [n.Node.Name, e.Symbol];
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    };

    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      var $target5 = function $target5() {
        return _fableCore.Seq.empty();
      };

      if (section != null) {
        if (section.Transformation.Case === "GetSeries") {
          var _ret6 = function () {
            var nodes = section.Nodes;
            var patternInput = nodes.tail != null ? nodes.tail.tail != null ? nodes.tail.tail.tail != null ? function () {
              var gs = nodes.head;
              var gsk = nodes.tail.head;
              var gsv = nodes.tail.tail.head;
              return [gs, gsk, gsv];
            }() : function () {
              var gs = nodes.head;
              var gsk = nodes.tail.head;
              return [gs, gsk, null];
            }() : function () {
              var gs = nodes.head;
              return [gs, null, null];
            }() : function () {
              throw "No get series node in get series transformation";
            }();
            var patternInput_1 = getNodeNameAndSymbol(patternInput[1]);
            var patternInput_2 = getNodeNameAndSymbol(patternInput[2]);
            return {
              v: _fableCore.Seq.append(function () {
                var matchValue = patternInput[0].Entity.Type;

                var $target1 = function $target1() {
                  return _fableCore.Seq.empty();
                };

                if (matchValue != null) {
                  if (matchValue.Case === "Object") {
                    var _ret7 = function () {
                      var obj = matchValue.Fields[0];
                      return {
                        v: _fableCore.Seq.singleton(function (arg0) {
                          return function (arg1) {
                            return _html.El.op_Dynamic(arg0, arg1);
                          };
                        }(_html.h)("select")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("change", triggerWith(function (el) {
                          return patternInput_1[1] != null ? new PivotEditorAction("ReplaceElement", [patternInput_1[1], el.value, null]) : new PivotEditorAction("AddElement", [patternInput[0].Entity.Symbol, el.value, null]);
                        }))]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                          return _fableCore.Seq.append(patternInput_1[0] === "" ? _fableCore.Seq.singleton(function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("option")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("value", ""), (0, _html.op_EqualsGreater)("selected", "selected")]))(_fableCore.List.ofArray([(0, _html.text)("")]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_2) {
                            return _fableCore.Seq.collect(function (m) {
                              var $target1_1 = function $target1_1() {
                                return _fableCore.Seq.empty();
                              };

                              if (m.Case === "Property") {
                                if (m.Fields[0].indexOf("with key") === 0) {
                                  var _ret8 = function () {
                                    var n = m.Fields[0];
                                    return {
                                      v: _fableCore.Seq.singleton(function (arg0) {
                                        return function (arg1) {
                                          return _html.El.op_Dynamic(arg0, arg1);
                                        };
                                      }(_html.h)("option")(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
                                        return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.op_EqualsGreater)("value", n)), _fableCore.Seq.delay(function (unitVar_4) {
                                          return patternInput_1[0] === n ? _fableCore.Seq.singleton((0, _html.op_EqualsGreater)("selected", "selected")) : _fableCore.Seq.empty();
                                        }));
                                      })))(_fableCore.List.ofArray([(0, _html.text)(n)])))
                                    };
                                  }();

                                  if ((typeof _ret8 === "undefined" ? "undefined" : _typeof(_ret8)) === "object") return _ret8.v;
                                } else {
                                  return $target1_1();
                                }
                              } else {
                                return $target1_1();
                              }
                            }, obj.Members);
                          }));
                        }))))
                      };
                    }();

                    if ((typeof _ret7 === "undefined" ? "undefined" : _typeof(_ret7)) === "object") return _ret7.v;
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              }(), _fableCore.Seq.delay(function (unitVar_1) {
                var $target1 = function $target1() {
                  return _fableCore.Seq.empty();
                };

                if (patternInput[1] != null) {
                  if (patternInput[1].Entity != null) {
                    if (patternInput[1].Entity.Type != null) {
                      if (patternInput[1].Entity.Type.Case === "Object") {
                        var _ret9 = function () {
                          var keyEnt = patternInput[1].Entity;
                          var obj = patternInput[1].Entity.Type.Fields[0];
                          return {
                            v: _fableCore.Seq.singleton(function (arg0) {
                              return function (arg1) {
                                return _html.El.op_Dynamic(arg0, arg1);
                              };
                            }(_html.h)("select")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("change", triggerWith(function (el) {
                              return patternInput_2[1] != null ? new PivotEditorAction("ReplaceElement", [patternInput_2[1], el.value, null]) : new PivotEditorAction("AddElement", [keyEnt.Symbol, el.value, null]);
                            }))]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
                              return _fableCore.Seq.append(patternInput_2[0] === "" ? _fableCore.Seq.singleton(function (arg0) {
                                return function (arg1) {
                                  return _html.El.op_Dynamic(arg0, arg1);
                                };
                              }(_html.h)("option")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("value", ""), (0, _html.op_EqualsGreater)("selected", "selected")]))(_fableCore.List.ofArray([(0, _html.text)("")]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_3) {
                                return _fableCore.Seq.collect(function (m) {
                                  var $target1_1 = function $target1_1() {
                                    return _fableCore.Seq.empty();
                                  };

                                  if (m.Case === "Property") {
                                    if (m.Fields[0].indexOf("and value") === 0) {
                                      var _ret10 = function () {
                                        var n = m.Fields[0];
                                        return {
                                          v: _fableCore.Seq.singleton(function (arg0) {
                                            return function (arg1) {
                                              return _html.El.op_Dynamic(arg0, arg1);
                                            };
                                          }(_html.h)("option")(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_4) {
                                            return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.op_EqualsGreater)("value", n)), _fableCore.Seq.delay(function (unitVar_5) {
                                              return patternInput_1[0] === n ? _fableCore.Seq.singleton((0, _html.op_EqualsGreater)("selected", "selected")) : _fableCore.Seq.empty();
                                            }));
                                          })))(_fableCore.List.ofArray([(0, _html.text)(n)])))
                                        };
                                      }();

                                      if ((typeof _ret10 === "undefined" ? "undefined" : _typeof(_ret10)) === "object") return _ret10.v;
                                    } else {
                                      return $target1_1();
                                    }
                                  } else {
                                    return $target1_1();
                                  }
                                }, obj.Members);
                              }));
                            }))))
                          };
                        }();

                        if ((typeof _ret9 === "undefined" ? "undefined" : _typeof(_ret9)) === "object") return _ret9.v;
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
              }))
            };
          }();

          if ((typeof _ret6 === "undefined" ? "undefined" : _typeof(_ret6)) === "object") return _ret6.v;
        } else {
          if (section.Transformation.Case === "GroupBy") {
            var _ret11 = function () {
              var nodes = section.Nodes;
              var patternInput = nodes.tail != null ? nodes.tail.tail != null ? function () {
                var aggs = nodes.tail.tail;
                var gby = nodes.head;
                var sel = nodes.tail.head;
                return [gby, sel, aggs];
              }() : function () {
                var gby = nodes.head;
                return [gby, null, new _fableCore.List()];
              }() : function () {
                throw "No group by node in group by transformation";
              }();
              var patternInput_1 = getNodeNameAndSymbol(patternInput[1]);
              return {
                v: _fableCore.Seq.append(function () {
                  var matchValue = patternInput[0].Entity.Type;

                  var $target1 = function $target1() {
                    return _fableCore.Seq.empty();
                  };

                  if (matchValue != null) {
                    if (matchValue.Case === "Object") {
                      var _ret12 = function () {
                        var obj = matchValue.Fields[0];
                        return {
                          v: _fableCore.Seq.singleton(function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("select")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("change", triggerWith(function (el) {
                            return patternInput_1[1] != null ? new PivotEditorAction("ReplaceElement", [patternInput_1[1], el.value, null]) : new PivotEditorAction("AddElement", [patternInput[0].Entity.Symbol, el.value, null]);
                          }))]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                            return _fableCore.Seq.append(patternInput_1[0] === "" ? _fableCore.Seq.singleton(function (arg0) {
                              return function (arg1) {
                                return _html.El.op_Dynamic(arg0, arg1);
                              };
                            }(_html.h)("option")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("value", ""), (0, _html.op_EqualsGreater)("selected", "selected")]))(_fableCore.List.ofArray([(0, _html.text)("")]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_2) {
                              return _fableCore.Seq.collect(function (m) {
                                var $target1_1 = function $target1_1() {
                                  return _fableCore.Seq.empty();
                                };

                                if (m.Case === "Property") {
                                  if (m.Fields[0].indexOf("by") === 0) {
                                    var _ret13 = function () {
                                      var n = m.Fields[0];
                                      return {
                                        v: _fableCore.Seq.singleton(function (arg0) {
                                          return function (arg1) {
                                            return _html.El.op_Dynamic(arg0, arg1);
                                          };
                                        }(_html.h)("option")(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
                                          return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.op_EqualsGreater)("value", n)), _fableCore.Seq.delay(function (unitVar_4) {
                                            return patternInput_1[0] === n ? _fableCore.Seq.singleton((0, _html.op_EqualsGreater)("selected", "selected")) : _fableCore.Seq.empty();
                                          }));
                                        })))(_fableCore.List.ofArray([(0, _html.text)(n)])))
                                      };
                                    }();

                                    if ((typeof _ret13 === "undefined" ? "undefined" : _typeof(_ret13)) === "object") return _ret13.v;
                                  } else {
                                    return $target1_1();
                                  }
                                } else {
                                  return $target1_1();
                                }
                              }, obj.Members);
                            }));
                          }))))
                        };
                      }();

                      if ((typeof _ret12 === "undefined" ? "undefined" : _typeof(_ret12)) === "object") return _ret12.v;
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                }(), _fableCore.Seq.delay(function (unitVar_1) {
                  return _fableCore.Seq.append(renderNodeList(trigger, patternInput[2]), _fableCore.Seq.delay(function (unitVar_2) {
                    return _fableCore.Seq.singleton(renderContextMenu(trigger));
                  }));
                }))
              };
            }();

            if ((typeof _ret11 === "undefined" ? "undefined" : _typeof(_ret11)) === "object") return _ret11.v;
          } else {
            if (section.Transformation.Case === "Paging") {
              var _ret14 = function () {
                var nodes = section.Nodes;

                var methods = _fableCore.Set.create(_fableCore.List.map(function (_arg29) {
                  return _arg29.Node.Case === "Call" ? function () {
                    var n = _arg29.Node.Fields[1];
                    return n.Node.Name;
                  }() : "";
                }, nodes), new _fableCore.GenericComparer(function (x, y) {
                  return x < y ? -1 : x > y ? 1 : 0;
                }));

                return {
                  v: _fableCore.Seq.append(_fableCore.Seq.collect(function (nd) {
                    var $target1 = function $target1() {
                      return _fableCore.Seq.empty();
                    };

                    if (nd.Node.Case === "Call") {
                      if (nd.Node.Fields[2].Node.tail != null) {
                        if (nd.Node.Fields[2].Node.tail.tail == null) {
                          var _ret15 = function () {
                            var arg = nd.Node.Fields[2].Node.head;
                            var n = nd.Node.Fields[1];
                            {
                              var removeOp = n.Node.Name === "take" ? new PivotEditorAction("ReplaceElement", [nd.Entity.Symbol, "then", null]) : new PivotEditorAction("RemoveElement", [nd.Entity.Symbol]);
                              return {
                                v: _fableCore.Seq.singleton(function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("span")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectRange", [n.Range])))]))(_fableCore.List.ofArray([(0, _html.text)(n.Node.Name)])), function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("input")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", "input-pg-" + n.Node.Name), (0, _html.op_EqualsBangGreater)("input", function (el) {
                                  return function (_arg2) {
                                    var input = el;
                                    var patternInput = (0, _parser.parseProgram)(input.value);

                                    if (patternInput[1].length === 0 ? patternInput[0].Body.Node.length === 1 : false) {
                                      el.setCustomValidity("");
                                      triggerEvent(new PivotEditorAction("Multiplex", [_fableCore.List.ofArray([new PivotEditorAction("SetFocus", ["input-pg-" + n.Node.Name, (input.selectionStart + 0x80000000 >>> 0) - 0x80000000]), new PivotEditorAction("ReplaceRange", [arg.Value.Range, input.value])])]));
                                    } else {
                                      el.setCustomValidity("Cannot parse expression");
                                    }
                                  };
                                }), (0, _html.op_EqualsGreater)("value", (0, _astops.formatSingleExpression)(arg.Value))]))(new _fableCore.List()), function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(removeOp))]))(_fableCore.List.ofArray([function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-times")]))(new _fableCore.List())]))])))
                              };
                            }
                          }();

                          if ((typeof _ret15 === "undefined" ? "undefined" : _typeof(_ret15)) === "object") return _ret15.v;
                        } else {
                          return $target1();
                        }
                      } else {
                        return $target1();
                      }
                    } else {
                      return $target1();
                    }
                  }, nodes), _fableCore.Seq.delay(function (unitVar_1) {
                    return !(methods.has("take") ? methods.has("skip") : false) ? _fableCore.Seq.singleton(renderContextMenu(trigger)) : _fableCore.Seq.empty();
                  }))
                };
              }();

              if ((typeof _ret14 === "undefined" ? "undefined" : _typeof(_ret14)) === "object") return _ret14.v;
            } else {
              if (section.Transformation.Case === "SortBy") {
                var _ret16 = function () {
                  var nodes = section.Nodes;

                  var props = _fableCore.List.choose(function (_arg45) {
                    var $target1 = function $target1() {
                      return null;
                    };

                    if (_arg45.Node.Case === "Property") {
                      if (_arg45.Entity != null) {
                        if (function () {
                          var sym = _arg45.Entity.Symbol;
                          var n = _arg45.Node.Fields[1];

                          if (n.Node.Name !== "then") {
                            return n.Node.Name !== "sort data";
                          } else {
                            return false;
                          }
                        }()) {
                          var n = _arg45.Node.Fields[1];
                          var sym = _arg45.Entity.Symbol;
                          return [sym, n];
                        } else {
                          return $target1();
                        }
                      } else {
                        return $target1();
                      }
                    } else {
                      return $target1();
                    }
                  }, nodes);

                  var last = _fableCore.Seq.tryLast(props);

                  return {
                    v: _fableCore.Seq.append(_fableCore.Seq.collect(function (matchValue) {
                      return _fableCore.Seq.singleton(function (arg0) {
                        return function (arg1) {
                          return _html.El.op_Dynamic(arg0, arg1);
                        };
                      }(_html.h)("span")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                        return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                          return function (arg1) {
                            return _html.El.op_Dynamic(arg0, arg1);
                          };
                        }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectRange", [matchValue[1].Range])))]))(_fableCore.List.ofArray([(0, _html.text)(matchValue[1].Node.Name)]))), _fableCore.Seq.delay(function (unitVar_2) {
                          return matchValue[1].Node.Name === last[1].Node.Name ? _fableCore.Seq.singleton(function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("RemoveElement", [matchValue[0]])))]))(_fableCore.List.ofArray([function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-times")]))(new _fableCore.List())]))) : _fableCore.Seq.empty();
                        }));
                      }))));
                    }, props), _fableCore.Seq.delay(function (unitVar_1) {
                      return _fableCore.Seq.singleton(renderContextMenu(trigger));
                    }))
                  };
                }();

                if ((typeof _ret16 === "undefined" ? "undefined" : _typeof(_ret16)) === "object") return _ret16.v;
              } else {
                if (section.Transformation.Case === "DropColumns") {
                  var _nodes = section.Nodes;
                  return _fableCore.Seq.append(renderNodeList(trigger, _nodes.tail), _fableCore.Seq.delay(function (unitVar_1) {
                    return _fableCore.Seq.singleton(renderContextMenu(trigger));
                  }));
                } else {
                  return $target5();
                }
              }
            }
          }
        }
      } else {
        return $target5();
      }
    }));
  }

  function renderPivot(triggerEvent, state) {
    var trigger = function trigger(action) {
      return function (_arg1) {
        return function (e) {
          e.cancelBubble = true;
          triggerEvent(action);
        };
      };
    };

    var triggerWith = function triggerWith(f) {
      return function (el) {
        return function (e) {
          e.cancelBubble = true;
          triggerEvent(f(el));
        };
      };
    };

    if (state.Body != null) {
      var matchValue = collectFirstChain(state.Body);

      if (matchValue != null) {
        var _ret17 = function () {
          var chainNodes = matchValue[1];
          var starts = Array.from(_fableCore.Seq.delay(function (unitVar) {
            return _fableCore.Seq.collect(function (matchValue_1) {
              return _fableCore.Seq.singleton(_fableCore.String.fsFormat("%d: %s")(function (x) {
                return x;
              })(matchValue_1[0])(_astops.Entity$2Eget_Name.bind(matchValue_1[1].Entity)()));
            }, chainNodes);
          }));

          _common.Log.trace("live", "Find chain element at %d in %O", state.Location, starts);

          var matchValue_1 = _fableCore.Seq.tryLast(_fableCore.List.filter(function (tupledArg) {
            return state.Location >= tupledArg[0];
          }, chainNodes));

          if (matchValue_1 != null) {
            var _ret18 = function () {
              var selNode = matchValue_1[1];
              var selEnt = selNode.Entity;
              var sections = createPivotSections(_fableCore.List.map(function (tuple) {
                return tuple[1];
              }, chainNodes));

              var selSec = _fableCore.Seq.tryFind(function (sec) {
                return _fableCore.Seq.exists(function (secEnt) {
                  return _fableCore.Util.equals(selEnt.Symbol, secEnt.Entity.Symbol);
                }, sec.Nodes);
              }, sections);

              var preview = tryFindPreview(state.Globals, selEnt) != null ? tryFindPreview(state.Globals, selEnt) : function (value) {
                value;
              };

              var dom = function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("div")(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.op_EqualsGreater)("class", "pivot-preview")), _fableCore.Seq.delay(function (unitVar_1) {
                  return !state.Menus.Equals(new PivotEditorMenus("Hidden", [])) ? _fableCore.Seq.singleton((0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SwitchMenu", [new PivotEditorMenus("Hidden", [])])))) : _fableCore.Seq.empty();
                }));
              })))(_fableCore.List.ofArray([function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("ul")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "tabs")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                var patternInput = chainNodes.head;
                return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("li")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", _fableCore.Util.equals(selNode.Entity.Symbol, patternInput[1].Entity.Symbol) ? "selected" : "")]))(_fableCore.List.ofArray([function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectRange", [patternInput[1].Range])))]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                  return patternInput[1].Node.Case === "Variable" ? _fableCore.Seq.singleton((0, _html.text)(patternInput[1].Node.Fields[0].Node.Name)) : _fableCore.Seq.singleton((0, _html.text)("data"));
                })))]))), _fableCore.Seq.delay(function (unitVar_1) {
                  return _fableCore.Seq.append(_fableCore.Seq.map(function (sec) {
                    var selected = _fableCore.Seq.exists(function (secEnt) {
                      return _fableCore.Util.equals(selEnt.Symbol, secEnt.Entity.Symbol);
                    }, sec.Nodes);

                    var secSymbol = sec.Nodes.head.Entity.Symbol;

                    var identRange = function () {
                      var $target0 = function $target0(n) {
                        return n.Range;
                      };

                      var $target1 = function $target1() {
                        throw "Unexpected node in pivot call chain";
                      };

                      if (sec.Nodes.tail != null) {
                        if (sec.Nodes.head.Node.Case === "Variable") {
                          return $target0(sec.Nodes.head.Node.Fields[0]);
                        } else {
                          if (sec.Nodes.head.Node.Case === "Call") {
                            return $target0(sec.Nodes.head.Node.Fields[1]);
                          } else {
                            if (sec.Nodes.head.Node.Case === "Property") {
                              return $target0(sec.Nodes.head.Node.Fields[1]);
                            } else {
                              return $target1();
                            }
                          }
                        }
                      } else {
                        return $target1();
                      }
                    }();

                    return function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("li")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", selected ? "selected" : "")]))(_fableCore.List.ofArray([function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectRange", [identRange])))]))(_fableCore.List.ofArray([(0, _html.text)(transformName(sec.Transformation))])), function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("RemoveSection", [secSymbol])))]))(_fableCore.List.ofArray([function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-times")]))(new _fableCore.List())]))]));
                  }, sections), _fableCore.Seq.delay(function (unitVar_2) {
                    return _fableCore.Seq.singleton(function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("li")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", state.Menus.Equals(new PivotEditorMenus("AddDropdownOpen", [])) ? "add selected" : "add")]))(_fableCore.List.ofArray([function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SwitchMenu", [new PivotEditorMenus("AddDropdownOpen", [])])))]))(_fableCore.List.ofArray([function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-plus")]))(new _fableCore.List())]))])));
                  }));
                }));
              }))), function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "add-menu")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                var clickHandler = function clickHandler(tfs) {
                  return (0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("AddTransform", [tfs])));
                };

                if (state.Menus.Equals(new PivotEditorMenus("AddDropdownOpen", []))) {
                  return _fableCore.Seq.singleton(function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("ul")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                    return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("DropColumns", [new _fableCore.List()]))]))(_fableCore.List.ofArray([(0, _html.text)("drop columns")]))]))), _fableCore.Seq.delay(function (unitVar_2) {
                      return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                        return function (arg1) {
                          return _html.El.op_Dynamic(arg0, arg1);
                        };
                      }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                        return function (arg1) {
                          return _html.El.op_Dynamic(arg0, arg1);
                        };
                      }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("FilterBy", [new _fableCore.List()]))]))(_fableCore.List.ofArray([(0, _html.text)("filter by")]))]))), _fableCore.Seq.delay(function (unitVar_3) {
                        return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                          return function (arg1) {
                            return _html.El.op_Dynamic(arg0, arg1);
                          };
                        }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                          return function (arg1) {
                            return _html.El.op_Dynamic(arg0, arg1);
                          };
                        }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("GroupBy", [new _fableCore.List(), new _fableCore.List()]))]))(_fableCore.List.ofArray([(0, _html.text)("group by")]))]))), _fableCore.Seq.delay(function (unitVar_4) {
                          return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("Paging", [new _fableCore.List()]))]))(_fableCore.List.ofArray([(0, _html.text)("paging")]))]))), _fableCore.Seq.delay(function (unitVar_5) {
                            return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                              return function (arg1) {
                                return _html.El.op_Dynamic(arg0, arg1);
                              };
                            }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                              return function (arg1) {
                                return _html.El.op_Dynamic(arg0, arg1);
                              };
                            }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("SortBy", [new _fableCore.List()]))]))(_fableCore.List.ofArray([(0, _html.text)("sort by")]))]))), _fableCore.Seq.delay(function (unitVar_6) {
                              var getDataCalled = _fableCore.Seq.exists(function (_arg70) {
                                var $target0 = function $target0() {
                                  return true;
                                };

                                if (_arg70.Transformation.Case === "GetTheData") {
                                  return $target0();
                                } else {
                                  if (_arg70.Transformation.Case === "GetSeries") {
                                    return $target0();
                                  } else {
                                    return false;
                                  }
                                }
                              }, sections);

                              if (!getDataCalled) {
                                return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("GetTheData", []))]))(_fableCore.List.ofArray([(0, _html.text)("get the data")]))]))), _fableCore.Seq.delay(function (unitVar_7) {
                                  return _fableCore.Seq.singleton(function (arg0) {
                                    return function (arg1) {
                                      return _html.El.op_Dynamic(arg0, arg1);
                                    };
                                  }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                                    return function (arg1) {
                                      return _html.El.op_Dynamic(arg0, arg1);
                                    };
                                  }(_html.h)("a")(_fableCore.List.ofArray([clickHandler(new _pivot.Transformation("GetSeries", ["!", "!"]))]))(_fableCore.List.ofArray([(0, _html.text)("get series")]))])));
                                }));
                              } else {
                                return _fableCore.Seq.empty();
                              }
                            }));
                          }));
                        }));
                      }));
                    }));
                  }))));
                } else {
                  return _fableCore.Seq.empty();
                }
              }))), function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "toolbar")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("span")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "navig")]))(_fableCore.List.ofArray([function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("a")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectChainElement", [-1]))), (0, _html.op_EqualsGreater)("class", "fa fa-chevron-left")]))(new _fableCore.List())])), function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("a")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectChainElement", [0]))), (0, _html.op_EqualsGreater)("class", "fa fa-circle")]))(new _fableCore.List())])), function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("a")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(new PivotEditorAction("SelectChainElement", [1]))), (0, _html.op_EqualsGreater)("class", "fa fa-chevron-right")]))(new _fableCore.List())]))]))), _fableCore.Seq.delay(function (unitVar_1) {
                  return renderSection(triggerEvent, selSec);
                }));
              }))), function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "add-menu")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                var matchValue_2 = [state.Menus, selSec];

                var $target4 = function $target4() {
                  return _fableCore.Seq.empty();
                };

                if (matchValue_2[0].Case === "ContextualDropdownOpen") {
                  if (matchValue_2[1] != null) {
                    if (matchValue_2[1].Transformation.Case === "Paging") {
                      var _ret19 = function () {
                        var nodes = matchValue_2[1].Nodes;
                        var methods = new Map(_fableCore.List.choose(function (_arg110) {
                          var $target0 = function $target0(e, n) {
                            return [n.Node.Name, e.Symbol];
                          };

                          if (_arg110.Node.Case === "Property") {
                            return $target0(_arg110.Entity, _arg110.Node.Fields[1]);
                          } else {
                            if (_arg110.Node.Case === "Call") {
                              return $target0(_arg110.Entity, _arg110.Node.Fields[1]);
                            }
                          }
                        }, nodes));

                        var lastSym = _fableCore.Seq.last(nodes).Entity.Symbol;

                        var firstSym = nodes.head.Entity.Symbol;
                        return {
                          v: _fableCore.Seq.singleton(function (arg0) {
                            return function (arg1) {
                              return _html.El.op_Dynamic(arg0, arg1);
                            };
                          }(_html.h)("ul")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                            return _fableCore.Seq.append(!methods.has("take") ? function () {
                              var op = methods.has("then") ? new PivotEditorAction("ReplaceElement", [methods.get("then"), "take", _fableCore.List.ofArray([new _ast.Expr("Number", [10])])]) : new PivotEditorAction("AddElement", [lastSym, "take", _fableCore.List.ofArray([new _ast.Expr("Number", [10])])]);
                              return _fableCore.Seq.singleton(function (arg0) {
                                return function (arg1) {
                                  return _html.El.op_Dynamic(arg0, arg1);
                                };
                              }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                                return function (arg1) {
                                  return _html.El.op_Dynamic(arg0, arg1);
                                };
                              }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(op))]))(_fableCore.List.ofArray([(0, _html.text)("take")]))])));
                            }() : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_2) {
                              return !methods.has("skip") ? function () {
                                var op = new PivotEditorAction("AddElement", [firstSym, "skip", _fableCore.List.ofArray([new _ast.Expr("Number", [10])])]);
                                return _fableCore.Seq.singleton(function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("li")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
                                  return function (arg1) {
                                    return _html.El.op_Dynamic(arg0, arg1);
                                  };
                                }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("click", trigger(op))]))(_fableCore.List.ofArray([(0, _html.text)("skip")]))])));
                              }() : _fableCore.Seq.empty();
                            }));
                          }))))
                        };
                      }();

                      if ((typeof _ret19 === "undefined" ? "undefined" : _typeof(_ret19)) === "object") return _ret19.v;
                    } else {
                      if (matchValue_2[1].Transformation.Case === "GroupBy") {
                        var _nodes2 = matchValue_2[1].Nodes;
                        return renderAddPropertyMenu(trigger, function (n) {
                          return (n !== "then" ? n !== "preview" : false) ? !(n.indexOf("and") === 0) : false;
                        }, _nodes2);
                      } else {
                        if (matchValue_2[1].Transformation.Case === "SortBy") {
                          var _nodes3 = matchValue_2[1].Nodes;
                          return renderAddPropertyMenu(trigger, function (n) {
                            return n !== "then" ? n !== "preview" : false;
                          }, _nodes3);
                        } else {
                          if (matchValue_2[1].Transformation.Case === "DropColumns") {
                            var _nodes4 = matchValue_2[1].Nodes;
                            return renderAddPropertyMenu(trigger, function (n) {
                              return n !== "then" ? n !== "preview" : false;
                            }, _nodes4);
                          } else {
                            return $target4();
                          }
                        }
                      }
                    }
                  } else {
                    return $target4();
                  }
                } else {
                  return $target4();
                }
              }))), function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "preview-body")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
                return _fableCore.Seq.singleton(_html.h.delayed(preview));
              })))]));

              var patternInput = state.Mapper.AbsoluteToLineCol(state.Body.Range.End);
              return {
                v: {
                  v: [patternInput[0], dom]
                }
              };
            }();

            if ((typeof _ret18 === "undefined" ? "undefined" : _typeof(_ret18)) === "object") return _ret18.v;
          }
        }();

        if ((typeof _ret17 === "undefined" ? "undefined" : _typeof(_ret17)) === "object") return _ret17.v;
      }
    }
  }

  var PreviewService = exports.PreviewService = function () {
    function PreviewService(checker, ed) {
      var _this = this;

      _classCallCheck(this, PreviewService);

      this.checker = checker;
      this.ed = ed;
      this.currentZone = null;
      this.lastCode = "";
      this.lastMapper = new _monaco.LocationMapper("");
      this.changingEditor = false;

      var trigger = function (ed_1) {
        return _this.createPivotPreview(ed_1);
      }(this.ed);

      this.ed.onDidChangeCursorPosition(function (ce) {
        if (!_this.changingEditor) {
          var code = _this.ed.getModel().getValue(1, false);

          _common.Log.trace("live", "Cursor position changed: code <> lastCode = %s", code !== _this.lastCode);

          (function (arg00) {
            _fableCore.Async.startImmediate(arg00);
          })(function (builder_) {
            return builder_.Delay(function (unitVar) {
              return builder_.Bind(_this.getUpdateEventAfterChange(), function (_arg4) {
                trigger(_arg4);
                return builder_.Zero();
              });
            });
          }(_fableCore.AsyncBuilder.singleton));
        }
      });
    }

    PreviewService.prototype.removeZone = function removeZone() {
      var _this2 = this;

      {
        var matchValue = this.currentZone;

        if (matchValue == null) {} else {
          (function () {
            var id = matchValue[0];

            _this2.ed.changeViewZones(function (accessor) {
              accessor.removeZone(id);
            });
          })();
        }
      }
      this.currentZone = null;
    };

    PreviewService.prototype.createAndAddZone = function createAndAddZone(endLine) {
      var _this3 = this;

      var zoneId = -1;
      var zone = {};
      var node = document.createElement('div');
      var wrapper = document.createElement('div');
      node.appendChild(wrapper);
      this.ed.changeViewZones(function (accessor) {
        {
          var matchValue = _this3.currentZone;

          if (matchValue != null) {
            var id = matchValue[0];
            accessor.removeZone(id);
          }
        }
        zone.afterLineNumber = endLine;
        zone.heightInPx = 300;
        zone.domNode = node;
        zoneId = accessor.addZone(zone);
        _this3.currentZone = [zoneId, zone, wrapper];
      });
    };

    PreviewService.prototype.updateZones = function updateZones(dom) {
      var _this4 = this;

      if (dom != null) {
        var line = dom[0];
        var dom_1 = dom[1];

        if (function () {
          return _this4.currentZone == null;
        }()) {
          var endLine = 0;
          this.createAndAddZone(endLine);
        }

        _common.Log.trace("live", "Render %O to zone %O", dom_1, this.currentZone);

        var matchValue = this.currentZone;

        if (matchValue != null) {
          (function () {
            var zone = matchValue[1];
            var wrapper = matchValue[2];
            var id = matchValue[0];

            if (zone.afterLineNumber !== line) {
              zone.afterLineNumber = line;

              _this4.ed.changeViewZones(function (accessor) {
                accessor.layoutZone(id);
              });
            }

            (function (dom_2) {
              (0, _html.renderTo)(wrapper, dom_2);
            })(dom_1);
          })();
        }
      } else {
        this.removeZone();
      }
    };

    PreviewService.prototype.getUpdateEventAfterChange = function getUpdateEventAfterChange() {
      var _this5 = this;

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          var code = _this5.ed.getModel().getValue(1, false);

          var position = _this5.ed.getPosition();

          if (code !== _this5.lastCode) {
            var _ret22 = function () {
              _this5.lastCode = code;
              _this5.lastMapper = new _monaco.LocationMapper(code);

              var loc = _this5.lastMapper.LineColToAbsolute((position.lineNumber + 0x80000000 >>> 0) - 0x80000000, (position.column + 0x80000000 >>> 0) - 0x80000000);

              return {
                v: builder_.Bind(_this5.checker.TypeCheck(code), function (_arg1) {
                  return builder_.Return(new PivotEditorAction("UpdateSource", [code, loc, _arg1[2], _this5.lastMapper]));
                })
              };
            }();

            if ((typeof _ret22 === "undefined" ? "undefined" : _typeof(_ret22)) === "object") return _ret22.v;
          } else {
            var _loc = _this5.lastMapper.LineColToAbsolute((position.lineNumber + 0x80000000 >>> 0) - 0x80000000, (position.column + 0x80000000 >>> 0) - 0x80000000);

            return builder_.Return(new PivotEditorAction("UpdateLocation", [_loc]));
          }
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    PreviewService.prototype.createPivotPreview = function createPivotPreview(ed) {
      var _this6 = this;

      var pivotEvent = new _fableCore.Event();

      var pivotState = function () {
        var Selection = null;
        var Focus = null;
        var Mapper = new _monaco.LocationMapper("");
        var Code = "";
        var Globals = new _fableCore.List();
        var Location = 0;
        var Body = null;
        return new PivotEditorState(Globals, Code, new _ast.Program((0, _astops.node)(new _ast.Range(0, 0), new _fableCore.List())), Mapper, Location, Body, new PivotEditorMenus("Hidden", []), Selection, Focus);
      }();

      _fableCore.Observable.add(function (evt) {
        try {
          _common.Log.trace("live", "Updating state %O with event %O", pivotState, evt);

          var oldState = pivotState;
          pivotState = updatePivotState(pivotState, evt);

          if ((evt.Case === "UpdateSource" ? false : true) ? oldState.Code !== pivotState.Code : false) {
            _this6.changingEditor = true;
            ed.getModel().setValue(pivotState.Code);
          }

          {
            var matchValue = pivotState.Selection;

            if (matchValue != null) {
              _this6.changingEditor = true;
              ed.setSelection(matchValue);
              {
                var Selection = null;
                pivotState = new PivotEditorState(pivotState.Globals, pivotState.Code, pivotState.Program, pivotState.Mapper, pivotState.Location, pivotState.Body, pivotState.Menus, Selection, pivotState.Focus);
              }
            }
          }

          if (_this6.changingEditor === true) {
            _this6.changingEditor = false;

            (function (arg00) {
              _fableCore.Async.startImmediate(arg00);
            })(function (builder_) {
              return builder_.Delay(function (unitVar) {
                _common.Log.trace("live", "Editor changed. Getting after change event...");

                return builder_.Bind(_this6.getUpdateEventAfterChange(), function (_arg2) {
                  _common.Log.trace("live", "Editor changed. Updating state %O with event %O", pivotState, _arg2);

                  pivotState = updatePivotState(pivotState, _arg2);
                  {
                    var dom = renderPivot(function (arg00) {
                      pivotEvent.Trigger(arg00);
                    }, pivotState);

                    _this6.updateZones(dom);
                  }
                  var matchValue = pivotState.Focus;

                  if (matchValue != null) {
                    var _ret23 = function () {
                      var sel = matchValue[1];
                      var focus = matchValue[0];

                      _common.Log.trace("live", "Set focus to element #%s", focus);

                      {
                        var Focus = null;
                        pivotState = new PivotEditorState(pivotState.Globals, pivotState.Code, pivotState.Program, pivotState.Mapper, pivotState.Location, pivotState.Body, pivotState.Menus, pivotState.Selection, Focus);
                      }
                      var element = document.getElementById(focus);
                      element.focus();

                      _fableCore.Seq.iterate(function (s) {
                        element.selectionStart = s;
                        element.selectionEnd = s;
                      }, function () {
                        var $var83 = sel;

                        if ($var83 != null) {
                          return [$var83];
                        } else {
                          return [];
                        }
                      }());

                      return {
                        v: builder_.Zero()
                      };
                    }();

                    if ((typeof _ret23 === "undefined" ? "undefined" : _typeof(_ret23)) === "object") return _ret23.v;
                  } else {
                    return builder_.Zero();
                  }
                });
              });
            }(_fableCore.AsyncBuilder.singleton));
          } else {
            var dom = renderPivot(function (arg00) {
              pivotEvent.Trigger(arg00);
            }, pivotState);

            _this6.updateZones(dom);
          }
        } catch (e) {
          _common.Log.exn("live", "Error when updating state %O with event %O: %O", pivotState, evt, e);
        }
      }, pivotEvent.Publish);

      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(globalTypes), function (_arg3) {
            pivotEvent.Trigger(new PivotEditorAction("InitializeGlobals", [_arg3]));
            return builder_.Zero();
          });
        });
      }(_fableCore.AsyncBuilder.singleton));

      return function (arg00) {
        pivotEvent.Trigger(arg00);
      };
    };

    return PreviewService;
  }();

  _fableCore.Util.setInterfaces(PreviewService.prototype, [], "Main.PreviewService");

  function callShowMethod(outId, cmd) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target1 = function $target1() {
          return builder_.Return(cmd);
        };

        if (cmd.Node.Case === "Expr") {
          if (cmd.Node.Fields[0].Entity != null) {
            if (cmd.Node.Fields[0].Entity.Type != null) {
              var inst = cmd.Node.Fields[0];
              var typ = cmd.Node.Fields[0].Entity.Type;
              {
                var matchValue = (0, _typeops.reduceType)(typ);

                if (matchValue.Case === "Object") {
                  var members = matchValue.Fields[0].Members;
                  var hasShow = members.some(function (_arg1) {
                    var $target1_1 = function $target1_1() {
                      return false;
                    };

                    if (_arg1.Case === "Method") {
                      if (_arg1.Fields[0] === "show") {
                        if (_arg1.Fields[1].tail != null) {
                          if (_arg1.Fields[1].head[2].Case === "Primitive") {
                            if (_arg1.Fields[1].head[2].Fields[0].Case === "String") {
                              if (_arg1.Fields[1].tail.tail == null) {
                                return true;
                              } else {
                                return $target1_1();
                              }
                            } else {
                              return $target1_1();
                            }
                          } else {
                            return $target1_1();
                          }
                        } else {
                          return $target1_1();
                        }
                      } else {
                        return $target1_1();
                      }
                    } else {
                      return $target1_1();
                    }
                  });

                  if (hasShow) {
                    var rng = new _ast.Range(cmd.Range.End, cmd.Range.End);
                    var outExpr = (0, _astops.node)(rng, new _ast.Expr("String", [outId]));

                    var args = _fableCore.List.ofArray([new _ast.Argument(null, outExpr)]);

                    var expr = (0, _astops.node)(rng, new _ast.Expr("Call", [inst, (0, _astops.node)(rng, new _ast.Name("show")), (0, _astops.node)(rng, args)]));
                    return builder_.Return((0, _astops.node)(cmd.Range, new _ast.Command("Expr", [expr])));
                  } else {
                    return builder_.Return(cmd);
                  }
                } else {
                  return builder_.Return(cmd);
                }
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
    }(_fableCore.AsyncBuilder.singleton);
  }

  function renderErrors(article, el, source, errors) {
    if (!_fableCore.Seq.isEmpty(errors)) {
      _common.Log.event("compiler", "errors", article, {
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
      var $var84 = tryFindChildElement(function () {
        var cls = "ia-compiled";
        return function (el) {
          return withClass(cls, el);
        };
      }(), parent);

      if ($var84 != null) {
        return function (el) {
          return _fableCore.String.trim(el.innerText, "both");
        }($var84);
      } else {
        return $var84;
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
          _common.Log.event("compiler", "run", article, text);

          return builder_.Bind(function (builder__1) {
            return builder__1.Delay(function (unitVar_1) {
              var $target1 = function $target1() {
                return builder__1.Bind(checkingService.TypeCheck(text), function (_arg1) {
                  return builder__1.Bind(_common.Async.map(function (cmd) {
                    return callShowMethod(outputId, cmd);
                  }, _arg1[2].Body.Node), function (_arg2) {
                    var prog = new _ast.Program(new _ast.Node(_arg1[2].Body.WhiteBefore, _arg1[2].Body.WhiteAfter, _arg1[2].Body.Range, _arg2, _arg1[2].Body.Entity));
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
          }(_fableCore.AsyncBuilder.singleton), function (_arg3) {
            var s = _series.series.create(function (builder__1) {
              return builder__1.Delay(function (unitVar_1) {
                return builder__1.Return([]);
              });
            }(_fableCore.AsyncBuilder.singleton), "", "", "");

            new _runtime.RuntimeContext("lol", "", "troll");

            (function (c) {
              return function (s_1) {
                return (0, _runtime.trimLeft)(c, s_1);
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
      }(_fableCore.AsyncBuilder.singleton);
    };

    setRunner(article, function (unitVar0) {
      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(run(source));
    });
    var optionsVisible = false;
    var editorVisible = false;
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

        if (optionsVisible) {
          editorService.UpdateSource(text);
        }

        resizeEditor(text);
      });
      resizeEditor(source);
      new PreviewService(checkingService, ed);
      return ed;
    });

    var getText = function getText(unitVar0) {
      return !ed.isValueCreated ? source : ed.value.getModel().getValue(1, false);
    };

    var setText = function setText(edit) {
      return function (membr) {
        return function (t) {
          _common.Log.event("options", "set-text", article, {
            edit: edit,
            member: membr
          });

          ed.value.getModel().setValue(t);

          if (function () {
            return showOptionsBtn != null;
          }() ? optionsVisible : false) {
            editorService.UpdateSource(t, true);
          }

          (function (arg00) {
            _fableCore.Async.startImmediate(arg00);
          })(run(t));
        };
      };
    };

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

        _common.Log.event("gui", "options", article, optionsVisible);

        if (optionsVisible) {
          editorService.UpdateSource(getText());
        }

        return null;
      };
    }, function () {
      var $var85 = showOptionsBtn;

      if ($var85 != null) {
        return [$var85];
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

      _common.Log.event("gui", "editor", article, editorVisible);

      if (editorVisible) {
        ed.value;
        editorService.UpdateSource(getText());
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

      _common.Log.event("gui", "share", article, text);

      (function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      })(function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind(checkingService.TypeCheck(text), function (_arg7) {
            return builder_.Bind(_common.Async.map(function () {
              var outId = "output-id-placeholder";
              return function (cmd) {
                return callShowMethod(outId, cmd);
              };
            }(), _arg7[2].Body.Node), function (_arg8) {
              var prog = new _ast.Program(new _ast.Node(_arg7[2].Body.WhiteBefore, _arg7[2].Body.WhiteAfter, _arg7[2].Body.Range, _arg8, _arg7[2].Body.Entity));
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
      }(_fableCore.AsyncBuilder.singleton));

      return null;
    };

    runBtn.onclick = function (e) {
      _common.Log.event("gui", "run", article, "click");

      return function (arg00) {
        _fableCore.Async.startImmediate(arg00);
      }(run(getText()));
    };

    return [ed, checkingService];
  }

  var servicesLookup = exports.servicesLookup = [];
  (0, _monaco.setupMonacoServices)(function (name) {
    return _fableCore.Seq.pick(function (tupledArg) {
      return (tupledArg[0].isValueCreated ? tupledArg[0].value.getModel().uri.toString() === name : false) ? tupledArg[1] : null;
    }, servicesLookup);
  });
  {
    var inputSequence = findElements(function () {
      var cls = "ia-figure";
      return function (el) {
        return withClass(cls, el);
      };
    }(), document.body);

    for (var _iterator = inputSequence, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var el = _ref;
      servicesLookup.push(setupEditor(el));
    }
  }
});
//# sourceMappingURL=main.js.map