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
    global.common = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  exports.__esModule = true;
  exports.List = exports.ListDictionaryModule = exports.ListDictionaryNode = exports.Async = exports.Async$2EStartAsNamedFuture$2EStatic = exports.Async$2ECreateNamedFuture$2EStatic = exports.Async$2EStartAsFuture$2EStatic = exports.Async$2ECreateFuture$2EStatic = exports.Async$2EFuture$2EStatic = exports.Async$2EAwaitFuture$2EStatic = exports.Http = exports.Log = exports.enabledCategories = undefined;
  exports.isLocalHost = isLocalHost;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isLocalHost() {
    return (typeof window == 'undefined' ? true : window.location.hostname === "localhost") ? true : window.location.hostname === "127.0.0.1";
  }

  var enabledCategories = exports.enabledCategories = !isLocalHost() ? _fableCore.Set.create(new _fableCore.List(), new _fableCore.GenericComparer(function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  })) : _fableCore.Set.create(_fableCore.List.ofArray(["LIVE", "SYSTEM", "PARSING", "BINDER", "COMPLETIONS", "EDITORS", "TYPECHECKER", "PROVIDERS", "SERVICE", "CODEGEN", "INTERPRETER", "RUNTIME"]), new _fableCore.GenericComparer(function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  }));

  var Log = exports.Log = function () {
    function Log() {
      _classCallCheck(this, Log);
    }

    Log.setEnabled = function setEnabled(cats) {
      exports.enabledCategories = enabledCategories = cats;
    };

    Log.event = function event(category, evt, article, data) {
      logEvent(category, evt, article, data);
    };

    Log.message = function message(level, category, msg) {
      for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      var args_1 = args == null ? [] : args;
      var category_1 = category.toLocaleUpperCase();

      if (!isLocalHost() ? level === "EXCEPTION" : false) {
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

        var color = function () {
          var $var51 = null;

          switch (level) {
            case "TRACE":
              $var51 = "color:#808080";
              break;

            case "EXCEPTION":
              $var51 = "color:#c00000";
              break;

            case "ERROR":
              $var51 = "color:#900000";
              break;

            default:
              $var51 = "";
          }

          return $var51;
        }();

        console.log.apply(console, Array.from(_fableCore.Seq.append(["%c" + prefix + msg, color], args_1)));
      }
    };

    Log.trace = function trace(category, msg) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      Log.message.apply(Log, ["TRACE", category, msg].concat(args));
    };

    Log.exn = function exn(category, msg) {
      for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      Log.message.apply(Log, ["EXCEPTION", category, msg].concat(args));
    };

    Log.error = function error(category, msg) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      Log.message.apply(Log, ["ERROR", category, msg].concat(args));
    };

    return Log;
  }();

  _fableCore.Util.setInterfaces(Log.prototype, [], "TheGamma.Common.Log");

  var Http = exports.Http = function () {
    function Http() {
      _classCallCheck(this, Http);
    }

    Http.Request = function Request(meth, url, data, cookies) {
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
    };

    return Http;
  }();

  _fableCore.Util.setInterfaces(Http.prototype, [], "TheGamma.Common.Http");

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
          handlers = new _fableCore.List(h, handlers);
        }
      }
    };

    var ensureStarted = function ensureStarted(unitVar0) {
      if (!running) {
        _fableCore.Seq.iterate(function (n_1) {
          Log.trace("system", "Starting future '%s'....", n_1);
        }, function () {
          var $var52 = n;

          if ($var52 != null) {
            return [$var52];
          } else {
            return [];
          }
        }());

        running = true;

        (function (arg00) {
          _fableCore.Async.startImmediate(arg00);
        })(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Combine(builder_.TryWith(builder_.Delay(function (unitVar_1) {
              return builder_.Bind(op, function (_arg1) {
                _fableCore.Seq.iterate(function (n_1) {
                  Log.trace("system", "Future '%s' evaluated to: %O", n_1, _arg1);
                }, function () {
                  var $var53 = n;

                  if ($var53 != null) {
                    return [$var53];
                  } else {
                    return [];
                  }
                }());

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
        }(_fableCore.AsyncBuilder.singleton));
      }
    };

    if (start === true) {
      ensureStarted();
    }

    return _ref = {}, _ref[_fableCore.Symbol.interfaces] = ["TheGamma.Common.Future"], _ref.Then = function Then(f) {
      ensureStarted();
      trigger(f);
    }, _ref;
  }

  exports.Async$2EFuture$2EStatic = Async_Future_Static;

  function Async_CreateFuture_Static(op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }()(op)(false);
  }

  exports.Async$2ECreateFuture$2EStatic = Async_CreateFuture_Static;

  function Async_StartAsFuture_Static(op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }()(op)(true);
  }

  exports.Async$2EStartAsFuture$2EStatic = Async_StartAsFuture_Static;

  function Async_CreateNamedFuture_Static(name, op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }(name)(op)(false);
  }

  exports.Async$2ECreateNamedFuture$2EStatic = Async_CreateNamedFuture_Static;

  function Async_StartAsNamedFuture_Static(name, op) {
    return function (arg00) {
      return function (arg10) {
        return function (arg20) {
          return Async_Future_Static(arg00, arg10, arg20);
        };
      };
    }(name)(op)(true);
  }

  exports.Async$2EStartAsNamedFuture$2EStatic = Async_StartAsNamedFuture_Static;

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
                  }(_fableCore.AsyncBuilder.singleton);
                }, _fableCore.Seq.range(0, ar.length - 1));
              })));

              return builder_.Bind(work, function (_arg2) {
                return builder_.Return(res);
              });
            });
          }(_fableCore.AsyncBuilder.singleton);
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
        }(_fableCore.AsyncBuilder.singleton);
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
      }(_fableCore.AsyncBuilder.singleton);
    };

    var choose = $exports.choose = function choose(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(choose(f, l.tail), function (_arg2) {
              return builder_.Return(_arg1 != null ? new _fableCore.List(_arg1, _arg2) : _arg2);
            });
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    var map = $exports.map = function map(f, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(new _fableCore.List()) : builder_.Bind(f(l.head), function (_arg1) {
            return builder_.Bind(map(f, l.tail), function (_arg2) {
              return builder_.Return(new _fableCore.List(_arg1, _arg2));
            });
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    var foldMap = $exports.foldMap = function foldMap(f, st, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return([st, new _fableCore.List()]) : builder_.Bind(f(st)(l.head), function (_arg1) {
            return builder_.Bind(foldMap(f, _arg1[1], l.tail), function (_arg2) {
              return builder_.Return([_arg2[0], new _fableCore.List(_arg1[0], _arg2[1])]);
            });
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    var fold = $exports.fold = function fold(f, st, l) {
      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return l.tail == null ? builder_.Return(st) : builder_.Bind(f(st)(l.head), function (_arg1) {
            return builder_.ReturnFrom(fold(f, _arg1, l.tail));
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    return $exports;
  }({});

  var ListDictionaryNode = exports.ListDictionaryNode = function () {
    function ListDictionaryNode(result, nested) {
      _classCallCheck(this, ListDictionaryNode);

      this.Result = result;
      this.Nested = nested;
    }

    ListDictionaryNode.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    return ListDictionaryNode;
  }();

  _fableCore.Util.setInterfaces(ListDictionaryNode.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Common.ListDictionaryNode");

  var ListDictionaryModule = exports.ListDictionaryModule = function ($exports) {
    var tryFind = $exports.tryFind = function tryFind(ks, dict) {
      var loop = function loop(ks_1) {
        return function (node) {
          var matchValue = [ks_1, node];

          var $target2 = function $target2() {
            return null;
          };

          if (matchValue[0].tail != null) {
            if (function () {
              var ks_2 = matchValue[0].tail;
              var k = matchValue[0].head;
              var d = matchValue[1].Nested;
              return d.has(k);
            }()) {
              var d = matchValue[1].Nested;
              var k = matchValue[0].head;
              var ks_2 = matchValue[0].tail;
              return loop(ks_2)(d.get(k));
            } else {
              return $target2();
            }
          } else {
            if (matchValue[1].Result != null) {
              var r = matchValue[1].Result;
              return r;
            } else {
              return $target2();
            }
          }
        };
      };

      return loop(ks)(new ListDictionaryNode(null, dict));
    };

    var set = $exports.set = function set(ks, v, dict) {
      var loop = function loop(ks_1) {
        return function (dict_1) {
          if (ks_1.tail != null) {
            if (!dict_1.has(ks_1.head)) {
              dict_1.set(ks_1.head, function () {
                var Nested = new Map();
                return new ListDictionaryNode(null, Nested);
              }());
            }

            if (ks_1.tail.tail == null) {
              dict_1.get(ks_1.head).Result = v;
            } else {
              loop(ks_1.tail)(dict_1.get(ks_1.head).Nested);
            }
          } else {
            throw "Empty key not supported";
          }
        };
      };

      loop(ks)(dict);
    };

    var count = $exports.count = function count(dict) {
      var loop = function loop(node) {
        var nest = _fableCore.Seq.sumBy(function (kv) {
          return loop(kv[1]);
        }, node.Nested);

        if (function () {
          return node.Result != null;
        }()) {
          return 1 + nest;
        } else {
          return nest;
        }
      };

      return _fableCore.Seq.sumBy(function (kv) {
        return loop(kv[1]);
      }, dict);
    };

    return $exports;
  }({});

  var List = exports.List = function ($exports) {
    var groupWith = $exports.groupWith = function groupWith(f, list) {
      var groups = [];

      for (var _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var e = _ref2;
        var added = false;
        var i = 0;

        while (!added ? i < groups.length : false) {
          if (f(e)(groups[i][0])) {
            groups[i][1].push(e);
            added = true;
          }

          i = i + 1;
        }

        if (!added) {
          groups.push([e, Array.from(_fableCore.List.ofArray([e]))]);
        }
      }

      return _fableCore.Seq.toList(_fableCore.Seq.map(function ($var54) {
        return _fableCore.Seq.toList($var54[1]);
      }, groups));
    };

    var unreduce = $exports.unreduce = function unreduce(f, s) {
      return _fableCore.Seq.toList(_fableCore.Seq.unfold(function (s_1) {
        var $var55 = f(s_1);

        if ($var55 != null) {
          return function (v) {
            return [v, v];
          }($var55);
        } else {
          return $var55;
        }
      }, s));
    };

    return $exports;
  }({});
});
//# sourceMappingURL=common.js.map