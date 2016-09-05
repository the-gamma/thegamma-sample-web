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
    global.extensions = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Async = exports.Async$2EStartAsFuture$2EStatic = exports.Async$2EAsFuture$2EStatic = exports.Async$2EFuture$2EStatic = exports.Async$2EAwaitFuture$2EStatic = exports.Http = exports.Log = exports.enabledCategories = undefined;
  exports.isLocalHost = isLocalHost;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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

  function isLocalHost() {
    return window.location.hostname === "localhost" ? true : window.location.hostname === "127.0.0.1";
  }

  var enabledCategories = exports.enabledCategories = !isLocalHost() ? _fableCore.Set.create(new _fableCore.List(), new _fableCore.GenericComparer(function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  })) : _fableCore.Set.create(_fableCore.List.ofArray(["SYSTEM", "COMPLETIONS", "EDITORS", "TYPECHECKER", "SERVICE", "CODEGEN", "RUNTIME"]), new _fableCore.GenericComparer(function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  }));

  var Log = exports.Log = function () {
    function Log() {
      _classCallCheck(this, Log);
    }

    _createClass(Log, null, [{
      key: "event",
      value: function event(category, evt, article, data) {
        logEvent(category, evt, article, data);
      }
    }, {
      key: "message",
      value: function message(level, category, msg) {
        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          args[_key - 3] = arguments[_key];
        }

        var args_1 = args == null ? [] : args;
        var category_1 = category.toLocaleUpperCase();

        if (level === "EXCEPTION") {
          logEvent("system", "exception", "", {
            category: category_1,
            msg: msg,
            args: args_1
          });
        }

        if ((level === "EXCEPTION" ? true : level === "ERROR") ? true : enabledCategories.has(category_1)) {
          var dt = _fableCore.Date.now();

          var p2 = function p2(s) {
            return _fableCore.String.padLeft(String(s), 2, "0");
          };

          var p4 = function p4(s) {
            return _fableCore.String.padLeft(String(s), 4, "0");
          };

          var prefix = _fableCore.String.fsFormat("[%s:%s:%s:%s] %s: ")(function (x) {
            return x;
          })(p2(_fableCore.Date.hour(dt)))(p2(_fableCore.Date.minute(dt)))(p2(_fableCore.Date.second(dt)))(p4(_fableCore.Date.millisecond(dt)))(category_1);

          var color = level === "TRACE" ? "color:#808080" : level === "EXCEPTION" ? "color:#c00000" : level === "ERROR" ? "color:#900000" : "";
          console.log.apply(console, Array.from(_fableCore.Seq.append(["%c" + prefix + msg, color], args_1)));
        }
      }
    }, {
      key: "trace",
      value: function trace(category, msg) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        Log.message.apply(Log, ["TRACE", category, msg].concat(args));
      }
    }, {
      key: "exn",
      value: function exn(category, msg) {
        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        Log.message.apply(Log, ["EXCEPTION", category, msg].concat(args));
      }
    }, {
      key: "error",
      value: function error(category, msg) {
        for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
          args[_key4 - 2] = arguments[_key4];
        }

        Log.message.apply(Log, ["ERROR", category, msg].concat(args));
      }
    }]);

    return Log;
  }();

  _fableCore.Util.setInterfaces(Log.prototype, [], "Fable.Extensions.Log");

  var Http = exports.Http = function () {
    function Http() {
      _classCallCheck(this, Http);
    }

    _createClass(Http, null, [{
      key: "Request",
      value: function Request(meth, url, data, cookies) {
        return _fableCore.Async.fromContinuations(function (tupledArg) {
          var xhr = new XMLHttpRequest();
          xhr.open(meth, url, true);
          {
            var $target1 = function $target1() {};

            if (cookies != null) {
              if (cookies !== "") {
                var cookies_1 = cookies;
                xhr.setRequestHeader("X-Cookie", cookies_1);
              } else {
                $target1();
              }
            } else {
              $target1();
            }
          }

          xhr.onreadystatechange = function (_arg1) {
            if (xhr.readyState > 3 ? xhr.status === 200 : false) {
              tupledArg[0](xhr.responseText);
            }

            return {};
          };

          xhr.send(data != null ? data : "");
        });
      }
    }]);

    return Http;
  }();

  _fableCore.Util.setInterfaces(Http.prototype, [], "Fable.Extensions.Http");

  function Async_AwaitFuture_Static(f) {
    return _fableCore.Async.fromContinuations(function (tupledArg) {
      f.Then(tupledArg[0]);
    });
  }

  exports.Async$2EAwaitFuture$2EStatic = Async_AwaitFuture_Static;

  function Async_Future_Static(n, op, start) {
    var _ref;

    var res = new _fableCore.Choice("Choice1Of3", [null]);
    var handlers = new _fableCore.List();
    var running = false;

    var trigger = function trigger(h) {
      if (res.Case === "Choice2Of3") {
        var v = res.Fields[0];
        h(v);
      } else {
        if (res.Case === "Choice3Of3") {
          var e = res.Fields[0];
          throw e;
        } else {
          handlers = _fableCore.List.ofArray([h], handlers);
        }
      }
    };

    var ensureStarted = function ensureStarted(unitVar0) {
      if (!running) {
        Log.trace("system", "Starting future '%s'....", n);
        running = true;

        (function (arg00) {
          _fableCore.Async.startImmediate(arg00);
        })(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Combine(builder_.TryWith(builder_.Delay(function (unitVar_1) {
              return builder_.Bind(op, function (_arg1) {
                res = new _fableCore.Choice("Choice2Of3", [_arg1]);
                return builder_.Zero();
              });
            }), function (_arg2) {
              Log.exn("system", "Evaluating future failed: %O", _arg2);
              res = new _fableCore.Choice("Choice3Of3", [_arg2]);
              return builder_.Zero();
            }), builder_.Delay(function (unitVar_1) {
              return builder_.For(handlers, function (_arg3) {
                trigger(_arg3);
                return builder_.Zero();
              });
            }));
          });
        }(_fableCore.defaultAsyncBuilder));
      }
    };

    if (start === true) {
      ensureStarted();
    }

    return _ref = {}, _defineProperty(_ref, _fableCore.Symbol.interfaces, ["Fable.Extensions.Future"]), _defineProperty(_ref, "Then", function Then(f) {
      ensureStarted();
      trigger(f);
    }), _ref;
  }

  exports.Async$2EFuture$2EStatic = Async_Future_Static;

  function Async_AsFuture_Static(n, op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }(n)(op)(false);
  }

  exports.Async$2EAsFuture$2EStatic = Async_AsFuture_Static;

  function Async_StartAsFuture_Static(n, op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }(n)(op)(true);
  }

  exports.Async$2EStartAsFuture$2EStatic = Async_StartAsFuture_Static;

  var Async = exports.Async = function ($exports) {
    var _Array = $exports.Array = function ($exports) {
      var Parallel = $exports.Parallel = function ($exports) {
        var map = $exports.map = function map(f, ar) {
          return function (builder_) {
            return builder_.Delay(function (unitVar) {
              var res = new Array(ar.length);

              var work = _fableCore.Async.parallel(_fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar_1) {
                return _fableCore.Seq.map(function (i) {
                  return function (builder__1) {
                    return builder__1.Delay(function (unitVar_2) {
                      return builder__1.Bind(f(ar[i]), function (_arg1) {
                        res[i] = _arg1;
                        return builder__1.Zero();
                      });
                    });
                  }(_fableCore.defaultAsyncBuilder);
                }, _fableCore.Seq.range(0, ar.length - 1));
              })));

              return builder_.Bind(work, function (_arg2) {
                return builder_.Return(res);
              });
            });
          }(_fableCore.defaultAsyncBuilder);
        };

        return $exports;
      }({});

      var map = $exports.map = function map(f, ar) {
        return function (builder_) {
          return builder_.Delay(function (unitVar) {
            var res = new Array(ar.length);
            return builder_.Combine(builder_.For(_fableCore.Seq.range(0, ar.length - 1), function (_arg1) {
              return builder_.Bind(f(ar[_arg1]), function (_arg2) {
                res[_arg1] = _arg2;
                return builder_.Zero();
              });
            }), builder_.Delay(function (unitVar_1) {
              return builder_.Return(res);
            }));
          });
        }(_fableCore.defaultAsyncBuilder);
      };

      return $exports;
    }({});

    var collect = $exports.collect = function collect(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(collect(f, l.tail), function (_arg2) {
              return builder_.Return(_fableCore.List.append(_arg1, _arg2));
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    var choose = $exports.choose = function choose(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(choose(f, l.tail), function (_arg2) {
              return builder_.Return(_arg1 != null ? _fableCore.List.ofArray([_arg1], _arg2) : _arg2);
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    var map = $exports.map = function map(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(map(f, l.tail), function (_arg2) {
              return builder_.Return(_fableCore.List.ofArray([_arg1], _arg2));
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    var foldMap = $exports.foldMap = function foldMap(f, st, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return([st, new _fableCore.List()]) : builder_.Bind(f(st)(l.head), function (_arg1) {
            return builder_.Bind(foldMap(f, _arg1[1], l.tail), function (_arg2) {
              return builder_.Return([_arg2[0], _fableCore.List.ofArray([_arg1[0]], _arg2[1])]);
            });
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    var fold = $exports.fold = function fold(f, st, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(st) : builder_.Bind(f(st)(l.head), function (_arg1) {
            return builder_.ReturnFrom(fold(f, _arg1, l.tail));
          });
        });
      }(_fableCore.defaultAsyncBuilder);
    };

    return $exports;
  }({});
});
//# sourceMappingURL=extensions.js.map