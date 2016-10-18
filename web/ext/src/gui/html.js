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
    global.html = mod.exports;
  }
})(this, function (exports, _fableCore) {
  "use strict";

  exports.__esModule = true;
  exports.h = exports.El = exports.counter = exports.DomNode = exports.DomAttribute = undefined;
  exports.render = render;
  exports.renderTo = renderTo;
  exports.text = text;
  exports.op_EqualsGreater = op_EqualsGreater;
  exports.op_EqualsBangGreater = op_EqualsBangGreater;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DomAttribute = exports.DomAttribute = function DomAttribute(caseName, fields) {
    _classCallCheck(this, DomAttribute);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomAttribute.prototype, ["FSharpUnion"], "TheGamma.Html.DomAttribute");

  var DomNode = exports.DomNode = function DomNode(caseName, fields) {
    _classCallCheck(this, DomNode);

    this.Case = caseName;
    this.Fields = fields;
  };

  _fableCore.Util.setInterfaces(DomNode.prototype, ["FSharpUnion"], "TheGamma.Html.DomNode");

  var counter = exports.counter = 0;

  function render(node) {
    return node.Case === "Delayed" ? function () {
      exports.counter = counter = counter + 1;
      var el = document.createElement("div");
      el.id = _fableCore.String.fsFormat("delayed_%d")(function (x) {
        return x;
      })(counter);
      return [el, function (unitVar0) {
        node.Fields[0](el.id);
      }];
    }() : node.Case === "Part" ? function () {
      var el = document.createElement("div");
      return [el, function (unitVar0) {
        node.Fields[0](el);
      }];
    }() : node.Case === "Element" ? function () {
      var el = document.createElement(node.Fields[0]);
      var rc = node.Fields[2].map(function (node_1) {
        return render(node_1);
      });

      for (var idx = 0; idx <= rc.length - 1; idx++) {
        var forLoopVar = rc[idx];
        el.appendChild(forLoopVar[0]);
      }

      var _loop = function _loop(_idx) {
        var forLoopVar = node.Fields[1][_idx];

        if (forLoopVar[1].Case === "Event") {
          el.addEventListener(forLoopVar[0], function (delegateArg0) {
            forLoopVar[1].Fields[0](el)(delegateArg0);
          });
        } else {
          el.setAttribute(forLoopVar[0], forLoopVar[1].Fields[0]);
        }
      };

      for (var _idx = 0; _idx <= node.Fields[1].length - 1; _idx++) {
        _loop(_idx);
      }

      var onRender = function onRender(unitVar0) {
        for (var _idx2 = 0; _idx2 <= rc.length - 1; _idx2++) {
          var _forLoopVar = rc[_idx2];

          _forLoopVar[1]();
        }

        _fableCore.Seq.iterate(function (f) {
          f(el);
        }, function () {
          var $var1 = node.Fields[3];

          if ($var1 != null) {
            return [$var1];
          } else {
            return [];
          }
        }());
      };

      return [el, onRender];
    }() : [document.createTextNode(node.Fields[0]), function (value) {
      value;
    }];
  }

  function renderTo(node, dom) {
    while (node.lastChild != null) {
      node.removeChild(node.lastChild);
    }

    var patternInput = render(dom);
    node.appendChild(patternInput[0]);
    patternInput[1]();
  }

  function text(s) {
    return new DomNode("Text", [s]);
  }

  function op_EqualsGreater(k, v) {
    return [k, new DomAttribute("Property", [v])];
  }

  function op_EqualsBangGreater(k, f) {
    return [k, new DomAttribute("Event", [f])];
  }

  var El = exports.El = function () {
    function El() {
      _classCallCheck(this, El);
    }

    El.op_Dynamic = function op_Dynamic(_arg1, n) {
      return function (a) {
        return function (b) {
          var patternInput = n !== "chosen" ? [n, null] : ["select", function (el) {
            jQuery(el).chosen();

            for (var _iterator = a, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var forLoopVar = _ref;

              if (forLoopVar[1].Case === "Event") {
                jQuery(el).on(forLoopVar[0], function (unitVar0) {
                  forLoopVar[1].Fields[0](el)(event);
                });
              }
            }
          }];
          return new DomNode("Element", [patternInput[0], Array.from(a), Array.from(b), patternInput[1]]);
        };
      };
    };

    El.prototype.delayed = function delayed(f) {
      return new DomNode("Delayed", [f]);
    };

    El.prototype.part = function part(initial, fold) {
      var evt = new _fableCore.Event();
      var state = initial;
      var container = null;
      var renderer = null;

      var render_1 = function render_1(unitVar0) {
        var matchValue = [container, renderer];

        var $target1 = function $target1() {};

        if (matchValue[0] != null) {
          if (matchValue[1] != null) {
            (function () {
              var el = matchValue[0];
              var r = matchValue[1];

              (function (dom) {
                renderTo(el, dom);
              })(r(state));
            })();
          } else {
            $target1();
          }
        } else {
          $target1();
        }
      };

      _fableCore.Observable.add(function (e) {
        state = fold(state)(e);
        render_1();
      }, evt.Publish);

      return [function (arg00) {
        evt.Trigger(arg00);
      }, function (r) {
        renderer = r;
        return new DomNode("Part", [function (el) {
          container = el;
          render_1();
        }]);
      }];
    };

    return El;
  }();

  _fableCore.Util.setInterfaces(El.prototype, [], "TheGamma.Html.El");

  var h = exports.h = new El();
});
//# sourceMappingURL=html.js.map