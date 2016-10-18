(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./extensions", "./astops", "./ast"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./extensions"), require("./astops"), require("./ast"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.extensions, global.astops, global.ast);
    global.binder = mod.exports;
  }
})(this, function (exports, _fableCore, _extensions, _astops, _ast) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.anonymous = exports.BindingContext = undefined;
  exports.bindEntity = bindEntity;
  exports.setEntity = setEntity;
  exports.bindExpression = bindExpression;
  exports.bindCommand = bindCommand;
  exports.bindProgram = bindProgram;
  exports.createContext = createContext;

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

  var BindingContext = exports.BindingContext = function BindingContext(variables, scope, root, table, bound) {
    _classCallCheck(this, BindingContext);

    this.Variables = variables;
    this.Scope = scope;
    this.Root = root;
    this.Table = table;
    this.Bound = bound;
  };

  _fableCore.Util.setInterfaces(BindingContext.prototype, ["FSharpRecord"], "TheGamma.Binder.BindingContext");

  function bindEntity(ctx, kind, antecedents, name) {
    var symbols = _fableCore.List.map(function (a) {
      return a.Symbol;
    }, antecedents);

    var nestedDict = function () {
      var matchValue = _extensions.ListDictionaryModule.tryFind(symbols, ctx.Table);

      if (matchValue != null) {
        return matchValue;
      } else {
        return _fableCore.Map.create(null, new _fableCore.GenericComparer(_fableCore.Util.compare));
      }
    }();

    if (nestedDict.has([kind, name])) {
      _extensions.Log.trace("binder", "Cached: binding %s %s", (0, _astops.formatEntityKind)(kind), name.Name);

      return nestedDict.get([kind, name]);
    } else {
      _extensions.Log.trace("binder", "New: binding %s %s", (0, _astops.formatEntityKind)(kind), name.Name);

      var symbol = Symbol();
      var entity = new _ast.Entity(kind, antecedents, name, symbol, null, new _fableCore.List());

      _extensions.ListDictionaryModule.set(symbols, _fableCore.Map.add([kind, name], entity, nestedDict), ctx.Table);

      return entity;
    }
  }

  function setEntity(ctx, node, entity) {
    ctx.Bound.push([node.Range, entity]);
    node.Entity = entity;
    return entity;
  }

  var anonymous = exports.anonymous = new _ast.Name("");

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
      var _ret = function () {
        var inst = function () {
          var $var6 = node.Node.Fields[0];

          if ($var6 != null) {
            return bindExpression_1(ctx)($var6);
          } else {
            return $var6;
          }
        }() != null ? function () {
          var $var6 = node.Node.Fields[0];

          if ($var6 != null) {
            return bindExpression_1(ctx)($var6);
          } else {
            return $var6;
          }
        }() : ctx.Root;

        var site = function site(arg) {
          return bindEntity(ctx, new _ast.EntityKind("CallSite", [arg]), _fableCore.List.ofArray([inst]), node.Node.Fields[1].Node);
        };

        var args = _fableCore.List.mapIndexed(function (idx, arg) {
          var site_1 = site(arg.Name != null ? new _fableCore.Choice("Choice1Of2", [arg.Name.Node.Name]) : new _fableCore.Choice("Choice2Of2", [idx]));
          var expr = bindCallArgExpression(site_1)(ctx)(arg.Value);

          if (arg.Name == null) {
            return expr;
          } else {
            return function (entity) {
              return setEntity(ctx, arg.Name, entity);
            }(bindEntity(ctx, new _ast.EntityKind("NamedParam", []), _fableCore.List.ofArray([expr]), arg.Name.Node));
          }
        }, node.Node.Fields[2].Node);

        var args_1 = function (entity) {
          return setEntity(ctx, node.Node.Fields[2], entity);
        }(bindEntity(ctx, new _ast.EntityKind("ArgumentList", []), _fableCore.List.ofArray([ctx.Root], args), anonymous));

        var named = function (entity) {
          return setEntity(ctx, node.Node.Fields[1], entity);
        }(bindEntity(ctx, new _ast.EntityKind("NamedMember", []), _fableCore.List.ofArray([ctx.Root]), node.Node.Fields[1].Node));

        return {
          v: function (entity) {
            return setEntity(ctx, node, entity);
          }(bindEntity(ctx, new _ast.EntityKind("ChainElement", [function () {
            return node.Node.Fields[0] != null;
          }(), false]), _fableCore.List.ofArray([named, inst, args_1]), node.Node.Fields[1].Node))
        };
      }();

      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    } else {
      if (node.Node.Case === "Property") {
        var ante = bindExpression_1(ctx)(node.Node.Fields[0]);

        var _named = function (entity) {
          return setEntity(ctx, node.Node.Fields[1], entity);
        }(bindEntity(ctx, new _ast.EntityKind("NamedMember", []), _fableCore.List.ofArray([ctx.Root]), node.Node.Fields[1].Node));

        return function (entity) {
          return setEntity(ctx, node, entity);
        }(bindEntity(ctx, new _ast.EntityKind("ChainElement", [true, true]), _fableCore.List.ofArray([_named, ante]), node.Node.Fields[1].Node));
      } else {
        if (node.Node.Case === "Binary") {
          var lentity = bindExpression_1(ctx)(node.Node.Fields[0]);
          var rentity = bindExpression_1(ctx)(node.Node.Fields[2]);
          return function (entity) {
            return setEntity(ctx, node, entity);
          }(bindEntity(ctx, new _ast.EntityKind("Operator", [node.Node.Fields[1].Node]), _fableCore.List.ofArray([lentity, rentity]), anonymous));
        } else {
          if (node.Node.Case === "List") {
            var entities = _fableCore.List.map(bindExpression_1(ctx), node.Node.Fields[0]);

            return function (entity) {
              return setEntity(ctx, node, entity);
            }(bindEntity(ctx, new _ast.EntityKind("List", []), entities, anonymous));
          } else {
            if (node.Node.Case === "Function") {
              var scope = bindEntity(ctx, new _ast.EntityKind("Scope", []), _fableCore.List.ofArray([ctx.Scope]), anonymous);
              var varParent = callSite != null ? _fableCore.List.ofArray([callSite]) : _fableCore.List.ofArray([scope]);

              var _var = function (entity) {
                return setEntity(ctx, node.Node.Fields[0], entity);
              }(bindEntity(ctx, new _ast.EntityKind("Binding", []), varParent, node.Node.Fields[0].Node));

              var body = bindExpression_1(new BindingContext(_fableCore.Map.add(node.Node.Fields[0].Node, _var, ctx.Variables), ctx.Scope, ctx.Root, ctx.Table, ctx.Bound))(node.Node.Fields[1]);
              return function (entity) {
                return setEntity(ctx, node, entity);
              }(bindEntity(ctx, new _ast.EntityKind("Function", []), _fableCore.List.ofArray([_var, body]), anonymous));
            } else {
              if (node.Node.Case === "Boolean") {
                return function (entity) {
                  return setEntity(ctx, node, entity);
                }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Boolean", [node.Node.Fields[0]])]), _fableCore.List.ofArray([ctx.Root]), anonymous));
              } else {
                if (node.Node.Case === "String") {
                  return function (entity) {
                    return setEntity(ctx, node, entity);
                  }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("String", [node.Node.Fields[0]])]), _fableCore.List.ofArray([ctx.Root]), anonymous));
                } else {
                  if (node.Node.Case === "Number") {
                    return function (entity) {
                      return setEntity(ctx, node, entity);
                    }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Number", [node.Node.Fields[0]])]), _fableCore.List.ofArray([ctx.Root]), anonymous));
                  } else {
                    if (node.Node.Case === "Empty") {
                      return function (entity) {
                        return setEntity(ctx, node, entity);
                      }(bindEntity(ctx, new _ast.EntityKind("Constant", [new _ast.Constant("Empty", [])]), _fableCore.List.ofArray([ctx.Root]), anonymous));
                    } else {
                      var matchValue = _fableCore.Map.tryFind(node.Node.Fields[0].Node, ctx.Variables);

                      if (matchValue == null) {
                        return function (entity) {
                          return setEntity(ctx, node, entity);
                        }(bindEntity(ctx, new _ast.EntityKind("GlobalValue", []), _fableCore.List.ofArray([ctx.Scope]), node.Node.Fields[0].Node));
                      } else {
                        return function (entity) {
                          return setEntity(ctx, node, entity);
                        }(bindEntity(ctx, new _ast.EntityKind("Variable", []), _fableCore.List.ofArray([matchValue]), node.Node.Fields[0].Node));
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

      (function (entity) {
        return setEntity(ctx, node, entity);
      })(bindEntity(ctx, new _ast.EntityKind("Command", []), _fableCore.List.ofArray([body]), anonymous));

      return ctx;
    }() : function () {
      var body = bindExpression(null, ctx, node.Node.Fields[1]);
      var scope = bindEntity(ctx, new _ast.EntityKind("Scope", []), _fableCore.List.ofArray([ctx.Scope]), anonymous);

      var _var = function (entity) {
        return setEntity(ctx, node.Node.Fields[0], entity);
      }(bindEntity(ctx, new _ast.EntityKind("Variable", []), _fableCore.List.ofArray([body]), node.Node.Fields[0].Node));

      (function (entity) {
        return setEntity(ctx, node, entity);
      })(bindEntity(ctx, new _ast.EntityKind("Command", []), _fableCore.List.ofArray([_var, body]), anonymous));

      return new BindingContext(_fableCore.Map.add(node.Node.Fields[0].Node, _var, ctx.Variables), ctx.Scope, ctx.Root, ctx.Table, ctx.Bound);
    }();
  }

  function bindProgram(ctx, program) {
    ctx.Bound.splice(0);

    (function (list) {
      return _fableCore.Seq.fold(function (ctx_1, node) {
        return bindCommand(ctx_1, node);
      }, ctx, list);
    })(program.Body.Node);

    return Array.from(ctx.Bound);
  }

  function createContext(name) {
    var root = function () {
      var Kind = new _ast.EntityKind("Root", []);
      var Antecedents = new _fableCore.List();
      var Errors = new _fableCore.List();
      return new _ast.Entity(Kind, Antecedents, new _ast.Name(name), Symbol(), null, Errors);
    }();

    var Table = new Map();
    var Bound = [];
    return new BindingContext(_fableCore.Map.create(null, new _fableCore.GenericComparer(function (x, y) {
      return x.CompareTo(y);
    })), root, root, Table, Bound);
  }
});
//# sourceMappingURL=binder.js.map