(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core", "../gui/html"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"), require("../gui/html"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore, global.html);
    global.maps = mod.exports;
  }
})(this, function (exports, _fableCore, _html) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.timeline = exports.math = exports.geo = exports.GeoGlobals = exports.JsHelpers = exports.JsDatamap = exports.BubblesConfig = exports.DatamapConfig = exports.GeographyConfig = exports.AsyncHelpers = exports.Http = undefined;

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

  _fableCore.Util.setInterfaces(Http.prototype, [], "TheGamma.Maps.Http");

  var AsyncHelpers = exports.AsyncHelpers = function ($exports) {
    var Async_AwaitFuture_Static = $exports["Async.AwaitFuture.Static"] = function Async_AwaitFuture_Static(f) {
      return _fableCore.Async.fromContinuations(function (tupledArg) {
        f.Then(tupledArg[0]);
      });
    };

    var Async_Future_Static = $exports["Async.Future.Static"] = function Async_Future_Static(n, op, start) {
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

      return _ref = {}, _defineProperty(_ref, _fableCore.Symbol.interfaces, ["TheGamma.Maps.Future"]), _defineProperty(_ref, "Then", function Then(f) {
        ensureStarted();
        trigger(f);
      }), _ref;
    };

    var Async_AsFuture_Static = $exports["Async.AsFuture.Static"] = function Async_AsFuture_Static(n, op) {
      return function (arg00) {
        return function (arg10) {
          return function (arg20) {
            return Async_Future_Static(arg00, arg10, arg20);
          };
        };
      }(n)(op)(false);
    };

    var Async_StartAsFuture_Static = $exports["Async.StartAsFuture.Static"] = function Async_StartAsFuture_Static(n, op) {
      return function (arg00) {
        return function (arg10) {
          return function (arg20) {
            return Async_Future_Static(arg00, arg10, arg20);
          };
        };
      }(n)(op)(true);
    };

    return $exports;
  }({});

  var GeographyConfig = exports.GeographyConfig = function () {
    function GeographyConfig(popupOnHover, highlightOnHover) {
      _classCallCheck(this, GeographyConfig);

      this.popupOnHover = popupOnHover;
      this.highlightOnHover = highlightOnHover;
    }

    _createClass(GeographyConfig, [{
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

    return GeographyConfig;
  }();

  _fableCore.Util.setInterfaces(GeographyConfig.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Maps.GeographyConfig");

  var DatamapConfig = exports.DatamapConfig = function () {
    function DatamapConfig(element, scope, geographyConfig, fills, data) {
      _classCallCheck(this, DatamapConfig);

      this.element = element;
      this.scope = scope;
      this.geographyConfig = geographyConfig;
      this.fills = fills;
      this.data = data;
    }

    _createClass(DatamapConfig, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }]);

    return DatamapConfig;
  }();

  _fableCore.Util.setInterfaces(DatamapConfig.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Maps.DatamapConfig");

  var BubblesConfig = exports.BubblesConfig = function () {
    function BubblesConfig(popupTemplate, key) {
      _classCallCheck(this, BubblesConfig);

      this.popupTemplate = popupTemplate;
      this.key = key;
    }

    _createClass(BubblesConfig, [{
      key: "Equals",
      value: function Equals(other) {
        return _fableCore.Util.equalsRecords(this, other);
      }
    }]);

    return BubblesConfig;
  }();

  _fableCore.Util.setInterfaces(BubblesConfig.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.Maps.BubblesConfig");

  var JsDatamap = exports.JsDatamap = function ($exports) {
    return $exports;
  }({});

  var JsHelpers = exports.JsHelpers = function ($exports) {
    return $exports;
  }({});

  var GeoGlobals = exports.GeoGlobals = function ($exports) {
    var Locations = $exports.Locations = function () {
      function Locations(country, coordinates) {
        _classCallCheck(this, Locations);

        this.country = country;
        this.coordinates = coordinates;
      }

      _createClass(Locations, [{
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

      return Locations;
    }();

    _fableCore.Util.setInterfaces(Locations.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.Maps.GeoGlobals.Locations");

    var locations = $exports.locations = function (arg00) {
      return function (arg10) {
        return AsyncHelpers["Async.StartAsFuture.Static"](arg00, arg10);
      };
    }("locations")(function (builder_) {
      return builder_.Delay(function (unitVar) {
        return builder_.Bind(Http.Request("GET", "/data/locations.json"), function (_arg1) {
          var lookup = _fableCore.Map.create(JSON.parse(_arg1).map(function (l) {
            return [l.country, l.coordinates];
          }), new _fableCore.GenericComparer(function (x, y) {
            return x < y ? -1 : x > y ? 1 : 0;
          }));

          return builder_.Return(lookup);
        });
      });
    }(_fableCore.defaultAsyncBuilder));

    return $exports;
  }({});

  var geo = exports.geo = function () {
    function geo() {
      _classCallCheck(this, geo);
    }

    _createClass(geo, null, [{
      key: "lookup",
      value: function lookup(country) {
        return function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(AsyncHelpers["Async.AwaitFuture.Static"](GeoGlobals.locations), function (_arg1) {
              return builder_.Return(_fableCore.Map.tryFind(country, _arg1) != null ? _fableCore.Map.tryFind(country, _arg1) : new Float64Array([0, 0]));
            });
          });
        }(_fableCore.defaultAsyncBuilder);
      }
    }]);

    return geo;
  }();

  _fableCore.Util.setInterfaces(geo.prototype, [], "TheGamma.Maps.geo");

  var math = exports.math = function () {
    function math() {
      _classCallCheck(this, math);
    }

    _createClass(math, null, [{
      key: "sqrt",
      value: function sqrt(f) {
        return Math.sqrt(f);
      }
    }, {
      key: "pow",
      value: function pow(f, k) {
        return Math.pow(f, k);
      }
    }, {
      key: "log",
      value: function log(f, b) {
        return b != null ? Math.log(f, b) : Math.log(f);
      }
    }, {
      key: "min",
      value: function min(f1, f2) {
        return f1 < f2 ? f1 : f2;
      }
    }, {
      key: "max",
      value: function max(f1, f2) {
        return f1 > f2 ? f1 : f2;
      }
    }, {
      key: "add",
      value: function add(f1, f2) {
        return f1 + f2;
      }
    }, {
      key: "times",
      value: function times(f1, f2) {
        return f1 * f2;
      }
    }, {
      key: "sub",
      value: function sub(f1, f2) {
        return f1 - f2;
      }
    }, {
      key: "div",
      value: function div(f1, f2) {
        return f1 / f2;
      }
    }]);

    return math;
  }();

  _fableCore.Util.setInterfaces(math.prototype, [], "TheGamma.Maps.math");

  var timeline = exports.timeline = function () {
    function timeline(data, colors, titleTemplate, defaultFill, delay, overflowDelay, infoSelector, locSelector, sizeSelector, detailsSelector, timeSelector) {
      _classCallCheck(this, timeline);

      this.data = data;
      this.colors = colors;
      this.titleTemplate = titleTemplate;
      this.defaultFill = defaultFill;
      this.delay = delay;
      this.overflowDelay = overflowDelay;
      this.infoSelector = infoSelector;
      this.locSelector = locSelector;
      this.sizeSelector = sizeSelector;
      this.detailsSelector = detailsSelector;
      this.timeSelector = timeSelector;
    }

    _createClass(timeline, [{
      key: "set",
      value: function set(fill, colors, title, delay, overflowDelay, details) {
        var colors_1 = colors != null ? colors : this.colors;
        var defaultFill = fill != null ? fill : this.defaultFill;
        var titleTemplate = title != null ? title : this.titleTemplate;
        var delay_1 = delay != null ? delay : this.delay;
        var detailsSelector = details != null ? details : this.detailsSelector;
        var overflowDelay_1 = overflowDelay != null ? overflowDelay : this.overflowDelay;
        return new timeline(this.data, colors_1, titleTemplate, defaultFill, delay_1, overflowDelay_1, this.infoSelector, this.locSelector, this.sizeSelector, detailsSelector, this.timeSelector);
      }
    }, {
      key: "using",
      value: function using(coordinates, time, size, info) {
        return new timeline(this.data, this.colors, this.titleTemplate, this.defaultFill, this.delay, this.overflowDelay, info, coordinates, size, this.detailsSelector, time);
      }
    }, {
      key: "show",
      value: function show(outputId) {
        var _this = this;

        var id = "map" + function () {
          var copyOfStruct = function () {
            var copyOfStruct = _fableCore.Date.now();

            return _fableCore.Date.ticks(copyOfStruct);
          }();

          return String(copyOfStruct);
        }();

        (0, _html.renderTo)(document.getElementById(outputId), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "map")]))(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_title")]))(_fableCore.List.ofArray([(0, _html.text)("")])), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id), (0, _html.op_EqualsGreater)("class", "mapcontainer")]))(new _fableCore.List()), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(new _fableCore.List())(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("div")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "buttons")]))(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("a")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_btn")]))(_fableCore.List.ofArray([function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-pause")]))(new _fableCore.List())]))])), function (arg0) {
          return function (arg1) {
            return _html.El.op_Dynamic(arg0, arg1);
          };
        }(_html.h)("input")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("id", id + "_player"), (0, _html.op_EqualsGreater)("type", "range")]))(new _fableCore.List())]))])));
        var fills = Array.from(_fableCore.Seq.mapIndexed(function (i, c) {
          return [_fableCore.String.fsFormat("item%d")(function (x) {
            return x;
          })(i), c];
        }, this.colors));
        var map = new Datamap(new DatamapConfig(document.getElementById(id), "world", new GeographyConfig(false, false), _fableCore.Util.createObj(_fableCore.List.ofArray([["defaultFill", this.defaultFill]], _fableCore.List.ofArray(fills))), {}));

        var objects = function objects(data) {
          return function (infos) {
            return function (time) {
              var res = [];

              for (var i = 0; i <= data.length - 1; i++) {
                var patternInput = data[i];

                if (_fableCore.Util.equals(patternInput[3], time)) {
                  (function (arg00) {
                    res.push(arg00);
                  })(_fableCore.Util.createObj(_fableCore.List.append(_this.detailsSelector != null ? _fableCore.List.ofArray([["details", _fableCore.String.join("", _fableCore.Seq.map(function (value) {
                    return _fableCore.Util.toString(value);
                  }, _this.detailsSelector(patternInput[2])))]]) : new _fableCore.List(), _fableCore.List.ofArray([["radius", _this.sizeSelector(patternInput[2])], ["borderWidth", "1px"], ["fillKey", _fableCore.String.fsFormat("item%d")(function (x) {
                    return x;
                  })(patternInput[0] % fills.length)], ["info", _fableCore.Map.tryFind(_fableCore.String.fsFormat("%O, %O")(function (x) {
                    return x;
                  })(patternInput[1][0])(patternInput[1][1]), infos) != null ? _fableCore.Map.tryFind(_fableCore.String.fsFormat("%O, %O")(function (x) {
                    return x;
                  })(patternInput[1][0])(patternInput[1][1]), infos) : ""], ["latitude", patternInput[1][0]], ["longitude", patternInput[1][1]]]))));
                }
              }

              return Array.from(res);
            };
          };
        };

        (function (arg00) {
          _fableCore.Async.startImmediate(arg00);
        })(function (builder_) {
          return builder_.Delay(function (unitVar) {
            return builder_.Bind(_this.data.data, function (_arg25) {
              var locs = new Array(_arg25.length);
              return builder_.Combine(builder_.For(_fableCore.Seq.range(0, _arg25.length - 1), function (_arg26) {
                return builder_.Bind(_this.locSelector(_arg25[_arg26][1]), function (_arg27) {
                  locs[_arg26] = _arg27;
                  return builder_.Zero();
                });
              }), builder_.Delay(function (unitVar_1) {
                var colorLookup = _fableCore.Map.create(_fableCore.Seq.mapIndexed(function (i, l) {
                  return [_fableCore.List.ofArray(l), i];
                }, _fableCore.Seq.distinct(locs)), new _fableCore.GenericComparer(function (x, y) {
                  return x.CompareTo(y);
                }));

                var data = Array.from(_fableCore.Seq.map2(function (tupledArg, locs_1) {
                  return [colorLookup.get(_fableCore.List.ofArray(locs_1)), locs_1, tupledArg[1], _this.timeSelector(tupledArg[1])];
                }, _arg25, locs));

                var infosLookup = _fableCore.Map.create(_fableCore.Seq.map(function (tupledArg) {
                  return [tupledArg[0], _fableCore.String.join("<br />", _fableCore.Seq.distinct(_fableCore.Seq.map(function (tupledArg_1) {
                    return _this.infoSelector(tupledArg_1[2]);
                  }, tupledArg[1])))];
                }, _fableCore.Seq.groupBy(function (tupledArg) {
                  return _fableCore.String.fsFormat("%O, %O")(function (x) {
                    return x;
                  })(tupledArg[1][0])(tupledArg[1][1]);
                }, data)), new _fableCore.GenericComparer(function (x, y) {
                  return x < y ? -1 : x > y ? 1 : 0;
                }));

                var times = Int32Array.from(_fableCore.Seq.sortWith(function (x, y) {
                  return _fableCore.Util.compare(x, y);
                }, _fableCore.Seq.distinct(Int32Array.from(_fableCore.Seq.map(function (tupledArg) {
                  return tupledArg[3];
                }, data)))));
                var patternInput = [_fableCore.Seq.reduce(function (x, y) {
                  return Math.min(x, y);
                }, times), _fableCore.Seq.reduce(function (x, y) {
                  return Math.max(x, y);
                }, times)];
                var player = document.getElementById(id + "_player");
                var btn = document.getElementById(id + "_btn");
                return builder_.Combine(times.length === 1 ? function () {
                  player.style.display = "none";
                  btn.style.display = "none";
                  return builder_.Zero();
                }() : builder_.Zero(), builder_.Delay(function (unitVar_2) {
                  player.min = String(0);
                  player.value = String(0);
                  player.max = String(times.length - 1);

                  var render = function render(unitVar0) {
                    var y = times[Number.parseInt(player.value)];
                    var o = objects(data)(infosLookup)(y);
                    (0, _html.renderTo)(document.getElementById(id + "_title"), function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("h2")(new _fableCore.List())(_fableCore.List.ofArray([(0, _html.text)(_fableCore.String.replace(_this.titleTemplate, "%title", String(y)))])));

                    var config = function () {
                      var key = function key(data_1) {
                        return JSON.stringify([data_1["latitude"], data_1["longitude"]]);
                      };

                      return new BubblesConfig(function (geo_1, data_1) {
                        return _this.detailsSelector != null ? _fableCore.String.fsFormat("<div style='pointer-events:none' class='hoverinfo'><strong>%s</strong><br /> %s </div>")(function (x) {
                          return x;
                        })(data_1["info"])(data_1["details"]) : _fableCore.String.fsFormat("<div style='pointer-events:none' class='hoverinfo'>%s</div>")(function (x) {
                          return x;
                        })(data_1["info"]);
                      }, key);
                    }();

                    map.bubbles(o, config);
                  };

                  var autoPlay = true;

                  var startPlay = function startPlay(unitVar0) {
                    (function (arg00) {
                      _fableCore.Async.startImmediate(arg00);
                    })(function (builder__1) {
                      return builder__1.Delay(function (unitVar_3) {
                        return builder__1.While(function (unitVar_4) {
                          return autoPlay;
                        }, builder__1.Delay(function (unitVar_4) {
                          var value = Number.parseInt(player.value);
                          render();
                          player.value = String(value + 1 === times.length ? 0 : value + 1);
                          return builder__1.Bind(_fableCore.Async.sleep(value + 1 === times.length ? _this.overflowDelay : _this.delay), function (_arg31) {
                            return builder__1.Return();
                          });
                        }));
                      });
                    }(_fableCore.defaultAsyncBuilder));
                  };

                  player.onchange = function (e) {
                    autoPlay = false;

                    (function (dom) {
                      (0, _html.renderTo)(btn, dom);
                    })(function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", "fa fa-play")]))(new _fableCore.List()));

                    return render();
                  };

                  player.oninput = player.onchange;

                  btn.onclick = function (e) {
                    autoPlay = !autoPlay;

                    (function (dom) {
                      (0, _html.renderTo)(btn, dom);
                    })(function (arg0) {
                      return function (arg1) {
                        return _html.El.op_Dynamic(arg0, arg1);
                      };
                    }(_html.h)("i")(_fableCore.List.ofArray([(0, _html.op_EqualsGreater)("class", autoPlay ? "fa fa-pause" : "fa fa-play")]))(new _fableCore.List()));

                    if (autoPlay) {
                      startPlay();
                    }

                    return null;
                  };

                  startPlay();
                  return builder_.Zero();
                }));
              }));
            });
          });
        }(_fableCore.defaultAsyncBuilder));
      }
    }], [{
      key: "create",
      value: function create(data) {
        var colors = ["red"];
        var defaultFill = "blue";
        var delay = 750;
        var detailsSelector = null;
        var overflowDelay = 2000;
        var titleTemplate = "%title";

        var infoSelector = function infoSelector(_arg1) {
          return "";
        };

        var timeSelector = function timeSelector(_arg2) {
          return 0;
        };

        var sizeSelector = function sizeSelector(_arg3) {
          return 10;
        };

        return new timeline(data, colors, titleTemplate, defaultFill, delay, overflowDelay, infoSelector, function (_arg4) {
          throw "!";
        }, sizeSelector, detailsSelector, timeSelector);
      }
    }]);

    return timeline;
  }();

  _fableCore.Util.setInterfaces(timeline.prototype, ["FSharpRecord"], "TheGamma.Maps.timeline");
});
//# sourceMappingURL=maps.js.map