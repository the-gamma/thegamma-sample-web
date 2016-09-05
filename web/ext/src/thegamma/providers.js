(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./ast", "./extensions", "./babel/babelast"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./ast"), require("./extensions"), require("./babel/babelast"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.ast, global.extensions, global.babelast);
    global.providers = mod.exports;
  }
})(this, function (exports, _fableCore, _ast, _extensions, _babelast) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RestProvider = exports.FSharpProvider = exports.ProvidedType = undefined;

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
        return t.kind === "primitive" ? function () {
          var name = t.name;

          if (name === "object") {
            return new _ast.Type("Any", []);
          } else {
            if (name === "int" ? true : name === "float") {
              return new _ast.Type("Primitive", ["num"]);
            } else {
              return new _ast.Type("Primitive", [name]);
            }
          }
        }() : t.kind === "function" ? function () {
          var t_1 = t;
          return new _ast.Type("Function", [_fableCore.Seq.toList(t_1.arguments.map(mapType)), mapType(t_1.returns)]);
        }() : t.kind === "named" ? function () {
          var t_1 = t;
          return lookupNamed(t_1.name)(_fableCore.List.ofArray(t_1.typargs.map(mapType)));
        }() : t.kind === "parameter" ? new _ast.Type("Parameter", [t.name]) : t.kind === "array" ? new _ast.Type("List", [mapType(t.element)]) : function () {
          throw "provideFSharpType: Unexpected type";
        }();
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
            return (0, _extensions.Async$2EAsFuture$2EStatic)(arg00, arg10);
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
                  return new _babelast.Expression("CallExpression", [new _babelast.Expression("MemberExpression", [tupledArg[0], new _babelast.Expression("IdentifierExpression", [m_1.name, null]), false, null]), _fableCore.List.map(function (tuple) {
                    return tuple[1];
                  }, tupledArg[1]), null]);
                });
                return new _ast.Member("Method", [m_1.name, getTypeParameters(m_1.typepars), args, mapType(m_1.returns), new _ast.Documentation("Text", [""]), emitter]);
              }() : null;
            }, exp.members));
            return builder_.Return(new _ast.Type("Object", [function () {
              var Typeargs = _fableCore.List.map(function (arg0) {
                return new _ast.Type("Parameter", [arg0]);
              }, getTypeParameters(exp.typepars));

              return new _ast.ObjectType(mems, Typeargs);
            }()]));
          });
        }(_fableCore.defaultAsyncBuilder));
      };

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind(_extensions.Http.Request("GET", url), function (_arg1) {
            var expTys = JSON.parse(_arg1);
            return builder_.Return(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
              return _fableCore.Seq.map(function (exp) {
                var guid = url + "," + exp.name;
                var ty = new _ast.Type("Delayed", [guid, importProvidedType(exp)]);

                if (exp.static) {
                  var e = _fableCore.Seq.fold(function (chain, s) {
                    return chain != null ? new _babelast.Expression("MemberExpression", [chain, new _babelast.Expression("IdentifierExpression", [s, null]), false, null]) : new _babelast.Expression("IdentifierExpression", [s, null]);
                  }, null, exp.instance);

                  return new ProvidedType("GlobalValue", [exp.name, e, ty]);
                } else {
                  return new ProvidedType("NamedType", [exp.name, getTypeParameters(exp.typepars), ty]);
                }
              }, expTys);
            })));
          });
        });
      }(_fableCore.defaultAsyncBuilder);
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
          return builder_.Bind(_extensions.Http.Request("GET", url, null, cookies), function (_arg1) {
            var members = JSON.parse(_arg1);
            return builder_.Return(members);
          });
        });
      }(_fableCore.defaultAsyncBuilder);
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
        var trace_1 = new _babelast.Expression("StringLiteral", [_fableCore.String.join("&", trace), null]);
        var mem = new _babelast.Expression("MemberExpression", [inst, new _babelast.Expression("IdentifierExpression", ["addTrace", null]), false, null]);
        return new _babelast.Expression("CallExpression", [mem, _fableCore.List.ofArray([trace_1]), null]);
      }();
    };

    var propAccess = $exports.propAccess = function propAccess(trace) {
      return new _ast.Emitter(function (tupledArg) {
        return addTraceCall(tupledArg[0], trace);
      });
    };

    var methCall = $exports.methCall = function methCall(trace) {
      return new _ast.Emitter(function (tupledArg) {
        var withTrace = addTraceCall(tupledArg[0], trace);
        return function () {
          var folder = function folder(inst) {
            return function (tupledArg_1) {
              var trace_1 = new _babelast.Expression("BinaryExpression", [new _babelast.BinaryOperator("BinaryPlus", []), new _babelast.Expression("StringLiteral", [tupledArg_1[0] + "=", null]), tupledArg_1[1], null]);
              var mem = new _babelast.Expression("MemberExpression", [inst, new _babelast.Expression("IdentifierExpression", ["addTrace", null]), false, null]);
              return new _babelast.Expression("CallExpression", [mem, _fableCore.List.ofArray([trace_1]), null]);
            };
          };

          return function (source) {
            return _fableCore.Seq.fold(function ($var14, $var15) {
              return folder($var14)($var15);
            }, withTrace, source);
          };
        }()(tupledArg[1]);
      });
    };

    var dataCall = $exports.dataCall = function dataCall(parser, trace, endp) {
      return new _ast.Emitter(function (tupledArg) {
        var tr = propAccess(trace).Emit([tupledArg[0], tupledArg[1]]);
        var mem = new _babelast.Expression("MemberExpression", [tr, new _babelast.Expression("IdentifierExpression", ["getValue", null]), false, null]);
        return parser(new _babelast.Expression("CallExpression", [mem, _fableCore.List.ofArray([new _babelast.Expression("StringLiteral", [endp, null])]), null]));
      });
    };

    var ident = $exports.ident = function ident(s) {
      return new _babelast.Expression("IdentifierExpression", [s, null]);
    };

    var str = $exports.str = function str(v) {
      return new _babelast.Expression("StringLiteral", [v, null]);
    };

    var op_Dynamic = $exports.op_Dynamic = function op_Dynamic(e, s) {
      return new _babelast.Expression("MemberExpression", [e, new _babelast.Expression("IdentifierExpression", [s, null]), false, null]);
    };

    var op_DivideAtDivide = $exports.op_DivideAtDivide = function op_DivideAtDivide(e, args) {
      return new _babelast.Expression("CallExpression", [e, args, null]);
    };

    var func = $exports.func = function func(v, f) {
      var body = new _babelast.Statement("BlockStatement", [_fableCore.List.ofArray([new _babelast.Statement("ReturnStatement", [f(ident(v)), null])]), null]);
      return new _babelast.Expression("FunctionExpression", [null, _fableCore.List.ofArray([new _babelast.Pattern("IdentifierPattern", [v, null])]), body, false, false, null]);
    };

    var getTypeAndEmitter = $exports.getTypeAndEmitter = function getTypeAndEmitter(lookupNamed, ty) {
      var $target1 = function $target1() {
        return [new _ast.Type("Primitive", ["num"]), function (e) {
          return new _babelast.Expression("CallExpression", [new _babelast.Expression("IdentifierExpression", ["Number", null]), _fableCore.List.ofArray([e]), null]);
        }];
      };

      var $target3 = function $target3(ty_1) {
        var patternInput = getTypeAndEmitter(lookupNamed, ty_1);
        var serTy = lookupNamed("series")(_fableCore.List.ofArray([new _ast.Type("Primitive", ["num"]), patternInput[0]]));
        return [serTy, function (d) {
          return op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "ordinal"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(ident("_restruntime"), "convertSequence"), _fableCore.List.ofArray([func("v", patternInput[1]), d])), str("key"), str("value"), str("")]));
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
                    var patternInput = getTypeAndEmitter(lookupNamed, t1);
                    var patternInput_1 = getTypeAndEmitter(lookupNamed, t2);
                    var typ = lookupNamed("series")(_fableCore.List.ofArray([patternInput[0], patternInput_1[0]]));
                    return [typ, function (d) {
                      return op_DivideAtDivide(op_Dynamic(op_Dynamic(ident("_series"), "series"), "create"), _fableCore.List.ofArray([op_DivideAtDivide(op_Dynamic(ident("_restruntime"), "convertTupleSequence"), _fableCore.List.ofArray([func("v", patternInput[1]), func("v", patternInput_1[1]), d])), str("key"), str("value"), str("")]));
                    }];
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
            return new _ast.Member("Property", [tupledArg[0], patternInput[0], null, new _ast.Documentation("Text", [""]), emitter]);
          });
          var obj = new _ast.Type("Object", [new _ast.ObjectType(membs_1, new _fableCore.List())]);
          return [obj, function (x) {
            return x;
          }];
        } else {
          if (ty.Fields[0] === "string") {
            return [new _ast.Type("Primitive", ["string"]), function (x) {
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
      var $target0 = function $target0() {
        return "num";
      };

      if (_arg1 === "int") {
        return $target0();
      } else {
        if (_arg1 === "float") {
          return $target0();
        } else {
          throw "mapParamType: Unsupported parameter type";
        }
      }
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
              return builder_.Return(new _ast.Type("Object", [function () {
                var Typeargs = new _fableCore.List();
                return new _ast.ObjectType(_arg1.map(function (m) {
                  var schema = function () {
                    var $var16 = m.schema;

                    if ($var16 != null) {
                      return function (s) {
                        return new _ast.Schema(s["@type"], s);
                      }($var16);
                    } else {
                      return $var16;
                    }
                  }();

                  var matchValue_1 = m.returns.kind;

                  if (matchValue_1 === "nested") {
                    var returns = m.returns;
                    var retTyp = createRestType(lookupNamed, root, cookies, returns.endpoint);

                    if (m.parameters == null) {
                      return new _ast.Member("Property", [m.name, retTyp, schema, parseDoc(m.documentation), propAccess(m.trace)]);
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

                      return new _ast.Member("Method", [m.name, new _fableCore.List(), args, retTyp, parseDoc(m.documentation), methCall(m.trace)]);
                    }
                  } else {
                    if (matchValue_1 === "primitive") {
                      var returns = m.returns;
                      var ty = fromRawType(returns.type);
                      var patternInput = getTypeAndEmitter(lookupNamed, ty);
                      return new _ast.Member("Property", [m.name, patternInput[0], schema, parseDoc(m.documentation), dataCall(patternInput[1], m.trace, returns.endpoint)]);
                    } else {
                      throw "?";
                    }
                  }
                }), Typeargs);
              }()]));
            });
          });
        }(_fableCore.defaultAsyncBuilder);

        var ty = new _ast.Type("Delayed", [guid, function (arg00) {
          return function (arg10) {
            return (0, _extensions.Async$2EAsFuture$2EStatic)(arg00, arg10);
          };
        }(guid)(future)]);
        restTypeCache.set(guid, ty);
        return ty;
      }
    };

    var provideRestType = $exports.provideRestType = function provideRestType(lookupNamed, name, root, cookies) {
      var ctx = op_Dynamic(ident("_restruntime"), "RuntimeContext");
      return new ProvidedType("GlobalValue", [name, new _babelast.Expression("NewExpression", [ctx, _fableCore.List.ofArray([str(root), str(cookies), str("")]), null]), createRestType(lookupNamed, root, cookies, "/")]);
    };

    return $exports;
  }({});
});
//# sourceMappingURL=providers.js.map