(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ast", "fable-core", "./astops"], factory);
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

  exports.__esModule = true;
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
//# sourceMappingURL=errors.js.map