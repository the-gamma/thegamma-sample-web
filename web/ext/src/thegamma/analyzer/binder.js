(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../ast/astops", "../../libraries/common", "./../ast/ast"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../ast/astops"), require("../../libraries/common"), require("./../ast/ast"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.astops, global.common, global.ast);
    global.binder = mod.exports;
  }
})(this, function (exports, _fableCore, _astops, _common, _ast) {
  "use strict";

  exports.__esModule = true;
  exports.BindingResult = exports.BindingContext = undefined;
  exports.bindEntity = bindEntity;
  exports.setEntity = setEntity;
  exports.bindExpression = bindExpression;
  exports.bindCommand = bindCommand;
  exports.bindProgram = bindProgram;
  exports.createContext = createContext;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

  var BindingContext = exports.BindingContext = function BindingContext(variables, globalValues, root, table, bound) {
    _classCallCheck(this, BindingContext);

    this.Variables = variables;
    this.GlobalValues = globalValues;
    this.Root = root;
    this.Table = table;
    this.Bound = bound;
  };

  _fableCore.Util.setInterfaces(BindingContext.prototype, ["FSharpRecord"], "TheGamma.Binder.BindingContext");

  var BindingResult = exports.BindingResult = function () {
    function BindingResult(ents) {
      var _this = this;

      _classCallCheck(this, BindingResult);

      this.ents = ents;
      {
        (function () {
          var res = new Map();

          var add = function add(a) {
            return function (e) {
              if (!res.has(a)) {
                res.set(a, []);
              }

              res.get(a).push(e);
            };
          };

          {
            var arr = _this.ents;

            for (var idx = 0; idx <= arr.length - 1; idx++) {
              var forLoopVar = arr[idx];

              var inputSequence = _astops.Entity$2Eget_Antecedents.bind(forLoopVar[1])();

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

                var a = _ref;
                add(a.Symbol)(forLoopVar[1]);
              }
            }
          }
          _this.childrenLookup = res;
        })();
      }
    }

    BindingResult.prototype.GetChildren = function GetChildren(ent) {
      var matchValue = this.childrenLookup.has(ent.Symbol) ? [true, this.childrenLookup.get(ent.Symbol)] : [false, null];

      if (matchValue[0]) {
        return Array.from(matchValue[1]);
      } else {
        return [];
      }
    };

    _createClass(BindingResult, [{
      key: "Entities",
      get: function get() {
        return this.ents;
      }
    }]);

    return BindingResult;
  }();

  _fableCore.Util.setInterfaces(BindingResult.prototype, [], "TheGamma.Binder.BindingResult");

  function bindEntity(ctx, kind) {
    var patternInput = (0, _astops.entityCodeNameAndAntecedents)(kind);

    var symbols = _fableCore.List.map(function (a) {
      return a.Symbol;
    }, new _fableCore.List(ctx.Root, patternInput[1]));

    var nestedDict = function () {
      var matchValue = _common.ListDictionaryModule.tryFind(symbols, ctx.Table);

      if (matchValue != null) {
        return matchValue;
      } else {
        return _fableCore.Map.create(null, new _fableCore.GenericComparer(_fableCore.Util.compare));
      }
    }();

    if (nestedDict.has([patternInput[0], patternInput[2]])) {
      _common.Log.trace("binder", "Cached: binding %s %s", (0, _astops.formatEntityKind)(kind), patternInput[2]);

      return nestedDict.get([patternInput[0], patternInput[2]]);
    } else {
      var _ret2 = function () {
        _common.Log.trace("binder", "New: binding %s %s", (0, _astops.formatEntityKind)(kind), patternInput[2]);

        var symbol = Symbol();

        var entity = function () {
          var Type = null;
          var Errors = new _fableCore.List();
          var Meta = new _fableCore.List();
          return new _ast.Entity(kind, symbol, null, Meta, Type, Errors);
        }();

        _common.ListDictionaryModule.set(symbols, _fableCore.Map.add([patternInput[0], patternInput[2]], entity, nestedDict), ctx.Table);

        return {
          v: entity
        };
      }();

      if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
    }
  }

  function setEntity(ctx, node, entity) {
    ctx.Bound.push([node.Range, entity]);
    node.Entity = entity;
    return entity;
  }

  function bindExpression(callSite, ctx, node) {
    var bindCallArgExpression = function bindCallArgExpression(site) {
      var callSite_1 = site;
      return function (ctx_1) {
        return function (node_1) {
          return bindExpression(callSite_1, ctx_1, node_1);
        };
      };
    };

    var bindExpression_1 = function () {
      var callSite_1 = null;
      return function (ctx_1) {
        return function (node_1) {
          return bindExpression(callSite_1, ctx_1, node_1);
        };
      };
    }();

    if (node.Node.Case === "Call") {
      var _ret3 = function () {
        var inst = function () {
          var $var8 = node.Node.Fields[0];

          if ($var8 != null) {
            return bindExpression_1(ctx)($var8);
          } else {
            return $var8;
          }
        }() != null ? function () {
          var $var8 = node.Node.Fields[0];

          if ($var8 != null) {
            return bindExpression_1(ctx)($var8);
          } else {
            return $var8;
          }
        }() : ctx.Root;

        var site = function site(arg) {
          return bindEntity(ctx, new _ast.EntityKind("CallSite", [inst, node.Node.Fields[1].Node, arg]));
        };

        var args = _fableCore.List.mapIndexed(function (idx, arg) {
          var site_1 = site(arg.Name != null ? new _fableCore.Choice("Choice1Of2", [arg.Name.Node.Name]) : new _fableCore.Choice("Choice2Of2", [idx]));
          var expr = bindCallArgExpression(site_1)(ctx)(arg.Value);

          if (arg.Name == null) {
            return expr;
          } else {
            return function (entity) {
              return setEntity(ctx, arg.Name, entity);
            }(bindEntity(ctx, new _ast.EntityKind("NamedParam", [arg.Name.Node, expr])));
          }
        }, node.Node.Fields[2].Node);

        var args_1 = function (entity) {
          return setEntity(ctx, node.Node.Fields[2], entity);
        }(bindEntity(ctx, new _ast.EntityKind("ArgumentList", [args])));

        var named = function (entity) {
          return setEntity(ctx, node.Node.Fields[1], entity);
        }(bindEntity(ctx, new _ast.EntityKind("NamedMember", [node.Node.Fields[1].Node, inst])));

        return {
          v: function (entity) {
            return setEntity(ctx, node, entity);
          }(bindEntity(ctx, new _ast.EntityKind("ChainElement", [false, node.Node.Fields[1].Node, named, inst, args_1])))
        };
      }();

      if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
    } else {
      if (node.Node.Case === "Property") {
        var _inst = bindExpression_1(ctx)(node.Node.Fields[0]);

        var _named = function (entity) {
          return setEntity(ctx, node.Node.Fields[1], entity);
        }(bindEntity(ctx, new _ast.EntityKind("NamedMember", [node.Node.Fields[1].Node, _inst])));

        return function (entity) {
          return setEntity(ctx, node, entity);
        }(bindEntity(ctx, new _ast.EntityKind("ChainElement", [true, node.Node.Fields[1].Node, _named, _inst, null])));
      } else {
        if (node.Node.Case === "Binary") {
          var lentity = bindExpression_1(ctx)(node.Node.Fields[0]);
          var rentity = bindExpression_1(ctx)(node.Node.Fields[2]);
          return function (entity) {
            return setEntity(ctx, node, entity);
          }(bindEntity(ctx, new _ast.EntityKind("Operator", [lentity, node.Node.Fields[1].Node, rentity])));
        } else {
          if (node.Node.Case === "List") {
            var entities = _fableCore.List.map(bindExpression_1(ctx), node.Node.Fields[0]);

            return function (entity) {
              return setEntity(ctx, node, entity);
            }(bindEntity(ctx, new _ast.EntityKind("List", [entities])));
          } else {
            if (node.Node.Case === "Function") {
              var callSite_1 = callSite == null ? function () {
                throw "bindExpression: Function missing call site";
              }() : callSite;

              var _var = function (entity) {
                return setEntity(ctx, node.Node.Fields[0], entity);
              }(bindEntity(ctx, new _ast.EntityKind("Binding", [node.Node.Fields[0].Node, callSite_1])));

              var body = bindExpression_1(new BindingContext(_fableCore.Map.add(node.Node.Fields[0].Node, _var, ctx.Variables), ctx.GlobalValues, ctx.Root, ctx.Table, ctx.Bound))(node.Node.Fields[1]);
              return function (entity) {
                return setEntity(ctx, node, entity);
              }(bindEntity(ctx, new _ast.EntityKind("Function", [_var, body])));
            } else {
              if (node.Node.Case === "Boolean") {
                return function (entity) {
                  return setEntity(ctx, node, entity);
                }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Boolean", [node.Node.Fields[0]])])));
              } else {
                if (node.Node.Case === "String") {
                  return function (entity) {
                    return setEntity(ctx, node, entity);
                  }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("String", [node.Node.Fields[0]])])));
                } else {
                  if (node.Node.Case === "Number") {
                    return function (entity) {
                      return setEntity(ctx, node, entity);
                    }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Number", [node.Node.Fields[0]])])));
                  } else {
                    if (node.Node.Case === "Empty") {
                      return function (entity) {
                        return setEntity(ctx, node, entity);
                      }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Empty", [])])));
                    } else {
                      var matchValue = _fableCore.Map.tryFind(node.Node.Fields[0].Node, ctx.Variables);

                      if (matchValue != null) {
                        return function (entity) {
                          return setEntity(ctx, node, entity);
                        }(bindEntity(ctx, new _ast.EntityKind("Variable", [node.Node.Fields[0].Node, matchValue])));
                      } else {
                        var matchValue_1 = _fableCore.Map.tryFind(node.Node.Fields[0].Node, ctx.GlobalValues);

                        if (matchValue_1 == null) {
                          return function (entity) {
                            return setEntity(ctx, node, entity);
                          }(bindEntity(ctx, new _ast.EntityKind("GlobalValue", [node.Node.Fields[0].Node, null])));
                        } else {
                          return function (entity) {
                            return setEntity(ctx, node, entity);
                          }(matchValue_1);
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

  function bindCommand(ctx, node) {
    return node.Node.Case === "Expr" ? function () {
      var body = bindExpression(null, ctx, node.Node.Fields[0]);

      var node_1 = function (entity) {
        return setEntity(ctx, node, entity);
      }(bindEntity(ctx, new _ast.EntityKind("RunCommand", [body])));

      return [ctx, node_1];
    }() : function () {
      var body = bindExpression(null, ctx, node.Node.Fields[1]);

      var _var = function (entity) {
        return setEntity(ctx, node.Node.Fields[0], entity);
      }(bindEntity(ctx, new _ast.EntityKind("Variable", [node.Node.Fields[0].Node, body])));

      var node_1 = function (entity) {
        return setEntity(ctx, node, entity);
      }(bindEntity(ctx, new _ast.EntityKind("LetCommand", [_var, body])));

      return [new BindingContext(_fableCore.Map.add(node.Node.Fields[0].Node, _var, ctx.Variables), ctx.GlobalValues, ctx.Root, ctx.Table, ctx.Bound), node_1];
    }();
  }

  function bindProgram(ctx, program) {
    ctx.Bound.splice(0);

    var patternInput = _fableCore.Seq.fold(function (tupledArg, cmd) {
      var patternInput = bindCommand(tupledArg[0], cmd);
      return [patternInput[0], new _fableCore.List(patternInput[1], tupledArg[1])];
    }, [ctx, new _fableCore.List()], program.Body.Node);

    return [bindEntity(ctx, new _ast.EntityKind("Program", [patternInput[1]])), new BindingResult(Array.from(ctx.Bound))];
  }

  function createContext(globals, name) {
    var root = function () {
      var Kind = new _ast.EntityKind("Root", []);
      var Errors = new _fableCore.List();

      var _Symbol = Symbol();

      var Type = null;
      var Meta = new _fableCore.List();
      return new _ast.Entity(Kind, _Symbol, null, Meta, Type, Errors);
    }();

    var Table = new Map();
    var Bound = [];
    return new BindingContext(_fableCore.Map.create(null, new _fableCore.GenericComparer(function (x, y) {
      return x.CompareTo(y);
    })), _fableCore.Map.create(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.map(function (e) {
        return [new _ast.Name(_astops.Entity$2Eget_Name.bind(e)()), e];
      }, globals);
    })), new _fableCore.GenericComparer(function (x, y) {
      return x.CompareTo(y);
    })), root, Table, Bound);
  }
});
//# sourceMappingURL=binder.js.map