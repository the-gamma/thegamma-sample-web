(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./ast"], factory);
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
  exports.$ExprLeaf$ExprNode$ = $ExprLeaf$ExprNode$;
  exports.rebuildExprNode = rebuildExprNode;

  function $ExprLeaf$ExprNode$(e) {
    var $target5 = function $target5() {
      return new _fableCore.Choice("Choice1Of2", [null]);
    };

    if (e.Case === "Call") {
      return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([e.Fields[0]], _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
        return _fableCore.Seq.map(function (a) {
          return a.Value;
        }, e.Fields[2]);
      }))), _fableCore.List.ofArray([e.Fields[1]], _fableCore.List.choose(function (a) {
        return a.Name;
      }, e.Fields[2]))]]);
    } else {
      if (e.Case === "Variable") {
        return new _fableCore.Choice("Choice2Of2", [[new _fableCore.List(), _fableCore.List.ofArray([e.Fields[0]])]]);
      } else {
        if (e.Case === "List") {
          return new _fableCore.Choice("Choice2Of2", [[e.Fields[0], new _fableCore.List()]]);
        } else {
          if (e.Case === "Function") {
            return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([e.Fields[1]]), _fableCore.List.ofArray([e.Fields[0]])]]);
          } else {
            if (e.Case === "Number") {
              return $target5();
            } else {
              if (e.Case === "Boolean") {
                return $target5();
              } else {
                if (e.Case === "String") {
                  return $target5();
                } else {
                  if (e.Case === "Unit") {
                    return $target5();
                  } else {
                    if (e.Case === "Null") {
                      return $target5();
                    } else {
                      if (e.Case === "Empty") {
                        return $target5();
                      } else {
                        return new _fableCore.Choice("Choice2Of2", [[_fableCore.List.ofArray([e.Fields[0]]), _fableCore.List.ofArray([e.Fields[1]])]]);
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

  function rebuildExprNode(e, es, ns) {
    var matchValue = [e, es, ns];

    var $target5 = function $target5() {
      throw "rebuildExprNode: Wrong variable length";
    };

    var $target6 = function $target6() {
      throw "rebuildExprNode: Wrong property length";
    };

    var $target7 = function $target7() {
      throw "rebuildExprNode: Wrong call length";
    };

    var $target9 = function $target9() {
      throw "rebuildExprNode: Wrong function length";
    };

    var $target10 = function $target10() {
      throw "rebuildExprNode: Not a node";
    };

    if (matchValue[0].Case === "Function") {
      if (matchValue[1].tail != null) {
        if (matchValue[1].tail.tail == null) {
          if (matchValue[2].tail != null) {
            if (matchValue[2].tail.tail == null) {
              var e_1 = matchValue[1].head;
              var n = matchValue[2].head;
              return new _ast.ExprKind("Function", [n, e_1]);
            } else {
              return $target9();
            }
          } else {
            return $target9();
          }
        } else {
          return $target9();
        }
      } else {
        return $target9();
      }
    } else {
      if (matchValue[0].Case === "Property") {
        if (matchValue[1].tail != null) {
          if (matchValue[1].tail.tail == null) {
            if (matchValue[2].tail != null) {
              if (matchValue[2].tail.tail == null) {
                var e_1 = matchValue[1].head;
                var n = matchValue[2].head;
                return new _ast.ExprKind("Property", [e_1, n]);
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
          return $target6();
        }
      } else {
        if (matchValue[0].Case === "Call") {
          if (matchValue[1].tail != null) {
            if (matchValue[2].tail != null) {
              var args = matchValue[0].Fields[2];
              var e_1 = matchValue[1].head;
              var es_1 = matchValue[1].tail;
              var n = matchValue[2].head;
              var ns_1 = matchValue[2].tail;
              {
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
                            var args_2 = matchValue_1[0].tail;
                            var e_2 = matchValue_1[1].head;
                            var es_3 = matchValue_1[1].tail;
                            var ns_3 = matchValue_1[2];
                            return _fableCore.List.ofArray([new _ast.Argument(null, e_2)], rebuildArgs(args_2)(es_3)(ns_3));
                          } else {
                            return $target3();
                          }
                        }
                      }
                    };
                  };
                };

                return new _ast.ExprKind("Call", [e_1, n, rebuildArgs(args)(es_1)(ns_1)]);
              }
            } else {
              return $target7();
            }
          } else {
            return $target7();
          }
        } else {
          if (matchValue[0].Case === "Variable") {
            if (matchValue[1].tail == null) {
              if (matchValue[2].tail != null) {
                if (matchValue[2].tail.tail == null) {
                  var n = matchValue[2].head;
                  return new _ast.ExprKind("Variable", [n]);
                } else {
                  return $target5();
                }
              } else {
                return $target5();
              }
            } else {
              return $target5();
            }
          } else {
            if (matchValue[0].Case === "Number") {
              return $target10();
            } else {
              if (matchValue[0].Case === "Boolean") {
                return $target10();
              } else {
                if (matchValue[0].Case === "String") {
                  return $target10();
                } else {
                  if (matchValue[0].Case === "Empty") {
                    return $target10();
                  } else {
                    if (matchValue[0].Case === "Null") {
                      return $target10();
                    } else {
                      if (matchValue[0].Case === "Unit") {
                        return $target10();
                      } else {
                        if (matchValue[2].tail == null) {
                          var els = matchValue[1];
                          return new _ast.ExprKind("List", [els]);
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
  }
});
//# sourceMappingURL=astops.js.map