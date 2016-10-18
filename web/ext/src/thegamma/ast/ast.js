(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core"], factory);
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

  exports.__esModule = true;
  exports.Expr = exports.Command = exports.Program = exports.Argument = exports.Node = exports.EntityValue = exports.Entity = exports.EntityKind = exports.Constant = exports.Name = exports.Type = exports.PrimitiveType = exports.ObjectType = exports.Member = exports.Documentation = exports.Metadata = exports.Emitter = exports.Token = exports.TokenKind = exports.Operator = exports.Error = exports.Range = undefined;

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

  var _Range = function () {
    function _Range(start, end) {
      _classCallCheck(this, _Range);

      this.Start = start;
      this.End = end;
    }

    _Range.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    _Range.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

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

    Error.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    Error.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return Error;
  }();

  _fableCore.Util.setInterfaces(Error.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Error");

  var Operator = exports.Operator = function () {
    function Operator(caseName, fields) {
      _classCallCheck(this, Operator);

      this.Case = caseName;
      this.Fields = fields;
    }

    Operator.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Operator.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Operator;
  }();

  _fableCore.Util.setInterfaces(Operator.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.Operator");

  var TokenKind = exports.TokenKind = function () {
    function TokenKind(caseName, fields) {
      _classCallCheck(this, TokenKind);

      this.Case = caseName;
      this.Fields = fields;
    }

    TokenKind.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    TokenKind.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return TokenKind;
  }();

  _fableCore.Util.setInterfaces(TokenKind.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "TheGamma.TokenKind");

  var Token = exports.Token = function () {
    function Token(token, range) {
      _classCallCheck(this, Token);

      this.Token = token;
      this.Range = range;
    }

    Token.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    Token.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

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

    Metadata.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    return Metadata;
  }();

  _fableCore.Util.setInterfaces(Metadata.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Metadata");

  var Documentation = exports.Documentation = function () {
    function Documentation(caseName, fields) {
      _classCallCheck(this, Documentation);

      this.Case = caseName;
      this.Fields = fields;
    }

    Documentation.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Documentation.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

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

    PrimitiveType.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    PrimitiveType.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

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

    Name.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    Name.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return Name;
  }();

  _fableCore.Util.setInterfaces(Name.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Name");

  var Constant = exports.Constant = function () {
    function Constant(caseName, fields) {
      _classCallCheck(this, Constant);

      this.Case = caseName;
      this.Fields = fields;
    }

    Constant.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Constant.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

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

    EntityValue.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

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
//# sourceMappingURL=ast.js.map