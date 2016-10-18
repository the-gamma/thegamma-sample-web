(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./ast/astops", "./ast/ast", "../libraries/common", "./ast/typeops", "../gui/html"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./ast/astops"), require("./ast/ast"), require("../libraries/common"), require("./ast/typeops"), require("../gui/html"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.astops, global.ast, global.common, global.typeops, global.html);
    global.editors = mod.exports;
  }
})(this, function (exports, _fableCore, _astops, _ast, _common, _typeops, _html) {
  "use strict";

  exports.__esModule = true;
  exports.collectItemListEditors = exports.AddActionSchema = exports.CreateActionSchema = exports.ItemListSchema = exports.collectNestedChoiceEditors = exports.collectSingleChoiceEditors = exports.Editor = exports.Property = undefined;
  exports.getMembers = getMembers;
  exports.extractMetadata = extractMetadata;
  exports.getProperty = getProperty;
  exports.filterProperties = filterProperties;
  exports.dominant = dominant;
  exports.chooseableProperty = chooseableProperty;
  exports.pickChainSuffixes = pickChainSuffixes;
  exports.collectCmdEditors = collectCmdEditors;
  exports.replace = replace;
  exports.replaceNameWithValue = replaceNameWithValue;
  exports.replaceTwoNamesWithValues = replaceTwoNamesWithValues;
  exports.removeRangeWithPrecendingDot = removeRangeWithPrecendingDot;
  exports.insertDotTextAfter = insertDotTextAfter;
  exports.renderDoc = renderDoc;
  exports.renderNestedDoc = renderNestedDoc;
  exports.renderEditor = renderEditor;

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

  var Property = exports.Property = function Property(caseName, fields) {
    _classCallCheck(this, Property);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(Property.prototype, ["FSharpUnion"], "TheGamma.Editors.Property");

  var Editor = exports.Editor = function () {
    function Editor(caseName, fields) {
      _classCallCheck(this, Editor);

      this.Case = caseName;
      this.Fields = fields;
    }

    _createClass(Editor, [{
      key: "Range",
      get: function get() {
        return this.Case === "NestedChoice" ? (0, _astops.unionRanges)(this.Fields[2].Range, this.Fields[3].Range) : this.Case === "CreateList" ? _fableCore.Seq.fold(function (r, n) {
          return (0, _astops.unionRanges)(r, n.Range);
        }, new _ast.Range(this.Fields[1].Range.End, this.Fields[1].Range.End), this.Fields[2]) : this.Fields[1].Range;
      }
    }]);

    return Editor;
  }();

  _fableCore.Util.setInterfaces(Editor.prototype, ["FSharpUnion"], "TheGamma.Editors.Editor");

  function getMembers(typ) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return typ.Case === "Object" ? builder_.Return(typ.Fields[0].Members) : typ.Case === "Delayed" ? builder_.Bind((0, _common.Async$2EAwaitFuture$2EStatic)(typ.Fields[1]), function (_arg1) {
          return builder_.ReturnFrom(getMembers(_arg1));
        }) : function () {
          _common.Log.error("editors", "getMembers: Type %O is not an object", typ);

          return builder_.Return(function () {
            throw "getMembers: Not an object";
          }());
        }();
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function extractMetadata(m) {
    var doc = _fableCore.Seq.tryPick(function (m_1) {
      return (m_1.Context === "http://thegamma.net" ? m_1.Type === "Documentation" : false) ? m_1.Data : null;
    }, m);

    var schema = _fableCore.Seq.tryPick(function (m_1) {
      return m_1.Context === "http://schema.org" ? m_1 : null;
    }, m);

    return [schema, doc != null ? doc : new _ast.Documentation("None", [])];
  }

  function getProperty(name, members) {
    return _fableCore.Seq.tryPick(function (_arg1) {
      var $target1 = function $target1() {
        return null;
      };

      if (_arg1.Case === "Property") {
        if (_arg1.Fields[0] === name.Name) {
          var m = _arg1.Fields[2];
          var n = _arg1.Fields[0];
          var t = _arg1.Fields[1];
          {
            var patternInput = extractMetadata(m);
            return [patternInput[0], t, patternInput[1]];
          }
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }, members);
  }

  function filterProperties(f, members) {
    var filtered = Array.from(_fableCore.Seq.choose(function (_arg1) {
      return _arg1.Case === "Property" ? function () {
        var patternInput = extractMetadata(_arg1.Fields[2]);

        if (f([_arg1.Fields[0], patternInput[0], _arg1.Fields[1]])) {
          return new Property("Property", [_arg1.Fields[0], patternInput[0], _arg1.Fields[1]]);
        }
      }() : null;
    }, members));
    return filtered;
  }

  function dominant(all, subset) {
    var nall = _fableCore.Seq.count(all);

    var nsub = _fableCore.Seq.count(subset);

    if (nsub >= 2) {
      return nsub >= ~~(nall * 2 / 3);
    } else {
      return false;
    }
  }

  function chooseableProperty(equalTyp, name, typ) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(getMembers(typ), function (_arg1) {
          var matchValue = getProperty(name.Node, _arg1);

          var $target1 = function $target1() {
            return builder_.Return();
          };

          if (matchValue != null) {
            if (matchValue[0] != null) {
              var _ret = function () {
                var propSchema = matchValue[0];
                var propTyp = matchValue[1];
                {
                  var alts = filterProperties(function (_arg2) {
                    return _arg2[1] != null ? function () {
                      var s = _arg2[1];

                      if (s.Type === propSchema.Type) {
                        if (!equalTyp) {
                          return true;
                        } else {
                          return (0, _typeops.typesEqual)(_arg2[2])(propTyp);
                        }
                      } else {
                        return false;
                      }
                    }() : false;
                  }, _arg1);

                  if (dominant(_arg1, alts)) {
                    return {
                      v: builder_.Return([name, alts])
                    };
                  } else {
                    return {
                      v: builder_.Return()
                    };
                  }
                }
              }();

              if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function pickChainSuffixes(f, expr) {
    var loop = function loop(res) {
      return function (suffix) {
        return function (expr_1) {
          return function (builder_) {
            return builder_.Delay(function (unitVar) {
              return expr_1.Node.Case === "Property" ? function () {
                var inst = expr_1.Node.Fields[0];
                var name = expr_1.Node.Fields[1];
                return builder_.Bind(getMembers(inst.Entity.Type), function (_arg1) {
                  var matchValue = getProperty(name.Node, _arg1);

                  if (matchValue == null) {
                    return builder_.ReturnFrom(loop(res)(suffix)(inst));
                  } else {
                    var _ret2 = function () {
                      var propTy = matchValue[1];
                      var propSch = matchValue[0];
                      var propDoc = matchValue[2];
                      var suffix_1 = new _fableCore.List([inst.Entity.Type, name, propSch, propTy, propDoc], suffix);
                      return {
                        v: builder_.Bind(f(suffix_1), function (_arg2) {
                          return _arg2 != null ? builder_.ReturnFrom(loop(new _fableCore.List(_arg2, res))(suffix_1)(inst)) : builder_.ReturnFrom(loop(res)(suffix_1)(inst));
                        })
                      };
                    }();

                    if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
                  }
                });
              }() : function () {
                var activePatternResult6074 = (0, _astops.$ExprLeaf$ExprNode$)(expr_1.Node);

                if (activePatternResult6074.Case === "Choice1Of2") {
                  return builder_.Return(res);
                } else {
                  var es = activePatternResult6074.Fields[0][0];
                  return builder_.ReturnFrom(function () {
                    var f_1 = function f_1(st) {
                      return function (e) {
                        return loop(st)(new _fableCore.List())(e);
                      };
                    };

                    return function (l) {
                      return _common.Async.fold(f_1, res, l);
                    };
                  }()(es));
                }
              }();
            });
          }(_fableCore.AsyncBuilder.singleton);
        };
      };
    };

    return loop(new _fableCore.List())(new _fableCore.List())(expr);
  }

  var collectSingleChoiceEditors = exports.collectSingleChoiceEditors = function () {
    var f = function f(chain) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return chain.tail != null ? function () {
            var tyParent = chain.head[0];
            var name = chain.head[1];
            var doc = chain.head[4];
            return builder_.Bind(chooseableProperty(true, name, tyParent), function (_arg1) {
              return builder_.Return(function () {
                var $var16 = _arg1;

                if ($var16 != null) {
                  return function (tupledArg) {
                    return new Editor("SingleChoice", [doc, tupledArg[0], tupledArg[1]]);
                  }($var16);
                } else {
                  return $var16;
                }
              }());
            });
          }() : builder_.Return();
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    return function (expr) {
      return pickChainSuffixes(f, expr);
    };
  }();

  var collectNestedChoiceEditors = exports.collectNestedChoiceEditors = function () {
    var f = function f(chain) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          var $target1 = function $target1() {
            return builder_.Return();
          };

          if (chain.tail != null) {
            if (chain.tail.tail != null) {
              if (chain.tail.head[2] != null) {
                var _ret3 = function () {
                  var catDoc = chain.head[4];
                  var catName = chain.head[1];
                  var catParentTy = chain.head[0];
                  var catSch = chain.head[2];
                  var catTy = chain.head[3];
                  var valDoc = chain.tail.head[4];
                  var valName = chain.tail.head[1];
                  var valParentTy = chain.tail.head[0];
                  var valSch = chain.tail.head[2];
                  var valTy = chain.tail.head[3];
                  {
                    _common.Log.trace("editors", "checking %s.%s", catName.Node.Name, valName.Node.Name);

                    return {
                      v: builder_.Bind(chooseableProperty(false, catName, catParentTy), function (_arg1) {
                        return builder_.Bind(chooseableProperty(true, valName, valParentTy), function (_arg2) {
                          var matchValue = [_arg1, _arg2];

                          var $target1_1 = function $target1_1() {
                            return builder_.Return();
                          };

                          if (matchValue[0] != null) {
                            if (matchValue[1] != null) {
                              var _ret4 = function () {
                                var catMembers = matchValue[0][1];
                                var catName_1 = matchValue[0][0];
                                var valMembers = matchValue[1][1];
                                var valName_1 = matchValue[1][0];
                                {
                                  var _ret5 = function () {
                                    _common.Log.trace("editors", "collecting %s nested members", catMembers.length);

                                    var nestedMembers = function nestedMembers(trunc) {
                                      return _common.Async.Array.map(function (_arg1_1) {
                                        return function (builder__1) {
                                          return builder__1.Delay(function (unitVar_1) {
                                            return builder__1.Bind(getMembers(_arg1_1.Fields[2]), function (_arg3) {
                                              var filtered = filterProperties(function (_arg4) {
                                                return _arg4[1] != null ? function () {
                                                  var s = _arg4[1];

                                                  if (s.Type === valSch.Type) {
                                                    return (0, _typeops.typesEqual)(_arg4[2])(valTy);
                                                  } else {
                                                    return false;
                                                  }
                                                }() : false;
                                              }, _arg3);
                                              return builder__1.Return([_arg1_1, [_arg3, filtered]]);
                                            });
                                          });
                                        }(_fableCore.AsyncBuilder.singleton);
                                      }, trunc(catMembers));
                                    };

                                    return {
                                      v: {
                                        v: builder_.Bind(nestedMembers(function ($var17) {
                                          return Array.from(_fableCore.Seq.truncate(5, $var17));
                                        }), function (_arg5) {
                                          return (_fableCore.Seq.count(_arg5) > 2 ? dominant(_fableCore.Seq.collect(function ($var18) {
                                            return $var18[1][0];
                                          }, _arg5), _fableCore.Seq.collect(function ($var19) {
                                            return $var19[1][1];
                                          }, _arg5)) : false) ? builder_.Bind(nestedMembers(function (x) {
                                            return x;
                                          }), function (_arg6) {
                                            var props = _arg6.map(function (tupledArg) {
                                              return [tupledArg[0], tupledArg[1][1]];
                                            });

                                            return builder_.Return(new Editor("NestedChoice", [catDoc, valDoc, catName_1, valName_1, props]));
                                          }) : builder_.Return();
                                        })
                                      }
                                    };
                                  }();

                                  if ((typeof _ret5 === "undefined" ? "undefined" : _typeof(_ret5)) === "object") return _ret5.v;
                                }
                              }();

                              if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
                            } else {
                              return $target1_1();
                            }
                          } else {
                            return $target1_1();
                          }
                        });
                      })
                    };
                  }
                }();

                if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
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
    };

    return function (expr) {
      return pickChainSuffixes(f, expr);
    };
  }();

  var ItemListSchema = exports.ItemListSchema = function () {
    function ItemListSchema(name) {
      _classCallCheck(this, ItemListSchema);

      this.name = name;
    }

    ItemListSchema.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    ItemListSchema.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return ItemListSchema;
  }();

  _fableCore.Util.setInterfaces(ItemListSchema.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Editors.ItemListSchema");

  var CreateActionSchema = exports.CreateActionSchema = function () {
    function CreateActionSchema(result) {
      _classCallCheck(this, CreateActionSchema);

      this.result = result;
    }

    CreateActionSchema.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    CreateActionSchema.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return CreateActionSchema;
  }();

  _fableCore.Util.setInterfaces(CreateActionSchema.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Editors.CreateActionSchema");

  var AddActionSchema = exports.AddActionSchema = function () {
    function AddActionSchema(targetCollection) {
      _classCallCheck(this, AddActionSchema);

      this.targetCollection = targetCollection;
    }

    AddActionSchema.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    AddActionSchema.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return AddActionSchema;
  }();

  _fableCore.Util.setInterfaces(AddActionSchema.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Editors.AddActionSchema");

  var collectItemListEditors = exports.collectItemListEditors = function () {
    var f = function f(chain) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          var $target1 = function $target1() {
            var $target1 = function $target1() {
              return builder_.Return();
            };

            if (chain.tail != null) {
              if (chain.head[2] != null) {
                if (function () {
                  var catDoc = chain.head[4];
                  var caTy = chain.head[3];
                  var caSch = chain.head[2];
                  var caParentTy = chain.head[0];
                  var caName = chain.head[1];
                  return caSch.Type === "CreateAction";
                }()) {
                  var _ret6 = function () {
                    var addActions = chain.tail;
                    var caName = chain.head[1];
                    var caParentTy = chain.head[0];
                    var caSch = chain.head[2];
                    var caTy = chain.head[3];
                    var catDoc = chain.head[4];
                    {
                      var _ret7 = function () {
                        var listName = caSch.Data.result.name;

                        var collectAdds = function collectAdds(added) {
                          return function (lastTy) {
                            return function (_arg1) {
                              var $target1_1 = function $target1_1() {
                                return [_fableCore.List.reverse(added), lastTy];
                              };

                              if (_arg1.tail != null) {
                                if (_arg1.head[2] != null) {
                                  if (function () {
                                    var addTy = _arg1.head[3];
                                    var addSch = _arg1.head[2];
                                    var addParentTy = _arg1.head[0];
                                    var addName = _arg1.head[1];

                                    if (addSch.Type === "AddAction") {
                                      return listName === addSch.Data.targetCollection.name;
                                    } else {
                                      return false;
                                    }
                                  }()) {
                                    var addActions_1 = _arg1.tail;
                                    var addName = _arg1.head[1];
                                    var addParentTy = _arg1.head[0];
                                    var addSch = _arg1.head[2];
                                    var addTy = _arg1.head[3];
                                    return collectAdds(new _fableCore.List(addName, added))(addTy)(addActions_1);
                                  } else {
                                    return $target1_1();
                                  }
                                } else {
                                  return $target1_1();
                                }
                              } else {
                                return $target1_1();
                              }
                            };
                          };
                        };

                        var patternInput = collectAdds(new _fableCore.List())(caTy)(addActions);
                        return {
                          v: {
                            v: builder_.Bind(getMembers(patternInput[1]), function (_arg2) {
                              var availableAdds = filterProperties(function (_arg3) {
                                var $target1_1 = function $target1_1() {
                                  return false;
                                };

                                if (_arg3[1] != null) {
                                  if (function () {
                                    var s = _arg3[1];
                                    return s.Type === "AddAction";
                                  }()) {
                                    var n = _arg3[0];
                                    var s = _arg3[1];
                                    var t = _arg3[2];
                                    return s.Data.targetCollection.name === listName;
                                  } else {
                                    return $target1_1();
                                  }
                                } else {
                                  return $target1_1();
                                }
                              }, _arg2);
                              return builder_.Return(new Editor("CreateList", [catDoc, caName, Array.from(patternInput[0]), availableAdds]));
                            })
                          }
                        };
                      }();

                      if ((typeof _ret7 === "undefined" ? "undefined" : _typeof(_ret7)) === "object") return _ret7.v;
                    }
                  }();

                  if ((typeof _ret6 === "undefined" ? "undefined" : _typeof(_ret6)) === "object") return _ret6.v;
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

          if (chain.tail != null) {
            if (chain.head[2] != null) {
              if (chain.tail.tail != null) {
                if (chain.tail.head[2] != null) {
                  if (function () {
                    var caSch2 = chain.tail.head[2];
                    var caSch1 = chain.head[2];

                    if (caSch1.Type === "CreateAction") {
                      return caSch2.Type === "CreateAction";
                    } else {
                      return false;
                    }
                  }()) {
                    var caSch1 = chain.head[2];
                    var caSch2 = chain.tail.head[2];
                    return builder_.Return();
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
      }(_fableCore.AsyncBuilder.singleton);
    };

    return function (expr) {
      return pickChainSuffixes(f, expr);
    };
  }();

  function collectCmdEditors(cmd) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var $target0 = function $target0(e) {
          _common.Log.trace("editors", "single choice");

          return builder_.Bind(collectSingleChoiceEditors(e), function (_arg1) {
            _common.Log.trace("editors", "item list");

            return builder_.Bind(collectItemListEditors(e), function (_arg2) {
              _common.Log.trace("editors", "multi choice");

              return builder_.Bind(collectNestedChoiceEditors(e), function (_arg3) {
                return builder_.Return(_fableCore.List.append(_arg1, _fableCore.List.append(_arg3, _arg2)));
              });
            });
          });
        };

        if (cmd.Node.Case === "Expr") {
          return $target0(cmd.Node.Fields[0]);
        } else {
          return $target0(cmd.Node.Fields[1]);
        }
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function replace(rng, newValue, text) {
    return text.substr(0, rng.Start) + newValue + text.substr(rng.End + 1);
  }

  function replaceNameWithValue(text, n, value) {
    var newValue = (0, _astops.escapeIdent)(value);
    return replace(n.Range, newValue, text);
  }

  function replaceTwoNamesWithValues(text, n1, n2, s1, s2) {
    return replace(n1.Range, (0, _astops.escapeIdent)(s1), replace(n2.Range, (0, _astops.escapeIdent)(s2), text));
  }

  function removeRangeWithPrecendingDot(text, rng) {
    var start = rng.Start;

    while (start > 0 ? text[start] !== "." : false) {
      start = start - 1;
    }

    return text.substr(0, start) + text.substr(rng.End + 1);
  }

  function insertDotTextAfter(origText, rng, ins) {
    return origText.substr(0, rng.End + 1) + "." + (0, _astops.escapeIdent)(ins) + origText.substr(rng.End + 1);
  }

  function renderDoc(_arg1) {
    return _arg1.Case === "None" ? function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("span")(new _fableCore.List())(new _fableCore.List()) : _arg1.Case === "Details" ? function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("div")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("h3")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_arg1.Fields[0])])), function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("p")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_arg1.Fields[1])]))])) : function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("h3")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_arg1.Fields[0])]));
  }

  function renderNestedDoc(_arg1_0, _arg1_1) {
    var _arg1 = [_arg1_0, _arg1_1];

    var $target1 = function $target1() {
      return [function (arg0) {
        return function (arg1) {
          return _html.El.op_Dynamic(arg0, arg1);
        };
      }(_html.h)("h3")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)("Choose a value")])), function (arg0) {
        return function (arg1) {
          return _html.El.op_Dynamic(arg0, arg1);
        };
      }(_html.h)("p")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)("First choose a category, then choose a value.")]))];
    };

    if (_arg1[0].Case === "Details") {
      if (_arg1[1].Case === "Details") {
        var d1 = _arg1[0].Fields[1];
        var d2 = _arg1[1].Fields[1];
        var t2 = _arg1[1].Fields[0];
        return [function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("h3")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(t2)])), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("p")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(d1), (0, _html.text)(d2)]))];
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function renderEditor(typeCheck, setValue, origText, _arg1) {
    return _arg1.Case === "CreateList" ? function () {
      var edits = _arg1.Fields[2].map(function (n) {
        return [n, removeRangeWithPrecendingDot(origText, n.Range)];
      });

      var patternInput = function (arg00) {
        return function (arg10) {
          return _html.h.part(arg00, arg10);
        };
      }(_fableCore.Set.create(null, new _fableCore.GenericComparer(function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      })))(function (s) {
        return function (n) {
          return _fableCore.Set.add(n, s);
        };
      });

      edits.forEach(function (tupledArg) {
        (function (arg00) {
          _fableCore.Async.startImmediate(arg00);
        })(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(typeCheck(tupledArg[1]), function (_arg14) {
              return _arg14 ? function () {
                patternInput[0](tupledArg[0].Node.Name);
                return builder_.Zero();
              }() : builder_.Zero();
            });
          });
        }(_fableCore.AsyncBuilder.singleton));
      });
      return patternInput[1](function (safe) {
        return function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "ed-list")]))(_fableCore.List.ofArray([renderDoc(_arg1.Fields[0]), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "control")]))(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("ul")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.collect(function (matchValue) {
            return _fableCore.Seq.singleton(function (arg0) {
              return function (arg1) {
                return _html.El.op_Dynamic(arg0, arg1);
              };
            }(_html.h)("li")(new _fableCore.List())(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
              var dis = !safe.has(matchValue[0].Node.Name);
              return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.text)(matchValue[0].Node.Name)), _fableCore.Seq.delay(function (unitVar_2) {
                return _fableCore.Seq.append(_fableCore.Seq.singleton((0, _html.text)(" ")), _fableCore.Seq.delay(function (unitVar_3) {
                  return _fableCore.Seq.singleton(function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("button")(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_4) {
                    return _fableCore.Seq.append(dis ? _fableCore.Seq.singleton((0, _html.op_EqualsGreater)("disabled", "disabled")) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_5) {
                      return _fableCore.Seq.singleton((0, _html.op_EqualsBangGreater)("click", function (el) {
                        return function (e) {
                          setValue("list-delete")(matchValue[0].Node.Name)(matchValue[1]);
                        };
                      }));
                    }));
                  })))(_fableCore.List.ofArray([function (arg0) {
                    return function (arg1) {
                      return _html.El.op_Dynamic(arg0, arg1);
                    };
                  }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", dis ? "fa fa-ban" : "fa fa-times")]))(new _fableCore.List())])));
                }));
              }));
            }))));
          }, edits);
        }))), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("chosen")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("data-placeholder", "add another item..."), (0, _html.op_EqualsBangGreater)("change", function (el) {
          return function (e) {
            var sel = el.value;
            var last = _arg1.Fields[2].length === 0 ? _arg1.Fields[1] : _arg1.Fields[2][_arg1.Fields[2].length - 1];
            setValue("list-add")(sel)(insertDotTextAfter(origText, last.Range, sel));
          };
        })]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.append(_fableCore.Seq.singleton(function (arg0) {
            return function (arg1) {
              return _html.El.op_Dynamic(arg0, arg1);
            };
          }(_html.h)("option")(new _fableCore.List())(new _fableCore.List())), _fableCore.Seq.delay(function (unitVar_1) {
            return _fableCore.Seq.collect(function (matchValue) {
              return _fableCore.Seq.singleton(function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("option")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(matchValue.Fields[0])])));
            }, _arg1.Fields[3]);
          }));
        })))]))]));
      });
    }() : _arg1.Case === "NestedChoice" ? function () {
      var patternInput = function (arg00) {
        return function (arg10) {
          return _html.h.part(arg00, arg10);
        };
      }([_arg1.Fields[2].Node.Name, _arg1.Fields[3].Node.Name])(function (_arg1_1) {
        return function (n) {
          return n;
        };
      });

      return patternInput[1](function (tupledArg) {
        var selected = function () {
          var $var20 = _fableCore.Seq.tryFind(function (tupledArg_1) {
            return tupledArg_1[0].Fields[0] === tupledArg[0];
          }, _arg1.Fields[4]);

          if ($var20 != null) {
            return function (tuple) {
              return tuple[1];
            }($var20);
          } else {
            return $var20;
          }
        }();

        var nested = selected != null ? selected : [];
        var patternInput_1 = renderNestedDoc(_arg1.Fields[0], _arg1.Fields[1]);
        return function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "ed-nested")]))(_fableCore.List.ofArray([patternInput_1[0], patternInput_1[1], function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "control")]))(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("chosen")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("change", function (el) {
          return function (e) {
            patternInput[0]([el.value, ""]);
          };
        })]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.collect(function (matchValue) {
            var name = matchValue[0].Fields[0];
            return _fableCore.Seq.singleton(function () {
              var sel = name === tupledArg[0] ? _fableCore.List.ofArray([(0, _html.op_EqualsGreater)("selected", "selected")]) : new _fableCore.List();
              return function (arg0) {
                return function (arg1) {
                  return _html.El.op_Dynamic(arg0, arg1);
                };
              }(_html.h)("option")(sel)(_fableCore.List.ofArray([(0, _html.text)(name)]));
            }());
          }, _arg1.Fields[4]);
        }))), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("chosen")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("data-placeholder", "choose an item..."), (0, _html.op_EqualsBangGreater)("change", function (el) {
          return function (e) {
            var name2 = el.value;
            setValue("nested")(name2)(replaceTwoNamesWithValues(origText, _arg1.Fields[2], _arg1.Fields[3], tupledArg[0], name2));
          };
        })]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.append(tupledArg[1] === "" ? _fableCore.Seq.singleton(function (arg0) {
            return function (arg1) {
              return _html.El.op_Dynamic(arg0, arg1);
            };
          }(_html.h)("option")(new _fableCore.List())(new _fableCore.List())) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
            return _fableCore.Seq.collect(function (matchValue) {
              return _fableCore.Seq.singleton(function () {
                var sel = matchValue.Fields[0] === tupledArg[1] ? _fableCore.List.ofArray([(0, _html.op_EqualsGreater)("selected", "selected")]) : new _fableCore.List();
                return function (arg0) {
                  return function (arg1) {
                    return _html.El.op_Dynamic(arg0, arg1);
                  };
                }(_html.h)("option")(sel)(_fableCore.List.ofArray([(0, _html.text)(matchValue.Fields[0])]));
              }());
            }, nested);
          }));
        })))]))]));
      });
    }() : function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "ed-single")]))(_fableCore.List.ofArray([renderDoc(_arg1.Fields[0]), function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "control")]))(_fableCore.List.ofArray([function (arg0) {
      return function (arg1) {
        return _html.El.op_Dynamic(arg0, arg1);
      };
    }(_html.h)("chosen")(_fableCore.List.ofArray([(0, _html.op_EqualsBangGreater)("change", function (el) {
      return function (e) {
        var value = el.value;
        setValue("single")(value)(replaceNameWithValue(origText, _arg1.Fields[1], value));
      };
    })]))(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.collect(function (matchValue) {
        return _fableCore.Seq.singleton(function () {
          var sel = matchValue.Fields[0] === _arg1.Fields[1].Node.Name ? _fableCore.List.ofArray([(0, _html.op_EqualsGreater)("selected", "selected")]) : new _fableCore.List();
          return function (arg0) {
            return function (arg1) {
              return _html.El.op_Dynamic(arg0, arg1);
            };
          }(_html.h)("option")(sel)(_fableCore.List.ofArray([(0, _html.text)(matchValue.Fields[0])]));
        }());
      }, _arg1.Fields[2]);
    })))]))]));
  }
});
//# sourceMappingURL=editors.js.map