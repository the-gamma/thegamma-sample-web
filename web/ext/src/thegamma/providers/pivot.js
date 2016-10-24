(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./../ast/ast", "./../common/babel", "../../libraries/common", "./providers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./../ast/ast"), require("./../common/babel"), require("../../libraries/common"), require("./providers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.ast, global.babel, global.common, global.providers);
    global.pivot = mod.exports;
  }
})(this, function (exports, _fableCore, _ast, _babel, _common, _providers) {
  "use strict";

  exports.__esModule = true;
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

  var Aggregation = exports.Aggregation = function () {
    function Aggregation(caseName, fields) {
      _classCallCheck(this, Aggregation);

      this.Case = caseName;
      this.Fields = fields;
    }

    Aggregation.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Aggregation.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Aggregation;
  }();

  _fableCore.Util.setInterfaces(Aggregation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Aggregation");

  var SortDirection = exports.SortDirection = function () {
    function SortDirection(caseName, fields) {
      _classCallCheck(this, SortDirection);

      this.Case = caseName;
      this.Fields = fields;
    }

    SortDirection.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    SortDirection.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return SortDirection;
  }();

  _fableCore.Util.setInterfaces(SortDirection.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.SortDirection");

  var Paging = exports.Paging = function () {
    function Paging(caseName, fields) {
      _classCallCheck(this, Paging);

      this.Case = caseName;
      this.Fields = fields;
    }

    Paging.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Paging.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Paging;
  }();

  _fableCore.Util.setInterfaces(Paging.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Paging");

  var Transformation = exports.Transformation = function () {
    function Transformation(caseName, fields) {
      _classCallCheck(this, Transformation);

      this.Case = caseName;
      this.Fields = fields;
    }

    Transformation.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Transformation.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Transformation;
  }();

  _fableCore.Util.setInterfaces(Transformation.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Transformation");

  var Field = exports.Field = function () {
    function Field(name, type) {
      _classCallCheck(this, Field);

      this.Name = name;
      this.Type = type;
    }

    Field.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    Field.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return Field;
  }();

  _fableCore.Util.setInterfaces(Field.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.TypeProviders.Pivot.Field");

  var Transform = exports.Transform = function ($exports) {
    var formatAgg = function formatAgg(_arg1) {
      return _arg1.Case === "CountAll" ? _fableCore.List.ofArray(["count-all"]) : _arg1.Case === "CountDistinct" ? _fableCore.List.ofArray(["count-dist", _arg1.Fields[0]]) : _arg1.Case === "ReturnUnique" ? _fableCore.List.ofArray(["unique", _arg1.Fields[0]]) : _arg1.Case === "ConcatValues" ? _fableCore.List.ofArray(["concat-vals", _arg1.Fields[0]]) : _arg1.Case === "Sum" ? _fableCore.List.ofArray(["sum", _arg1.Fields[0]]) : _arg1.Case === "Mean" ? _fableCore.List.ofArray(["mean", _arg1.Fields[0]]) : _fableCore.List.ofArray(["key"]);
    };

    var toUrl = $exports.toUrl = function toUrl(transforms) {
      return _fableCore.String.join("/", _fableCore.List.concat(_fableCore.List.mapIndexed(function (i, l) {
        return (i === 0 ? true : l.tail == null) ? l : new _fableCore.List("then", l);
      }, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
        return _fableCore.Seq.map(function (t) {
          return t.Case === "FilterBy" ? new _fableCore.List("filter", _fableCore.List.collect(function (tupledArg) {
            return _fableCore.List.ofArray([tupledArg[0], tupledArg[1] ? "eq" : "neq", tupledArg[2]]);
          }, t.Fields[0])) : t.Case === "DropColumns" ? new _fableCore.List("drop", t.Fields[0]) : t.Case === "SortBy" ? new _fableCore.List("sort", _fableCore.List.collect(function (tupledArg) {
            return _fableCore.List.ofArray([tupledArg[0], tupledArg[1].Equals(new SortDirection("Ascending", [])) ? "asc" : "desc"]);
          }, t.Fields[0])) : t.Case === "GroupBy" ? new _fableCore.List("group", _fableCore.List.append(_fableCore.List.map(function (f) {
            return "by-" + f;
          }, t.Fields[0]), _fableCore.List.collect(function (_arg1) {
            return formatAgg(_arg1);
          }, t.Fields[1]))) : t.Case === "Paging" ? new _fableCore.List("page", _fableCore.List.collect(function (_arg1) {
            return _arg1.Case === "Skip" ? _fableCore.List.ofArray(["skip", _arg1.Fields[0]]) : _fableCore.List.ofArray(["take", _arg1.Fields[0]]);
          }, t.Fields[0])) : t.Case === "GetSeries" ? _fableCore.List.ofArray(["series", t.Fields[0], t.Fields[1]]) : t.Case === "Empty" ? new _fableCore.List() : new _fableCore.List();
        }, _fableCore.List.reverse(transforms));
      })))));
    };

    var singleTransformFields = $exports.singleTransformFields = function singleTransformFields(fields, _arg1) {
      return _arg1.Case === "GetTheData" ? fields : _arg1.Case === "SortBy" ? fields : _arg1.Case === "Paging" ? fields : _arg1.Case === "FilterBy" ? fields : _arg1.Case === "GetSeries" ? _fableCore.List.ofArray([_fableCore.Seq.find(function (f) {
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
      return _fableCore.Seq.toList(function () {
        var state = _fableCore.Seq.toList(fields);

        return function (list) {
          return _fableCore.Seq.fold(function (fields_1, _arg1) {
            return singleTransformFields(fields_1, _arg1);
          }, state, list);
        };
      }()(tfs));
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
    var meta1 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Transformations", tfs);
    var meta2 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Fields", ctx.Fields);
    return new _ast.Member("Property", [name, makePivotType(ctx, tfs), _fableCore.List.ofArray([meta1, meta2]), propertyEmitter]);
  }

  function makeMethod(ctx, name, tfs, callid, args) {
    var meta1 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Transformations", tfs);
    var meta2 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Fields", ctx.Fields);
    return new _ast.Member("Method", [name, _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
      return _fableCore.Seq.collect(function (matchValue) {
        return _fableCore.Seq.singleton([matchValue[0], false, new _ast.Type("Primitive", [matchValue[1]])]);
      }, args);
    })), makePivotType(ctx, tfs), _fableCore.List.ofArray([meta1, meta2]), makeMethodEmitter(callid, args)]);
  }

  function makeDataMember(ctx, name, isPreview, tfs) {
    var fields = Transform.transformFields(ctx.InputFields, _fableCore.List.reverse(tfs));

    _common.Log.trace("providers", "Make data member using transform %O. Got fields: %O", tfs, fields);

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

          if (fields.tail != null) {
            if (fields.tail.tail != null) {
              if (fields.tail.tail.tail == null) {
                var kf = fields.head;
                var vf = fields.tail.head;
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

    var tfs_1 = patternInput[1] ? tfs : new _fableCore.List(new Transformation("GetTheData", []), tfs);
    var meta1 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Transformations", tfs_1);
    var meta2 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Fields", ctx.Fields);
    return new _ast.Member("Property", [name, patternInput[0], _fableCore.List.ofArray([meta1, meta2]), makeDataEmitter(isPreview, patternInput[1], tfs_1)]);
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
            return makeProperty(ctx, "with key " + field.Name, new _fableCore.List(new Transformation("GetSeries", [field.Name, "!"]), rest));
          }, ctx.Fields);
        })));
      } else {
        return $target2();
      }
    } else {
      if (matchValue[1] === "!") {
        return makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
          return _fableCore.Seq.map(function (field) {
            return makeDataMember(ctx, "and value " + field.Name, false, new _fableCore.List(new Transformation("GetSeries", [matchValue[0], field.Name]), rest));
          }, ctx.Fields);
        })));
      } else {
        return $target2();
      }
    }
  }

  function handlePagingRequest(ctx, rest, pgid, ops) {
    var takeMemb = makeMethod(ctx, "take", _fableCore.List.ofArray([new Transformation("Empty", []), new Transformation("Paging", [_fableCore.List.reverse(new _fableCore.List(new Paging("Take", [pgid + "-take"]), ops))])], rest), pgid + "-take", _fableCore.List.ofArray([["count", new _ast.PrimitiveType("Number", [])]]));
    var skipMemb = makeMethod(ctx, "skip", new _fableCore.List(new Transformation("Paging", [new _fableCore.List(new Paging("Skip", [pgid + "-skip"]), ops)]), rest), pgid + "-skip", _fableCore.List.ofArray([["count", new _ast.PrimitiveType("Number", [])]]));
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
        return _fableCore.List.ofArray([skipMemb, takeMemb, thenMemb]);
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
          return !droppedFields.has(field.Name) ? _fableCore.Seq.singleton(makeProperty(ctx, "drop " + field.Name, new _fableCore.List(new Transformation("DropColumns", [new _fableCore.List(field.Name, dropped)]), rest))) : _fableCore.Seq.empty();
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
            return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name, new _fableCore.List(new Transformation("SortBy", [new _fableCore.List([field.Name, new SortDirection("Ascending", [])], keys)]), rest))), _fableCore.Seq.delay(function (unitVar_2) {
              return _fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " descending", new _fableCore.List(new Transformation("SortBy", [new _fableCore.List([field.Name, new SortDirection("Descending", [])], keys)]), rest)));
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
        return makeProperty(ctx, name, new _fableCore.List(new Transformation("GroupBy", [keys, new _fableCore.List(agg, aggs)]), rest));
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
        return makeProperty(ctx, prefix + field.Name, new _fableCore.List(new Transformation("GroupBy", [new _fableCore.List(field.Name, keys), new _fableCore.List()]), rest));
      }, ctx.Fields), _fableCore.Seq.delay(function (unitVar_1) {
        return !(keys.tail == null) ? aggregationMembers(ctx, rest, keys, _fableCore.List.ofArray([new Aggregation("GroupKey", [])])) : _fableCore.Seq.empty();
      }));
    })));
  }

  function handleFilterEqNeqRequest(ctx, rest, fld, eq, conds) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        var url = concatUrl(concatUrl(ctx.Root, "range"), Transform.toUrl(_fableCore.List.reverse(new _fableCore.List(new Transformation("FilterBy", [conds]), rest))));
        return builder_.Bind(_common.Http.Request("GET", url + "?" + fld), function (_arg2) {
          var options = JSON.parse(_arg2);
          return builder_.Return(makeObjectType(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
            return _fableCore.Seq.map(function (opt) {
              return makeProperty(ctx, opt, new _fableCore.List(new Transformation("FilterBy", [new _fableCore.List([fld, eq, opt], conds)]), rest));
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
        return _fableCore.Seq.append(_fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is", new _fableCore.List(new Transformation("FilterBy", [new _fableCore.List([field.Name, true, "!"], conds)]), rest))), _fableCore.Seq.delay(function (unitVar_1) {
          return _fableCore.Seq.singleton(makeProperty(ctx, prefix + field.Name + " is not", new _fableCore.List(new Transformation("FilterBy", [new _fableCore.List([field.Name, false, "!"], conds)]), rest)));
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
                    if (patternInput[0].Case === "GetTheData") {
                      return builder_.Return(function () {
                        throw "makePivotTypeImmediate: Get the data shouldn't be of pivot type";
                      }());
                    } else {
                      return builder_.Return(makeObjectType(_fableCore.List.ofArray([makeProperty(ctx_1, "group data", new _fableCore.List(new Transformation("GroupBy", [new _fableCore.List(), new _fableCore.List()]), patternInput[1])), makeProperty(ctx_1, "filter data", new _fableCore.List(new Transformation("FilterBy", [new _fableCore.List()]), patternInput[1])), makeProperty(ctx_1, "sort data", new _fableCore.List(new Transformation("SortBy", [new _fableCore.List()]), patternInput[1])), makeProperty(ctx_1, "drop columns", new _fableCore.List(new Transformation("DropColumns", [new _fableCore.List()]), patternInput[1])), makeProperty(ctx_1, "paging", new _fableCore.List(new Transformation("Paging", [new _fableCore.List()]), patternInput[1])), makeProperty(ctx_1, "get series", new _fableCore.List(new Transformation("GetSeries", ["!", "!"]), patternInput[1])), makeDataMember(ctx_1, "get the data", false, patternInput[1])])));
                    }
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
    var $target3 = function $target3() {
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
            return new _fableCore.List(new Transformation("GroupBy", [k, _fableCore.List.ofArray([new Aggregation("GroupKey", [])])]), _tfs_);
          } else {
            return $target3();
          }
        }
      } else {
        if (tfs.head.Case === "GetSeries") {
          var _tfs_2 = tfs.tail;
          return _tfs_2;
        } else {
          return $target3();
        }
      }
    } else {
      return $target3();
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
        return builder_.TryWith(builder_.Delay(function (unitVar_1) {
          return builder_.Bind(makePivotTypeImmediate(ctx, tfs), function (_arg4) {
            return builder_.Return(withPreview(ctx, tfs, _arg4));
          });
        }), function (_arg5) {
          _common.Log.exn("providers", "Failed when generating type for %O with exception %O", tfs, _arg5);

          return builder_.Return(function () {
            throw _arg5;
          }());
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
    var meta1 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Transformations", new _fableCore.List());
    var meta2 = new _ast.Metadata("http://schema.thegamma.net/pivot", "Fields", fields_1);
    return new _providers.ProvidedType("GlobalValue", [name, _fableCore.List.ofArray([meta1, meta2]), new _babel.Expression("NewExpression", [ctx, _fableCore.List.ofArray([str(concatUrl(root, "data")), new _babel.Expression("ArrayExpression", [new _fableCore.List(), null])]), null]), typ]);
  }
});
//# sourceMappingURL=pivot.js.map