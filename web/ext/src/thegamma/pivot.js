(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./ast", "./babel/babelast", "./extensions", "./providers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./ast"), require("./babel/babelast"), require("./extensions"), require("./providers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.ast, global.babelast, global.extensions, global.providers);
    global.pivot = mod.exports;
  }
})(this, function (exports, _fableCore, _ast, _babelast, _extensions, _providers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Context = exports.propertyEmitter = exports.Transform = exports.Field = exports.Transformation = exports.Paging = exports.SortDirection = exports.Aggregation = undefined;
  exports.trimLeft = trimLeft;
  exports.trimRight = trimRight;
  exports.concatUrl = concatUrl;
  exports.withDocs = withDocs;
  exports.withSchema = withSchema;
  exports.withCreateAction = withCreateAction;
  exports.withAddAction = withAddAction;
  exports.withThingSchema = withThingSchema;
  exports.makeObjectType = makeObjectType;
  exports.isNumeric = isNumeric;
  exports.isConcatenable = isConcatenable;
  exports.ident = ident;
  exports.str = str;
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
                    return _fableCore.List.ofArray([new Field("count", "num")]);
                  } else {
                    if (_arg2.Case === "CountDistinct") {
                      return _fableCore.List.ofArray([new Field(oldFields.get(_arg2.Fields[0]).Name, "num")]);
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

  function withDocs(title, details, membr) {
    return membr.Case === "Property" ? new _ast.Member("Property", [membr.Fields[0], membr.Fields[1], membr.Fields[2], new _ast.Documentation("Details", [title, details]), membr.Fields[4]]) : new _ast.Member("Method", [membr.Fields[0], membr.Fields[1], membr.Fields[2], membr.Fields[3], new _ast.Documentation("Details", [title, details]), membr.Fields[5]]);
  }

  function withSchema(actTyp, fldName, listName, membr) {
    return membr.Case === "Property" ? function () {
      var schema = new _ast.Schema(actTyp, _fableCore.Util.createObj(_fableCore.List.ofArray([["@context", "http://schema.org/"], ["@type", actTyp], [fldName, {
        "@type": "ItemList",
        name: listName
      }]])));
      return new _ast.Member("Property", [membr.Fields[0], membr.Fields[1], schema, membr.Fields[3], membr.Fields[4]]);
    }() : function () {
      throw "withSchema: expected property";
    }();
  }

  function withCreateAction(action, membr) {
    return membr;
  }

  function withAddAction(action, membr) {
    return membr;
  }

  function withThingSchema(name, annotation, membr) {
    return membr;
  }

  function makeObjectType(members) {
    return new _ast.Type("Object", [new _ast.ObjectType(Array.from(members), new _fableCore.List())]);
  }

  function isNumeric(fld) {
    return fld === "num";
  }

  function isConcatenable(fld) {
    return fld === "string";
  }

  function ident(s) {
    return new _babelast.Expression("IdentifierExpression", [s, null]);
  }

  function str(v) {
    return new _babelast.Expression("StringLiteral", [v, null]);
  }

  function arr(l) {
    return new _babelast.Expression("ArrayExpression", [l, null]);
  }

  function op_Dynamic(e, s) {
    return new _babelast.Expression("MemberExpression", [e, new _babelast.Expression("IdentifierExpression", [s, null]), false, null]);
  }

  function op_DivideQmarkDivide(e, a) {
    return new _babelast.Expression("MemberExpression", [e, a, true, null]);
  }

  function op_DivideAtDivide(e, args) {
    return new _babelast.Expression("CallExpression", [e, args, null]);
  }

  function func(v, f) {
    var body = new _babelast.Statement("BlockStatement", [_fableCore.List.ofArray([new _babelast.Statement("ReturnStatement", [f(ident(v)), null])]), null]);
    return new _babelast.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babelast.Pattern("IdentifierPattern", [v, null])]), body, false, false, null]);
  }

  function getTypeAndEmitter(_arg1) {
    return _arg1 === "string" ? [new _ast.Type("Primitive", ["string"]), function (x) {
      return x;
    }] : _arg1 === "num" ? [new _ast.Type("Primitive", ["num"]), function (e) {
      return op_DivideAtDivide(ident("Number"), _fableCore.List.ofArray([e]));
    }] : function () {
      throw "getTypeAndEmitter: Unknown primitive type";
    }();
  }

  var propertyEmitter = exports.propertyEmitter = new _ast.Emitter(function (tupledArg) {
    return tupledArg[0];
  });

  function makeMethodEmitter(callid, pars) {
    return new _ast.Emitter(function (tupledArg) {
      var args = arr(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
        return _fableCore.Seq.collect(function (matchValue) {
          return _fableCore.Seq.singleton(matchValue[1]);
        }, tupledArg[1]);
      })));
      return op_DivideAtDivide(op_Dynamic(tupledArg[0], "addCall"), _fableCore.List.ofArray([str(callid), args]));
    });
  }

  function makeDataEmitter(isSeries, tfs) {
    return new _ast.Emitter(function (tupledArg) {
      return isSeries ? op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "create"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(tupledArg[0], "getData"), _fableCore.List.ofArray([str(Transform.toUrl(_fableCore.List.reverse(tfs)))])), str("key"), str("value"), str("")])) : op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "ordinal"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(tupledArg[0], "getData"), _fableCore.List.ofArray([str(Transform.toUrl(_fableCore.List.reverse(tfs)))])), str("key"), str("value"), str("")]));
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
    return new _ast.Member("Property", [name, makePivotType(ctx, tfs), null, new _ast.Documentation("None", []), propertyEmitter]);
  }

  function makeMethod(ctx, name, tfs, callid, args) {
    return new _ast.Member("Method", [name, new _fableCore.List(), _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.collect(function (matchValue) {
        return _fableCore.Seq.singleton([matchValue[0], false, new _ast.Type("Primitive", [matchValue[1]])]);
      }, args);
    })), makePivotType(ctx, tfs), new _ast.Documentation("None", []), makeMethodEmitter(callid, args)]);
  }

  function makeDataMember(ctx, name, tfs) {
    var fields = Transform.transformFields(ctx.InputFields, _fableCore.List.reverse(tfs));

    var patternInput = function () {
      var $target1 = function $target1() {
        var membs = Array.from(fields).map(function (fld) {
          var patternInput = getTypeAndEmitter(fld.Type);
          var emitter = new _ast.Emitter(function (tupledArg) {
            return patternInput[1](op_DivideQmarkDivide(tupledArg[0], str(fld.Name)));
          });
          return new _ast.Member("Property", [fld.Name, patternInput[0], null, new _ast.Documentation("Text", [""]), emitter]);
        });
        var recTyp = new _ast.Type("Object", [new _ast.ObjectType(membs, new _fableCore.List())]);
        return [ctx.LookupNamed("series")(_fableCore.List.ofArray([new _ast.Type("Primitive", ["num"]), recTyp])), false];
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

    return new _ast.Member("Property", [name, patternInput[0], null, new _ast.Documentation("None", []), makeDataEmitter(patternInput[1], tfs)]);
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
            return withThingSchema("ListItem", "series key", withDocs("Get the data", "Here, we select one of the attribute of the data set as the 'key' and one as a 'value'. In the first list, you can choose the key.", makeProperty(ctx, "with key " + field.Name, _fableCore.List.ofArray([new Transformation("GetSeries", [field.Name, "!"])], rest))));
          }, ctx.Fields);
        })));
      } else {
        return $target2();
      }
    } else {
      if (matchValue[1] === "!") {
        return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.map(function (field) {
            return withThingSchema("ListItem", "series value", withDocs("Get the data", "In the second list, choose attribute that you want to use as the value.", makeDataMember(ctx, "and value " + field.Name, _fableCore.List.ofArray([new Transformation("GetSeries", [matchValue[0], field.Name])], rest))));
          }, ctx.Fields);
        })));
      } else {
        return $target2();
      }
    }
  }

  function handlePagingRequest(ctx, rest, pgid, ops) {
    var takeMemb = withDocs("", "Take the specified number of rows and drop the rest", makeMethod(ctx, "take", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("Paging", [_fableCore.List.reverse(_fableCore.List.ofArray([new Paging("Take", [pgid + "-take"])], ops))])], rest), pgid + "-take", _fableCore.List.ofArray([["count", "num"]])));
    var skipMemb = withDocs("", "Skip the specified number of rows and keep the rest", makeMethod(ctx, "skip", _fableCore.List.ofArray([new Transformation("Paging", [_fableCore.List.ofArray([new Paging("Skip", [pgid + "-skip"])], ops)])], rest), pgid + "-skip", _fableCore.List.ofArray([["count", "num"]])));
    var thenMemb = withDocs("", "Return the data", makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("Paging", [_fableCore.List.reverse(ops)])], rest)));
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
      return _fableCore.Seq.append(_fableCore.Seq.singleton(withDocs("", "Return the data", makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("DropColumns", [dropped])], rest)))), _fableCore.Seq.delay(function (unitVar_1) {
        return _fableCore.Seq.collect(function (field) {
          return !droppedFields.has(field.Name) ? _fableCore.Seq.singleton(withAddAction("Dropped ctx.Fields", withDocs("", _fableCore.String.fsFormat("Removes the field '%s' from the returned data set")(function (x) {
            return x;
          })(field.Name), makeProperty(ctx, "drop " + field.Name, _fableCore.List.ofArray([new Transformation("DropColumns", [_fableCore.List.ofArray([field.Name], dropped)])], rest))))) : _fableCore.Seq.empty();
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
      return _fableCore.Seq.append(_fableCore.Seq.singleton(withDocs("", "Return the data", makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("SortBy", [keys])], rest)))), _fableCore.Seq.delay(function (unitVar_1) {
        return _fableCore.Seq.collect(function (field) {
          return !usedKeys.has(field.Name) ? function () {
            var doc = _fableCore.String.fsFormat("Use the field '%s' as the next sorting keys")(function (x) {
              return x;
            })(field.Name);

            var prefix = keys.Equals(new _fableCore.List()) ? "by " : "and by ";
            return _fableCore.Seq.append(_fableCore.Seq.singleton(withAddAction("Fields used for sorting", function () {
              var title = "";
              return function (membr) {
                return withDocs(title, doc, membr);
              };
            }()(makeProperty(ctx, prefix + field.Name, _fableCore.List.ofArray([new Transformation("SortBy", [_fableCore.List.ofArray([[field.Name, new SortDirection("Ascending", [])]], keys)])], rest))))), _fableCore.Seq.delay(function (unitVar_2) {
              return _fableCore.Seq.singleton(withAddAction("Fields used for sorting", function () {
                var title = "";
                return function (membr) {
                  return withDocs(title, doc, membr);
                };
              }()(makeProperty(ctx, prefix + field.Name + " descending", _fableCore.List.ofArray([new Transformation("SortBy", [_fableCore.List.ofArray([[field.Name, new SortDirection("Descending", [])]], keys)])], rest)))));
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
        return function (doc) {
          return withAddAction("Aggregation operations", function () {
            var title = "";
            return function (membr) {
              return withDocs(title, doc, membr);
            };
          }()(makeProperty(ctx, name, _fableCore.List.ofArray([new Transformation("GroupBy", [keys, _fableCore.List.ofArray([agg], aggs)])], rest))));
        };
      };
    };

    return _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.append(_fableCore.Seq.singleton(withDocs("", "Get data or perform another transformation", makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("GroupBy", [keys, aggs])], rest)))), _fableCore.Seq.delay(function (unitVar_1) {
        return _fableCore.Seq.append(!containsCountAll ? _fableCore.Seq.singleton(makeAggMember("count all")(new Aggregation("CountAll", []))("Count the number of items in the group")) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_2) {
          return _fableCore.Seq.collect(function (fld) {
            return !containsField(fld.Name) ? _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("count distinct " + fld.Name)(new Aggregation("CountDistinct", [fld.Name]))("Count the number of distinct values of the field")), _fableCore.Seq.delay(function (unitVar_3) {
              return _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("return unique " + fld.Name)(new Aggregation("ReturnUnique", [fld.Name]))("Add the value of the field assuming it is unique in the group")), _fableCore.Seq.delay(function (unitVar_4) {
                return _fableCore.Seq.append(isConcatenable(fld.Type) ? _fableCore.Seq.singleton(makeAggMember("concatenate values of " + fld.Name)(new Aggregation("ConcatValues", [fld.Name]))("Concatenate all values of the field")) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_5) {
                  return isNumeric(fld.Type) ? _fableCore.Seq.append(_fableCore.Seq.singleton(makeAggMember("average " + fld.Name)(new Aggregation("Mean", [fld.Name]))("Calculate the average value of the field in the group")), _fableCore.Seq.delay(function (unitVar_6) {
                    return _fableCore.Seq.singleton(makeAggMember("sum " + fld.Name)(new Aggregation("Sum", [fld.Name]))("Sum the values of the field in the group"));
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
        return withCreateAction("Aggregation operations", withDocs(_fableCore.String.fsFormat("Group by %s")(function (x) {
          return x;
        })(field.Name.toLocaleLowerCase()), "Creates groups based on the value of " + field.Name + " and calculte summary " + "values for each group. You can specify a number of summary calculations in the " + "following list:", makeProperty(ctx, prefix + field.Name, _fableCore.List.ofArray([new Transformation("GroupBy", [_fableCore.List.ofArray([field.Name], keys), new _fableCore.List()])], rest))));
      }, ctx.Fields), _fableCore.Seq.delay(function (unitVar_1) {
        return !(keys.tail == null) ? aggregationMembers(ctx, rest, keys, _fableCore.List.ofArray([new Aggregation("GroupKey", [])])) : _fableCore.Seq.empty();
      }));
    })));
  }

  function handleFilterEqNeqRequest(ctx, rest, fld, eq, conds) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var url = concatUrl(concatUrl(ctx.Root, "range"), Transform.toUrl(_fableCore.List.reverse(_fableCore.List.ofArray([new Transformation("FilterBy", [conds])], rest))));
        return builder_.Bind(_extensions.Http.Request("GET", url + "?" + fld), function (_arg2) {
          var options = JSON.parse(_arg2);
          return builder_.Return(makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
            return _fableCore.Seq.map(function (opt) {
              return makeProperty(ctx, opt, _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[fld, eq, opt]], conds)])], rest));
            }, options);
          }))));
        });
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function handleFilterRequest(ctx, rest, conds) {
    var prefix = conds.tail == null ? "" : "and ";
    return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.append(_fableCore.Seq.collect(function (field) {
        return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is", _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[field.Name, true, "!"]], conds)])], rest))), _fableCore.Seq.delay(function (unitVar_1) {
          return _fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is not", _fableCore.List.ofArray([new Transformation("FilterBy", [_fableCore.List.ofArray([[field.Name, false, "!"]], conds)])], rest)));
        }));
      }, ctx.Fields), _fableCore.Seq.delay(function (unitVar_1) {
        return !(conds.tail == null) ? _fableCore.Seq.singleton(withDocs("", "Return the data", makeProperty(ctx, "then", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("FilterBy", [conds])], rest)))) : _fableCore.Seq.empty();
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
                      var flds = patternInput[0].Fields[0];
                      return builder_.Return(handleGroupAggRequest(ctx_1, patternInput[1], flds, aggs));
                    }
                  } else {
                    return builder_.Return(makeObjectType(_fableCore.List.ofArray([withDocs("", "Lets you perform pivot table aggregations.", makeProperty(ctx_1, "group data", _fableCore.List.ofArray([new Transformation("GroupBy", [new _fableCore.List(), new _fableCore.List()])], patternInput[1]))), withDocs("", "Lets you filter data in the table.", makeProperty(ctx_1, "filter data", _fableCore.List.ofArray([new Transformation("FilterBy", [new _fableCore.List()])], patternInput[1]))), withCreateAction("Fields used for sorting", withDocs("Sort the data", "Specify how the data is sorted. You can choose one or more attributes " + "to use for sorting in the following list. Choose 'descending' to sort the values from largest value " + "to smallest value.", makeProperty(ctx_1, "sort data", _fableCore.List.ofArray([new Transformation("SortBy", [new _fableCore.List()])], patternInput[1])))), withCreateAction("Dropped ctx.Fields", withDocs("Filter returned attributes", "Specify which attributes of the data sets should be returned. " + "By default you'll get all available attributes, but you can drop uninteresting attributes by listing " + "them in the following list:", makeProperty(ctx_1, "drop columns", _fableCore.List.ofArray([new Transformation("DropColumns", [new _fableCore.List()])], patternInput[1])))), withDocs("", "Take a number of rows or skip a number of rows.", makeProperty(ctx_1, "paging", _fableCore.List.ofArray([new Transformation("Paging", [new _fableCore.List()])], patternInput[1]))), withDocs("", "Get a single key-value series from the data set.", makeProperty(ctx_1, "get series", _fableCore.List.ofArray([new Transformation("GetSeries", ["!", "!"])], patternInput[1]))), withDocs("", "Returns the transformed data", makeDataMember(ctx_1, "get the data", patternInput[1]))])));
                  }
                }
              }
            }
          }
        }
      });
    }(_fableCore.defaultAsyncBuilder);
  }

  function makePivotType(ctx, tfs) {
    var guid = Transform.toUrl(tfs);
    return new _ast.Type("Delayed", ["pivot: " + guid, function (arg00) {
      return function (arg10) {
        return (0, _extensions.Async$2EAsFuture$2EStatic)(arg00, arg10);
      };
    }(guid)(makePivotTypeImmediate(ctx, tfs))]);
  }

  function providePivotType(root, name, lookupNamed, fields) {
    var fields_1 = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.collect(function (matchValue) {
        return _fableCore.Seq.singleton(new Field(matchValue[0], matchValue[1]));
      }, fields);
    }));

    var typ = makePivotType(new Context(root, lookupNamed, fields_1, fields_1), new _fableCore.List());
    var ctx = op_Dynamic(ident("_restruntime"), "PivotContext");
    return new _providers.ProvidedType("GlobalValue", [name, new _babelast.Expression("NewExpression", [ctx, _fableCore.List.ofArray([str(concatUrl(root, "data")), new _babelast.Expression("ArrayExpression", [new _fableCore.List(), null])]), null]), typ]);
  }
});
//# sourceMappingURL=pivot.js.map