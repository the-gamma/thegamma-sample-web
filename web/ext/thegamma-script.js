/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(7), __webpack_require__(19), __webpack_require__(10), __webpack_require__(14), __webpack_require__(11), !(function webpackMissingModule() { var e = new Error("Cannot find module \"../thegamma/monaco\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(13), !(function webpackMissingModule() { var e = new Error("Cannot find module \"../thegamma/services\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(28), __webpack_require__(8), __webpack_require__(9), !(function webpackMissingModule() { var e = new Error("Cannot find module \"../libraries/google/charts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(12), !(function webpackMissingModule() { var e = new Error("Cannot find module \"../thegamma/editors\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("../libraries/common"), require("fable-core"), require("../thegamma/ast/ast"), require("../thegamma/providers/providers"), require("../thegamma/providers/pivot"), require("../thegamma/analyzer/interpreter"), require("../thegamma/analyzer/typechecker"), require("../libraries/tables"), require("../thegamma/ast/astops"), require("../gui/html"), require("../thegamma/monaco"), require("../thegamma/ast/typeops"), require("../thegamma/services"), require("../thegamma/codegen/codegen"), require("../libraries/series"), require("../thegamma/codegen/runtime"), require("../libraries/google/charts"), require("../libraries/maps"), require("../thegamma/editors"), require("core-js"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.common, global.fableCore, global.ast, global.providers, global.pivot, global.interpreter, global.typechecker, global.tables, global.astops, global.html, global.monaco, global.typeops, global.services, global.codegen, global.series, global.runtime, global.charts, global.maps, global.editors, global.coreJs);
	    global.main = mod.exports;
	  }
	})(this, function (exports, _common, _fableCore, _ast, _providers, _pivot, _interpreter, _typechecker, _tables, _astops, _html, _monaco, _typeops, _services, _codegen, _series, _runtime, _charts, _maps, _editors) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.servicesLookup = exports.PreviewService = exports.PivotSection = exports.globalExprs = exports.globalTypes = exports.types = exports.ProvidedTypes = exports.services = undefined;
	  exports.findElements = findElements;
	  exports.tryFindChildElement = tryFindChildElement;
	  exports.findChildElement = findChildElement;
	  exports.withClass = withClass;
	  exports.pickMetaByType = pickMetaByType;
	  exports.pickPivotChainElement = pickPivotChainElement;
	  exports.tryFindPreview = tryFindPreview;
	  exports.commandAtLocation = commandAtLocation;
	  exports.chainElementAtLocation = chainElementAtLocation;
	  exports.transformName = transformName;
	  exports.createPivotSections = createPivotSections;
	  exports.tryCreatePivotPreview = tryCreatePivotPreview;
	  exports.callShowMethod = callShowMethod;
	  exports.renderErrors = renderErrors;
	  exports.setupEditor = setupEditor;
	
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
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
	
	      var restTys = _fableCore.List.ofArray([_providers.RestProvider.provideRestType(lookupNamed, "olympics1", services + "olympics", ""), _providers.RestProvider.provideRestType(lookupNamed, "olympics", services + "pivot", "source=" + services + "olympics"), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy1", services + "smlouvy", ""), _providers.RestProvider.provideRestType(lookupNamed, "smlouvy2", services + "pivot", "source=" + services + "smlouvy"), _providers.RestProvider.provideRestType(lookupNamed, "adventure", services + "adventure", ""), _providers.RestProvider.provideRestType(lookupNamed, "world", services + "worldbank", ""), (0, _pivot.providePivotType)(services + "pdata/olympics", "olympics2", lookupNamed, _fableCore.List.ofArray([["Games", new _ast.PrimitiveType("String", [])], ["Year", new _ast.PrimitiveType("Number", [])], ["Sport", new _ast.PrimitiveType("String", [])], ["Discipline", new _ast.PrimitiveType("String", [])], ["Athlete", new _ast.PrimitiveType("String", [])], ["Team", new _ast.PrimitiveType("String", [])], ["Gender", new _ast.PrimitiveType("String", [])], ["Event", new _ast.PrimitiveType("String", [])], ["Medal", new _ast.PrimitiveType("String", [])], ["Gold", new _ast.PrimitiveType("Number", [])], ["Silver", new _ast.PrimitiveType("Number", [])], ["Bronze", new _ast.PrimitiveType("Number", [])]])), (0, _pivot.providePivotType)(services + "pdata/smlouvy", "smlouvy", lookupNamed, _fableCore.List.ofArray([["Uzavřeno", new _ast.PrimitiveType("String", [])], ["Publikováno", new _ast.PrimitiveType("String", [])], ["Hodnota", new _ast.PrimitiveType("Number", [])], ["Chybí hodnota", new _ast.PrimitiveType("String", [])], ["Subjekt", new _ast.PrimitiveType("String", [])], ["Útvar", new _ast.PrimitiveType("String", [])], ["Schválil", new _ast.PrimitiveType("String", [])], ["Předmět", new _ast.PrimitiveType("String", [])], ["Odkaz", new _ast.PrimitiveType("String", [])], ["Platnost", new _ast.PrimitiveType("String", [])], ["Příjemci", new _ast.PrimitiveType("String", [])], ["Příjemci (IČO)", new _ast.PrimitiveType("String", [])]])), new _providers.ProvidedType("NamedType", ["value", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["seq", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])]), new _providers.ProvidedType("NamedType", ["async", _fableCore.List.ofArray(["a"]), new _ast.Type("Any", [])])]);
	
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
	          return _arg3.Case === "GlobalValue" ? [_arg3.Fields[0], _arg3.Fields[1], _arg3.Fields[2]] : null;
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
	          return (0, _interpreter.globalEntity)(tupledArg[0], tupledArg[2], tupledArg[1]);
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
	          return [tupledArg[0], tupledArg[1]];
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
	
	  function pickMetaByType(ctx, typ, metas) {
	    return _fableCore.Seq.tryPick(function (m) {
	      return (m.Context === ctx ? m.Type === typ : false) ? m.Data : null;
	    }, metas);
	  }
	
	  function pickPivotChainElement(ents) {
	    return _fableCore.Seq.tryPick(function (_arg1) {
	      return _arg1.Kind.Case === "ChainElement" ? function () {
	        var m = _arg1.Meta;
	        var matchValue = pickMetaByType("http://thegamma.net", "Pivot", _arg1.Meta);
	
	        if (matchValue != null) {
	          return [_arg1, matchValue];
	        }
	      }() : null;
	    }, ents);
	  }
	
	  function tryFindPreview(globals, ents, ent) {
	    var nm = new _ast.Name("preview");
	    var matchValue = ent.Type;
	
	    var $target1 = function $target1() {
	      return null;
	    };
	
	    if (matchValue != null) {
	      if (matchValue.Case === "Object") {
	        var activePatternResult101 = (0, _typechecker.$FindProperty$_$)(nm, matchValue.Fields[0]);
	
	        if (activePatternResult101 != null) {
	          var prev = activePatternResult101;
	          var res = (0, _interpreter.evaluate)(globals, ent);
	
	          var $target1_1 = function $target1_1() {
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
	              return $target1_1();
	            }
	          } else {
	            return $target1_1();
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
	  }
	
	  function commandAtLocation(loc, ents) {
	    return _fableCore.Seq.tryFind(function (tupledArg) {
	      var $target0 = function $target0() {
	        return true;
	      };
	
	      var $target1 = function $target1() {
	        return false;
	      };
	
	      if (tupledArg[1].Kind.Case === "LetCommand") {
	        if (tupledArg[0].Start <= loc ? tupledArg[0].End + 1 >= loc : false) {
	          return $target0();
	        } else {
	          return $target1();
	        }
	      } else {
	        if (tupledArg[1].Kind.Case === "RunCommand") {
	          if (tupledArg[0].Start <= loc ? tupledArg[0].End + 1 >= loc : false) {
	            return $target0();
	          } else {
	            return $target1();
	          }
	        } else {
	          return $target1();
	        }
	      }
	    }, ents.Entities);
	  }
	
	  function chainElementAtLocation(loc, ents) {
	    var chainElements = Array.from(_fableCore.Seq.choose(function (tupledArg) {
	      var $target1 = function $target1() {
	        return null;
	      };
	
	      if (tupledArg[1].Kind.Case === "ChainElement") {
	        if (tupledArg[0].Start <= loc ? tupledArg[0].End >= loc : false) {
	          var n = tupledArg[1].Kind.Fields[1];
	          return [tupledArg[0], tupledArg[1]];
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }, ents.Entities));
	
	    if (chainElements.length > 0) {
	      return _fableCore.Seq.reduce(function (f) {
	        return function (x, y) {
	          return f(x) < f(y) ? x : y;
	        };
	      }(function (tupledArg) {
	        return tupledArg[0].End;
	      }), chainElements);
	    }
	  }
	
	  function transformName(_arg1) {
	    return _arg1.Case === "Empty" ? "empty" : _arg1.Case === "FilterBy" ? "filter by" : _arg1.Case === "GetSeries" ? "get series" : _arg1.Case === "GroupBy" ? "group by" : _arg1.Case === "Paging" ? "paging" : _arg1.Case === "SortBy" ? "sort by" : "drop columns";
	  }
	
	  var PivotSection = exports.PivotSection = function PivotSection(transformation, entities) {
	    _classCallCheck(this, PivotSection);
	
	    this.Transformation = transformation;
	    this.Entities = entities;
	  };
	
	  _fableCore.Util.setInterfaces(PivotSection.prototype, ["FSharpRecord"], "Main.PivotSection");
	
	  function createPivotSections(tfss) {
	    var loop = function loop(acc) {
	      return function (tupledArg) {
	        return function (_arg1) {
	          var $target1 = function $target1() {
	            return _arg1.tail == null ? function () {
	              var current = new PivotSection(tupledArg[0], _fableCore.List.reverse(tupledArg[1]));
	              return _fableCore.List.reverse(_fableCore.List.ofArray([current], acc));
	            }() : function () {
	              var tfs = _arg1.head[1];
	              var e = _arg1.head[0];
	              var current = new PivotSection(tupledArg[0], _fableCore.List.reverse(tupledArg[1]));
	              return loop(_fableCore.List.ofArray([current], acc))([tfs.head, _fableCore.List.ofArray([e]), tfs.length])(_arg1.tail);
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
	              return loop(acc)([tfs.head, _fableCore.List.ofArray([e], tupledArg[1]), tupledArg[2]])(_tfss_);
	            } else {
	              return $target1();
	            }
	          } else {
	            return $target1();
	          }
	        };
	      };
	    };
	
	    var tfss_1 = _fableCore.List.choose(function (tupledArg) {
	      var tfs = _fableCore.List.filter(function (_arg2) {
	        return _arg2.Case === "Empty" ? false : true;
	      }, tupledArg[1]);
	
	      if (tfs.tail == null) {
	        return null;
	      } else {
	        return [tupledArg[0], tfs];
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
	
	  function tryCreatePivotPreview(globals, loc, bound) {
	    var matchValue = chainElementAtLocation(loc, bound);
	
	    if (matchValue != null) {
	      var _ret2 = function () {
	        var ent = matchValue[1];
	        var matchValue_1 = pickPivotChainElement(_fableCore.List.ofArray([ent]));
	
	        if (matchValue_1 != null) {
	          var _ret3 = function () {
	            var before = _fableCore.List.reverse(_common.List.unreduce(function (tupledArg) {
	              return pickPivotChainElement(_astops.Entity$2Eget_Antecedents.bind(tupledArg[0])());
	            }, [ent, new _fableCore.List()]));
	
	            var after = _common.List.unreduce(function (tupledArg) {
	              return pickPivotChainElement(bound.GetChildren(tupledArg[0]));
	            }, [ent, new _fableCore.List()]);
	
	            var sections = createPivotSections(_fableCore.List.append(before, _fableCore.List.append(_fableCore.List.ofArray([matchValue_1]), after)));
	            var preview = tryFindPreview(globals, bound, ent) != null ? tryFindPreview(globals, bound, ent) : function (value) {
	              value;
	            };
	            return {
	              v: {
	                v: function (arg0) {
	                  return function (arg1) {
	                    return _html.El.op_Dynamic(arg0, arg1);
	                  };
	                }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "pivot-preview")]))(_fableCore.List.ofArray([function (arg0) {
	                  return function (arg1) {
	                    return _html.El.op_Dynamic(arg0, arg1);
	                  };
	                }(_html.h)("ul")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "tabs")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	                  return _fableCore.Seq.append(_fableCore.Seq.collect(function (sec) {
	                    var selected = _fableCore.Seq.exists(function (secEnt) {
	                      return _fableCore.Util.equals(ent.Symbol, secEnt.Symbol);
	                    }, sec.Entities);
	
	                    return _fableCore.Seq.singleton(function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("li")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", selected ? "selected" : "")]))(_fableCore.List.ofArray([(0, _html.text)(transformName(sec.Transformation))])));
	                  }, sections), _fableCore.Seq.delay(function (unitVar_1) {
	                    return _fableCore.Seq.singleton(function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("li")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "add")]))(_fableCore.List.ofArray([function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-plus")]))(new _fableCore.List())])));
	                  }));
	                }))), function (arg0) {
	                  return function (arg1) {
	                    return _html.El.op_Dynamic(arg0, arg1);
	                  };
	                }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "preview-body")]))(_fableCore.List.ofArray([_html.h.delayed(preview)]))]))
	              }
	            };
	          }();
	
	          if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
	        }
	      }();
	
	      if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }
	
	  var PreviewService = exports.PreviewService = function () {
	    function PreviewService(checker, ed) {
	      var _this = this;
	
	      _classCallCheck(this, PreviewService);
	
	      this.ed = ed;
	      this.lastZone = null;
	      {
	        this.ed.onDidChangeCursorPosition(function (ce) {
	          (function (arg00) {
	            _fableCore.Async.startImmediate(arg00);
	          })(function (builder_) {
	            return builder_.Delay(function (unitVar) {
	              var code = _this.ed.getModel().getValue(1, false);
	
	              var mapper = new _monaco.LocationMapper(code);
	              var loc = mapper.LineColToAbsolute((ce.position.lineNumber + 0x80000000 >>> 0) - 0x80000000, (ce.position.column + 0x80000000 >>> 0) - 0x80000000);
	              return builder_.Bind(checker.TypeCheck(code), function (_arg1) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(globalTypes), function (_arg2) {
	                  return builder_.Combine(function () {
	                    var matchValue = commandAtLocation(loc, _arg1[1]);
	
	                    if (matchValue != null) {
	                      var cmdRange = matchValue[0];
	                      var patternInput = mapper.AbsoluteToLineCol(cmdRange.End + 1);
	                      var matchValue_1 = tryCreatePivotPreview(_arg2, loc, _arg1[1]);
	
	                      if (matchValue_1 != null) {
	                        {
	                          var endLine = patternInput[0] + 0;
	
	                          _this.createAndAddZone(endLine, matchValue_1);
	                        }
	                        return builder_.Zero();
	                      } else {
	                        _this.removeZone();
	
	                        return builder_.Zero();
	                      }
	                    } else {
	                      _this.removeZone();
	
	                      return builder_.Zero();
	                    }
	                  }(), builder_.Delay(function (unitVar_1) {
	                    return builder_.Zero();
	                  }));
	                });
	              });
	            });
	          }(_fableCore.AsyncBuilder.singleton));
	        });
	      }
	    }
	
	    _createClass(PreviewService, [{
	      key: "removeZone",
	      value: function removeZone() {
	        var matchValue = this.lastZone;
	
	        if (matchValue == null) {} else {
	          this.ed.changeViewZones(function (accessor) {
	            accessor.removeZone(matchValue);
	          });
	        }
	      }
	    }, {
	      key: "createAndAddZone",
	      value: function createAndAddZone(endLine, html) {
	        var _this2 = this;
	
	        var zoneId = -1;
	        var zone = {};
	        var node = document.createElement('div');
	        var wrapper = document.createElement('div');
	        node.appendChild(wrapper);
	        this.ed.changeViewZones(function (accessor) {
	          _fableCore.Seq.iterate(function (arg00) {
	            accessor.removeZone(arg00);
	          }, function () {
	            var $var1 = _this2.lastZone;
	
	            if ($var1 != null) {
	              return [$var1];
	            } else {
	              return [];
	            }
	          }());
	
	          zone.afterLineNumber = endLine;
	          zone.heightInPx = 100;
	          zone.domNode = node;
	          zoneId = accessor.addZone(zone);
	          _this2.lastZone = zoneId;
	        });
	
	        (function (dom) {
	          (0, _html.renderTo)(wrapper, dom);
	        })(html);
	
	        window.setTimeout(function (unitVar0) {
	          zone.heightInPx = wrapper.clientHeight;
	
	          _this2.ed.changeViewZones(function (a) {
	            a.layoutZone(zoneId);
	          });
	        }, 1);
	      }
	    }]);
	
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
	      var $var2 = tryFindChildElement(function () {
	        var cls = "ia-compiled";
	        return function (el) {
	          return withClass(cls, el);
	        };
	      }(), parent);
	
	      if ($var2 != null) {
	        return function (el) {
	          return _fableCore.String.trim(el.innerText, "both");
	        }($var2);
	      } else {
	        return $var2;
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
	      var $var3 = showOptionsBtn;
	
	      if ($var3 != null) {
	        return [$var3];
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
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = inputSequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var el = _step.value;
	        servicesLookup.push(setupEditor(el));
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore);
	    global.common = mod.exports;
	  }
	})(this, function (exports, _fableCore) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.List = exports.ListDictionaryModule = exports.ListDictionaryNode = exports.Async = exports.Async$2EStartAsNamedFuture$2EStatic = exports.Async$2ECreateNamedFuture$2EStatic = exports.Async$2EStartAsFuture$2EStatic = exports.Async$2ECreateFuture$2EStatic = exports.Async$2EFuture$2EStatic = exports.Async$2EAwaitFuture$2EStatic = exports.Http = exports.Log = exports.enabledCategories = undefined;
	  exports.isLocalHost = isLocalHost;
	
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
	
	  function isLocalHost() {
	    return (typeof window == 'undefined' ? true : window.location.hostname === "localhost") ? true : window.location.hostname === "127.0.0.1";
	  }
	
	  var enabledCategories = exports.enabledCategories = !isLocalHost() ? _fableCore.Set.create(new _fableCore.List(), new _fableCore.GenericComparer(function (x, y) {
	    return x < y ? -1 : x > y ? 1 : 0;
	  })) : _fableCore.Set.create(_fableCore.List.ofArray(["SYSTEM", "PARSING", "BINDER", "COMPLETIONS", "EDITORS", "TYPECHECKER", "PROVIDERS", "SERVICE", "CODEGEN", "INTERPRETER", "RUNTIME"]), new _fableCore.GenericComparer(function (x, y) {
	    return x < y ? -1 : x > y ? 1 : 0;
	  }));
	
	  var Log = exports.Log = function () {
	    function Log() {
	      _classCallCheck(this, Log);
	    }
	
	    _createClass(Log, null, [{
	      key: "setEnabled",
	      value: function setEnabled(cats) {
	        exports.enabledCategories = enabledCategories = cats;
	      }
	    }, {
	      key: "event",
	      value: function event(category, evt, article, data) {
	        logEvent(category, evt, article, data);
	      }
	    }, {
	      key: "message",
	      value: function message(level, category, msg) {
	        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	          args[_key - 3] = arguments[_key];
	        }
	
	        var args_1 = args == null ? [] : args;
	        var category_1 = category.toLocaleUpperCase();
	
	        if (!isLocalHost() ? level === "EXCEPTION" : false) {
	          logEvent("system", "exception", "", {
	            category: category_1,
	            msg: msg,
	            args: args_1
	          });
	        }
	
	        if ((level === "EXCEPTION" ? true : level === "ERROR") ? true : enabledCategories.has(category_1)) {
	          var dt = _fableCore.Date.now();
	
	          var p2 = function p2(s) {
	            return _fableCore.String.padLeft(String(s), 2, "0");
	          };
	
	          var p4 = function p4(s) {
	            return _fableCore.String.padLeft(String(s), 4, "0");
	          };
	
	          var prefix = _fableCore.String.fsFormat("[%s:%s:%s:%s] %s: ")(function (x) {
	            return x;
	          })(p2(_fableCore.Date.hour(dt)))(p2(_fableCore.Date.minute(dt)))(p2(_fableCore.Date.second(dt)))(p4(_fableCore.Date.millisecond(dt)))(category_1);
	
	          var color = function () {
	            var $var1 = null;
	
	            switch (level) {
	              case "TRACE":
	                $var1 = "color:#808080";
	                break;
	
	              case "EXCEPTION":
	                $var1 = "color:#c00000";
	                break;
	
	              case "ERROR":
	                $var1 = "color:#900000";
	                break;
	
	              default:
	                $var1 = "";
	            }
	
	            return $var1;
	          }();
	
	          console.log.apply(console, Array.from(_fableCore.Seq.append(["%c" + prefix + msg, color], args_1)));
	        }
	      }
	    }, {
	      key: "trace",
	      value: function trace(category, msg) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        Log.message.apply(Log, ["TRACE", category, msg].concat(args));
	      }
	    }, {
	      key: "exn",
	      value: function exn(category, msg) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	          args[_key3 - 2] = arguments[_key3];
	        }
	
	        Log.message.apply(Log, ["EXCEPTION", category, msg].concat(args));
	      }
	    }, {
	      key: "error",
	      value: function error(category, msg) {
	        for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	          args[_key4 - 2] = arguments[_key4];
	        }
	
	        Log.message.apply(Log, ["ERROR", category, msg].concat(args));
	      }
	    }]);
	
	    return Log;
	  }();
	
	  _fableCore.Util.setInterfaces(Log.prototype, [], "TheGamma.Common.Log");
	
	  var Http = exports.Http = function () {
	    function Http() {
	      _classCallCheck(this, Http);
	    }
	
	    _createClass(Http, null, [{
	      key: "Request",
	      value: function Request(meth, url, data, cookies) {
	        return _fableCore.Async.fromContinuations(function (tupledArg) {
	          var xhr = new XMLHttpRequest();
	          xhr.open(meth, url, true);
	          {
	            var $target1 = function $target1() {};
	
	            if (cookies != null) {
	              if (cookies !== "") {
	                var cookies_1 = cookies;
	                xhr.setRequestHeader("X-Cookie", cookies_1);
	              } else {
	                $target1();
	              }
	            } else {
	              $target1();
	            }
	          }
	
	          xhr.onreadystatechange = function (_arg1) {
	            if (xhr.readyState > 3 ? xhr.status === 200 : false) {
	              tupledArg[0](xhr.responseText);
	            }
	
	            return {};
	          };
	
	          xhr.send(data != null ? data : "");
	        });
	      }
	    }]);
	
	    return Http;
	  }();
	
	  _fableCore.Util.setInterfaces(Http.prototype, [], "TheGamma.Common.Http");
	
	  function Async_AwaitFuture_Static(f) {
	    return _fableCore.Async.fromContinuations(function (tupledArg) {
	      f.Then(tupledArg[0]);
	    });
	  }
	
	  exports.Async$2EAwaitFuture$2EStatic = Async_AwaitFuture_Static;
	
	  function Async_Future_Static(n, op, start) {
	    var _ref;
	
	    var res = new _fableCore.Choice("Choice1Of3", [null]);
	    var handlers = new _fableCore.List();
	    var running = false;
	
	    var trigger = function trigger(h) {
	      if (res.Case === "Choice2Of3") {
	        var v = res.Fields[0];
	        h(v);
	      } else {
	        if (res.Case === "Choice3Of3") {
	          var e = res.Fields[0];
	          throw e;
	        } else {
	          handlers = _fableCore.List.ofArray([h], handlers);
	        }
	      }
	    };
	
	    var ensureStarted = function ensureStarted(unitVar0) {
	      if (!running) {
	        _fableCore.Seq.iterate(function (n_1) {
	          Log.trace("system", "Starting future '%s'....", n_1);
	        }, function () {
	          var $var2 = n;
	
	          if ($var2 != null) {
	            return [$var2];
	          } else {
	            return [];
	          }
	        }());
	
	        running = true;
	
	        (function (arg00) {
	          _fableCore.Async.startImmediate(arg00);
	        })(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Combine(builder_.TryWith(builder_.Delay(function (unitVar_1) {
	              return builder_.Bind(op, function (_arg1) {
	                _fableCore.Seq.iterate(function (n_1) {
	                  Log.trace("system", "Future '%s' evaluated to: %O", n_1, _arg1);
	                }, function () {
	                  var $var3 = n;
	
	                  if ($var3 != null) {
	                    return [$var3];
	                  } else {
	                    return [];
	                  }
	                }());
	
	                res = new _fableCore.Choice("Choice2Of3", [_arg1]);
	                return builder_.Zero();
	              });
	            }), function (_arg2) {
	              Log.exn("system", "Evaluating future failed: %O", _arg2);
	              res = new _fableCore.Choice("Choice3Of3", [_arg2]);
	              return builder_.Zero();
	            }), builder_.Delay(function (unitVar_1) {
	              return builder_.For(handlers, function (_arg3) {
	                trigger(_arg3);
	                return builder_.Zero();
	              });
	            }));
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	      }
	    };
	
	    if (start === true) {
	      ensureStarted();
	    }
	
	    return _ref = {}, _defineProperty(_ref, _fableCore.Symbol.interfaces, ["TheGamma.Common.Future"]), _defineProperty(_ref, "Then", function Then(f) {
	      ensureStarted();
	      trigger(f);
	    }), _ref;
	  }
	
	  exports.Async$2EFuture$2EStatic = Async_Future_Static;
	
	  function Async_CreateFuture_Static(op) {
	    return function (arg00) {
	      return function (arg10) {
	        return function (arg20) {
	          return Async_Future_Static(arg00, arg10, arg20);
	        };
	      };
	    }()(op)(false);
	  }
	
	  exports.Async$2ECreateFuture$2EStatic = Async_CreateFuture_Static;
	
	  function Async_StartAsFuture_Static(op) {
	    return function (arg00) {
	      return function (arg10) {
	        return function (arg20) {
	          return Async_Future_Static(arg00, arg10, arg20);
	        };
	      };
	    }()(op)(true);
	  }
	
	  exports.Async$2EStartAsFuture$2EStatic = Async_StartAsFuture_Static;
	
	  function Async_CreateNamedFuture_Static(name, op) {
	    return function (arg00) {
	      return function (arg10) {
	        return function (arg20) {
	          return Async_Future_Static(arg00, arg10, arg20);
	        };
	      };
	    }(name)(op)(false);
	  }
	
	  exports.Async$2ECreateNamedFuture$2EStatic = Async_CreateNamedFuture_Static;
	
	  function Async_StartAsNamedFuture_Static(name, op) {
	    return function (arg00) {
	      return function (arg10) {
	        return function (arg20) {
	          return Async_Future_Static(arg00, arg10, arg20);
	        };
	      };
	    }(name)(op)(true);
	  }
	
	  exports.Async$2EStartAsNamedFuture$2EStatic = Async_StartAsNamedFuture_Static;
	
	  var Async = exports.Async = function ($exports) {
	    var _Array = $exports.Array = function ($exports) {
	      var Parallel = $exports.Parallel = function ($exports) {
	        var map = $exports.map = function map(f, ar) {
	          return function (builder_) {
	            return builder_.Delay(function (unitVar) {
	              var res = new Array(ar.length);
	
	              var work = _fableCore.Async.parallel(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	                return _fableCore.Seq.map(function (i) {
	                  return function (builder__1) {
	                    return builder__1.Delay(function (unitVar_2) {
	                      return builder__1.Bind(f(ar[i]), function (_arg1) {
	                        res[i] = _arg1;
	                        return builder__1.Zero();
	                      });
	                    });
	                  }(_fableCore.AsyncBuilder.singleton);
	                }, _fableCore.Seq.range(0, ar.length - 1));
	              })));
	
	              return builder_.Bind(work, function (_arg2) {
	                return builder_.Return(res);
	              });
	            });
	          }(_fableCore.AsyncBuilder.singleton);
	        };
	
	        return $exports;
	      }({});
	
	      var map = $exports.map = function map(f, ar) {
	        return function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            var res = new Array(ar.length);
	            return builder_.Combine(builder_.For(_fableCore.Seq.range(0, ar.length - 1), function (_arg1) {
	              return builder_.Bind(f(ar[_arg1]), function (_arg2) {
	                res[_arg1] = _arg2;
	                return builder_.Zero();
	              });
	            }), builder_.Delay(function (unitVar_1) {
	              return builder_.Return(res);
	            }));
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	      };
	
	      return $exports;
	    }({});
	
	    var collect = $exports.collect = function collect(f, l) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
	            return builder_.Bind(collect(f, l.tail), function (_arg2) {
	              return builder_.Return(_fableCore.List.append(_arg1, _arg2));
	            });
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    var choose = $exports.choose = function choose(f, l) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
	            return builder_.Bind(choose(f, l.tail), function (_arg2) {
	              return builder_.Return(_arg1 != null ? _fableCore.List.ofArray([_arg1], _arg2) : _arg2);
	            });
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    var map = $exports.map = function map(f, l) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
	            return builder_.Bind(map(f, l.tail), function (_arg2) {
	              return builder_.Return(_fableCore.List.ofArray([_arg1], _arg2));
	            });
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    var foldMap = $exports.foldMap = function foldMap(f, st, l) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return l.tail == null ? builder_.Return([st, new _fableCore.List()]) : builder_.Bind(f(st)(l.head), function (_arg1) {
	            return builder_.Bind(foldMap(f, _arg1[1], l.tail), function (_arg2) {
	              return builder_.Return([_arg2[0], _fableCore.List.ofArray([_arg1[0]], _arg2[1])]);
	            });
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    var fold = $exports.fold = function fold(f, st, l) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return l.tail == null ? builder_.Return(st) : builder_.Bind(f(st)(l.head), function (_arg1) {
	            return builder_.ReturnFrom(fold(f, _arg1, l.tail));
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    return $exports;
	  }({});
	
	  var ListDictionaryNode = exports.ListDictionaryNode = function () {
	    function ListDictionaryNode(result, nested) {
	      _classCallCheck(this, ListDictionaryNode);
	
	      this.Result = result;
	      this.Nested = nested;
	    }
	
	    _createClass(ListDictionaryNode, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return ListDictionaryNode;
	  }();
	
	  _fableCore.Util.setInterfaces(ListDictionaryNode.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Common.ListDictionaryNode");
	
	  var ListDictionaryModule = exports.ListDictionaryModule = function ($exports) {
	    var tryFind = $exports.tryFind = function tryFind(ks, dict) {
	      var loop = function loop(ks_1) {
	        return function (node) {
	          var matchValue = [ks_1, node];
	
	          var $target2 = function $target2() {
	            return null;
	          };
	
	          if (matchValue[0].tail != null) {
	            if (function () {
	              var ks_2 = matchValue[0].tail;
	              var k = matchValue[0].head;
	              var d = matchValue[1].Nested;
	              return d.has(k);
	            }()) {
	              var d = matchValue[1].Nested;
	              var k = matchValue[0].head;
	              var ks_2 = matchValue[0].tail;
	              return loop(ks_2)(d.get(k));
	            } else {
	              return $target2();
	            }
	          } else {
	            if (matchValue[1].Result != null) {
	              var r = matchValue[1].Result;
	              return r;
	            } else {
	              return $target2();
	            }
	          }
	        };
	      };
	
	      return loop(ks)(new ListDictionaryNode(null, dict));
	    };
	
	    var set = $exports.set = function set(ks, v, dict) {
	      var loop = function loop(ks_1) {
	        return function (dict_1) {
	          if (ks_1.tail != null) {
	            if (!dict_1.has(ks_1.head)) {
	              dict_1.set(ks_1.head, function () {
	                var Nested = new Map();
	                return new ListDictionaryNode(null, Nested);
	              }());
	            }
	
	            if (ks_1.tail.tail == null) {
	              dict_1.get(ks_1.head).Result = v;
	            } else {
	              loop(ks_1.tail)(dict_1.get(ks_1.head).Nested);
	            }
	          } else {
	            throw "Empty key not supported";
	          }
	        };
	      };
	
	      loop(ks)(dict);
	    };
	
	    var count = $exports.count = function count(dict) {
	      var loop = function loop(node) {
	        var nest = _fableCore.Seq.sumBy(function (kv) {
	          return loop(kv[1]);
	        }, node.Nested);
	
	        if (function () {
	          return node.Result != null;
	        }()) {
	          return 1 + nest;
	        } else {
	          return nest;
	        }
	      };
	
	      return _fableCore.Seq.sumBy(function (kv) {
	        return loop(kv[1]);
	      }, dict);
	    };
	
	    return $exports;
	  }({});
	
	  var List = exports.List = function ($exports) {
	    var groupWith = $exports.groupWith = function groupWith(f, list) {
	      var groups = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var e = _step.value;
	          var added = false;
	          var i = 0;
	
	          while (!added ? i < groups.length : false) {
	            if (f(e)(groups[i][0])) {
	              groups[i][1].push(e);
	              added = true;
	            }
	
	            i = i + 1;
	          }
	
	          if (!added) {
	            groups.push([e, Array.from(_fableCore.List.ofArray([e]))]);
	          }
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
	
	      return _fableCore.Seq.toList(_fableCore.Seq.map(function ($var4) {
	        return _fableCore.Seq.toList($var4[1]);
	      }, groups));
	    };
	
	    var unreduce = $exports.unreduce = function unreduce(f, s) {
	      return _fableCore.Seq.toList(_fableCore.Seq.unfold(function (s_1) {
	        var $var5 = f(s_1);
	
	        if ($var5 != null) {
	          return function (v) {
	            return [v, v];
	          }($var5);
	        } else {
	          return $var5;
	        }
	      }, s));
	    };
	
	    return $exports;
	  }({});
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.fableCore = mod.exports;
	    }
	})(this, function (exports) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.Tuple = Tuple;
	    exports.Tuple3 = Tuple3;
	
	    var _slicedToArray = function () {
	        function sliceIterator(arr, i) {
	            var _arr = [];
	            var _n = true;
	            var _d = false;
	            var _e = undefined;
	
	            try {
	                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	                    _arr.push(_s.value);
	
	                    if (i && _arr.length === i) break;
	                }
	            } catch (err) {
	                _d = true;
	                _e = err;
	            } finally {
	                try {
	                    if (!_n && _i["return"]) _i["return"]();
	                } finally {
	                    if (_d) throw _e;
	                }
	            }
	
	            return _arr;
	        }
	
	        return function (arr, i) {
	            if (Array.isArray(arr)) {
	                return arr;
	            } else if (Symbol.iterator in Object(arr)) {
	                return sliceIterator(arr, i);
	            } else {
	                throw new TypeError("Invalid attempt to destructure non-iterable instance");
	            }
	        };
	    }();
	
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
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var fableGlobal = function () {
	        var globalObj = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : null;
	        if (typeof globalObj.__FABLE_CORE__ == "undefined") {
	            globalObj.__FABLE_CORE__ = {
	                types: new Map(),
	                symbols: {
	                    interfaces: Symbol("interfaces"),
	                    typeName: Symbol("typeName")
	                }
	            };
	        }
	        return globalObj.__FABLE_CORE__;
	    }();
	    var FSymbol = fableGlobal.symbols;
	    exports.Symbol = FSymbol;
	    function Tuple(x, y) {
	        return [x, y];
	    }
	    function Tuple3(x, y, z) {
	        return [x, y, z];
	    }
	
	    var Util = exports.Util = function () {
	        function Util() {
	            _classCallCheck(this, Util);
	        }
	
	        // For legacy reasons the name is kept, but this method also adds
	        // the type name to a cache. Use it after declaration:
	        // Util.setInterfaces(Foo.prototype, ["IFoo", "IBar"], "MyModule.Foo");
	        Util.setInterfaces = function setInterfaces(proto, interfaces, typeName) {
	            if (Array.isArray(interfaces) && interfaces.length > 0) {
	                var currentInterfaces = proto[FSymbol.interfaces];
	                if (Array.isArray(currentInterfaces)) {
	                    for (var i = 0; i < interfaces.length; i++) {
	                        if (currentInterfaces.indexOf(interfaces[i]) == -1) currentInterfaces.push(interfaces[i]);
	                    }
	                } else proto[FSymbol.interfaces] = interfaces;
	            }
	            if (typeName) {
	                proto[FSymbol.typeName] = typeName;
	                fableGlobal.types.set(typeName, proto.constructor);
	            }
	        };
	
	        Util.hasInterface = function hasInterface(obj) {
	            for (var _len2 = arguments.length, interfaceNames = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                interfaceNames[_key2 - 1] = arguments[_key2];
	            }
	
	            return Array.isArray(obj[FSymbol.interfaces]) && obj[FSymbol.interfaces].some(function (x) {
	                return interfaceNames.indexOf(x) >= 0;
	            });
	        };
	
	        Util.getTypeFullName = function getTypeFullName(cons) {
	            if (cons.prototype && cons.prototype[FSymbol.typeName]) {
	                return cons.prototype[FSymbol.typeName];
	            } else {
	                return cons.name || "unknown";
	            }
	        };
	
	        Util.getTypeNamespace = function getTypeNamespace(cons) {
	            var fullName = Util.getTypeFullName(cons);
	            var i = fullName.lastIndexOf('.');
	            return i > -1 ? fullName.substr(0, i) : "";
	        };
	
	        Util.getTypeName = function getTypeName(cons) {
	            var fullName = Util.getTypeFullName(cons);
	            var i = fullName.lastIndexOf('.');
	            return fullName.substr(i + 1);
	        };
	
	        Util.getRestParams = function getRestParams(args, idx) {
	            for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++) {
	                restArgs[_key - idx] = args[_key];
	            }return restArgs;
	        };
	
	        Util.toString = function toString(o) {
	            return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
	        };
	
	        Util.equals = function equals(x, y) {
	            if (x == null) return y == null;else if (y == null) return false;else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return false;else if (Array.isArray(x) || ArrayBuffer.isView(x)) return x.length != y.length ? false : Seq.fold2(function (prev, v1, v2) {
	                return !prev ? prev : Util.equals(v1, v2);
	            }, true, x, y);else if (x instanceof Date) return FDate.equals(x, y);else if (Util.hasInterface(x, "System.IEquatable")) return x.Equals(y);else return x === y;
	        };
	
	        Util.compare = function compare(x, y) {
	            if (x == null) return y == null ? 0 : -1;else if (y == null) return -1;else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return -1;else if (Array.isArray(x) || ArrayBuffer.isView(x)) return x.length != y.length ? x.length < y.length ? -1 : 1 : Seq.fold2(function (prev, v1, v2) {
	                return prev !== 0 ? prev : Util.compare(v1, v2);
	            }, 0, x, y);else if (Util.hasInterface(x, "System.IComparable")) return x.CompareTo(y);else return x < y ? -1 : x > y ? 1 : 0;
	        };
	
	        Util.equalsRecords = function equalsRecords(x, y) {
	            var keys = Object.getOwnPropertyNames(x);
	            for (var i = 0; i < keys.length; i++) {
	                if (!Util.equals(x[keys[i]], y[keys[i]])) return false;
	            }
	            return true;
	        };
	
	        Util.compareRecords = function compareRecords(x, y) {
	            var keys = Object.getOwnPropertyNames(x);
	            for (var i = 0; i < keys.length; i++) {
	                var res = Util.compare(x[keys[i]], y[keys[i]]);
	                if (res !== 0) return res;
	            }
	            return 0;
	        };
	
	        Util.equalsUnions = function equalsUnions(x, y) {
	            if (x.Case !== y.Case) return false;
	            for (var i = 0; i < x.Fields.length; i++) {
	                if (!Util.equals(x.Fields[i], y.Fields[i])) return false;
	            }
	            return true;
	        };
	
	        Util.compareUnions = function compareUnions(x, y) {
	            var res = Util.compare(x.Case, y.Case);
	            if (res !== 0) return res;
	            for (var i = 0; i < x.Fields.length; i++) {
	                res = Util.compare(x.Fields[i], y.Fields[i]);
	                if (res !== 0) return res;
	            }
	            return 0;
	        };
	
	        Util.createDisposable = function createDisposable(f) {
	            var disp = { Dispose: f };
	            disp[FSymbol.interfaces] = ["System.IDisposable"];
	            return disp;
	        };
	
	        Util.createObj = function createObj(fields) {
	            return Seq.fold(function (acc, kv) {
	                acc[kv[0]] = kv[1];return acc;
	            }, {}, fields);
	        };
	
	        return Util;
	    }();
	
	    Util.toPlainJsObj = function (source) {
	        if (source != null && source.constructor != Object) {
	            var target = {};
	            var props = Object.getOwnPropertyNames(source);
	            for (var i = 0; i < props.length; i++) {
	                target[props[i]] = source[props[i]];
	            }
	            // Copy also properties from prototype, see #192
	            var proto = Object.getPrototypeOf(source);
	            if (proto != null) {
	                props = Object.getOwnPropertyNames(proto);
	                for (var _i = 0; _i < props.length; _i++) {
	                    var prop = Object.getOwnPropertyDescriptor(proto, props[_i]);
	                    if (prop.value) {
	                        target[props[_i]] = prop.value;
	                    } else if (prop.get) {
	                        target[props[_i]] = prop.get.apply(source);
	                    }
	                }
	            }
	            return target;
	        } else {
	            return source;
	        }
	    };
	
	    var Serialize = exports.Serialize = function () {
	        function Serialize() {
	            _classCallCheck(this, Serialize);
	        }
	
	        Serialize.toJson = function toJson(o) {
	            return JSON.stringify(o, function (k, v) {
	                if (ArrayBuffer.isView(v)) {
	                    return Array.from(v);
	                } else if (v != null && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
	                    if (v instanceof List || v instanceof FSet || v instanceof Set) {
	                        return {
	                            $type: v[FSymbol.typeName] || "System.Collections.Generic.HashSet",
	                            $values: Array.from(v) };
	                    } else if (v instanceof FMap || v instanceof Map) {
	                        return Seq.fold(function (o, kv) {
	                            o[kv[0]] = kv[1];return o;
	                        }, { $type: v[FSymbol.typeName] || "System.Collections.Generic.Dictionary" }, v);
	                    } else if (v[FSymbol.typeName]) {
	                        if (Util.hasInterface(v, "FSharpUnion", "FSharpRecord", "FSharpException")) {
	                            return Object.assign({ $type: v[FSymbol.typeName] }, v);
	                        } else {
	                            var proto = Object.getPrototypeOf(v),
	                                props = Object.getOwnPropertyNames(proto),
	                                _o = { $type: v[FSymbol.typeName] };
	                            for (var i = 0; i < props.length; i++) {
	                                var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
	                                if (prop.get) _o[props[i]] = prop.get.apply(v);
	                            }
	                            return _o;
	                        }
	                    }
	                }
	                return v;
	            });
	        };
	
	        Serialize.ofJson = function ofJson(json, expected) {
	            var parsed = JSON.parse(json, function (k, v) {
	                if (v == null) return v;else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && typeof v.$type === "string") {
	                    // Remove generic args and assembly info added by Newtonsoft.Json
	                    var type = v.$type.replace('+', '.'),
	                        i = type.indexOf('`');
	                    if (i > -1) {
	                        type = type.substr(0, i);
	                    } else {
	                        i = type.indexOf(',');
	                        type = i > -1 ? type.substr(0, i) : type;
	                    }
	                    if (type === "System.Collections.Generic.List" || type.indexOf("[]") === type.length - 2) {
	                        return v.$values;
	                    }
	                    if (type === "Microsoft.FSharp.Collections.FSharpList") {
	                        return List.ofArray(v.$values);
	                    } else if (type == "Microsoft.FSharp.Collections.FSharpSet") {
	                        return FSet.create(v.$values);
	                    } else if (type == "System.Collections.Generic.HashSet") {
	                        return new Set(v.$values);
	                    } else if (type == "Microsoft.FSharp.Collections.FSharpMap") {
	                        delete v.$type;
	                        return FMap.create(Object.getOwnPropertyNames(v).map(function (k) {
	                            return [k, v[k]];
	                        }));
	                    } else if (type == "System.Collections.Generic.Dictionary") {
	                        delete v.$type;
	                        return new Map(Object.getOwnPropertyNames(v).map(function (k) {
	                            return [k, v[k]];
	                        }));
	                    } else {
	                        var T = fableGlobal.types.get(type);
	                        if (T) {
	                            delete v.$type;
	                            return Object.assign(new T(), v);
	                        }
	                    }
	                } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[+-]\d{2}:\d{2}|Z)$/.test(v)) return FDate.parse(v);else return v;
	            });
	            if (parsed != null && typeof expected == "function" && !(parsed instanceof expected)) {
	                throw "JSON is not of type " + expected.name + ": " + json;
	            }
	            return parsed;
	        };
	
	        return Serialize;
	    }();
	
	    var GenericComparer = exports.GenericComparer = function GenericComparer(f) {
	        _classCallCheck(this, GenericComparer);
	
	        this.Compare = f || Util.compare;
	    };
	
	    Util.setInterfaces(GenericComparer.prototype, ["System.IComparer"], "Fable.Core.GenericComparer");
	
	    var Choice = exports.Choice = function () {
	        function Choice(t, d) {
	            _classCallCheck(this, Choice);
	
	            this.Case = t;
	            this.Fields = d;
	        }
	
	        Choice.Choice1Of2 = function Choice1Of2(v) {
	            return new Choice("Choice1Of2", [v]);
	        };
	
	        Choice.Choice2Of2 = function Choice2Of2(v) {
	            return new Choice("Choice2Of2", [v]);
	        };
	
	        Choice.prototype.Equals = function Equals(other) {
	            return Util.equalsUnions(this, other);
	        };
	
	        Choice.prototype.CompareTo = function CompareTo(other) {
	            return Util.compareUnions(this, other);
	        };
	
	        _createClass(Choice, [{
	            key: "valueIfChoice1",
	            get: function get() {
	                return this.Case === "Choice1Of2" ? this.Fields[0] : null;
	            }
	        }, {
	            key: "valueIfChoice2",
	            get: function get() {
	                return this.Case === "Choice2Of2" ? this.Fields[0] : null;
	            }
	        }]);
	
	        return Choice;
	    }();
	
	    Util.setInterfaces(Choice.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "Microsoft.FSharp.Core.FSharpChoice");
	
	    var TimeSpan = exports.TimeSpan = function (_Number) {
	        _inherits(TimeSpan, _Number);
	
	        function TimeSpan() {
	            _classCallCheck(this, TimeSpan);
	
	            return _possibleConstructorReturn(this, _Number.apply(this, arguments));
	        }
	
	        TimeSpan.create = function create() {
	            var d = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var h = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var m = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	            var s = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	            var ms = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	            switch (arguments.length) {
	                case 1:
	                    // ticks
	                    return this.fromTicks(arguments[0]);
	                case 3:
	                    // h,m,s
	                    d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
	                    break;
	                default:
	                    // d,h,m,s,ms
	                    d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
	                    break;
	            }
	            return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
	        };
	
	        TimeSpan.fromTicks = function fromTicks(ticks) {
	            return ticks / 10000;
	        };
	
	        TimeSpan.fromDays = function fromDays(d) {
	            return TimeSpan.create(d, 0, 0, 0);
	        };
	
	        TimeSpan.fromHours = function fromHours(h) {
	            return TimeSpan.create(h, 0, 0);
	        };
	
	        TimeSpan.fromMinutes = function fromMinutes(m) {
	            return TimeSpan.create(0, m, 0);
	        };
	
	        TimeSpan.fromSeconds = function fromSeconds(s) {
	            return TimeSpan.create(0, 0, s);
	        };
	
	        TimeSpan.days = function days(ts) {
	            return Math.floor(ts / 86400000);
	        };
	
	        TimeSpan.hours = function hours(ts) {
	            return Math.floor(ts % 86400000 / 3600000);
	        };
	
	        TimeSpan.minutes = function minutes(ts) {
	            return Math.floor(ts % 3600000 / 60000);
	        };
	
	        TimeSpan.seconds = function seconds(ts) {
	            return Math.floor(ts % 60000 / 1000);
	        };
	
	        TimeSpan.milliseconds = function milliseconds(ts) {
	            return Math.floor(ts % 1000);
	        };
	
	        TimeSpan.ticks = function ticks(ts) {
	            return ts * 10000;
	        };
	
	        TimeSpan.totalDays = function totalDays(ts) {
	            return ts / 86400000;
	        };
	
	        TimeSpan.totalHours = function totalHours(ts) {
	            return ts / 3600000;
	        };
	
	        TimeSpan.totalMinutes = function totalMinutes(ts) {
	            return ts / 60000;
	        };
	
	        TimeSpan.totalSeconds = function totalSeconds(ts) {
	            return ts / 1000;
	        };
	
	        TimeSpan.negate = function negate(ts) {
	            return ts * -1;
	        };
	
	        TimeSpan.add = function add(ts1, ts2) {
	            return ts1 + ts2;
	        };
	
	        TimeSpan.subtract = function subtract(ts1, ts2) {
	            return ts1 - ts2;
	        };
	
	        return TimeSpan;
	    }(Number);
	
	    TimeSpan.compare = Util.compare;
	    TimeSpan.compareTo = Util.compare;
	    TimeSpan.duration = Math.abs;
	    var DateKind = exports.DateKind = undefined;
	    (function (DateKind) {
	        DateKind[DateKind["UTC"] = 1] = "UTC";
	        DateKind[DateKind["Local"] = 2] = "Local";
	    })(DateKind || (exports.DateKind = DateKind = {}));
	
	    var FDate = function (_Date) {
	        _inherits(FDate, _Date);
	
	        function FDate() {
	            _classCallCheck(this, FDate);
	
	            return _possibleConstructorReturn(this, _Date.apply(this, arguments));
	        }
	
	        FDate.__changeKind = function __changeKind(d, kind) {
	            var d2 = void 0;
	            return d.kind == kind ? d : (d2 = new Date(d.getTime()), d2.kind = kind, d2);
	        };
	
	        FDate.__getValue = function __getValue(d, key) {
	            return d[(d.kind == DateKind.UTC ? "getUTC" : "get") + key]();
	        };
	
	        FDate.minValue = function minValue() {
	            return FDate.parse(-8640000000000000, 1);
	        };
	
	        FDate.maxValue = function maxValue() {
	            return FDate.parse(8640000000000000, 1);
	        };
	
	        FDate.parse = function parse(v, kind) {
	            var date = v == null ? new Date() : new Date(v);
	            if (isNaN(date.getTime())) throw "The string is not a valid Date.";
	            date.kind = kind || (typeof v == "string" && v.slice(-1) == "Z" ? DateKind.UTC : DateKind.Local);
	            return date;
	        };
	
	        FDate.create = function create(year, month, day) {
	            var h = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	            var m = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	            var s = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	            var ms = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];
	            var kind = arguments.length <= 7 || arguments[7] === undefined ? DateKind.Local : arguments[7];
	
	            var date = kind === DateKind.UTC ? new Date(Date.UTC(year, month - 1, day, h, m, s, ms)) : new Date(year, month - 1, day, h, m, s, ms);
	            if (isNaN(date.getTime())) throw "The parameters describe an unrepresentable Date.";
	            date.kind = kind;
	            return date;
	        };
	
	        FDate.utcNow = function utcNow() {
	            return FDate.parse(null, 1);
	        };
	
	        FDate.today = function today() {
	            return FDate.date(FDate.now());
	        };
	
	        FDate.isLeapYear = function isLeapYear(year) {
	            return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	        };
	
	        FDate.daysInMonth = function daysInMonth(year, month) {
	            return month == 2 ? FDate.isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
	        };
	
	        FDate.toUniversalTime = function toUniversalTime(d) {
	            return FDate.__changeKind(d, 1);
	        };
	
	        FDate.toLocalTime = function toLocalTime(d) {
	            return FDate.__changeKind(d, 2);
	        };
	
	        FDate.timeOfDay = function timeOfDay(d) {
	            return TimeSpan.create(0, FDate.hour(d), FDate.minute(d), FDate.second(d), FDate.millisecond(d));
	        };
	
	        FDate.date = function date(d) {
	            return FDate.create(FDate.year(d), FDate.month(d), FDate.day(d), 0, 0, 0, 0, d.kind);
	        };
	
	        FDate.day = function day(d) {
	            return FDate.__getValue(d, "Date");
	        };
	
	        FDate.hour = function hour(d) {
	            return FDate.__getValue(d, "Hours");
	        };
	
	        FDate.millisecond = function millisecond(d) {
	            return FDate.__getValue(d, "Milliseconds");
	        };
	
	        FDate.minute = function minute(d) {
	            return FDate.__getValue(d, "Minutes");
	        };
	
	        FDate.month = function month(d) {
	            return FDate.__getValue(d, "Month") + 1;
	        };
	
	        FDate.second = function second(d) {
	            return FDate.__getValue(d, "Seconds");
	        };
	
	        FDate.year = function year(d) {
	            return FDate.__getValue(d, "FullYear");
	        };
	
	        FDate.ticks = function ticks(d) {
	            return (d.getTime() + 6.2135604e+13 /* millisecondsJSOffset */) * 10000;
	        };
	
	        FDate.dayOfWeek = function dayOfWeek(d) {
	            return FDate.__getValue(d, "Day");
	        };
	
	        FDate.dayOfYear = function dayOfYear(d) {
	            var year = FDate.year(d);
	            var month = FDate.month(d);
	            var day = FDate.day(d);
	            for (var i = 1; i < month; i++) {
	                day += FDate.daysInMonth(year, i);
	            }return day;
	        };
	
	        FDate.add = function add(d, ts) {
	            return FDate.parse(d.getTime() + ts, d.kind);
	        };
	
	        FDate.addDays = function addDays(d, v) {
	            return FDate.parse(d.getTime() + v * 86400000, d.kind);
	        };
	
	        FDate.addHours = function addHours(d, v) {
	            return FDate.parse(d.getTime() + v * 3600000, d.kind);
	        };
	
	        FDate.addMinutes = function addMinutes(d, v) {
	            return FDate.parse(d.getTime() + v * 60000, d.kind);
	        };
	
	        FDate.addSeconds = function addSeconds(d, v) {
	            return FDate.parse(d.getTime() + v * 1000, d.kind);
	        };
	
	        FDate.addMilliseconds = function addMilliseconds(d, v) {
	            return FDate.parse(d.getTime() + v, d.kind);
	        };
	
	        FDate.addTicks = function addTicks(d, v) {
	            return FDate.parse(d.getTime() + v / 10000, d.kind);
	        };
	
	        FDate.addYears = function addYears(d, v) {
	            var newMonth = FDate.month(d);
	            var newYear = FDate.year(d) + v;
	            var daysInMonth = FDate.daysInMonth(newYear, newMonth);
	            var newDay = Math.min(daysInMonth, FDate.day(d));
	            return FDate.create(newYear, newMonth, newDay, FDate.hour(d), FDate.minute(d), FDate.second(d), FDate.millisecond(d), d.kind);
	        };
	
	        FDate.addMonths = function addMonths(d, v) {
	            var newMonth = FDate.month(d) + v;
	            var newMonth_ = 0;
	            var yearOffset = 0;
	            if (newMonth > 12) {
	                newMonth_ = newMonth % 12;
	                yearOffset = Math.floor(newMonth / 12);
	                newMonth = newMonth_;
	            } else if (newMonth < 1) {
	                newMonth_ = 12 + newMonth % 12;
	                yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
	                newMonth = newMonth_;
	            }
	            var newYear = FDate.year(d) + yearOffset;
	            var daysInMonth = FDate.daysInMonth(newYear, newMonth);
	            var newDay = Math.min(daysInMonth, FDate.day(d));
	            return FDate.create(newYear, newMonth, newDay, FDate.hour(d), FDate.minute(d), FDate.second(d), FDate.millisecond(d), d.kind);
	        };
	
	        FDate.subtract = function subtract(d, that) {
	            return typeof that == "number" ? FDate.parse(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
	        };
	
	        FDate.toLongDateString = function toLongDateString(d) {
	            return d.toDateString();
	        };
	
	        FDate.toShortDateString = function toShortDateString(d) {
	            return d.toLocaleDateString();
	        };
	
	        FDate.toLongTimeString = function toLongTimeString(d) {
	            return d.toLocaleTimeString();
	        };
	
	        FDate.toShortTimeString = function toShortTimeString(d) {
	            return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	        };
	
	        FDate.equals = function equals(d1, d2) {
	            return d1.getTime() == d2.getTime();
	        };
	
	        return FDate;
	    }(Date);
	
	    FDate.now = FDate.parse;
	    FDate.toBinary = FDate.ticks;
	    FDate.compareTo = Util.compare;
	    FDate.compare = Util.compare;
	    FDate.op_Addition = FDate.add;
	    FDate.op_Subtraction = FDate.subtract;
	    exports.Date = FDate;
	
	    var Timer = exports.Timer = function () {
	        function Timer(interval) {
	            _classCallCheck(this, Timer);
	
	            this.Interval = interval > 0 ? interval : 100;
	            this.AutoReset = true;
	            this._elapsed = new Event();
	        }
	
	        Timer.prototype.Dispose = function Dispose() {
	            this.Enabled = false;
	            this._isDisposed = true;
	        };
	
	        Timer.prototype.Close = function Close() {
	            this.Dispose();
	        };
	
	        Timer.prototype.Start = function Start() {
	            this.Enabled = true;
	        };
	
	        Timer.prototype.Stop = function Stop() {
	            this.Enabled = false;
	        };
	
	        _createClass(Timer, [{
	            key: "Elapsed",
	            get: function get() {
	                return this._elapsed;
	            }
	        }, {
	            key: "Enabled",
	            get: function get() {
	                return this._enabled;
	            },
	            set: function set(x) {
	                var _this3 = this;
	
	                if (!this._isDisposed && this._enabled != x) {
	                    if (this._enabled = x) {
	                        if (this.AutoReset) {
	                            this._intervalId = setInterval(function () {
	                                if (!_this3.AutoReset) _this3.Enabled = false;
	                                _this3._elapsed.Trigger(new Date());
	                            }, this.Interval);
	                        } else {
	                            this._timeoutId = setTimeout(function () {
	                                _this3.Enabled = false;
	                                _this3._timeoutId = 0;
	                                if (_this3.AutoReset) _this3.Enabled = true;
	                                _this3._elapsed.Trigger(new Date());
	                            }, this.Interval);
	                        }
	                    } else {
	                        if (this._timeoutId) {
	                            clearTimeout(this._timeoutId);
	                            this._timeoutId = 0;
	                        }
	                        if (this._intervalId) {
	                            clearInterval(this._intervalId);
	                            this._intervalId = 0;
	                        }
	                    }
	                }
	            }
	        }]);
	
	        return Timer;
	    }();
	
	    Util.setInterfaces(Timer.prototype, ["System.IDisposable"]);
	
	    var FString = function () {
	        function FString() {
	            _classCallCheck(this, FString);
	        }
	
	        FString.fsFormat = function fsFormat(str) {
	            function isObject(x) {
	                return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
	            }
	            function formatOnce(str, rep) {
	                return str.replace(FString.fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
	                    switch (format) {
	                        case "f":
	                        case "F":
	                            rep = rep.toFixed(precision || 6);
	                            break;
	                        case "g":
	                        case "G":
	                            rep = rep.toPrecision(precision);
	                            break;
	                        case "e":
	                        case "E":
	                            rep = rep.toExponential(precision);
	                            break;
	                        case "A":
	                            try {
	                                rep = JSON.stringify(rep, function (k, v) {
	                                    return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v;
	                                });
	                            } catch (err) {
	                                // Fallback for objects with circular references
	                                rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) {
	                                    return k + ": " + String(rep[k]);
	                                }).join(", ") + "}";
	                            }
	                            break;
	                    }
	                    var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
	                    if (!isNaN(pad = parseInt(pad))) {
	                        var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
	                        rep = FString.padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
	                    }
	                    var once = prefix + (plusPrefix ? "+" + rep : rep);
	                    return once.replace(/%/g, "%%");
	                });
	            }
	            function makeFn(str) {
	                return function (rep) {
	                    var str2 = formatOnce(str, rep);
	                    return FString.fsFormatRegExp.test(str2) ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
	                };
	            }
	            var _cont = void 0;
	            return function (cont) {
	                _cont = cont;
	                return FString.fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
	            };
	        };
	
	        FString.format = function format(str) {
	            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	            }
	
	            return str.replace(FString.formatRegExp, function (match, idx, pad, format) {
	                var rep = args[idx],
	                    padSymbol = " ";
	                if (typeof rep === "number") {
	                    switch ((format || "").substring(0, 1)) {
	                        case "f":
	                        case "F":
	                            rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
	                            break;
	                        case "g":
	                        case "G":
	                            rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
	                            break;
	                        case "e":
	                        case "E":
	                            rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
	                            break;
	                        case "p":
	                        case "P":
	                            rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
	                            break;
	                        default:
	                            var m = /^(0+)(\.0+)?$/.exec(format);
	                            if (m != null) {
	                                var decs = 0;
	                                if (m[2] != null) rep = rep.toFixed(decs = m[2].length - 1);
	                                pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
	                                padSymbol = "0";
	                            } else if (format) {
	                                rep = format;
	                            }
	                    }
	                } else if (rep instanceof Date) {
	                    if (format.length === 1) {
	                        switch (format) {
	                            case "D":
	                                rep = rep.toDateString();
	                                break;
	                            case "T":
	                                rep = rep.toLocaleTimeString();
	                                break;
	                            case "d":
	                                rep = rep.toLocaleDateString();
	                                break;
	                            case "t":
	                                rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	                                break;
	                            case "o":
	                            case "O":
	                                if (rep.kind === DateKind.Local) {
	                                    var offset = rep.getTimezoneOffset() * -1;
	                                    rep = FString.format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, FDate.second(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
	                                } else {
	                                    rep = rep.toISOString();
	                                }
	                        }
	                    } else {
	                        rep = format.replace(/\w+/g, function (match2) {
	                            var rep2 = match2;
	                            switch (match2.substring(0, 1)) {
	                                case "y":
	                                    rep2 = match2.length < 4 ? FDate.year(rep) % 100 : FDate.year(rep);
	                                    break;
	                                case "h":
	                                    rep2 = rep.getHours() > 12 ? FDate.hour(rep) % 12 : FDate.hour(rep);
	                                    break;
	                                case "M":
	                                    rep2 = FDate.month(rep);
	                                    break;
	                                case "d":
	                                    rep2 = FDate.day(rep);
	                                    break;
	                                case "H":
	                                    rep2 = FDate.hour(rep);
	                                    break;
	                                case "m":
	                                    rep2 = FDate.minute(rep);
	                                    break;
	                                case "s":
	                                    rep2 = FDate.second(rep);
	                                    break;
	                            }
	                            if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
	                                rep2 = "0" + rep2;
	                            }
	                            return rep2;
	                        });
	                    }
	                }
	                if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
	                    rep = FString.padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
	                }
	                return rep;
	            });
	        };
	
	        FString.endsWith = function endsWith(str, search) {
	            var idx = str.lastIndexOf(search);
	            return idx >= 0 && idx == str.length - search.length;
	        };
	
	        FString.initialize = function initialize(n, f) {
	            if (n < 0) throw "String length must be non-negative";
	            var xs = new Array(n);
	            for (var i = 0; i < n; i++) {
	                xs[i] = f(i);
	            }return xs.join("");
	        };
	
	        FString.isNullOrEmpty = function isNullOrEmpty(str) {
	            return typeof str !== "string" || str.length == 0;
	        };
	
	        FString.isNullOrWhiteSpace = function isNullOrWhiteSpace(str) {
	            return typeof str !== "string" || /^\s*$/.test(str);
	        };
	
	        FString.join = function join(delimiter, xs) {
	            xs = typeof xs == "string" ? Util.getRestParams(arguments, 1) : xs;
	            return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
	        };
	
	        FString.newGuid = function newGuid() {
	            var uuid = "";
	            for (var i = 0; i < 32; i++) {
	                var random = Math.random() * 16 | 0;
	                if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
	                uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	            }
	            return uuid;
	        };
	
	        FString.padLeft = function padLeft(str, len, ch, isRight) {
	            ch = ch || " ";
	            str = String(str);
	            len = len - str.length;
	            for (var i = -1; ++i < len;) {
	                str = isRight ? str + ch : ch + str;
	            }return str;
	        };
	
	        FString.padRight = function padRight(str, len, ch) {
	            return FString.padLeft(str, len, ch, true);
	        };
	
	        FString.replace = function replace(str, search, _replace) {
	            return str.replace(new RegExp(FRegExp.escape(search), "g"), _replace);
	        };
	
	        FString.replicate = function replicate(n, x) {
	            return FString.initialize(n, function () {
	                return x;
	            });
	        };
	
	        FString.split = function split(str, splitters, count, removeEmpty) {
	            count = typeof count == "number" ? count : null;
	            removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
	            if (count < 0) throw "Count cannot be less than zero";
	            if (count === 0) return [];
	            splitters = Array.isArray(splitters) ? splitters : Util.getRestParams(arguments, 1);
	            splitters = splitters.map(function (x) {
	                return FRegExp.escape(x);
	            });
	            splitters = splitters.length > 0 ? splitters : [" "];
	            var m = void 0;
	            var i = 0;
	            var splits = [];
	            var reg = new RegExp(splitters.join("|"), "g");
	            while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
	                if (!removeEmpty || m.index - i > 0) {
	                    count = count != null ? count - 1 : count;
	                    splits.push(str.substring(i, m.index));
	                }
	                i = reg.lastIndex;
	            }
	            if (!removeEmpty || str.length - i > 0) splits.push(str.substring(i));
	            return splits;
	        };
	
	        FString.trim = function trim(str, side) {
	            for (var _len4 = arguments.length, chars = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	                chars[_key4 - 2] = arguments[_key4];
	            }
	
	            if (side == "both" && chars.length == 0) return str.trim();
	            if (side == "start" || side == "both") {
	                var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + FRegExp.escape(chars.join("")) + "]+");
	                str = str.replace(reg, "");
	            }
	            if (side == "end" || side == "both") {
	                var _reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + FRegExp.escape(chars.join("")) + "]+$");
	                str = str.replace(_reg, "");
	            }
	            return str;
	        };
	
	        return FString;
	    }();
	
	    FString.fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
	    FString.formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
	    exports.String = FString;
	
	    var FRegExp = function () {
	        function FRegExp() {
	            _classCallCheck(this, FRegExp);
	        }
	
	        FRegExp.create = function create(pattern, options) {
	            var flags = "g";
	            flags += options & 1 ? "i" : "";
	            flags += options & 2 ? "m" : "";
	            return new RegExp(pattern, flags);
	        };
	
	        FRegExp.escape = function escape(str) {
	            return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	        };
	
	        FRegExp.unescape = function unescape(str) {
	            return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
	        };
	
	        FRegExp.isMatch = function isMatch(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            return reg.test(str);
	        };
	
	        FRegExp.match = function match(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            return reg.exec(str);
	        };
	
	        FRegExp.matches = function matches(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            if (!reg.global) throw "Non-global RegExp"; // Prevent infinite loop
	            var m = void 0;
	            var matches = [];
	            while ((m = reg.exec(str)) !== null) {
	                matches.push(m);
	            }return matches;
	        };
	
	        FRegExp.options = function options(reg) {
	            var options = 256; // ECMAScript
	            options |= reg.ignoreCase ? 1 : 0;
	            options |= reg.multiline ? 2 : 0;
	            return options;
	        };
	
	        FRegExp.replace = function replace(reg, input, replacement, limit) {
	            var offset = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	            function replacer() {
	                var res = arguments[0];
	                if (limit !== 0) {
	                    limit--;
	                    var match = [];
	                    var len = arguments.length;
	                    for (var i = 0; i < len - 2; i++) {
	                        match.push(arguments[i]);
	                    }match.index = arguments[len - 2];
	                    match.input = arguments[len - 1];
	                    res = replacement(match);
	                }
	                return res;
	            }
	            if (typeof reg == "string") {
	                var tmp = reg;
	                reg = FRegExp.create(input, limit);
	                input = tmp;
	                limit = undefined;
	            }
	            if (typeof replacement == "function") {
	                limit = limit == null ? -1 : limit;
	                return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
	            } else {
	                if (limit != null) {
	                    var m = void 0;
	                    var sub1 = input.substring(offset);
	                    var matches = FRegExp.matches(reg, sub1);
	                    var sub2 = matches.length > limit ? (m = matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
	                    return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
	                } else {
	                    return input.replace(reg, replacement);
	                }
	            }
	        };
	
	        FRegExp.split = function split(reg, input, limit) {
	            var offset = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	
	            if (typeof reg == "string") {
	                var tmp = reg;
	                reg = FRegExp.create(input, limit);
	                input = tmp;
	                limit = undefined;
	            }
	            input = input.substring(offset);
	            return input.split(reg, limit);
	        };
	
	        return FRegExp;
	    }();
	
	    exports.RegExp = FRegExp;
	
	    var FArray = function () {
	        function FArray() {
	            _classCallCheck(this, FArray);
	        }
	
	        FArray.addRangeInPlace = function addRangeInPlace(range, xs) {
	            Seq.iterate(function (x) {
	                return xs.push(x);
	            }, range);
	        };
	
	        FArray.copyTo = function copyTo(source, sourceIndex, target, targetIndex, count) {
	            while (count--) {
	                target[targetIndex++] = source[sourceIndex++];
	            }
	        };
	
	        FArray.partition = function partition(f, xs) {
	            var ys = [],
	                zs = [],
	                j = 0,
	                k = 0;
	            for (var i = 0; i < xs.length; i++) {
	                if (f(xs[i])) ys[j++] = xs[i];else zs[k++] = xs[i];
	            }return Tuple(ys, zs);
	        };
	
	        FArray.permute = function permute(f, xs) {
	            // Keep the type of the array
	            var ys = xs.map(function () {
	                return null;
	            });
	            var checkFlags = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                var j = f(i);
	                if (j < 0 || j >= xs.length) throw "Not a valid permutation";
	                ys[j] = xs[i];
	                checkFlags[j] = 1;
	            }
	            for (var _i2 = 0; _i2 < xs.length; _i2++) {
	                if (checkFlags[_i2] != 1) throw "Not a valid permutation";
	            }return ys;
	        };
	
	        FArray.removeInPlace = function removeInPlace(item, xs) {
	            var i = xs.indexOf(item);
	            if (i > -1) {
	                xs.splice(i, 1);
	                return true;
	            }
	            return false;
	        };
	
	        FArray.setSlice = function setSlice(target, lower, upper, source) {
	            var length = (upper || target.length - 1) - lower;
	            if (ArrayBuffer.isView(target) && source.length <= length) target.set(source, lower);else for (var i = lower | 0, j = 0; j <= length; i++, j++) {
	                target[i] = source[j];
	            }
	        };
	
	        FArray.sortInPlaceBy = function sortInPlaceBy(f, xs) {
	            var dir = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	            return xs.sort(function (x, y) {
	                x = f(x);
	                y = f(y);
	                return (x < y ? -1 : x == y ? 0 : 1) * dir;
	            });
	        };
	
	        FArray.unzip = function unzip(xs) {
	            var bs = new Array(xs.length),
	                cs = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                bs[i] = xs[i][0];
	                cs[i] = xs[i][1];
	            }
	            return Tuple(bs, cs);
	        };
	
	        FArray.unzip3 = function unzip3(xs) {
	            var bs = new Array(xs.length),
	                cs = new Array(xs.length),
	                ds = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                bs[i] = xs[i][0];
	                cs[i] = xs[i][1];
	                ds[i] = xs[i][2];
	            }
	            return Tuple3(bs, cs, ds);
	        };
	
	        return FArray;
	    }();
	
	    exports.Array = FArray;
	
	    var List = exports.List = function () {
	        function List(head, tail) {
	            _classCallCheck(this, List);
	
	            this.head = head;
	            this.tail = tail;
	        }
	
	        List.prototype.ToString = function ToString() {
	            return "[" + Array.from(this).map(Util.toString).join("; ") + "]";
	        };
	
	        List.prototype.Equals = function Equals(x) {
	            var iter1 = this[Symbol.iterator](),
	                iter2 = x[Symbol.iterator]();
	            for (var i = 0;; i++) {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                if (cur1.done) return cur2.done ? true : false;else if (cur2.done) return false;else if (!Util.equals(cur1.value, cur2.value)) return false;
	            }
	        };
	
	        List.prototype.CompareTo = function CompareTo(x) {
	            var acc = 0;
	            var iter1 = this[Symbol.iterator](),
	                iter2 = x[Symbol.iterator]();
	            for (var i = 0;; i++) {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                if (cur1.done) return cur2.done ? acc : -1;else if (cur2.done) return 1;else {
	                    acc = Util.compare(cur1.value, cur2.value);
	                    if (acc != 0) return acc;
	                }
	            }
	        };
	
	        List.ofArray = function ofArray(args, base) {
	            var acc = base || new List();
	            for (var i = args.length - 1; i >= 0; i--) {
	                acc = new List(args[i], acc);
	            }
	            return acc;
	        };
	
	        List.prototype[Symbol.iterator] = function () {
	            var cur = this;
	            return {
	                next: function next() {
	                    var tmp = cur;
	                    cur = cur.tail;
	                    return { done: tmp.tail == null, value: tmp.head };
	                }
	            };
	        };
	
	        List.prototype.append = function append(ys) {
	            return List.append(this, ys);
	        };
	
	        List.append = function append(xs, ys) {
	            return Seq.fold(function (acc, x) {
	                return new List(x, acc);
	            }, ys, List.reverse(xs));
	        };
	
	        List.prototype.choose = function choose(f, xs) {
	            return List.choose(f, this);
	        };
	
	        List.choose = function choose(f, xs) {
	            var r = Seq.fold(function (acc, x) {
	                var y = f(x);
	                return y != null ? new List(y, acc) : acc;
	            }, new List(), xs);
	            return List.reverse(r);
	        };
	
	        List.prototype.collect = function collect(f) {
	            return List.collect(f, this);
	        };
	
	        List.collect = function collect(f, xs) {
	            return Seq.fold(function (acc, x) {
	                return acc.append(f(x));
	            }, new List(), xs);
	        };
	        // TODO: should be xs: Iterable<List<T>>
	
	
	        List.concat = function concat(xs) {
	            return List.collect(function (x) {
	                return x;
	            }, xs);
	        };
	
	        List.prototype.filter = function filter(f) {
	            return List.filter(f, this);
	        };
	
	        List.filter = function filter(f, xs) {
	            return List.reverse(Seq.fold(function (acc, x) {
	                return f(x) ? new List(x, acc) : acc;
	            }, new List(), xs));
	        };
	
	        List.prototype.where = function where(f) {
	            return List.filter(f, this);
	        };
	
	        List.where = function where(f, xs) {
	            return List.filter(f, xs);
	        };
	
	        List.initialize = function initialize(n, f) {
	            if (n < 0) {
	                throw "List length must be non-negative";
	            }
	            var xs = new List();
	            for (var i = 1; i <= n; i++) {
	                xs = new List(f(n - i), xs);
	            }
	            return xs;
	        };
	
	        List.prototype.map = function map(f) {
	            return List.map(f, this);
	        };
	
	        List.map = function map(f, xs) {
	            return List.reverse(Seq.fold(function (acc, x) {
	                return new List(f(x), acc);
	            }, new List(), xs));
	        };
	
	        List.prototype.mapIndexed = function mapIndexed(f) {
	            return List.mapIndexed(f, this);
	        };
	
	        List.mapIndexed = function mapIndexed(f, xs) {
	            return List.reverse(Seq.fold(function (acc, x, i) {
	                return new List(f(i, x), acc);
	            }, new List(), xs));
	        };
	
	        List.prototype.partition = function partition(f) {
	            return List.partition(f, this);
	        };
	
	        List.partition = function partition(f, xs) {
	            return Seq.fold(function (acc, x) {
	                var lacc = acc[0],
	                    racc = acc[1];
	                return f(x) ? Tuple(new List(x, lacc), racc) : Tuple(lacc, new List(x, racc));
	            }, Tuple(new List(), new List()), List.reverse(xs));
	        };
	
	        List.replicate = function replicate(n, x) {
	            return List.initialize(n, function () {
	                return x;
	            });
	        };
	
	        List.prototype.reverse = function reverse() {
	            return List.reverse(this);
	        };
	
	        List.reverse = function reverse(xs) {
	            return Seq.fold(function (acc, x) {
	                return new List(x, acc);
	            }, new List(), xs);
	        };
	
	        List.singleton = function singleton(x) {
	            return new List(x, new List());
	        };
	
	        List.prototype.slice = function slice(lower, upper) {
	            return List.slice(lower, upper, this);
	        };
	
	        List.slice = function slice(lower, upper, xs) {
	            var noLower = lower == null;
	            var noUpper = upper == null;
	            return List.reverse(Seq.fold(function (acc, x, i) {
	                return (noLower || lower <= i) && (noUpper || i <= upper) ? new List(x, acc) : acc;
	            }, new List(), xs));
	        };
	        /* ToDo: instance unzip() */
	
	
	        List.unzip = function unzip(xs) {
	            return Seq.foldBack(function (xy, acc) {
	                return Tuple(new List(xy[0], acc[0]), new List(xy[1], acc[1]));
	            }, xs, Tuple(new List(), new List()));
	        };
	        /* ToDo: instance unzip3() */
	
	
	        List.unzip3 = function unzip3(xs) {
	            return Seq.foldBack(function (xyz, acc) {
	                return Tuple3(new List(xyz[0], acc[0]), new List(xyz[1], acc[1]), new List(xyz[2], acc[2]));
	            }, xs, Tuple3(new List(), new List(), new List()));
	        };
	
	        _createClass(List, [{
	            key: "length",
	            get: function get() {
	                return Seq.fold(function (acc, x) {
	                    return acc + 1;
	                }, 0, this);
	            }
	        }]);
	
	        return List;
	    }();
	
	    Util.setInterfaces(List.prototype, ["System.IEquatable", "System.IComparable"], "Microsoft.FSharp.Collections.FSharpList");
	
	    var Seq = exports.Seq = function () {
	        function Seq() {
	            _classCallCheck(this, Seq);
	        }
	
	        Seq.__failIfNone = function __failIfNone(res) {
	            if (res == null) throw "Seq did not contain any matching element";
	            return res;
	        };
	
	        Seq.toList = function toList(xs) {
	            return Seq.foldBack(function (x, acc) {
	                return new List(x, acc);
	            }, xs, new List());
	        };
	
	        Seq.ofList = function ofList(xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (x) {
	                    return x.tail != null ? [x.head, x.tail] : null;
	                }, xs);
	            });
	        };
	
	        Seq.ofArray = function ofArray(xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return i < xs.length ? [xs[i], i + 1] : null;
	                }, 0);
	            });
	        };
	
	        Seq.append = function append(xs, ys) {
	            return Seq.delay(function () {
	                var firstDone = false;
	                var i = xs[Symbol.iterator]();
	                var iters = Tuple(i, null);
	                return Seq.unfold(function () {
	                    var cur = void 0;
	                    if (!firstDone) {
	                        cur = iters[0].next();
	                        if (!cur.done) {
	                            return [cur.value, iters];
	                        } else {
	                            firstDone = true;
	                            iters = [null, ys[Symbol.iterator]()];
	                        }
	                    }
	                    cur = iters[1].next();
	                    return !cur.done ? [cur.value, iters] : null;
	                }, iters);
	            });
	        };
	
	        Seq.average = function average(xs) {
	            var count = 1;
	            var sum = Seq.reduce(function (acc, x) {
	                count++;
	                return acc + x;
	            }, xs);
	            return sum / count;
	        };
	
	        Seq.averageBy = function averageBy(f, xs) {
	            var count = 1;
	            var sum = Seq.reduce(function (acc, x) {
	                count++;
	                return (count === 2 ? f(acc) : acc) + f(x);
	            }, xs);
	            return sum / count;
	        };
	
	        Seq.countBy = function countBy(f, xs) {
	            return Seq.map(function (kv) {
	                return Tuple(kv[0], Seq.count(kv[1]));
	            }, Seq.groupBy(f, xs));
	        };
	
	        Seq.concat = function concat(xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                var output = null;
	                return Seq.unfold(function (innerIter) {
	                    var hasFinished = false;
	                    while (!hasFinished) {
	                        if (innerIter == null) {
	                            var cur = iter.next();
	                            if (!cur.done) {
	                                innerIter = cur.value[Symbol.iterator]();
	                            } else {
	                                hasFinished = true;
	                            }
	                        } else {
	                            var _cur = innerIter.next();
	                            if (!_cur.done) {
	                                output = _cur.value;
	                                hasFinished = true;
	                            } else {
	                                innerIter = null;
	                            }
	                        }
	                    }
	                    return innerIter != null && output != null ? [output, innerIter] : null;
	                }, null);
	            });
	        };
	
	        Seq.collect = function collect(f, xs) {
	            return Seq.concat(Seq.map(f, xs));
	        };
	
	        Seq.choose = function choose(f, xs) {
	            var trySkipToNext = function trySkipToNext(iter) {
	                var cur = iter.next();
	                if (!cur.done) {
	                    var y = f(cur.value);
	                    return y != null ? Tuple(y, iter) : trySkipToNext(iter);
	                }
	                return void 0;
	            };
	            return Seq.delay(function () {
	                return Seq.unfold(function (iter) {
	                    return trySkipToNext(iter);
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.compareWith = function compareWith(f, xs, ys) {
	            var nonZero = Seq.tryFind(function (i) {
	                return i != 0;
	            }, Seq.map2(function (x, y) {
	                return f(x, y);
	            }, xs, ys));
	            return nonZero != null ? nonZero : Seq.count(xs) - Seq.count(ys);
	        };
	
	        Seq.delay = function delay(f) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                return f()[Symbol.iterator]();
	            });
	        };
	
	        Seq.distinctBy = function distinctBy(f, xs) {
	            return Seq.choose(function (tup) {
	                return tup[0];
	            }, Seq.scan(function (tup, x) {
	                var acc = tup[1];
	                var k = f(x);
	                return acc.has(k) ? Tuple(null, acc) : Tuple(x, FSet.add(k, acc));
	            }, Tuple(null, FSet.create()), xs));
	        };
	
	        Seq.distinct = function distinct(xs) {
	            return Seq.distinctBy(function (x) {
	                return x;
	            }, xs);
	        };
	
	        Seq.empty = function empty() {
	            return Seq.unfold(function () {
	                return void 0;
	            });
	        };
	
	        Seq.enumerateWhile = function enumerateWhile(cond, xs) {
	            return Seq.concat(Seq.unfold(function () {
	                return cond() ? [xs, true] : null;
	            }));
	        };
	
	        Seq.enumerateThenFinally = function enumerateThenFinally(xs, finalFn) {
	            return Seq.delay(function () {
	                var iter = void 0;
	                try {
	                    iter = xs[Symbol.iterator]();
	                } finally {
	                    finalFn();
	                }
	                return Seq.unfold(function (iter) {
	                    try {
	                        var cur = iter.next();
	                        return !cur.done ? [cur.value, iter] : null;
	                    } finally {
	                        finalFn();
	                    }
	                    return void 0;
	                }, iter);
	            });
	        };
	
	        Seq.enumerateUsing = function enumerateUsing(disp, work) {
	            var isDisposed = false;
	            var disposeOnce = function disposeOnce() {
	                if (!isDisposed) {
	                    isDisposed = true;
	                    disp.Dispose();
	                }
	            };
	            try {
	                return Seq.enumerateThenFinally(work(disp), disposeOnce);
	            } finally {
	                disposeOnce();
	            }
	            return void 0;
	        };
	
	        Seq.exactlyOne = function exactlyOne(xs) {
	            var iter = xs[Symbol.iterator]();
	            var fst = iter.next();
	            if (fst.done) throw "Seq was empty";
	            var snd = iter.next();
	            if (!snd.done) throw "Seq had multiple items";
	            return fst.value;
	        };
	
	        Seq.except = function except(itemsToExclude, source) {
	            var exclusionItems = Array.from(itemsToExclude);
	            var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
	                return !exclusionItems.some(function (excludedItem) {
	                    return Util.equals(excludedItem, element);
	                });
	            };
	            return Seq.filter(testIsNotInExclusionItems, source);
	        };
	
	        Seq.exists = function exists(f, xs) {
	            function aux(iter) {
	                var cur = iter.next();
	                return !cur.done && (f(cur.value) || aux(iter));
	            }
	            return aux(xs[Symbol.iterator]());
	        };
	
	        Seq.exists2 = function exists2(f, xs, ys) {
	            function aux(iter1, iter2) {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
	            }
	            return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
	        };
	
	        Seq.filter = function filter(f, xs) {
	            function trySkipToNext(iter) {
	                var cur = iter.next();
	                if (!cur.done) return f(cur.value) ? [cur.value, iter] : trySkipToNext(iter);
	                return void 0;
	            }
	            return Seq.delay(function () {
	                return Seq.unfold(trySkipToNext, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.where = function where(f, xs) {
	            return Seq.filter(f, xs);
	        };
	
	        Seq.fold = function fold(f, acc, xs) {
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
	                return xs.reduce(f, acc);
	            } else {
	                var cur = void 0;
	                for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                    cur = iter.next();
	                    if (cur.done) break;
	                    acc = f(acc, cur.value, i);
	                }
	                return acc;
	            }
	        };
	
	        Seq.foldBack = function foldBack(f, xs, acc) {
	            var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            for (var i = arr.length - 1; i >= 0; i--) {
	                acc = f(arr[i], acc, i);
	            }
	            return acc;
	        };
	
	        Seq.fold2 = function fold2(f, acc, xs, ys) {
	            var iter1 = xs[Symbol.iterator](),
	                iter2 = ys[Symbol.iterator]();
	            var cur1 = void 0,
	                cur2 = void 0;
	            for (var i = 0;; i++) {
	                cur1 = iter1.next();
	                cur2 = iter2.next();
	                if (cur1.done || cur2.done) {
	                    break;
	                }
	                acc = f(acc, cur1.value, cur2.value, i);
	            }
	            return acc;
	        };
	
	        Seq.foldBack2 = function foldBack2(f, xs, ys, acc) {
	            var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
	            for (var i = ar1.length - 1; i >= 0; i--) {
	                acc = f(ar1[i], ar2[i], acc, i);
	            }
	            return acc;
	        };
	
	        Seq.forAll = function forAll(f, xs) {
	            return Seq.fold(function (acc, x) {
	                return acc && f(x);
	            }, true, xs);
	        };
	
	        Seq.forAll2 = function forAll2(f, xs, ys) {
	            return Seq.fold2(function (acc, x, y) {
	                return acc && f(x, y);
	            }, true, xs, ys);
	        };
	        // TODO: Should return a Iterable<Tuple<K, Iterable<T>>> instead of a Map<K, Iterable<T>>
	        // Seq.groupBy : ('T -> 'Key) -> seq<'T> -> seq<'Key * seq<'T>>
	
	
	        Seq.groupBy = function groupBy(f, xs) {
	            return Seq.fold(function (acc, x) {
	                var k = f(x),
	                    vs = acc.get(k);
	                return vs != null ? acc.set(k, new List(x, vs)) : acc.set(k, List.singleton(x));
	            }, new Map(), xs);
	        };
	
	        Seq.tryHead = function tryHead(xs) {
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            return cur.done ? null : cur.value;
	        };
	
	        Seq.head = function head(xs) {
	            return Seq.__failIfNone(Seq.tryHead(xs));
	        };
	
	        Seq.initialize = function initialize(n, f) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return i < n ? [f(i), i + 1] : null;
	                }, 0);
	            });
	        };
	
	        Seq.initializeInfinite = function initializeInfinite(f) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return [f(i), i + 1];
	                }, 0);
	            });
	        };
	
	        Seq.tryItem = function tryItem(i, xs) {
	            if (i < 0) return null;
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return i < xs.length ? xs[i] : null;
	            for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
	                var cur = iter.next();
	                if (cur.done) return null;
	                if (j === i) return cur.value;
	            }
	        };
	
	        Seq.item = function item(i, xs) {
	            return Seq.__failIfNone(Seq.tryItem(i, xs));
	        };
	
	        Seq.iterate = function iterate(f, xs) {
	            Seq.fold(function (_, x) {
	                return f(x);
	            }, null, xs);
	        };
	
	        Seq.iterate2 = function iterate2(f, xs, ys) {
	            Seq.fold2(function (_, x, y) {
	                return f(x, y);
	            }, null, xs, ys);
	        };
	
	        Seq.iterateIndexed = function iterateIndexed(f, xs) {
	            Seq.fold(function (_, x, i) {
	                return f(i, x);
	            }, null, xs);
	        };
	
	        Seq.iterateIndexed2 = function iterateIndexed2(f, xs, ys) {
	            Seq.fold2(function (_, x, y, i) {
	                return f(i, x, y);
	            }, null, xs, ys);
	        };
	
	        Seq.isEmpty = function isEmpty(xs) {
	            var i = xs[Symbol.iterator]();
	            return i.next().done;
	        };
	
	        Seq.tryLast = function tryLast(xs) {
	            try {
	                return Seq.reduce(function (_, x) {
	                    return x;
	                }, xs);
	            } catch (err) {
	                return null;
	            }
	        };
	
	        Seq.last = function last(xs) {
	            return Seq.__failIfNone(Seq.tryLast(xs));
	        };
	        // A static 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
	
	
	        Seq.count = function count(xs) {
	            return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : Seq.fold(function (acc, x) {
	                return acc + 1;
	            }, 0, xs);
	        };
	
	        Seq.map = function map(f, xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (iter) {
	                    var cur = iter.next();
	                    return !cur.done ? [f(cur.value), iter] : null;
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.mapIndexed = function mapIndexed(f, xs) {
	            return Seq.delay(function () {
	                var i = 0;
	                return Seq.unfold(function (iter) {
	                    var cur = iter.next();
	                    return !cur.done ? [f(i++, cur.value), iter] : null;
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.map2 = function map2(f, xs, ys) {
	            return Seq.delay(function () {
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next();
	                    return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
	                });
	            });
	        };
	
	        Seq.mapIndexed2 = function mapIndexed2(f, xs, ys) {
	            return Seq.delay(function () {
	                var i = 0;
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next();
	                    return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
	                });
	            });
	        };
	
	        Seq.map3 = function map3(f, xs, ys, zs) {
	            return Seq.delay(function () {
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                var iter3 = zs[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next(),
	                        cur3 = iter3.next();
	                    return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
	                });
	            });
	        };
	
	        Seq.mapFold = function mapFold(f, acc, xs) {
	            var result = [];
	            var r = void 0;
	            var cur = void 0;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                cur = iter.next();
	                if (cur.done) break;
	
	                var _f = f(acc, cur.value);
	
	                var _f2 = _slicedToArray(_f, 2);
	
	                r = _f2[0];
	                acc = _f2[1];
	
	                result.push(r);
	            }
	            return Tuple(result, acc);
	        };
	
	        Seq.mapFoldBack = function mapFoldBack(f, xs, acc) {
	            var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            var result = [];
	            var r = void 0;
	            for (var i = arr.length - 1; i >= 0; i--) {
	                var _f3 = f(arr[i], acc);
	
	                var _f4 = _slicedToArray(_f3, 2);
	
	                r = _f4[0];
	                acc = _f4[1];
	
	                result.push(r);
	            }
	            return Tuple(result, acc);
	        };
	
	        Seq.max = function max(xs) {
	            return Seq.reduce(function (acc, x) {
	                return Util.compare(acc, x) === 1 ? acc : x;
	            }, xs);
	        };
	
	        Seq.maxBy = function maxBy(f, xs) {
	            return Seq.reduce(function (acc, x) {
	                return Util.compare(f(acc), f(x)) === 1 ? acc : x;
	            }, xs);
	        };
	
	        Seq.min = function min(xs) {
	            return Seq.reduce(function (acc, x) {
	                return Util.compare(acc, x) === -1 ? acc : x;
	            }, xs);
	        };
	
	        Seq.minBy = function minBy(f, xs) {
	            return Seq.reduce(function (acc, x) {
	                return Util.compare(f(acc), f(x)) === -1 ? acc : x;
	            }, xs);
	        };
	
	        Seq.pairwise = function pairwise(xs) {
	            return Seq.skip(1, Seq.scan(function (last, next) {
	                return Tuple(last[1], next);
	            }, Tuple(0, 0), xs));
	        };
	
	        Seq.permute = function permute(f, xs) {
	            return Seq.ofArray(FArray.permute(f, Array.from(xs)));
	        };
	
	        Seq.rangeStep = function rangeStep(first, step, last) {
	            if (step === 0) throw "Step cannot be 0";
	            return Seq.unfold(function (x) {
	                return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
	            }, first);
	        };
	
	        Seq.rangeChar = function rangeChar(first, last) {
	            return Seq.unfold(function (x) {
	                return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
	            }, first);
	        };
	
	        Seq.range = function range(first, last) {
	            return Seq.rangeStep(first, 1, last);
	        };
	
	        Seq.readOnly = function readOnly(xs) {
	            return Seq.map(function (x) {
	                return x;
	            }, xs);
	        };
	
	        Seq.reduce = function reduce(f, xs) {
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return xs.reduce(f);
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            if (cur.done) throw "Seq was empty";
	            var acc = cur.value;
	            for (;;) {
	                cur = iter.next();
	                if (cur.done) break;
	                acc = f(acc, cur.value);
	            }
	            return acc;
	        };
	
	        Seq.reduceBack = function reduceBack(f, xs) {
	            var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            if (ar.length === 0) throw "Seq was empty";
	            var acc = ar[ar.length - 1];
	            for (var i = ar.length - 2; i >= 0; i--) {
	                acc = f(ar[i], acc, i);
	            }return acc;
	        };
	
	        Seq.replicate = function replicate(n, x) {
	            return Seq.initialize(n, function () {
	                return x;
	            });
	        };
	
	        Seq.reverse = function reverse(xs) {
	            var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
	            return Seq.ofArray(ar.reverse());
	        };
	
	        Seq.scan = function scan(f, seed, xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (acc) {
	                    if (acc == null) return [seed, seed];
	                    var cur = iter.next();
	                    if (!cur.done) {
	                        acc = f(acc, cur.value);
	                        return [acc, acc];
	                    }
	                    return void 0;
	                }, null);
	            });
	        };
	
	        Seq.scanBack = function scanBack(f, xs, seed) {
	            return Seq.reverse(Seq.scan(function (acc, x) {
	                return f(x, acc);
	            }, seed, Seq.reverse(xs)));
	        };
	
	        Seq.singleton = function singleton(x) {
	            return Seq.unfold(function (x) {
	                return x != null ? [x, null] : null;
	            }, x);
	        };
	
	        Seq.skip = function skip(n, xs) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                var iter = xs[Symbol.iterator]();
	                for (var i = 1; i <= n; i++) {
	                    if (iter.next().done) throw "Seq has not enough elements";
	                }return iter;
	            });
	        };
	
	        Seq.skipWhile = function skipWhile(f, xs) {
	            return Seq.delay(function () {
	                var hasPassed = false;
	                return Seq.filter(function (x) {
	                    return hasPassed || (hasPassed = !f(x));
	                }, xs);
	            });
	        };
	
	        Seq.sortWith = function sortWith(f, xs) {
	            var ys = Array.from(xs);
	            return Seq.ofArray(ys.sort(f));
	        };
	
	        Seq.sum = function sum(xs) {
	            return Seq.fold(function (acc, x) {
	                return acc + x;
	            }, 0, xs);
	        };
	
	        Seq.sumBy = function sumBy(f, xs) {
	            return Seq.fold(function (acc, x) {
	                return acc + f(x);
	            }, 0, xs);
	        };
	
	        Seq.tail = function tail(xs) {
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            if (cur.done) throw "Seq was empty";
	            return _defineProperty({}, Symbol.iterator, function () {
	                return iter;
	            });
	        };
	
	        Seq.take = function take(n, xs) {
	            var truncate = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (i) {
	                    if (i < n) {
	                        var cur = iter.next();
	                        if (!cur.done) return [cur.value, i + 1];
	                        if (!truncate) throw "Seq has not enough elements";
	                    }
	                    return void 0;
	                }, 0);
	            });
	        };
	
	        Seq.truncate = function truncate(n, xs) {
	            return Seq.take(n, xs, true);
	        };
	
	        Seq.takeWhile = function takeWhile(f, xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (i) {
	                    var cur = iter.next();
	                    if (!cur.done && f(cur.value)) return [cur.value, null];
	                    return void 0;
	                }, 0);
	            });
	        };
	
	        Seq.tryFind = function tryFind(f, xs, defaultValue) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return defaultValue === void 0 ? null : defaultValue;
	                if (f(cur.value, i)) return cur.value;
	            }
	        };
	
	        Seq.find = function find(f, xs) {
	            return Seq.__failIfNone(Seq.tryFind(f, xs));
	        };
	
	        Seq.tryFindBack = function tryFindBack(f, xs, defaultValue) {
	            var match = null;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return match === null ? defaultValue === void 0 ? null : defaultValue : match;
	                if (f(cur.value, i)) match = cur.value;
	            }
	        };
	
	        Seq.findBack = function findBack(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindBack(f, xs));
	        };
	
	        Seq.tryFindIndex = function tryFindIndex(f, xs) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return null;
	                if (f(cur.value, i)) return i;
	            }
	        };
	
	        Seq.findIndex = function findIndex(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindIndex(f, xs));
	        };
	
	        Seq.tryFindIndexBack = function tryFindIndexBack(f, xs) {
	            var match = -1;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return match === -1 ? null : match;
	                if (f(cur.value, i)) match = i;
	            }
	        };
	
	        Seq.findIndexBack = function findIndexBack(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindIndexBack(f, xs));
	        };
	
	        Seq.tryPick = function tryPick(f, xs) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) break;
	                var y = f(cur.value, i);
	                if (y != null) return y;
	            }
	            return void 0;
	        };
	
	        Seq.pick = function pick(f, xs) {
	            return Seq.__failIfNone(Seq.tryPick(f, xs));
	        };
	
	        Seq.unfold = function unfold(f, acc) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                return {
	                    next: function next() {
	                        var res = f(acc);
	                        if (res != null) {
	                            acc = res[1];
	                            return { done: false, value: res[0] };
	                        }
	                        return { done: true };
	                    }
	                };
	            });
	        };
	
	        Seq.zip = function zip(xs, ys) {
	            return Seq.map2(function (x, y) {
	                return [x, y];
	            }, xs, ys);
	        };
	
	        Seq.zip3 = function zip3(xs, ys, zs) {
	            return Seq.map3(function (x, y, z) {
	                return [x, y, z];
	            }, xs, ys, zs);
	        };
	
	        return Seq;
	    }();
	
	    var SetTree = function () {
	        function SetTree(caseName, fields) {
	            _classCallCheck(this, SetTree);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        SetTree.countAux = function countAux(s, acc) {
	            return s.Case === "SetOne" ? acc + 1 : s.Case === "SetEmpty" ? acc : SetTree.countAux(s.Fields[1], SetTree.countAux(s.Fields[2], acc + 1));
	        };
	
	        SetTree.count = function count(s) {
	            return SetTree.countAux(s, 0);
	        };
	
	        SetTree.SetOne = function SetOne(n) {
	            return new SetTree("SetOne", [n]);
	        };
	
	        SetTree.SetNode = function SetNode(x, l, r, h) {
	            return new SetTree("SetNode", [x, l, r, h]);
	        };
	
	        SetTree.height = function height(t) {
	            return t.Case === "SetOne" ? 1 : t.Case === "SetNode" ? t.Fields[3] : 0;
	        };
	
	        SetTree.mk = function mk(l, k, r) {
	            var matchValue = [l, r];
	            var $target1 = function $target1() {
	                var hl = SetTree.height(l);
	                var hr = SetTree.height(r);
	                var m = hl < hr ? hr : hl;
	                return SetTree.SetNode(k, l, r, m + 1);
	            };
	            if (matchValue[0].Case === "SetEmpty") {
	                if (matchValue[1].Case === "SetEmpty") {
	                    return SetTree.SetOne(k);
	                } else {
	                    return $target1();
	                }
	            } else {
	                return $target1();
	            }
	        };
	
	        SetTree.rebalance = function rebalance(t1, k, t2) {
	            var t1h = SetTree.height(t1);
	            var t2h = SetTree.height(t2);
	            if (t2h > t1h + SetTree.tolerance) {
	                if (t2.Case === "SetNode") {
	                    if (SetTree.height(t2.Fields[1]) > t1h + 1) {
	                        if (t2.Fields[1].Case === "SetNode") {
	                            return SetTree.mk(SetTree.mk(t1, k, t2.Fields[1].Fields[1]), t2.Fields[1].Fields[0], SetTree.mk(t2.Fields[1].Fields[2], t2.Fields[0], t2.Fields[2]));
	                        } else {
	                            throw "rebalance";
	                        }
	                    } else {
	                        return SetTree.mk(SetTree.mk(t1, k, t2.Fields[1]), t2.Fields[0], t2.Fields[2]);
	                    }
	                } else {
	                    throw "rebalance";
	                }
	            } else {
	                if (t1h > t2h + SetTree.tolerance) {
	                    if (t1.Case === "SetNode") {
	                        if (SetTree.height(t1.Fields[2]) > t2h + 1) {
	                            if (t1.Fields[2].Case === "SetNode") {
	                                return SetTree.mk(SetTree.mk(t1.Fields[1], t1.Fields[0], t1.Fields[2].Fields[1]), t1.Fields[2].Fields[0], SetTree.mk(t1.Fields[2].Fields[2], k, t2));
	                            } else {
	                                throw "rebalance";
	                            }
	                        } else {
	                            return SetTree.mk(t1.Fields[1], t1.Fields[0], SetTree.mk(t1.Fields[2], k, t2));
	                        }
	                    } else {
	                        throw "rebalance";
	                    }
	                } else {
	                    return SetTree.mk(t1, k, t2);
	                }
	            }
	        };
	
	        SetTree.add = function add(comparer, k, t) {
	            return t.Case === "SetOne" ? function () {
	                var c = comparer.Compare(k, t.Fields[0]);
	                if (c < 0) {
	                    return SetTree.SetNode(k, new SetTree("SetEmpty", []), t, 2);
	                } else {
	                    if (c === 0) {
	                        return t;
	                    } else {
	                        return SetTree.SetNode(k, t, new SetTree("SetEmpty", []), 2);
	                    }
	                }
	            }() : t.Case === "SetEmpty" ? SetTree.SetOne(k) : function () {
	                var c = comparer.Compare(k, t.Fields[0]);
	                if (c < 0) {
	                    return SetTree.rebalance(SetTree.add(comparer, k, t.Fields[1]), t.Fields[0], t.Fields[2]);
	                } else {
	                    if (c === 0) {
	                        return t;
	                    } else {
	                        return SetTree.rebalance(t.Fields[1], t.Fields[0], SetTree.add(comparer, k, t.Fields[2]));
	                    }
	                }
	            }();
	        };
	
	        SetTree.balance = function balance(comparer, t1, k, t2) {
	            var matchValue = [t1, t2];
	            var $target1 = function $target1(t1_1) {
	                return SetTree.add(comparer, k, t1_1);
	            };
	            var $target2 = function $target2(k1, t2_1) {
	                return SetTree.add(comparer, k, SetTree.add(comparer, k1, t2_1));
	            };
	            if (matchValue[0].Case === "SetOne") {
	                if (matchValue[1].Case === "SetEmpty") {
	                    return $target1(matchValue[0]);
	                } else {
	                    if (matchValue[1].Case === "SetOne") {
	                        return $target2(matchValue[0].Fields[0], matchValue[1]);
	                    } else {
	                        return $target2(matchValue[0].Fields[0], matchValue[1]);
	                    }
	                }
	            } else {
	                if (matchValue[0].Case === "SetNode") {
	                    if (matchValue[1].Case === "SetOne") {
	                        var k2 = matchValue[1].Fields[0];
	                        var t1_1 = matchValue[0];
	                        return SetTree.add(comparer, k, SetTree.add(comparer, k2, t1_1));
	                    } else {
	                        if (matchValue[1].Case === "SetNode") {
	                            var h1 = matchValue[0].Fields[3];
	                            var h2 = matchValue[1].Fields[3];
	                            var k1 = matchValue[0].Fields[0];
	                            var k2 = matchValue[1].Fields[0];
	                            var t11 = matchValue[0].Fields[1];
	                            var t12 = matchValue[0].Fields[2];
	                            var t21 = matchValue[1].Fields[1];
	                            var t22 = matchValue[1].Fields[2];
	                            if (h1 + SetTree.tolerance < h2) {
	                                return SetTree.rebalance(SetTree.balance(comparer, t1, k, t21), k2, t22);
	                            } else {
	                                if (h2 + SetTree.tolerance < h1) {
	                                    return SetTree.rebalance(t11, k1, SetTree.balance(comparer, t12, k, t2));
	                                } else {
	                                    return SetTree.mk(t1, k, t2);
	                                }
	                            }
	                        } else {
	                            return $target1(matchValue[0]);
	                        }
	                    }
	                } else {
	                    var t2_1 = matchValue[1];
	                    return SetTree.add(comparer, k, t2_1);
	                }
	            }
	        };
	
	        SetTree.split = function split(comparer, pivot, t) {
	            return t.Case === "SetOne" ? function () {
	                var c = comparer.Compare(t.Fields[0], pivot);
	                if (c < 0) {
	                    return [t, false, new SetTree("SetEmpty", [])];
	                } else {
	                    if (c === 0) {
	                        return [new SetTree("SetEmpty", []), true, new SetTree("SetEmpty", [])];
	                    } else {
	                        return [new SetTree("SetEmpty", []), false, t];
	                    }
	                }
	            }() : t.Case === "SetEmpty" ? [new SetTree("SetEmpty", []), false, new SetTree("SetEmpty", [])] : function () {
	                var c = comparer.Compare(pivot, t.Fields[0]);
	                if (c < 0) {
	                    var patternInput = SetTree.split(comparer, pivot, t.Fields[1]);
	                    var t11Lo = patternInput[0];
	                    var t11Hi = patternInput[2];
	                    var havePivot = patternInput[1];
	                    return [t11Lo, havePivot, SetTree.balance(comparer, t11Hi, t.Fields[0], t.Fields[2])];
	                } else {
	                    if (c === 0) {
	                        return [t.Fields[1], true, t.Fields[2]];
	                    } else {
	                        var patternInput = SetTree.split(comparer, pivot, t.Fields[2]);
	                        var t12Lo = patternInput[0];
	                        var t12Hi = patternInput[2];
	                        var havePivot = patternInput[1];
	                        return [SetTree.balance(comparer, t.Fields[1], t.Fields[0], t12Lo), havePivot, t12Hi];
	                    }
	                }
	            }();
	        };
	
	        SetTree.spliceOutSuccessor = function spliceOutSuccessor(t) {
	            return t.Case === "SetOne" ? [t.Fields[0], new SetTree("SetEmpty", [])] : t.Case === "SetNode" ? t.Fields[1].Case === "SetEmpty" ? [t.Fields[0], t.Fields[2]] : function () {
	                var patternInput = SetTree.spliceOutSuccessor(t.Fields[1]);
	                var l_ = patternInput[1];
	                var k3 = patternInput[0];
	                return [k3, SetTree.mk(l_, t.Fields[0], t.Fields[2])];
	            }() : function () {
	                throw "internal error: Map.spliceOutSuccessor";
	            }();
	        };
	
	        SetTree.remove = function remove(comparer, k, t) {
	            return t.Case === "SetOne" ? function () {
	                var c = comparer.Compare(k, t.Fields[0]);
	                if (c === 0) {
	                    return new SetTree("SetEmpty", []);
	                } else {
	                    return t;
	                }
	            }() : t.Case === "SetNode" ? function () {
	                var c = comparer.Compare(k, t.Fields[0]);
	                if (c < 0) {
	                    return SetTree.rebalance(SetTree.remove(comparer, k, t.Fields[1]), t.Fields[0], t.Fields[2]);
	                } else {
	                    if (c === 0) {
	                        var matchValue = [t.Fields[1], t.Fields[2]];
	                        if (matchValue[0].Case === "SetEmpty") {
	                            return t.Fields[2];
	                        } else {
	                            if (matchValue[1].Case === "SetEmpty") {
	                                return t.Fields[1];
	                            } else {
	                                var patternInput = SetTree.spliceOutSuccessor(t.Fields[2]);
	                                var sk = patternInput[0];
	                                var r_ = patternInput[1];
	                                return SetTree.mk(t.Fields[1], sk, r_);
	                            }
	                        }
	                    } else {
	                        return SetTree.rebalance(t.Fields[1], t.Fields[0], SetTree.remove(comparer, k, t.Fields[2]));
	                    }
	                }
	            }() : t;
	        };
	
	        SetTree.mem = function mem(comparer, k, t) {
	            return t.Case === "SetOne" ? comparer.Compare(k, t.Fields[0]) === 0 : t.Case === "SetEmpty" ? false : function () {
	                var c = comparer.Compare(k, t.Fields[0]);
	                if (c < 0) {
	                    return SetTree.mem(comparer, k, t.Fields[1]);
	                } else {
	                    if (c === 0) {
	                        return true;
	                    } else {
	                        return SetTree.mem(comparer, k, t.Fields[2]);
	                    }
	                }
	            }();
	        };
	
	        SetTree.iter = function iter(f, t) {
	            if (t.Case === "SetOne") {
	                f(t.Fields[0]);
	            } else {
	                if (t.Case === "SetEmpty") {} else {
	                    SetTree.iter(f, t.Fields[1]);
	                    f(t.Fields[0]);
	                    SetTree.iter(f, t.Fields[2]);
	                }
	            }
	        };
	
	        SetTree.foldBack = function foldBack(f, m, x) {
	            return m.Case === "SetOne" ? f(m.Fields[0], x) : m.Case === "SetEmpty" ? x : SetTree.foldBack(f, m.Fields[1], f(m.Fields[0], SetTree.foldBack(f, m.Fields[2], x)));
	        };
	
	        SetTree.fold = function fold(f, x, m) {
	            return m.Case === "SetOne" ? f(x, m.Fields[0]) : m.Case === "SetEmpty" ? x : function () {
	                var x_1 = SetTree.fold(f, x, m.Fields[1]);
	                var x_2 = f(x_1, m.Fields[0]);
	                return SetTree.fold(f, x_2, m.Fields[2]);
	            }();
	        };
	
	        SetTree.forall = function forall(f, m) {
	            return m.Case === "SetOne" ? f(m.Fields[0]) : m.Case === "SetEmpty" ? true : (f(m.Fields[0]) ? SetTree.forall(f, m.Fields[1]) : false) ? SetTree.forall(f, m.Fields[2]) : false;
	        };
	
	        SetTree.exists = function exists(f, m) {
	            return m.Case === "SetOne" ? f(m.Fields[0]) : m.Case === "SetEmpty" ? false : (f(m.Fields[0]) ? true : SetTree.exists(f, m.Fields[1])) ? true : SetTree.exists(f, m.Fields[2]);
	        };
	
	        SetTree.isEmpty = function isEmpty(m) {
	            return m.Case === "SetEmpty" ? true : false;
	        };
	
	        SetTree.subset = function subset(comparer, a, b) {
	            return SetTree.forall(function (x) {
	                return SetTree.mem(comparer, x, b);
	            }, a);
	        };
	
	        SetTree.psubset = function psubset(comparer, a, b) {
	            return SetTree.forall(function (x) {
	                return SetTree.mem(comparer, x, b);
	            }, a) ? SetTree.exists(function (x) {
	                return !SetTree.mem(comparer, x, a);
	            }, b) : false;
	        };
	
	        SetTree.filterAux = function filterAux(comparer, f, s, acc) {
	            return s.Case === "SetOne" ? f(s.Fields[0]) ? SetTree.add(comparer, s.Fields[0], acc) : acc : s.Case === "SetEmpty" ? acc : function () {
	                var acc_1 = f(s.Fields[0]) ? SetTree.add(comparer, s.Fields[0], acc) : acc;
	                return SetTree.filterAux(comparer, f, s.Fields[1], SetTree.filterAux(comparer, f, s.Fields[2], acc_1));
	            }();
	        };
	
	        SetTree.filter = function filter(comparer, f, s) {
	            return SetTree.filterAux(comparer, f, s, new SetTree("SetEmpty", []));
	        };
	
	        SetTree.diffAux = function diffAux(comparer, m, acc) {
	            return m.Case === "SetOne" ? SetTree.remove(comparer, m.Fields[0], acc) : m.Case === "SetEmpty" ? acc : SetTree.diffAux(comparer, m.Fields[1], SetTree.diffAux(comparer, m.Fields[2], SetTree.remove(comparer, m.Fields[0], acc)));
	        };
	
	        SetTree.diff = function diff(comparer, a, b) {
	            return SetTree.diffAux(comparer, b, a);
	        };
	
	        SetTree.union = function union(comparer, t1, t2) {
	            var matchValue = [t1, t2];
	            var $target2 = function $target2(t) {
	                return t;
	            };
	            var $target3 = function $target3(k1, t2_1) {
	                return SetTree.add(comparer, k1, t2_1);
	            };
	            if (matchValue[0].Case === "SetEmpty") {
	                var t = matchValue[1];
	                return t;
	            } else {
	                if (matchValue[0].Case === "SetOne") {
	                    if (matchValue[1].Case === "SetEmpty") {
	                        return $target2(matchValue[0]);
	                    } else {
	                        if (matchValue[1].Case === "SetOne") {
	                            return $target3(matchValue[0].Fields[0], matchValue[1]);
	                        } else {
	                            return $target3(matchValue[0].Fields[0], matchValue[1]);
	                        }
	                    }
	                } else {
	                    if (matchValue[1].Case === "SetEmpty") {
	                        return $target2(matchValue[0]);
	                    } else {
	                        if (matchValue[1].Case === "SetOne") {
	                            var k2 = matchValue[1].Fields[0];
	                            var t1_1 = matchValue[0];
	                            return SetTree.add(comparer, k2, t1_1);
	                        } else {
	                            var h1 = matchValue[0].Fields[3];
	                            var h2 = matchValue[1].Fields[3];
	                            var k1 = matchValue[0].Fields[0];
	                            var k2 = matchValue[1].Fields[0];
	                            var t11 = matchValue[0].Fields[1];
	                            var t12 = matchValue[0].Fields[2];
	                            var t21 = matchValue[1].Fields[1];
	                            var t22 = matchValue[1].Fields[2];
	                            if (h1 > h2) {
	                                var patternInput = SetTree.split(comparer, k1, t2);
	                                var lo = patternInput[0];
	                                var hi = patternInput[2];
	                                return SetTree.balance(comparer, SetTree.union(comparer, t11, lo), k1, SetTree.union(comparer, t12, hi));
	                            } else {
	                                var patternInput = SetTree.split(comparer, k2, t1);
	                                var lo = patternInput[0];
	                                var hi = patternInput[2];
	                                return SetTree.balance(comparer, SetTree.union(comparer, t21, lo), k2, SetTree.union(comparer, t22, hi));
	                            }
	                        }
	                    }
	                }
	            }
	        };
	
	        SetTree.intersectionAux = function intersectionAux(comparer, b, m, acc) {
	            return m.Case === "SetOne" ? SetTree.mem(comparer, m.Fields[0], b) ? SetTree.add(comparer, m.Fields[0], acc) : acc : m.Case === "SetEmpty" ? acc : function () {
	                var acc_1 = SetTree.intersectionAux(comparer, b, m.Fields[2], acc);
	                var acc_2 = SetTree.mem(comparer, m.Fields[0], b) ? SetTree.add(comparer, m.Fields[0], acc_1) : acc_1;
	                return SetTree.intersectionAux(comparer, b, m.Fields[1], acc_2);
	            }();
	        };
	
	        SetTree.intersection = function intersection(comparer, a, b) {
	            return SetTree.intersectionAux(comparer, b, a, new SetTree("SetEmpty", []));
	        };
	
	        SetTree.partition1 = function partition1(comparer, f, k, acc1, acc2) {
	            return f(k) ? [SetTree.add(comparer, k, acc1), acc2] : [acc1, SetTree.add(comparer, k, acc2)];
	        };
	
	        SetTree.partitionAux = function partitionAux(comparer, f, s, acc_0, acc_1) {
	            var acc = [acc_0, acc_1];
	            if (s.Case === "SetOne") {
	                var acc1 = acc[0];
	                var acc2 = acc[1];
	                return SetTree.partition1(comparer, f, s.Fields[0], acc1, acc2);
	            } else {
	                if (s.Case === "SetEmpty") {
	                    return acc;
	                } else {
	                    var acc_2 = function () {
	                        var arg30_ = acc[0];
	                        var arg31_ = acc[1];
	                        return SetTree.partitionAux(comparer, f, s.Fields[2], arg30_, arg31_);
	                    }();
	                    var acc_3 = function () {
	                        var acc1 = acc_2[0];
	                        var acc2 = acc_2[1];
	                        return SetTree.partition1(comparer, f, s.Fields[0], acc1, acc2);
	                    }();
	                    var arg30_ = acc_3[0];
	                    var arg31_ = acc_3[1];
	                    return SetTree.partitionAux(comparer, f, s.Fields[1], arg30_, arg31_);
	                }
	            }
	        };
	
	        SetTree.partition = function partition(comparer, f, s) {
	            var seed = [new SetTree("SetEmpty", []), new SetTree("SetEmpty", [])];
	            var arg30_ = seed[0];
	            var arg31_ = seed[1];
	            return SetTree.partitionAux(comparer, f, s, arg30_, arg31_);
	        };
	
	        SetTree.minimumElementAux = function minimumElementAux(s, n) {
	            return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? n : SetTree.minimumElementAux(s.Fields[1], s.Fields[0]);
	        };
	
	        SetTree.minimumElementOpt = function minimumElementOpt(s) {
	            return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? null : SetTree.minimumElementAux(s.Fields[1], s.Fields[0]);
	        };
	
	        SetTree.maximumElementAux = function maximumElementAux(s, n) {
	            return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? n : SetTree.maximumElementAux(s.Fields[2], s.Fields[0]);
	        };
	
	        SetTree.maximumElementOpt = function maximumElementOpt(s) {
	            return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? null : SetTree.maximumElementAux(s.Fields[2], s.Fields[0]);
	        };
	
	        SetTree.minimumElement = function minimumElement(s) {
	            var matchValue = SetTree.minimumElementOpt(s);
	            if (matchValue == null) {
	                throw "Set contains no elements";
	            } else {
	                return matchValue;
	            }
	        };
	
	        SetTree.maximumElement = function maximumElement(s) {
	            var matchValue = SetTree.maximumElementOpt(s);
	            if (matchValue == null) {
	                throw "Set contains no elements";
	            } else {
	                return matchValue;
	            }
	        };
	
	        SetTree.collapseLHS = function collapseLHS(stack) {
	            return stack.tail != null ? stack.head.Case === "SetOne" ? stack : stack.head.Case === "SetNode" ? SetTree.collapseLHS(List.ofArray([stack.head.Fields[1], SetTree.SetOne(stack.head.Fields[0]), stack.head.Fields[2]], stack.tail)) : SetTree.collapseLHS(stack.tail) : new List();
	        };
	
	        SetTree.mkIterator = function mkIterator(s) {
	            return { stack: SetTree.collapseLHS(new List(s, new List())), started: false };
	        };
	
	        SetTree.moveNext = function moveNext(i) {
	            function current(i) {
	                if (i.stack.tail == null) {
	                    return null;
	                } else if (i.stack.head.Case === "SetOne") {
	                    return i.stack.head.Fields[0];
	                }
	                throw "Please report error: Set iterator, unexpected stack for current";
	            }
	            if (i.started) {
	                if (i.stack.tail == null) {
	                    return { done: true };
	                } else {
	                    if (i.stack.head.Case === "SetOne") {
	                        i.stack = SetTree.collapseLHS(i.stack.tail);
	                        return {
	                            done: i.stack.tail == null,
	                            value: current(i)
	                        };
	                    } else {
	                        throw "Please report error: Set iterator, unexpected stack for moveNext";
	                    }
	                }
	            } else {
	                i.started = true;
	                return {
	                    done: i.stack.tail == null,
	                    value: current(i)
	                };
	            }
	            ;
	        };
	
	        SetTree.compareStacks = function compareStacks(comparer, l1, l2) {
	            var $target8 = function $target8(n1k, t1) {
	                return SetTree.compareStacks(comparer, List.ofArray([new SetTree("SetEmpty", []), SetTree.SetOne(n1k)], t1), l2);
	            };
	            var $target9 = function $target9(n1k, n1l, n1r, t1) {
	                return SetTree.compareStacks(comparer, List.ofArray([n1l, SetTree.SetNode(n1k, new SetTree("SetEmpty", []), n1r, 0)], t1), l2);
	            };
	            var $target11 = function $target11(n2k, n2l, n2r, t2) {
	                return SetTree.compareStacks(comparer, l1, List.ofArray([n2l, SetTree.SetNode(n2k, new SetTree("SetEmpty", []), n2r, 0)], t2));
	            };
	            if (l1.tail != null) {
	                if (l2.tail != null) {
	                    if (l2.head.Case === "SetOne") {
	                        if (l1.head.Case === "SetOne") {
	                            var n1k = l1.head.Fields[0],
	                                n2k = l2.head.Fields[0],
	                                t1 = l1.tail,
	                                t2 = l2.tail,
	                                c = comparer.Compare(n1k, n2k);
	                            if (c !== 0) {
	                                return c;
	                            } else {
	                                return SetTree.compareStacks(comparer, t1, t2);
	                            }
	                        } else {
	                            if (l1.head.Case === "SetNode") {
	                                if (l1.head.Fields[1].Case === "SetEmpty") {
	                                    var emp = l1.head.Fields[1],
	                                        _n1k = l1.head.Fields[0],
	                                        n1r = l1.head.Fields[2],
	                                        _n2k = l2.head.Fields[0],
	                                        _t = l1.tail,
	                                        _t2 = l2.tail,
	                                        _c = comparer.Compare(_n1k, _n2k);
	                                    if (_c !== 0) {
	                                        return _c;
	                                    } else {
	                                        return SetTree.compareStacks(comparer, List.ofArray([n1r], _t), List.ofArray([emp], _t2));
	                                    }
	                                } else {
	                                    return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
	                                }
	                            } else {
	                                var _n2k2 = l2.head.Fields[0],
	                                    _t3 = l2.tail;
	                                return SetTree.compareStacks(comparer, l1, List.ofArray([new SetTree("SetEmpty", []), SetTree.SetOne(_n2k2)], _t3));
	                            }
	                        }
	                    } else {
	                        if (l2.head.Case === "SetNode") {
	                            if (l2.head.Fields[1].Case === "SetEmpty") {
	                                if (l1.head.Case === "SetOne") {
	                                    var _n1k2 = l1.head.Fields[0],
	                                        _n2k3 = l2.head.Fields[0],
	                                        n2r = l2.head.Fields[2],
	                                        _t4 = l1.tail,
	                                        _t5 = l2.tail,
	                                        _c2 = comparer.Compare(_n1k2, _n2k3);
	                                    if (_c2 !== 0) {
	                                        return _c2;
	                                    } else {
	                                        return SetTree.compareStacks(comparer, List.ofArray([new SetTree("SetEmpty", [])], _t4), List.ofArray([n2r], _t5));
	                                    }
	                                } else {
	                                    if (l1.head.Case === "SetNode") {
	                                        if (l1.head.Fields[1].Case === "SetEmpty") {
	                                            var _n1k3 = l1.head.Fields[0],
	                                                _n1r = l1.head.Fields[2],
	                                                _n2k4 = l2.head.Fields[0],
	                                                _n2r = l2.head.Fields[2],
	                                                _t6 = l1.tail,
	                                                _t7 = l2.tail,
	                                                _c3 = comparer.Compare(_n1k3, _n2k4);
	                                            if (_c3 !== 0) {
	                                                return _c3;
	                                            } else {
	                                                return SetTree.compareStacks(comparer, List.ofArray([_n1r], _t6), List.ofArray([_n2r], _t7));
	                                            }
	                                        } else {
	                                            return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
	                                        }
	                                    } else {
	                                        return $target11(l2.head.Fields[0], l2.head.Fields[1], l2.head.Fields[2], l2.tail);
	                                    }
	                                }
	                            } else {
	                                if (l1.head.Case === "SetOne") {
	                                    return $target8(l1.head.Fields[0], l1.tail);
	                                } else {
	                                    if (l1.head.Case === "SetNode") {
	                                        return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
	                                    } else {
	                                        return $target11(l2.head.Fields[0], l2.head.Fields[1], l2.head.Fields[2], l2.tail);
	                                    }
	                                }
	                            }
	                        } else {
	                            if (l1.head.Case === "SetOne") {
	                                return $target8(l1.head.Fields[0], l1.tail);
	                            } else {
	                                if (l1.head.Case === "SetNode") {
	                                    return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
	                                } else {
	                                    return SetTree.compareStacks(comparer, l1.tail, l2.tail);
	                                }
	                            }
	                        }
	                    }
	                } else {
	                    return 1;
	                }
	            } else {
	                if (l2.tail != null) {
	                    return -1;
	                } else {
	                    return 0;
	                }
	            }
	        };
	
	        SetTree.compare = function compare(comparer, s1, s2) {
	            if (s1.Case === "SetEmpty") {
	                if (s2.Case === "SetEmpty") {
	                    return 0;
	                } else {
	                    return -1;
	                }
	            } else {
	                if (s2.Case === "SetEmpty") {
	                    return 1;
	                } else {
	                    return SetTree.compareStacks(comparer, List.ofArray([s1]), List.ofArray([s2]));
	                }
	            }
	        };
	
	        SetTree.mkFromEnumerator = function mkFromEnumerator(comparer, acc, e) {
	            var cur = e.next();
	            while (!cur.done) {
	                acc = SetTree.add(comparer, cur.value, acc);
	                cur = e.next();
	            }
	            return acc;
	        };
	
	        SetTree.ofSeq = function ofSeq(comparer, c) {
	            var ie = c[Symbol.iterator]();
	            return SetTree.mkFromEnumerator(comparer, new SetTree("SetEmpty", []), ie);
	        };
	
	        return SetTree;
	    }();
	
	    SetTree.tolerance = 2;
	
	    var FSet = function () {
	        /** Do not call, use Set.create instead. */
	        function FSet() {
	            _classCallCheck(this, FSet);
	        }
	
	        FSet.from = function from(comparer, tree) {
	            var s = new FSet();
	            s.tree = tree;
	            s.comparer = comparer || new GenericComparer();
	            return s;
	        };
	
	        FSet.create = function create(ie, comparer) {
	            comparer = comparer || new GenericComparer();
	            return FSet.from(comparer, ie ? SetTree.ofSeq(comparer, ie) : new SetTree("SetEmpty", []));
	        };
	
	        FSet.prototype.ToString = function ToString() {
	            return "set [" + Array.from(this).map(Util.toString).join("; ") + "]";
	        };
	
	        FSet.prototype.Equals = function Equals(s2) {
	            return this.CompareTo(s2) === 0;
	        };
	
	        FSet.prototype.CompareTo = function CompareTo(s2) {
	            return SetTree.compare(this.comparer, this.tree, s2.tree);
	        };
	
	        FSet.prototype[Symbol.iterator] = function () {
	            var i = SetTree.mkIterator(this.tree);
	            return {
	                next: function next() {
	                    return SetTree.moveNext(i);
	                }
	            };
	        };
	
	        FSet.prototype.values = function values() {
	            return this[Symbol.iterator]();
	        };
	
	        FSet.prototype.has = function has(v) {
	            return SetTree.mem(this.comparer, v, this.tree);
	        };
	
	        FSet.prototype.add = function add(v) {
	            throw "not supported";
	        };
	
	        FSet.prototype.delete = function _delete(v) {
	            throw "not supported";
	        };
	
	        FSet.prototype.clear = function clear() {
	            throw "not supported";
	        };
	
	        FSet.isEmpty = function isEmpty(s) {
	            return SetTree.isEmpty(s.tree);
	        };
	
	        FSet.add = function add(item, s) {
	            return FSet.from(s.comparer, SetTree.add(s.comparer, item, s.tree));
	        };
	
	        FSet.addInPlace = function addInPlace(item, s) {
	            return s.has(item) ? false : (s.add(item), true);
	        };
	
	        FSet.remove = function remove(item, s) {
	            return FSet.from(s.comparer, SetTree.remove(s.comparer, item, s.tree));
	        };
	
	        FSet.union = function union(set1, set2) {
	            return set2.tree.Case === "SetEmpty" ? set1 : set1.tree.Case === "SetEmpty" ? set2 : FSet.from(set1.comparer, SetTree.union(set1.comparer, set1.tree, set2.tree));
	        };
	
	        FSet.unionInPlace = function unionInPlace(set1, set2) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = set2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var x = _step.value;
	
	                    set1.add(x);
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
	        };
	
	        FSet.unionMany = function unionMany(sets) {
	            // Pass args as FSet.union(s, acc) instead of FSet.union(acc, s)
	            // to discard the comparer of the first empty set 
	            return Seq.fold(function (acc, s) {
	                return FSet.union(s, acc);
	            }, FSet.create(), sets);
	        };
	
	        FSet.difference = function difference(set1, set2) {
	            return set1.tree.Case === "SetEmpty" ? set1 : set2.tree.Case === "SetEmpty" ? set1 : FSet.from(set1.comparer, SetTree.diff(set1.comparer, set1.tree, set2.tree));
	        };
	
	        FSet.differenceInPlace = function differenceInPlace(set1, set2) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = set2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var x = _step2.value;
	
	                    set1.delete(x);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        };
	
	        FSet.intersect = function intersect(set1, set2) {
	            return set2.tree.Case === "SetEmpty" ? set2 : set1.tree.Case === "SetEmpty" ? set1 : FSet.from(set1.comparer, SetTree.intersection(set1.comparer, set1.tree, set2.tree));
	        };
	
	        FSet.intersectInPlace = function intersectInPlace(set1, set2) {
	            var set2_ = set2 instanceof Set ? set2 : new Set(set2);
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = set1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var x = _step3.value;
	
	                    if (!set2_.has(x)) {
	                        set1.delete(x);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        };
	
	        FSet.intersectMany = function intersectMany(sets) {
	            return Seq.reduce(function (s1, s2) {
	                return FSet.intersect(s1, s2);
	            }, sets);
	        };
	
	        FSet.isProperSubsetOf = function isProperSubsetOf(set1, set2) {
	            if (set1 instanceof FSet && set2 instanceof FSet) {
	                return SetTree.psubset(set1.comparer, set1.tree, set2.tree);
	            } else {
	                set2 = set2 instanceof Set ? set2 : new Set(set2);
	                return Seq.forAll(function (x) {
	                    return set2.has(x);
	                }, set1) && Seq.exists(function (x) {
	                    return !set1.has(x);
	                }, set2);
	            }
	        };
	
	        FSet.isSubsetOf = function isSubsetOf(set1, set2) {
	            if (set1 instanceof FSet && set2 instanceof FSet) {
	                return SetTree.subset(set1.comparer, set1.tree, set2.tree);
	            } else {
	                set2 = set2 instanceof Set ? set2 : new Set(set2);
	                return Seq.forAll(function (x) {
	                    return set2.has(x);
	                }, set1);
	            }
	        };
	
	        FSet.isProperSupersetOf = function isProperSupersetOf(set1, set2) {
	            if (set1 instanceof FSet && set2 instanceof FSet) {
	                return SetTree.psubset(set1.comparer, set2.tree, set1.tree);
	            } else {
	                return FSet.isProperSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
	            }
	        };
	
	        FSet.isSupersetOf = function isSupersetOf(set1, set2) {
	            if (set1 instanceof FSet && set2 instanceof FSet) {
	                return SetTree.subset(set1.comparer, set2.tree, set1.tree);
	            } else {
	                return FSet.isSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
	            }
	        };
	
	        FSet.copyTo = function copyTo(xs, arr, arrayIndex, count) {
	            if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) throw "Array is invalid";
	            count = count || arr.length;
	            var i = arrayIndex || 0;
	            var iter = xs[Symbol.iterator]();
	            while (count--) {
	                var el = iter.next();
	                if (el.done) break;
	                arr[i++] = el.value;
	            }
	        };
	
	        FSet.partition = function partition(f, s) {
	            if (s.tree.Case === "SetEmpty") {
	                return [s, s];
	            } else {
	                var tuple = SetTree.partition(s.comparer, f, s.tree);
	                return [FSet.from(s.comparer, tuple[0]), FSet.from(s.comparer, tuple[1])];
	            }
	        };
	
	        FSet.filter = function filter(f, s) {
	            if (s.tree.Case === "SetEmpty") {
	                return s;
	            } else {
	                return FSet.from(s.comparer, SetTree.filter(s.comparer, f, s.tree));
	            }
	        };
	
	        FSet.map = function map(f, s) {
	            var comparer = new GenericComparer();
	            return FSet.from(comparer, SetTree.fold(function (acc, k) {
	                return SetTree.add(comparer, f(k), acc);
	            }, new SetTree("SetEmpty", []), s.tree));
	        };
	
	        FSet.exists = function exists(f, s) {
	            return SetTree.exists(f, s.tree);
	        };
	
	        FSet.forAll = function forAll(f, s) {
	            return SetTree.forall(f, s.tree);
	        };
	
	        FSet.fold = function fold(f, seed, s) {
	            return SetTree.fold(f, seed, s.tree);
	        };
	
	        FSet.foldBack = function foldBack(f, s, seed) {
	            return SetTree.foldBack(f, s.tree, seed);
	        };
	
	        FSet.iterate = function iterate(f, s) {
	            SetTree.iter(f, s.tree);
	        };
	
	        FSet.minimumElement = function minimumElement(s) {
	            return SetTree.minimumElement(s.tree);
	        };
	
	        FSet.maximumElement = function maximumElement(s) {
	            return SetTree.maximumElement(s.tree);
	        };
	
	        _createClass(FSet, [{
	            key: "size",
	            get: function get() {
	                return SetTree.count(this.tree);
	            }
	        }]);
	
	        return FSet;
	    }();
	
	    FSet.op_Addition = FSet.union;
	    FSet.op_Subtraction = FSet.difference;
	    FSet.isProperSubset = FSet.isProperSubsetOf;
	    FSet.isSubset = FSet.isSubsetOf;
	    FSet.isProperSuperset = FSet.isProperSupersetOf;
	    FSet.isSuperset = FSet.isSupersetOf;
	    FSet.minElement = FSet.minimumElement;
	    FSet.maxElement = FSet.maximumElement;
	    Util.setInterfaces(FSet.prototype, ["System.IEquatable", "System.IComparable"], "Microsoft.FSharp.Collections.FSharpSet");
	    exports.Set = FSet;
	
	    var MapTree = function () {
	        function MapTree(caseName, fields) {
	            _classCallCheck(this, MapTree);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        MapTree.sizeAux = function sizeAux(acc, m) {
	            return m.Case === "MapOne" ? acc + 1 : m.Case === "MapNode" ? MapTree.sizeAux(MapTree.sizeAux(acc + 1, m.Fields[2]), m.Fields[3]) : acc;
	        };
	
	        MapTree.size = function size(x) {
	            return MapTree.sizeAux(0, x);
	        };
	
	        MapTree.empty = function empty() {
	            return new MapTree("MapEmpty", []);
	        };
	
	        MapTree.height = function height(_arg1) {
	            return _arg1.Case === "MapOne" ? 1 : _arg1.Case === "MapNode" ? _arg1.Fields[4] : 0;
	        };
	
	        MapTree.isEmpty = function isEmpty(m) {
	            return m.Case === "MapEmpty" ? true : false;
	        };
	
	        MapTree.mk = function mk(l, k, v, r) {
	            var matchValue = [l, r];
	            var $target1 = function $target1() {
	                var hl = MapTree.height(l);
	                var hr = MapTree.height(r);
	                var m = hl < hr ? hr : hl;
	                return new MapTree("MapNode", [k, v, l, r, m + 1]);
	            };
	            if (matchValue[0].Case === "MapEmpty") {
	                if (matchValue[1].Case === "MapEmpty") {
	                    return new MapTree("MapOne", [k, v]);
	                } else {
	                    return $target1();
	                }
	            } else {
	                return $target1();
	            }
	        };
	
	        MapTree.rebalance = function rebalance(t1, k, v, t2) {
	            var t1h = MapTree.height(t1);
	            var t2h = MapTree.height(t2);
	            if (t2h > t1h + 2) {
	                if (t2.Case === "MapNode") {
	                    if (MapTree.height(t2.Fields[2]) > t1h + 1) {
	                        if (t2.Fields[2].Case === "MapNode") {
	                            return MapTree.mk(MapTree.mk(t1, k, v, t2.Fields[2].Fields[2]), t2.Fields[2].Fields[0], t2.Fields[2].Fields[1], MapTree.mk(t2.Fields[2].Fields[3], t2.Fields[0], t2.Fields[1], t2.Fields[3]));
	                        } else {
	                            throw "rebalance";
	                        }
	                    } else {
	                        return MapTree.mk(MapTree.mk(t1, k, v, t2.Fields[2]), t2.Fields[0], t2.Fields[1], t2.Fields[3]);
	                    }
	                } else {
	                    throw "rebalance";
	                }
	            } else {
	                if (t1h > t2h + 2) {
	                    if (t1.Case === "MapNode") {
	                        if (MapTree.height(t1.Fields[3]) > t2h + 1) {
	                            if (t1.Fields[3].Case === "MapNode") {
	                                return MapTree.mk(MapTree.mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], t1.Fields[3].Fields[2]), t1.Fields[3].Fields[0], t1.Fields[3].Fields[1], MapTree.mk(t1.Fields[3].Fields[3], k, v, t2));
	                            } else {
	                                throw "rebalance";
	                            }
	                        } else {
	                            return MapTree.mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], MapTree.mk(t1.Fields[3], k, v, t2));
	                        }
	                    } else {
	                        throw "rebalance";
	                    }
	                } else {
	                    return MapTree.mk(t1, k, v, t2);
	                }
	            }
	        };
	
	        MapTree.add = function add(comparer, k, v, m) {
	            if (m.Case === "MapOne") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c < 0) {
	                    return new MapTree("MapNode", [k, v, new MapTree("MapEmpty", []), m, 2]);
	                } else if (c === 0) {
	                    return new MapTree("MapOne", [k, v]);
	                }
	                return new MapTree("MapNode", [k, v, m, new MapTree("MapEmpty", []), 2]);
	            } else if (m.Case === "MapNode") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c < 0) {
	                    return MapTree.rebalance(MapTree.add(comparer, k, v, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
	                } else if (c === 0) {
	                    return new MapTree("MapNode", [k, v, m.Fields[2], m.Fields[3], m.Fields[4]]);
	                }
	                return MapTree.rebalance(m.Fields[2], m.Fields[0], m.Fields[1], MapTree.add(comparer, k, v, m.Fields[3]));
	            }
	            return new MapTree("MapOne", [k, v]);
	        };
	
	        MapTree.find = function find(comparer, k, m) {
	            var res = MapTree.tryFind(comparer, k, m);
	            if (res != null) return res;
	            throw "key not found";
	        };
	
	        MapTree.tryFind = function tryFind(comparer, k, m) {
	            if (m.Case === "MapOne") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                return c === 0 ? m.Fields[1] : null;
	            } else if (m.Case === "MapNode") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c < 0) {
	                    return MapTree.tryFind(comparer, k, m.Fields[2]);
	                } else {
	                    if (c === 0) {
	                        return m.Fields[1];
	                    } else {
	                        return MapTree.tryFind(comparer, k, m.Fields[3]);
	                    }
	                }
	            }
	            return null;
	        };
	
	        MapTree.partition1 = function partition1(comparer, f, k, v, acc1, acc2) {
	            return f(k, v) ? [MapTree.add(comparer, k, v, acc1), acc2] : [acc1, MapTree.add(comparer, k, v, acc2)];
	        };
	
	        MapTree.partitionAux = function partitionAux(comparer, f, s, acc_0, acc_1) {
	            var acc = [acc_0, acc_1];
	            if (s.Case === "MapOne") {
	                return MapTree.partition1(comparer, f, s.Fields[0], s.Fields[1], acc[0], acc[1]);
	            } else if (s.Case === "MapNode") {
	                var acc_2 = MapTree.partitionAux(comparer, f, s.Fields[3], acc[0], acc[1]);
	                var acc_3 = MapTree.partition1(comparer, f, s.Fields[0], s.Fields[1], acc_2[0], acc_2[1]);
	                return MapTree.partitionAux(comparer, f, s.Fields[2], acc_3[0], acc_3[1]);
	            }
	            return acc;
	        };
	
	        MapTree.partition = function partition(comparer, f, s) {
	            return MapTree.partitionAux(comparer, f, s, MapTree.empty(), MapTree.empty());
	        };
	
	        MapTree.filter1 = function filter1(comparer, f, k, v, acc) {
	            return f(k, v) ? MapTree.add(comparer, k, v, acc) : acc;
	        };
	
	        MapTree.filterAux = function filterAux(comparer, f, s, acc) {
	            return s.Case === "MapOne" ? MapTree.filter1(comparer, f, s.Fields[0], s.Fields[1], acc) : s.Case === "MapNode" ? function () {
	                var acc_1 = MapTree.filterAux(comparer, f, s.Fields[2], acc);
	                var acc_2 = MapTree.filter1(comparer, f, s.Fields[0], s.Fields[1], acc_1);
	                return MapTree.filterAux(comparer, f, s.Fields[3], acc_2);
	            }() : acc;
	        };
	
	        MapTree.filter = function filter(comparer, f, s) {
	            return MapTree.filterAux(comparer, f, s, MapTree.empty());
	        };
	
	        MapTree.spliceOutSuccessor = function spliceOutSuccessor(m) {
	            if (m.Case === "MapOne") {
	                return [m.Fields[0], m.Fields[1], new MapTree("MapEmpty", [])];
	            } else if (m.Case === "MapNode") {
	                if (m.Fields[2].Case === "MapEmpty") {
	                    return [m.Fields[0], m.Fields[1], m.Fields[3]];
	                } else {
	                    var kvl = MapTree.spliceOutSuccessor(m.Fields[2]);
	                    return [kvl[0], kvl[1], MapTree.mk(kvl[2], m.Fields[0], m.Fields[1], m.Fields[3])];
	                }
	            }
	            throw "internal error: Map.spliceOutSuccessor";
	        };
	
	        MapTree.remove = function remove(comparer, k, m) {
	            if (m.Case === "MapOne") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c === 0) {
	                    return new MapTree("MapEmpty", []);
	                } else {
	                    return m;
	                }
	            } else if (m.Case === "MapNode") {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c < 0) {
	                    return MapTree.rebalance(MapTree.remove(comparer, k, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
	                } else {
	                    if (c === 0) {
	                        var matchValue = [m.Fields[2], m.Fields[3]];
	                        if (matchValue[0].Case === "MapEmpty") {
	                            return m.Fields[3];
	                        } else {
	                            if (matchValue[1].Case === "MapEmpty") {
	                                return m.Fields[2];
	                            } else {
	                                var patternInput = MapTree.spliceOutSuccessor(m.Fields[3]);
	                                var sv = patternInput[1];
	                                var sk = patternInput[0];
	                                var r_ = patternInput[2];
	                                return MapTree.mk(m.Fields[2], sk, sv, r_);
	                            }
	                        }
	                    } else {
	                        return MapTree.rebalance(m.Fields[2], m.Fields[0], m.Fields[1], MapTree.remove(comparer, k, m.Fields[3]));
	                    }
	                }
	            } else {
	                return MapTree.empty();
	            }
	        };
	
	        MapTree.mem = function mem(comparer, k, m) {
	            return m.Case === "MapOne" ? comparer.Compare(k, m.Fields[0]) === 0 : m.Case === "MapNode" ? function () {
	                var c = comparer.Compare(k, m.Fields[0]);
	                if (c < 0) {
	                    return MapTree.mem(comparer, k, m.Fields[2]);
	                } else {
	                    if (c === 0) {
	                        return true;
	                    } else {
	                        return MapTree.mem(comparer, k, m.Fields[3]);
	                    }
	                }
	            }() : false;
	        };
	
	        MapTree.iter = function iter(f, m) {
	            if (m.Case === "MapOne") {
	                f(m.Fields[0], m.Fields[1]);
	            } else if (m.Case === "MapNode") {
	                MapTree.iter(f, m.Fields[2]);
	                f(m.Fields[0], m.Fields[1]);
	                MapTree.iter(f, m.Fields[3]);
	            }
	        };
	
	        MapTree.tryPick = function tryPick(f, m) {
	            return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? function () {
	                var matchValue = MapTree.tryPick(f, m.Fields[2]);
	                if (matchValue == null) {
	                    var matchValue_1 = f(m.Fields[0], m.Fields[1]);
	                    if (matchValue_1 == null) {
	                        return MapTree.tryPick(f, m.Fields[3]);
	                    } else {
	                        var res = matchValue_1;
	                        return res;
	                    }
	                } else {
	                    var res = matchValue;
	                    return res;
	                }
	            }() : null;
	        };
	
	        MapTree.exists = function exists(f, m) {
	            return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (MapTree.exists(f, m.Fields[2]) ? true : f(m.Fields[0], m.Fields[1])) ? true : MapTree.exists(f, m.Fields[3]) : false;
	        };
	
	        MapTree.forall = function forall(f, m) {
	            return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (MapTree.forall(f, m.Fields[2]) ? f(m.Fields[0], m.Fields[1]) : false) ? MapTree.forall(f, m.Fields[3]) : false : true;
	        };
	
	        MapTree.mapi = function mapi(f, m) {
	            return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[0], m.Fields[1])]) : m.Case === "MapNode" ? function () {
	                var l2 = MapTree.mapi(f, m.Fields[2]);
	                var v2 = f(m.Fields[0], m.Fields[1]);
	                var r2 = MapTree.mapi(f, m.Fields[3]);
	                return new MapTree("MapNode", [m.Fields[0], v2, l2, r2, m.Fields[4]]);
	            }() : MapTree.empty();
	        };
	
	        MapTree.foldBack = function foldBack(f, m, x) {
	            return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1], x) : m.Case === "MapNode" ? function () {
	                var x_1 = MapTree.foldBack(f, m.Fields[3], x);
	                var x_2 = f(m.Fields[0], m.Fields[1], x_1);
	                return MapTree.foldBack(f, m.Fields[2], x_2);
	            }() : x;
	        };
	
	        MapTree.fold = function fold(f, x, m) {
	            return m.Case === "MapOne" ? f(x, m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? function () {
	                var x_1 = MapTree.fold(f, x, m.Fields[2]);
	                var x_2 = f(x_1, m.Fields[0], m.Fields[1]);
	                return MapTree.fold(f, x_2, m.Fields[3]);
	            }() : x;
	        };
	
	        MapTree.mkFromEnumerator = function mkFromEnumerator(comparer, acc, e) {
	            var cur = e.next();
	            while (!cur.done) {
	                acc = MapTree.add(comparer, cur.value[0], cur.value[1], acc);
	                cur = e.next();
	            }
	            return acc;
	        };
	
	        MapTree.ofSeq = function ofSeq(comparer, c) {
	            var ie = c[Symbol.iterator]();
	            return MapTree.mkFromEnumerator(comparer, MapTree.empty(), ie);
	        };
	
	        MapTree.collapseLHS = function collapseLHS(stack) {
	            if (stack.tail != null) {
	                if (stack.head.Case === "MapOne") {
	                    return stack;
	                } else if (stack.head.Case === "MapNode") {
	                    return MapTree.collapseLHS(List.ofArray([stack.head.Fields[2], new MapTree("MapOne", [stack.head.Fields[0], stack.head.Fields[1]]), stack.head.Fields[3]], stack.tail));
	                } else {
	                    return MapTree.collapseLHS(stack.tail);
	                }
	            } else {
	                return new List();
	            }
	        };
	
	        MapTree.mkIterator = function mkIterator(s) {
	            return { stack: MapTree.collapseLHS(new List(s, new List())), started: false };
	        };
	
	        MapTree.moveNext = function moveNext(i) {
	            function current(i) {
	                if (i.stack.tail == null) {
	                    return null;
	                } else if (i.stack.head.Case === "MapOne") {
	                    return [i.stack.head.Fields[0], i.stack.head.Fields[1]];
	                }
	                throw "Please report error: Map iterator, unexpected stack for current";
	            }
	            if (i.started) {
	                if (i.stack.tail == null) {
	                    return { done: true };
	                } else {
	                    if (i.stack.head.Case === "MapOne") {
	                        i.stack = MapTree.collapseLHS(i.stack.tail);
	                        return {
	                            done: i.stack.tail == null,
	                            value: current(i)
	                        };
	                    } else {
	                        throw "Please report error: Map iterator, unexpected stack for moveNext";
	                    }
	                }
	            } else {
	                i.started = true;
	                return {
	                    done: i.stack.tail == null,
	                    value: current(i)
	                };
	            }
	            ;
	        };
	
	        return MapTree;
	    }();
	
	    var FMap = function () {
	        /** Do not call, use Map.create instead. */
	        function FMap() {
	            _classCallCheck(this, FMap);
	        }
	
	        FMap.from = function from(comparer, tree) {
	            var map = new FMap();
	            map.tree = tree;
	            map.comparer = comparer || new GenericComparer();
	            return map;
	        };
	
	        FMap.create = function create(ie, comparer) {
	            comparer = comparer || new GenericComparer();
	            return FMap.from(comparer, ie ? MapTree.ofSeq(comparer, ie) : MapTree.empty());
	        };
	
	        FMap.prototype.ToString = function ToString() {
	            return "map [" + Array.from(this).map(Util.toString).join("; ") + "]";
	        };
	
	        FMap.prototype.Equals = function Equals(m2) {
	            return this.CompareTo(m2) === 0;
	        };
	
	        FMap.prototype.CompareTo = function CompareTo(m2) {
	            var _this4 = this;
	
	            return Seq.compareWith(function (kvp1, kvp2) {
	                var c = _this4.comparer.Compare(kvp1[0], kvp2[0]);
	                return c !== 0 ? c : Util.compare(kvp1[1], kvp2[1]);
	            }, this, m2);
	        };
	
	        FMap.prototype[Symbol.iterator] = function () {
	            var i = MapTree.mkIterator(this.tree);
	            return {
	                next: function next() {
	                    return MapTree.moveNext(i);
	                }
	            };
	        };
	
	        FMap.prototype.entries = function entries() {
	            return this[Symbol.iterator]();
	        };
	
	        FMap.prototype.keys = function keys() {
	            return Seq.map(function (kv) {
	                return kv[0];
	            }, this);
	        };
	
	        FMap.prototype.values = function values() {
	            return Seq.map(function (kv) {
	                return kv[1];
	            }, this);
	        };
	
	        FMap.prototype.get = function get(k) {
	            return MapTree.find(this.comparer, k, this.tree);
	        };
	
	        FMap.prototype.has = function has(k) {
	            return MapTree.mem(this.comparer, k, this.tree);
	        };
	
	        FMap.prototype.set = function set(k, v) {
	            throw "not supported";
	        };
	
	        FMap.prototype.delete = function _delete(k) {
	            throw "not supported";
	        };
	
	        FMap.prototype.clear = function clear() {
	            throw "not supported";
	        };
	
	        FMap.add = function add(k, v, map) {
	            return FMap.from(map.comparer, MapTree.add(map.comparer, k, v, map.tree));
	        };
	
	        FMap.remove = function remove(item, map) {
	            return FMap.from(map.comparer, MapTree.remove(map.comparer, item, map.tree));
	        };
	
	        FMap.containsValue = function containsValue(v, map) {
	            return Seq.fold(function (acc, k) {
	                return acc || Util.equals(map.get(k), v);
	            }, false, map.keys());
	        };
	
	        FMap.exists = function exists(f, map) {
	            return MapTree.exists(f, map.tree);
	        };
	
	        FMap.find = function find(k, map) {
	            return MapTree.find(map.comparer, k, map.tree);
	        };
	
	        FMap.tryFind = function tryFind(k, map) {
	            return MapTree.tryFind(map.comparer, k, map.tree);
	        };
	
	        FMap.filter = function filter(f, map) {
	            return FMap.from(map.comparer, MapTree.filter(map.comparer, f, map.tree));
	        };
	
	        FMap.fold = function fold(f, seed, map) {
	            return MapTree.fold(f, seed, map.tree);
	        };
	
	        FMap.foldBack = function foldBack(f, map, seed) {
	            return MapTree.foldBack(f, map.tree, seed);
	        };
	
	        FMap.forAll = function forAll(f, map) {
	            return MapTree.forall(f, map.tree);
	        };
	
	        FMap.isEmpty = function isEmpty(map) {
	            return MapTree.isEmpty(map.tree);
	        };
	
	        FMap.iterate = function iterate(f, map) {
	            MapTree.iter(f, map.tree);
	        };
	
	        FMap.map = function map(f, _map) {
	            return FMap.from(_map.comparer, MapTree.mapi(f, _map.tree));
	        };
	
	        FMap.partition = function partition(f, map) {
	            var rs = MapTree.partition(map.comparer, f, map.tree);
	            return [FMap.from(map.comparer, rs[0]), FMap.from(map.comparer, rs[1])];
	        };
	
	        FMap.findKey = function findKey(f, map) {
	            return Seq.pick(function (kv) {
	                return f(kv[0], kv[1]) ? kv[0] : null;
	            }, map);
	        };
	
	        FMap.tryFindKey = function tryFindKey(f, map) {
	            return Seq.tryPick(function (kv) {
	                return f(kv[0], kv[1]) ? kv[0] : null;
	            }, map);
	        };
	
	        FMap.pick = function pick(f, map) {
	            var res = FMap.tryPick(f, map);
	            if (res != null) return res;
	            throw "key not found";
	        };
	
	        FMap.tryPick = function tryPick(f, map) {
	            return MapTree.tryPick(f, map.tree);
	        };
	
	        _createClass(FMap, [{
	            key: "size",
	            get: function get() {
	                return MapTree.size(this.tree);
	            }
	        }]);
	
	        return FMap;
	    }();
	
	    Util.setInterfaces(FMap.prototype, ["System.IEquatable", "System.IComparable"], "Microsoft.FSharp.Collections.FSharpMap");
	    exports.Map = FMap;
	    var Nothing = exports.Nothing = void 0;
	    var maxTrampolineCallCount = 2000;
	
	    var Trampoline = exports.Trampoline = function () {
	        function Trampoline() {
	            _classCallCheck(this, Trampoline);
	
	            this.callCount = 0;
	        }
	
	        Trampoline.prototype.incrementAndCheck = function incrementAndCheck() {
	            return this.callCount++ > maxTrampolineCallCount;
	        };
	
	        Trampoline.prototype.hijack = function hijack(f) {
	            this.callCount = 0;
	            setTimeout(f, 0);
	        };
	
	        return Trampoline;
	    }();
	
	    var AsyncImpl = {
	        protectedCont: function protectedCont(f) {
	            return function (ctx) {
	                if (ctx.cancelToken.isCancelled) ctx.onCancel("cancelled");else if (ctx.trampoline.incrementAndCheck()) ctx.trampoline.hijack(function () {
	                    try {
	                        return f(ctx);
	                    } catch (err) {
	                        ctx.onError(err);
	                    }
	                });else try {
	                    return f(ctx);
	                } catch (err) {
	                    ctx.onError(err);
	                }
	            };
	        },
	        bind: function bind(computation, binder) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                computation({
	                    onSuccess: function onSuccess(x) {
	                        return binder(x)(ctx);
	                    },
	                    onError: ctx.onError,
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken,
	                    trampoline: ctx.trampoline
	                });
	            });
	        },
	        return: function _return(value) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                return ctx.onSuccess(value);
	            });
	        }
	    };
	
	    var AsyncBuilder = exports.AsyncBuilder = function () {
	        function AsyncBuilder() {
	            _classCallCheck(this, AsyncBuilder);
	        }
	
	        AsyncBuilder.prototype.Bind = function Bind(computation, binder) {
	            return AsyncImpl.bind(computation, binder);
	        };
	
	        AsyncBuilder.prototype.Combine = function Combine(computation1, computation2) {
	            return this.Bind(computation1, function () {
	                return computation2;
	            });
	        };
	
	        AsyncBuilder.prototype.Delay = function Delay(generator) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                return generator()(ctx);
	            });
	        };
	
	        AsyncBuilder.prototype.For = function For(sequence, body) {
	            var iter = sequence[Symbol.iterator]();
	            var cur = iter.next();
	            return this.While(function () {
	                return !cur.done;
	            }, this.Delay(function () {
	                var res = body(cur.value);
	                cur = iter.next();
	                return res;
	            }));
	        };
	
	        AsyncBuilder.prototype.Return = function Return(value) {
	            return AsyncImpl.return(value);
	        };
	
	        AsyncBuilder.prototype.ReturnFrom = function ReturnFrom(computation) {
	            return computation;
	        };
	
	        AsyncBuilder.prototype.TryFinally = function TryFinally(computation, compensation) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                computation({
	                    onSuccess: function onSuccess(x) {
	                        compensation();
	                        ctx.onSuccess(x);
	                    },
	                    onError: function onError(x) {
	                        compensation();
	                        ctx.onError(x);
	                    },
	                    onCancel: function onCancel(x) {
	                        compensation();
	                        ctx.onCancel(x);
	                    },
	                    cancelToken: ctx.cancelToken,
	                    trampoline: ctx.trampoline
	                });
	            });
	        };
	
	        AsyncBuilder.prototype.TryWith = function TryWith(computation, catchHandler) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                computation({
	                    onSuccess: ctx.onSuccess,
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken,
	                    trampoline: ctx.trampoline,
	                    onError: function onError(ex) {
	                        return catchHandler(ex)(ctx);
	                    }
	                });
	            });
	        };
	
	        AsyncBuilder.prototype.Using = function Using(resource, binder) {
	            return this.TryFinally(binder(resource), function () {
	                return resource.Dispose();
	            });
	        };
	
	        AsyncBuilder.prototype.While = function While(guard, computation) {
	            var _this5 = this;
	
	            if (guard()) return this.Bind(computation, function () {
	                return _this5.While(guard, computation);
	            });else return this.Return(Nothing);
	        };
	
	        AsyncBuilder.prototype.Zero = function Zero() {
	            return AsyncImpl.protectedCont(function (ctx) {
	                return ctx.onSuccess(Nothing);
	            });
	        };
	
	        return AsyncBuilder;
	    }();
	
	    AsyncBuilder.singleton = new AsyncBuilder();
	
	    var Async = exports.Async = function () {
	        function Async() {
	            _classCallCheck(this, Async);
	        }
	
	        Async.awaitPromise = function awaitPromise(p) {
	            return Async.fromContinuations(function (conts) {
	                return p.then(conts[0]).catch(function (err) {
	                    return (err == "cancelled" ? conts[2] : conts[1])(err);
	                });
	            });
	        };
	
	        Async.catch = function _catch(work) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                work({
	                    onSuccess: function onSuccess(x) {
	                        return ctx.onSuccess(Choice.Choice1Of2(x));
	                    },
	                    onError: function onError(ex) {
	                        return ctx.onSuccess(Choice.Choice2Of2(ex));
	                    },
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken,
	                    trampoline: ctx.trampoline
	                });
	            });
	        };
	
	        Async.fromContinuations = function fromContinuations(f) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                return f([ctx.onSuccess, ctx.onError, ctx.onCancel]);
	            });
	        };
	
	        Async.ignore = function ignore(computation) {
	            return AsyncImpl.bind(computation, function (x) {
	                return AsyncImpl.return(Nothing);
	            });
	        };
	
	        Async.parallel = function parallel(computations) {
	            return Async.awaitPromise(Promise.all(Seq.map(function (w) {
	                return Async.startAsPromise(w);
	            }, computations)));
	        };
	
	        Async.sleep = function sleep(millisecondsDueTime) {
	            return AsyncImpl.protectedCont(function (ctx) {
	                setTimeout(function () {
	                    return ctx.cancelToken.isCancelled ? ctx.onCancel("cancelled") : ctx.onSuccess(Nothing);
	                }, millisecondsDueTime);
	            });
	        };
	
	        Async.start = function start(computation, cancellationToken) {
	            return Async.startWithContinuations(computation, cancellationToken);
	        };
	
	        Async.emptyContinuation = function emptyContinuation(x) {
	            // NOP
	        };
	
	        Async.startWithContinuations = function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
	            if (typeof continuation !== "function") {
	                cancelToken = continuation;
	                continuation = null;
	            }
	            var trampoline = new Trampoline();
	            computation({
	                onSuccess: continuation ? continuation : Async.emptyContinuation,
	                onError: exceptionContinuation ? exceptionContinuation : Async.emptyContinuation,
	                onCancel: cancellationContinuation ? cancellationContinuation : Async.emptyContinuation,
	                cancelToken: cancelToken ? cancelToken : Async.defaultCancellationToken,
	                trampoline: trampoline
	            });
	        };
	
	        Async.startAsPromise = function startAsPromise(computation, cancellationToken) {
	            return new Promise(function (resolve, reject) {
	                return Async.startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : Async.defaultCancellationToken);
	            });
	        };
	
	        _createClass(Async, null, [{
	            key: "cancellationToken",
	            get: function get() {
	                return AsyncImpl.protectedCont(function (ctx) {
	                    return ctx.onSuccess(ctx.cancelToken);
	                });
	            }
	        }]);
	
	        return Async;
	    }();
	
	    Async.defaultCancellationToken = {
	        isCancelled: false
	    };
	    Async.startImmediate = Async.start;
	
	    var QueueCell = function QueueCell(message) {
	        _classCallCheck(this, QueueCell);
	
	        this.value = message;
	    };
	
	    var MailboxQueue = function () {
	        function MailboxQueue() {
	            _classCallCheck(this, MailboxQueue);
	        }
	
	        MailboxQueue.prototype.add = function add(message) {
	            var itCell = new QueueCell(message);
	            if (this.firstAndLast) {
	                this.firstAndLast[1].next = itCell;
	                this.firstAndLast = [this.firstAndLast[0], itCell];
	            } else this.firstAndLast = [itCell, itCell];
	        };
	
	        MailboxQueue.prototype.tryGet = function tryGet() {
	            if (this.firstAndLast) {
	                var value = this.firstAndLast[0].value;
	                if (this.firstAndLast[0].next) this.firstAndLast = [this.firstAndLast[0].next, this.firstAndLast[1]];else delete this.firstAndLast;
	                return value;
	            }
	            return void 0;
	        };
	
	        return MailboxQueue;
	    }();
	
	    var MailboxProcessor = exports.MailboxProcessor = function () {
	        function MailboxProcessor(body, cancellationToken) {
	            _classCallCheck(this, MailboxProcessor);
	
	            this.body = body;
	            this.cancellationToken = cancellationToken || Async.defaultCancellationToken;
	            this.messages = new MailboxQueue();
	        }
	
	        MailboxProcessor.start = function start(body, cancellationToken) {
	            var mbox = new MailboxProcessor(body, cancellationToken);
	            mbox.start();
	            return mbox;
	        };
	
	        MailboxProcessor.prototype.__processEvents = function __processEvents() {
	            if (this.continuation) {
	                var value = this.messages.tryGet();
	                if (value) {
	                    var cont = this.continuation;
	                    delete this.continuation;
	                    cont(value);
	                }
	            }
	        };
	
	        MailboxProcessor.prototype.start = function start() {
	            Async.startImmediate(this.body(this), this.cancellationToken);
	        };
	
	        MailboxProcessor.prototype.receive = function receive() {
	            var _this6 = this;
	
	            return Async.fromContinuations(function (conts) {
	                if (_this6.continuation) throw "Receive can only be called once!";
	                _this6.continuation = conts[0];
	                _this6.__processEvents();
	            });
	        };
	
	        MailboxProcessor.prototype.post = function post(message) {
	            this.messages.add(message);
	            this.__processEvents();
	        };
	
	        MailboxProcessor.prototype.postAndAsyncReply = function postAndAsyncReply(buildMessage) {
	            var result = void 0;
	            var continuation = void 0;
	            function checkCompletion() {
	                if (result && continuation) continuation(result);
	            }
	            var reply = {
	                reply: function reply(res) {
	                    result = res;
	                    checkCompletion();
	                }
	            };
	            this.messages.add(buildMessage(reply));
	            this.__processEvents();
	            return Async.fromContinuations(function (conts) {
	                continuation = conts[0];
	                checkCompletion();
	            });
	        };
	
	        return MailboxProcessor;
	    }();
	
	    var Observer = function Observer(onNext, onError, onCompleted) {
	        _classCallCheck(this, Observer);
	
	        this.OnNext = onNext;
	        this.OnError = onError || function (e) {};
	        this.OnCompleted = onCompleted || function () {};
	    };
	
	    Util.setInterfaces(Observer.prototype, ["System.IObserver"]);
	
	    var Observable = function Observable(subscribe) {
	        _classCallCheck(this, Observable);
	
	        this.Subscribe = subscribe;
	    };
	
	    Util.setInterfaces(Observable.prototype, ["System.IObservable"]);
	
	    var FObservable = function () {
	        function FObservable() {
	            _classCallCheck(this, FObservable);
	        }
	
	        FObservable.__protect = function __protect(f, succeed, fail) {
	            try {
	                return succeed(f());
	            } catch (e) {
	                fail(e);
	            }
	        };
	
	        FObservable.add = function add(callback, source) {
	            source.Subscribe(new Observer(callback));
	        };
	
	        FObservable.choose = function choose(chooser, source) {
	            return new Observable(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return chooser(t);
	                    }, function (u) {
	                        if (u != null) observer.OnNext(u);
	                    }, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            });
	        };
	
	        FObservable.filter = function filter(predicate, source) {
	            return FObservable.choose(function (x) {
	                return predicate(x) ? x : null;
	            }, source);
	        };
	
	        FObservable.map = function map(mapping, source) {
	            return new Observable(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return mapping(t);
	                    }, observer.OnNext, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            });
	        };
	
	        FObservable.merge = function merge(source1, source2) {
	            return new Observable(function (observer) {
	                var stopped = false,
	                    completed1 = false,
	                    completed2 = false;
	                var h1 = source1.Subscribe(new Observer(function (v) {
	                    if (!stopped) observer.OnNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.OnError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed1 = true;
	                        if (completed2) {
	                            stopped = true;
	                            observer.OnCompleted();
	                        }
	                    }
	                }));
	                var h2 = source2.Subscribe(new Observer(function (v) {
	                    if (!stopped) {
	                        observer.OnNext(v);
	                    }
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.OnError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed2 = true;
	                        if (completed1) {
	                            stopped = true;
	                            observer.OnCompleted();
	                        }
	                    }
	                }));
	                return Util.createDisposable(function () {
	                    h1.Dispose();
	                    h2.Dispose();
	                });
	            });
	        };
	
	        FObservable.pairwise = function pairwise(source) {
	            return new Observable(function (observer) {
	                var last = null;
	                return source.Subscribe(new Observer(function (next) {
	                    if (last != null) observer.OnNext([last, next]);
	                    last = next;
	                }, observer.OnError, observer.OnCompleted));
	            });
	        };
	
	        FObservable.partition = function partition(predicate, source) {
	            return Tuple(FObservable.filter(predicate, source), FObservable.filter(function (x) {
	                return !predicate(x);
	            }, source));
	        };
	
	        FObservable.scan = function scan(collector, state, source) {
	            return new Observable(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return collector(state, t);
	                    }, function (u) {
	                        state = u;observer.OnNext(u);
	                    }, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            });
	        };
	
	        FObservable.split = function split(splitter, source) {
	            return Tuple(FObservable.choose(function (v) {
	                return splitter(v).valueIfChoice1;
	            }, source), FObservable.choose(function (v) {
	                return splitter(v).valueIfChoice2;
	            }, source));
	        };
	
	        FObservable.subscribe = function subscribe(callback, source) {
	            return source.Subscribe(new Observer(callback));
	        };
	
	        return FObservable;
	    }();
	
	    exports.Observable = FObservable;
	
	    var Event = exports.Event = function () {
	        function Event(_subscriber, delegates) {
	            _classCallCheck(this, Event);
	
	            this._subscriber = _subscriber;
	            this.delegates = delegates || new Array();
	        }
	
	        Event.prototype.Add = function Add(f) {
	            this._addHandler(f);
	        };
	        // IEvent<T> methods
	
	
	        Event.prototype.Trigger = function Trigger(value) {
	            Seq.iterate(function (f) {
	                return f(value);
	            }, this.delegates);
	        };
	        // IDelegateEvent<T> methods
	
	
	        Event.prototype._addHandler = function _addHandler(f) {
	            this.delegates.push(f);
	        };
	
	        Event.prototype._removeHandler = function _removeHandler(f) {
	            var index = this.delegates.findIndex(function (el) {
	                return "" + el == "" + f;
	            }); // Special dedication to Chet Husk.
	            if (index > -1) this.delegates.splice(index, 1);
	        };
	
	        Event.prototype.AddHandler = function AddHandler(handler) {
	            this._addHandler(function (x) {
	                return handler(undefined, x);
	            });
	        };
	
	        Event.prototype.RemoveHandler = function RemoveHandler(handler) {
	            this._removeHandler(function (x) {
	                return handler(undefined, x);
	            });
	        };
	        // IObservable<T> methods
	
	
	        Event.prototype._subscribeFromObserver = function _subscribeFromObserver(observer) {
	            var _this7 = this;
	
	            if (this._subscriber) return this._subscriber(observer);
	            var callback = observer.OnNext;
	            this._addHandler(callback);
	            return Util.createDisposable(function () {
	                return _this7._removeHandler(callback);
	            });
	        };
	
	        Event.prototype._subscribeFromCallback = function _subscribeFromCallback(callback) {
	            var _this8 = this;
	
	            this._addHandler(callback);
	            return Util.createDisposable(function () {
	                return _this8._removeHandler(callback);
	            });
	        };
	
	        Event.prototype.Subscribe = function Subscribe(arg) {
	            return typeof arg == "function" ? this._subscribeFromCallback(arg) : this._subscribeFromObserver(arg);
	        };
	
	        Event.add = function add(callback, sourceEvent) {
	            sourceEvent.Subscribe(new Observer(callback));
	        };
	
	        Event.choose = function choose(chooser, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return chooser(t);
	                    }, function (u) {
	                        if (u != null) observer.OnNext(u);
	                    }, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            }, source.delegates);
	        };
	
	        Event.filter = function filter(predicate, sourceEvent) {
	            return Event.choose(function (x) {
	                return predicate(x) ? x : null;
	            }, sourceEvent);
	        };
	
	        Event.map = function map(mapping, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return mapping(t);
	                    }, observer.OnNext, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            }, source.delegates);
	        };
	
	        Event.merge = function merge(event1, event2) {
	            var source1 = event1;
	            var source2 = event2;
	            return new Event(function (observer) {
	                var stopped = false,
	                    completed1 = false,
	                    completed2 = false;
	                var h1 = source1.Subscribe(new Observer(function (v) {
	                    if (!stopped) observer.OnNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.OnError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed1 = true;
	                        if (completed2) {
	                            stopped = true;
	                            observer.OnCompleted();
	                        }
	                    }
	                }));
	                var h2 = source2.Subscribe(new Observer(function (v) {
	                    if (!stopped) observer.OnNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.OnError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed2 = true;
	                        if (completed1) {
	                            stopped = true;
	                            observer.OnCompleted();
	                        }
	                    }
	                }));
	                return Util.createDisposable(function () {
	                    h1.Dispose();
	                    h2.Dispose();
	                });
	            }, source1.delegates.concat(source2.delegates));
	        };
	
	        Event.pairwise = function pairwise(sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                var last = null;
	                return source.Subscribe(new Observer(function (next) {
	                    if (last != null) observer.OnNext([last, next]);
	                    last = next;
	                }, observer.OnError, observer.OnCompleted));
	            }, source.delegates);
	        };
	
	        Event.partition = function partition(predicate, sourceEvent) {
	            return Tuple(Event.filter(predicate, sourceEvent), Event.filter(function (x) {
	                return !predicate(x);
	            }, sourceEvent));
	        };
	
	        Event.scan = function scan(collector, state, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.Subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return collector(state, t);
	                    }, function (u) {
	                        state = u;observer.OnNext(u);
	                    }, observer.OnError);
	                }, observer.OnError, observer.OnCompleted));
	            }, source.delegates);
	        };
	
	        Event.split = function split(splitter, sourceEvent) {
	            return Tuple(Event.choose(function (v) {
	                return splitter(v).valueIfChoice1;
	            }, sourceEvent), Event.choose(function (v) {
	                return splitter(v).valueIfChoice2;
	            }, sourceEvent));
	        };
	
	        _createClass(Event, [{
	            key: "Publish",
	            get: function get() {
	                return this;
	            }
	        }]);
	
	        return Event;
	    }();
	
	    var Lazy = exports.Lazy = function () {
	        function Lazy(factory) {
	            _classCallCheck(this, Lazy);
	
	            this.factory = factory;
	            this.isValueCreated = false;
	        }
	
	        Lazy.createFromValue = function createFromValue(v) {
	            return new Lazy(function () {
	                return v;
	            });
	        };
	
	        _createClass(Lazy, [{
	            key: "value",
	            get: function get() {
	                if (!this.isValueCreated) {
	                    this.createdValue = this.factory();
	                    this.isValueCreated = true;
	                }
	                return this.createdValue;
	            }
	        }]);
	
	        return Lazy;
	    }();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore);
	    global.ast = mod.exports;
	  }
	})(this, function (exports, _fableCore) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.Expr = exports.Command = exports.Program = exports.Argument = exports.Node = exports.EntityValue = exports.Entity = exports.EntityKind = exports.Constant = exports.Name = exports.Type = exports.PrimitiveType = exports.ObjectType = exports.Member = exports.Documentation = exports.Metadata = exports.Emitter = exports.Token = exports.TokenKind = exports.Operator = exports.Error = exports.Range = undefined;
	
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
	
	  var _Range = function () {
	    function _Range(start, end) {
	      _classCallCheck(this, _Range);
	
	      this.Start = start;
	      this.End = end;
	    }
	
	    _createClass(_Range, [{
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
	
	    return _Range;
	  }();
	
	  exports.Range = _Range;
	
	  _fableCore.Util.setInterfaces(_Range.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Range");
	
	  var Error = exports.Error = function () {
	    function Error(number, message, range) {
	      _classCallCheck(this, Error);
	
	      this.Number = number;
	      this.Message = message;
	      this.Range = range;
	    }
	
	    _createClass(Error, [{
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
	
	    return Error;
	  }();
	
	  _fableCore.Util.setInterfaces(Error.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Error");
	
	  var Operator = exports.Operator = function () {
	    function Operator(caseName, fields) {
	      _classCallCheck(this, Operator);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Operator, [{
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
	
	    return Operator;
	  }();
	
	  _fableCore.Util.setInterfaces(Operator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Operator");
	
	  var TokenKind = exports.TokenKind = function () {
	    function TokenKind(caseName, fields) {
	      _classCallCheck(this, TokenKind);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(TokenKind, [{
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
	
	    return TokenKind;
	  }();
	
	  _fableCore.Util.setInterfaces(TokenKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TokenKind");
	
	  var Token = exports.Token = function () {
	    function Token(token, range) {
	      _classCallCheck(this, Token);
	
	      this.Token = token;
	      this.Range = range;
	    }
	
	    _createClass(Token, [{
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
	
	    return Token;
	  }();
	
	  _fableCore.Util.setInterfaces(Token.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Token");
	
	  var Emitter = exports.Emitter = function Emitter(emit) {
	    _classCallCheck(this, Emitter);
	
	    this.Emit = emit;
	  };
	
	  _fableCore.Util.setInterfaces(Emitter.prototype, ["FSharpRecord"], "TheGamma.Emitter");
	
	  var Metadata = exports.Metadata = function () {
	    function Metadata(context, type, data) {
	      _classCallCheck(this, Metadata);
	
	      this.Context = context;
	      this.Type = type;
	      this.Data = data;
	    }
	
	    _createClass(Metadata, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return Metadata;
	  }();
	
	  _fableCore.Util.setInterfaces(Metadata.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Metadata");
	
	  var Documentation = exports.Documentation = function () {
	    function Documentation(caseName, fields) {
	      _classCallCheck(this, Documentation);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Documentation, [{
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
	
	    return Documentation;
	  }();
	
	  _fableCore.Util.setInterfaces(Documentation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Documentation");
	
	  var Member = exports.Member = function () {
	    function Member(caseName, fields) {
	      _classCallCheck(this, Member);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Member, [{
	      key: "Name",
	      get: function get() {
	        var $target0 = function $target0(s) {
	          return s;
	        };
	
	        if (this.Case === "Method") {
	          return $target0(this.Fields[0]);
	        } else {
	          return $target0(this.Fields[0]);
	        }
	      }
	    }]);
	
	    return Member;
	  }();
	
	  _fableCore.Util.setInterfaces(Member.prototype, ["FSharpUnion"], "TheGamma.Member");
	
	  var ObjectType = exports.ObjectType = function ObjectType(members) {
	    _classCallCheck(this, ObjectType);
	
	    this.Members = members;
	  };
	
	  _fableCore.Util.setInterfaces(ObjectType.prototype, ["FSharpRecord"], "TheGamma.ObjectType");
	
	  var PrimitiveType = exports.PrimitiveType = function () {
	    function PrimitiveType(caseName, fields) {
	      _classCallCheck(this, PrimitiveType);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(PrimitiveType, [{
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
	
	    return PrimitiveType;
	  }();
	
	  _fableCore.Util.setInterfaces(PrimitiveType.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.PrimitiveType");
	
	  var Type = exports.Type = function Type(caseName, fields) {
	    _classCallCheck(this, Type);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(Type.prototype, ["FSharpUnion"], "TheGamma.Type");
	
	  var Name = exports.Name = function () {
	    function Name(name) {
	      _classCallCheck(this, Name);
	
	      this.Name = name;
	    }
	
	    _createClass(Name, [{
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
	
	    return Name;
	  }();
	
	  _fableCore.Util.setInterfaces(Name.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Name");
	
	  var Constant = exports.Constant = function () {
	    function Constant(caseName, fields) {
	      _classCallCheck(this, Constant);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Constant, [{
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
	
	    return Constant;
	  }();
	
	  _fableCore.Util.setInterfaces(Constant.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Constant");
	
	  var EntityKind = exports.EntityKind = function EntityKind(caseName, fields) {
	    _classCallCheck(this, EntityKind);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(EntityKind.prototype, ["FSharpUnion"], "TheGamma.EntityKind");
	
	  var Entity = exports.Entity = function Entity(kind, symbol, value, meta, type, errors) {
	    _classCallCheck(this, Entity);
	
	    this.Kind = kind;
	    this.Symbol = symbol;
	    this.Value = value;
	    this.Meta = meta;
	    this.Type = type;
	    this.Errors = errors;
	  };
	
	  _fableCore.Util.setInterfaces(Entity.prototype, ["FSharpRecord"], "TheGamma.Entity");
	
	  var EntityValue = exports.EntityValue = function () {
	    function EntityValue(value, preview) {
	      _classCallCheck(this, EntityValue);
	
	      this.Value = value;
	      this.Preview = preview;
	    }
	
	    _createClass(EntityValue, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return EntityValue;
	  }();
	
	  _fableCore.Util.setInterfaces(EntityValue.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.EntityValue");
	
	  var _Node = function _Node(whiteBefore, whiteAfter, range, node, entity) {
	    _classCallCheck(this, _Node);
	
	    this.WhiteBefore = whiteBefore;
	    this.WhiteAfter = whiteAfter;
	    this.Range = range;
	    this.Node = node;
	    this.Entity = entity;
	  };
	
	  exports.Node = _Node;
	
	  _fableCore.Util.setInterfaces(_Node.prototype, ["FSharpRecord"], "TheGamma.Node");
	
	  var Argument = exports.Argument = function Argument(name, value) {
	    _classCallCheck(this, Argument);
	
	    this.Name = name;
	    this.Value = value;
	  };
	
	  _fableCore.Util.setInterfaces(Argument.prototype, ["FSharpRecord"], "TheGamma.Argument");
	
	  var Program = exports.Program = function Program(body) {
	    _classCallCheck(this, Program);
	
	    this.Body = body;
	  };
	
	  _fableCore.Util.setInterfaces(Program.prototype, ["FSharpRecord"], "TheGamma.Program");
	
	  var Command = exports.Command = function Command(caseName, fields) {
	    _classCallCheck(this, Command);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(Command.prototype, ["FSharpUnion"], "TheGamma.Command");
	
	  var Expr = exports.Expr = function Expr(caseName, fields) {
	    _classCallCheck(this, Expr);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(Expr.prototype, ["FSharpUnion"], "TheGamma.Expr");
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./../ast/ast"), require("../../libraries/common"), require("./../common/babel"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.ast, global.common, global.babel);
	    global.providers = mod.exports;
	  }
	})(this, function (exports, _fableCore, _ast, _common, _babel) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.RestProvider = exports.FSharpProvider = exports.ProviderHelpers = exports.ProvidedType = undefined;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
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
	
	  var ProvidedType = exports.ProvidedType = function ProvidedType(caseName, fields) {
	    _classCallCheck(this, ProvidedType);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(ProvidedType.prototype, ["FSharpUnion"], "TheGamma.TypePoviders.ProvidedType");
	
	  var ProviderHelpers = exports.ProviderHelpers = function ($exports) {
	    var docMeta = $exports.docMeta = function docMeta(doc) {
	      return new _ast.Metadata("http://thegamma.net", "Documentation", doc);
	    };
	
	    return $exports;
	  }({});
	
	  var FSharpProvider = exports.FSharpProvider = function ($exports) {
	    var AnyType = $exports.AnyType = function () {
	      function AnyType(kind) {
	        _classCallCheck(this, AnyType);
	
	        this.kind = kind;
	      }
	
	      _createClass(AnyType, [{
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
	
	      return AnyType;
	    }();
	
	    _fableCore.Util.setInterfaces(AnyType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.AnyType");
	
	    var GenericParameterType = $exports.GenericParameterType = function () {
	      function GenericParameterType(kind, name) {
	        _classCallCheck(this, GenericParameterType);
	
	        this.kind = kind;
	        this.name = name;
	      }
	
	      _createClass(GenericParameterType, [{
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
	
	      return GenericParameterType;
	    }();
	
	    _fableCore.Util.setInterfaces(GenericParameterType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.GenericParameterType");
	
	    var ArrayType = $exports.ArrayType = function () {
	      function ArrayType(kind, element) {
	        _classCallCheck(this, ArrayType);
	
	        this.kind = kind;
	        this.element = element;
	      }
	
	      _createClass(ArrayType, [{
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
	
	      return ArrayType;
	    }();
	
	    _fableCore.Util.setInterfaces(ArrayType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.ArrayType");
	
	    var PrimitiveType = $exports.PrimitiveType = function () {
	      function PrimitiveType(kind, name) {
	        _classCallCheck(this, PrimitiveType);
	
	        this.kind = kind;
	        this.name = name;
	      }
	
	      _createClass(PrimitiveType, [{
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
	
	      return PrimitiveType;
	    }();
	
	    _fableCore.Util.setInterfaces(PrimitiveType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.PrimitiveType");
	
	    var FunctionType = $exports.FunctionType = function () {
	      function FunctionType(kind, _arguments, returns) {
	        _classCallCheck(this, FunctionType);
	
	        this.kind = kind;
	        this.arguments = _arguments;
	        this.returns = returns;
	      }
	
	      _createClass(FunctionType, [{
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
	
	      return FunctionType;
	    }();
	
	    _fableCore.Util.setInterfaces(FunctionType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.FunctionType");
	
	    var NamedType = $exports.NamedType = function () {
	      function NamedType(kind, name, typargs) {
	        _classCallCheck(this, NamedType);
	
	        this.kind = kind;
	        this.name = name;
	        this.typargs = typargs;
	      }
	
	      _createClass(NamedType, [{
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
	
	      return NamedType;
	    }();
	
	    _fableCore.Util.setInterfaces(NamedType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.NamedType");
	
	    var Member = $exports.Member = function () {
	      function Member(kind) {
	        _classCallCheck(this, Member);
	
	        this.kind = kind;
	      }
	
	      _createClass(Member, [{
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
	
	      return Member;
	    }();
	
	    _fableCore.Util.setInterfaces(Member.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.Member");
	
	    var Argument = $exports.Argument = function () {
	      function Argument(name, optional, type) {
	        _classCallCheck(this, Argument);
	
	        this.name = name;
	        this.optional = optional;
	        this.type = type;
	      }
	
	      _createClass(Argument, [{
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
	
	      return Argument;
	    }();
	
	    _fableCore.Util.setInterfaces(Argument.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.Argument");
	
	    var MethodMember = $exports.MethodMember = function () {
	      function MethodMember(kind, name, typepars, _arguments, returns) {
	        _classCallCheck(this, MethodMember);
	
	        this.kind = kind;
	        this.name = name;
	        this.typepars = typepars;
	        this.arguments = _arguments;
	        this.returns = returns;
	      }
	
	      _createClass(MethodMember, [{
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
	
	      return MethodMember;
	    }();
	
	    _fableCore.Util.setInterfaces(MethodMember.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.MethodMember");
	
	    var PropertyMember = $exports.PropertyMember = function () {
	      function PropertyMember(kind, name, returns) {
	        _classCallCheck(this, PropertyMember);
	
	        this.kind = kind;
	        this.name = name;
	        this.returns = returns;
	      }
	
	      _createClass(PropertyMember, [{
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
	
	      return PropertyMember;
	    }();
	
	    _fableCore.Util.setInterfaces(PropertyMember.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.PropertyMember");
	
	    var ExportedType = $exports.ExportedType = function () {
	      function ExportedType(name, typepars, _static, instance, members) {
	        _classCallCheck(this, ExportedType);
	
	        this.name = name;
	        this.typepars = typepars;
	        this.static = _static;
	        this.instance = instance;
	        this.members = members;
	      }
	
	      _createClass(ExportedType, [{
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
	
	      return ExportedType;
	    }();
	
	    _fableCore.Util.setInterfaces(ExportedType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.FSharpProvider.ExportedType");
	
	    var provideFSharpTypes = $exports.provideFSharpTypes = function provideFSharpTypes(lookupNamed, url) {
	      var mapType = function mapType(t) {
	        var $var11 = null;
	
	        switch (t.kind) {
	          case "primitive":
	            {
	              var matchValue = t.name;
	              var $var12 = null;
	
	              switch (matchValue) {
	                case "object":
	                  $var12 = new _ast.Type("Any", []);
	                  break;
	
	                case "int":
	                case "float":
	                  $var12 = new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]);
	                  break;
	
	                case "string":
	                  $var12 = new _ast.Type("Primitive", [new _ast.PrimitiveType("String", [])]);
	                  break;
	
	                case "bool":
	                  $var12 = new _ast.Type("Primitive", [new _ast.PrimitiveType("Bool", [])]);
	                  break;
	
	                case "unit":
	                  $var12 = new _ast.Type("Primitive", [new _ast.PrimitiveType("Unit", [])]);
	                  break;
	
	                default:
	                  throw "provideFSharpType: Unsupported type: " + matchValue;
	              }
	
	              $var11 = $var12;
	            }
	            break;
	
	          case "function":
	            {
	              var t_1 = t;
	              $var11 = new _ast.Type("Function", [_fableCore.Seq.toList(t_1.arguments.map(mapType)), mapType(t_1.returns)]);
	            }
	            break;
	
	          case "named":
	            {
	              var _t_ = t;
	              $var11 = lookupNamed(_t_.name)(_fableCore.List.ofArray(_t_.typargs.map(mapType)));
	            }
	            break;
	
	          case "parameter":
	            $var11 = new _ast.Type("Parameter", [t.name]);
	            break;
	
	          case "array":
	            $var11 = new _ast.Type("List", [mapType(t.element)]);
	            break;
	
	          default:
	            throw "provideFSharpType: Unexpected type";
	        }
	
	        return $var11;
	      };
	
	      var getTypeParameters = function getTypeParameters(typars) {
	        return _fableCore.List.ofArray(typars.map(function (t) {
	          var matchValue = mapType(t);
	
	          if (matchValue.Case === "Parameter") {
	            return matchValue.Fields[0];
	          } else {
	            throw "importProvidedType: expected type parameter";
	          }
	        }));
	      };
	
	      var importProvidedType = function importProvidedType(exp) {
	        return function (arg00) {
	          return function (arg10) {
	            return (0, _common.Async$2ECreateNamedFuture$2EStatic)(arg00, arg10);
	          };
	        }(exp.name)(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            var mems = Array.from(_fableCore.Seq.choose(function (m) {
	              return m.kind === "method" ? function () {
	                var m_1 = m;
	
	                var args = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	                  return _fableCore.Seq.map(function (a) {
	                    return [a.name, a.optional, mapType(a.type)];
	                  }, m_1.arguments);
	                }));
	
	                var emitter = new _ast.Emitter(function (tupledArg) {
	                  return new _babel.Expression("CallExpression", [new _babel.Expression("MemberExpression", [tupledArg[0], new _babel.Expression("IdentifierExpression", [m_1.name, null]), false, null]), tupledArg[1], null]);
	                });
	
	                var typ = function () {
	                  var matchValue = getTypeParameters(m_1.typepars);
	
	                  if (matchValue.tail == null) {
	                    return mapType(m_1.returns);
	                  } else {
	                    return new _ast.Type("Forall", [matchValue, mapType(m_1.returns)]);
	                  }
	                }();
	
	                return new _ast.Member("Method", [m_1.name, args, typ, _fableCore.List.ofArray([ProviderHelpers.docMeta(new _ast.Documentation("Text", [""]))]), emitter]);
	              }() : null;
	            }, exp.members));
	            var matchValue = getTypeParameters(exp.typepars);
	
	            if (matchValue.tail == null) {
	              return builder_.Return(new _ast.Type("Object", [new _ast.ObjectType(mems)]));
	            } else {
	              var obj = new _ast.Type("Object", [new _ast.ObjectType(mems)]);
	              return builder_.Return(new _ast.Type("Forall", [matchValue, obj]));
	            }
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	      };
	
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return builder_.Bind(_common.Http.Request("GET", url), function (_arg1) {
	            var expTys = JSON.parse(_arg1);
	            return builder_.Return(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	              return _fableCore.Seq.map(function (exp) {
	                var guid = url + "," + exp.name;
	                var ty = new _ast.Type("Delayed", [guid, importProvidedType(exp)]);
	
	                if (exp.static) {
	                  var e = _fableCore.Seq.fold(function (chain, s) {
	                    return chain != null ? new _babel.Expression("MemberExpression", [chain, new _babel.Expression("IdentifierExpression", [s, null]), false, null]) : new _babel.Expression("IdentifierExpression", [s, null]);
	                  }, null, exp.instance);
	
	                  var ty_1 = function () {
	                    var matchValue = getTypeParameters(exp.typepars);
	
	                    if (matchValue.tail == null) {
	                      return ty;
	                    } else {
	                      return new _ast.Type("App", [ty, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	                        return _fableCore.Seq.map(function (v) {
	                          return new _ast.Type("Any", []);
	                        }, matchValue);
	                      }))]);
	                    }
	                  }();
	
	                  return new ProvidedType("GlobalValue", [exp.name, e, ty_1]);
	                } else {
	                  return new ProvidedType("NamedType", [exp.name, getTypeParameters(exp.typepars), ty]);
	                }
	              }, expTys);
	            })));
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    return $exports;
	  }({});
	
	  var RestProvider = exports.RestProvider = function ($exports) {
	    var AnyType = $exports.AnyType = function () {
	      function AnyType(kind) {
	        _classCallCheck(this, AnyType);
	
	        this.kind = kind;
	      }
	
	      _createClass(AnyType, [{
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
	
	      return AnyType;
	    }();
	
	    _fableCore.Util.setInterfaces(AnyType.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.RestProvider.AnyType");
	
	    var TypeNested = $exports.TypeNested = function () {
	      function TypeNested(kind, endpoint) {
	        _classCallCheck(this, TypeNested);
	
	        this.kind = kind;
	        this.endpoint = endpoint;
	      }
	
	      _createClass(TypeNested, [{
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
	
	      return TypeNested;
	    }();
	
	    _fableCore.Util.setInterfaces(TypeNested.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.RestProvider.TypeNested");
	
	    var TypePrimitive = $exports.TypePrimitive = function () {
	      function TypePrimitive(kind, type, endpoint) {
	        _classCallCheck(this, TypePrimitive);
	
	        this.kind = kind;
	        this.type = type;
	        this.endpoint = endpoint;
	      }
	
	      _createClass(TypePrimitive, [{
	        key: "Equals",
	        value: function Equals(other) {
	          return _fableCore.Util.equalsRecords(this, other);
	        }
	      }]);
	
	      return TypePrimitive;
	    }();
	
	    _fableCore.Util.setInterfaces(TypePrimitive.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypePoviders.RestProvider.TypePrimitive");
	
	    var Parameter = $exports.Parameter = function () {
	      function Parameter(name, type) {
	        _classCallCheck(this, Parameter);
	
	        this.name = name;
	        this.type = type;
	      }
	
	      _createClass(Parameter, [{
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
	
	      return Parameter;
	    }();
	
	    _fableCore.Util.setInterfaces(Parameter.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.RestProvider.Parameter");
	
	    var Documentation = $exports.Documentation = function () {
	      function Documentation(title, details) {
	        _classCallCheck(this, Documentation);
	
	        this.title = title;
	        this.details = details;
	      }
	
	      _createClass(Documentation, [{
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
	
	      return Documentation;
	    }();
	
	    _fableCore.Util.setInterfaces(Documentation.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.RestProvider.Documentation");
	
	    var Member = $exports.Member = function () {
	      function Member(name, returns, parameters, documentation, schema, trace) {
	        _classCallCheck(this, Member);
	
	        this.name = name;
	        this.returns = returns;
	        this.parameters = parameters;
	        this.documentation = documentation;
	        this.schema = schema;
	        this.trace = trace;
	      }
	
	      _createClass(Member, [{
	        key: "Equals",
	        value: function Equals(other) {
	          return _fableCore.Util.equalsRecords(this, other);
	        }
	      }]);
	
	      return Member;
	    }();
	
	    _fableCore.Util.setInterfaces(Member.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypePoviders.RestProvider.Member");
	
	    var ResultType = $exports.ResultType = function () {
	      function ResultType(caseName, fields) {
	        _classCallCheck(this, ResultType);
	
	        this.Case = caseName;
	        this.Fields = fields;
	      }
	
	      _createClass(ResultType, [{
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
	
	      return ResultType;
	    }();
	
	    _fableCore.Util.setInterfaces(ResultType.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypePoviders.RestProvider.ResultType");
	
	    var RawField = $exports.RawField = function () {
	      function RawField(name, type) {
	        _classCallCheck(this, RawField);
	
	        this.name = name;
	        this.type = type;
	      }
	
	      _createClass(RawField, [{
	        key: "Equals",
	        value: function Equals(other) {
	          return _fableCore.Util.equalsRecords(this, other);
	        }
	      }]);
	
	      return RawField;
	    }();
	
	    _fableCore.Util.setInterfaces(RawField.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypePoviders.RestProvider.RawField");
	
	    var RawResultType = $exports.RawResultType = function () {
	      function RawResultType(name, fields, params) {
	        _classCallCheck(this, RawResultType);
	
	        this.name = name;
	        this.fields = fields;
	        this.params = params;
	      }
	
	      _createClass(RawResultType, [{
	        key: "Equals",
	        value: function Equals(other) {
	          return _fableCore.Util.equalsRecords(this, other);
	        }
	      }]);
	
	      return RawResultType;
	    }();
	
	    _fableCore.Util.setInterfaces(RawResultType.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypePoviders.RestProvider.RawResultType");
	
	    var parseDoc = $exports.parseDoc = function parseDoc(json) {
	      return function () {
	        return json == null;
	      }() ? new _ast.Documentation("None", []) : typeof json === "string" ? new _ast.Documentation("Text", [json]) : function () {
	        var doc = json;
	        var matchValue = [doc.title, doc.details];
	
	        var $target1 = function $target1() {
	          return new _ast.Documentation("None", []);
	        };
	
	        if (matchValue[0] != null) {
	          if (matchValue[1] != null) {
	            var dets = matchValue[1];
	            var title = matchValue[0];
	            return new _ast.Documentation("Details", [title, dets]);
	          } else {
	            return $target1();
	          }
	        } else {
	          return $target1();
	        }
	      }();
	    };
	
	    var fromRawType = $exports.fromRawType = function fromRawType(json) {
	      return typeof json === "string" ? new ResultType("Primitive", [json]) : function () {
	        var res = json;
	
	        if (res.name === "record") {
	          return new ResultType("Record", [res.fields.map(function (f) {
	            return [f.name, fromRawType(f.type)];
	          })]);
	        } else {
	          return new ResultType("Generic", [res.name, Array.from(_fableCore.Seq.map(function (json_1) {
	            return fromRawType(json_1);
	          }, res.params))]);
	        }
	      }();
	    };
	
	    var load = $exports.load = function load(url, cookies) {
	      return function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return builder_.Bind(_common.Http.Request("GET", url, null, cookies), function (_arg1) {
	            var members = JSON.parse(_arg1);
	            return builder_.Return(members);
	          });
	        });
	      }(_fableCore.AsyncBuilder.singleton);
	    };
	
	    var trimLeft = $exports.trimLeft = function trimLeft(c, s) {
	      return Array.from(_fableCore.Seq.skipWhile(function (y) {
	        return c === y;
	      }, s.split(""))).join('');
	    };
	
	    var trimRight = $exports.trimRight = function trimRight(c, s) {
	      return Array.from(_fableCore.Seq.skipWhile(function (y) {
	        return c === y;
	      }, s.split("").reverse())).reverse().join('');
	    };
	
	    var concatUrl = $exports.concatUrl = function concatUrl(a, b) {
	      return trimRight("/", a) + "/" + trimLeft("/", b);
	    };
	
	    var addTraceCall = $exports.addTraceCall = function addTraceCall(inst, trace) {
	      return _fableCore.Seq.isEmpty(trace) ? inst : function () {
	        var trace_1 = new _babel.Expression("StringLiteral", [_fableCore.String.join("&", trace), null]);
	        var mem = new _babel.Expression("MemberExpression", [inst, new _babel.Expression("IdentifierExpression", ["addTrace", null]), false, null]);
	        return new _babel.Expression("CallExpression", [mem, _fableCore.List.ofArray([trace_1]), null]);
	      }();
	    };
	
	    var propAccess = $exports.propAccess = function propAccess(trace) {
	      return new _ast.Emitter(function (tupledArg) {
	        return addTraceCall(tupledArg[0], trace);
	      });
	    };
	
	    var methCall = $exports.methCall = function methCall(argNames, trace) {
	      return new _ast.Emitter(function (tupledArg) {
	        var withTrace = addTraceCall(tupledArg[0], trace);
	        return function () {
	          var folder = function folder(inst) {
	            return function (tupledArg_1) {
	              var trace_1 = new _babel.Expression("BinaryExpression", [new _babel.BinaryOperator("BinaryPlus", []), new _babel.Expression("StringLiteral", [tupledArg_1[0] + "=", null]), tupledArg_1[1], null]);
	              var mem = new _babel.Expression("MemberExpression", [inst, new _babel.Expression("IdentifierExpression", ["addTrace", null]), false, null]);
	              return new _babel.Expression("CallExpression", [mem, _fableCore.List.ofArray([trace_1]), null]);
	            };
	          };
	
	          return function (source) {
	            return _fableCore.Seq.fold(function ($var13, $var14) {
	              return folder($var13)($var14);
	            }, withTrace, source);
	          };
	        }()(_fableCore.Seq.zip(argNames, tupledArg[1]));
	      });
	    };
	
	    var dataCall = $exports.dataCall = function dataCall(parser, trace, endp) {
	      return new _ast.Emitter(function (tupledArg) {
	        var tr = propAccess(trace).Emit([tupledArg[0], tupledArg[1]]);
	        var mem = new _babel.Expression("MemberExpression", [tr, new _babel.Expression("IdentifierExpression", ["getValue", null]), false, null]);
	        return parser(new _babel.Expression("CallExpression", [mem, _fableCore.List.ofArray([new _babel.Expression("StringLiteral", [endp, null])]), null]));
	      });
	    };
	
	    var ident = $exports.ident = function ident(s) {
	      return new _babel.Expression("IdentifierExpression", [s, null]);
	    };
	
	    var str = $exports.str = function str(v) {
	      return new _babel.Expression("StringLiteral", [v, null]);
	    };
	
	    var op_Dynamic = $exports.op_Dynamic = function op_Dynamic(e, s) {
	      return new _babel.Expression("MemberExpression", [e, new _babel.Expression("IdentifierExpression", [s, null]), false, null]);
	    };
	
	    var op_DivideAtDivide = $exports.op_DivideAtDivide = function op_DivideAtDivide(e, args) {
	      return new _babel.Expression("CallExpression", [e, args, null]);
	    };
	
	    var func = $exports.func = function func(v, f) {
	      var body = new _babel.Statement("BlockStatement", [_fableCore.List.ofArray([new _babel.Statement("ReturnStatement", [f(ident(v)), null])]), null]);
	      return new _babel.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babel.Pattern("IdentifierPattern", [v, null])]), body, false, false, null]);
	    };
	
	    var getTypeAndEmitter = $exports.getTypeAndEmitter = function getTypeAndEmitter(lookupNamed, ty) {
	      var $target1 = function $target1() {
	        return [new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]), function (e) {
	          return new _babel.Expression("CallExpression", [new _babel.Expression("IdentifierExpression", ["Number", null]), _fableCore.List.ofArray([e]), null]);
	        }];
	      };
	
	      var $target3 = function $target3(ty_1) {
	        var patternInput = getTypeAndEmitter(lookupNamed, ty_1);
	        var serTy = lookupNamed("series")(_fableCore.List.ofArray([new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]), patternInput[0]]));
	        return [serTy, function (d) {
	          return op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "ordinal"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(ident("_runtime"), "convertSequence"), _fableCore.List.ofArray([func("v", patternInput[1]), d])), str("key"), str("value"), str("")]));
	        }];
	      };
	
	      var $target5 = function $target5() {
	        console.log("getTypeAndEmitter: Cannot handle %O", ty);
	        throw "getTypeAndEmitter: Cannot handle type";
	      };
	
	      if (ty.Case === "Generic") {
	        if (ty.Fields[0] === "seq") {
	          if (ty.Fields[1].length === 1) {
	            if (ty.Fields[1][0].Case === "Generic") {
	              if (ty.Fields[1][0].Fields[0] === "tuple") {
	                if (function () {
	                  var testExpr = ty.Fields[1][0].Fields[1];
	                  return testExpr.length === 2;
	                }()) {
	                  var t1 = ty.Fields[1][0].Fields[1][0];
	                  var t2 = ty.Fields[1][0].Fields[1][1];
	                  {
	                    var _ret = function () {
	                      var patternInput = getTypeAndEmitter(lookupNamed, t1);
	                      var patternInput_1 = getTypeAndEmitter(lookupNamed, t2);
	                      var typ = lookupNamed("series")(_fableCore.List.ofArray([patternInput[0], patternInput_1[0]]));
	                      return {
	                        v: [typ, function (d) {
	                          return op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "create"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(ident("_runtime"), "convertTupleSequence"), _fableCore.List.ofArray([func("v", patternInput[1]), func("v", patternInput_1[1]), d])), str("key"), str("value"), str("")]));
	                        }]
	                      };
	                    }();
	
	                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                  }
	                } else {
	                  return $target3(ty.Fields[1][0]);
	                }
	              } else {
	                return $target3(ty.Fields[1][0]);
	              }
	            } else {
	              return $target3(ty.Fields[1][0]);
	            }
	          } else {
	            return $target5();
	          }
	        } else {
	          return $target5();
	        }
	      } else {
	        if (ty.Case === "Record") {
	          var membs = ty.Fields[0];
	          var membs_1 = membs.map(function (tupledArg) {
	            var patternInput = getTypeAndEmitter(lookupNamed, tupledArg[1]);
	            var emitter = new _ast.Emitter(function (tupledArg_1) {
	              return patternInput[1](op_Dynamic(tupledArg_1[0], tupledArg[0]));
	            });
	            return new _ast.Member("Property", [tupledArg[0], patternInput[0], _fableCore.List.ofArray([ProviderHelpers.docMeta(new _ast.Documentation("Text", [""]))]), emitter]);
	          });
	          var obj = new _ast.Type("Object", [new _ast.ObjectType(membs_1)]);
	          return [obj, function (x) {
	            return x;
	          }];
	        } else {
	          if (ty.Fields[0] === "string") {
	            return [new _ast.Type("Primitive", [new _ast.PrimitiveType("String", [])]), function (x) {
	              return x;
	            }];
	          } else {
	            if (ty.Fields[0] === "int") {
	              return $target1();
	            } else {
	              if (ty.Fields[0] === "float") {
	                return $target1();
	              } else {
	                return $target5();
	              }
	            }
	          }
	        }
	      }
	    };
	
	    var mapParamType = $exports.mapParamType = function mapParamType(_arg1) {
	      var $var15 = null;
	
	      switch (_arg1) {
	        case "int":
	        case "float":
	          $var15 = new _ast.PrimitiveType("Number", []);
	          break;
	
	        default:
	          throw "mapParamType: Unsupported parameter type";
	      }
	
	      return $var15;
	    };
	
	    var restTypeCache = $exports.restTypeCache = new Map();
	
	    var createRestType = $exports.createRestType = function createRestType(lookupNamed, root, cookies, url) {
	      var guid = concatUrl(root, url) + cookies;
	      var matchValue = restTypeCache.has(guid) ? [true, restTypeCache.get(guid)] : [false, null];
	
	      if (matchValue[0]) {
	        return matchValue[1];
	      } else {
	        var future = function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind(load(concatUrl(root, url), cookies), function (_arg1) {
	              return builder_.Return(new _ast.Type("Object", [new _ast.ObjectType(_arg1.map(function (m) {
	                var schema = m.schema != null ? _fableCore.List.ofArray([function () {
	                  var Type = m.schema["@type"];
	                  return new _ast.Metadata("http://schema.org", Type, m.schema);
	                }()]) : new _fableCore.List();
	                var matchValue_1 = m.returns.kind;
	                var $var16 = null;
	
	                switch (matchValue_1) {
	                  case "nested":
	                    {
	                      var returns = m.returns;
	                      var retTyp = createRestType(lookupNamed, root, cookies, returns.endpoint);
	
	                      if (m.parameters == null) {
	                        $var16 = new _ast.Member("Property", [m.name, retTyp, _fableCore.List.ofArray([ProviderHelpers.docMeta(parseDoc(m.documentation))], schema), propAccess(m.trace)]);
	                      } else {
	                        var args = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	                          return _fableCore.Seq.map(function (p) {
	                            return [p.name, false, new _ast.Type("Primitive", [mapParamType(p.type)])];
	                          }, m.parameters);
	                        }));
	
	                        var argNames = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	                          return _fableCore.Seq.map(function (p) {
	                            return p.name;
	                          }, m.parameters);
	                        }));
	
	                        $var16 = new _ast.Member("Method", [m.name, args, retTyp, _fableCore.List.ofArray([ProviderHelpers.docMeta(parseDoc(m.documentation))]), methCall(argNames, m.trace)]);
	                      }
	                    }
	                    break;
	
	                  case "primitive":
	                    {
	                      var _returns = m.returns;
	
	                      var _ty = fromRawType(_returns.type);
	
	                      var patternInput = getTypeAndEmitter(lookupNamed, _ty);
	                      $var16 = new _ast.Member("Property", [m.name, patternInput[0], _fableCore.List.ofArray([ProviderHelpers.docMeta(parseDoc(m.documentation))], schema), dataCall(patternInput[1], m.trace, _returns.endpoint)]);
	                    }
	                    break;
	
	                  default:
	                    throw "?";
	                }
	
	                return $var16;
	              }))]));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	
	        var ty = new _ast.Type("Delayed", [guid, function (arg00) {
	          return function (arg10) {
	            return (0, _common.Async$2ECreateNamedFuture$2EStatic)(arg00, arg10);
	          };
	        }(guid)(future)]);
	        restTypeCache.set(guid, ty);
	        return ty;
	      }
	    };
	
	    var provideRestType = $exports.provideRestType = function provideRestType(lookupNamed, name, root, cookies) {
	      var ctx = op_Dynamic(ident("_runtime"), "RuntimeContext");
	      return new ProvidedType("GlobalValue", [name, new _babel.Expression("NewExpression", [ctx, _fableCore.List.ofArray([str(root), str(cookies), str("")]), null]), createRestType(lookupNamed, root, cookies, "/")]);
	    };
	
	    return $exports;
	  }({});
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("fable-core"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.fableCore);
	        global.babel = mod.exports;
	    }
	})(this, function (exports, _fableCore) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.Serializer = exports.Program = exports.Statement = exports.Expression = exports.VariableDeclarator = exports.VariableDeclarationKind = exports.Pattern = exports.BinaryOperator = exports.AssignmentOperator = exports.SourceLocation = exports.Position = undefined;
	
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
	
	    var Position = exports.Position = function () {
	        function Position(line, column) {
	            _classCallCheck(this, Position);
	
	            this.line = line;
	            this.column = column;
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
	
	    _fableCore.Util.setInterfaces(Position.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Position");
	
	    var SourceLocation = exports.SourceLocation = function () {
	        function SourceLocation(start, end) {
	            _classCallCheck(this, SourceLocation);
	
	            this.start = start;
	            this.end = end;
	        }
	
	        _createClass(SourceLocation, [{
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
	
	        return SourceLocation;
	    }();
	
	    _fableCore.Util.setInterfaces(SourceLocation.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.SourceLocation");
	
	    var AssignmentOperator = exports.AssignmentOperator = function () {
	        function AssignmentOperator(caseName, fields) {
	            _classCallCheck(this, AssignmentOperator);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(AssignmentOperator, [{
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
	
	        return AssignmentOperator;
	    }();
	
	    _fableCore.Util.setInterfaces(AssignmentOperator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.AssignmentOperator");
	
	    var BinaryOperator = exports.BinaryOperator = function () {
	        function BinaryOperator(caseName, fields) {
	            _classCallCheck(this, BinaryOperator);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(BinaryOperator, [{
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
	
	        return BinaryOperator;
	    }();
	
	    _fableCore.Util.setInterfaces(BinaryOperator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.BinaryOperator");
	
	    var Pattern = exports.Pattern = function () {
	        function Pattern(caseName, fields) {
	            _classCallCheck(this, Pattern);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(Pattern, [{
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
	
	        return Pattern;
	    }();
	
	    _fableCore.Util.setInterfaces(Pattern.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Pattern");
	
	    var VariableDeclarationKind = exports.VariableDeclarationKind = function () {
	        function VariableDeclarationKind(caseName, fields) {
	            _classCallCheck(this, VariableDeclarationKind);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(VariableDeclarationKind, [{
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
	
	        return VariableDeclarationKind;
	    }();
	
	    _fableCore.Util.setInterfaces(VariableDeclarationKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.VariableDeclarationKind");
	
	    var VariableDeclarator = exports.VariableDeclarator = function () {
	        function VariableDeclarator(caseName, fields) {
	            _classCallCheck(this, VariableDeclarator);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(VariableDeclarator, [{
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
	
	        return VariableDeclarator;
	    }();
	
	    _fableCore.Util.setInterfaces(VariableDeclarator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.VariableDeclarator");
	
	    var Expression = exports.Expression = function () {
	        function Expression(caseName, fields) {
	            _classCallCheck(this, Expression);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(Expression, [{
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
	
	        return Expression;
	    }();
	
	    _fableCore.Util.setInterfaces(Expression.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Expression");
	
	    var Statement = exports.Statement = function () {
	        function Statement(caseName, fields) {
	            _classCallCheck(this, Statement);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(Statement, [{
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
	
	        return Statement;
	    }();
	
	    _fableCore.Util.setInterfaces(Statement.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Statement");
	
	    var Program = exports.Program = function () {
	        function Program(location, body) {
	            _classCallCheck(this, Program);
	
	            this.location = location;
	            this.body = body;
	        }
	
	        _createClass(Program, [{
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
	
	        return Program;
	    }();
	
	    _fableCore.Util.setInterfaces(Program.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Babel.Program");
	
	    var Serializer = exports.Serializer = function ($exports) {
	        var createObj = $exports.createObj = function createObj(props) {
	            return _fableCore.Util.createObj(_fableCore.List.concat(props));
	        };
	
	        var serializeBinaryOperator = $exports.serializeBinaryOperator = function serializeBinaryOperator(_arg1) {
	            return _arg1.Case === "BinaryUnequal" ? "!=" : _arg1.Case === "BinaryEqualStrict" ? "===" : _arg1.Case === "BinaryUnequalStrict" ? "!==" : _arg1.Case === "BinaryLess" ? "<" : _arg1.Case === "BinaryLessOrEqual" ? "<=" : _arg1.Case === "BinaryGreater" ? ">" : _arg1.Case === "BinaryGreaterOrEqual" ? ">=" : _arg1.Case === "BinaryShiftLeft" ? "<<" : _arg1.Case === "BinaryShiftRightSignPropagating" ? ">>" : _arg1.Case === "BinaryShiftRightZeroFill" ? ">>>" : _arg1.Case === "BinaryMinus" ? "-" : _arg1.Case === "BinaryPlus" ? "+" : _arg1.Case === "BinaryMultiply" ? "*" : _arg1.Case === "BinaryDivide" ? "/" : _arg1.Case === "BinaryModulus" ? "%" : _arg1.Case === "BinaryExponent" ? "**" : _arg1.Case === "BinaryOrBitwise" ? "|" : _arg1.Case === "BinaryXorBitwise" ? "^" : _arg1.Case === "BinaryAndBitwise" ? "&" : _arg1.Case === "BinaryIn" ? "in" : _arg1.Case === "BinaryInstanceOf" ? "instanceof" : "==";
	        };
	
	        var serializeAssignOperator = $exports.serializeAssignOperator = function serializeAssignOperator(_arg1) {
	            return _arg1.Case === "AssignMinus" ? "-=" : _arg1.Case === "AssignPlus" ? "+=" : _arg1.Case === "AssignMultiply" ? "*=" : _arg1.Case === "AssignDivide" ? "/=" : _arg1.Case === "AssignModulus" ? "%=" : _arg1.Case === "AssignShiftLeft" ? "<<=" : _arg1.Case === "AssignShiftRightSignPropagating" ? ">>=" : _arg1.Case === "AssignShiftRightZeroFill" ? ">>>=" : _arg1.Case === "AssignOrBitwise" ? "|=" : _arg1.Case === "AssignXorBitwise" ? "^=" : _arg1.Case === "AssignAndBitwise" ? "&=" : "=";
	        };
	
	        var serializePattern = $exports.serializePattern = function serializePattern(pat) {
	            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Identifier"]]), _fableCore.List.ofArray([["name", pat.Fields[0]]]), pat.Fields[1] != null ? _fableCore.List.ofArray([["loc", pat.Fields[1]]]) : new _fableCore.List()]));
	        };
	
	        var serializeDeclarator = $exports.serializeDeclarator = function serializeDeclarator(_arg1) {
	            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "VariableDeclarator"]]), _fableCore.List.ofArray([["id", serializePattern(_arg1.Fields[0])]]), function () {
	                var $var1 = _arg1.Fields[1];
	
	                if ($var1 != null) {
	                    return function (expr) {
	                        return serializeExpression(expr);
	                    }($var1);
	                } else {
	                    return $var1;
	                }
	            }() != null ? _fableCore.List.ofArray([["init", function () {
	                var $var1 = _arg1.Fields[1];
	
	                if ($var1 != null) {
	                    return function (expr) {
	                        return serializeExpression(expr);
	                    }($var1);
	                } else {
	                    return $var1;
	                }
	            }()]]) : new _fableCore.List(), _arg1.Fields[2] != null ? _fableCore.List.ofArray([["loc", _arg1.Fields[2]]]) : new _fableCore.List()]));
	        };
	
	        var serializeExpression = $exports.serializeExpression = function serializeExpression(expr) {
	            return expr.Case === "NewExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NewExpression"]]), _fableCore.List.ofArray([["callee", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["arguments", Array.from(_fableCore.List.map(function (expr_1) {
	                return serializeExpression(expr_1);
	            }, expr.Fields[1]))]]), expr.Fields[2] != null ? _fableCore.List.ofArray([["loc", expr.Fields[2]]]) : new _fableCore.List()])) : expr.Case === "FunctionExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "FunctionExpression"]]), expr.Fields[0] != null ? _fableCore.List.ofArray([["id", expr.Fields[0]]]) : new _fableCore.List(), _fableCore.List.ofArray([["params", Array.from(_fableCore.List.map(function (pat) {
	                return serializePattern(pat);
	            }, expr.Fields[1]))]]), _fableCore.List.ofArray([["body", serializeStatement(expr.Fields[2])]]), _fableCore.List.ofArray([["generator", expr.Fields[3]]]), _fableCore.List.ofArray([["async", expr.Fields[4]]]), expr.Fields[5] != null ? _fableCore.List.ofArray([["loc", expr.Fields[5]]]) : new _fableCore.List()])) : expr.Case === "AssignmentExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "AssignmentExpression"]]), _fableCore.List.ofArray([["left", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["right", serializeExpression(expr.Fields[2])]]), _fableCore.List.ofArray([["operator", serializeAssignOperator(expr.Fields[0])]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "CallExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "CallExpression"]]), _fableCore.List.ofArray([["callee", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["arguments", Array.from(_fableCore.List.map(function (expr_1) {
	                return serializeExpression(expr_1);
	            }, expr.Fields[1]))]]), expr.Fields[2] != null ? _fableCore.List.ofArray([["loc", expr.Fields[2]]]) : new _fableCore.List()])) : expr.Case === "MemberExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "MemberExpression"]]), _fableCore.List.ofArray([["object", serializeExpression(expr.Fields[0])]]), _fableCore.List.ofArray([["property", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["computed", expr.Fields[2]]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "BinaryExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BinaryExpression"]]), _fableCore.List.ofArray([["left", serializeExpression(expr.Fields[1])]]), _fableCore.List.ofArray([["right", serializeExpression(expr.Fields[2])]]), _fableCore.List.ofArray([["operator", serializeBinaryOperator(expr.Fields[0])]]), expr.Fields[3] != null ? _fableCore.List.ofArray([["loc", expr.Fields[3]]]) : new _fableCore.List()])) : expr.Case === "ArrayExpression" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ArrayExpression"]]), _fableCore.List.ofArray([["elements", Array.from(_fableCore.List.map(function (expr_1) {
	                return serializeExpression(expr_1);
	            }, expr.Fields[0]))]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "NullLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NullLiteral"]]), expr.Fields[0] != null ? _fableCore.List.ofArray([["loc", expr.Fields[0]]]) : new _fableCore.List()])) : expr.Case === "StringLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "StringLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "BooleanLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BooleanLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : expr.Case === "NumericLiteral" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "NumericLiteral"]]), _fableCore.List.ofArray([["value", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()])) : createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Identifier"]]), _fableCore.List.ofArray([["name", expr.Fields[0]]]), expr.Fields[1] != null ? _fableCore.List.ofArray([["loc", expr.Fields[1]]]) : new _fableCore.List()]));
	        };
	
	        var serializeStatement = $exports.serializeStatement = function serializeStatement(stm) {
	            return stm.Case === "BlockStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "BlockStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["body", Array.from(_fableCore.List.map(function (stm_1) {
	                return serializeStatement(stm_1);
	            }, stm.Fields[0]))]])])) : stm.Case === "EmptyStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "EmptyStatement"]]), stm.Fields[0] != null ? _fableCore.List.ofArray([["loc", stm.Fields[0]]]) : new _fableCore.List()])) : stm.Case === "ReturnStatement" ? createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ReturnStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["argument", serializeExpression(stm.Fields[0])]])])) : stm.Case === "VariableDeclaration" ? function () {
	                var kind = stm.Fields[0].Case === "Let" ? "let" : stm.Fields[0].Case === "Const" ? "const" : "var";
	                return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "VariableDeclaration"]]), _fableCore.List.ofArray([["kind", kind]]), _fableCore.List.ofArray([["declarations", Array.from(_fableCore.List.map(function (arg00_) {
	                    return serializeDeclarator(arg00_);
	                }, stm.Fields[1]))]]), stm.Fields[2] != null ? _fableCore.List.ofArray([["loc", stm.Fields[2]]]) : new _fableCore.List()]));
	            }() : createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "ExpressionStatement"]]), stm.Fields[1] != null ? _fableCore.List.ofArray([["loc", stm.Fields[1]]]) : new _fableCore.List(), _fableCore.List.ofArray([["expression", serializeExpression(stm.Fields[0])]])]));
	        };
	
	        var serializeProgram = $exports.serializeProgram = function serializeProgram(prog) {
	            return createObj(_fableCore.List.ofArray([_fableCore.List.ofArray([["type", "Program"]]), prog.location != null ? _fableCore.List.ofArray([["loc", prog.location]]) : new _fableCore.List(), _fableCore.List.ofArray([["sourceType", "module"]]), _fableCore.List.ofArray([["body", Array.from(_fableCore.List.map(function (stm) {
	                return serializeStatement(stm);
	            }, prog.body))]]), _fableCore.List.ofArray([["directives", []]])]));
	        };
	
	        return $exports;
	    }({});
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(5), __webpack_require__(4), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./../ast/ast"), require("./../common/babel"), require("./providers"), require("../../libraries/common"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.ast, global.babel, global.providers, global.common);
	    global.pivot = mod.exports;
	  }
	})(this, function (exports, _fableCore, _ast, _babel, _providers, _common) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.Context = exports.propertyEmitter = exports.Transform = exports.Field = exports.Transformation = exports.Paging = exports.SortDirection = exports.Aggregation = undefined;
	  exports.trimLeft = trimLeft;
	  exports.trimRight = trimRight;
	  exports.concatUrl = concatUrl;
	  exports.makeObjectType = makeObjectType;
	  exports.isNumeric = isNumeric;
	  exports.isConcatenable = isConcatenable;
	  exports.ident = ident;
	  exports.str = str;
	  exports.bool = bool;
	  exports.arr = arr;
	  exports.op_Dynamic = op_Dynamic;
	  exports.op_DivideQmarkDivide = op_DivideQmarkDivide;
	  exports.op_DivideAtDivide = op_DivideAtDivide;
	  exports.func = func;
	  exports.getTypeAndEmitter = getTypeAndEmitter;
	  exports.makeMethodEmitter = makeMethodEmitter;
	  exports.makeDataEmitter = makeDataEmitter;
	  exports.makeProperty = makeProperty;
	  exports.makeMethod = makeMethod;
	  exports.makeDataMember = makeDataMember;
	  exports.handleGetSeriesRequest = handleGetSeriesRequest;
	  exports.handlePagingRequest = handlePagingRequest;
	  exports.handleDropRequest = handleDropRequest;
	  exports.handleSortRequest = handleSortRequest;
	  exports.aggregationMembers = aggregationMembers;
	  exports.handleGroupAggRequest = handleGroupAggRequest;
	  exports.handleGroupRequest = handleGroupRequest;
	  exports.handleFilterEqNeqRequest = handleFilterEqNeqRequest;
	  exports.handleFilterRequest = handleFilterRequest;
	  exports.makePivotTypeImmediate = makePivotTypeImmediate;
	  exports.adjustForPreview = adjustForPreview;
	  exports.withPreview = withPreview;
	  exports.makePivotType = makePivotType;
	  exports.providePivotType = providePivotType;
	
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
	
	  var Aggregation = exports.Aggregation = function () {
	    function Aggregation(caseName, fields) {
	      _classCallCheck(this, Aggregation);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Aggregation, [{
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
	
	    return Aggregation;
	  }();
	
	  _fableCore.Util.setInterfaces(Aggregation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Aggregation");
	
	  var SortDirection = exports.SortDirection = function () {
	    function SortDirection(caseName, fields) {
	      _classCallCheck(this, SortDirection);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(SortDirection, [{
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
	
	    return SortDirection;
	  }();
	
	  _fableCore.Util.setInterfaces(SortDirection.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.SortDirection");
	
	  var Paging = exports.Paging = function () {
	    function Paging(caseName, fields) {
	      _classCallCheck(this, Paging);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Paging, [{
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
	
	    return Paging;
	  }();
	
	  _fableCore.Util.setInterfaces(Paging.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Paging");
	
	  var Transformation = exports.Transformation = function () {
	    function Transformation(caseName, fields) {
	      _classCallCheck(this, Transformation);
	
	      this.Case = caseName;
	      this.Fields = fields;
	    }
	
	    _createClass(Transformation, [{
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
	
	    return Transformation;
	  }();
	
	  _fableCore.Util.setInterfaces(Transformation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Transformation");
	
	  var Field = exports.Field = function () {
	    function Field(name, type) {
	      _classCallCheck(this, Field);
	
	      this.Name = name;
	      this.Type = type;
	    }
	
	    _createClass(Field, [{
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
	
	    return Field;
	  }();
	
	  _fableCore.Util.setInterfaces(Field.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Field");
	
	  var Transform = exports.Transform = function ($exports) {
	    var formatAgg = function formatAgg(_arg1) {
	      return _arg1.Case === "CountAll" ? _fableCore.List.ofArray(["count-all"]) : _arg1.Case === "CountDistinct" ? _fableCore.List.ofArray(["count-dist", _arg1.Fields[0]]) : _arg1.Case === "ReturnUnique" ? _fableCore.List.ofArray(["unique", _arg1.Fields[0]]) : _arg1.Case === "ConcatValues" ? _fableCore.List.ofArray(["concat-vals", _arg1.Fields[0]]) : _arg1.Case === "Sum" ? _fableCore.List.ofArray(["sum", _arg1.Fields[0]]) : _arg1.Case === "Mean" ? _fableCore.List.ofArray(["mean", _arg1.Fields[0]]) : _fableCore.List.ofArray(["key"]);
	    };
	
	    var toUrl = $exports.toUrl = function toUrl(transforms) {
	      return _fableCore.String.join("/", _fableCore.List.concat(_fableCore.List.mapIndexed(function (i, l) {
	        return i === 0 ? l : _fableCore.List.ofArray(["then"], l);
	      }, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	        return _fableCore.Seq.map(function (t) {
	          return t.Case === "DropColumns" ? _fableCore.List.ofArray(["drop"], t.Fields[0]) : t.Case === "SortBy" ? _fableCore.List.ofArray(["sort"], _fableCore.List.collect(function (tupledArg) {
	            return _fableCore.List.ofArray([tupledArg[0], tupledArg[1].Equals(new SortDirection("Ascending", [])) ? "asc" : "desc"]);
	          }, t.Fields[0])) : t.Case === "GroupBy" ? _fableCore.List.ofArray(["group"], _fableCore.List.append(_fableCore.List.map(function (f) {
	            return "by-" + f;
	          }, t.Fields[0]), _fableCore.List.collect(function (_arg1) {
	            return formatAgg(_arg1);
	          }, t.Fields[1]))) : t.Case === "Paging" ? _fableCore.List.ofArray(["page"], _fableCore.List.collect(function (_arg1) {
	            return _arg1.Case === "Skip" ? _fableCore.List.ofArray(["skip", _arg1.Fields[0]]) : _fableCore.List.ofArray(["take", _arg1.Fields[0]]);
	          }, t.Fields[0])) : t.Case === "GetSeries" ? _fableCore.List.ofArray(["series", t.Fields[0], t.Fields[1]]) : t.Case === "Empty" ? new _fableCore.List() : _fableCore.List.ofArray(["filter"], _fableCore.List.collect(function (tupledArg) {
	            return _fableCore.List.ofArray([tupledArg[0], tupledArg[1] ? "eq" : "neq", tupledArg[2]]);
	          }, t.Fields[0]));
	        }, _fableCore.List.reverse(transforms));
	      })))));
	    };
	
	    var singleTransformFields = $exports.singleTransformFields = function singleTransformFields(fields, _arg1) {
	      return _arg1.Case === "SortBy" ? fields : _arg1.Case === "Paging" ? fields : _arg1.Case === "FilterBy" ? fields : _arg1.Case === "GetSeries" ? _fableCore.List.ofArray([_fableCore.Seq.find(function (f) {
	        return f.Name === _arg1.Fields[0];
	      }, fields), _fableCore.Seq.find(function (f) {
	        return f.Name === _arg1.Fields[1];
	      }, fields)]) : _arg1.Case === "DropColumns" ? function () {
	        var dropped = _fableCore.Set.create(_arg1.Fields[0], new _fableCore.GenericComparer(function (x, y) {
	          return x < y ? -1 : x > y ? 1 : 0;
	        }));
	
	        return _fableCore.List.filter(function (f) {
	          return !dropped.has(f.Name);
	        }, fields);
	      }() : _arg1.Case === "GroupBy" ? function () {
	        var oldFields = new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	          return _fableCore.Seq.map(function (f) {
	            return [f.Name, f];
	          }, fields);
	        })));
	        return _fableCore.List.collect(function (_arg2) {
	          var $target1 = function $target1(fld) {
	            return _fableCore.List.ofArray([oldFields.get(fld)]);
	          };
	
	          if (_arg2.Case === "ReturnUnique") {
	            return $target1(_arg2.Fields[0]);
	          } else {
	            if (_arg2.Case === "ConcatValues") {
	              return $target1(_arg2.Fields[0]);
	            } else {
	              if (_arg2.Case === "Sum") {
	                return $target1(_arg2.Fields[0]);
	              } else {
	                if (_arg2.Case === "Mean") {
	                  return _fableCore.List.ofArray([oldFields.get(_arg2.Fields[0])]);
	                } else {
	                  if (_arg2.Case === "CountAll") {
	                    return _fableCore.List.ofArray([new Field("count", new _ast.PrimitiveType("Number", []))]);
	                  } else {
	                    if (_arg2.Case === "CountDistinct") {
	                      return _fableCore.List.ofArray([new Field(oldFields.get(_arg2.Fields[0]).Name, new _ast.PrimitiveType("Number", []))]);
	                    } else {
	                      return _fableCore.List.map(function (f) {
	                        return oldFields.get(f);
	                      }, _arg1.Fields[0]);
	                    }
	                  }
	                }
	              }
	            }
	          }
	        }, _arg1.Fields[1]);
	      }() : fields;
	    };
	
	    var transformFields = $exports.transformFields = function transformFields(fields, tfs) {
	      return function () {
	        var state = _fableCore.Seq.toList(fields);
	
	        return function (list) {
	          return _fableCore.Seq.fold(function (fields_1, _arg1) {
	            return singleTransformFields(fields_1, _arg1);
	          }, state, list);
	        };
	      }()(tfs);
	    };
	
	    return $exports;
	  }({});
	
	  function trimLeft(c, s) {
	    return Array.from(_fableCore.Seq.skipWhile(function (y) {
	      return c === y;
	    }, s.split(""))).join('');
	  }
	
	  function trimRight(c, s) {
	    return Array.from(_fableCore.Seq.skipWhile(function (y) {
	      return c === y;
	    }, s.split("").reverse())).reverse().join('');
	  }
	
	  function concatUrl(a, b) {
	    return trimRight("/", a) + "/" + trimLeft("/", b);
	  }
	
	  function makeObjectType(members) {
	    return new _ast.Type("Object", [new _ast.ObjectType(Array.from(members))]);
	  }
	
	  function isNumeric(fld) {
	    return fld.Equals(new _ast.PrimitiveType("Number", []));
	  }
	
	  function isConcatenable(fld) {
	    return fld.Equals(new _ast.PrimitiveType("String", []));
	  }
	
	  function ident(s) {
	    return new _babel.Expression("IdentifierExpression", [s, null]);
	  }
	
	  function str(v) {
	    return new _babel.Expression("StringLiteral", [v, null]);
	  }
	
	  function bool(v) {
	    return new _babel.Expression("BooleanLiteral", [v, null]);
	  }
	
	  function arr(l) {
	    return new _babel.Expression("ArrayExpression", [l, null]);
	  }
	
	  function op_Dynamic(e, s) {
	    return new _babel.Expression("MemberExpression", [e, new _babel.Expression("IdentifierExpression", [s, null]), false, null]);
	  }
	
	  function op_DivideQmarkDivide(e, a) {
	    return new _babel.Expression("MemberExpression", [e, a, true, null]);
	  }
	
	  function op_DivideAtDivide(e, args) {
	    return new _babel.Expression("CallExpression", [e, args, null]);
	  }
	
	  function func(v, f) {
	    var body = new _babel.Statement("BlockStatement", [_fableCore.List.ofArray([new _babel.Statement("ReturnStatement", [f(ident(v)), null])]), null]);
	    return new _babel.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babel.Pattern("IdentifierPattern", [v, null])]), body, false, false, null]);
	  }
	
	  function getTypeAndEmitter(_arg1) {
	    return _arg1.Case === "Number" ? [new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]), function (e) {
	      return op_DivideAtDivide(ident("Number"), _fableCore.List.ofArray([e]));
	    }] : _arg1.Case === "Bool" ? [new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]), function (e) {
	      return op_DivideAtDivide(ident("Boolean"), _fableCore.List.ofArray([e]));
	    }] : _arg1.Case === "Unit" ? [new _ast.Type("Primitive", [new _ast.PrimitiveType("Unit", [])]), function (e) {
	      return new _babel.Expression("NullLiteral", [null]);
	    }] : [new _ast.Type("Primitive", [new _ast.PrimitiveType("String", [])]), function (x) {
	      return x;
	    }];
	  }
	
	  var propertyEmitter = exports.propertyEmitter = new _ast.Emitter(function (tupledArg) {
	    return tupledArg[0];
	  });
	
	  function makeMethodEmitter(callid, pars) {
	    return new _ast.Emitter(function (tupledArg) {
	      var args = arr(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	        return _fableCore.Seq.map(function (v) {
	          return v;
	        }, tupledArg[1]);
	      })));
	      return op_DivideAtDivide(op_Dynamic(tupledArg[0], "addCall"), _fableCore.List.ofArray([str(callid), args]));
	    });
	  }
	
	  function makeDataEmitter(isPreview, isSeries, tfs) {
	    return new _ast.Emitter(function (tupledArg) {
	      return isSeries ? op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "create"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(tupledArg[0], "getData"), _fableCore.List.ofArray([str(Transform.toUrl(_fableCore.List.reverse(tfs))), bool(isPreview)])), str("key"), str("value"), str("")])) : op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "ordinal"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(tupledArg[0], "getData"), _fableCore.List.ofArray([str(Transform.toUrl(_fableCore.List.reverse(tfs))), bool(isPreview)])), str("key"), str("value"), str("")]));
	    });
	  }
	
	  var Context = exports.Context = function Context(root, lookupNamed, inputFields, fields) {
	    _classCallCheck(this, Context);
	
	    this.Root = root;
	    this.LookupNamed = lookupNamed;
	    this.InputFields = inputFields;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(Context.prototype, ["FSharpRecord"], "TheGamma.TypeProviders.Pivot.Context");
	
	  function makeProperty(ctx, name, tfs) {
	    var meta = new _ast.Metadata("http://thegamma.net", "Pivot", tfs);
	    return new _ast.Member("Property", [name, makePivotType(ctx, tfs), _fableCore.List.ofArray([meta]), propertyEmitter]);
	  }
	
	  function makeMethod(ctx, name, tfs, callid, args) {
	    var meta = new _ast.Metadata("http://thegamma.net", "Pivot", tfs);
	    return new _ast.Member("Method", [name, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.collect(function (matchValue) {
	        return _fableCore.Seq.singleton([matchValue[0], false, new _ast.Type("Primitive", [matchValue[1]])]);
	      }, args);
	    })), makePivotType(ctx, tfs), _fableCore.List.ofArray([meta]), makeMethodEmitter(callid, args)]);
	  }
	
	  function makeDataMember(ctx, name, isPreview, tfs) {
	    var fields = Transform.transformFields(ctx.InputFields, _fableCore.List.reverse(tfs));
	
	    var patternInput = function () {
	      var $target1 = function $target1() {
	        var membs = Array.from(fields).map(function (fld) {
	          var patternInput = getTypeAndEmitter(fld.Type);
	          var emitter = new _ast.Emitter(function (tupledArg) {
	            return patternInput[1](op_DivideQmarkDivide(tupledArg[0], str(fld.Name)));
	          });
	          return new _ast.Member("Property", [fld.Name, patternInput[0], _fableCore.List.ofArray([_providers.ProviderHelpers.docMeta(new _ast.Documentation("Text", [""]))]), emitter]);
	        });
	        var recTyp = new _ast.Type("Object", [new _ast.ObjectType(membs)]);
	        return [ctx.LookupNamed("series")(_fableCore.List.ofArray([new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]), recTyp])), false];
	      };
	
	      if (tfs.tail != null) {
	        if (tfs.head.Case === "GetSeries") {
	          var $target1_1 = function $target1_1() {
	            throw "makeDataMember: Series should have key and value";
	          };
	
	          if (ctx.Fields.tail != null) {
	            if (ctx.Fields.tail.tail != null) {
	              if (ctx.Fields.tail.tail.tail == null) {
	                var kf = ctx.Fields.head;
	                var vf = ctx.Fields.tail.head;
	                return [ctx.LookupNamed("series")(_fableCore.List.ofArray([new _ast.Type("Primitive", [kf.Type]), new _ast.Type("Primitive", [vf.Type])])), true];
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
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }();
	
	    var meta = new _ast.Metadata("http://thegamma.net", "Pivot", tfs);
	    return new _ast.Member("Property", [name, patternInput[0], _fableCore.List.ofArray([meta]), makeDataEmitter(isPreview, patternInput[1], tfs)]);
	  }
	
	  function handleGetSeriesRequest(ctx, rest, k, v) {
	    var matchValue = [k, v];
	
	    var $target2 = function $target2() {
	      throw "handleGetSeriesRequest: Should not happen";
	    };
	
	    if (matchValue[0] === "!") {
	      if (matchValue[1] === "!") {
	        return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	          return _fableCore.Seq.map(function (field) {
	            return makeProperty(ctx, "with key " + field.Name, _fableCore.List.ofArray([new Transformation("GetSeries", [field.Name, "!"])], rest));
	          }, ctx.Fields);
	        })));
	      } else {
	        return $target2();
	      }
	    } else {
	      if (matchValue[1] === "!") {
	        return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	          return _fableCore.Seq.map(function (field) {
	            return makeDataMember(ctx, "and value " + field.Name, false, _fableCore.List.ofArray([new Transformation("GetSeries", [matchValue[0], field.Name])], rest));
	          }, ctx.Fields);
	        })));
	      } else {
	        return $target2();
	      }
	    }
	  }
	
	  function handlePagingRequest(ctx, rest, pgid, ops) {
	    var takeMemb = makeMethod(ctx, "take", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("Paging", [_fableCore.List.reverse(_fableCore.List.ofArray([new Paging("Take", [pgid + "-take"])], ops))])], rest), pgid + "-take", _fableCore.List.ofArray([["count", new _ast.PrimitiveType("Number", [])]]));
	    var skipMemb = makeMethod(ctx, "skip", _fableCore.List.ofArray([new Transformation("Paging", [_fableCore.List.ofArray([new Paging("Skip", [pgid + "-skip"])], ops)])], rest), pgid + "-skip", _fableCore.List.ofArray([["count", new _ast.PrimitiveType("Number", [])]]));
	    var thenMemb = makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("Paging", [_fableCore.List.reverse(ops)])], rest));
	    return makeObjectType(function () {
	      var $target2 = function $target2() {
	        throw "handlePagingRequest: Shold not happen";
	      };
	
	      if (ops.tail != null) {
	        if (ops.head.Case === "Skip") {
	          if (ops.tail.tail == null) {
	            return _fableCore.List.ofArray([takeMemb, thenMemb]);
	          } else {
	            return $target2();
	          }
	        } else {
	          return $target2();
	        }
	      } else {
	        return _fableCore.List.ofArray([skipMemb, takeMemb]);
	      }
	    }());
	  }
	
	  function handleDropRequest(ctx, rest, dropped) {
	    var droppedFields = _fableCore.Set.create(dropped, new _fableCore.GenericComparer(function (x, y) {
	      return x < y ? -1 : x > y ? 1 : 0;
	    }));
	
	    return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("DropColumns", [dropped])], rest))), _fableCore.Seq.delay(function (unitVar_1) {
	        return _fableCore.Seq.collect(function (field) {
	          return !droppedFields.has(field.Name) ? _fableCore.Seq.singleton(makeProperty(ctx, "drop " + field.Name, _fableCore.List.ofArray([new Transformation("DropColumns", [_fableCore.List.ofArray([field.Name], dropped)])], rest))) : _fableCore.Seq.empty();
	        }, ctx.Fields);
	      }));
	    })));
	  }
	
	  function handleSortRequest(ctx, rest, keys) {
	    var usedKeys = _fableCore.Set.create(_fableCore.List.map(function (tuple) {
	      return tuple[0];
	    }, keys), new _fableCore.GenericComparer(function (x, y) {
	      return x < y ? -1 : x > y ? 1 : 0;
	    }));
	
	    return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("SortBy", [keys])], rest))), _fableCore.Seq.delay(function (unitVar_1) {
	        return _fableCore.Seq.collect(function (field) {
	          return !usedKeys.has(field.Name) ? function () {
	            var doc = _fableCore.String.fsFormat("Use the field '%s' as the next sorting keys")(function (x) {
	              return x;
	            })(field.Name);
	
	            var prefix = keys.Equals(new _fableCore.List()) ? "by " : "and by ";
	            return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name, _fableCore.List.ofArray([new Transformation("SortBy", [_fableCore.List.ofArray([[field.Name, new SortDirection("Ascending", [])]], keys)])], rest))), _fableCore.Seq.delay(function (unitVar_2) {
	              return _fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " descending", _fableCore.List.ofArray([new Transformation("SortBy", [_fableCore.List.ofArray([[field.Name, new SortDirection("Descending", [])]], keys)])], rest)));
	            }));
	          }() : _fableCore.Seq.empty();
	        }, ctx.Fields);
	      }));
	    })));
	  }
	
	  function aggregationMembers(ctx, rest, keys, aggs) {
	    var containsCountAll = _fableCore.Seq.exists(function () {
	      var x = new Aggregation("CountAll", []);
	      return function (y) {
	        return x.Equals(y);
	      };
	    }(), aggs);
	
	    var containsField = function containsField(fld) {
	      return _fableCore.Seq.exists(function (_arg1) {
	        var $target0 = function $target0(f) {
	          return f === fld;
	        };
	
	        var $target1 = function $target1() {
	          return false;
	        };
	
	        if (_arg1.Case === "ReturnUnique") {
	          return $target0(_arg1.Fields[0]);
	        } else {
	          if (_arg1.Case === "ConcatValues") {
	            return $target0(_arg1.Fields[0]);
	          } else {
	            if (_arg1.Case === "Sum") {
	              return $target0(_arg1.Fields[0]);
	            } else {
	              if (_arg1.Case === "Mean") {
	                return $target0(_arg1.Fields[0]);
	              } else {
	                if (_arg1.Case === "CountAll") {
	                  return $target1();
	                } else {
	                  if (_arg1.Case === "GroupKey") {
	                    return $target1();
	                  } else {
	                    return $target0(_arg1.Fields[0]);
	                  }
	                }
	              }
	            }
	          }
	        }
	      }, aggs);
	    };
	
	    var makeAggMember = function makeAggMember(name) {
	      return function (agg) {
	        return makeProperty(ctx, name, _fableCore.List.ofArray([new Transformation("GroupBy", [keys, _fableCore.List.ofArray([agg], aggs)])], rest));
	      };
	    };
	
	    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("GroupBy", [keys, aggs])], rest))), _fableCore.Seq.delay(function (unitVar_1) {
	        return _fableCore.Seq.append(!containsCountAll ? _fableCore.Seq.singleton(makeAggMember("count all")(new Aggregation("CountAll", []))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_2) {
	          return _fableCore.Seq.collect(function (fld) {
	            return !containsField(fld.Name) ? _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("count distinct " + fld.Name)(new Aggregation("CountDistinct", [fld.Name]))), _fableCore.Seq.delay(function (unitVar_3) {
	              return _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("return unique " + fld.Name)(new Aggregation("ReturnUnique", [fld.Name]))), _fableCore.Seq.delay(function (unitVar_4) {
	                return _fableCore.Seq.append(isConcatenable(fld.Type) ? _fableCore.Seq.singleton(makeAggMember("concatenate values of " + fld.Name)(new Aggregation("ConcatValues", [fld.Name]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_5) {
	                  return isNumeric(fld.Type) ? _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("average " + fld.Name)(new Aggregation("Mean", [fld.Name]))), _fableCore.Seq.delay(function (unitVar_6) {
	                    return _fableCore.Seq.singleton(makeAggMember("sum " + fld.Name)(new Aggregation("Sum", [fld.Name])));
	                  })) : _fableCore.Seq.empty();
	                }));
	              }));
	            })) : _fableCore.Seq.empty();
	          }, ctx.Fields);
	        }));
	      }));
	    }));
	  }
	
	  function handleGroupAggRequest(ctx, rest, keys, aggs) {
	    return makeObjectType(aggregationMembers(ctx, rest, keys, aggs));
	  }
	
	  function handleGroupRequest(ctx, rest, keys) {
	    var prefix = keys.tail == null ? "by " : "and ";
	    return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.append(_fableCore.Seq.map(function (field) {
	        return makeProperty(ctx, prefix + field.Name, _fableCore.List.ofArray([new Transformation("GroupBy", [_fableCore.List.ofArray([field.Name], keys), new _fableCore.List()])], rest));
	      }, ctx.Fields), _fableCore.Seq.delay(function (unitVar_1) {
	        return !(keys.tail == null) ? aggregationMembers(ctx, rest, keys, _fableCore.List.ofArray([new Aggregation("GroupKey", [])])) : _fableCore.Seq.empty();
	      }));
	    })));
	  }
	
	  function handleFilterEqNeqRequest(ctx, rest, fld, eq, conds) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        var url = concatUrl(concatUrl(ctx.Root, "range"), Transform.toUrl(_fableCore.List.reverse(_fableCore.List.ofArray([new Transformation("FilterBy", [conds])], rest))));
	        return builder_.Bind(_common.Http.Request("GET", url + "?" + fld), function (_arg2) {
	          var options = JSON.parse(_arg2);
	          return builder_.Return(makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
	            return _fableCore.Seq.map(function (opt) {
	              return makeProperty(ctx, opt, _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[fld, eq, opt]], conds)])], rest));
	            }, options);
	          }))));
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function handleFilterRequest(ctx, rest, conds) {
	    var prefix = conds.tail == null ? "" : "and ";
	    return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.append(_fableCore.Seq.collect(function (field) {
	        return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is", _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[field.Name, true, "!"]], conds)])], rest))), _fableCore.Seq.delay(function (unitVar_1) {
	          return _fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is not", _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[field.Name, false, "!"]], conds)])], rest)));
	        }));
	      }, ctx.Fields), _fableCore.Seq.delay(function (unitVar_1) {
	        return !(conds.tail == null) ? _fableCore.Seq.singleton(makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("FilterBy", [conds])], rest))) : _fableCore.Seq.empty();
	      }));
	    })));
	  }
	
	  function makePivotTypeImmediate(ctx, tfs) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        var patternInput = tfs.tail != null ? [tfs.head, tfs.tail] : [new Transformation("Empty", []), new _fableCore.List()];
	
	        var ctx_1 = function () {
	          var Fields = Transform.transformFields(ctx.InputFields, _fableCore.List.reverse(patternInput[1]));
	          return new Context(ctx.Root, ctx.LookupNamed, ctx.InputFields, Fields);
	        }();
	
	        var $target6 = function $target6(conds) {
	          return builder_.Return(handleFilterRequest(ctx_1, patternInput[1], conds));
	        };
	
	        if (patternInput[0].Case === "GetSeries") {
	          var k = patternInput[0].Fields[0];
	          var v = patternInput[0].Fields[1];
	          return builder_.Return(handleGetSeriesRequest(ctx_1, patternInput[1], k, v));
	        } else {
	          if (patternInput[0].Case === "Paging") {
	            var ops = patternInput[0].Fields[0];
	
	            var pgid = _fableCore.String.fsFormat("pgid-%d")(function (x) {
	              return x;
	            })(_fableCore.Seq.sumBy(function (_arg3) {
	              return _arg3.Case === "Paging" ? 1 : 0;
	            }, patternInput[1]));
	
	            return builder_.Return(handlePagingRequest(ctx_1, patternInput[1], pgid, ops));
	          } else {
	            if (patternInput[0].Case === "SortBy") {
	              var keys = patternInput[0].Fields[0];
	              return builder_.Return(handleSortRequest(ctx_1, patternInput[1], keys));
	            } else {
	              if (patternInput[0].Case === "DropColumns") {
	                var dropped = patternInput[0].Fields[0];
	                return builder_.Return(handleDropRequest(ctx_1, patternInput[1], dropped));
	              } else {
	                if (patternInput[0].Case === "FilterBy") {
	                  if (patternInput[0].Fields[0].tail != null) {
	                    if (patternInput[0].Fields[0].head[2] === "!") {
	                      var conds = patternInput[0].Fields[0].tail;
	                      var eq = patternInput[0].Fields[0].head[1];
	                      var fld = patternInput[0].Fields[0].head[0];
	                      return builder_.ReturnFrom(handleFilterEqNeqRequest(ctx_1, patternInput[1], fld, eq, conds));
	                    } else {
	                      return $target6(patternInput[0].Fields[0]);
	                    }
	                  } else {
	                    return $target6(patternInput[0].Fields[0]);
	                  }
	                } else {
	                  if (patternInput[0].Case === "GroupBy") {
	                    if (patternInput[0].Fields[1].tail == null) {
	                      var flds = patternInput[0].Fields[0];
	                      return builder_.Return(handleGroupRequest(ctx_1, patternInput[1], flds));
	                    } else {
	                      var aggs = patternInput[0].Fields[1];
	                      var _flds = patternInput[0].Fields[0];
	                      return builder_.Return(handleGroupAggRequest(ctx_1, patternInput[1], _flds, aggs));
	                    }
	                  } else {
	                    return builder_.Return(makeObjectType(_fableCore.List.ofArray([makeProperty(ctx_1, "group data", _fableCore.List.ofArray([new Transformation("GroupBy", [new _fableCore.List(), new _fableCore.List()])], patternInput[1])), makeProperty(ctx_1, "filter data", _fableCore.List.ofArray([new Transformation("FilterBy", [new _fableCore.List()])], patternInput[1])), makeProperty(ctx_1, "sort data", _fableCore.List.ofArray([new Transformation("SortBy", [new _fableCore.List()])], patternInput[1])), makeProperty(ctx_1, "drop columns", _fableCore.List.ofArray([new Transformation("DropColumns", [new _fableCore.List()])], patternInput[1])), makeProperty(ctx_1, "paging", _fableCore.List.ofArray([new Transformation("Paging", [new _fableCore.List()])], patternInput[1])), makeProperty(ctx_1, "get series", _fableCore.List.ofArray([new Transformation("GetSeries", ["!", "!"])], patternInput[1])), makeDataMember(ctx_1, "get the data", false, patternInput[1])])));
	                  }
	                }
	              }
	            }
	          }
	        }
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function adjustForPreview(tfs) {
	    var $target2 = function $target2() {
	      return tfs;
	    };
	
	    if (tfs.tail != null) {
	      if (tfs.head.Case === "GroupBy") {
	        if (tfs.head.Fields[0].tail == null) {
	          var tfs_1 = tfs.tail;
	          return tfs_1;
	        } else {
	          if (tfs.head.Fields[1].tail == null) {
	            var k = tfs.head.Fields[0];
	            var _tfs_ = tfs.tail;
	            return _fableCore.List.ofArray([new Transformation("GroupBy", [k, _fableCore.List.ofArray([new Aggregation("GroupKey", [])])])], _tfs_);
	          } else {
	            return $target2();
	          }
	        }
	      } else {
	        return $target2();
	      }
	    } else {
	      return $target2();
	    }
	  }
	
	  function withPreview(ctx, tfs, typ) {
	    return typ.Case === "Object" ? function () {
	      var preview = makeDataMember(ctx, "preview", true, adjustForPreview(tfs));
	      return new _ast.Type("Object", [new _ast.ObjectType([preview].concat(typ.Fields[0].Members))]);
	    }() : function () {
	      throw "withPreview: Expected object type";
	    }();
	  }
	
	  function makePivotType(ctx, tfs) {
	    var guid = Transform.toUrl(tfs);
	
	    var typ = function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        return builder_.Bind(makePivotTypeImmediate(ctx, tfs), function (_arg4) {
	          return builder_.Return(withPreview(ctx, tfs, _arg4));
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	
	    return new _ast.Type("Delayed", ["pivot: " + guid, function (arg00) {
	      return function (arg10) {
	        return (0, _common.Async$2ECreateNamedFuture$2EStatic)(arg00, arg10);
	      };
	    }(guid)(typ)]);
	  }
	
	  function providePivotType(root, name, lookupNamed, fields) {
	    var fields_1 = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.collect(function (matchValue) {
	        return _fableCore.Seq.singleton(new Field(matchValue[0], matchValue[1]));
	      }, fields);
	    }));
	
	    var typ = makePivotType(new Context(root, lookupNamed, fields_1, fields_1), new _fableCore.List());
	    var ctx = op_Dynamic(ident("_runtime"), "PivotContext");
	    return new _providers.ProvidedType("GlobalValue", [name, new _babel.Expression("NewExpression", [ctx, _fableCore.List.ofArray([str(concatUrl(root, "data")), new _babel.Expression("ArrayExpression", [new _fableCore.List(), null])]), null]), typ]);
	  }
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(5), __webpack_require__(1), __webpack_require__(8), __webpack_require__(9), !(function webpackMissingModule() { var e = new Error("Cannot find module \"../../libraries/google/charts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(10), __webpack_require__(12), __webpack_require__(3), __webpack_require__(13), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./../common/babel"), require("../../libraries/common"), require("../../libraries/series"), require("./../codegen/runtime"), require("../../libraries/google/charts"), require("../../libraries/tables"), require("../../libraries/maps"), require("./../ast/ast"), require("./../ast/typeops"), require("./../ast/astops"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.babel, global.common, global.series, global.runtime, global.charts, global.tables, global.maps, global.ast, global.typeops, global.astops);
	    global.interpreter = mod.exports;
	  }
	})(this, function (exports, _fableCore, _babel, _common, _series, _runtime, _charts, _tables, _maps, _ast, _typeops, _astops) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.EvaluationContext = exports.BabelResult = exports.BabelOptions = undefined;
	  exports.$FindProperty$_$ = $FindProperty$_$;
	  exports.$FindMethod$_$ = $FindMethod$_$;
	  exports.storeArguments = storeArguments;
	  exports.evaluateExpression = evaluateExpression;
	  exports.evaluateCall = evaluateCall;
	  exports.evaluatePreview = evaluatePreview;
	  exports.ensureValue = ensureValue;
	  exports.getValue = getValue;
	  exports.evaluateEntity = evaluateEntity;
	  exports.evaluateEntityTree = evaluateEntityTree;
	  exports.globalEntity = globalEntity;
	  exports.evaluate = evaluate;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
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
	
	  var BabelOptions = exports.BabelOptions = function () {
	    function BabelOptions(presets) {
	      _classCallCheck(this, BabelOptions);
	
	      this.presets = presets;
	    }
	
	    _createClass(BabelOptions, [{
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
	
	    return BabelOptions;
	  }();
	
	  _fableCore.Util.setInterfaces(BabelOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Interpreter.BabelOptions");
	
	  var BabelResult = exports.BabelResult = function () {
	    function BabelResult(code) {
	      _classCallCheck(this, BabelResult);
	
	      this.code = code;
	    }
	
	    _createClass(BabelResult, [{
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
	
	    return BabelResult;
	  }();
	
	  _fableCore.Util.setInterfaces(BabelResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Interpreter.BabelResult");
	
	  var EvaluationContext = exports.EvaluationContext = function () {
	    function EvaluationContext(globals) {
	      _classCallCheck(this, EvaluationContext);
	
	      this.Globals = globals;
	    }
	
	    _createClass(EvaluationContext, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return EvaluationContext;
	  }();
	
	  _fableCore.Util.setInterfaces(EvaluationContext.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Interpreter.EvaluationContext");
	
	  function $FindProperty$_$(name, _arg1) {
	    return _fableCore.Seq.tryPick(function (_arg2) {
	      var $target1 = function $target1() {
	        return null;
	      };
	
	      if (_arg2.Case === "Property") {
	        if (_arg2.Fields[0] === name.Name) {
	          var e = _arg2.Fields[3];
	          var n = _arg2.Fields[0];
	          return e;
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }, _arg1.Members);
	  }
	
	  function $FindMethod$_$(name, _arg1) {
	    return _fableCore.Seq.tryPick(function (_arg2) {
	      var $target1 = function $target1() {
	        return null;
	      };
	
	      if (_arg2.Case === "Method") {
	        if (_arg2.Fields[0] === name.Name) {
	          var args = _arg2.Fields[1];
	          var e = _arg2.Fields[4];
	          var n = _arg2.Fields[0];
	          return [args, e];
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }, _arg1.Members);
	  }
	
	  function storeArguments(values) {
	    return [Array.from(values), _fableCore.List.mapIndexed(function (i, _arg1) {
	      return new _babel.Expression("MemberExpression", [new _babel.Expression("IdentifierExpression", ["_stored", null]), new _babel.Expression("NumericLiteral", [i, null]), true, null]);
	    }, values)];
	  }
	
	  function evaluateExpression(_stored, expr) {
	    var prog = new _babel.Program(null, _fableCore.List.ofArray([new _babel.Statement("ExpressionStatement", [expr, null])]));
	    var code = Babel.transformFromAst(_babel.Serializer.serializeProgram(prog), "", new BabelOptions(["es2015"]));
	
	    _common.Log.trace("interpreter", "Interpreter evaluating: %O", code.code);
	
	    try {
	      var s = _series.series.create(function (builder_) {
	        return builder_.Delay(function (unitVar) {
	          return builder_.Return([]);
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
	
	      _stored.length;
	      return eval(code.code);
	    } catch (e) {
	      _common.Log.exn("interpreter", "Evaluation failed: %O", e);
	
	      throw null;
	    }
	  }
	
	  function evaluateCall(emitter, inst, args) {
	    var patternInput = storeArguments(_fableCore.List.ofArray([inst], args));
	    return evaluateExpression(patternInput[0], emitter.Emit([patternInput[1].head, patternInput[1].tail]));
	  }
	
	  function evaluatePreview(typ, value) {
	    var previewName = new _ast.Name("preview");
	
	    var $target1 = function $target1() {
	      return null;
	    };
	
	    if (typ != null) {
	      if (typ.Case === "Object") {
	        var activePatternResult5260 = $FindProperty$_$(previewName, typ.Fields[0]);
	
	        if (activePatternResult5260 != null) {
	          var e = activePatternResult5260;
	          return evaluateCall(e, value, new _fableCore.List());
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    } else {
	      return $target1();
	    }
	  }
	
	  function ensureValue(ctx, e) {
	    if (function () {
	      return e.Value == null;
	    }()) {
	      var matchValue = evaluateEntity(ctx, e);
	
	      if (matchValue != null) {
	        e.Value = new _ast.EntityValue(matchValue, evaluatePreview(e.Type, matchValue));
	      }
	    }
	  }
	
	  function getValue(ctx, e) {
	    if (function () {
	      return e.Value == null;
	    }()) {
	      _common.Log.error("interpreter", "getValue: Value of entity %O has not been evaluated.", e);
	    }
	
	    return e.Value.Value;
	  }
	
	  function evaluateEntity(ctx, e) {
	    var $target7 = function $target7() {
	      return null;
	    };
	
	    if (e.Kind.Case === "Constant") {
	      if (e.Kind.Fields[0].Case === "Number") {
	        var n = e.Kind.Fields[0].Fields[0];
	        return n;
	      } else {
	        if (e.Kind.Fields[0].Case === "String") {
	          var s = e.Kind.Fields[0].Fields[0];
	          return s;
	        } else {
	          if (e.Kind.Fields[0].Case === "Empty") {
	            return null;
	          } else {
	            var b = e.Kind.Fields[0].Fields[0];
	            return b;
	          }
	        }
	      }
	    } else {
	      if (e.Kind.Case === "GlobalValue") {
	        var name = e.Kind.Fields[0];
	        var matchValue = ctx.Globals.has(name.Name) ? [true, ctx.Globals.get(name.Name)] : [false, null];
	
	        var $target1 = function $target1() {
	          return null;
	        };
	
	        if (matchValue[0]) {
	          if (matchValue[1].Value != null) {
	            var value = matchValue[1].Value;
	            return value.Value;
	          } else {
	            return $target1();
	          }
	        } else {
	          return $target1();
	        }
	      } else {
	        if (e.Kind.Case === "ChainElement") {
	          if (e.Kind.Fields[0]) {
	            if (e.Kind.Fields[3] != null) {
	              var inst = e.Kind.Fields[3];
	              var _name = e.Kind.Fields[1];
	              {
	                var _matchValue = (0, _typeops.reduceType)(inst.Type);
	
	                var _$target = function _$target() {
	                  return null;
	                };
	
	                if (_matchValue.Case === "Object") {
	                  var activePatternResult5268 = $FindProperty$_$(_name, _matchValue.Fields[0]);
	
	                  if (activePatternResult5268 != null) {
	                    var e_1 = activePatternResult5268;
	                    return evaluateCall(e_1, getValue(ctx, inst), new _fableCore.List());
	                  } else {
	                    return _$target();
	                  }
	                } else {
	                  return _$target();
	                }
	              }
	            } else {
	              return $target7();
	            }
	          } else {
	            if (e.Kind.Fields[3] != null) {
	              if (e.Kind.Fields[4] != null) {
	                if (e.Kind.Fields[4].Kind.Case === "ArgumentList") {
	                  var args = e.Kind.Fields[4].Kind.Fields[0];
	                  var _inst = e.Kind.Fields[3];
	                  var _name2 = e.Kind.Fields[1];
	                  {
	                    var _ret = function () {
	                      var pb = _fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (_arg1) {
	                        return _arg1.Kind.Case === "NamedParam" ? false : true;
	                      }, args));
	
	                      var nb = _fableCore.Seq.toList(_fableCore.Seq.skipWhile(function (_arg2) {
	                        return _arg2.Kind.Case === "NamedParam" ? false : true;
	                      }, args));
	
	                      var positionBased = Array.from(_fableCore.List.map(function (e_1) {
	                        return getValue(ctx, e_1);
	                      }, pb));
	                      var nameBased = new Map(_fableCore.List.choose(function (_arg3) {
	                        return _arg3.Kind.Case === "NamedParam" ? function () {
	                          var value = _arg3.Kind.Fields[1];
	                          var name_1 = _arg3.Kind.Fields[0];
	                          return [name_1.Name, getValue(ctx, value)];
	                        }() : null;
	                      }, nb));
	                      var matchValue = (0, _typeops.reduceType)(_inst.Type);
	
	                      var $target1 = function $target1() {
	                        return null;
	                      };
	
	                      if (matchValue.Case === "Object") {
	                        var activePatternResult5275 = $FindMethod$_$(_name2, matchValue.Fields[0]);
	
	                        if (activePatternResult5275 != null) {
	                          var _e_ = activePatternResult5275[1];
	                          var pars = activePatternResult5275[0];
	                          {
	                            var args_1 = _fableCore.List.mapIndexed(function (i, tupledArg) {
	                              return i < positionBased.length ? positionBased[i] : nameBased.has(tupledArg[0]) ? nameBased.get(tupledArg[0]) : null;
	                            }, pars);
	
	                            return {
	                              v: evaluateCall(_e_, getValue(ctx, _inst), args_1)
	                            };
	                          }
	                        } else {
	                          return {
	                            v: $target1()
	                          };
	                        }
	                      } else {
	                        return {
	                          v: $target1()
	                        };
	                      }
	                    }();
	
	                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                  }
	                } else {
	                  return $target7();
	                }
	              } else {
	                return $target7();
	              }
	            } else {
	              return $target7();
	            }
	          }
	        } else {
	          return $target7();
	        }
	      }
	    }
	  }
	
	  function evaluateEntityTree(ctx, e) {
	    var visited = new Map();
	
	    var loop = function loop(e_1) {
	      if (!visited.has(e_1.Symbol) ? function () {
	        return e_1.Value == null;
	      }() : false) {
	        visited.set(e_1.Symbol, true);
	        {
	          var inputSequence = _astops.Entity$2Eget_Antecedents.bind(e_1)();
	
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = inputSequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var e_2 = _step.value;
	              loop(e_2);
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
	        ensureValue(ctx, e_1);
	      }
	    };
	
	    loop(e);
	    return e.Value;
	  }
	
	  function globalEntity(name, typ, expr) {
	    var value = expr != null ? function () {
	      var value = evaluateExpression([], expr);
	      return new _ast.EntityValue(value, evaluatePreview(typ, value));
	    }() : null;
	
	    _common.Log.trace("interpreter", "Initializing global value '%s' = %O", name, value);
	
	    var Kind = new _ast.EntityKind("GlobalValue", [new _ast.Name(name)]);
	
	    var _Symbol = Symbol();
	
	    var Type = typ;
	    var Meta = new _fableCore.List();
	    return new _ast.Entity(Kind, _Symbol, value, Meta, Type, new _fableCore.List());
	  }
	
	  function evaluate(globals, e) {
	    _common.Log.trace("interpreter", "Evaluating entity %s (%O)", _astops.Entity$2Eget_Name.bind(e)(), e.Kind);
	
	    var ctx = new EvaluationContext(new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	      return _fableCore.Seq.map(function (e_1) {
	        return [_astops.Entity$2Eget_Name.bind(e_1)(), e_1];
	      }, globals);
	    }))));
	    var res = evaluateEntityTree(ctx, e);
	
	    _common.Log.trace("interpreter", "Evaluated entity %s (%O) = %O", _astops.Entity$2Eget_Name.bind(e)(), e.Kind, res);
	
	    return res;
	  }
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./common"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.common);
	    global.series = mod.exports;
	  }
	})(this, function (exports, _fableCore, _common) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.series = exports.helpers = exports.SeriesInternals = undefined;
	
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
	
	  var SeriesInternals = exports.SeriesInternals = function ($exports) {
	    var slice = $exports.slice = function slice(lo, hi, arr) {
	      return Array.from(_fableCore.Seq.initialize(hi - lo + 1, function (i) {
	        return arr[lo + i];
	      }));
	    };
	
	    var dictAny = $exports.dictAny = function dictAny(v) {
	      return new Map(v);
	    };
	
	    var zipUnsorted = $exports.zipUnsorted = function zipUnsorted(arr1, arr2) {
	      var d1 = dictAny(arr1);
	      var d2 = dictAny(arr2);
	      var res = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = d1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var kv1 = _step.value;
	          var v2 = d2.has(kv1[0]) ? d2.get(kv1[0]) : null;
	          res.push([kv1[0], [kv1[1], v2]]);
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
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = d2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var kv2 = _step2.value;
	
	          if (!d1.has(kv2[0])) {
	            res.push([kv2[0], [null, kv2[1]]]);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return Array.from(res);
	    };
	
	    var isSortedUsing = $exports.isSortedUsing = function isSortedUsing(test, proj, arr) {
	      var loop = function loop(i) {
	        return i === arr.length ? true : test(proj(arr[i - 1]))(proj(arr[i])) ? loop(i + 1) : false;
	      };
	
	      if (arr.length === 0) {
	        return true;
	      } else {
	        return loop(1);
	      }
	    };
	
	    var zipSorted = $exports.zipSorted = function zipSorted(arr1, arr2) {
	      var i1 = 0;
	      var i2 = 0;
	
	      var op_LessDot = function op_LessDot(a) {
	        return function (b) {
	          return (a < b ? -1 : a == b ? 0 : 1) < 0;
	        };
	      };
	
	      var eq = function eq(a) {
	        return function (b) {
	          return (a < b ? -1 : a == b ? 0 : 1) === 0;
	        };
	      };
	
	      var res = [];
	
	      while (i1 < arr1.length ? i2 < arr2.length : false) {
	        var patternInput = [arr1[i1], arr2[i2]];
	        var v2 = patternInput[1][1];
	        var v1 = patternInput[0][1];
	        var k2 = patternInput[1][0];
	        var k1 = patternInput[0][0];
	
	        if (eq(k1)(k2)) {
	          res.push([k1, [v1, v2]]);
	          i1 = i1 + 1;
	          i2 = i2 + 1;
	        } else {
	          if (op_LessDot(k1)(k2)) {
	            res.push([k1, [v1, null]]);
	            i1 = i1 + 1;
	          } else {
	            if (op_LessDot(k2)(k1)) {
	              res.push([k2, [null, v2]]);
	              i2 = i2 + 1;
	            }
	          }
	        }
	      }
	
	      while (i1 < arr1.length) {
	        var _patternInput = arr1[i1];
	        res.push([_patternInput[0], [_patternInput[1], null]]);
	        i1 = i1 + 1;
	      }
	
	      while (i2 < arr2.length) {
	        var _patternInput2 = arr2[i2];
	        res.push([_patternInput2[0], [null, _patternInput2[1]]]);
	        i2 = i2 + 2;
	      }
	
	      return Array.from(res);
	    };
	
	    var zipAny = $exports.zipAny = function zipAny(arr1, arr2) {
	      var op_LessEqualsDot = function op_LessEqualsDot(a) {
	        return function (b) {
	          return (a < b ? -1 : a == b ? 0 : 1) <= 0;
	        };
	      };
	
	      var op_GreaterEqualsDot = function op_GreaterEqualsDot(a) {
	        return function (b) {
	          return (a < b ? -1 : a == b ? 0 : 1) >= 0;
	        };
	      };
	
	      if (isSortedUsing(op_LessEqualsDot, function (tuple) {
	        return tuple[0];
	      }, arr1) ? isSortedUsing(op_LessEqualsDot, function (tuple) {
	        return tuple[0];
	      }, arr2) : false) {
	        return zipSorted(arr1, arr2);
	      } else {
	        if (isSortedUsing(op_GreaterEqualsDot, function (tuple) {
	          return tuple[0];
	        }, arr1) ? isSortedUsing(op_GreaterEqualsDot, function (tuple) {
	          return tuple[0];
	        }, arr2) : false) {
	          return zipSorted(arr1.reverse(), arr2.reverse()).reverse();
	        } else {
	          return zipUnsorted(arr1, arr2);
	        }
	      }
	    };
	
	    return $exports;
	  }({});
	
	  var helpers = exports.helpers = function helpers() {
	    _classCallCheck(this, helpers);
	  };
	
	  _fableCore.Util.setInterfaces(helpers.prototype, [], "TheGamma.Series.helpers");
	
	  var series = function () {
	    function series(data, keyName, valueName, seriesName) {
	      _classCallCheck(this, series);
	
	      this.data = data;
	      this.keyName = keyName;
	      this.valueName = valueName;
	      this.seriesName = seriesName;
	    }
	
	    _createClass(series, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }, {
	      key: "set",
	      value: function set(data, keyName, valueName, seriesName) {
	        return new series(data, keyName != null ? keyName : this.keyName, valueName != null ? valueName : this.valueName, seriesName != null ? seriesName : this.seriesName);
	      }
	    }, {
	      key: "setProperties",
	      value: function setProperties(keyName, valueName, seriesName) {
	        var keyName_1 = keyName != null ? keyName : this.keyName;
	        var valueName_1 = valueName != null ? valueName : this.valueName;
	        var seriesName_1 = seriesName != null ? seriesName : this.seriesName;
	        return new series(this.data, keyName_1, valueName_1, seriesName_1);
	      }
	    }, {
	      key: "sortKeys",
	      value: function sortKeys(reverse) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return (_fableCore.Util.equals(reverse, true) ? function (array) {
	            return array.reverse();
	          } : function (x) {
	            return x;
	          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
	            return tupledArg[0] < tupledArg_1[0] ? -1 : tupledArg[0] == tupledArg_1[0] ? 0 : 1;
	          }, arr)));
	        })(this);
	      }
	    }, {
	      key: "sortValues",
	      value: function sortValues(reverse) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return (_fableCore.Util.equals(reverse, true) ? function (array) {
	            return array.reverse();
	          } : function (x) {
	            return x;
	          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
	            return tupledArg[1] < tupledArg_1[1] ? -1 : tupledArg[1] == tupledArg_1[1] ? 0 : 1;
	          }, arr)));
	        })(this);
	      }
	    }, {
	      key: "sortBy",
	      value: function sortBy(f, reverse) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return (_fableCore.Util.equals(reverse, true) ? function (array) {
	            return array.reverse();
	          } : function (x) {
	            return x;
	          })(Array.from(_fableCore.Seq.sortWith(function (tupledArg, tupledArg_1) {
	            return f(tupledArg[1]) < f(tupledArg_1[1]) ? -1 : f(tupledArg[1]) == f(tupledArg_1[1]) ? 0 : 1;
	          }, arr)));
	        })(this);
	      }
	    }, {
	      key: "reverse",
	      value: function reverse() {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (array) {
	          return array.reverse();
	        })(this);
	      }
	    }, {
	      key: "take",
	      value: function take(count) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return SeriesInternals.slice(0, (arr.length < count ? arr.length : count) - 1, arr);
	        })(this);
	      }
	    }, {
	      key: "skip",
	      value: function skip(count) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return SeriesInternals.slice(arr.length < count ? arr.length : count, arr.length - 1, arr);
	        })(this);
	      }
	    }, {
	      key: "map",
	      value: function map(f) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function () {
	          var mapping = function mapping(tupledArg) {
	            return [tupledArg[0], f(tupledArg[1])];
	          };
	
	          return function (array) {
	            return array.map(mapping);
	          };
	        }())(this);
	      }
	    }, {
	      key: "mapKeys",
	      value: function mapKeys(f) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function () {
	          var mapping = function mapping(tupledArg) {
	            return [f(tupledArg[0]), tupledArg[1]];
	          };
	
	          return function (array) {
	            return array.map(mapping);
	          };
	        }())(this);
	      }
	    }, {
	      key: "mapPairs",
	      value: function mapPairs(f) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function () {
	          var mapping = function mapping(tupledArg) {
	            return [tupledArg[0], f(tupledArg[0])(tupledArg[1])];
	          };
	
	          return function (array) {
	            return array.map(mapping);
	          };
	        }())(this);
	      }
	    }, {
	      key: "filter",
	      value: function filter(f) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function () {
	          var predicate = function predicate($var6) {
	            return f(function (tuple) {
	              return tuple[1];
	            }($var6));
	          };
	
	          return function (array) {
	            return array.filter(predicate);
	          };
	        }())(this);
	      }
	    }, {
	      key: "choose",
	      value: function choose(f) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function () {
	          var chooser = function chooser(tupledArg) {
	            var matchValue = f(tupledArg[1]);
	
	            if (matchValue != null) {
	              return [tupledArg[0], matchValue];
	            }
	          };
	
	          return function (array) {
	            return Array.from(_fableCore.Seq.choose(chooser, array));
	          };
	        }())(this);
	      }
	    }, {
	      key: "joinOuter",
	      value: function joinOuter(s2) {
	        var _this = this;
	
	        var data = function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this.data), function (_arg4) {
	              return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(s2.data), function (_arg5) {
	                return builder_.Return(SeriesInternals.zipAny(_arg4, _arg5));
	              });
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	
	        return series.create(data, this.keyName, "Values", this.seriesName + " and " + s2.seriesName);
	      }
	    }, {
	      key: "joinInner",
	      value: function joinInner(s2) {
	        return this.joinOuter(s2).choose(function (_arg6) {
	          var $target1 = function $target1() {
	            return null;
	          };
	
	          if (_arg6[0] != null) {
	            if (_arg6[1] != null) {
	              var v1 = _arg6[0];
	              var v2 = _arg6[1];
	              return [v1, v2];
	            } else {
	              return $target1();
	            }
	          } else {
	            return $target1();
	          }
	        });
	      }
	    }, {
	      key: "appendScalar",
	      value: function appendScalar(key, value) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg1) {
	                  return builder_.Return(arg00(_arg1));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return arr.concat([[key, value]]);
	        })(this);
	      }
	    }, {
	      key: "append",
	      value: function append(s2) {
	        var _this2 = this;
	
	        return this.set((0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this2.data), function (_arg7) {
	              return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(s2.data), function (_arg8) {
	                return builder_.Return(_arg7.concat(_arg8));
	              });
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton)));
	      }
	    }, {
	      key: "realign",
	      value: function realign(newKeys, defaultValue) {
	        return function (arg00) {
	          return function (arg10) {
	            var nd = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	              return builder_.Delay(function (unitVar) {
	                return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(arg10.data), function (_arg2) {
	                  return builder_.ReturnFrom(arg00(_arg2));
	                });
	              });
	            }(_fableCore.AsyncBuilder.singleton));
	            return new series(nd, arg10.keyName, arg10.valueName, arg10.seriesName);
	          };
	        }(function (arr) {
	          return function (builder_) {
	            return builder_.Delay(function (unitVar) {
	              return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(newKeys.data), function (_arg9) {
	                var newKeys_1 = _arg9.map(function (tupledArg) {
	                  return tupledArg[1];
	                });
	
	                var lookup = _fableCore.Map.create(arr, new _fableCore.GenericComparer(function (x, y) {
	                  return x < y ? -1 : x > y ? 1 : 0;
	                }));
	
	                return builder_.Return(newKeys_1.map(function (k) {
	                  var matchValue = _fableCore.Map.tryFind(k, lookup);
	
	                  if (matchValue == null) {
	                    return [k, defaultValue];
	                  } else {
	                    return [k, matchValue];
	                  }
	                }));
	              });
	            });
	          }(_fableCore.AsyncBuilder.singleton);
	        })(this);
	      }
	    }], [{
	      key: "create",
	      value: function create(data, keyName, valueName, seriesName) {
	        return new series((0, _common.Async$2EStartAsFuture$2EStatic)(data), keyName, valueName, seriesName);
	      }
	    }, {
	      key: "values",
	      value: function values(_values) {
	        var data = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Return(Array.from(_fableCore.Seq.mapIndexed(function (i, v) {
	              return [i, v];
	            }, _values)));
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	        return new series(data, "key", "value", "");
	      }
	    }, {
	      key: "range",
	      value: function range(from, to) {
	        return series.values(Int32Array.from(_fableCore.Seq.range(from, to)));
	      }
	    }, {
	      key: "rangeBy",
	      value: function rangeBy(from, to, step) {
	        return series.values(Int32Array.from(_fableCore.Seq.rangeStep(from, step, to)));
	      }
	    }, {
	      key: "ordinal",
	      value: function ordinal(data, keyName, valueName, seriesName) {
	        var data_1 = (0, _common.Async$2EStartAsFuture$2EStatic)(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind(data, function (_arg3) {
	              return builder_.Return(Array.from(_fableCore.Seq.mapIndexed(function (i, v) {
	                return [i, v];
	              }, _arg3)));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	        return new series(data_1, keyName, valueName, seriesName);
	      }
	    }]);
	
	    return series;
	  }();
	
	  exports.series = series;
	
	  _fableCore.Util.setInterfaces(series.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Series.series");
	});
	//# sourceMappingURL=series.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("../../libraries/common"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.common);
	    global.runtime = mod.exports;
	  }
	})(this, function (exports, _fableCore, _common) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.PivotContext = exports.RuntimeContext = undefined;
	  exports.convertTupleSequence = convertTupleSequence;
	  exports.convertSequence = convertSequence;
	  exports.trimLeft = trimLeft;
	  exports.trimRight = trimRight;
	  exports.concatUrl = concatUrl;
	
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
	
	  function convertTupleSequence(f, g, data) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        return builder_.Bind(data, function (_arg1) {
	          return builder_.Return(_arg1.map(function (tupledArg) {
	            return [f(tupledArg[0]), g(tupledArg[1])];
	          }));
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function convertSequence(f, data) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        return builder_.Bind(data, function (_arg1) {
	          return builder_.Return(function (array) {
	            return Array.from(_fableCore.Seq.map(f, array));
	          }(_arg1));
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function trimLeft(c, s) {
	    return Array.from(_fableCore.Seq.skipWhile(function (y) {
	      return c === y;
	    }, s.split(""))).join('');
	  }
	
	  function trimRight(c, s) {
	    return Array.from(_fableCore.Seq.skipWhile(function (y) {
	      return c === y;
	    }, s.split("").reverse())).reverse().join('');
	  }
	
	  function concatUrl(a, b) {
	    return trimRight("/", a) + "/" + trimLeft("/", b);
	  }
	
	  var RuntimeContext = exports.RuntimeContext = function () {
	    function RuntimeContext(root, cookies, trace) {
	      _classCallCheck(this, RuntimeContext);
	
	      this["root@19"] = root;
	      this.cookies = cookies;
	      this["trace@19"] = trace;
	    }
	
	    _createClass(RuntimeContext, [{
	      key: "addTrace",
	      value: function addTrace(suffix) {
	        var _this = this;
	
	        var traces = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	          return _fableCore.Seq.append(!_fableCore.String.isNullOrEmpty(_this["trace@19"]) ? _fableCore.Seq.singleton(_this["trace@19"]) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
	            return !_fableCore.String.isNullOrEmpty(suffix) ? _fableCore.Seq.singleton(suffix) : _fableCore.Seq.empty();
	          }));
	        }));
	
	        return new RuntimeContext(this["root@19"], this.cookies, _fableCore.String.join("&", traces));
	      }
	    }, {
	      key: "getValue",
	      value: function getValue(endpoint) {
	        var _this2 = this;
	
	        return function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind(_common.Http.Request("POST", concatUrl(_this2["root@19"], endpoint), _this2["trace@19"], _this2.cookies), function (_arg1) {
	              return builder_.Return(JSON.parse(_arg1));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	      }
	    }, {
	      key: "root",
	      get: function get() {
	        return this["root@19"];
	      }
	    }, {
	      key: "trace",
	      get: function get() {
	        return this["trace@19"];
	      }
	    }]);
	
	    return RuntimeContext;
	  }();
	
	  _fableCore.Util.setInterfaces(RuntimeContext.prototype, [], "TheGamma.TypePovidersRuntime.RuntimeContext");
	
	  var PivotContext = exports.PivotContext = function () {
	    function PivotContext(root, calls) {
	      _classCallCheck(this, PivotContext);
	
	      this.root = root;
	      this.calls = calls;
	    }
	
	    _createClass(PivotContext, [{
	      key: "addCall",
	      value: function addCall(callid, values) {
	        return new PivotContext(this.root, [[callid, values]].concat(this.calls));
	      }
	    }, {
	      key: "getData",
	      value: function getData(tfs, isPreview) {
	        var _this3 = this;
	
	        return function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            var url = function () {
	              var folder = function folder(tfs_1) {
	                return function (tupledArg) {
	                  if (tupledArg[1].length !== 1) {
	                    throw "PivotContext.getData: Expected one argument";
	                  }
	
	                  return _fableCore.String.replace(tfs_1, tupledArg[0], _fableCore.Util.toString(tupledArg[1][0]));
	                };
	              };
	
	              return function (array) {
	                return _fableCore.Seq.fold(function ($var8, $var9) {
	                  return folder($var8)($var9);
	                }, tfs, array);
	              };
	            }()(_this3.calls);
	
	            _common.Log.trace("runtime", "Pivot: %s", concatUrl(_this3.root, url));
	
	            var url_1 = isPreview ? concatUrl(_this3.root, url) + "?preview" : concatUrl(_this3.root, url);
	            return builder_.Bind(_common.Http.Request("GET", url_1), function (_arg1) {
	              return builder_.Return(JSON.parse(_arg1));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	      }
	    }]);

	    return PivotContext;
	  }();

	  _fableCore.Util.setInterfaces(PivotContext.prototype, [], "TheGamma.TypePovidersRuntime.PivotContext");
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(11), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("../gui/html"), require("fable-core"), require("./common"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.html, global.fableCore, global.common);
	    global.tables = mod.exports;
	  }
	})(this, function (exports, _html, _fableCore, _common) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.empty = exports.table = exports.html = exports.TableHelpers = undefined;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
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
	
	  var TableHelpers = exports.TableHelpers = function ($exports) {
	    return $exports;
	  }({});
	
	  var html = exports.html = function () {
	    function html() {
	      _classCallCheck(this, html);
	    }
	
	    _createClass(html, null, [{
	      key: "img",
	      value: function img(url) {
	        return function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("img")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("src", url)]))(new _fableCore.List());
	      }
	    }]);
	
	    return html;
	  }();
	
	  _fableCore.Util.setInterfaces(html.prototype, [], "TheGamma.html");
	
	  var table = exports.table = function () {
	    function table(data, showKey, hiddenColumns, addedColumns) {
	      _classCallCheck(this, table);
	
	      this.data = data;
	      this.showKey = showKey;
	      this.hiddenColumns = hiddenColumns;
	      this.addedColumns = addedColumns;
	    }
	
	    _createClass(table, [{
	      key: "set",
	      value: function set(title, showKey) {
	        var data = this.data.set(this.data.data, null, null, title != null ? title : this.data.seriesName);
	        return new table(data, showKey != null ? showKey : this.showKey, this.hiddenColumns, this.addedColumns);
	      }
	    }, {
	      key: "hideColumns",
	      value: function hideColumns(names) {
	        var hiddenColumns = _fableCore.Set.create(names, new _fableCore.GenericComparer(function (x, y) {
	          return x < y ? -1 : x > y ? 1 : 0;
	        }));
	
	        return new table(this.data, this.showKey, hiddenColumns, this.addedColumns);
	      }
	    }, {
	      key: "addColumn",
	      value: function addColumn(name, f) {
	        var addedColumns = _fableCore.List.ofArray([[name, f]], this.addedColumns);
	
	        return new table(this.data, this.showKey, this.hiddenColumns, addedColumns);
	      }
	    }, {
	      key: "show",
	      value: function show(outputId) {
	        var _this = this;
	
	        var row = function row(el) {
	          return function (k) {
	            return function (things) {
	              return function (arg0) {
	                return function (arg1) {
	                  return _html.El.op_Dynamic(arg0, arg1);
	                };
	              }(_html.h)("tr")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	                return _fableCore.Seq.append(_this.showKey ? _fableCore.Seq.singleton(function (arg0) {
	                  return function (arg1) {
	                    return _html.El.op_Dynamic(arg0, arg1);
	                  };
	                }(_html.h)(el)(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(k)]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
	                  return _fableCore.Seq.map(function (t) {
	                    return function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)(el)(new _fableCore.List())(_fableCore.List.ofArray([t]));
	                  }, things);
	                }));
	              })));
	            };
	          };
	        };
	
	        var render = function render(nd) {
	          (0, _html.renderTo)(document.getElementById(outputId), nd);
	        };
	
	        var makeTable = function makeTable(k) {
	          return function (header) {
	            return function (body) {
	              return function (arg0) {
	                return function (arg1) {
	                  return _html.El.op_Dynamic(arg0, arg1);
	                };
	              }(_html.h)("table")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "table table-striped")]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	                return _fableCore.Seq.append(!_fableCore.String.isNullOrWhiteSpace(_this.data.seriesName) ? _fableCore.Seq.singleton(function (arg0) {
	                  return function (arg1) {
	                    return _html.El.op_Dynamic(arg0, arg1);
	                  };
	                }(_html.h)("caption")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_this.data.seriesName)]))) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
	                  return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
	                    return function (arg1) {
	                      return _html.El.op_Dynamic(arg0, arg1);
	                    };
	                  }(_html.h)("thead")(new _fableCore.List())(_fableCore.List.ofArray([row("th")(k)(header)]))), _fableCore.Seq.delay(function (unitVar_2) {
	                    return _fableCore.Seq.singleton(function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("tbody")(new _fableCore.List())(body));
	                  }));
	                }));
	              })));
	            };
	          };
	        };
	
	        var formatAdded = function formatAdded(o) {
	          var isSeries = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	            return _fableCore.Seq.map(function (kv) {
	              return kv.key;
	            }, function (o) {
	              return Object.keys(o).map(function (k) {
	                return {
	                  "key": k,
	                  "value": o[k]
	                };
	              });
	            }(o));
	          })).Equals(_fableCore.List.ofArray(["data", "keyName", "valueName", "seriesName"]));
	
	          if (isSeries) {
	            var result = null;
	            o.data.Then(function (r) {
	              result = r;
	            });
	            return function (arg0) {
	              return function (arg1) {
	                return _html.El.op_Dynamic(arg0, arg1);
	              };
	            }(_html.h)("span")(new _fableCore.List())(_fableCore.List.ofArray(result.map(function (tuple) {
	              return tuple[1];
	            })));
	          } else {
	            return (0, _html.text)(_fableCore.Util.toString(o));
	          }
	        };
	
	        (function (arg00) {
	          _fableCore.Async.startImmediate(arg00);
	        })(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.TryWith(builder_.Delay(function (unitVar_1) {
	              return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this.data.data), function (_arg25) {
	                var filteredProperties = function filteredProperties(o) {
	                  return function (o) {
	                    return Object.keys(o).map(function (k) {
	                      return {
	                        "key": k,
	                        "value": o[k]
	                      };
	                    });
	                  }(o).filter(function (kv) {
	                    return !_this.hiddenColumns.has(kv.key);
	                  });
	                };
	
	                var patternInput = _fableCore.Seq.head(_arg25);
	
	                var headers = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	                  return _fableCore.Seq.append(_typeof(patternInput[1]) == 'object' ? _fableCore.Seq.map(function (kv) {
	                    return (0, _html.text)(kv.key);
	                  }, filteredProperties(patternInput[1])) : _fableCore.Seq.singleton((0, _html.text)(_this.data.valueName)), _fableCore.Seq.delay(function (unitVar_3) {
	                    return _fableCore.Seq.collect(function (matchValue) {
	                      return _fableCore.Seq.singleton((0, _html.text)(matchValue[0]));
	                    }, _this.addedColumns);
	                  }));
	                }));
	
	                render(function (arg00) {
	                  var clo1 = makeTable(arg00);
	                  return function (arg10) {
	                    var clo2 = clo1(arg10);
	                    return function (arg20) {
	                      return clo2(arg20);
	                    };
	                  };
	                }(_this.data.keyName)(headers)(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	                  return _fableCore.Seq.collect(function (matchValue) {
	                    return _fableCore.Seq.singleton(function () {
	                      var formattedVals = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_3) {
	                        return _fableCore.Seq.append(_typeof(matchValue[1]) == 'object' ? _fableCore.Seq.map(function (kv) {
	                          return (0, _html.text)(kv.value);
	                        }, filteredProperties(matchValue[1])) : !(typeof matchValue[1] == 'number') ? _fableCore.Seq.singleton((0, _html.text)(_fableCore.Util.toString(matchValue[1]))) : isNaN(matchValue[1]) ? _fableCore.Seq.singleton((0, _html.text)("")) : _fableCore.Seq.singleton(matchValue[1]), _fableCore.Seq.delay(function (unitVar_4) {
	                          return _fableCore.Seq.collect(function (matchValue_1) {
	                            return _fableCore.Seq.singleton(formatAdded(matchValue_1[1](matchValue[1])));
	                          }, _this.addedColumns);
	                        }));
	                      }));
	
	                      return function (arg00) {
	                        var clo1 = row(arg00);
	                        return function (arg10) {
	                          var clo2 = clo1(arg10);
	                          return function (arg20) {
	                            return clo2(arg20);
	                          };
	                        };
	                      }("td")(matchValue[0])(formattedVals);
	                    }());
	                  }, _arg25);
	                }))));
	                return builder_.Zero();
	              });
	            }), function (_arg26) {
	              console.log("Getting data for table failed: %O", _arg26);
	              return builder_.Zero();
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	      }
	    }], [{
	      key: "create",
	      value: function create(data) {
	        var hiddenColumns = _fableCore.Set.create(null, new _fableCore.GenericComparer(function (x, y) {
	          return x < y ? -1 : x > y ? 1 : 0;
	        }));
	
	        var addedColumns = new _fableCore.List();
	        return new table(data, true, hiddenColumns, addedColumns);
	      }
	    }]);
	
	    return table;
	  }();
	
	  _fableCore.Util.setInterfaces(table.prototype, ["FSharpRecord"], "TheGamma.table");
	
	  var empty = exports.empty = function () {
	    function empty() {
	      _classCallCheck(this, empty);
	    }
	
	    _createClass(empty, [{
	      key: "show",
	      value: function show(outputId) {
	        (0, _html.renderTo)(document.getElementById(outputId), function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "loading")]))(_fableCore.List.ofArray([function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("p")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)("No output produced.")]))])));
	      }
	    }], [{
	      key: "create",
	      value: function create() {
	        return new empty();
	      }
	    }]);
	
	    return empty;
	  }();
	
	  _fableCore.Util.setInterfaces(empty.prototype, [], "TheGamma.empty");
	});
	//# sourceMappingURL=tables.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore);
	    global.html = mod.exports;
	  }
	})(this, function (exports, _fableCore) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.h = exports.El = exports.counter = exports.DomNode = exports.DomAttribute = undefined;
	  exports.render = render;
	  exports.renderTo = renderTo;
	  exports.text = text;
	  exports.op_EqualsGreater = op_EqualsGreater;
	  exports.op_EqualsBangGreater = op_EqualsBangGreater;
	
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
	
	  var DomAttribute = exports.DomAttribute = function DomAttribute(caseName, fields) {
	    _classCallCheck(this, DomAttribute);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(DomAttribute.prototype, ["FSharpUnion"], "TheGamma.Html.DomAttribute");
	
	  var DomNode = exports.DomNode = function DomNode(caseName, fields) {
	    _classCallCheck(this, DomNode);
	
	    this.Case = caseName;
	    this.Fields = fields;
	  };
	
	  _fableCore.Util.setInterfaces(DomNode.prototype, ["FSharpUnion"], "TheGamma.Html.DomNode");
	
	  var counter = exports.counter = 0;
	
	  function render(node) {
	    return node.Case === "Delayed" ? function () {
	      exports.counter = counter = counter + 1;
	      var el = document.createElement("div");
	      el.id = _fableCore.String.fsFormat("delayed_%d")(function (x) {
	        return x;
	      })(counter);
	      return [el, function (unitVar0) {
	        node.Fields[0](el.id);
	      }];
	    }() : node.Case === "Part" ? function () {
	      var el = document.createElement("div");
	      return [el, function (unitVar0) {
	        node.Fields[0](el);
	      }];
	    }() : node.Case === "Element" ? function () {
	      var el = document.createElement(node.Fields[0]);
	      var rc = node.Fields[2].map(function (node_1) {
	        return render(node_1);
	      });
	
	      for (var idx = 0; idx <= rc.length - 1; idx++) {
	        var forLoopVar = rc[idx];
	        el.appendChild(forLoopVar[0]);
	      }
	
	      var _loop = function _loop(_idx) {
	        var forLoopVar = node.Fields[1][_idx];
	
	        if (forLoopVar[1].Case === "Event") {
	          el.addEventListener(forLoopVar[0], function (delegateArg0) {
	            forLoopVar[1].Fields[0](el)(delegateArg0);
	          });
	        } else {
	          el.setAttribute(forLoopVar[0], forLoopVar[1].Fields[0]);
	        }
	      };
	
	      for (var _idx = 0; _idx <= node.Fields[1].length - 1; _idx++) {
	        _loop(_idx);
	      }
	
	      var onRender = function onRender(unitVar0) {
	        for (var _idx2 = 0; _idx2 <= rc.length - 1; _idx2++) {
	          var _forLoopVar = rc[_idx2];
	
	          _forLoopVar[1]();
	        }
	
	        _fableCore.Seq.iterate(function (f) {
	          f(el);
	        }, function () {
	          var $var1 = node.Fields[3];
	
	          if ($var1 != null) {
	            return [$var1];
	          } else {
	            return [];
	          }
	        }());
	      };
	
	      return [el, onRender];
	    }() : [document.createTextNode(node.Fields[0]), function (value) {
	      value;
	    }];
	  }
	
	  function renderTo(node, dom) {
	    while (node.lastChild != null) {
	      node.removeChild(node.lastChild);
	    }
	
	    var patternInput = render(dom);
	    node.appendChild(patternInput[0]);
	    patternInput[1]();
	  }
	
	  function text(s) {
	    return new DomNode("Text", [s]);
	  }
	
	  function op_EqualsGreater(k, v) {
	    return [k, new DomAttribute("Property", [v])];
	  }
	
	  function op_EqualsBangGreater(k, f) {
	    return [k, new DomAttribute("Event", [f])];
	  }
	
	  var El = exports.El = function () {
	    function El() {
	      _classCallCheck(this, El);
	    }
	
	    _createClass(El, [{
	      key: "delayed",
	      value: function delayed(f) {
	        return new DomNode("Delayed", [f]);
	      }
	    }, {
	      key: "part",
	      value: function part(initial, fold) {
	        var evt = new _fableCore.Event();
	        var state = initial;
	        var container = null;
	        var renderer = null;
	
	        var render_1 = function render_1(unitVar0) {
	          var matchValue = [container, renderer];
	
	          var $target1 = function $target1() {};
	
	          if (matchValue[0] != null) {
	            if (matchValue[1] != null) {
	              (function () {
	                var el = matchValue[0];
	                var r = matchValue[1];
	
	                (function (dom) {
	                  renderTo(el, dom);
	                })(r(state));
	              })();
	            } else {
	              $target1();
	            }
	          } else {
	            $target1();
	          }
	        };
	
	        _fableCore.Observable.add(function (e) {
	          state = fold(state)(e);
	          render_1();
	        }, evt.Publish);
	
	        return [function (arg00) {
	          evt.Trigger(arg00);
	        }, function (r) {
	          renderer = r;
	          return new DomNode("Part", [function (el) {
	            container = el;
	            render_1();
	          }]);
	        }];
	      }
	    }], [{
	      key: "op_Dynamic",
	      value: function op_Dynamic(_arg1, n) {
	        return function (a) {
	          return function (b) {
	            var f = n !== "select" ? null : function (el) {
	              jQuery(el).chosen();
	              var _iteratorNormalCompletion = true;
	              var _didIteratorError = false;
	              var _iteratorError = undefined;
	
	              try {
	                for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                  var forLoopVar = _step.value;
	
	                  if (forLoopVar[1].Case === "Event") {
	                    jQuery(el).on(forLoopVar[0], function (unitVar0) {
	                      forLoopVar[1].Fields[0](el)(event);
	                    });
	                  }
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
	            };
	            return new DomNode("Element", [n, Array.from(a), Array.from(b), f]);
	          };
	        };
	      }
	    }]);
	
	    return El;
	  }();
	
	  _fableCore.Util.setInterfaces(El.prototype, [], "TheGamma.Html.El");
	
	  var h = exports.h = new El();
	});
	//# sourceMappingURL=html.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(1), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./common"), require("../gui/html"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.common, global.html);
	    global.maps = mod.exports;
	  }
	})(this, function (exports, _fableCore, _common, _html) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.timeline = exports.math = exports.geo = exports.GeoGlobals = exports.JsHelpers = exports.JsDatamap = exports.BubblesConfig = exports.DatamapConfig = exports.GeographyConfig = undefined;
	
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
	
	  var GeographyConfig = exports.GeographyConfig = function () {
	    function GeographyConfig(popupOnHover, highlightOnHover) {
	      _classCallCheck(this, GeographyConfig);
	
	      this.popupOnHover = popupOnHover;
	      this.highlightOnHover = highlightOnHover;
	    }
	
	    _createClass(GeographyConfig, [{
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
	
	    return GeographyConfig;
	  }();
	
	  _fableCore.Util.setInterfaces(GeographyConfig.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Maps.GeographyConfig");
	
	  var DatamapConfig = exports.DatamapConfig = function () {
	    function DatamapConfig(element, scope, geographyConfig, fills, data) {
	      _classCallCheck(this, DatamapConfig);
	
	      this.element = element;
	      this.scope = scope;
	      this.geographyConfig = geographyConfig;
	      this.fills = fills;
	      this.data = data;
	    }
	
	    _createClass(DatamapConfig, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return DatamapConfig;
	  }();
	
	  _fableCore.Util.setInterfaces(DatamapConfig.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Maps.DatamapConfig");
	
	  var BubblesConfig = exports.BubblesConfig = function () {
	    function BubblesConfig(popupTemplate, key) {
	      _classCallCheck(this, BubblesConfig);
	
	      this.popupTemplate = popupTemplate;
	      this.key = key;
	    }
	
	    _createClass(BubblesConfig, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return BubblesConfig;
	  }();
	
	  _fableCore.Util.setInterfaces(BubblesConfig.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Maps.BubblesConfig");
	
	  var JsDatamap = exports.JsDatamap = function ($exports) {
	    return $exports;
	  }({});
	
	  var JsHelpers = exports.JsHelpers = function ($exports) {
	    return $exports;
	  }({});
	
	  var GeoGlobals = exports.GeoGlobals = function ($exports) {
	    var Locations = $exports.Locations = function () {
	      function Locations(country, coordinates) {
	        _classCallCheck(this, Locations);
	
	        this.country = country;
	        this.coordinates = coordinates;
	      }
	
	      _createClass(Locations, [{
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
	
	      return Locations;
	    }();
	
	    _fableCore.Util.setInterfaces(Locations.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Maps.GeoGlobals.Locations");
	
	    var locations = $exports.locations = function (arg00) {
	      return function (arg10) {
	        return (0, _common.Async$2ECreateNamedFuture$2EStatic)(arg00, arg10);
	      };
	    }("locations")(function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        return builder_.Bind(_common.Http.Request("GET", "/data/locations.json"), function (_arg1) {
	          var lookup = _fableCore.Map.create(JSON.parse(_arg1).map(function (l) {
	            return [l.country, l.coordinates];
	          }), new _fableCore.GenericComparer(function (x, y) {
	            return x < y ? -1 : x > y ? 1 : 0;
	          }));
	
	          return builder_.Return(lookup);
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton));
	
	    return $exports;
	  }({});
	
	  var geo = exports.geo = function () {
	    function geo() {
	      _classCallCheck(this, geo);
	    }
	
	    _createClass(geo, null, [{
	      key: "lookup",
	      value: function lookup(country) {
	        return function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(GeoGlobals.locations), function (_arg1) {
	              return builder_.Return(_fableCore.Map.tryFind(country, _arg1) != null ? _fableCore.Map.tryFind(country, _arg1) : new Float64Array([0, 0]));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton);
	      }
	    }]);
	
	    return geo;
	  }();
	
	  _fableCore.Util.setInterfaces(geo.prototype, [], "TheGamma.Maps.geo");
	
	  var math = exports.math = function () {
	    function math() {
	      _classCallCheck(this, math);
	    }
	
	    _createClass(math, null, [{
	      key: "sqrt",
	      value: function sqrt(f) {
	        return Math.sqrt(f);
	      }
	    }, {
	      key: "pow",
	      value: function pow(f, k) {
	        return Math.pow(f, k);
	      }
	    }, {
	      key: "log",
	      value: function log(f, b) {
	        return b != null ? Math.log(f, b) : Math.log(f);
	      }
	    }, {
	      key: "min",
	      value: function min(f1, f2) {
	        return f1 < f2 ? f1 : f2;
	      }
	    }, {
	      key: "max",
	      value: function max(f1, f2) {
	        return f1 > f2 ? f1 : f2;
	      }
	    }, {
	      key: "add",
	      value: function add(f1, f2) {
	        return f1 + f2;
	      }
	    }, {
	      key: "times",
	      value: function times(f1, f2) {
	        return f1 * f2;
	      }
	    }, {
	      key: "sub",
	      value: function sub(f1, f2) {
	        return f1 - f2;
	      }
	    }, {
	      key: "div",
	      value: function div(f1, f2) {
	        return f1 / f2;
	      }
	    }]);
	
	    return math;
	  }();
	
	  _fableCore.Util.setInterfaces(math.prototype, [], "TheGamma.Maps.math");
	
	  var timeline = exports.timeline = function () {
	    function timeline(data, colors, titleTemplate, defaultFill, delay, overflowDelay, infoSelector, locSelector, sizeSelector, detailsSelector, timeSelector) {
	      _classCallCheck(this, timeline);
	
	      this.data = data;
	      this.colors = colors;
	      this.titleTemplate = titleTemplate;
	      this.defaultFill = defaultFill;
	      this.delay = delay;
	      this.overflowDelay = overflowDelay;
	      this.infoSelector = infoSelector;
	      this.locSelector = locSelector;
	      this.sizeSelector = sizeSelector;
	      this.detailsSelector = detailsSelector;
	      this.timeSelector = timeSelector;
	    }
	
	    _createClass(timeline, [{
	      key: "set",
	      value: function set(fill, colors, title, delay, overflowDelay, details) {
	        var colors_1 = colors != null ? colors : this.colors;
	        var defaultFill = fill != null ? fill : this.defaultFill;
	        var titleTemplate = title != null ? title : this.titleTemplate;
	        var delay_1 = delay != null ? delay : this.delay;
	        var detailsSelector = details != null ? details : this.detailsSelector;
	        var overflowDelay_1 = overflowDelay != null ? overflowDelay : this.overflowDelay;
	        return new timeline(this.data, colors_1, titleTemplate, defaultFill, delay_1, overflowDelay_1, this.infoSelector, this.locSelector, this.sizeSelector, detailsSelector, this.timeSelector);
	      }
	    }, {
	      key: "using",
	      value: function using(coordinates, time, size, info) {
	        return new timeline(this.data, this.colors, this.titleTemplate, this.defaultFill, this.delay, this.overflowDelay, info, coordinates, size, this.detailsSelector, time);
	      }
	    }, {
	      key: "show",
	      value: function show(outputId) {
	        var _this = this;
	
	        var id = "map" + function () {
	          var copyOfStruct = function () {
	            var copyOfStruct = _fableCore.Date.now();
	
	            return _fableCore.Date.ticks(copyOfStruct);
	          }();
	
	          return String(copyOfStruct);
	        }();
	
	        (0, _html.renderTo)(document.getElementById(outputId), function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "map")]))(_fableCore.List.ofArray([function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_title")]))(_fableCore.List.ofArray([(0, _html.text)("")])), function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id), (0, _html.op_EqualsGreater)("class", "mapcontainer")]))(new _fableCore.List()), function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "buttons")]))(_fableCore.List.ofArray([function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_btn")]))(_fableCore.List.ofArray([function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-pause")]))(new _fableCore.List())]))])), function (arg0) {
	          return function (arg1) {
	            return _html.El.op_Dynamic(arg0, arg1);
	          };
	        }(_html.h)("input")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_player"), (0, _html.op_EqualsGreater)("type", "range")]))(new _fableCore.List())]))])));
	        var fills = Array.from(_fableCore.Seq.mapIndexed(function (i, c) {
	          return [_fableCore.String.fsFormat("item%d")(function (x) {
	            return x;
	          })(i), c];
	        }, this.colors));
	        var map = new Datamap(new DatamapConfig(document.getElementById(id), "world", new GeographyConfig(false, false), _fableCore.Util.createObj(_fableCore.List.ofArray([["defaultFill", this.defaultFill]], _fableCore.List.ofArray(fills))), {}));
	
	        var objects = function objects(data) {
	          return function (infos) {
	            return function (time) {
	              var res = [];
	
	              for (var i = 0; i <= data.length - 1; i++) {
	                var patternInput = data[i];
	
	                if (_fableCore.Util.equals(patternInput[3], time)) {
	                  (function (arg00) {
	                    res.push(arg00);
	                  })(_fableCore.Util.createObj(_fableCore.List.append(_this.detailsSelector != null ? _fableCore.List.ofArray([["details", _fableCore.String.join("", _fableCore.Seq.map(function (value) {
	                    return _fableCore.Util.toString(value);
	                  }, _this.detailsSelector(patternInput[2])))]]) : new _fableCore.List(), _fableCore.List.ofArray([["radius", _this.sizeSelector(patternInput[2])], ["borderWidth", "1px"], ["fillKey", _fableCore.String.fsFormat("item%d")(function (x) {
	                    return x;
	                  })(patternInput[0] % fills.length)], ["info", _fableCore.Map.tryFind(_fableCore.String.fsFormat("%O, %O")(function (x) {
	                    return x;
	                  })(patternInput[1][0])(patternInput[1][1]), infos) != null ? _fableCore.Map.tryFind(_fableCore.String.fsFormat("%O, %O")(function (x) {
	                    return x;
	                  })(patternInput[1][0])(patternInput[1][1]), infos) : ""], ["latitude", patternInput[1][0]], ["longitude", patternInput[1][1]]]))));
	                }
	              }
	
	              return Array.from(res);
	            };
	          };
	        };
	
	        (function (arg00) {
	          _fableCore.Async.startImmediate(arg00);
	        })(function (builder_) {
	          return builder_.Delay(function (unitVar) {
	            return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(_this.data.data), function (_arg25) {
	              var locs = new Array(_arg25.length);
	              return builder_.Combine(builder_.For(_fableCore.Seq.range(0, _arg25.length - 1), function (_arg26) {
	                return builder_.Bind(_this.locSelector(_arg25[_arg26][1]), function (_arg27) {
	                  locs[_arg26] = _arg27;
	                  return builder_.Zero();
	                });
	              }), builder_.Delay(function (unitVar_1) {
	                var colorLookup = _fableCore.Map.create(_fableCore.Seq.mapIndexed(function (i, l) {
	                  return [_fableCore.List.ofArray(l), i];
	                }, _fableCore.Seq.distinct(locs)), new _fableCore.GenericComparer(function (x, y) {
	                  return x.CompareTo(y);
	                }));
	
	                var data = Array.from(_fableCore.Seq.map2(function (tupledArg, locs_1) {
	                  return [colorLookup.get(_fableCore.List.ofArray(locs_1)), locs_1, tupledArg[1], _this.timeSelector(tupledArg[1])];
	                }, _arg25, locs));
	
	                var infosLookup = _fableCore.Map.create(_fableCore.Seq.map(function (tupledArg) {
	                  return [tupledArg[0], _fableCore.String.join("<br />", _fableCore.Seq.distinct(_fableCore.Seq.map(function (tupledArg_1) {
	                    return _this.infoSelector(tupledArg_1[2]);
	                  }, tupledArg[1])))];
	                }, _fableCore.Seq.groupBy(function (tupledArg) {
	                  return _fableCore.String.fsFormat("%O, %O")(function (x) {
	                    return x;
	                  })(tupledArg[1][0])(tupledArg[1][1]);
	                }, data)), new _fableCore.GenericComparer(function (x, y) {
	                  return x < y ? -1 : x > y ? 1 : 0;
	                }));
	
	                var times = Int32Array.from(_fableCore.Seq.sortWith(function (x, y) {
	                  return _fableCore.Util.compare(x, y);
	                }, _fableCore.Seq.distinct(Int32Array.from(_fableCore.Seq.map(function (tupledArg) {
	                  return tupledArg[3];
	                }, data)))));
	                var patternInput = [_fableCore.Seq.reduce(function (x, y) {
	                  return Math.min(x, y);
	                }, times), _fableCore.Seq.reduce(function (x, y) {
	                  return Math.max(x, y);
	                }, times)];
	                var player = document.getElementById(id + "_player");
	                var btn = document.getElementById(id + "_btn");
	                return builder_.Combine(times.length === 1 ? function () {
	                  player.style.display = "none";
	                  btn.style.display = "none";
	                  return builder_.Zero();
	                }() : builder_.Zero(), builder_.Delay(function (unitVar_2) {
	                  player.min = String(0);
	                  player.value = String(0);
	                  player.max = String(times.length - 1);
	
	                  var render = function render(unitVar0) {
	                    var y = times[Number.parseInt(player.value)];
	                    var o = objects(data)(infosLookup)(y);
	                    (0, _html.renderTo)(document.getElementById(id + "_title"), function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("h2")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_fableCore.String.replace(_this.titleTemplate, "%title", String(y)))])));
	
	                    var config = function () {
	                      var key = function key(data_1) {
	                        return JSON.stringify([data_1["latitude"], data_1["longitude"]]);
	                      };
	
	                      return new BubblesConfig(function (geo_1, data_1) {
	                        return _this.detailsSelector != null ? _fableCore.String.fsFormat("<div style='pointer-events:none' class='hoverinfo'><strong>%s</strong><br /> %s </div>")(function (x) {
	                          return x;
	                        })(data_1["info"])(data_1["details"]) : _fableCore.String.fsFormat("<div style='pointer-events:none' class='hoverinfo'>%s</div>")(function (x) {
	                          return x;
	                        })(data_1["info"]);
	                      }, key);
	                    }();
	
	                    map.bubbles(o, config);
	                  };
	
	                  var autoPlay = true;
	
	                  var startPlay = function startPlay(unitVar0) {
	                    (function (arg00) {
	                      _fableCore.Async.startImmediate(arg00);
	                    })(function (builder__1) {
	                      return builder__1.Delay(function (unitVar_3) {
	                        return builder__1.While(function (unitVar_4) {
	                          return autoPlay;
	                        }, builder__1.Delay(function (unitVar_4) {
	                          var value = Number.parseInt(player.value);
	                          render();
	                          player.value = String(value + 1 === times.length ? 0 : value + 1);
	                          return builder__1.Bind(_fableCore.Async.sleep(value + 1 === times.length ? _this.overflowDelay : _this.delay), function (_arg31) {
	                            return builder__1.Return();
	                          });
	                        }));
	                      });
	                    }(_fableCore.AsyncBuilder.singleton));
	                  };
	
	                  player.onchange = function (e) {
	                    autoPlay = false;
	
	                    (function (dom) {
	                      (0, _html.renderTo)(btn, dom);
	                    })(function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-play")]))(new _fableCore.List()));
	
	                    return render();
	                  };
	
	                  player.oninput = player.onchange;
	
	                  btn.onclick = function (e) {
	                    autoPlay = !autoPlay;
	
	                    (function (dom) {
	                      (0, _html.renderTo)(btn, dom);
	                    })(function (arg0) {
	                      return function (arg1) {
	                        return _html.El.op_Dynamic(arg0, arg1);
	                      };
	                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", autoPlay ? "fa fa-pause" : "fa fa-play")]))(new _fableCore.List()));
	
	                    if (autoPlay) {
	                      startPlay();
	                    }
	
	                    return null;
	                  };
	
	                  startPlay();
	                  return builder_.Zero();
	                }));
	              }));
	            });
	          });
	        }(_fableCore.AsyncBuilder.singleton));
	      }
	    }], [{
	      key: "create",
	      value: function create(data) {
	        var colors = ["red"];
	        var defaultFill = "blue";
	        var delay = 750;
	        var detailsSelector = null;
	        var overflowDelay = 2000;
	        var titleTemplate = "%title";
	
	        var infoSelector = function infoSelector(_arg1) {
	          return "";
	        };
	
	        var timeSelector = function timeSelector(_arg2) {
	          return 0;
	        };
	
	        var sizeSelector = function sizeSelector(_arg3) {
	          return 10;
	        };
	
	        return new timeline(data, colors, titleTemplate, defaultFill, delay, overflowDelay, infoSelector, function (_arg4) {
	          throw "!";
	        }, sizeSelector, detailsSelector, timeSelector);
	      }
	    }]);
	
	    return timeline;
	  }();
	
	  _fableCore.Util.setInterfaces(timeline.prototype, ["FSharpRecord"], "TheGamma.Maps.timeline");
	});
	//# sourceMappingURL=maps.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("fable-core"), require("./ast"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.fableCore, global.ast);
	        global.typeops = mod.exports;
	    }
	})(this, function (exports, _fableCore, _ast) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.UnifictionContext = exports.typesEqual = exports.TypeContext = undefined;
	    exports.listsEqual = listsEqual;
	    exports.arraysEqual = arraysEqual;
	    exports.memberNamesEqual = memberNamesEqual;
	    exports.$BoundTypeVariables$ = $BoundTypeVariables$;
	    exports.membersEqual = membersEqual;
	    exports.typesEqualAux = typesEqualAux;
	    exports.substituteMembers = substituteMembers;
	    exports.substituteTypes = substituteTypes;
	    exports.unifyTypesAux = unifyTypesAux;
	    exports.unifyTypes = unifyTypes;
	    exports.reduceType = reduceType;
	
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
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	
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
	
	    var TypeContext = exports.TypeContext = function () {
	        function TypeContext(equivalentVars) {
	            _classCallCheck(this, TypeContext);
	
	            this.EquivalentVars = equivalentVars;
	        }
	
	        _createClass(TypeContext, [{
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
	
	        return TypeContext;
	    }();
	
	    _fableCore.Util.setInterfaces(TypeContext.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Types.TypeContext");
	
	    function listsEqual(l1, l2, f) {
	        var matchValue = [l1, l2];
	
	        var $target2 = function $target2() {
	            return false;
	        };
	
	        if (matchValue[0].tail != null) {
	            if (matchValue[1].tail != null) {
	                if (function () {
	                    var ys = matchValue[1].tail;
	                    var y = matchValue[1].head;
	                    var xs = matchValue[0].tail;
	                    var x = matchValue[0].head;
	                    return f(x)(y);
	                }()) {
	                    var x = matchValue[0].head;
	                    var xs = matchValue[0].tail;
	                    var y = matchValue[1].head;
	                    var ys = matchValue[1].tail;
	                    return listsEqual(xs, ys, f);
	                } else {
	                    return $target2();
	                }
	            } else {
	                return $target2();
	            }
	        } else {
	            if (matchValue[1].tail == null) {
	                return true;
	            } else {
	                return $target2();
	            }
	        }
	    }
	
	    function arraysEqual(l1, l2, f) {
	        var loop = function loop(i) {
	            return (i === l1.length ? i === l2.length : false) ? true : (i < l1.length ? i < l2.length : false) ? f(l1[i])(l2[i]) ? loop(i + 1) : false : false;
	        };
	
	        return loop(0);
	    }
	
	    function memberNamesEqual(m1, m2) {
	        var matchValue = [m1, m2];
	
	        var $target0 = function $target0(n1, n2) {
	            return n1 === n2;
	        };
	
	        var $target1 = function $target1() {
	            return false;
	        };
	
	        if (matchValue[0].Case === "Method") {
	            if (matchValue[1].Case === "Method") {
	                return $target0(matchValue[0].Fields[0], matchValue[1].Fields[0]);
	            } else {
	                return $target1();
	            }
	        } else {
	            if (matchValue[1].Case === "Property") {
	                return $target0(matchValue[0].Fields[0], matchValue[1].Fields[0]);
	            } else {
	                return $target1();
	            }
	        }
	    }
	
	    function $BoundTypeVariables$(t) {
	        return t.Case === "Forall" ? [t.Fields[0], t] : [new _fableCore.List(), t];
	    }
	
	    function membersEqual(ctx, m1, m2) {
	        var matchValue = [m1, m2];
	
	        var $target2 = function $target2() {
	            return false;
	        };
	
	        if (matchValue[0].Case === "Method") {
	            var activePatternResult4521 = $BoundTypeVariables$(matchValue[0].Fields[2]);
	
	            if (matchValue[1].Case === "Method") {
	                var activePatternResult4522 = $BoundTypeVariables$(matchValue[1].Fields[2]);
	                var a1 = matchValue[0].Fields[1];
	                var a2 = matchValue[1].Fields[1];
	                var n1 = matchValue[0].Fields[0];
	                var n2 = matchValue[1].Fields[0];
	                var r1 = activePatternResult4521[1];
	                var r2 = activePatternResult4522[1];
	                var v1 = activePatternResult4521[0];
	                var v2 = activePatternResult4522[0];
	                {
	                    var _ret = function () {
	                        var ctx_1 = new TypeContext(_fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars));
	
	                        if (n1 === n2 ? typesEqualAux(ctx_1, r1, r2) : false) {
	                            return {
	                                v: listsEqual(a1, a2, function (tupledArg) {
	                                    return function (tupledArg_1) {
	                                        return (tupledArg[0] === tupledArg_1[0] ? tupledArg[1] === tupledArg_1[1] : false) ? typesEqualAux(ctx_1, tupledArg[2], tupledArg_1[2]) : false;
	                                    };
	                                })
	                            };
	                        } else {
	                            return {
	                                v: false
	                            };
	                        }
	                    }();
	
	                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                }
	            } else {
	                return $target2();
	            }
	        } else {
	            if (matchValue[1].Case === "Property") {
	                var _n = matchValue[0].Fields[0];
	                var _n2 = matchValue[1].Fields[0];
	                var t1 = matchValue[0].Fields[1];
	                var t2 = matchValue[1].Fields[1];
	
	                if (_n === _n2) {
	                    return typesEqualAux(ctx, t1, t2);
	                } else {
	                    return false;
	                }
	            } else {
	                return $target2();
	            }
	        }
	    }
	
	    function typesEqualAux(ctx, t1, t2) {
	        var matchValue = [t1, t2];
	
	        var $target0 = function $target0() {
	            return true;
	        };
	
	        var $target8 = function $target8() {
	            var $target1 = function $target1() {
	                return false;
	            };
	
	            if (matchValue[0].Case === "App") {
	                if (matchValue[1].Case === "App") {
	                    if (function () {
	                        var ts2 = matchValue[1].Fields[1];
	                        var ts1 = matchValue[0].Fields[1];
	                        var t2_1 = matchValue[1].Fields[0];
	                        var t1_1 = matchValue[0].Fields[0];
	                        return ts1.length === ts2.length;
	                    }()) {
	                        var t1_1 = matchValue[0].Fields[0];
	                        var t2_1 = matchValue[1].Fields[0];
	                        var ts1 = matchValue[0].Fields[1];
	                        var ts2 = matchValue[1].Fields[1];
	                        return _fableCore.Seq.forAll(function (tupledArg) {
	                            return typesEqualAux(ctx, tupledArg[0], tupledArg[1]);
	                        }, _fableCore.List.ofArray([[t1_1, t2_1]], _fableCore.Seq.toList(_fableCore.Seq.zip(ts1, ts2))));
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
	
	        if (matchValue[0].Case === "Any") {
	            return $target0();
	        } else {
	            if (matchValue[0].Case === "Parameter") {
	                if (matchValue[1].Case === "Any") {
	                    return $target0();
	                } else {
	                    if (matchValue[1].Case === "Parameter") {
	                        var _ret2 = function () {
	                            var p1 = matchValue[0].Fields[0];
	                            var p2 = matchValue[1].Fields[0];
	                            return {
	                                v: _fableCore.Seq.exists(function (tupledArg) {
	                                    return tupledArg[0] === p1 ? tupledArg[1] === p2 : false;
	                                }, ctx.EquivalentVars)
	                            };
	                        }();
	
	                        if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	                    } else {
	                        return $target8();
	                    }
	                }
	            } else {
	                if (matchValue[0].Case === "Delayed") {
	                    if (matchValue[1].Case === "Any") {
	                        return $target0();
	                    } else {
	                        if (matchValue[1].Case === "Delayed") {
	                            var g1 = matchValue[0].Fields[0];
	                            var g2 = matchValue[1].Fields[0];
	                            return g1 === g2;
	                        } else {
	                            return $target8();
	                        }
	                    }
	                } else {
	                    if (matchValue[0].Case === "List") {
	                        if (matchValue[1].Case === "Any") {
	                            return $target0();
	                        } else {
	                            if (matchValue[1].Case === "List") {
	                                var t1_1 = matchValue[0].Fields[0];
	                                var t2_1 = matchValue[1].Fields[0];
	                                return typesEqualAux(ctx, t1_1, t2_1);
	                            } else {
	                                return $target8();
	                            }
	                        }
	                    } else {
	                        if (matchValue[0].Case === "Function") {
	                            if (matchValue[1].Case === "Any") {
	                                return $target0();
	                            } else {
	                                if (matchValue[1].Case === "Function") {
	                                    var a1 = matchValue[0].Fields[0];
	                                    var a2 = matchValue[1].Fields[0];
	                                    var r1 = matchValue[0].Fields[1];
	                                    var r2 = matchValue[1].Fields[1];
	                                    return listsEqual(_fableCore.List.ofArray([r1], a1), _fableCore.List.ofArray([r2], a2), function (t1_1) {
	                                        return function (t2_1) {
	                                            return typesEqualAux(ctx, t1_1, t2_1);
	                                        };
	                                    });
	                                } else {
	                                    return $target8();
	                                }
	                            }
	                        } else {
	                            if (matchValue[0].Case === "Object") {
	                                if (matchValue[1].Case === "Any") {
	                                    return $target0();
	                                } else {
	                                    if (matchValue[1].Case === "Object") {
	                                        var o1 = matchValue[0].Fields[0];
	                                        var o2 = matchValue[1].Fields[0];
	                                        return arraysEqual(o1.Members, o2.Members, function (m1) {
	                                            return function (m2) {
	                                                return membersEqual(ctx, m1, m2);
	                                            };
	                                        });
	                                    } else {
	                                        return $target8();
	                                    }
	                                }
	                            } else {
	                                if (matchValue[0].Case === "Primitive") {
	                                    if (matchValue[1].Case === "Any") {
	                                        return $target0();
	                                    } else {
	                                        if (matchValue[1].Case === "Primitive") {
	                                            var n1 = matchValue[0].Fields[0];
	                                            var n2 = matchValue[1].Fields[0];
	                                            return n1.Equals(n2);
	                                        } else {
	                                            return $target8();
	                                        }
	                                    }
	                                } else {
	                                    if (matchValue[0].Case === "Forall") {
	                                        if (matchValue[1].Case === "Any") {
	                                            return $target0();
	                                        } else {
	                                            if (matchValue[1].Case === "Forall") {
	                                                if (function () {
	                                                    var v2 = matchValue[1].Fields[0];
	                                                    var v1 = matchValue[0].Fields[0];
	                                                    var t2_1 = matchValue[1].Fields[1];
	                                                    var t1_1 = matchValue[0].Fields[1];
	                                                    return v1.length === v2.length;
	                                                }()) {
	                                                    var _t1_ = matchValue[0].Fields[1];
	                                                    var _t2_ = matchValue[1].Fields[1];
	                                                    var v1 = matchValue[0].Fields[0];
	                                                    var v2 = matchValue[1].Fields[0];
	                                                    {
	                                                        var ctx_1 = new TypeContext(_fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars));
	                                                        return typesEqualAux(ctx_1, _t1_, _t2_);
	                                                    }
	                                                } else {
	                                                    return $target8();
	                                                }
	                                            } else {
	                                                return $target8();
	                                            }
	                                        }
	                                    } else {
	                                        if (matchValue[1].Case === "Any") {
	                                            return $target0();
	                                        } else {
	                                            return $target8();
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
	
	    var typesEqual = exports.typesEqual = function () {
	        var ctx = new TypeContext(new _fableCore.List());
	        return function (t1) {
	            return function (t2) {
	                return typesEqualAux(ctx, t1, t2);
	            };
	        };
	    }();
	
	    function substituteMembers(assigns, members) {
	        return members.map(function (_arg1) {
	            return _arg1.Case === "Property" ? new _ast.Member("Property", [_arg1.Fields[0], substituteTypes(assigns, _arg1.Fields[1]), _arg1.Fields[2], _arg1.Fields[3]]) : function () {
	                var activePatternResult4534 = $BoundTypeVariables$(_arg1.Fields[2]);
	
	                var assigns_1 = function () {
	                    var folder = function folder(assigns_1) {
	                        return function (_var) {
	                            return _fableCore.Map.remove(_var, assigns_1);
	                        };
	                    };
	
	                    return function (list) {
	                        return _fableCore.Seq.fold(function ($var2, $var3) {
	                            return folder($var2)($var3);
	                        }, assigns, list);
	                    };
	                }()(activePatternResult4534[0]);
	
	                var ars = _fableCore.List.map(function (tupledArg) {
	                    return [tupledArg[0], tupledArg[1], substituteTypes(assigns_1, tupledArg[2])];
	                }, _arg1.Fields[1]);
	
	                return new _ast.Member("Method", [_arg1.Fields[0], ars, substituteTypes(assigns_1, activePatternResult4534[1]), _arg1.Fields[3], _arg1.Fields[4]]);
	            }();
	        });
	    }
	
	    function substituteTypes(assigns, t) {
	        var $target1 = function $target1() {
	            var $target0 = function $target0() {
	                return t;
	            };
	
	            if (t.Case === "Any") {
	                return $target0();
	            } else {
	                if (t.Case === "Primitive") {
	                    return $target0();
	                } else {
	                    if (t.Case === "Function") {
	                        return new _ast.Type("Function", [_fableCore.List.map(function (t_1) {
	                            return substituteTypes(assigns, t_1);
	                        }, t.Fields[0]), substituteTypes(assigns, t.Fields[1])]);
	                    } else {
	                        if (t.Case === "List") {
	                            return new _ast.Type("List", [substituteTypes(assigns, t.Fields[0])]);
	                        } else {
	                            if (t.Case === "Object") {
	                                return new _ast.Type("Object", [new _ast.ObjectType(substituteMembers(assigns, t.Fields[0].Members))]);
	                            } else {
	                                if (t.Case === "Delayed") {
	                                    var _f;
	
	                                    var f = (_f = {}, _defineProperty(_f, _fableCore.Symbol.interfaces, ["TheGamma.Common.Future"]), _defineProperty(_f, "Then", function Then(g) {
	                                        t.Fields[1].Then(function (t_1) {
	                                            g(substituteTypes(assigns, t_1));
	                                        });
	                                    }), _f);
	                                    return new _ast.Type("Delayed", [t.Fields[0], f]);
	                                } else {
	                                    if (t.Case === "App") {
	                                        return new _ast.Type("App", [substituteTypes(assigns, t.Fields[0]), _fableCore.List.map(function (t_1) {
	                                            return substituteTypes(assigns, t_1);
	                                        }, t.Fields[1])]);
	                                    } else {
	                                        if (t.Case === "Forall") {
	                                            var assigns_1 = function () {
	                                                var folder = function folder(assigns_1) {
	                                                    return function (_var) {
	                                                        return _fableCore.Map.remove(_var, assigns_1);
	                                                    };
	                                                };
	
	                                                return function (list) {
	                                                    return _fableCore.Seq.fold(function ($var4, $var5) {
	                                                        return folder($var4)($var5);
	                                                    }, assigns, list);
	                                                };
	                                            }()(t.Fields[0]);
	
	                                            return new _ast.Type("Forall", [t.Fields[0], substituteTypes(assigns_1, t.Fields[1])]);
	                                        } else {
	                                            return $target0();
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        };
	
	        if (t.Case === "Parameter") {
	            if (assigns.has(t.Fields[0])) {
	                var s = t.Fields[0];
	                return assigns.get(s);
	            } else {
	                return $target1();
	            }
	        } else {
	            return $target1();
	        }
	    }
	
	    var UnifictionContext = exports.UnifictionContext = function UnifictionContext(freeVars, assignments, equivalentVars, errors) {
	        _classCallCheck(this, UnifictionContext);
	
	        this.FreeVars = freeVars;
	        this.Assignments = assignments;
	        this.EquivalentVars = equivalentVars;
	        this.Errors = errors;
	    };
	
	    _fableCore.Util.setInterfaces(UnifictionContext.prototype, ["FSharpRecord"], "TheGamma.Types.UnifictionContext");
	
	    function unifyTypesAux(ctx, ts1, ts2) {
	        var matchValue = [ts1, ts2];
	
	        var $target1 = function $target1() {
	            var $target2 = function $target2() {
	                var $target2 = function $target2() {
	                    var $target1 = function $target1() {
	                        var $target1 = function $target1() {
	                            var $target2 = function $target2() {
	                                throw "unifyTypesAux: The lists of types had mismatching lengths";
	                            };
	
	                            if (matchValue[0].tail == null) {
	                                if (matchValue[1].tail == null) {
	                                    return ctx;
	                                } else {
	                                    return $target2();
	                                }
	                            } else {
	                                if (matchValue[1].tail != null) {
	                                    var _ret3 = function () {
	                                        var t1 = matchValue[0].head;
	                                        var t2 = matchValue[1].head;
	                                        var ts1_1 = matchValue[0].tail;
	                                        var ts2_1 = matchValue[1].tail;
	                                        return {
	                                            v: unifyTypesAux(function () {
	                                                var Errors = _fableCore.List.ofArray([[t1, t2]], ctx.Errors);
	
	                                                return new UnifictionContext(ctx.FreeVars, ctx.Assignments, ctx.EquivalentVars, Errors);
	                                            }(), ts1_1, ts2_1)
	                                        };
	                                    }();
	
	                                    if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
	                                } else {
	                                    return $target2();
	                                }
	                            }
	                        };
	
	                        if (matchValue[0].tail != null) {
	                            if (matchValue[1].tail != null) {
	                                if (function () {
	                                    var ts2_1 = matchValue[1].tail;
	                                    var ts1_1 = matchValue[0].tail;
	                                    var t2 = matchValue[1].head;
	                                    var t1 = matchValue[0].head;
	                                    return typesEqualAux(new TypeContext(ctx.EquivalentVars), t1, t2);
	                                }()) {
	                                    var t1 = matchValue[0].head;
	                                    var t2 = matchValue[1].head;
	                                    var ts1_1 = matchValue[0].tail;
	                                    var ts2_1 = matchValue[1].tail;
	                                    return unifyTypesAux(ctx, ts1_1, ts2_1);
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
	
	                    if (matchValue[0].tail != null) {
	                        if (matchValue[0].head.Case === "App") {
	                            if (matchValue[1].tail != null) {
	                                if (matchValue[1].head.Case === "App") {
	                                    if (function () {
	                                        var tb2 = matchValue[1].tail;
	                                        var tb1 = matchValue[0].tail;
	                                        var ta2 = matchValue[1].head.Fields[1];
	                                        var ta1 = matchValue[0].head.Fields[1];
	                                        var t2 = matchValue[1].head.Fields[0];
	                                        var t1 = matchValue[0].head.Fields[0];
	                                        return ta1.length === ta2.length;
	                                    }()) {
	                                        var t1 = matchValue[0].head.Fields[0];
	                                        var t2 = matchValue[1].head.Fields[0];
	                                        var ta1 = matchValue[0].head.Fields[1];
	                                        var ta2 = matchValue[1].head.Fields[1];
	                                        var tb1 = matchValue[0].tail;
	                                        var tb2 = matchValue[1].tail;
	                                        return unifyTypesAux(ctx, _fableCore.List.ofArray([t1], _fableCore.List.append(ta1, tb1)), _fableCore.List.ofArray([t2], _fableCore.List.append(ta2, tb2)));
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
	                };
	
	                if (matchValue[0].tail != null) {
	                    if (matchValue[0].head.Case === "List") {
	                        if (matchValue[1].tail != null) {
	                            if (matchValue[1].head.Case === "List") {
	                                var t1 = matchValue[0].head.Fields[0];
	                                var t2 = matchValue[1].head.Fields[0];
	                                var ts1_1 = matchValue[0].tail;
	                                var ts2_1 = matchValue[1].tail;
	                                return unifyTypesAux(ctx, _fableCore.List.ofArray([t1], ts1_1), _fableCore.List.ofArray([t2], ts2_1));
	                            } else {
	                                return $target2();
	                            }
	                        } else {
	                            return $target2();
	                        }
	                    } else {
	                        if (matchValue[0].head.Case === "Forall") {
	                            if (matchValue[1].tail != null) {
	                                if (matchValue[1].head.Case === "Forall") {
	                                    if (function () {
	                                        var v2 = matchValue[1].head.Fields[0];
	                                        var v1 = matchValue[0].head.Fields[0];
	                                        var ts2_1 = matchValue[1].tail;
	                                        var ts1_1 = matchValue[0].tail;
	                                        var t2 = matchValue[1].head.Fields[1];
	                                        var t1 = matchValue[0].head.Fields[1];
	                                        return v1.length === v2.length;
	                                    }()) {
	                                        var _ret4 = function () {
	                                            var t1 = matchValue[0].head.Fields[1];
	                                            var t2 = matchValue[1].head.Fields[1];
	                                            var ts1_1 = matchValue[0].tail;
	                                            var ts2_1 = matchValue[1].tail;
	                                            var v1 = matchValue[0].head.Fields[0];
	                                            var v2 = matchValue[1].head.Fields[0];
	                                            {
	                                                var ctx_1 = function () {
	                                                    var EquivalentVars = _fableCore.List.append(_fableCore.Seq.toList(_fableCore.Seq.zip(v1, v2)), ctx.EquivalentVars);
	
	                                                    return new UnifictionContext(ctx.FreeVars, ctx.Assignments, EquivalentVars, ctx.Errors);
	                                                }();
	
	                                                return {
	                                                    v: unifyTypesAux(ctx_1, _fableCore.List.ofArray([t1], ts1_1), _fableCore.List.ofArray([t2], ts2_1))
	                                                };
	                                            }
	                                        }();
	
	                                        if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	                                    } else {
	                                        return $target2();
	                                    }
	                                } else {
	                                    return $target2();
	                                }
	                            } else {
	                                return $target2();
	                            }
	                        } else {
	                            return $target2();
	                        }
	                    }
	                } else {
	                    return $target2();
	                }
	            };
	
	            if (matchValue[0].tail != null) {
	                if (matchValue[0].head.Case === "Function") {
	                    if (matchValue[1].tail != null) {
	                        if (matchValue[1].head.Case === "Function") {
	                            var tis1 = matchValue[0].head.Fields[0];
	                            var tis2 = matchValue[1].head.Fields[0];
	                            var to1 = matchValue[0].head.Fields[1];
	                            var to2 = matchValue[1].head.Fields[1];
	                            var ts1_1 = matchValue[0].tail;
	                            var ts2_1 = matchValue[1].tail;
	                            return unifyTypesAux(ctx, _fableCore.List.append(_fableCore.List.ofArray([to1], tis1), ts1_1), _fableCore.List.append(_fableCore.List.ofArray([to2], tis2), ts2_1));
	                        } else {
	                            return $target2();
	                        }
	                    } else {
	                        return $target2();
	                    }
	                } else {
	                    if (matchValue[0].head.Case === "Object") {
	                        if (matchValue[1].tail != null) {
	                            if (matchValue[1].head.Case === "Object") {
	                                if (function () {
	                                    var ts2_1 = matchValue[1].tail;
	                                    var ts1_1 = matchValue[0].tail;
	                                    var m2 = matchValue[1].head.Fields[0].Members;
	                                    var m1 = matchValue[0].head.Fields[0].Members;
	                                    return arraysEqual(m1, m2, function (m1_1) {
	                                        return function (m2_1) {
	                                            return memberNamesEqual(m1_1, m2_1);
	                                        };
	                                    });
	                                }()) {
	                                    var m1 = matchValue[0].head.Fields[0].Members;
	                                    var m2 = matchValue[1].head.Fields[0].Members;
	                                    var _ts1_ = matchValue[0].tail;
	                                    var _ts2_ = matchValue[1].tail;
	                                    return unifyTypesAux(ctx, _ts1_, _ts2_);
	                                } else {
	                                    return $target2();
	                                }
	                            } else {
	                                return $target2();
	                            }
	                        } else {
	                            return $target2();
	                        }
	                    } else {
	                        return $target2();
	                    }
	                }
	            } else {
	                return $target2();
	            }
	        };
	
	        if (matchValue[0].tail != null) {
	            if (matchValue[0].head.Case === "Parameter") {
	                if (matchValue[1].tail != null) {
	                    if (function () {
	                        var ts2_1 = matchValue[1].tail;
	                        var ts1_1 = matchValue[0].tail;
	                        var t = matchValue[1].head;
	                        var n = matchValue[0].head.Fields[0];
	
	                        if (ctx.FreeVars.has(n)) {
	                            if (t.Case === "Parameter") {
	                                return false;
	                            } else {
	                                return true;
	                            }
	                        } else {
	                            return false;
	                        }
	                    }()) {
	                        var _ret5 = function () {
	                            var n = matchValue[0].head.Fields[0];
	                            var t = matchValue[1].head;
	                            var ts1_1 = matchValue[0].tail;
	                            var ts2_1 = matchValue[1].tail;
	                            return {
	                                v: unifyTypesAux(function () {
	                                    var Assignments = _fableCore.List.ofArray([[n, t]], ctx.Assignments);
	
	                                    return new UnifictionContext(ctx.FreeVars, Assignments, ctx.EquivalentVars, ctx.Errors);
	                                }(), ts1_1, ts2_1)
	                            };
	                        }();
	
	                        if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
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
	    }
	
	    function unifyTypes(free, ts1, ts2) {
	        var ctx = new UnifictionContext(_fableCore.Set.create(free, new _fableCore.GenericComparer(function (x, y) {
	            return x < y ? -1 : x > y ? 1 : 0;
	        })), new _fableCore.List(), new _fableCore.List(), new _fableCore.List());
	        var ctx_1 = unifyTypesAux(ctx, _fableCore.List.ofArray([ts1]), _fableCore.List.ofArray([ts2]));
	        return [ctx_1.Assignments, ctx_1.Errors];
	    }
	
	    function reduceType(t) {
	        var $target1 = function $target1() {
	            return t;
	        };
	
	        if (t.Case === "App") {
	            if (t.Fields[0].Case === "Forall") {
	                var args = t.Fields[1];
	                var t_1 = t.Fields[0].Fields[1];
	                var vars = t.Fields[0].Fields[0];
	                {
	                    if (vars.length !== args.length) {
	                        throw "reduceType: Invalid type application";
	                    }
	
	                    var t_2 = substituteTypes(_fableCore.Map.create(_fableCore.Seq.toList(_fableCore.Seq.zip(vars, args)), new _fableCore.GenericComparer(function (x, y) {
	                        return x < y ? -1 : x > y ? 1 : 0;
	                    })), t_1);
	                    return reduceType(t_2);
	                }
	            } else {
	                return $target1();
	            }
	        } else {
	            return $target1();
	        }
	    }
	});


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./ast"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.ast);
	    global.astops = mod.exports;
	  }
	})(this, function (exports, _fableCore, _ast) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.Entity$2Eget_Name = exports.Entity$2Eget_Antecedents = exports.anonymous = undefined;
	  exports.node = node;
	  exports.needsEscaping = needsEscaping;
	  exports.escapeIdent = escapeIdent;
	  exports.unionRanges = unionRanges;
	  exports.strictSubRange = strictSubRange;
	  exports.formatToken = formatToken;
	  exports.formatTokenInfo = formatTokenInfo;
	  exports.formatTokens = formatTokens;
	  exports.formatEntityKind = formatEntityKind;
	  exports.entityCodeNameAndAntecedents = entityCodeNameAndAntecedents;
	  exports.formatType = formatType;
	  exports.formatTypeInfo = formatTypeInfo;
	  exports.rebuildExprNode = rebuildExprNode;
	  exports.$ExprLeaf$ExprNode$ = $ExprLeaf$ExprNode$;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
	  function node(rng, node_1) {
	    var Entity = null;
	    var WhiteBefore = new _fableCore.List();
	    var WhiteAfter = new _fableCore.List();
	    return new _ast.Node(WhiteBefore, WhiteAfter, rng, node_1, Entity);
	  }
	
	  function needsEscaping(s) {
	    return (s[0] >= "0" ? s[0] <= "9" : false) ? true : s.split("").some(function (c) {
	      return !(((c >= "a" ? c <= "z" : false) ? true : c >= "A" ? c <= "Z" : false) ? true : c >= "0" ? c <= "9" : false);
	    });
	  }
	
	  function escapeIdent(s) {
	    return needsEscaping(s) ? "'" + s + "'" : s;
	  }
	
	  function unionRanges(r1, r2) {
	    return new _ast.Range(r1.Start < r2.Start ? r1.Start : r2.Start, r1.End > r2.End ? r1.End : r2.End);
	  }
	
	  function strictSubRange(first, second) {
	    return (first.Start > second.Start ? first.End <= second.End : false) ? true : first.Start >= second.Start ? first.End < second.End : false;
	  }
	
	  function formatToken(_arg1) {
	    var $target30 = function $target30() {
	      throw "Unsupported token";
	    };
	
	    if (_arg1.Case === "RParen") {
	      return ")";
	    } else {
	      if (_arg1.Case === "Equals") {
	        return "=";
	      } else {
	        if (_arg1.Case === "Dot") {
	          return ".";
	        } else {
	          if (_arg1.Case === "Comma") {
	            return ",";
	          } else {
	            if (_arg1.Case === "Let") {
	              return "let";
	            } else {
	              if (_arg1.Case === "LSquare") {
	                return "[";
	              } else {
	                if (_arg1.Case === "RSquare") {
	                  return "]";
	                } else {
	                  if (_arg1.Case === "Fun") {
	                    return "fun";
	                  } else {
	                    if (_arg1.Case === "Arrow") {
	                      return "->";
	                    } else {
	                      if (_arg1.Case === "Operator") {
	                        if (_arg1.Fields[0].Case === "GreaterThan") {
	                          return ">";
	                        } else {
	                          if (_arg1.Fields[0].Case === "GreaterThanOrEqual") {
	                            return ">=";
	                          } else {
	                            if (_arg1.Fields[0].Case === "LessThan") {
	                              return "<";
	                            } else {
	                              if (_arg1.Fields[0].Case === "LessThanOrEqual") {
	                                return "<=";
	                              } else {
	                                if (_arg1.Fields[0].Case === "Minus") {
	                                  return "-";
	                                } else {
	                                  if (_arg1.Fields[0].Case === "Multiply") {
	                                    return "*";
	                                  } else {
	                                    if (_arg1.Fields[0].Case === "Plus") {
	                                      return "+";
	                                    } else {
	                                      if (_arg1.Fields[0].Case === "Power") {
	                                        return "^";
	                                      } else {
	                                        if (_arg1.Fields[0].Case === "Equals") {
	                                          return "=";
	                                        } else {
	                                          return "/";
	                                        }
	                                      }
	                                    }
	                                  }
	                                }
	                              }
	                            }
	                          }
	                        }
	                      } else {
	                        if (_arg1.Case === "Boolean") {
	                          if (_arg1.Fields[0]) {
	                            return "true";
	                          } else {
	                            return "false";
	                          }
	                        } else {
	                          if (_arg1.Case === "Number") {
	                            var s = _arg1.Fields[0];
	                            return s;
	                          } else {
	                            if (_arg1.Case === "String") {
	                              var _s = _arg1.Fields[0];
	                              return "\"" + _fableCore.String.replace(_fableCore.String.replace(_fableCore.String.replace(_s, "\\", "\\\\"), "\n", "\\n"), "\"", "\\\"") + "\"";
	                            } else {
	                              if (_arg1.Case === "Ident") {
	                                var i = _arg1.Fields[0];
	                                return i;
	                              } else {
	                                if (_arg1.Case === "QIdent") {
	                                  var q = _arg1.Fields[0];
	                                  return "'" + q + "'";
	                                } else {
	                                  if (_arg1.Case === "White") {
	                                    var w = _arg1.Fields[0];
	                                    return w;
	                                  } else {
	                                    if (_arg1.Case === "Newline") {
	                                      return "\n";
	                                    } else {
	                                      if (_arg1.Case === "Error") {
	                                        var c = _arg1.Fields[0];
	                                        return c;
	                                      } else {
	                                        if (_arg1.Case === "EndOfFile") {
	                                          return "";
	                                        } else {
	                                          if (_arg1.Case === "By") {
	                                            return $target30();
	                                          } else {
	                                            if (_arg1.Case === "To") {
	                                              return $target30();
	                                            } else {
	                                              return "(";
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
	
	  function formatTokenInfo(_arg1) {
	    var $target31 = function $target31() {
	      throw "Unsupported token";
	    };
	
	    if (_arg1.Case === "RParen") {
	      return "right parenthesis `)`";
	    } else {
	      if (_arg1.Case === "Equals") {
	        return "equals sign `=`";
	      } else {
	        if (_arg1.Case === "Dot") {
	          return "dot character `.`";
	        } else {
	          if (_arg1.Case === "Comma") {
	            return "comma character `,`";
	          } else {
	            if (_arg1.Case === "Let") {
	              return "`let` keyword";
	            } else {
	              if (_arg1.Case === "LSquare") {
	                return "left square bracket `[`";
	              } else {
	                if (_arg1.Case === "RSquare") {
	                  return "right square bracket `]`";
	                } else {
	                  if (_arg1.Case === "Fun") {
	                    return "`fun` keyword";
	                  } else {
	                    if (_arg1.Case === "Arrow") {
	                      return "arrow sign `->`";
	                    } else {
	                      if (_arg1.Case === "Operator") {
	                        if (_arg1.Fields[0].Case === "Divide") {
	                          return "division sign `/`";
	                        } else {
	                          if (_arg1.Fields[0].Case === "GreaterThan") {
	                            return "greater than sign `>`";
	                          } else {
	                            if (_arg1.Fields[0].Case === "GreaterThanOrEqual") {
	                              return "greater than or equals sign `>=`";
	                            } else {
	                              if (_arg1.Fields[0].Case === "LessThan") {
	                                return "less than sign `<`";
	                              } else {
	                                if (_arg1.Fields[0].Case === "LessThanOrEqual") {
	                                  return "less than or equals sign `<=`";
	                                } else {
	                                  if (_arg1.Fields[0].Case === "Minus") {
	                                    return "minus sign `-`";
	                                  } else {
	                                    if (_arg1.Fields[0].Case === "Multiply") {
	                                      return "multiplication sign `*`";
	                                    } else {
	                                      if (_arg1.Fields[0].Case === "Plus") {
	                                        return "plus sign `+`";
	                                      } else {
	                                        if (_arg1.Fields[0].Case === "Power") {
	                                          return "exponentiation sign `^`";
	                                        } else {
	                                          return "equals operator `=`";
	                                        }
	                                      }
	                                    }
	                                  }
	                                }
	                              }
	                            }
	                          }
	                        }
	                      } else {
	                        if (_arg1.Case === "Boolean") {
	                          if (_arg1.Fields[0]) {
	                            return "logical `true` value";
	                          } else {
	                            return "logical `false` value";
	                          }
	                        } else {
	                          if (_arg1.Case === "Number") {
	                            var s = _arg1.Fields[0];
	                            return _fableCore.String.fsFormat("numerical value `%s`")(function (x) {
	                              return x;
	                            })(s);
	                          } else {
	                            if (_arg1.Case === "String") {
	                              var _s2 = _arg1.Fields[0];
	                              return _fableCore.String.fsFormat("string value `%s`")(function (x) {
	                                return x;
	                              })(_fableCore.String.replace(_s2, "`", "'"));
	                            } else {
	                              if (_arg1.Case === "Ident") {
	                                var i = _arg1.Fields[0];
	                                return _fableCore.String.fsFormat("identifer `%s`")(function (x) {
	                                  return x;
	                                })(i);
	                              } else {
	                                if (_arg1.Case === "QIdent") {
	                                  var q = _arg1.Fields[0];
	                                  return _fableCore.String.fsFormat("quoted identifer `'%s'`")(function (x) {
	                                    return x;
	                                  })(q);
	                                } else {
	                                  if (_arg1.Case === "White") {
	                                    var w = _arg1.Fields[0];
	                                    return "whitespace";
	                                  } else {
	                                    if (_arg1.Case === "Newline") {
	                                      return "end of line";
	                                    } else {
	                                      if (_arg1.Case === "Error") {
	                                        if (_arg1.Fields[0] === "`") {
	                                          return "back-tick character";
	                                        } else {
	                                          var c = _arg1.Fields[0];
	                                          return _fableCore.String.fsFormat("other character `%s`")(function (x) {
	                                            return x;
	                                          })(c);
	                                        }
	                                      } else {
	                                        if (_arg1.Case === "EndOfFile") {
	                                          return "end of file";
	                                        } else {
	                                          if (_arg1.Case === "By") {
	                                            return $target31();
	                                          } else {
	                                            if (_arg1.Case === "To") {
	                                              return $target31();
	                                            } else {
	                                              return "left parenthesis `(`";
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
	
	  function formatTokens(tokens) {
	    return _fableCore.String.join("", _fableCore.Seq.map(function (t) {
	      return formatToken(t.Token);
	    }, tokens));
	  }
	
	  function formatEntityKind(_arg1) {
	    return _arg1.Case === "Variable" ? "variable" : _arg1.Case === "Binding" ? "binding" : _arg1.Case === "Operator" ? function () {
	      var op = _arg1.Fields[1];
	      return formatToken(new _ast.TokenKind("Operator", [op])) + " operator";
	    }() : _arg1.Case === "List" ? "list" : _arg1.Case === "Constant" ? _arg1.Fields[0].Case === "Number" ? function () {
	      var n = _arg1.Fields[0].Fields[0];
	      return _fableCore.String.fsFormat("number `%f`")(function (x) {
	        return x;
	      })(n);
	    }() : _arg1.Fields[0].Case === "String" ? function () {
	      var n = _arg1.Fields[0].Fields[0];
	      return _fableCore.String.fsFormat("string `%s`")(function (x) {
	        return x;
	      })(n);
	    }() : _arg1.Fields[0].Case === "Boolean" ? _arg1.Fields[0].Fields[0] ? "`true` value" : "`false` value" : "empty value" : _arg1.Case === "Function" ? "function" : _arg1.Case === "LetCommand" ? "let command" : _arg1.Case === "RunCommand" ? "run command" : _arg1.Case === "Program" ? "program" : _arg1.Case === "Root" ? "root" : _arg1.Case === "CallSite" ? "call site" : _arg1.Case === "NamedParam" ? "named param" : _arg1.Case === "ChainElement" ? "chain element" : _arg1.Case === "ArgumentList" ? "argument list" : _arg1.Case === "NamedMember" ? "property or method" : "global value";
	  }
	
	  var anonymous = exports.anonymous = "";
	
	  function entityCodeNameAndAntecedents(_arg1) {
	    return _arg1.Case === "Program" ? function () {
	      var ans = _arg1.Fields[0];
	      return [1, ans, anonymous];
	    }() : _arg1.Case === "RunCommand" ? function () {
	      var an = _arg1.Fields[0];
	      return [2, _fableCore.List.ofArray([an]), anonymous];
	    }() : _arg1.Case === "LetCommand" ? function () {
	      var an1 = _arg1.Fields[0];
	      var an2 = _arg1.Fields[1];
	      return [3, _fableCore.List.ofArray([an1, an2]), anonymous];
	    }() : _arg1.Case === "Operator" ? function () {
	      var an1 = _arg1.Fields[0];
	      var an2 = _arg1.Fields[2];
	      var op = _arg1.Fields[1];
	      return [4, _fableCore.List.ofArray([an1, an2]), formatToken(new _ast.TokenKind("Operator", [op]))];
	    }() : _arg1.Case === "List" ? function () {
	      var ans = _arg1.Fields[0];
	      return [5, ans, anonymous];
	    }() : _arg1.Case === "Constant" ? _arg1.Fields[0].Case === "Number" ? function () {
	      var n = _arg1.Fields[0].Fields[0];
	      return [7, new _fableCore.List(), String(n)];
	    }() : _arg1.Fields[0].Case === "Boolean" ? function () {
	      var b = _arg1.Fields[0].Fields[0];
	      return [8, new _fableCore.List(), String(b)];
	    }() : _arg1.Fields[0].Case === "Empty" ? [9, new _fableCore.List(), anonymous] : function () {
	      var s = _arg1.Fields[0].Fields[0];
	      return [6, new _fableCore.List(), s];
	    }() : _arg1.Case === "Function" ? function () {
	      var an1 = _arg1.Fields[0];
	      var an2 = _arg1.Fields[1];
	      return [10, _fableCore.List.ofArray([an1, an2]), anonymous];
	    }() : _arg1.Case === "GlobalValue" ? function () {
	      var n = _arg1.Fields[0];
	      return [11, new _fableCore.List(), n.Name];
	    }() : _arg1.Case === "Variable" ? function () {
	      var an = _arg1.Fields[1];
	      var n = _arg1.Fields[0];
	      return [12, _fableCore.List.ofArray([an]), n.Name];
	    }() : _arg1.Case === "Binding" ? function () {
	      var an = _arg1.Fields[1];
	      var n = _arg1.Fields[0];
	      return [13, _fableCore.List.ofArray([an]), n.Name];
	    }() : _arg1.Case === "ArgumentList" ? function () {
	      var ans = _arg1.Fields[0];
	      return [14, ans, anonymous];
	    }() : _arg1.Case === "CallSite" ? _arg1.Fields[2].Case === "Choice2Of2" ? function () {
	      var an1 = _arg1.Fields[0];
	      var m = _arg1.Fields[2].Fields[0];
	      var n = _arg1.Fields[1];
	      return [16, _fableCore.List.ofArray([an1]), n.Name + "." + String(m)];
	    }() : function () {
	      var an1 = _arg1.Fields[0];
	      var n = _arg1.Fields[1];
	      var s = _arg1.Fields[2].Fields[0];
	      return [15, _fableCore.List.ofArray([an1]), n.Name + "." + s];
	    }() : _arg1.Case === "NamedParam" ? function () {
	      var an = _arg1.Fields[1];
	      var n = _arg1.Fields[0];
	      return [17, _fableCore.List.ofArray([an]), n.Name];
	    }() : _arg1.Case === "NamedMember" ? function () {
	      var an = _arg1.Fields[1];
	      var n = _arg1.Fields[0];
	      return [18, _fableCore.List.ofArray([an]), n.Name];
	    }() : _arg1.Case === "ChainElement" ? function () {
	      var an1 = _arg1.Fields[2];
	      var an2 = _arg1.Fields[3];
	      var an3 = _arg1.Fields[4];
	      var b = _arg1.Fields[0];
	      var n = _arg1.Fields[1];
	      return [19, _fableCore.List.choose(function (x) {
	        return x;
	      }, _fableCore.List.ofArray([an1, an2, an3])), n.Name + "." + String(b)];
	    }() : [0, new _fableCore.List(), anonymous];
	  }
	
	  function Entity_get_Antecedents() {
	    var patternInput = entityCodeNameAndAntecedents(this.Kind);
	    return patternInput[1];
	  }
	
	  exports.Entity$2Eget_Antecedents = Entity_get_Antecedents;
	
	  function Entity_get_Name() {
	    var patternInput = entityCodeNameAndAntecedents(this.Kind);
	    return patternInput[2];
	  }
	
	  exports.Entity$2Eget_Name = Entity_get_Name;
	
	  function formatType(_arg1) {
	    return _arg1.Case === "Forall" ? function () {
	      var t = _arg1.Fields[1];
	      return formatType(t);
	    }() : _arg1.Case === "Parameter" ? function () {
	      var v = _arg1.Fields[0];
	      return v;
	    }() : _arg1.Case === "Delayed" ? function () {
	      var g = _arg1.Fields[0];
	      return "@" + g;
	    }() : _arg1.Case === "Primitive" ? _arg1.Fields[0].Case === "Number" ? "number" : _arg1.Fields[0].Case === "String" ? "string" : _arg1.Fields[0].Case === "Unit" ? "unit" : "bool" : _arg1.Case === "Object" ? function () {
	      var mem = _arg1.Fields[0].Members;
	
	      var mems = _fableCore.String.join(", ", _fableCore.Seq.map(function (m) {
	        return m.Name;
	      }, _fableCore.Seq.truncate(5, mem)));
	
	      return "{ " + (mem.length > 5 ? mems + ", ..." : mems + " }");
	    }() : _arg1.Case === "Function" ? function () {
	      var tin = _arg1.Fields[0];
	      var tout = _arg1.Fields[1];
	      return "(" + _fableCore.String.join(", ", _fableCore.List.map(function (_arg1_1) {
	        return formatType(_arg1_1);
	      }, tin)) + ") -> " + formatType(tout);
	    }() : _arg1.Case === "List" ? function () {
	      var t = _arg1.Fields[0];
	      return "list<" + formatType(t) + ">";
	    }() : _arg1.Case === "Any" ? "any" : function () {
	      var t = _arg1.Fields[0];
	      var tya = _arg1.Fields[1];
	      return formatType(t) + "<" + _fableCore.String.join(", ", _fableCore.List.map(function (_arg1_1) {
	        return formatType(_arg1_1);
	      }, tya)) + ">";
	    }();
	  }
	
	  function formatTypeInfo(_arg1) {
	    return _arg1.Case === "Parameter" ? "unresolved type parameter" : _arg1.Case === "App" ? "unresolved type application" : _arg1.Case === "Delayed" ? "delayed type" : _arg1.Case === "Primitive" ? _arg1.Fields[0].Case === "Number" ? "number" : _arg1.Fields[0].Case === "String" ? "string" : _arg1.Fields[0].Case === "Unit" ? "unit" : "boolean" : _arg1.Case === "Object" ? "object type" : _arg1.Case === "Function" ? "function type" : _arg1.Case === "List" ? "list type" : _arg1.Case === "Any" ? "unknown" : "generic type";
	  }
	
	  function rebuildExprNode(e, es, ns) {
	    var matchValue = [e, es, ns];
	
	    var $target6 = function $target6() {
	      throw "rebuildExprNode: Wrong variable length";
	    };
	
	    var $target7 = function $target7() {
	      throw "rebuildExprNode: Wrong property length";
	    };
	
	    var $target8 = function $target8() {
	      throw "rebuildExprNode: Wrong call length";
	    };
	
	    var $target10 = function $target10() {
	      throw "rebuildExprNode: Wrong function length";
	    };
	
	    var $target11 = function $target11() {
	      throw "rebuildExprNode: Wrong binary operator argument length";
	    };
	
	    var $target12 = function $target12() {
	      throw "rebuildExprNode: Not a node";
	    };
	
	    if (matchValue[0].Case === "Function") {
	      if (matchValue[1].tail != null) {
	        if (matchValue[1].tail.tail == null) {
	          if (matchValue[2].tail != null) {
	            if (matchValue[2].tail.tail == null) {
	              var e_1 = matchValue[1].head;
	              var n = matchValue[2].head;
	              return new _ast.Expr("Function", [n, e_1]);
	            } else {
	              return $target10();
	            }
	          } else {
	            return $target10();
	          }
	        } else {
	          return $target10();
	        }
	      } else {
	        return $target10();
	      }
	    } else {
	      if (matchValue[0].Case === "Property") {
	        if (matchValue[1].tail != null) {
	          if (matchValue[1].tail.tail == null) {
	            if (matchValue[2].tail != null) {
	              if (matchValue[2].tail.tail == null) {
	                var _e_ = matchValue[1].head;
	                var _n = matchValue[2].head;
	                return new _ast.Expr("Property", [_e_, _n]);
	              } else {
	                return $target7();
	              }
	            } else {
	              return $target7();
	            }
	          } else {
	            return $target7();
	          }
	        } else {
	          return $target7();
	        }
	      } else {
	        if (matchValue[0].Case === "Binary") {
	          if (matchValue[1].tail != null) {
	            if (matchValue[1].tail.tail != null) {
	              if (matchValue[1].tail.tail.tail == null) {
	                if (matchValue[2].tail == null) {
	                  var e1 = matchValue[1].head;
	                  var e2 = matchValue[1].tail.head;
	                  var op = matchValue[0].Fields[1];
	                  return new _ast.Expr("Binary", [e1, op, e2]);
	                } else {
	                  return $target11();
	                }
	              } else {
	                return $target11();
	              }
	            } else {
	              return $target11();
	            }
	          } else {
	            return $target11();
	          }
	        } else {
	          if (matchValue[0].Case === "Call") {
	            if (matchValue[1].tail != null) {
	              if (matchValue[2].tail != null) {
	                var _ret = function () {
	                  var args = matchValue[0].Fields[2];
	                  var e_1 = matchValue[1].head;
	                  var es_1 = matchValue[1].tail;
	                  var inst = matchValue[0].Fields[0];
	                  var n = matchValue[2].head;
	                  var ns_1 = matchValue[2].tail;
	                  {
	                    var _ret2 = function () {
	                      var patternInput = function () {
	                        return inst != null;
	                      }() ? [e_1, es_1] : [null, _fableCore.List.ofArray([e_1], es_1)];
	
	                      var rebuildArgs = function rebuildArgs(args_1) {
	                        return function (es_2) {
	                          return function (ns_2) {
	                            var matchValue_1 = [args_1, es_2, ns_2];
	
	                            var $target3 = function $target3() {
	                              throw "rebuildExprNode: Wrong call length";
	                            };
	
	                            if (matchValue_1[0].tail == null) {
	                              if (matchValue_1[1].tail == null) {
	                                if (matchValue_1[2].tail == null) {
	                                  return new _fableCore.List();
	                                } else {
	                                  return $target3();
	                                }
	                              } else {
	                                return $target3();
	                              }
	                            } else {
	                              if (matchValue_1[0].head.Name != null) {
	                                if (matchValue_1[1].tail != null) {
	                                  if (matchValue_1[2].tail != null) {
	                                    var args_2 = matchValue_1[0].tail;
	                                    var e_2 = matchValue_1[1].head;
	                                    var es_3 = matchValue_1[1].tail;
	                                    var n_1 = matchValue_1[2].head;
	                                    var ns_3 = matchValue_1[2].tail;
	                                    return _fableCore.List.ofArray([new _ast.Argument(n_1, e_2)], rebuildArgs(args_2)(es_3)(ns_3));
	                                  } else {
	                                    return $target3();
	                                  }
	                                } else {
	                                  return $target3();
	                                }
	                              } else {
	                                if (matchValue_1[1].tail != null) {
	                                  var _args_ = matchValue_1[0].tail;
	                                  var _e_2 = matchValue_1[1].head;
	                                  var _es_ = matchValue_1[1].tail;
	                                  var _ns_ = matchValue_1[2];
	                                  return _fableCore.List.ofArray([new _ast.Argument(null, _e_2)], rebuildArgs(_args_)(_es_)(_ns_));
	                                } else {
	                                  return $target3();
	                                }
	                              }
	                            }
	                          };
	                        };
	                      };
	
	                      return {
	                        v: {
	                          v: new _ast.Expr("Call", [patternInput[0], n, function () {
	                            var _Node = rebuildArgs(args.Node)(patternInput[1])(ns_1);
	
	                            return new _ast.Node(args.WhiteBefore, args.WhiteAfter, args.Range, _Node, args.Entity);
	                          }()])
	                        }
	                      };
	                    }();
	
	                    if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	                  }
	                }();
	
	                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	              } else {
	                return $target8();
	              }
	            } else {
	              return $target8();
	            }
	          } else {
	            if (matchValue[0].Case === "Variable") {
	              if (matchValue[1].tail == null) {
	                if (matchValue[2].tail != null) {
	                  if (matchValue[2].tail.tail == null) {
	                    var _n2 = matchValue[2].head;
	                    return new _ast.Expr("Variable", [_n2]);
	                  } else {
	                    return $target6();
	                  }
	                } else {
	                  return $target6();
	                }
	              } else {
	                return $target6();
	              }
	            } else {
	              if (matchValue[0].Case === "Number") {
	                return $target12();
	              } else {
	                if (matchValue[0].Case === "Boolean") {
	                  return $target12();
	                } else {
	                  if (matchValue[0].Case === "String") {
	                    return $target12();
	                  } else {
	                    if (matchValue[0].Case === "Empty") {
	                      return $target12();
	                    } else {
	                      if (matchValue[2].tail == null) {
	                        var els = matchValue[1];
	                        return new _ast.Expr("List", [els]);
	                      } else {
	                        throw "rebuildExprNode: Wrong list length";
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
	
	  function $ExprLeaf$ExprNode$(e) {
	    var $target7 = function $target7() {
	      return new _fableCore.Choice("Choice1Of2", [null]);
	    };
	
	    if (e.Case === "Call") {
	      if (e.Fields[0] == null) {
	        var _ret3 = function () {
	          var args = e.Fields[2];
	          var n = e.Fields[1];
	          return {
	            v: new _fableCore.Choice("Choice2Of2", [[_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	              return _fableCore.Seq.map(function (a) {
	                return a.Value;
	              }, args.Node);
	            })), _fableCore.List.ofArray([n], _fableCore.List.choose(function (a) {
	              return a.Name;
	            }, args.Node))]])
	          };
	        }();
	
	        if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
	      } else {
	        var _ret4 = function () {
	          var args = e.Fields[2];
	          var e_1 = e.Fields[0];
	          var n = e.Fields[1];
	          return {
	            v: new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([e_1], _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	              return _fableCore.Seq.map(function (a) {
	                return a.Value;
	              }, args.Node);
	            }))), _fableCore.List.ofArray([n], _fableCore.List.choose(function (a) {
	              return a.Name;
	            }, args.Node))]])
	          };
	        }();
	
	        if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	      }
	    } else {
	      if (e.Case === "Variable") {
	        var _n3 = e.Fields[0];
	        return new _fableCore.Choice("Choice2Of2", [[new _fableCore.List(), _fableCore.List.ofArray([_n3])]]);
	      } else {
	        if (e.Case === "List") {
	          var els = e.Fields[0];
	          return new _fableCore.Choice("Choice2Of2", [[els, new _fableCore.List()]]);
	        } else {
	          if (e.Case === "Function") {
	            var b = e.Fields[1];
	            var _n4 = e.Fields[0];
	            return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([b]), _fableCore.List.ofArray([_n4])]]);
	          } else {
	            if (e.Case === "Binary") {
	              var l = e.Fields[0];
	              var op = e.Fields[1];
	              var r = e.Fields[2];
	              return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([l, r]), new _fableCore.List()]]);
	            } else {
	              if (e.Case === "Number") {
	                return $target7();
	              } else {
	                if (e.Case === "Boolean") {
	                  return $target7();
	                } else {
	                  if (e.Case === "String") {
	                    return $target7();
	                  } else {
	                    if (e.Case === "Empty") {
	                      return $target7();
	                    } else {
	                      var _e_3 = e.Fields[0];
	                      var _n5 = e.Fields[1];
	                      return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([_e_3]), _fableCore.List.ofArray([_n5])]]);
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
	});


/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(1), __webpack_require__(13), __webpack_require__(20), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./../ast/ast"), require("../../libraries/common"), require("./../ast/typeops"), require("./../ast/errors"), require("./../ast/astops"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.ast, global.common, global.typeops, global.errors, global.astops);
	    global.typechecker = mod.exports;
	  }
	})(this, function (exports, _fableCore, _ast, _common, _typeops, _errors, _astops) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.CheckingContext = undefined;
	  exports.addError = addError;
	  exports.$FindProperty$_$ = $FindProperty$_$;
	  exports.$FindMethod$_$ = $FindMethod$_$;
	  exports.inferListType = inferListType;
	  exports.resolveParameterType = resolveParameterType;
	  exports.checkMethodCall = checkMethodCall;
	  exports.getType = getType;
	  exports.typeCheckEntity = typeCheckEntity;
	  exports.evaluateDelayedType = evaluateDelayedType;
	  exports.typeCheckEntityAsync = typeCheckEntityAsync;
	  exports.collectTypeErrors = collectTypeErrors;
	  exports.typeCheckProgram = typeCheckProgram;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
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
	
	  var CheckingContext = exports.CheckingContext = function () {
	    function CheckingContext(errors, globals, ranges) {
	      _classCallCheck(this, CheckingContext);
	
	      this.Errors = errors;
	      this.Globals = globals;
	      this.Ranges = ranges;
	    }
	
	    _createClass(CheckingContext, [{
	      key: "Equals",
	      value: function Equals(other) {
	        return _fableCore.Util.equalsRecords(this, other);
	      }
	    }]);
	
	    return CheckingContext;
	  }();
	
	  _fableCore.Util.setInterfaces(CheckingContext.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.TypeChecker.CheckingContext");
	
	  function addError(ctx, ent, err) {
	    ctx.Errors.push(err(ctx.Ranges.get(ent.Symbol)));
	  }
	
	  function $FindProperty$_$(name, _arg1) {
	    return _fableCore.Seq.tryPick(function (_arg2) {
	      var $target1 = function $target1() {
	        return null;
	      };
	
	      if (_arg2.Case === "Property") {
	        if (_arg2.Fields[0] === name.Name) {
	          var m = _arg2.Fields[2];
	          var n = _arg2.Fields[0];
	          var r = _arg2.Fields[1];
	          return [m, r];
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }, _arg1.Members);
	  }
	
	  function $FindMethod$_$(name, _arg1) {
	    return _fableCore.Seq.tryPick(function (_arg2) {
	      var $target1 = function $target1() {
	        return null;
	      };
	
	      if (_arg2.Case === "Method") {
	        if (_arg2.Fields[0] === name.Name) {
	          var args = _arg2.Fields[1];
	          var m = _arg2.Fields[3];
	          var n = _arg2.Fields[0];
	          var r = _arg2.Fields[2];
	          return [m, args, r];
	        } else {
	          return $target1();
	        }
	      } else {
	        return $target1();
	      }
	    }, _arg1.Members);
	  }
	
	  function inferListType(typs) {
	    return _fableCore.Seq.reduce(function (f) {
	      return function (x, y) {
	        return f(x) > f(y) ? x : y;
	      };
	    }(function (tuple) {
	      return tuple[1];
	    }), _fableCore.List.append(_fableCore.List.ofArray([[new _ast.Type("Any", []), 0]]), _fableCore.List.map(function (g) {
	      return [g.head, g.length];
	    }, function (list) {
	      return _common.List.groupWith(_typeops.typesEqual, list);
	    }(_fableCore.List.filter(function (_arg1) {
	      return _arg1.Case === "Any" ? false : true;
	    }, typs)))))[0];
	  }
	
	  function resolveParameterType(instTy, methName, parSpec) {
	    var $target1 = function $target1() {
	      throw "resolveParameterType: Instance is not an object";
	    };
	
	    if (instTy.Case === "Object") {
	      var activePatternResult5103 = $FindMethod$_$(methName, instTy.Fields[0]);
	
	      if (activePatternResult5103 != null) {
	        var args = activePatternResult5103[1];
	
	        if (parSpec.Case === "Choice2Of2") {
	          var patternInput = _fableCore.Seq.item(parSpec.Fields[0], args);
	
	          return patternInput[2];
	        } else {
	          return _fableCore.Seq.pick(function (tupledArg) {
	            return tupledArg[0] === parSpec.Fields[0] ? tupledArg[2] : null;
	          }, args);
	        }
	      } else {
	        return $target1();
	      }
	    } else {
	      return $target1();
	    }
	  }
	
	  function checkMethodCall(ctx, memTy, pars, argList, args) {
	    var patternInput = function () {
	      var pb = _fableCore.Seq.toList(_fableCore.Seq.takeWhile(function (_arg1) {
	        return _arg1.Kind.Case === "NamedParam" ? false : true;
	      }, args));
	
	      var nb = _fableCore.Seq.toList(_fableCore.Seq.skipWhile(function (_arg2) {
	        return _arg2.Kind.Case === "NamedParam" ? false : true;
	      }, args));
	
	      return [Array.from(pb), _fableCore.Map.create(_fableCore.List.choose(function (arg) {
	        return arg.Kind.Case === "NamedParam" ? [arg.Kind.Fields[0].Name, arg.Kind.Fields[1]] : function () {
	          (function (err) {
	            addError(ctx, arg, err);
	          })(function (rng) {
	            return _errors.TypeChecker.nameBasedParamMustBeLast(rng);
	          });
	
	          return null;
	        }();
	      }, nb), new _fableCore.GenericComparer(function (x, y) {
	        return x < y ? -1 : x > y ? 1 : 0;
	      }))];
	    }();
	
	    var matchedArguments = _fableCore.List.mapIndexed(function (index, tupledArg) {
	      var arg = index < patternInput[0].length ? patternInput[0][index] : _fableCore.Map.tryFind(tupledArg[0], patternInput[1]);
	
	      if (arg == null) {
	        if (tupledArg[1]) {
	          return [tupledArg[0], tupledArg[2], tupledArg[2], null];
	        } else {
	          if (arg == null) {
	            (function (err) {
	              addError(ctx, argList, err);
	            })(function (rng) {
	              return _errors.TypeChecker.parameterMissingValue(tupledArg[0], rng);
	            });
	
	            return [tupledArg[0], tupledArg[2], new _ast.Type("Any", []), null];
	          } else {
	            throw ["C:\\Tomas\\Public\\thegamma\\thegamma-script\\src\\thegamma\\analyzer/typechecker.fs", 72, 12];
	          }
	        }
	      } else {
	        return [tupledArg[0], tupledArg[2], getType(ctx, arg), arg];
	      }
	    }, pars);
	
	    var patternInput_1 = memTy.Case === "Forall" ? [memTy.Fields[0], memTy.Fields[1]] : [new _fableCore.List(), memTy];
	
	    var assigns = _fableCore.List.collect(function (tupledArg) {
	      var patternInput_2 = (0, _typeops.unifyTypes)(patternInput_1[0], tupledArg[1], tupledArg[2]);
	
	      if (function () {
	        return tupledArg[3] != null;
	      }()) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          var _loop = function _loop() {
	            var forLoopVar = _step.value;
	            (function () {
	              var ent = tupledArg[3];
	              return function (err) {
	                addError(ctx, ent, err);
	              };
	            })()(function (rng) {
	              return _errors.TypeChecker.incorrectParameterType(tupledArg[0], tupledArg[1], tupledArg[2], forLoopVar[0], forLoopVar[1], rng);
	            });
	          };
	
	          for (var _iterator = patternInput_2[1][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
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
	
	      return patternInput_2[0];
	    }, matchedArguments);
	
	    {
	      var inputSequence = _fableCore.Seq.toList(_fableCore.Seq.groupBy(function (tuple) {
	        return tuple[0];
	      }, assigns));
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = inputSequence[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _forLoopVar = _step2.value;
	
	          var $target1 = function $target1() {};
	
	          if (_forLoopVar[1].tail != null) {
	            if (_forLoopVar[1].tail.tail != null) {
	              (function () {
	                var t1 = _forLoopVar[1].head[1];
	                var ts = _forLoopVar[1].tail;
	                var v = _forLoopVar[1].head[0];
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;
	
	                try {
	                  var _loop2 = function _loop2() {
	                    var forLoopVar_1 = _step3.value;
	
	                    (function (err) {
	                      addError(ctx, argList, err);
	                    })(function (rng) {
	                      return _errors.TypeChecker.inferenceConflict(v, t1, forLoopVar_1[1], rng);
	                    });
	                  };
	
	                  for (var _iterator3 = ts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    _loop2();
	                  }
	                } catch (err) {
	                  _didIteratorError3 = true;
	                  _iteratorError3 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                      _iterator3.return();
	                    }
	                  } finally {
	                    if (_didIteratorError3) {
	                      throw _iteratorError3;
	                    }
	                  }
	                }
	              })();
	            } else {
	              $target1();
	            }
	          } else {
	            $target1();
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	    var res = (0, _typeops.substituteTypes)(_fableCore.Map.create(assigns, new _fableCore.GenericComparer(function (x, y) {
	      return x < y ? -1 : x > y ? 1 : 0;
	    })), patternInput_1[1]);
	    return res;
	  }
	
	  function getType(ctx, e) {
	    if (function () {
	      return e.Type == null;
	    }()) {
	      (function () {
	        var errorCount = ctx.Errors.length;
	        e.Type = typeCheckEntity(ctx, e);
	        e.Errors = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	          return _fableCore.Seq.map(function (i) {
	            return ctx.Errors[i];
	          }, _fableCore.Seq.range(errorCount, ctx.Errors.length - 1));
	        }));
	      })();
	    }
	
	    return e.Type;
	  }
	
	  function typeCheckEntity(ctx, e) {
	    var $target4 = function $target4(ident, name) {
	      (function (err) {
	        addError(ctx, ident, err);
	      })(function (rng) {
	        return _errors.TypeChecker.callMissingInstance(name.Name, rng);
	      });
	
	      return new _ast.Type("Any", []);
	    };
	
	    var $target5 = function $target5(name) {
	      throw _fableCore.String.fsFormat("typeCheckEntity: Call to %s is missing argument list!")(function (x) {
	        return x;
	      })(name.Name);
	    };
	
	    if (e.Kind.Case === "Variable") {
	      var inst = e.Kind.Fields[1];
	      return getType(ctx, inst);
	    } else {
	      if (e.Kind.Case === "ChainElement") {
	        if (e.Kind.Fields[0]) {
	          if (e.Kind.Fields[3] == null) {
	            return $target4(e.Kind.Fields[2], e.Kind.Fields[1]);
	          } else {
	            var _ret5 = function () {
	              var ident = e.Kind.Fields[2];
	              var inst = e.Kind.Fields[3];
	              var name = e.Kind.Fields[1];
	              {
	                var _ret6 = function () {
	                  var matchValue = (0, _typeops.reduceType)(getType(ctx, inst));
	
	                  var $target2 = function $target2() {
	                    return matchValue.Case === "Object" ? function () {
	                      var members = matchValue.Fields[0].Members;
	
	                      (function (err) {
	                        addError(ctx, ident, err);
	                      })(function (rng) {
	                        return _errors.TypeChecker.propertyMissing(name.Name, members, rng);
	                      });
	
	                      return new _ast.Type("Any", []);
	                    }() : function () {
	                      (function (err) {
	                        addError(ctx, inst, err);
	                      })(function (rng) {
	                        return _errors.TypeChecker.notAnObject(name.Name, matchValue, rng);
	                      });
	
	                      return new _ast.Type("Any", []);
	                    }();
	                  };
	
	                  if (matchValue.Case === "Any") {
	                    return {
	                      v: {
	                        v: new _ast.Type("Any", [])
	                      }
	                    };
	                  } else {
	                    if (matchValue.Case === "Object") {
	                      var activePatternResult5135 = $FindProperty$_$(name, matchValue.Fields[0]);
	
	                      if (activePatternResult5135 != null) {
	                        var meta = activePatternResult5135[0];
	                        var resTyp = activePatternResult5135[1];
	                        {
	                          e.Meta = meta;
	                          return {
	                            v: {
	                              v: resTyp
	                            }
	                          };
	                        }
	                      } else {
	                        return {
	                          v: {
	                            v: $target2()
	                          }
	                        };
	                      }
	                    } else {
	                      return {
	                        v: {
	                          v: $target2()
	                        }
	                      };
	                    }
	                  }
	                }();
	
	                if ((typeof _ret6 === "undefined" ? "undefined" : _typeof(_ret6)) === "object") return _ret6.v;
	              }
	            }();
	
	            if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
	          }
	        } else {
	          if (e.Kind.Fields[3] == null) {
	            return $target4(e.Kind.Fields[2], e.Kind.Fields[1]);
	          } else {
	            if (e.Kind.Fields[4] != null) {
	              if (e.Kind.Fields[4].Kind.Case === "ArgumentList") {
	                var _ret7 = function () {
	                  var arglist = e.Kind.Fields[4];
	                  var ents = e.Kind.Fields[4].Kind.Fields[0];
	                  var ident = e.Kind.Fields[2];
	                  var inst = e.Kind.Fields[3];
	                  var name = e.Kind.Fields[1];
	                  {
	                    var _ret8 = function () {
	                      var matchValue = (0, _typeops.reduceType)(getType(ctx, inst));
	
	                      var $target2 = function $target2() {
	                        return matchValue.Case === "Object" ? function () {
	                          var members = matchValue.Fields[0].Members;
	
	                          (function (err) {
	                            addError(ctx, ident, err);
	                          })(function (rng) {
	                            return _errors.TypeChecker.methodMissing(name.Name, members, rng);
	                          });
	
	                          return new _ast.Type("Any", []);
	                        }() : function () {
	                          (function (err) {
	                            addError(ctx, inst, err);
	                          })(function (rng) {
	                            return _errors.TypeChecker.notAnObject(name.Name, matchValue, rng);
	                          });
	
	                          return new _ast.Type("Any", []);
	                        }();
	                      };
	
	                      if (matchValue.Case === "Any") {
	                        return {
	                          v: {
	                            v: new _ast.Type("Any", [])
	                          }
	                        };
	                      } else {
	                        if (matchValue.Case === "Object") {
	                          var activePatternResult5137 = $FindMethod$_$(name, matchValue.Fields[0]);
	
	                          if (activePatternResult5137 != null) {
	                            var args = activePatternResult5137[1];
	                            var meta = activePatternResult5137[0];
	                            var resTyp = activePatternResult5137[2];
	                            {
	                              e.Meta = meta;
	                              return {
	                                v: {
	                                  v: checkMethodCall(ctx, resTyp, args, arglist, ents)
	                                }
	                              };
	                            }
	                          } else {
	                            return {
	                              v: {
	                                v: $target2()
	                              }
	                            };
	                          }
	                        } else {
	                          return {
	                            v: {
	                              v: $target2()
	                            }
	                          };
	                        }
	                      }
	                    }();
	
	                    if ((typeof _ret8 === "undefined" ? "undefined" : _typeof(_ret8)) === "object") return _ret8.v;
	                  }
	                }();
	
	                if ((typeof _ret7 === "undefined" ? "undefined" : _typeof(_ret7)) === "object") return _ret7.v;
	              } else {
	                return $target5(e.Kind.Fields[1]);
	              }
	            } else {
	              return $target5(e.Kind.Fields[1]);
	            }
	          }
	        }
	      } else {
	        if (e.Kind.Case === "Operator") {
	          var _ret9 = function () {
	            var l = e.Kind.Fields[0];
	            var operator = e.Kind.Fields[1];
	            var r = e.Kind.Fields[2];
	            {
	              _fableCore.Seq.iterateIndexed(function (idx, operand) {
	                var typ = getType(ctx, operand);
	
	                if (!(0, _typeops.typesEqual)(typ)(new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]))) {
	                  (function (err) {
	                    addError(ctx, operand, err);
	                  })(function (rng) {
	                    return _errors.TypeChecker.numericOperatorExpectsNumbers(operator, idx, typ, rng);
	                  });
	                }
	              }, _fableCore.List.ofArray([l, r]));
	
	              return {
	                v: new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])])
	              };
	            }
	          }();
	
	          if ((typeof _ret9 === "undefined" ? "undefined" : _typeof(_ret9)) === "object") return _ret9.v;
	        } else {
	          if (e.Kind.Case === "List") {
	            var _ret10 = function () {
	              var elems = e.Kind.Fields[0];
	
	              var typs = _fableCore.List.map(function (e_1) {
	                return getType(ctx, e_1);
	              }, elems);
	
	              var typ = inferListType(typs);
	              var _iteratorNormalCompletion4 = true;
	              var _didIteratorError4 = false;
	              var _iteratorError4 = undefined;
	
	              try {
	                var _loop3 = function _loop3() {
	                  var a = _step4.value;
	                  var elty = getType(ctx, a);
	
	                  if (!(0, _typeops.typesEqual)(typ)(elty)) {
	                    (function (err) {
	                      addError(ctx, a, err);
	                    })(function (rng) {
	                      return _errors.TypeChecker.listElementTypeDoesNotMatch(typ, elty, rng);
	                    });
	                  }
	                };
	
	                for (var _iterator4 = elems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                  _loop3();
	                }
	              } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                    _iterator4.return();
	                  }
	                } finally {
	                  if (_didIteratorError4) {
	                    throw _iteratorError4;
	                  }
	                }
	              }
	
	              return {
	                v: new _ast.Type("List", [typ])
	              };
	            }();
	
	            if ((typeof _ret10 === "undefined" ? "undefined" : _typeof(_ret10)) === "object") return _ret10.v;
	          } else {
	            if (e.Kind.Case === "Binding") {
	              if (e.Kind.Fields[1].Kind.Case === "CallSite") {
	                var _inst = e.Kind.Fields[1].Kind.Fields[0];
	                var methName = e.Kind.Fields[1].Kind.Fields[1];
	                var _name = e.Kind.Fields[0];
	                var parSpec = e.Kind.Fields[1].Kind.Fields[2];
	                {
	                  var matchValue = resolveParameterType((0, _typeops.reduceType)(getType(ctx, _inst)), methName, parSpec);
	
	                  var $target1 = function $target1() {
	                    throw "typeCheckEntity: Expected parameter of function type";
	                  };
	
	                  if (matchValue.Case === "Function") {
	                    if (matchValue.Fields[0].tail != null) {
	                      if (matchValue.Fields[0].tail.tail == null) {
	                        var tin = matchValue.Fields[0].head;
	                        return tin;
	                      } else {
	                        return $target1();
	                      }
	                    } else {
	                      return $target1();
	                    }
	                  } else {
	                    return $target1();
	                  }
	                }
	              } else {
	                var _name2 = e.Kind.Fields[0];
	                throw _fableCore.String.fsFormat("typeCheckEntity: Variable binding %s is missing call site!")(function (x) {
	                  return x;
	                })(_name2.Name);
	              }
	            } else {
	              if (e.Kind.Case === "Function") {
	                var body = e.Kind.Fields[1];
	                var _var = e.Kind.Fields[0];
	                return new _ast.Type("Function", [_fableCore.List.ofArray([getType(ctx, _var)]), getType(ctx, body)]);
	              } else {
	                if (e.Kind.Case === "Constant") {
	                  if (e.Kind.Fields[0].Case === "String") {
	                    return new _ast.Type("Primitive", [new _ast.PrimitiveType("String", [])]);
	                  } else {
	                    if (e.Kind.Fields[0].Case === "Boolean") {
	                      return new _ast.Type("Primitive", [new _ast.PrimitiveType("Bool", [])]);
	                    } else {
	                      if (e.Kind.Fields[0].Case === "Empty") {
	                        return new _ast.Type("Any", []);
	                      } else {
	                        return new _ast.Type("Primitive", [new _ast.PrimitiveType("Number", [])]);
	                      }
	                    }
	                  }
	                } else {
	                  if (e.Kind.Case === "Root") {
	                    return new _ast.Type("Any", []);
	                  } else {
	                    if (e.Kind.Case === "LetCommand") {
	                      return new _ast.Type("Any", []);
	                    } else {
	                      if (e.Kind.Case === "RunCommand") {
	                        return new _ast.Type("Any", []);
	                      } else {
	                        if (e.Kind.Case === "ArgumentList") {
	                          return new _ast.Type("Any", []);
	                        } else {
	                          if (e.Kind.Case === "NamedParam") {
	                            return new _ast.Type("Any", []);
	                          } else {
	                            if (e.Kind.Case === "NamedMember") {
	                              return new _ast.Type("Any", []);
	                            } else {
	                              if (e.Kind.Case === "CallSite") {
	                                return new _ast.Type("Any", []);
	                              } else {
	                                if (e.Kind.Case === "Program") {
	                                  return new _ast.Type("Any", []);
	                                } else {
	                                  var _ret12 = function () {
	                                    var name = e.Kind.Fields[0];
	
	                                    if (!ctx.Globals.has(name.Name)) {
	                                      (function (err) {
	                                        addError(ctx, e, err);
	                                      })(function (rng) {
	                                        return _errors.TypeChecker.variableNotInScope(name.Name, rng);
	                                      });
	
	                                      return {
	                                        v: new _ast.Type("Any", [])
	                                      };
	                                    } else {
	                                      return {
	                                        v: getType(ctx, ctx.Globals.get(name.Name))
	                                      };
	                                    }
	                                  }();
	
	                                  if ((typeof _ret12 === "undefined" ? "undefined" : _typeof(_ret12)) === "object") return _ret12.v;
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
	        }
	      }
	    }
	  }
	
	  function evaluateDelayedType(topLevel, t) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        var $target3 = function $target3() {
	          return t.Case === "Function" ? builder_.Bind(evaluateDelayedType(topLevel, t.Fields[1]), function (_arg6) {
	            return builder_.Bind(_common.Async.map(function (t_1) {
	              return evaluateDelayedType(topLevel, t_1);
	            }, t.Fields[0]), function (_arg7) {
	              return builder_.Return(new _ast.Type("Function", [_arg7, _arg6]));
	            });
	          }) : t.Case === "List" ? builder_.Bind(evaluateDelayedType(topLevel, t.Fields[0]), function (_arg8) {
	            return builder_.Return(new _ast.Type("List", [_arg8]));
	          }) : t.Case === "Delayed" ? builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(t.Fields[1]), function (_arg9) {
	            return builder_.ReturnFrom(evaluateDelayedType(topLevel, _arg9));
	          }) : builder_.Return(t);
	        };
	
	        if (t.Case === "App") {
	          var _ret13 = function () {
	            var args = t.Fields[1];
	            var t_1 = t.Fields[0];
	            return {
	              v: builder_.Bind(evaluateDelayedType(topLevel, t_1), function (_arg1) {
	                return builder_.Return(new _ast.Type("App", [_arg1, args]));
	              })
	            };
	          }();
	
	          if ((typeof _ret13 === "undefined" ? "undefined" : _typeof(_ret13)) === "object") return _ret13.v;
	        } else {
	          if (t.Case === "Forall") {
	            var _ret14 = function () {
	              var t_1 = t.Fields[1];
	              var vars = t.Fields[0];
	              return {
	                v: builder_.Bind(evaluateDelayedType(topLevel, t_1), function (_arg2) {
	                  return builder_.Return(new _ast.Type("Forall", [vars, _arg2]));
	                })
	              };
	            }();
	
	            if ((typeof _ret14 === "undefined" ? "undefined" : _typeof(_ret14)) === "object") return _ret14.v;
	          } else {
	            if (t.Case === "Object") {
	              if (topLevel) {
	                var obj = t.Fields[0];
	                return builder_.Bind(_common.Async.Array.map(function (m) {
	                  return function (builder__1) {
	                    return builder__1.Delay(function (unitVar_1) {
	                      return m.Case === "Method" ? builder__1.Bind(_common.Async.map(function (tupledArg) {
	                        return function (builder__2) {
	                          return builder__2.Delay(function (unitVar_2) {
	                            return builder__2.Bind(evaluateDelayedType(false, tupledArg[2]), function (_arg3) {
	                              return builder__2.Return([tupledArg[0], tupledArg[1], _arg3]);
	                            });
	                          });
	                        }(_fableCore.AsyncBuilder.singleton);
	                      }, m.Fields[1]), function (_arg4) {
	                        return builder__1.Return(new _ast.Member("Method", [m.Fields[0], _arg4, m.Fields[2], m.Fields[3], m.Fields[4]]));
	                      }) : builder__1.Return(m);
	                    });
	                  }(_fableCore.AsyncBuilder.singleton);
	                }, obj.Members), function (_arg5) {
	                  return builder_.Return(new _ast.Type("Object", [new _ast.ObjectType(_arg5)]));
	                });
	              } else {
	                return $target3();
	              }
	            } else {
	              return $target3();
	            }
	          }
	        }
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function typeCheckEntityAsync(ctx, e) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        var visited = new Map();
	
	        var loop = function loop(e_1) {
	          return function (builder__1) {
	            return builder__1.Delay(function (unitVar_1) {
	              return (!visited.has(e_1.Symbol) ? function () {
	                return e_1.Type == null;
	              }() : false) ? function () {
	                visited.set(e_1.Symbol, true);
	                return builder__1.Combine(builder__1.For(_astops.Entity$2Eget_Antecedents.bind(e_1)(), function (_arg1) {
	                  return builder__1.Bind(loop(_arg1), function (_arg2) {
	                    return builder__1.Return();
	                  });
	                }), builder__1.Delay(function (unitVar_2) {
	                  return builder__1.Bind(evaluateDelayedType(true, getType(ctx, e_1)), function (_arg3) {
	                    _common.Log.trace("typechecker", "Type of entity '%s' (%O) is: %O", _astops.Entity$2Eget_Name.bind(e_1)(), e_1.Kind, _arg3);
	
	                    e_1.Type = _arg3;
	                    return builder__1.Zero();
	                  });
	                }));
	              }() : builder__1.Zero();
	            });
	          }(_fableCore.AsyncBuilder.singleton);
	        };
	
	        return builder_.Bind(loop(e), function (_arg4) {
	          return builder_.Return(getType(ctx, e));
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	
	  function collectTypeErrors(entity) {
	    var errors = [];
	    var visited = new Map();
	
	    var loop = function loop(e) {
	      if (!visited.has(e.Symbol)) {
	        visited.set(e.Symbol, true);
	        {
	          var inputSequence = _astops.Entity$2Eget_Antecedents.bind(e)();
	
	          var _iteratorNormalCompletion5 = true;
	          var _didIteratorError5 = false;
	          var _iteratorError5 = undefined;
	
	          try {
	            for (var _iterator5 = inputSequence[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	              var e_1 = _step5.value;
	              loop(e_1);
	            }
	          } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	              }
	            } finally {
	              if (_didIteratorError5) {
	                throw _iteratorError5;
	              }
	            }
	          }
	        }
	
	        _fableCore.Array.addRangeInPlace(e.Errors, errors);
	      }
	    };
	
	    loop(entity);
	    return Array.from(errors);
	  }
	
	  function typeCheckProgram(globals, bound, prog) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        _common.Log.trace("typechecker", "Type checking program");
	
	        return builder_.TryWith(builder_.Delay(function (unitVar_1) {
	          var rangeLookup = new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	            return _fableCore.Seq.collect(function (matchValue) {
	              return _fableCore.Seq.singleton([matchValue[1].Symbol, matchValue[0]]);
	            }, bound.Entities);
	          })));
	          var vars = new Map(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	            return _fableCore.Seq.map(function (e) {
	              return [_astops.Entity$2Eget_Name.bind(e)(), e];
	            }, globals);
	          })));
	          var ctx = new CheckingContext([], vars, rangeLookup);
	          return builder_.Bind(typeCheckEntityAsync(ctx, prog), function (_arg1) {
	            _common.Log.trace("typechecker", "Completed type checking");
	
	            return builder_.Zero();
	          });
	        }), function (_arg2) {
	          _common.Log.exn("typechecker", "Type checking program failed: %O", _arg2);
	
	          return builder_.Zero();
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	});


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(2), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("./ast"), require("fable-core"), require("./astops"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.ast, global.fableCore, global.astops);
	    global.errors = mod.exports;
	  }
	})(this, function (exports, _ast, _fableCore, _astops) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.TypeChecker = exports.Parser = exports.Tokenizer = undefined;
	
	  var Tokenizer = exports.Tokenizer = function ($exports) {
	    var inputEndInsideString = $exports.inputEndInsideString = function inputEndInsideString(rng, s) {
	      var _Number = 101;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Missing \" at the end of the input. The string \"%s\" ends without closing double-quote.")(function (x) {
	        return x;
	      })(s), rng);
	    };
	
	    var missingClosingQuote = $exports.missingClosingQuote = function missingClosingQuote(rng, q) {
	      var _Number = 102;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Quoted identifier '%s' is missing closing quote.")(function (x) {
	        return x;
	      })(q), rng);
	    };
	
	    var unexpectedCharacter = $exports.unexpectedCharacter = function unexpectedCharacter(rng, c) {
	      var _Number = 103;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexcpected character '%s' in the input.")(function (x) {
	        return x;
	      })(c), rng);
	    };
	
	    return $exports;
	  }({});
	
	  var Parser = exports.Parser = function ($exports) {
	    var unexpectedTokenAfterDot = $exports.unexpectedTokenAfterDot = function unexpectedTokenAfterDot(rng, tok) {
	      var _Number = 201;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected %s after '.' in method chain")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unexpectedScopeEndAfterDot = $exports.unexpectedScopeEndAfterDot = function unexpectedScopeEndAfterDot(rng, chainRng, tok) {
	      var _Number = 202;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected end of scope after '.' in method chain before %s")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unindentedIdentifierAfterDot = $exports.unindentedIdentifierAfterDot = function unindentedIdentifierAfterDot(rng, chainRng, id) {
	      var _Number = 203;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected end of scope after '.' and before '%s'. Indent the identifier?")(function (x) {
	        return x;
	      })(id), rng);
	    };
	
	    var unindentedDotAfterIdentifier = $exports.unindentedDotAfterIdentifier = function unindentedDotAfterIdentifier(rng, dotRng) {
	      var _Number = 204;
	      return new _ast.Error(_Number, "Dot after this identifier is not correctly nested", rng);
	    };
	
	    var unindentedBlock = $exports.unindentedBlock = function unindentedBlock(rng, tok) {
	      var _Number = 205;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Token following %s needs to be indented further")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unexpectedTokenAfterOperator = $exports.unexpectedTokenAfterOperator = function unexpectedTokenAfterOperator(rng, op, tok) {
	      var _Number = 206;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' after operator '%s'")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok))((0, _astops.formatTokenInfo)(op)), rng);
	    };
	
	    var unexpectedTokenInArgList = $exports.unexpectedTokenInArgList = function unexpectedTokenInArgList(rng, tok) {
	      var _Number = 207;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' in list of call arguments")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unexpectedScopeEndInArgList = $exports.unexpectedScopeEndInArgList = function unexpectedScopeEndInArgList(rng) {
	      var _Number = 208;
	      return new _ast.Error(_Number, "Unexpected end of scope in argument list", rng);
	    };
	
	    var unexpectedTokenInParenthesizedExpr = $exports.unexpectedTokenInParenthesizedExpr = function unexpectedTokenInParenthesizedExpr(rng, tok) {
	      var _Number = 209;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' in parenthesized expression. Are you missing ')'?")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unindentedTokenInParenthesizedExpr = $exports.unindentedTokenInParenthesizedExpr = function unindentedTokenInParenthesizedExpr(rng) {
	      var _Number = 210;
	      return new _ast.Error(_Number, "Unexpected end of nested expression in `(`", rng);
	    };
	
	    var missingParenthesizedExpr = $exports.missingParenthesizedExpr = function missingParenthesizedExpr(rng) {
	      var _Number = 211;
	      return new _ast.Error(_Number, "The parenthesized expression (...) is missing body!", rng);
	    };
	
	    var unexpectedTokenInList = $exports.unexpectedTokenInList = function unexpectedTokenInList(rng, tok) {
	      var _Number = 212;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' in list expression")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var unexpectedScopeEndInList = $exports.unexpectedScopeEndInList = function unexpectedScopeEndInList(rng) {
	      var _Number = 213;
	      return new _ast.Error(_Number, "Unexpected end of scope in list expression", rng);
	    };
	
	    var unexpectedTokenInLetBinding = $exports.unexpectedTokenInLetBinding = function unexpectedTokenInLetBinding(rng, tok) {
	      var _Number = 214;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' in let declaration (should be let name = expr)")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var missingBodyInLetBinding = $exports.missingBodyInLetBinding = function missingBodyInLetBinding(rng) {
	      var _Number = 215;
	      return new _ast.Error(_Number, "This let binding is missing body after equals", rng);
	    };
	
	    var nestedExpressionInCommand = $exports.nestedExpressionInCommand = function nestedExpressionInCommand(rng) {
	      var _Number = 216;
	      return new _ast.Error(_Number, "Unexpected expression", rng);
	    };
	
	    var unexpectedTokenAfterFun = $exports.unexpectedTokenAfterFun = function unexpectedTokenAfterFun(rng, tok) {
	      var _Number = 217;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexpected token '%s' after `fun`. Expected variable name.")(function (x) {
	        return x;
	      })((0, _astops.formatTokenInfo)(tok)), rng);
	    };
	
	    var missingArrowInFunc = $exports.missingArrowInFunc = function missingArrowInFunc(rng) {
	      var _Number = 218;
	      return new _ast.Error(_Number, "Missing arrow after variable in function definition", rng);
	    };
	
	    var unexpectedScopeEndInFunc = $exports.unexpectedScopeEndInFunc = function unexpectedScopeEndInFunc(rng) {
	      var _Number = 219;
	      return new _ast.Error(_Number, "Unexpected end of scope in function declaration", rng);
	    };
	
	    var missingBodyOfFunc = $exports.missingBodyOfFunc = function missingBodyOfFunc(rng) {
	      var _Number = 220;
	      return new _ast.Error(_Number, "The function is missing body. If it is on the next line, you need to indent it further.", rng);
	    };
	
	    var exceptionWhileParsing = $exports.exceptionWhileParsing = function exceptionWhileParsing(rng, msg) {
	      var _Number = 299;
	      return new _ast.Error(_Number, "Unexpected exception while parsing: " + msg, rng);
	    };
	
	    return $exports;
	  }({});
	
	  var TypeChecker = exports.TypeChecker = function ($exports) {
	    var numericOperatorExpectsNumbers = $exports.numericOperatorExpectsNumbers = function numericOperatorExpectsNumbers(op, idx, typ, rng) {
	      var _Number = 301;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Both operands of binary operator '%s' should be numbers but the %s operand was %s instead.")(function (x) {
	        return x;
	      })((0, _astops.formatToken)(new _ast.TokenKind("Operator", [op])))(idx === 0 ? "left" : "right")((0, _astops.formatTypeInfo)(typ)), rng);
	    };
	
	    var variableNotInScope = $exports.variableNotInScope = function variableNotInScope(name, rng) {
	      var _Number = 302;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Variable '%s' is not in scope.")(function (x) {
	        return x;
	      })(name), rng);
	    };
	
	    var formatMembers = function formatMembers(members) {
	      return _fableCore.String.join(", ", _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
	        return _fableCore.Seq.collect(function (matchValue) {
	          var $target0 = function $target0(n) {
	            return _fableCore.Seq.singleton(n);
	          };
	
	          if (matchValue.Case === "Property") {
	            return $target0(matchValue.Fields[0]);
	          } else {
	            return $target0(matchValue.Fields[0]);
	          }
	        }, members);
	      })));
	    };
	
	    var propertyMissing = $exports.propertyMissing = function propertyMissing(name, members, rng) {
	      var _Number = 303;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Could not find property '%s' in the list '%s'.")(function (x) {
	        return x;
	      })(name)(formatMembers(members)), rng);
	    };
	
	    var methodMissing = $exports.methodMissing = function methodMissing(name, members, rng) {
	      var _Number = 304;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Could not find method '%s' in the list '%s'.")(function (x) {
	        return x;
	      })(name)(formatMembers(members)), rng);
	    };
	
	    var notAnObject = $exports.notAnObject = function notAnObject(name, typ, rng) {
	      var _Number = 305;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Type is not an object but %s and it does not have member `%s`")(function (x) {
	        return x;
	      })((0, _astops.formatTypeInfo)(typ))(name), rng);
	    };
	
	    var listElementTypeDoesNotMatch = $exports.listElementTypeDoesNotMatch = function listElementTypeDoesNotMatch(listty, elty, rng) {
	      var _Number = 306;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("The type of this list element is %s but it should be %s")(function (x) {
	        return x;
	      })((0, _astops.formatTypeInfo)(elty))((0, _astops.formatTypeInfo)(listty)), rng);
	    };
	
	    var nameBasedParamMustBeLast = $exports.nameBasedParamMustBeLast = function nameBasedParamMustBeLast(rng) {
	      var _Number = 307;
	      return new _ast.Error(_Number, "All named parameters must be at the end of parameter list.", rng);
	    };
	
	    var parameterMissingValue = $exports.parameterMissingValue = function parameterMissingValue(par, rng) {
	      var _Number = 308;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("Required parameter `%s` is not given a value.")(function (x) {
	        return x;
	      })(par), rng);
	    };
	
	    var incorrectParameterType = $exports.incorrectParameterType = function incorrectParameterType(parName, parType, actualType, err1, err2, rng) {
	      var _Number = 309;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("The value of parameter `%s` has wrong type. Expected %s but got %s. The type %s does not match the type %s.")(function (x) {
	        return x;
	      })(parName)((0, _astops.formatTypeInfo)(parType))((0, _astops.formatTypeInfo)(actualType))((0, _astops.formatTypeInfo)(err1))((0, _astops.formatTypeInfo)(err2)), rng);
	    };
	
	    var inferenceConflict = $exports.inferenceConflict = function inferenceConflict(_var, t1, t2, rng) {
	      var _Number = 310;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("The arguments of the call have conflicting types. The type %s assigned to a variable %s does not match the type %s.")(function (x) {
	        return x;
	      })((0, _astops.formatTypeInfo)(t1))(_var)((0, _astops.formatTypeInfo)(t2)), rng);
	    };
	
	    var callMissingInstance = $exports.callMissingInstance = function callMissingInstance(name, rng) {
	      var _Number = 311;
	      return new _ast.Error(_Number, _fableCore.String.fsFormat("The `%s` property access or call is missing an instance")(function (x) {
	        return x;
	      })(name), rng);
	    };
	
	    return $exports;
	  }({});
	});


/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(5), __webpack_require__(13), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("fable-core"), require("./../common/babel"), require("./../ast/typeops"), require("../../libraries/common"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.fableCore, global.babel, global.typeops, global.common);
	    global.codegen = mod.exports;
	  }
	})(this, function (exports, _fableCore, _babel, _typeops, _common) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.BabelResult = exports.BabelOptions = exports.CompilationContext = undefined;
	  exports.offsetToLocation = offsetToLocation;
	  exports.rangeToLoc = rangeToLoc;
	  exports.getEmitterAndParams = getEmitterAndParams;
	  exports.compileExpression = compileExpression;
	  exports.compileCommand = compileCommand;
	  exports.compileProgram = compileProgram;
	  exports.compileAndRun = compileAndRun;
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
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
	
	  var CompilationContext = exports.CompilationContext = function () {
	    function CompilationContext(lineLengths, globals) {
	      _classCallCheck(this, CompilationContext);
	
	      this.LineLengths = lineLengths;
	      this.Globals = globals;
	    }
	
	    _createClass(CompilationContext, [{
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
	
	    return CompilationContext;
	  }();
	
	  _fableCore.Util.setInterfaces(CompilationContext.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.CompilationContext");
	
	  function offsetToLocation(lines, offs, lengths) {
	    var $target1 = function $target1() {
	      return lengths.tail == null ? new _babel.Position(lines, offs) : offsetToLocation(lines + 1, offs - lengths.head - 1, lengths.tail);
	    };
	
	    if (lengths.tail != null) {
	      if (offs <= lengths.head) {
	        var l = lengths.head;
	        var lengths_1 = lengths.tail;
	        return new _babel.Position(lines, offs);
	      } else {
	        return $target1();
	      }
	    } else {
	      return $target1();
	    }
	  }
	
	  function rangeToLoc(ctx, rng) {
	    return new _babel.SourceLocation(offsetToLocation(1, rng.Start, ctx.LineLengths), offsetToLocation(1, rng.Start, ctx.LineLengths));
	  }
	
	  function getEmitterAndParams(name, typ) {
	    var matchValue = (0, _typeops.reduceType)(typ);
	
	    if (matchValue.Case === "Object") {
	      return _fableCore.Seq.pick(function (_arg1) {
	        var $target1 = function $target1() {
	          var $target1 = function $target1() {
	            return null;
	          };
	
	          if (_arg1.Case === "Property") {
	            if (_arg1.Fields[0] === name) {
	              var e = _arg1.Fields[3];
	              var n = _arg1.Fields[0];
	              return [e, new _fableCore.List()];
	            } else {
	              return $target1();
	            }
	          } else {
	            return $target1();
	          }
	        };
	
	        if (_arg1.Case === "Method") {
	          if (_arg1.Fields[0] === name) {
	            var args = _arg1.Fields[1];
	            var e = _arg1.Fields[4];
	            var n = _arg1.Fields[0];
	            return [e, args];
	          } else {
	            return $target1();
	          }
	        } else {
	          return $target1();
	        }
	      }, matchValue.Fields[0].Members);
	    } else {
	      _common.Log.exn("codegen", "getEmitterAndParams: Not an object %O", matchValue);
	
	      throw "getEmitterAndParams: Not an object";
	    }
	  }
	
	  function compileExpression(ctx, expr) {
	    var $target9 = function $target9() {
	      return expr.Node.Case === "Variable" ? new _babel.Expression("IdentifierExpression", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)]) : expr.Node.Case === "List" ? function () {
	        var es = _fableCore.List.map(function (expr_1) {
	          return compileExpression(ctx, expr_1);
	        }, expr.Node.Fields[0]);
	
	        return new _babel.Expression("ArrayExpression", [es, rangeToLoc(ctx, expr.Range)]);
	      }() : expr.Node.Case === "Function" ? function () {
	        var _var = new _babel.Expression("IdentifierExpression", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)]);
	
	        var ce = compileExpression(function () {
	          var Globals = _fableCore.Map.add(expr.Node.Fields[0].Node.Name, _var, ctx.Globals);
	
	          return new CompilationContext(ctx.LineLengths, Globals);
	        }(), expr.Node.Fields[1]);
	        var body = new _babel.Statement("BlockStatement", [_fableCore.List.ofArray([new _babel.Statement("ReturnStatement", [ce, rangeToLoc(ctx, expr.Node.Fields[1].Range)])]), rangeToLoc(ctx, expr.Node.Fields[1].Range)]);
	        return new _babel.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babel.Pattern("IdentifierPattern", [expr.Node.Fields[0].Node.Name, rangeToLoc(ctx, expr.Node.Fields[0].Range)])]), body, false, false, rangeToLoc(ctx, expr.Range)]);
	      }() : expr.Node.Case === "Empty" ? function () {
	        console.log("compileExpression: %O", expr.Node);
	        throw "!";
	      }() : function () {
	        throw ["C:\\Tomas\\Public\\thegamma\\thegamma-script\\src\\thegamma\\codegen/codegen.fs", 37, 8];
	      }();
	    };
	
	    if (expr.Node.Case === "Binary") {
	      if (expr.Node.Fields[1].Node.Case === "Power") {
	        var l = expr.Node.Fields[0];
	        var r = expr.Node.Fields[2];
	        {
	          var l_1 = compileExpression(ctx, l);
	          var r_1 = compileExpression(ctx, r);
	          var rng = rangeToLoc(ctx, expr.Range);
	          var pow = new _babel.Expression("MemberExpression", [new _babel.Expression("IdentifierExpression", ["pow", rng]), new _babel.Expression("IdentifierExpression", ["Math", rng]), false, rng]);
	          return new _babel.Expression("CallExpression", [pow, _fableCore.List.ofArray([l_1, r_1]), rangeToLoc(ctx, expr.Range)]);
	        }
	      } else {
	        var _l = expr.Node.Fields[0];
	        var op = expr.Node.Fields[1];
	        var _r = expr.Node.Fields[2];
	        {
	          var _l_ = compileExpression(ctx, _l);
	
	          var _r_ = compileExpression(ctx, _r);
	
	          var op_1 = op.Node.Case === "Plus" ? new _babel.BinaryOperator("BinaryPlus", []) : op.Node.Case === "Minus" ? new _babel.BinaryOperator("BinaryMinus", []) : op.Node.Case === "Multiply" ? new _babel.BinaryOperator("BinaryMultiply", []) : op.Node.Case === "Divide" ? new _babel.BinaryOperator("BinaryDivide", []) : op.Node.Case === "GreaterThan" ? new _babel.BinaryOperator("BinaryGreater", []) : op.Node.Case === "LessThan" ? new _babel.BinaryOperator("BinaryLess", []) : op.Node.Case === "GreaterThanOrEqual" ? new _babel.BinaryOperator("BinaryGreaterOrEqual", []) : op.Node.Case === "LessThanOrEqual" ? new _babel.BinaryOperator("BinaryLessOrEqual", []) : op.Node.Case === "Power" ? function () {
	            throw "compileExpression: Power is not a binary operation";
	          }() : new _babel.BinaryOperator("BinaryEqualStrict", []);
	          return new _babel.Expression("BinaryExpression", [op_1, _l_, _r_, rangeToLoc(ctx, expr.Range)]);
	        }
	      }
	    } else {
	      if (expr.Node.Case === "Call") {
	        if (expr.Node.Fields[0] == null) {
	          var args = expr.Node.Fields[2];
	          var n = expr.Node.Fields[1];
	          throw "compileExpression: Call without instance is not supported";
	        } else {
	          var _ret = function () {
	            var args = expr.Node.Fields[2];
	            var inst = expr.Node.Fields[0];
	            var n = expr.Node.Fields[1];
	            {
	              var _ret2 = function () {
	                var compiledArgs = _fableCore.List.map(function (a) {
	                  return [a.Name, compileExpression(ctx, a.Value)];
	                }, args.Node);
	
	                var positionArgs = Array.from(_fableCore.Seq.map(function (tuple) {
	                  return tuple[1];
	                }, _fableCore.Seq.takeWhile(function (tupledArg) {
	                  return function () {
	                    return tupledArg[0] == null;
	                  }();
	                }, compiledArgs)));
	                var namedArgs = new Map(_fableCore.Seq.choose(function (_arg1) {
	                  return _arg1[0] != null ? function () {
	                    var n_1 = _arg1[0];
	                    return [n_1.Node.Name, _arg1[1]];
	                  }() : null;
	                }, compiledArgs));
	                var patternInput = getEmitterAndParams(n.Node.Name, inst.Entity.Type);
	                var inst_1 = compileExpression(ctx, inst);
	
	                var pars = _fableCore.List.mapIndexed(function (i, tupledArg) {
	                  return i < positionArgs.length ? positionArgs[i] : namedArgs.has(tupledArg[0]) ? namedArgs.get(tupledArg[0]) : new _babel.Expression("NullLiteral", [rangeToLoc(ctx, args.Range)]);
	                }, patternInput[1]);
	
	                return {
	                  v: {
	                    v: patternInput[0].Emit([inst_1, pars])
	                  }
	                };
	              }();
	
	              if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	            }
	          }();
	
	          if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        }
	      } else {
	        if (expr.Node.Case === "Property") {
	          var _inst = expr.Node.Fields[0];
	          var _n = expr.Node.Fields[1];
	          {
	            var patternInput = getEmitterAndParams(_n.Node.Name, _inst.Entity.Type);
	            var inst_1 = compileExpression(ctx, _inst);
	            return patternInput[0].Emit([inst_1, new _fableCore.List()]);
	          }
	        } else {
	          if (expr.Node.Case === "Number") {
	            var _n2 = expr.Node.Fields[0];
	            return new _babel.Expression("NumericLiteral", [_n2, rangeToLoc(ctx, expr.Range)]);
	          } else {
	            if (expr.Node.Case === "String") {
	              var s = expr.Node.Fields[0];
	              return new _babel.Expression("StringLiteral", [s, rangeToLoc(ctx, expr.Range)]);
	            } else {
	              if (expr.Node.Case === "Boolean") {
	                var b = expr.Node.Fields[0];
	                return new _babel.Expression("BooleanLiteral", [b, rangeToLoc(ctx, expr.Range)]);
	              } else {
	                if (expr.Node.Case === "Variable") {
	                  if (ctx.Globals.has(expr.Node.Fields[0].Node.Name)) {
	                    var _n3 = expr.Node.Fields[0];
	                    return ctx.Globals.get(_n3.Node.Name);
	                  } else {
	                    return $target9();
	                  }
	                } else {
	                  return $target9();
	                }
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function compileCommand(ctx, cmd) {
	    return cmd.Node.Case === "Expr" ? function () {
	      var e = compileExpression(ctx, cmd.Node.Fields[0]);
	      return new _babel.Statement("ExpressionStatement", [e, rangeToLoc(ctx, cmd.Range)]);
	    }() : function () {
	      var e = compileExpression(ctx, cmd.Node.Fields[1]);
	      var name = new _babel.Pattern("IdentifierPattern", [cmd.Node.Fields[0].Node.Name, rangeToLoc(ctx, cmd.Node.Fields[0].Range)]);
	      var decl = new _babel.VariableDeclarator("VariableDeclarator", [name, e, rangeToLoc(ctx, cmd.Range)]);
	      return new _babel.Statement("VariableDeclaration", [new _babel.VariableDeclarationKind("Var", []), _fableCore.List.ofArray([decl]), rangeToLoc(ctx, cmd.Range)]);
	    }();
	  }
	
	  function compileProgram(ctx, prog) {
	    var body = _fableCore.List.map(function (cmd) {
	      return compileCommand(ctx, cmd);
	    }, prog.Body.Node);
	
	    return new _babel.Program(rangeToLoc(ctx, prog.Body.Range), body);
	  }
	
	  var BabelOptions = exports.BabelOptions = function () {
	    function BabelOptions(presets) {
	      _classCallCheck(this, BabelOptions);
	
	      this.presets = presets;
	    }
	
	    _createClass(BabelOptions, [{
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
	
	    return BabelOptions;
	  }();
	
	  _fableCore.Util.setInterfaces(BabelOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelOptions");
	
	  var BabelResult = exports.BabelResult = function () {
	    function BabelResult(code) {
	      _classCallCheck(this, BabelResult);
	
	      this.code = code;
	    }
	
	    _createClass(BabelResult, [{
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
	
	    return BabelResult;
	  }();
	
	  _fableCore.Util.setInterfaces(BabelResult.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.CodeGenerator.BabelResult");
	
	  function compileAndRun(globals, text, prog) {
	    return function (builder_) {
	      return builder_.Delay(function (unitVar) {
	        return builder_.TryWith(builder_.Delay(function (unitVar_1) {
	          return builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(globals), function (_arg1) {
	            var ctx = new CompilationContext(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_2) {
	              return _fableCore.Seq.map(function (l) {
	                return l.length;
	              }, text.split("\n"));
	            })), _arg1);
	            var res = compileProgram(ctx, prog);
	            var code = Babel.transformFromAst(_babel.Serializer.serializeProgram(res), text, new BabelOptions(["es2015"]));
	
	            _common.Log.trace("codegen", "Evaluating: %O", code);
	
	            return builder_.Return(code.code);
	          });
	        }), function (_arg2) {
	          _common.Log.exn("codegen", "Evaluating code failed: %O", _arg2);
	
	          return builder_.Return("");
	        });
	      });
	    }(_fableCore.AsyncBuilder.singleton);
	  }
	});


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	__webpack_require__(321);
	__webpack_require__(192);
	__webpack_require__(323);
	__webpack_require__(322);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(330);
	__webpack_require__(331);
	__webpack_require__(332);
	__webpack_require__(334);
	__webpack_require__(335);
	module.exports = __webpack_require__(37);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(85);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(100);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(209);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(212);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(223);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(239);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(319);
	__webpack_require__(320);
	module.exports = __webpack_require__(37);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(32)
	  , has            = __webpack_require__(33)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , $export        = __webpack_require__(36)
	  , redefine       = __webpack_require__(46)
	  , META           = __webpack_require__(50).KEY
	  , $fails         = __webpack_require__(35)
	  , shared         = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(52)
	  , uid            = __webpack_require__(47)
	  , wks            = __webpack_require__(53)
	  , wksExt         = __webpack_require__(54)
	  , wksDefine      = __webpack_require__(55)
	  , keyOf          = __webpack_require__(57)
	  , enumKeys       = __webpack_require__(70)
	  , isArray        = __webpack_require__(73)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(60)
	  , toPrimitive    = __webpack_require__(44)
	  , createDesc     = __webpack_require__(45)
	  , _create        = __webpack_require__(74)
	  , gOPNExt        = __webpack_require__(77)
	  , $GOPD          = __webpack_require__(79)
	  , $DP            = __webpack_require__(39)
	  , $keys          = __webpack_require__(58)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f  = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(56)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(38)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 32 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , core      = __webpack_require__(37)
	  , hide      = __webpack_require__(38)
	  , redefine  = __webpack_require__(46)
	  , ctx       = __webpack_require__(48)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 37 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39)
	  , createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(40)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(44)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(43)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(32).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(41);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , hide      = __webpack_require__(38)
	  , has       = __webpack_require__(33)
	  , SRC       = __webpack_require__(47)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(37).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(49);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(47)('meta')
	  , isObject = __webpack_require__(41)
	  , has      = __webpack_require__(33)
	  , setDesc  = __webpack_require__(39).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(35)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(39).f
	  , has = __webpack_require__(33)
	  , TAG = __webpack_require__(53)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(51)('wks')
	  , uid        = __webpack_require__(47)
	  , Symbol     = __webpack_require__(32).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(53);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(32)
	  , core           = __webpack_require__(37)
	  , LIBRARY        = __webpack_require__(56)
	  , wksExt         = __webpack_require__(54)
	  , defineProperty = __webpack_require__(39).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(58)
	  , toIObject = __webpack_require__(60);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(59)
	  , enumBugKeys = __webpack_require__(69);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(33)
	  , toIObject    = __webpack_require__(60)
	  , arrayIndexOf = __webpack_require__(64)(false)
	  , IE_PROTO     = __webpack_require__(68)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(61)
	  , defined = __webpack_require__(63);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(62);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(60)
	  , toLength  = __webpack_require__(65)
	  , toIndex   = __webpack_require__(67);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(66)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(51)('keys')
	  , uid    = __webpack_require__(47);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(58)
	  , gOPS    = __webpack_require__(71)
	  , pIE     = __webpack_require__(72);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 72 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(62);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(40)
	  , dPs         = __webpack_require__(75)
	  , enumBugKeys = __webpack_require__(69)
	  , IE_PROTO    = __webpack_require__(68)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(43)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(76).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(39)
	  , anObject = __webpack_require__(40)
	  , getKeys  = __webpack_require__(58);
	
	module.exports = __webpack_require__(34) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32).document && document.documentElement;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(60)
	  , gOPN      = __webpack_require__(78).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(59)
	  , hiddenKeys = __webpack_require__(69).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(72)
	  , createDesc     = __webpack_require__(45)
	  , toIObject      = __webpack_require__(60)
	  , toPrimitive    = __webpack_require__(44)
	  , has            = __webpack_require__(33)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(34) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(74)});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(34), 'Object', {defineProperty: __webpack_require__(39).f});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(34), 'Object', {defineProperties: __webpack_require__(75)});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(60)
	  , $getOwnPropertyDescriptor = __webpack_require__(79).f;
	
	__webpack_require__(84)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(36)
	  , core    = __webpack_require__(37)
	  , fails   = __webpack_require__(35);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(86)
	  , $getPrototypeOf = __webpack_require__(87);
	
	__webpack_require__(84)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(63);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(33)
	  , toObject    = __webpack_require__(86)
	  , IE_PROTO    = __webpack_require__(68)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(86)
	  , $keys    = __webpack_require__(58);
	
	__webpack_require__(84)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(84)('getOwnPropertyNames', function(){
	  return __webpack_require__(77).f;
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(84)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(84)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(84)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(84)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(84)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(84)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(36);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(97)});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(58)
	  , gOPS     = __webpack_require__(71)
	  , pIE      = __webpack_require__(72)
	  , toObject = __webpack_require__(86)
	  , IObject  = __webpack_require__(61)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(35)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(36);
	$export($export.S, 'Object', {is: __webpack_require__(99)});

/***/ },
/* 99 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(36);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(101).set});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(41)
	  , anObject = __webpack_require__(40);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(48)(Function.call, __webpack_require__(79).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(103)
	  , test    = {};
	test[__webpack_require__(53)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(46)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(62)
	  , TAG = __webpack_require__(53)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(36);
	
	$export($export.P, 'Function', {bind: __webpack_require__(105)});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(49)
	  , isObject   = __webpack_require__(41)
	  , invoke     = __webpack_require__(106)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39).f
	  , createDesc = __webpack_require__(45)
	  , has        = __webpack_require__(33)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(34) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(41)
	  , getPrototypeOf = __webpack_require__(87)
	  , HAS_INSTANCE   = __webpack_require__(53)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(39).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(36)
	  , $parseInt = __webpack_require__(110);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(32).parseInt
	  , $trim     = __webpack_require__(111).trim
	  , ws        = __webpack_require__(112)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	  , defined = __webpack_require__(63)
	  , fails   = __webpack_require__(35)
	  , spaces  = __webpack_require__(112)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(36)
	  , $parseFloat = __webpack_require__(114);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(32).parseFloat
	  , $trim       = __webpack_require__(111).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(112) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(32)
	  , has               = __webpack_require__(33)
	  , cof               = __webpack_require__(62)
	  , inheritIfRequired = __webpack_require__(116)
	  , toPrimitive       = __webpack_require__(44)
	  , fails             = __webpack_require__(35)
	  , gOPN              = __webpack_require__(78).f
	  , gOPD              = __webpack_require__(79).f
	  , dP                = __webpack_require__(39).f
	  , $trim             = __webpack_require__(111).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(74)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(34) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(46)(global, NUMBER, $Number);
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(41)
	  , setPrototypeOf = __webpack_require__(101).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(36)
	  , toInteger    = __webpack_require__(66)
	  , aNumberValue = __webpack_require__(118)
	  , repeat       = __webpack_require__(119)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(35)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(62);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(66)
	  , defined   = __webpack_require__(63);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(36)
	  , $fails       = __webpack_require__(35)
	  , aNumberValue = __webpack_require__(118)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(36)
	  , _isFinite = __webpack_require__(32).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(124)});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(41)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(36)
	  , isInteger = __webpack_require__(124)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(36)
	  , $parseFloat = __webpack_require__(114);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(36)
	  , $parseInt = __webpack_require__(110);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(36)
	  , log1p   = __webpack_require__(132)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(36)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(36)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(36)
	  , sign    = __webpack_require__(136);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(36)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(36)
	  , $expm1  = __webpack_require__(140);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 140 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(36)
	  , sign      = __webpack_require__(136)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(36)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(36)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(35)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(132)});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {sign: __webpack_require__(136)});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(36)
	  , expm1   = __webpack_require__(140)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(35)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(36)
	  , expm1   = __webpack_require__(140)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(36)
	  , toIndex        = __webpack_require__(67)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(36)
	  , toIObject = __webpack_require__(60)
	  , toLength  = __webpack_require__(65);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(111)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(155)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(156)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(66)
	  , defined   = __webpack_require__(63);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(56)
	  , $export        = __webpack_require__(36)
	  , redefine       = __webpack_require__(46)
	  , hide           = __webpack_require__(38)
	  , has            = __webpack_require__(33)
	  , Iterators      = __webpack_require__(157)
	  , $iterCreate    = __webpack_require__(158)
	  , setToStringTag = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(87)
	  , ITERATOR       = __webpack_require__(53)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(74)
	  , descriptor     = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(52)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(38)(IteratorPrototype, __webpack_require__(53)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $at     = __webpack_require__(155)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(36)
	  , toLength  = __webpack_require__(65)
	  , context   = __webpack_require__(161)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(163)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(162)
	  , defined  = __webpack_require__(63);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(41)
	  , cof      = __webpack_require__(62)
	  , MATCH    = __webpack_require__(53)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(53)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(36)
	  , context  = __webpack_require__(161)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(163)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(119)
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(36)
	  , toLength    = __webpack_require__(65)
	  , context     = __webpack_require__(161)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(163)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(168)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	  , fails   = __webpack_require__(35)
	  , defined = __webpack_require__(63)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(168)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(168)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(168)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(168)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(168)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(168)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(168)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(168)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(168)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(168)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(168)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(168)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(36)
	  , toObject    = __webpack_require__(86)
	  , toPrimitive = __webpack_require__(44);
	
	$export($export.P + $export.F * __webpack_require__(35)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(36)
	  , fails   = __webpack_require__(35)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(46)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(53)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(38)(proto, TO_PRIMITIVE, __webpack_require__(186));

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(40)
	  , toPrimitive = __webpack_require__(44)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(73)});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(48)
	  , $export        = __webpack_require__(36)
	  , toObject       = __webpack_require__(86)
	  , call           = __webpack_require__(189)
	  , isArrayIter    = __webpack_require__(190)
	  , toLength       = __webpack_require__(65)
	  , createProperty = __webpack_require__(191)
	  , getIterFn      = __webpack_require__(192);
	
	$export($export.S + $export.F * !__webpack_require__(193)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(40);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(157)
	  , ITERATOR   = __webpack_require__(53)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(39)
	  , createDesc      = __webpack_require__(45);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(103)
	  , ITERATOR  = __webpack_require__(53)('iterator')
	  , Iterators = __webpack_require__(157);
	module.exports = __webpack_require__(37).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(53)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(36)
	  , createProperty = __webpack_require__(191);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(35)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(36)
	  , toIObject = __webpack_require__(60)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(61) != Object || !__webpack_require__(196)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(35);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(36)
	  , html       = __webpack_require__(76)
	  , cof        = __webpack_require__(62)
	  , toIndex    = __webpack_require__(67)
	  , toLength   = __webpack_require__(65)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(35)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(36)
	  , aFunction = __webpack_require__(49)
	  , toObject  = __webpack_require__(86)
	  , fails     = __webpack_require__(35)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(196)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(36)
	  , $forEach = __webpack_require__(200)(0)
	  , STRICT   = __webpack_require__(196)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(48)
	  , IObject  = __webpack_require__(61)
	  , toObject = __webpack_require__(86)
	  , toLength = __webpack_require__(65)
	  , asc      = __webpack_require__(201);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(202);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , isArray  = __webpack_require__(73)
	  , SPECIES  = __webpack_require__(53)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $map    = __webpack_require__(200)(1);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $filter = __webpack_require__(200)(2);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $some   = __webpack_require__(200)(3);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $every  = __webpack_require__(200)(4);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $reduce = __webpack_require__(208);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(49)
	  , toObject  = __webpack_require__(86)
	  , IObject   = __webpack_require__(61)
	  , toLength  = __webpack_require__(65);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36)
	  , $reduce = __webpack_require__(208);
	
	$export($export.P + $export.F * !__webpack_require__(196)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(36)
	  , $indexOf      = __webpack_require__(64)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(196)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(36)
	  , toIObject     = __webpack_require__(60)
	  , toInteger     = __webpack_require__(66)
	  , toLength      = __webpack_require__(65)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(196)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(36);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(213)});
	
	__webpack_require__(214)('copyWithin');

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(86)
	  , toIndex  = __webpack_require__(67)
	  , toLength = __webpack_require__(65);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(53)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(38)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(36);
	
	$export($export.P, 'Array', {fill: __webpack_require__(216)});
	
	__webpack_require__(214)('fill');

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(86)
	  , toIndex  = __webpack_require__(67)
	  , toLength = __webpack_require__(65);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(36)
	  , $find   = __webpack_require__(200)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(214)(KEY);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(36)
	  , $find   = __webpack_require__(200)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(214)(KEY);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220)('Array');

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(32)
	  , dP          = __webpack_require__(39)
	  , DESCRIPTORS = __webpack_require__(34)
	  , SPECIES     = __webpack_require__(53)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(214)
	  , step             = __webpack_require__(222)
	  , Iterators        = __webpack_require__(157)
	  , toIObject        = __webpack_require__(60);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(156)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(32)
	  , inheritIfRequired = __webpack_require__(116)
	  , dP                = __webpack_require__(39).f
	  , gOPN              = __webpack_require__(78).f
	  , isRegExp          = __webpack_require__(162)
	  , $flags            = __webpack_require__(224)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(34) && (!CORRECT_NEW || __webpack_require__(35)(function(){
	  re2[__webpack_require__(53)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(46)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(220)('RegExp');

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(40);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(226);
	var anObject    = __webpack_require__(40)
	  , $flags      = __webpack_require__(224)
	  , DESCRIPTORS = __webpack_require__(34)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(46)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(35)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(34) && /./g.flags != 'g')__webpack_require__(39).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(224)
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(228)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(38)
	  , redefine = __webpack_require__(46)
	  , fails    = __webpack_require__(35)
	  , defined  = __webpack_require__(63)
	  , wks      = __webpack_require__(53);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(228)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(228)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(228)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(162)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(56)
	  , global             = __webpack_require__(32)
	  , ctx                = __webpack_require__(48)
	  , classof            = __webpack_require__(103)
	  , $export            = __webpack_require__(36)
	  , isObject           = __webpack_require__(41)
	  , aFunction          = __webpack_require__(49)
	  , anInstance         = __webpack_require__(233)
	  , forOf              = __webpack_require__(234)
	  , speciesConstructor = __webpack_require__(235)
	  , task               = __webpack_require__(236).set
	  , microtask          = __webpack_require__(237)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(53)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(238)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(52)($Promise, PROMISE);
	__webpack_require__(220)(PROMISE);
	Wrapper = __webpack_require__(37)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(193)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(48)
	  , call        = __webpack_require__(189)
	  , isArrayIter = __webpack_require__(190)
	  , anObject    = __webpack_require__(40)
	  , toLength    = __webpack_require__(65)
	  , getIterFn   = __webpack_require__(192)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(40)
	  , aFunction = __webpack_require__(49)
	  , SPECIES   = __webpack_require__(53)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(48)
	  , invoke             = __webpack_require__(106)
	  , html               = __webpack_require__(76)
	  , cel                = __webpack_require__(43)
	  , global             = __webpack_require__(32)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(62)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , macrotask = __webpack_require__(236).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(62)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(46);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(240);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(241)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(39).f
	  , create      = __webpack_require__(74)
	  , redefineAll = __webpack_require__(238)
	  , ctx         = __webpack_require__(48)
	  , anInstance  = __webpack_require__(233)
	  , defined     = __webpack_require__(63)
	  , forOf       = __webpack_require__(234)
	  , $iterDefine = __webpack_require__(156)
	  , step        = __webpack_require__(222)
	  , setSpecies  = __webpack_require__(220)
	  , DESCRIPTORS = __webpack_require__(34)
	  , fastKey     = __webpack_require__(50).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(32)
	  , $export           = __webpack_require__(36)
	  , redefine          = __webpack_require__(46)
	  , redefineAll       = __webpack_require__(238)
	  , meta              = __webpack_require__(50)
	  , forOf             = __webpack_require__(234)
	  , anInstance        = __webpack_require__(233)
	  , isObject          = __webpack_require__(41)
	  , fails             = __webpack_require__(35)
	  , $iterDetect       = __webpack_require__(193)
	  , setToStringTag    = __webpack_require__(52)
	  , inheritIfRequired = __webpack_require__(116);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(240);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(241)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(200)(0)
	  , redefine     = __webpack_require__(46)
	  , meta         = __webpack_require__(50)
	  , assign       = __webpack_require__(97)
	  , weak         = __webpack_require__(244)
	  , isObject     = __webpack_require__(41)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(241)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(238)
	  , getWeak           = __webpack_require__(50).getWeak
	  , anObject          = __webpack_require__(40)
	  , isObject          = __webpack_require__(41)
	  , anInstance        = __webpack_require__(233)
	  , forOf             = __webpack_require__(234)
	  , createArrayMethod = __webpack_require__(200)
	  , $has              = __webpack_require__(33)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(244);
	
	// 23.4 WeakSet Objects
	__webpack_require__(241)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(36)
	  , $typed       = __webpack_require__(247)
	  , buffer       = __webpack_require__(248)
	  , anObject     = __webpack_require__(40)
	  , toIndex      = __webpack_require__(67)
	  , toLength     = __webpack_require__(65)
	  , isObject     = __webpack_require__(41)
	  , ArrayBuffer  = __webpack_require__(32).ArrayBuffer
	  , speciesConstructor = __webpack_require__(235)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(35)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(220)(ARRAY_BUFFER);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , hide   = __webpack_require__(38)
	  , uid    = __webpack_require__(47)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , LIBRARY        = __webpack_require__(56)
	  , $typed         = __webpack_require__(247)
	  , hide           = __webpack_require__(38)
	  , redefineAll    = __webpack_require__(238)
	  , fails          = __webpack_require__(35)
	  , anInstance     = __webpack_require__(233)
	  , toInteger      = __webpack_require__(66)
	  , toLength       = __webpack_require__(65)
	  , gOPN           = __webpack_require__(78).f
	  , dP             = __webpack_require__(39).f
	  , arrayFill      = __webpack_require__(216)
	  , setToStringTag = __webpack_require__(52)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	$export($export.G + $export.W + $export.F * !__webpack_require__(247).ABV, {
	  DataView: __webpack_require__(248).DataView
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(34)){
	  var LIBRARY             = __webpack_require__(56)
	    , global              = __webpack_require__(32)
	    , fails               = __webpack_require__(35)
	    , $export             = __webpack_require__(36)
	    , $typed              = __webpack_require__(247)
	    , $buffer             = __webpack_require__(248)
	    , ctx                 = __webpack_require__(48)
	    , anInstance          = __webpack_require__(233)
	    , propertyDesc        = __webpack_require__(45)
	    , hide                = __webpack_require__(38)
	    , redefineAll         = __webpack_require__(238)
	    , toInteger           = __webpack_require__(66)
	    , toLength            = __webpack_require__(65)
	    , toIndex             = __webpack_require__(67)
	    , toPrimitive         = __webpack_require__(44)
	    , has                 = __webpack_require__(33)
	    , same                = __webpack_require__(99)
	    , classof             = __webpack_require__(103)
	    , isObject            = __webpack_require__(41)
	    , toObject            = __webpack_require__(86)
	    , isArrayIter         = __webpack_require__(190)
	    , create              = __webpack_require__(74)
	    , getPrototypeOf      = __webpack_require__(87)
	    , gOPN                = __webpack_require__(78).f
	    , getIterFn           = __webpack_require__(192)
	    , uid                 = __webpack_require__(47)
	    , wks                 = __webpack_require__(53)
	    , createArrayMethod   = __webpack_require__(200)
	    , createArrayIncludes = __webpack_require__(64)
	    , speciesConstructor  = __webpack_require__(235)
	    , ArrayIterators      = __webpack_require__(221)
	    , Iterators           = __webpack_require__(157)
	    , $iterDetect         = __webpack_require__(193)
	    , setSpecies          = __webpack_require__(220)
	    , arrayFill           = __webpack_require__(216)
	    , arrayCopyWithin     = __webpack_require__(213)
	    , $DP                 = __webpack_require__(39)
	    , $GOPD               = __webpack_require__(79)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(36)
	  , aFunction = __webpack_require__(49)
	  , anObject  = __webpack_require__(40)
	  , rApply    = (__webpack_require__(32).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(35)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(36)
	  , create     = __webpack_require__(74)
	  , aFunction  = __webpack_require__(49)
	  , anObject   = __webpack_require__(40)
	  , isObject   = __webpack_require__(41)
	  , fails      = __webpack_require__(35)
	  , bind       = __webpack_require__(105)
	  , rConstruct = (__webpack_require__(32).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(39)
	  , $export     = __webpack_require__(36)
	  , anObject    = __webpack_require__(40)
	  , toPrimitive = __webpack_require__(44);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(35)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(36)
	  , gOPD     = __webpack_require__(79).f
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(36)
	  , anObject = __webpack_require__(40);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(158)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(79)
	  , getPrototypeOf = __webpack_require__(87)
	  , has            = __webpack_require__(33)
	  , $export        = __webpack_require__(36)
	  , isObject       = __webpack_require__(41)
	  , anObject       = __webpack_require__(40);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(79)
	  , $export  = __webpack_require__(36)
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(36)
	  , getProto = __webpack_require__(87)
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(36)
	  , anObject      = __webpack_require__(40)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(271)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(78)
	  , gOPS     = __webpack_require__(71)
	  , anObject = __webpack_require__(40)
	  , Reflect  = __webpack_require__(32).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(36)
	  , anObject           = __webpack_require__(40)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(39)
	  , gOPD           = __webpack_require__(79)
	  , getPrototypeOf = __webpack_require__(87)
	  , has            = __webpack_require__(33)
	  , $export        = __webpack_require__(36)
	  , createDesc     = __webpack_require__(45)
	  , anObject       = __webpack_require__(40)
	  , isObject       = __webpack_require__(41);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(36)
	  , setProto = __webpack_require__(101);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(36)
	  , $includes = __webpack_require__(64)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(214)('includes');

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(36)
	  , $at     = __webpack_require__(155)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(36)
	  , $pad    = __webpack_require__(278);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(65)
	  , repeat   = __webpack_require__(119)
	  , defined  = __webpack_require__(63);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(36)
	  , $pad    = __webpack_require__(278);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(111)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(111)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(36)
	  , defined     = __webpack_require__(63)
	  , toLength    = __webpack_require__(65)
	  , isRegExp    = __webpack_require__(162)
	  , getFlags    = __webpack_require__(224)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(158)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55)('asyncIterator');

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55)('observable');

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(36)
	  , ownKeys        = __webpack_require__(271)
	  , toIObject      = __webpack_require__(60)
	  , gOPD           = __webpack_require__(79)
	  , createProperty = __webpack_require__(191);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(36)
	  , $values = __webpack_require__(287)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(58)
	  , toIObject = __webpack_require__(60)
	  , isEnum    = __webpack_require__(72).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(36)
	  , $entries = __webpack_require__(287)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(36)
	  , toObject        = __webpack_require__(86)
	  , aFunction       = __webpack_require__(49)
	  , $defineProperty = __webpack_require__(39);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(34) && $export($export.P + __webpack_require__(290), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(56)|| !__webpack_require__(35)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(32)[K];
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(36)
	  , toObject        = __webpack_require__(86)
	  , aFunction       = __webpack_require__(49)
	  , $defineProperty = __webpack_require__(39);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(34) && $export($export.P + __webpack_require__(290), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(36)
	  , toObject                 = __webpack_require__(86)
	  , toPrimitive              = __webpack_require__(44)
	  , getPrototypeOf           = __webpack_require__(87)
	  , getOwnPropertyDescriptor = __webpack_require__(79).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(34) && $export($export.P + __webpack_require__(290), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(36)
	  , toObject                 = __webpack_require__(86)
	  , toPrimitive              = __webpack_require__(44)
	  , getPrototypeOf           = __webpack_require__(87)
	  , getOwnPropertyDescriptor = __webpack_require__(79).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(34) && $export($export.P + __webpack_require__(290), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(36);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(295)('Map')});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(103)
	  , from    = __webpack_require__(296);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(234);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(36);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(295)('Set')});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(36);
	
	$export($export.S, 'System', {global: __webpack_require__(32)});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(36)
	  , cof     = __webpack_require__(62);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(36);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(305)
	  , anObject                  = __webpack_require__(40)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(239)
	  , $export = __webpack_require__(36)
	  , shared  = __webpack_require__(51)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(243)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(305)
	  , anObject               = __webpack_require__(40)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(305)
	  , anObject               = __webpack_require__(40)
	  , getPrototypeOf         = __webpack_require__(87)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(242)
	  , from                    = __webpack_require__(296)
	  , metadata                = __webpack_require__(305)
	  , anObject                = __webpack_require__(40)
	  , getPrototypeOf          = __webpack_require__(87)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(305)
	  , anObject               = __webpack_require__(40)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(305)
	  , anObject                = __webpack_require__(40)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(305)
	  , anObject               = __webpack_require__(40)
	  , getPrototypeOf         = __webpack_require__(87)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(305)
	  , anObject               = __webpack_require__(40)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(305)
	  , anObject                  = __webpack_require__(40)
	  , aFunction                 = __webpack_require__(49)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(36)
	  , microtask = __webpack_require__(237)()
	  , process   = __webpack_require__(32).process
	  , isNode    = __webpack_require__(62)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(36)
	  , global      = __webpack_require__(32)
	  , core        = __webpack_require__(37)
	  , microtask   = __webpack_require__(237)()
	  , OBSERVABLE  = __webpack_require__(53)('observable')
	  , aFunction   = __webpack_require__(49)
	  , anObject    = __webpack_require__(40)
	  , anInstance  = __webpack_require__(233)
	  , redefineAll = __webpack_require__(238)
	  , hide        = __webpack_require__(38)
	  , forOf       = __webpack_require__(234)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(220)('Observable');

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(32)
	  , $export    = __webpack_require__(36)
	  , invoke     = __webpack_require__(106)
	  , partial    = __webpack_require__(317)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(318)
	  , invoke    = __webpack_require__(106)
	  , aFunction = __webpack_require__(49);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	  , $task   = __webpack_require__(236);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(221)
	  , redefine      = __webpack_require__(46)
	  , global        = __webpack_require__(32)
	  , hide          = __webpack_require__(38)
	  , Iterators     = __webpack_require__(157)
	  , wks           = __webpack_require__(53)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(48)
	  , $export        = __webpack_require__(36)
	  , createDesc     = __webpack_require__(45)
	  , assign         = __webpack_require__(97)
	  , create         = __webpack_require__(74)
	  , getPrototypeOf = __webpack_require__(87)
	  , getKeys        = __webpack_require__(58)
	  , dP             = __webpack_require__(39)
	  , keyOf          = __webpack_require__(57)
	  , aFunction      = __webpack_require__(49)
	  , forOf          = __webpack_require__(234)
	  , isIterable     = __webpack_require__(322)
	  , $iterCreate    = __webpack_require__(158)
	  , step           = __webpack_require__(222)
	  , isObject       = __webpack_require__(41)
	  , toIObject      = __webpack_require__(60)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , has            = __webpack_require__(33);
	
	// 0 -> Dict.forEach
	// 1 -> Dict.map
	// 2 -> Dict.filter
	// 3 -> Dict.some
	// 4 -> Dict.every
	// 5 -> Dict.find
	// 6 -> Dict.findKey
	// 7 -> Dict.mapPairs
	var createDictMethod = function(TYPE){
	  var IS_MAP   = TYPE == 1
	    , IS_EVERY = TYPE == 4;
	  return function(object, callbackfn, that /* = undefined */){
	    var f      = ctx(callbackfn, that, 3)
	      , O      = toIObject(object)
	      , result = IS_MAP || TYPE == 7 || TYPE == 2
	          ? new (typeof this == 'function' ? this : Dict) : undefined
	      , key, val, res;
	    for(key in O)if(has(O, key)){
	      val = O[key];
	      res = f(val, key, object);
	      if(TYPE){
	        if(IS_MAP)result[key] = res;            // map
	        else if(res)switch(TYPE){
	          case 2: result[key] = val; break;     // filter
	          case 3: return true;                  // some
	          case 5: return val;                   // find
	          case 6: return key;                   // findKey
	          case 7: result[res[0]] = res[1];      // mapPairs
	        } else if(IS_EVERY)return false;        // every
	      }
	    }
	    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
	  };
	};
	var findKey = createDictMethod(6);
	
	var createDictIter = function(kind){
	  return function(it){
	    return new DictIterator(it, kind);
	  };
	};
	var DictIterator = function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._a = getKeys(iterated);   // keys
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	};
	$iterCreate(DictIterator, 'Dict', function(){
	  var that = this
	    , O    = that._t
	    , keys = that._a
	    , kind = that._k
	    , key;
	  do {
	    if(that._i >= keys.length){
	      that._t = undefined;
	      return step(1);
	    }
	  } while(!has(O, key = keys[that._i++]));
	  if(kind == 'keys'  )return step(0, key);
	  if(kind == 'values')return step(0, O[key]);
	  return step(0, [key, O[key]]);
	});
	
	function Dict(iterable){
	  var dict = create(null);
	  if(iterable != undefined){
	    if(isIterable(iterable)){
	      forOf(iterable, true, function(key, value){
	        dict[key] = value;
	      });
	    } else assign(dict, iterable);
	  }
	  return dict;
	}
	Dict.prototype = null;
	
	function reduce(object, mapfn, init){
	  aFunction(mapfn);
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , i      = 0
	    , memo, key;
	  if(arguments.length < 3){
	    if(!length)throw TypeError('Reduce of empty object with no initial value');
	    memo = O[keys[i++]];
	  } else memo = Object(init);
	  while(length > i)if(has(O, key = keys[i++])){
	    memo = mapfn(memo, O[key], key, object);
	  }
	  return memo;
	}
	
	function includes(object, el){
	  return (el == el ? keyOf(object, el) : findKey(object, function(it){
	    return it != it;
	  })) !== undefined;
	}
	
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function set(object, key, value){
	  if(DESCRIPTORS && key in Object)dP.f(object, key, createDesc(0, value));
	  else object[key] = value;
	  return object;
	}
	
	function isDict(it){
	  return isObject(it) && getPrototypeOf(it) === Dict.prototype;
	}
	
	$export($export.G + $export.F, {Dict: Dict});
	
	$export($export.S, 'Dict', {
	  keys:     createDictIter('keys'),
	  values:   createDictIter('values'),
	  entries:  createDictIter('entries'),
	  forEach:  createDictMethod(0),
	  map:      createDictMethod(1),
	  filter:   createDictMethod(2),
	  some:     createDictMethod(3),
	  every:    createDictMethod(4),
	  find:     createDictMethod(5),
	  findKey:  findKey,
	  mapPairs: createDictMethod(7),
	  reduce:   reduce,
	  keyOf:    keyOf,
	  includes: includes,
	  has:      has,
	  get:      get,
	  set:      set,
	  isDict:   isDict
	});

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(103)
	  , ITERATOR  = __webpack_require__(53)('iterator')
	  , Iterators = __webpack_require__(157);
	module.exports = __webpack_require__(37).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(40)
	  , get      = __webpack_require__(192);
	module.exports = __webpack_require__(37).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var global  = __webpack_require__(32)
	  , core    = __webpack_require__(37)
	  , $export = __webpack_require__(36)
	  , partial = __webpack_require__(317);
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$export($export.G + $export.F, {
	  delay: function delay(time){
	    return new (core.Promise || global.Promise)(function(resolve){
	      setTimeout(partial.call(resolve, true), time);
	    });
	  }
	});

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var path    = __webpack_require__(318)
	  , $export = __webpack_require__(36);
	
	// Placeholder
	__webpack_require__(37)._ = path._ = path._ || {};
	
	$export($export.P + $export.F, 'Function', {part: __webpack_require__(317)});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	
	$export($export.S + $export.F, 'Object', {isObject: __webpack_require__(41)});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36);
	
	$export($export.S + $export.F, 'Object', {classof: __webpack_require__(103)});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	  , define  = __webpack_require__(329);
	
	$export($export.S + $export.F, 'Object', {define: define});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var dP        = __webpack_require__(39)
	  , gOPD      = __webpack_require__(79)
	  , ownKeys   = __webpack_require__(271)
	  , toIObject = __webpack_require__(60);
	
	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toIObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)dP.f(target, key = keys[i++], gOPD.f(mixin, key));
	  return target;
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(36)
	  , define  = __webpack_require__(329)
	  , create  = __webpack_require__(74);
	
	$export($export.S + $export.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(156)(Number, 'Number', function(iterated){
	  this._l = +iterated;
	  this._i = 0;
	}, function(){
	  var i    = this._i++
	    , done = !(i < this._l);
	  return {done: done, value: done ? undefined : i};
	});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(36)
	  , $re     = __webpack_require__(333)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36);
	var $re = __webpack_require__(333)(/[&<>"']/g, {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&apos;'
	});
	
	$export($export.P + $export.F, 'String', {escapeHTML: function escapeHTML(){ return $re(this); }});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(36);
	var $re = __webpack_require__(333)(/&(?:amp|lt|gt|quot|apos);/g, {
	  '&amp;':  '&',
	  '&lt;':   '<',
	  '&gt;':   '>',
	  '&quot;': '"',
	  '&apos;': "'"
	});
	
	$export($export.P + $export.F, 'String', {unescapeHTML:  function unescapeHTML(){ return $re(this); }});

/***/ }
/******/ ]);
//# sourceMappingURL=thegamma-script.js.map