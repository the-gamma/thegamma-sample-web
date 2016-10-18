(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "../../libraries/common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("../../libraries/common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.common);
    global.runtime = mod.exports;
  }
})(this, function (exports, _fableCore, _common) {
  "use strict";

  exports.__esModule = true;
  exports.PivotContext = exports.RuntimeContext = undefined;
  exports.convertTupleSequence = convertTupleSequence;
  exports.convertSequence = convertSequence;
  exports.trimLeft = trimLeft;
  exports.trimRight = trimRight;
  exports.concatUrl = concatUrl;

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

  function convertTupleSequence(f, g, data) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(data, function (_arg1) {
          return builder_.Return(_arg1.map(function (tupledArg) {
            return [f(tupledArg[0]), g(tupledArg[1])];
          }));
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

  function convertSequence(f, data) {
    return function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(data, function (_arg1) {
          return builder_.Return(function (array) {
            return Array.from(_fableCore.Seq.map(f, array));
          }(_arg1));
        });
      });
    }(_fableCore.AsyncBuilder.singleton);
  }

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

  var RuntimeContext = exports.RuntimeContext = function () {
    function RuntimeContext(root, cookies, trace) {
      _classCallCheck(this, RuntimeContext);

      this["root@19"] = root;
      this.cookies = cookies;
      this["trace@19"] = trace;
    }

    RuntimeContext.prototype.addTrace = function addTrace(suffix) {
      var _this = this;

      var traces = _fableCore.Seq.toList(_fableCore.Seq.delay(function (unitVar) {
        return _fableCore.Seq.append(!_fableCore.String.isNullOrEmpty(_this["trace@19"]) ? _fableCore.Seq.singleton(_this["trace@19"]) : _fableCore.Seq.empty(), _fableCore.Seq.delay(function (unitVar_1) {
          return !_fableCore.String.isNullOrEmpty(suffix) ? _fableCore.Seq.singleton(suffix) : _fableCore.Seq.empty();
        }));
      }));

      return new RuntimeContext(this["root@19"], this.cookies, _fableCore.String.join("&", traces));
    };

    RuntimeContext.prototype.getValue = function getValue(endpoint) {
      var _this2 = this;

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          return builder_.Bind(_common.Http.Request("POST", concatUrl(_this2["root@19"], endpoint), _this2["trace@19"], _this2.cookies), function (_arg1) {
            return builder_.Return(JSON.parse(_arg1));
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    _createClass(RuntimeContext, [{
      key: "root",
      get: function get() {
        return this["root@19"];
      }
    }, {
      key: "trace",
      get: function get() {
        return this["trace@19"];
      }
    }]);

    return RuntimeContext;
  }();

  _fableCore.Util.setInterfaces(RuntimeContext.prototype, [], "TheGamma.TypePovidersRuntime.RuntimeContext");

  var PivotContext = exports.PivotContext = function () {
    function PivotContext(root, calls) {
      _classCallCheck(this, PivotContext);

      this.root = root;
      this.calls = calls;
    }

    PivotContext.prototype.addCall = function addCall(callid, values) {
      return new PivotContext(this.root, [[callid, values]].concat(this.calls));
    };

    PivotContext.prototype.getData = function getData(tfs, isPreview) {
      var _this3 = this;

      return function (builder_) {
        return builder_.Delay(function (unitVar) {
          var url = function () {
            var folder = function folder(tfs_1) {
              return function (tupledArg) {
                if (tupledArg[1].length !== 1) {
                  throw "PivotContext.getData: Expected one argument";
                }

                return _fableCore.String.replace(tfs_1, tupledArg[0], _fableCore.Util.toString(tupledArg[1][0]));
              };
            };

            return function (array) {
              return _fableCore.Seq.fold(function ($var6, $var7) {
                return folder($var6)($var7);
              }, tfs, array);
            };
          }()(_this3.calls);

          _common.Log.trace("runtime", "Pivot: %s", concatUrl(_this3.root, url));

          var url_1 = isPreview ? concatUrl(_this3.root, url) + "?preview" : concatUrl(_this3.root, url);
          return builder_.Bind(_common.Http.Request("GET", url_1), function (_arg1) {
            return builder_.Return(JSON.parse(_arg1));
          });
        });
      }(_fableCore.AsyncBuilder.singleton);
    };

    return PivotContext;
  }();

  _fableCore.Util.setInterfaces(PivotContext.prototype, [], "TheGamma.TypePovidersRuntime.PivotContext");
});
//# sourceMappingURL=runtime.js.map