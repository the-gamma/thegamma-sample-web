(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "./ast", "./errors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("./ast"), require("./errors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.ast, global.errors);
    global.tokenizer = mod.exports;
  }
})(this, function (exports, _fableCore, _ast, _errors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Context = undefined;
  exports.startsWith = startsWith;
  exports.letter = letter;
  exports.number = number;
  exports.addAndTokenize = addAndTokenize;
  exports.tokenizeIdent = tokenizeIdent;
  exports.tokenizeString = tokenizeString;
  exports.tokenizeStringEnd = tokenizeStringEnd;
  exports.tokenizeQuotedIdent = tokenizeQuotedIdent;
  exports.tokenizeQuotedIdentEnd = tokenizeQuotedIdentEnd;
  exports.tokenizeWhite = tokenizeWhite;
  exports.tokenizeNumber = tokenizeNumber;
  exports.tokenizeInput = tokenizeInput;
  exports.tokenize = tokenize;

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

  var Context = exports.Context = function () {
    function Context(tokens, errors, input) {
      _classCallCheck(this, Context);

      this.Tokens = tokens;
      this.Errors = errors;
      this.Input = input;
    }

    _createClass(Context, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }]);

    return Context;
  }();

  _fableCore.Util.setInterfaces(Context.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Tokenizer.Context");

  function startsWith(s, i, j, prefix) {
    return j === prefix.length ? true : i === s.length ? false : s[i] !== prefix[j] ? false : startsWith(s, i + 1, j + 1, prefix);
  }

  function letter(c) {
    return (c >= "a" ? c <= "z" : false) ? true : c >= "A" ? c <= "Z" : false;
  }

  function number(c) {
    return c >= "0" ? c <= "9" : false;
  }

  function addAndTokenize(ctx, tok, i, l) {
    (function (arg00) {
      ctx.Tokens.push(arg00);
    })(new _ast.Token(tok, new _ast.Range(i, i + l)));

    return tokenizeInput(ctx, i + l);
  }

  function tokenizeIdent(ctx, start, l) {
    return (start + l < ctx.Input.length ? letter(ctx.Input[start + l]) ? true : number(ctx.Input[start + l]) : false) ? tokenizeIdent(ctx, start, l + 1) : addAndTokenize(ctx, new _ast.TokenKind("Ident", [ctx.Input.substr(start, l)]), start, l);
  }

  function tokenizeString(ctx, acc, start, l) {
    return start + l >= ctx.Input.length ? tokenizeStringEnd(true, ctx, acc, start, l) : function () {
      var matchValue = ctx.Input[start + l];

      var $target1 = function $target1() {
        return matchValue === "\"" ? tokenizeStringEnd(false, ctx, acc, start, l + 1) : matchValue === "\\" ? function () {
          var matchValue_1 = ctx.Input[start + l + 1];

          if (matchValue_1 === "\"") {
            return tokenizeString(ctx, _fableCore.List.ofArray(["\""], acc), start, l + 2);
          } else {
            if (matchValue_1 === "\\") {
              return tokenizeString(ctx, _fableCore.List.ofArray(["\\"], acc), start, l + 2);
            } else {
              if (matchValue_1 === "n") {
                return tokenizeString(ctx, _fableCore.List.ofArray(["\n"], acc), start, l + 2);
              } else {
                if (matchValue_1 === "t") {
                  return tokenizeString(ctx, _fableCore.List.ofArray(["\t"], acc), start, l + 2);
                } else {
                  return tokenizeString(ctx, _fableCore.List.ofArray([matchValue_1, "\\"], acc), start, l + 2);
                }
              }
            }
          }
        }() : tokenizeString(ctx, _fableCore.List.ofArray([matchValue], acc), start, l + 1);
      };

      if (matchValue === "\\") {
        if (start + l + 1 >= ctx.Input.length) {
          return tokenizeStringEnd(true, ctx, _fableCore.List.ofArray(["\\"], acc), start, l + 1);
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }();
  }

  function tokenizeStringEnd(error, ctx, acc, start, l) {
    var str = Array.from(acc).reverse().join('');
    var rng = new _ast.Range(start, start + l);

    if (error) {
      ctx.Errors.push(_errors.Tokenizer.inputEndInsideString(rng, str));
    }

    return addAndTokenize(ctx, new _ast.TokenKind("String", [str]), start, l);
  }

  function tokenizeQuotedIdent(ctx, start, l) {
    return start + l >= ctx.Input.length ? tokenizeQuotedIdentEnd(true, ctx, start, l) : function () {
      var matchValue = ctx.Input[start + l];

      if (matchValue === "\n") {
        return tokenizeQuotedIdentEnd(true, ctx, start, l + 1);
      } else {
        if (matchValue === "'") {
          return tokenizeQuotedIdentEnd(false, ctx, start, l + 1);
        } else {
          return tokenizeQuotedIdent(ctx, start, l + 1);
        }
      }
    }();
  }

  function tokenizeQuotedIdentEnd(error, ctx, start, l) {
    var rng = new _ast.Range(start, start + l);
    var qid = ctx.Input.substr(start + 1, l - (error ? 1 : 2));
    var qid_1 = _fableCore.String.endsWith(qid, "\n") ? qid.substr(0, qid.length - 1) : qid;

    if (error) {
      ctx.Errors.push(_errors.Tokenizer.missingClosingQuote(rng, qid_1));
    }

    return addAndTokenize(ctx, new _ast.TokenKind("QIdent", [qid_1]), start, l);
  }

  function tokenizeWhite(ctx, start, l) {
    return (start + l < ctx.Input.length ? ctx.Input[start + l] === " " : false) ? tokenizeWhite(ctx, start, l + 1) : addAndTokenize(ctx, new _ast.TokenKind("White", [ctx.Input.substr(start, l)]), start, l);
  }

  function tokenizeNumber(ctx, decimal, start, l) {
    return (start + l < ctx.Input.length ? number(ctx.Input[start + l]) : false) ? tokenizeNumber(ctx, decimal, start, l + 1) : ((start + l < ctx.Input.length ? !decimal : false) ? ctx.Input[start + l] === "." : false) ? tokenizeNumber(ctx, true, start, l + 1) : function () {
      var str = ctx.Input.substr(start, l);
      return addAndTokenize(ctx, new _ast.TokenKind("Number", [str, Number.parseFloat(str)]), start, l);
    }();
  }

  function tokenizeInput(ctx, i) {
    return i >= ctx.Input.length ? ctx : function () {
      var matchValue = ctx.Input[i];

      var $target1 = function $target1() {
        var $target1 = function $target1() {
          var $target1 = function $target1() {
            var $target1 = function $target1() {
              var $target1 = function $target1() {
                var $target1 = function $target1() {
                  var $target1 = function $target1() {
                    return matchValue === "\n" ? addAndTokenize(ctx, new _ast.TokenKind("Newline", []), i, 1) : matchValue === " " ? tokenizeWhite(ctx, i, 1) : matchValue === "\"" ? tokenizeString(ctx, new _fableCore.List(), i, 1) : matchValue === "'" ? tokenizeQuotedIdent(ctx, i, 1) : matchValue === "(" ? addAndTokenize(ctx, new _ast.TokenKind("LParen", []), i, 1) : matchValue === ")" ? addAndTokenize(ctx, new _ast.TokenKind("RParen", []), i, 1) : matchValue === "*" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("Multiply", [])]), i, 1) : matchValue === "+" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("Plus", [])]), i, 1) : matchValue === "," ? addAndTokenize(ctx, new _ast.TokenKind("Comma", []), i, 1) : matchValue === "-" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("Minus", [])]), i, 1) : matchValue === "." ? addAndTokenize(ctx, new _ast.TokenKind("Dot", []), i, 1) : matchValue === "/" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("Divide", [])]), i, 1) : matchValue === "<" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("LessThan", [])]), i, 1) : matchValue === "=" ? addAndTokenize(ctx, new _ast.TokenKind("Equals", []), i, 1) : matchValue === ">" ? addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("GreaterThan", [])]), i, 1) : matchValue === "[" ? addAndTokenize(ctx, new _ast.TokenKind("LSquare", []), i, 1) : matchValue === "]" ? addAndTokenize(ctx, new _ast.TokenKind("RSquare", []), i, 1) : letter(matchValue) ? tokenizeIdent(ctx, i, 1) : number(matchValue) ? tokenizeNumber(ctx, false, i, 1) : function () {
                      ctx.Errors.push(_errors.Tokenizer.unexpectedCharacter(new _ast.Range(i, i + 1), matchValue));
                      return addAndTokenize(ctx, new _ast.TokenKind("Error", [matchValue]), i, 1);
                    }();
                  };

                  if (matchValue === ">") {
                    if (startsWith(ctx.Input, i, 0, ">=")) {
                      return addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("GreaterThanOrEqual", [])]), i, 2);
                    } else {
                      return $target1();
                    }
                  } else {
                    return $target1();
                  }
                };

                if (matchValue === "<") {
                  if (startsWith(ctx.Input, i, 0, "<=")) {
                    return addAndTokenize(ctx, new _ast.TokenKind("Operator", [new _ast.Operator("LessThanOrEqual", [])]), i, 2);
                  } else {
                    return $target1();
                  }
                } else {
                  return $target1();
                }
              };

              if (matchValue === "f") {
                if (startsWith(ctx.Input, i, 0, "false")) {
                  return addAndTokenize(ctx, new _ast.TokenKind("Boolean", [false]), i, 5);
                } else {
                  return $target1();
                }
              } else {
                return $target1();
              }
            };

            if (matchValue === "t") {
              if (startsWith(ctx.Input, i, 0, "true")) {
                return addAndTokenize(ctx, new _ast.TokenKind("Boolean", [true]), i, 4);
              } else {
                return $target1();
              }
            } else {
              return $target1();
            }
          };

          if (matchValue === "l") {
            if (startsWith(ctx.Input, i, 0, "let")) {
              return addAndTokenize(ctx, new _ast.TokenKind("Let", []), i, 3);
            } else {
              return $target1();
            }
          } else {
            return $target1();
          }
        };

        if (matchValue === "f") {
          if (startsWith(ctx.Input, i, 0, "fun")) {
            return addAndTokenize(ctx, new _ast.TokenKind("Fun", []), i, 3);
          } else {
            return $target1();
          }
        } else {
          return $target1();
        }
      };

      if (matchValue === "-") {
        if (startsWith(ctx.Input, i, 0, "->")) {
          return addAndTokenize(ctx, new _ast.TokenKind("Arrow", []), i, 2);
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    }();
  }

  function tokenize(input) {
    var ctx = function () {
      var Errors = [];
      return new Context([], Errors, input);
    }();

    var ctx_1 = tokenizeInput(ctx, 0);
    return [_fableCore.Seq.toList(ctx_1.Tokens), Array.from(ctx_1.Errors)];
  }
});
//# sourceMappingURL=tokenizer.js.map