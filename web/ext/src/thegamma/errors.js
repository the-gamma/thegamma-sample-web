(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ast", "fable-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ast"), require("fable-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ast, global.fableCore);
    global.errors = mod.exports;
  }
})(this, function (exports, _ast, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TypeChecker = exports.Parser = exports.Tokenizer = undefined;

  var Tokenizer = exports.Tokenizer = function ($exports) {
    var inputEndInsideString = $exports.inputEndInsideString = function inputEndInsideString(rng, s) {
      var _Number = 11;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Missing \" at the end of the input. The string \"%s\" ends without closing double-quote.")(function (x) {
        return x;
      })(s), rng);
    };

    var missingClosingQuote = $exports.missingClosingQuote = function missingClosingQuote(rng, q) {
      var _Number = 12;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Quoted identifier '%s' is missing closing quote.")(function (x) {
        return x;
      })(q), rng);
    };

    var unexpectedCharacter = $exports.unexpectedCharacter = function unexpectedCharacter(rng, c) {
      var _Number = 13;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Unexcpected character '%s' in the input.")(function (x) {
        return x;
      })(c), rng);
    };

    return $exports;
  }({});

  var Parser = exports.Parser = function ($exports) {
    var valueNotAfunction = $exports.valueNotAfunction = function valueNotAfunction(rng, name) {
      var _Number = 21;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Global value '%s' is not a function. Ignoring arguments.")(function (x) {
        return x;
      })(name), rng);
    };

    var emptyIdentifier = $exports.emptyIdentifier = function emptyIdentifier(rng) {
      var _Number = 22;
      return new _ast.Error(_Number, "Empty identifier", rng);
    };

    var missingClosingParen = $exports.missingClosingParen = function missingClosingParen(rng) {
      var _Number = 23;
      return new _ast.Error(_Number, "Missing closing )", rng);
    };

    var nothingAfterDot = $exports.nothingAfterDot = function nothingAfterDot(rng) {
      var _Number = 24;
      return new _ast.Error(_Number, "Call chain should not end with .", rng);
    };

    var nothingAfterComma = $exports.nothingAfterComma = function nothingAfterComma(rng) {
      var _Number = 25;
      return new _ast.Error(_Number, "List should not end with ,", rng);
    };

    var missingClosingSquare = $exports.missingClosingSquare = function missingClosingSquare(rng) {
      var _Number = 26;
      return new _ast.Error(_Number, "Missing closing ]", rng);
    };

    var incompleteRange = $exports.incompleteRange = function incompleteRange(rng) {
      var _Number = 27;
      return new _ast.Error(_Number, "Incomeplete range expression", rng);
    };

    return $exports;
  }({});

  var TypeChecker = exports.TypeChecker = function ($exports) {
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

    var variableNotInScope = $exports.variableNotInScope = function variableNotInScope(rng, name) {
      var _Number = 31;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Variable '%s' is not in scope.")(function (x) {
        return x;
      })(name), rng);
    };

    var propertyMissing = $exports.propertyMissing = function propertyMissing(rng, name, members) {
      var _Number = 32;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Could not find property '%s' in the list '%s'.")(function (x) {
        return x;
      })(name)(formatMembers(members)), rng);
    };

    var methodMissing = $exports.methodMissing = function methodMissing(rng, name, members) {
      var _Number = 33;
      return new _ast.Error(_Number, _fableCore.String.fsFormat("Could not find method '%s' in the list '%s'.")(function (x) {
        return x;
      })(name)(formatMembers(members)), rng);
    };

    var mismatchingListTypes = $exports.mismatchingListTypes = function mismatchingListTypes(rng) {
      var _Number = 33;
      return new _ast.Error(_Number, "The types of list elements do not match.", rng);
    };

    var notAnObject = $exports.notAnObject = function notAnObject(rng, typ) {
      var _Number = 34;
      return new _ast.Error(_Number, "Type is not an object.", rng);
    };

    var cannotUnityTypes = $exports.cannotUnityTypes = function cannotUnityTypes(rng) {
      var _Number = 35;
      return new _ast.Error(_Number, "Cannot unify types.", rng);
    };

    var nameBasedParamMustBeLast = $exports.nameBasedParamMustBeLast = function nameBasedParamMustBeLast(rng) {
      var _Number = 36;
      return new _ast.Error(_Number, "All named parameters must be at the end of parameter list.", rng);
    };

    return $exports;
  }({});
});
//# sourceMappingURL=errors.js.map