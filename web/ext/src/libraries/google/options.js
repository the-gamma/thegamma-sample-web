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
        global.options = mod.exports;
    }
})(this, function (exports, _fableCore) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CandlestickChartOptions = exports.CandlestickCandlestick = exports.TimelineOptions = exports.TimelineTimeline = exports.LabelStyle = exports.TableOptions = exports.CssClassNames = exports.TreeMapOptions = exports.BubbleChartOptions = exports.ChartBubble = exports.PieChartOptions = exports.SteppedAreaChartOptions = exports.AnnotationChartOptions = exports.AreaChartOptions = exports.HistogramOptions = exports.HistogramHistogram = exports.BarChartOptions = exports.LineChartOptions = exports.ColumnChartOptions = exports.ScatterChartOptions = exports.Trendline = exports.GroupWidth = exports.ChartBoundingBox = exports.ChartAxis = exports.ChartViewWindow = exports.ChartGridlines = exports.TransitionAnimation = exports.ChartArea = exports.ChartStroke = exports.ChartExplorer = exports.ChartCrosshair = exports.ChartCrosshairSelected = exports.ChartCrosshairFocused = exports.ChartAnnotations = exports.ChartBoxStyle = exports.ChartBoxStyleGradient = exports.GeoChartOptions = exports.GeoChartMagnifyingGlass = exports.ChartColorAxis = exports.ChartLegend = exports.ChartTooltip = exports.ChartTextStyle = exports.ChartSizeAxis = undefined;

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

    var ChartSizeAxis = exports.ChartSizeAxis = function () {
        function ChartSizeAxis(maxSize, maxValue, minSize, minValue) {
            _classCallCheck(this, ChartSizeAxis);

            this.maxSize = maxSize;
            this.maxValue = maxValue;
            this.minSize = minSize;
            this.minValue = minValue;
        }

        _createClass(ChartSizeAxis, [{
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

        return ChartSizeAxis;
    }();

    _fableCore.Util.setInterfaces(ChartSizeAxis.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartSizeAxis");

    var ChartTextStyle = exports.ChartTextStyle = function () {
        function ChartTextStyle(fontName, fontSize, bold, italic, color, auraColor, opacity) {
            _classCallCheck(this, ChartTextStyle);

            this.fontName = fontName;
            this.fontSize = fontSize;
            this.bold = bold;
            this.italic = italic;
            this.color = color;
            this.auraColor = auraColor;
            this.opacity = opacity;
        }

        _createClass(ChartTextStyle, [{
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

        return ChartTextStyle;
    }();

    _fableCore.Util.setInterfaces(ChartTextStyle.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartTextStyle");

    var ChartTooltip = exports.ChartTooltip = function () {
        function ChartTooltip(isHtml, showColorCode, textStyle, trigger) {
            _classCallCheck(this, ChartTooltip);

            this.isHtml = isHtml;
            this.showColorCode = showColorCode;
            this.textStyle = textStyle;
            this.trigger = trigger;
        }

        _createClass(ChartTooltip, [{
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

        return ChartTooltip;
    }();

    _fableCore.Util.setInterfaces(ChartTooltip.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartTooltip");

    var ChartLegend = exports.ChartLegend = function () {
        function ChartLegend(alignment, maxLines, position, textStyle, numberFormat) {
            _classCallCheck(this, ChartLegend);

            this.alignment = alignment;
            this.maxLines = maxLines;
            this.position = position;
            this.textStyle = textStyle;
            this.numberFormat = numberFormat;
        }

        _createClass(ChartLegend, [{
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

        return ChartLegend;
    }();

    _fableCore.Util.setInterfaces(ChartLegend.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartLegend");

    var ChartColorAxis = exports.ChartColorAxis = function () {
        function ChartColorAxis(minValue, maxValue, values, colors, legend) {
            _classCallCheck(this, ChartColorAxis);

            this.minValue = minValue;
            this.maxValue = maxValue;
            this.values = values;
            this.colors = colors;
            this.legend = legend;
        }

        _createClass(ChartColorAxis, [{
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

        return ChartColorAxis;
    }();

    _fableCore.Util.setInterfaces(ChartColorAxis.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartColorAxis");

    var GeoChartMagnifyingGlass = exports.GeoChartMagnifyingGlass = function () {
        function GeoChartMagnifyingGlass(enable, zoomFactor) {
            _classCallCheck(this, GeoChartMagnifyingGlass);

            this.enable = enable;
            this.zoomFactor = zoomFactor;
        }

        _createClass(GeoChartMagnifyingGlass, [{
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

        return GeoChartMagnifyingGlass;
    }();

    _fableCore.Util.setInterfaces(GeoChartMagnifyingGlass.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.GeoChartMagnifyingGlass");

    var GeoChartOptions = exports.GeoChartOptions = function () {
        function GeoChartOptions(backgroundColor, colorAxis, datalessRegionColor, displayMode, enableRegionInteractivity, height, keepAspectRatio, legend, region, magnifyingGlass, markerOpacity, resolution, sizeAxis, tooltip, width) {
            _classCallCheck(this, GeoChartOptions);

            this.backgroundColor = backgroundColor;
            this.colorAxis = colorAxis;
            this.datalessRegionColor = datalessRegionColor;
            this.displayMode = displayMode;
            this.enableRegionInteractivity = enableRegionInteractivity;
            this.height = height;
            this.keepAspectRatio = keepAspectRatio;
            this.legend = legend;
            this.region = region;
            this.magnifyingGlass = magnifyingGlass;
            this.markerOpacity = markerOpacity;
            this.resolution = resolution;
            this.sizeAxis = sizeAxis;
            this.tooltip = tooltip;
            this.width = width;
        }

        _createClass(GeoChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return GeoChartOptions;
    }();

    _fableCore.Util.setInterfaces(GeoChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.GeoChartOptions");

    var ChartBoxStyleGradient = exports.ChartBoxStyleGradient = function () {
        function ChartBoxStyleGradient(color1, color2, x1, y1, x2, y2, useObjectBoundingBoxUnits) {
            _classCallCheck(this, ChartBoxStyleGradient);

            this.color1 = color1;
            this.color2 = color2;
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            this.useObjectBoundingBoxUnits = useObjectBoundingBoxUnits;
        }

        _createClass(ChartBoxStyleGradient, [{
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

        return ChartBoxStyleGradient;
    }();

    _fableCore.Util.setInterfaces(ChartBoxStyleGradient.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartBoxStyleGradient");

    var ChartBoxStyle = exports.ChartBoxStyle = function () {
        function ChartBoxStyle(stroke, strokeWidth, rx, ry, gradient) {
            _classCallCheck(this, ChartBoxStyle);

            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this.rx = rx;
            this.ry = ry;
            this.gradient = gradient;
        }

        _createClass(ChartBoxStyle, [{
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

        return ChartBoxStyle;
    }();

    _fableCore.Util.setInterfaces(ChartBoxStyle.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartBoxStyle");

    var ChartAnnotations = exports.ChartAnnotations = function () {
        function ChartAnnotations(boxStyle, textStyle) {
            _classCallCheck(this, ChartAnnotations);

            this.boxStyle = boxStyle;
            this.textStyle = textStyle;
        }

        _createClass(ChartAnnotations, [{
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

        return ChartAnnotations;
    }();

    _fableCore.Util.setInterfaces(ChartAnnotations.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartAnnotations");

    var ChartCrosshairFocused = exports.ChartCrosshairFocused = function () {
        function ChartCrosshairFocused(color, opacity) {
            _classCallCheck(this, ChartCrosshairFocused);

            this.color = color;
            this.opacity = opacity;
        }

        _createClass(ChartCrosshairFocused, [{
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

        return ChartCrosshairFocused;
    }();

    _fableCore.Util.setInterfaces(ChartCrosshairFocused.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartCrosshairFocused");

    var ChartCrosshairSelected = exports.ChartCrosshairSelected = function () {
        function ChartCrosshairSelected(color, opacity) {
            _classCallCheck(this, ChartCrosshairSelected);

            this.color = color;
            this.opacity = opacity;
        }

        _createClass(ChartCrosshairSelected, [{
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

        return ChartCrosshairSelected;
    }();

    _fableCore.Util.setInterfaces(ChartCrosshairSelected.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartCrosshairSelected");

    var ChartCrosshair = exports.ChartCrosshair = function () {
        function ChartCrosshair(color, focused, opacity, orientation, selected, trigger) {
            _classCallCheck(this, ChartCrosshair);

            this.color = color;
            this.focused = focused;
            this.opacity = opacity;
            this.orientation = orientation;
            this.selected = selected;
            this.trigger = trigger;
        }

        _createClass(ChartCrosshair, [{
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

        return ChartCrosshair;
    }();

    _fableCore.Util.setInterfaces(ChartCrosshair.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartCrosshair");

    var ChartExplorer = exports.ChartExplorer = function () {
        function ChartExplorer(actions, axis, keepInBounds, maxZoomIn, maxZoomOut, zoomDelta) {
            _classCallCheck(this, ChartExplorer);

            this.actions = actions;
            this.axis = axis;
            this.keepInBounds = keepInBounds;
            this.maxZoomIn = maxZoomIn;
            this.maxZoomOut = maxZoomOut;
            this.zoomDelta = zoomDelta;
        }

        _createClass(ChartExplorer, [{
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

        return ChartExplorer;
    }();

    _fableCore.Util.setInterfaces(ChartExplorer.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartExplorer");

    var ChartStroke = exports.ChartStroke = function () {
        function ChartStroke(stroke, strokeWidth, fill) {
            _classCallCheck(this, ChartStroke);

            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this.fill = fill;
        }

        _createClass(ChartStroke, [{
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

        return ChartStroke;
    }();

    _fableCore.Util.setInterfaces(ChartStroke.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartStroke");

    var ChartArea = exports.ChartArea = function () {
        function ChartArea(top, left, width, height) {
            _classCallCheck(this, ChartArea);

            this.top = top;
            this.left = left;
            this.width = width;
            this.height = height;
        }

        _createClass(ChartArea, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return ChartArea;
    }();

    _fableCore.Util.setInterfaces(ChartArea.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.ChartArea");

    var TransitionAnimation = exports.TransitionAnimation = function () {
        function TransitionAnimation(duration, easing) {
            _classCallCheck(this, TransitionAnimation);

            this.duration = duration;
            this.easing = easing;
        }

        _createClass(TransitionAnimation, [{
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

        return TransitionAnimation;
    }();

    _fableCore.Util.setInterfaces(TransitionAnimation.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.TransitionAnimation");

    var ChartGridlines = exports.ChartGridlines = function () {
        function ChartGridlines(color, count) {
            _classCallCheck(this, ChartGridlines);

            this.color = color;
            this.count = count;
        }

        _createClass(ChartGridlines, [{
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

        return ChartGridlines;
    }();

    _fableCore.Util.setInterfaces(ChartGridlines.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartGridlines");

    var ChartViewWindow = exports.ChartViewWindow = function () {
        function ChartViewWindow(max, min) {
            _classCallCheck(this, ChartViewWindow);

            this.max = max;
            this.min = min;
        }

        _createClass(ChartViewWindow, [{
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

        return ChartViewWindow;
    }();

    _fableCore.Util.setInterfaces(ChartViewWindow.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartViewWindow");

    var ChartAxis = exports.ChartAxis = function () {
        function ChartAxis(baseline, baselineColor, direction, format, gridlines, minorGridlines, logScale, textPosition, textStyle, ticks, title, titleTextStyle, allowContainerBoundaryTextCufoff, slantedText, slantedTextAngle, maxAlternation, maxTextLines, minTextSpacing, showTextEvery, maxValue, minValue, viewWindowMode, viewWindow) {
            _classCallCheck(this, ChartAxis);

            this.baseline = baseline;
            this.baselineColor = baselineColor;
            this.direction = direction;
            this.format = format;
            this.gridlines = gridlines;
            this.minorGridlines = minorGridlines;
            this.logScale = logScale;
            this.textPosition = textPosition;
            this.textStyle = textStyle;
            this.ticks = ticks;
            this.title = title;
            this.titleTextStyle = titleTextStyle;
            this.allowContainerBoundaryTextCufoff = allowContainerBoundaryTextCufoff;
            this.slantedText = slantedText;
            this.slantedTextAngle = slantedTextAngle;
            this.maxAlternation = maxAlternation;
            this.maxTextLines = maxTextLines;
            this.minTextSpacing = minTextSpacing;
            this.showTextEvery = showTextEvery;
            this.maxValue = maxValue;
            this.minValue = minValue;
            this.viewWindowMode = viewWindowMode;
            this.viewWindow = viewWindow;
        }

        _createClass(ChartAxis, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return ChartAxis;
    }();

    _fableCore.Util.setInterfaces(ChartAxis.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.ChartAxis");

    var ChartBoundingBox = exports.ChartBoundingBox = function () {
        function ChartBoundingBox(left, top, width, height) {
            _classCallCheck(this, ChartBoundingBox);

            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
        }

        _createClass(ChartBoundingBox, [{
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

        return ChartBoundingBox;
    }();

    _fableCore.Util.setInterfaces(ChartBoundingBox.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartBoundingBox");

    var GroupWidth = exports.GroupWidth = function () {
        function GroupWidth(groupWidth) {
            _classCallCheck(this, GroupWidth);

            this.groupWidth = groupWidth;
        }

        _createClass(GroupWidth, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return GroupWidth;
    }();

    _fableCore.Util.setInterfaces(GroupWidth.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.GroupWidth");

    var Trendline = exports.Trendline = function () {
        function Trendline(color, lineWidth, labelInLegend, opacity, pointSize, pointsVisible, showR2, type, visibleInLegend) {
            _classCallCheck(this, Trendline);

            this.color = color;
            this.lineWidth = lineWidth;
            this.labelInLegend = labelInLegend;
            this.opacity = opacity;
            this.pointSize = pointSize;
            this.pointsVisible = pointsVisible;
            this.showR2 = showR2;
            this.type = type;
            this.visibleInLegend = visibleInLegend;
        }

        _createClass(Trendline, [{
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

        return Trendline;
    }();

    _fableCore.Util.setInterfaces(Trendline.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.Trendline");

    var ScatterChartOptions = exports.ScatterChartOptions = function () {
        function ScatterChartOptions(aggregationTarget, animation, annotations, axisTitlesPosition, backgroundColor, chartArea, colors, crosshair, curveType, dataOpacity, enableInteractivity, explorer, fontSize, fontName, forceIFrame, hAxis, height, legend, lineWidth, pointSize, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, trendlines, vAxis, width) {
            _classCallCheck(this, ScatterChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.annotations = annotations;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.chartArea = chartArea;
            this.colors = colors;
            this.crosshair = crosshair;
            this.curveType = curveType;
            this.dataOpacity = dataOpacity;
            this.enableInteractivity = enableInteractivity;
            this.explorer = explorer;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.forceIFrame = forceIFrame;
            this.hAxis = hAxis;
            this.height = height;
            this.legend = legend;
            this.lineWidth = lineWidth;
            this.pointSize = pointSize;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.trendlines = trendlines;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(ScatterChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return ScatterChartOptions;
    }();

    _fableCore.Util.setInterfaces(ScatterChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.ScatterChartOptions");

    var ColumnChartOptions = exports.ColumnChartOptions = function () {
        function ColumnChartOptions(aggregationTarget, animation, annotations, axisTitlesPosition, backgroundColor, bar, chartArea, colors, enableInteractivity, focusTarget, fontSize, fontName, hAxis, height, isStacked, legend, reverseCategories, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, ColumnChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.annotations = annotations;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.bar = bar;
            this.chartArea = chartArea;
            this.colors = colors;
            this.enableInteractivity = enableInteractivity;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.height = height;
            this.isStacked = isStacked;
            this.legend = legend;
            this.reverseCategories = reverseCategories;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(ColumnChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return ColumnChartOptions;
    }();

    _fableCore.Util.setInterfaces(ColumnChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.ColumnChartOptions");

    var LineChartOptions = exports.LineChartOptions = function () {
        function LineChartOptions(aggregationTarget, animation, annotations, axisTitlesPosition, backgroundColor, chartArea, colors, crosshair, curveType, dataOpacity, enableInteractivity, explorer, focusTarget, fontSize, fontName, hAxis, height, interpolateNulls, legend, lineWidth, orientation, pointSize, reverseCategories, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, LineChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.annotations = annotations;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.chartArea = chartArea;
            this.colors = colors;
            this.crosshair = crosshair;
            this.curveType = curveType;
            this.dataOpacity = dataOpacity;
            this.enableInteractivity = enableInteractivity;
            this.explorer = explorer;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.height = height;
            this.interpolateNulls = interpolateNulls;
            this.legend = legend;
            this.lineWidth = lineWidth;
            this.orientation = orientation;
            this.pointSize = pointSize;
            this.reverseCategories = reverseCategories;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(LineChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return LineChartOptions;
    }();

    _fableCore.Util.setInterfaces(LineChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.LineChartOptions");

    var BarChartOptions = exports.BarChartOptions = function () {
        function BarChartOptions(aggregationTarget, animation, annotations, axisTitlesPosition, backgroundColor, bar, chartArea, colors, dataOpacity, enableInteractivity, focusTarget, fontSize, fontName, hAxes, hAxis, height, isStacked, legend, reverseCategories, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, BarChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.annotations = annotations;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.bar = bar;
            this.chartArea = chartArea;
            this.colors = colors;
            this.dataOpacity = dataOpacity;
            this.enableInteractivity = enableInteractivity;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxes = hAxes;
            this.hAxis = hAxis;
            this.height = height;
            this.isStacked = isStacked;
            this.legend = legend;
            this.reverseCategories = reverseCategories;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(BarChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return BarChartOptions;
    }();

    _fableCore.Util.setInterfaces(BarChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.BarChartOptions");

    var HistogramHistogram = exports.HistogramHistogram = function () {
        function HistogramHistogram(bucketSize, hideBucketItems, lastBucketPercentile) {
            _classCallCheck(this, HistogramHistogram);

            this.bucketSize = bucketSize;
            this.hideBucketItems = hideBucketItems;
            this.lastBucketPercentile = lastBucketPercentile;
        }

        _createClass(HistogramHistogram, [{
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

        return HistogramHistogram;
    }();

    _fableCore.Util.setInterfaces(HistogramHistogram.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.HistogramHistogram");

    var HistogramOptions = exports.HistogramOptions = function () {
        function HistogramOptions(animation, axisTitlesPosition, backgroundColor, bar, chartArea, colors, dataOpacity, enableInteractivity, focusTarget, fontSize, fontName, hAxis, histogram, height, interpolateNulls, isStacked, legend, orientation, reverseCategories, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, HistogramOptions);

            this.animation = animation;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.bar = bar;
            this.chartArea = chartArea;
            this.colors = colors;
            this.dataOpacity = dataOpacity;
            this.enableInteractivity = enableInteractivity;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.histogram = histogram;
            this.height = height;
            this.interpolateNulls = interpolateNulls;
            this.isStacked = isStacked;
            this.legend = legend;
            this.orientation = orientation;
            this.reverseCategories = reverseCategories;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(HistogramOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return HistogramOptions;
    }();

    _fableCore.Util.setInterfaces(HistogramOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.HistogramOptions");

    var AreaChartOptions = exports.AreaChartOptions = function () {
        function AreaChartOptions(aggregationTarget, animation, areaOpacity, axisTitlesPosition, backgroundColor, chartArea, colors, crosshair, dataOpacity, enableInteractivity, explorer, focusTarget, fontSize, fontName, hAxis, height, interpolateNulls, isStacked, legend, lineWidth, orientation, pointSize, reverseCategories, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, AreaChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.areaOpacity = areaOpacity;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.chartArea = chartArea;
            this.colors = colors;
            this.crosshair = crosshair;
            this.dataOpacity = dataOpacity;
            this.enableInteractivity = enableInteractivity;
            this.explorer = explorer;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.height = height;
            this.interpolateNulls = interpolateNulls;
            this.isStacked = isStacked;
            this.legend = legend;
            this.lineWidth = lineWidth;
            this.orientation = orientation;
            this.pointSize = pointSize;
            this.reverseCategories = reverseCategories;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(AreaChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return AreaChartOptions;
    }();

    _fableCore.Util.setInterfaces(AreaChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.AreaChartOptions");

    var AnnotationChartOptions = exports.AnnotationChartOptions = function () {
        function AnnotationChartOptions(allowHtml, allValuesSuffix, annotationsWidth, colors, dateFormat, displayAnnotations, displayAnnotationsFilter, displayDateTimeBarSeparator, displayExactValues, displayLegendDots, displayLegendValues, displayRangeSelector, displayZoomButtons, fill, legendPosition, max, min, numberFormats, scaleColumns, scaleFormat, scaleType, thickness, zoomEndTime, zoomStartTime) {
            _classCallCheck(this, AnnotationChartOptions);

            this.allowHtml = allowHtml;
            this.allValuesSuffix = allValuesSuffix;
            this.annotationsWidth = annotationsWidth;
            this.colors = colors;
            this.dateFormat = dateFormat;
            this.displayAnnotations = displayAnnotations;
            this.displayAnnotationsFilter = displayAnnotationsFilter;
            this.displayDateTimeBarSeparator = displayDateTimeBarSeparator;
            this.displayExactValues = displayExactValues;
            this.displayLegendDots = displayLegendDots;
            this.displayLegendValues = displayLegendValues;
            this.displayRangeSelector = displayRangeSelector;
            this.displayZoomButtons = displayZoomButtons;
            this.fill = fill;
            this.legendPosition = legendPosition;
            this.max = max;
            this.min = min;
            this.numberFormats = numberFormats;
            this.scaleColumns = scaleColumns;
            this.scaleFormat = scaleFormat;
            this.scaleType = scaleType;
            this.thickness = thickness;
            this.zoomEndTime = zoomEndTime;
            this.zoomStartTime = zoomStartTime;
        }

        _createClass(AnnotationChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return AnnotationChartOptions;
    }();

    _fableCore.Util.setInterfaces(AnnotationChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.AnnotationChartOptions");

    var SteppedAreaChartOptions = exports.SteppedAreaChartOptions = function () {
        function SteppedAreaChartOptions(aggregationTarget, animation, areaOpacity, axisTitlesPosition, backgroundColor, chartArea, colors, connectSteps, enableInteractivity, focusTarget, fontSize, fontName, hAxis, height, interpolateNulls, isStacked, legend, reverseCategories, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, SteppedAreaChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.areaOpacity = areaOpacity;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.chartArea = chartArea;
            this.colors = colors;
            this.connectSteps = connectSteps;
            this.enableInteractivity = enableInteractivity;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.height = height;
            this.interpolateNulls = interpolateNulls;
            this.isStacked = isStacked;
            this.legend = legend;
            this.reverseCategories = reverseCategories;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(SteppedAreaChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return SteppedAreaChartOptions;
    }();

    _fableCore.Util.setInterfaces(SteppedAreaChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.SteppedAreaChartOptions");

    var PieChartOptions = exports.PieChartOptions = function () {
        function PieChartOptions(backgroundColor, chartArea, colors, enableInteractivity, fontSize, fontName, height, is3D, legend, pieHole, pieSliceBorderColor, pieSliceText, pieSliceTextStyle, pieStartAngle, reverseCategories, pieResidueSliceColor, pieResidueSliceLabel, slices, sliceVisibilityThreshold, title, titleTextStyle, tooltip, width) {
            _classCallCheck(this, PieChartOptions);

            this.backgroundColor = backgroundColor;
            this.chartArea = chartArea;
            this.colors = colors;
            this.enableInteractivity = enableInteractivity;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.height = height;
            this.is3D = is3D;
            this.legend = legend;
            this.pieHole = pieHole;
            this.pieSliceBorderColor = pieSliceBorderColor;
            this.pieSliceText = pieSliceText;
            this.pieSliceTextStyle = pieSliceTextStyle;
            this.pieStartAngle = pieStartAngle;
            this.reverseCategories = reverseCategories;
            this.pieResidueSliceColor = pieResidueSliceColor;
            this.pieResidueSliceLabel = pieResidueSliceLabel;
            this.slices = slices;
            this.sliceVisibilityThreshold = sliceVisibilityThreshold;
            this.title = title;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.width = width;
        }

        _createClass(PieChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return PieChartOptions;
    }();

    _fableCore.Util.setInterfaces(PieChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.PieChartOptions");

    var ChartBubble = exports.ChartBubble = function () {
        function ChartBubble(opacity, stroke, textStyle) {
            _classCallCheck(this, ChartBubble);

            this.opacity = opacity;
            this.stroke = stroke;
            this.textStyle = textStyle;
        }

        _createClass(ChartBubble, [{
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

        return ChartBubble;
    }();

    _fableCore.Util.setInterfaces(ChartBubble.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.ChartBubble");

    var BubbleChartOptions = exports.BubbleChartOptions = function () {
        function BubbleChartOptions(animation, axisTitlesPosition, backgroundColor, bubble, chartArea, colors, colorAxis, enableInteractivity, explorer, fontSize, fontName, forceIFrame, hAxis, height, legend, selectionMode, series, sizeAxis, sortBubblesBySize, theme, title, titlePosition, titleTextStyle, tooltip, vAxis, width) {
            _classCallCheck(this, BubbleChartOptions);

            this.animation = animation;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.bubble = bubble;
            this.chartArea = chartArea;
            this.colors = colors;
            this.colorAxis = colorAxis;
            this.enableInteractivity = enableInteractivity;
            this.explorer = explorer;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.forceIFrame = forceIFrame;
            this.hAxis = hAxis;
            this.height = height;
            this.legend = legend;
            this.selectionMode = selectionMode;
            this.series = series;
            this.sizeAxis = sizeAxis;
            this.sortBubblesBySize = sortBubblesBySize;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(BubbleChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return BubbleChartOptions;
    }();

    _fableCore.Util.setInterfaces(BubbleChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.BubbleChartOptions");

    var TreeMapOptions = exports.TreeMapOptions = function () {
        function TreeMapOptions(fontColor, fontFamily, fontSize, forceIFrame, headerColor, headerHeight, headerHighlightColor, hintOpacity, maxColor, maxDepth, maxHighlightColor, maxPostDepth, maxColorValue, midColor, midHighlightColor, minColor, minHighlightColor, minColorValue, showScale, showTooltips, textStyle, title, titleTextStyle, useWeightedAverageForAggregation) {
            _classCallCheck(this, TreeMapOptions);

            this.fontColor = fontColor;
            this.fontFamily = fontFamily;
            this.fontSize = fontSize;
            this.forceIFrame = forceIFrame;
            this.headerColor = headerColor;
            this.headerHeight = headerHeight;
            this.headerHighlightColor = headerHighlightColor;
            this.hintOpacity = hintOpacity;
            this.maxColor = maxColor;
            this.maxDepth = maxDepth;
            this.maxHighlightColor = maxHighlightColor;
            this.maxPostDepth = maxPostDepth;
            this.maxColorValue = maxColorValue;
            this.midColor = midColor;
            this.midHighlightColor = midHighlightColor;
            this.minColor = minColor;
            this.minHighlightColor = minHighlightColor;
            this.minColorValue = minColorValue;
            this.showScale = showScale;
            this.showTooltips = showTooltips;
            this.textStyle = textStyle;
            this.title = title;
            this.titleTextStyle = titleTextStyle;
            this.useWeightedAverageForAggregation = useWeightedAverageForAggregation;
        }

        _createClass(TreeMapOptions, [{
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

        return TreeMapOptions;
    }();

    _fableCore.Util.setInterfaces(TreeMapOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.TreeMapOptions");

    var CssClassNames = exports.CssClassNames = function () {
        function CssClassNames(headerRow, tableRow, oddTableRow, selectedTableRow, hoverTableRow, headerCell, tableCell, rowNumberCell) {
            _classCallCheck(this, CssClassNames);

            this.headerRow = headerRow;
            this.tableRow = tableRow;
            this.oddTableRow = oddTableRow;
            this.selectedTableRow = selectedTableRow;
            this.hoverTableRow = hoverTableRow;
            this.headerCell = headerCell;
            this.tableCell = tableCell;
            this.rowNumberCell = rowNumberCell;
        }

        _createClass(CssClassNames, [{
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

        return CssClassNames;
    }();

    _fableCore.Util.setInterfaces(CssClassNames.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.CssClassNames");

    var TableOptions = exports.TableOptions = function () {
        function TableOptions(allowHtml, alternatingRowStyle, cssClassName, firstRowNumber, height, page, pageSize, rtlTable, scrollLeftStartPosition, showRowNumber, sort, sortAscending, sortColumn, startPage, width) {
            _classCallCheck(this, TableOptions);

            this.allowHtml = allowHtml;
            this.alternatingRowStyle = alternatingRowStyle;
            this.cssClassName = cssClassName;
            this.firstRowNumber = firstRowNumber;
            this.height = height;
            this.page = page;
            this.pageSize = pageSize;
            this.rtlTable = rtlTable;
            this.scrollLeftStartPosition = scrollLeftStartPosition;
            this.showRowNumber = showRowNumber;
            this.sort = sort;
            this.sortAscending = sortAscending;
            this.sortColumn = sortColumn;
            this.startPage = startPage;
            this.width = width;
        }

        _createClass(TableOptions, [{
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

        return TableOptions;
    }();

    _fableCore.Util.setInterfaces(TableOptions.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.TableOptions");

    var LabelStyle = exports.LabelStyle = function () {
        function LabelStyle(color, fontName, fontSize) {
            _classCallCheck(this, LabelStyle);

            this.color = color;
            this.fontName = fontName;
            this.fontSize = fontSize;
        }

        _createClass(LabelStyle, [{
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

        return LabelStyle;
    }();

    _fableCore.Util.setInterfaces(LabelStyle.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.LabelStyle");

    var TimelineTimeline = exports.TimelineTimeline = function () {
        function TimelineTimeline(barLabelStyle, colorByRowLabel, groupByRowLabel, rowLabelStyle, showRowLabels, singleColor) {
            _classCallCheck(this, TimelineTimeline);

            this.barLabelStyle = barLabelStyle;
            this.colorByRowLabel = colorByRowLabel;
            this.groupByRowLabel = groupByRowLabel;
            this.rowLabelStyle = rowLabelStyle;
            this.showRowLabels = showRowLabels;
            this.singleColor = singleColor;
        }

        _createClass(TimelineTimeline, [{
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

        return TimelineTimeline;
    }();

    _fableCore.Util.setInterfaces(TimelineTimeline.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.TimelineTimeline");

    var TimelineOptions = exports.TimelineOptions = function () {
        function TimelineOptions(avoidOverlappingGridLines, backgroundColor, colors, enableInteractivity, forceIFrame, height, timeline, width) {
            _classCallCheck(this, TimelineOptions);

            this.avoidOverlappingGridLines = avoidOverlappingGridLines;
            this.backgroundColor = backgroundColor;
            this.colors = colors;
            this.enableInteractivity = enableInteractivity;
            this.forceIFrame = forceIFrame;
            this.height = height;
            this.timeline = timeline;
            this.width = width;
        }

        _createClass(TimelineOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return TimelineOptions;
    }();

    _fableCore.Util.setInterfaces(TimelineOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.TimelineOptions");

    var CandlestickCandlestick = exports.CandlestickCandlestick = function () {
        function CandlestickCandlestick(hollowIsRising, fallingColor, risingColor) {
            _classCallCheck(this, CandlestickCandlestick);

            this.hollowIsRising = hollowIsRising;
            this.fallingColor = fallingColor;
            this.risingColor = risingColor;
        }

        _createClass(CandlestickCandlestick, [{
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

        return CandlestickCandlestick;
    }();

    _fableCore.Util.setInterfaces(CandlestickCandlestick.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "TheGamma.GoogleCharts.Options.CandlestickCandlestick");

    var CandlestickChartOptions = exports.CandlestickChartOptions = function () {
        function CandlestickChartOptions(aggregationTarget, animation, axisTitlesPosition, backgroundColor, bar, candlestick, chartArea, colors, enableInteractivity, focusTarget, fontSize, fontName, hAxis, height, legend, orientation, reverseCategories, selectionMode, series, theme, title, titlePosition, titleTextStyle, tooltip, vAxes, vAxis, width) {
            _classCallCheck(this, CandlestickChartOptions);

            this.aggregationTarget = aggregationTarget;
            this.animation = animation;
            this.axisTitlesPosition = axisTitlesPosition;
            this.backgroundColor = backgroundColor;
            this.bar = bar;
            this.candlestick = candlestick;
            this.chartArea = chartArea;
            this.colors = colors;
            this.enableInteractivity = enableInteractivity;
            this.focusTarget = focusTarget;
            this.fontSize = fontSize;
            this.fontName = fontName;
            this.hAxis = hAxis;
            this.height = height;
            this.legend = legend;
            this.orientation = orientation;
            this.reverseCategories = reverseCategories;
            this.selectionMode = selectionMode;
            this.series = series;
            this.theme = theme;
            this.title = title;
            this.titlePosition = titlePosition;
            this.titleTextStyle = titleTextStyle;
            this.tooltip = tooltip;
            this.vAxes = vAxes;
            this.vAxis = vAxis;
            this.width = width;
        }

        _createClass(CandlestickChartOptions, [{
            key: "Equals",
            value: function Equals(other) {
                return _fableCore.Util.equalsRecords(this, other);
            }
        }]);

        return CandlestickChartOptions;
    }();

    _fableCore.Util.setInterfaces(CandlestickChartOptions.prototype, ["FSharpRecord", "System.IEquatable"], "TheGamma.GoogleCharts.Options.CandlestickChartOptions");
});
//# sourceMappingURL=options.js.map