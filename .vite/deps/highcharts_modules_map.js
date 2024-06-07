import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/highcharts/modules/map.js
var require_map = __commonJS({
  "node_modules/highcharts/modules/map.js"(exports, module) {
    !/**
    * Highmaps JS v11.4.3 (2024-05-22)
    *
    * Highmaps as a plugin for Highcharts or Highcharts Stock.
    *
    * (c) 2011-2024 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    function(t) {
      "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/map", ["highcharts"], function(e) {
        return t(e), t.Highcharts = e, t;
      }) : t("undefined" != typeof Highcharts ? Highcharts : void 0);
    }(function(t) {
      "use strict";
      var e = t ? t._modules : {};
      function i(t2, e2, i2, s) {
        t2.hasOwnProperty(e2) || (t2[e2] = s.apply(null, i2), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: e2, module: t2[e2] } })));
      }
      i(e, "Core/Axis/Color/ColorAxisComposition.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2;
        let { parse: s } = t2, { addEvent: o, extend: r, merge: a, pick: n, splat: l } = e2;
        return function(t3) {
          let e3;
          function i3() {
            let { userOptions: t4 } = this;
            this.colorAxis = [], t4.colorAxis && (t4.colorAxis = l(t4.colorAxis), t4.colorAxis.map((t5) => new e3(this, t5)));
          }
          function h(t4) {
            let e4 = this.chart.colorAxis || [], i4 = (e5) => {
              let i5 = t4.allItems.indexOf(e5);
              -1 !== i5 && (this.destroyItem(t4.allItems[i5]), t4.allItems.splice(i5, 1));
            }, s2 = [], o2, r2;
            for (e4.forEach(function(t5) {
              (o2 = t5.options) && o2.showInLegend && (o2.dataClasses && o2.visible ? s2 = s2.concat(t5.getDataClassLegendSymbols()) : o2.visible && s2.push(t5), t5.series.forEach(function(t6) {
                (!t6.options.showInLegend || o2.dataClasses) && ("point" === t6.options.legendType ? t6.points.forEach(function(t7) {
                  i4(t7);
                }) : i4(t6));
              }));
            }), r2 = s2.length; r2--; )
              t4.allItems.unshift(s2[r2]);
          }
          function p(t4) {
            t4.visible && t4.item.legendColor && t4.item.legendItem.symbol.attr({ fill: t4.item.legendColor });
          }
          function d(t4) {
            var _a;
            (_a = this.chart.colorAxis) == null ? void 0 : _a.forEach((e4) => {
              e4.update({}, t4.redraw);
            });
          }
          function c() {
            (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors();
          }
          function u() {
            let t4 = this.axisTypes;
            t4 ? -1 === t4.indexOf("colorAxis") && t4.push("colorAxis") : this.axisTypes = ["colorAxis"];
          }
          function m(t4) {
            let e4 = this, i4 = t4 ? "show" : "hide";
            e4.visible = e4.options.visible = !!t4, ["graphic", "dataLabel"].forEach(function(t5) {
              e4[t5] && e4[t5][i4]();
            }), this.series.buildKDTree();
          }
          function g() {
            let t4 = this, e4 = this.data.length ? this.data : this.points, i4 = this.options.nullColor, s2 = this.colorAxis, o2 = this.colorKey;
            e4.forEach((e5) => {
              let r2 = e5.getNestedProperty(o2), a2 = e5.options.color || (e5.isNull || null === e5.value ? i4 : s2 && void 0 !== r2 ? s2.toColor(r2, e5) : e5.color || t4.color);
              a2 && e5.color !== a2 && (e5.color = a2, "point" === t4.options.legendType && e5.legendItem && e5.legendItem.label && t4.chart.legend.colorizeItem(e5, e5.visible));
            });
          }
          function f() {
            this.elem.attr("fill", s(this.start).tweenTo(s(this.end), this.pos), void 0, true);
          }
          function b() {
            this.elem.attr("stroke", s(this.start).tweenTo(s(this.end), this.pos), void 0, true);
          }
          t3.compose = function(t4, s2, l2, y, x) {
            let M = s2.prototype, C = l2.prototype, j = x.prototype;
            M.collectionsWithUpdate.includes("colorAxis") || (e3 = t4, M.collectionsWithUpdate.push("colorAxis"), M.collectionsWithInit.colorAxis = [M.addColorAxis], o(s2, "afterGetAxes", i3), function(t5) {
              let i4 = t5.prototype.createAxis;
              t5.prototype.createAxis = function(t6, s3) {
                if ("colorAxis" !== t6)
                  return i4.apply(this, arguments);
                let o2 = new e3(this, a(s3.axis, { index: this[t6].length, isX: false }));
                return this.isDirtyLegend = true, this.axes.forEach((t7) => {
                  t7.series = [];
                }), this.series.forEach((t7) => {
                  t7.bindAxes(), t7.isDirtyData = true;
                }), n(s3.redraw, true) && this.redraw(s3.animation), o2;
              };
            }(s2), C.fillSetter = f, C.strokeSetter = b, o(y, "afterGetAllItems", h), o(y, "afterColorizeItem", p), o(y, "afterUpdate", d), r(j, { optionalAxis: "colorAxis", translateColors: g }), r(j.pointClass.prototype, { setVisible: m }), o(x, "afterTranslate", c, { order: 1 }), o(x, "bindAxes", u));
          }, t3.pointSetVisible = m;
        }(i2 || (i2 = {})), i2;
      }), i(e, "Core/Axis/Color/ColorAxisDefaults.js", [], function() {
        return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineColor: "#ffffff", gridLineWidth: 1, tickPixelInterval: 72, startOnTick: true, endOnTick: true, offset: 0, marker: { animation: { duration: 50 }, width: 0.01, color: "#999999" }, labels: { distance: 8, overflow: "justify", rotation: 0 }, minColor: "#e6e9ff", maxColor: "#0022ff", tickLength: 5, showInLegend: true };
      }), i(e, "Core/Axis/Color/ColorAxisLike.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2, s;
        let { parse: o } = t2, { merge: r } = e2;
        return (s = i2 || (i2 = {})).initDataClasses = function(t3) {
          let e3 = this.chart, i3 = this.legendItem = this.legendItem || {}, s2 = this.options, a = t3.dataClasses || [], n, l, h = e3.options.chart.colorCount, p = 0, d;
          this.dataClasses = l = [], i3.labels = [];
          for (let t4 = 0, i4 = a.length; t4 < i4; ++t4)
            n = r(n = a[t4]), l.push(n), (e3.styledMode || !n.color) && ("category" === s2.dataClassColor ? (e3.styledMode || (h = (d = e3.options.colors || []).length, n.color = d[p]), n.colorIndex = p, ++p === h && (p = 0)) : n.color = o(s2.minColor).tweenTo(o(s2.maxColor), i4 < 2 ? 0.5 : t4 / (i4 - 1)));
        }, s.initStops = function() {
          let t3 = this.options, e3 = this.stops = t3.stops || [[0, t3.minColor || ""], [1, t3.maxColor || ""]];
          for (let t4 = 0, i3 = e3.length; t4 < i3; ++t4)
            e3[t4].color = o(e3[t4][1]);
        }, s.normalizedValue = function(t3) {
          let e3 = this.max || 0, i3 = this.min || 0;
          return this.logarithmic && (t3 = this.logarithmic.log2lin(t3)), 1 - (e3 - t3) / (e3 - i3 || 1);
        }, s.toColor = function(t3, e3) {
          let i3, s2, o2, r2, a, n;
          let l = this.dataClasses, h = this.stops;
          if (l) {
            for (n = l.length; n--; )
              if (s2 = (a = l[n]).from, o2 = a.to, (void 0 === s2 || t3 >= s2) && (void 0 === o2 || t3 <= o2)) {
                r2 = a.color, e3 && (e3.dataClass = n, e3.colorIndex = a.colorIndex);
                break;
              }
          } else {
            for (i3 = this.normalizedValue(t3), n = h.length; n-- && !(i3 > h[n][0]); )
              ;
            s2 = h[n] || h[n + 1], i3 = 1 - ((o2 = h[n + 1] || s2)[0] - i3) / (o2[0] - s2[0] || 1), r2 = s2.color.tweenTo(o2.color, i3);
          }
          return r2;
        }, i2;
      }), i(e, "Core/Axis/Color/ColorAxis.js", [e["Core/Axis/Axis.js"], e["Core/Axis/Color/ColorAxisComposition.js"], e["Core/Axis/Color/ColorAxisDefaults.js"], e["Core/Axis/Color/ColorAxisLike.js"], e["Core/Defaults.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { defaultOptions: l } = o, { series: h } = a, { defined: p, extend: d, fireEvent: c, isArray: u, isNumber: m, merge: g, pick: f, relativeLength: b } = n;
        l.colorAxis = g(l.xAxis, i2);
        class y extends t2 {
          static compose(t3, i3, s2, o2) {
            e2.compose(y, t3, i3, s2, o2);
          }
          constructor(t3, e3) {
            super(t3, e3), this.coll = "colorAxis", this.visible = true, this.init(t3, e3);
          }
          init(t3, e3) {
            let i3 = t3.options.legend || {}, s2 = e3.layout ? "vertical" !== e3.layout : "vertical" !== i3.layout;
            this.side = e3.side || s2 ? 2 : 1, this.reversed = e3.reversed || !s2, this.opposite = !s2, super.init(t3, e3, "colorAxis"), this.userOptions = e3, u(t3.userOptions.colorAxis) && (t3.userOptions.colorAxis[this.index] = e3), e3.dataClasses && this.initDataClasses(e3), this.initStops(), this.horiz = s2, this.zoomEnabled = false;
          }
          hasData() {
            return !!(this.tickPositions || []).length;
          }
          setTickPositions() {
            if (!this.dataClasses)
              return super.setTickPositions();
          }
          setOptions(t3) {
            let e3 = g(l.colorAxis, t3, { showEmpty: false, title: null, visible: this.chart.options.legend.enabled && false !== t3.visible });
            super.setOptions(e3), this.options.crosshair = this.options.marker;
          }
          setAxisSize() {
            var _a;
            let t3 = this.chart, e3 = (_a = this.legendItem) == null ? void 0 : _a.symbol, { width: i3, height: s2 } = this.getSize();
            e3 && (this.left = +e3.attr("x"), this.top = +e3.attr("y"), this.width = i3 = +e3.attr("width"), this.height = s2 = +e3.attr("height"), this.right = t3.chartWidth - this.left - i3, this.bottom = t3.chartHeight - this.top - s2, this.pos = this.horiz ? this.left : this.top), this.len = (this.horiz ? i3 : s2) || y.defaultLegendLength;
          }
          getOffset() {
            var _a;
            let t3 = (_a = this.legendItem) == null ? void 0 : _a.group, e3 = this.chart.axisOffset[this.side];
            if (t3) {
              this.axisParent = t3, super.getOffset();
              let i3 = this.chart.legend;
              i3.allItems.forEach(function(t4) {
                t4 instanceof y && t4.drawLegendSymbol(i3, t4);
              }), i3.render(), this.chart.getMargins(true), this.chart.series.some((t4) => t4.isDrilling) || (this.isDirty = true), this.added || (this.added = true, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = e3;
            }
          }
          setLegendColor() {
            let t3 = this.horiz, e3 = this.reversed, i3 = e3 ? 1 : 0, s2 = e3 ? 0 : 1, o2 = t3 ? [i3, 0, s2, 0] : [0, s2, 0, i3];
            this.legendColor = { linearGradient: { x1: o2[0], y1: o2[1], x2: o2[2], y2: o2[3] }, stops: this.stops };
          }
          drawLegendSymbol(t3, e3) {
            let i3 = e3.legendItem || {}, s2 = t3.padding, o2 = t3.options, r2 = this.options.labels, a2 = f(o2.itemDistance, 10), n2 = this.horiz, { width: l2, height: h2 } = this.getSize(), p2 = f(o2.labelPadding, n2 ? 16 : 30);
            this.setLegendColor(), i3.symbol || (i3.symbol = this.chart.renderer.symbol("roundedRect").attr({ r: o2.symbolRadius ?? 3, zIndex: 1 }).add(i3.group)), i3.symbol.attr({ x: 0, y: (t3.baseline || 0) - 11, width: l2, height: h2 }), i3.labelWidth = l2 + s2 + (n2 ? a2 : f(r2.x, r2.distance) + (this.maxLabelLength || 0)), i3.labelHeight = h2 + s2 + (n2 ? p2 : 0);
          }
          setState(t3) {
            this.series.forEach(function(e3) {
              e3.setState(t3);
            });
          }
          setVisible() {
          }
          getSeriesExtremes() {
            let t3 = this.series, e3, i3, s2, o2, r2, a2, n2 = t3.length, l2, d2;
            for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; n2--; ) {
              if (i3 = (a2 = t3[n2]).colorKey = f(a2.options.colorKey, a2.colorKey, a2.pointValKey, a2.zoneAxis, "y"), o2 = a2.pointArrayMap, r2 = a2[i3 + "Min"] && a2[i3 + "Max"], a2[i3 + "Data"])
                e3 = a2[i3 + "Data"];
              else if (o2) {
                if (e3 = [], s2 = o2.indexOf(i3), l2 = a2.yData, s2 >= 0 && l2)
                  for (d2 = 0; d2 < l2.length; d2++)
                    e3.push(f(l2[d2][s2], l2[d2]));
              } else
                e3 = a2.yData;
              if (r2)
                a2.minColorValue = a2[i3 + "Min"], a2.maxColorValue = a2[i3 + "Max"];
              else {
                let t4 = h.prototype.getExtremes.call(a2, e3);
                a2.minColorValue = t4.dataMin, a2.maxColorValue = t4.dataMax;
              }
              p(a2.minColorValue) && p(a2.maxColorValue) && (this.dataMin = Math.min(this.dataMin, a2.minColorValue), this.dataMax = Math.max(this.dataMax, a2.maxColorValue)), r2 || h.prototype.applyExtremes.call(a2);
            }
          }
          drawCrosshair(t3, e3) {
            let i3;
            let s2 = this.legendItem || {}, o2 = e3 && e3.plotX, r2 = e3 && e3.plotY, a2 = this.pos, n2 = this.len;
            e3 && ((i3 = this.toPixels(e3.getNestedProperty(e3.series.colorKey))) < a2 ? i3 = a2 - 2 : i3 > a2 + n2 && (i3 = a2 + n2 + 2), e3.plotX = i3, e3.plotY = this.len - i3, super.drawCrosshair(t3, e3), e3.plotX = o2, e3.plotY = r2, this.cross && !this.cross.addedToColorAxis && s2.group && (this.cross.addClass("highcharts-coloraxis-marker").add(s2.group), this.cross.addedToColorAxis = true, this.chart.styledMode || "object" != typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })));
          }
          getPlotLinePath(t3) {
            let e3 = this.left, i3 = t3.translatedValue, s2 = this.top;
            return m(i3) ? this.horiz ? [["M", i3 - 4, s2 - 6], ["L", i3 + 4, s2 - 6], ["L", i3, s2], ["Z"]] : [["M", e3, i3], ["L", e3 - 6, i3 + 6], ["L", e3 - 6, i3 - 6], ["Z"]] : super.getPlotLinePath(t3);
          }
          update(t3, e3) {
            let i3 = this.chart.legend;
            this.series.forEach((t4) => {
              t4.isDirtyData = true;
            }), (t3.dataClasses && i3.allItems || this.dataClasses) && this.destroyItems(), super.update(t3, e3), this.legendItem && this.legendItem.label && (this.setLegendColor(), i3.colorizeItem(this, true));
          }
          destroyItems() {
            let t3 = this.chart, e3 = this.legendItem || {};
            if (e3.label)
              t3.legend.destroyItem(this);
            else if (e3.labels)
              for (let i3 of e3.labels)
                t3.legend.destroyItem(i3);
            t3.isDirtyLegend = true;
          }
          destroy() {
            this.chart.isDirtyLegend = true, this.destroyItems(), super.destroy(...[].slice.call(arguments));
          }
          remove(t3) {
            this.destroyItems(), super.remove(t3);
          }
          getDataClassLegendSymbols() {
            let t3;
            let e3 = this, i3 = e3.chart, s2 = e3.legendItem && e3.legendItem.labels || [], o2 = i3.options.legend, a2 = f(o2.valueDecimals, -1), n2 = f(o2.valueSuffix, ""), l2 = (t4) => e3.series.reduce((e4, i4) => (e4.push(...i4.points.filter((e5) => e5.dataClass === t4)), e4), []);
            return s2.length || e3.dataClasses.forEach((o3, h2) => {
              let p2 = o3.from, u2 = o3.to, { numberFormatter: m2 } = i3, g2 = true;
              t3 = "", void 0 === p2 ? t3 = "< " : void 0 === u2 && (t3 = "> "), void 0 !== p2 && (t3 += m2(p2, a2) + n2), void 0 !== p2 && void 0 !== u2 && (t3 += " - "), void 0 !== u2 && (t3 += m2(u2, a2) + n2), s2.push(d({ chart: i3, name: t3, options: {}, drawLegendSymbol: r.rectangle, visible: true, isDataClass: true, setState: (t4) => {
                for (let e4 of l2(h2))
                  e4.setState(t4);
              }, setVisible: function() {
                this.visible = g2 = e3.visible = !g2;
                let t4 = [];
                for (let e4 of l2(h2))
                  e4.setVisible(g2), e4.hiddenInDataClass = !g2, -1 === t4.indexOf(e4.series) && t4.push(e4.series);
                i3.legend.colorizeItem(this, g2), t4.forEach((t5) => {
                  c(t5, "afterDataClassLegendClick");
                });
              } }, o3));
            }), s2;
          }
          getSize() {
            let { chart: t3, horiz: e3 } = this, { height: i3, width: s2 } = this.options, { legend: o2 } = t3.options;
            return { width: f(p(s2) ? b(s2, t3.chartWidth) : void 0, o2 == null ? void 0 : o2.symbolWidth, e3 ? y.defaultLegendLength : 12), height: f(p(i3) ? b(i3, t3.chartHeight) : void 0, o2 == null ? void 0 : o2.symbolHeight, e3 ? 12 : y.defaultLegendLength) };
          }
        }
        return y.defaultLegendLength = 200, y.keepProps = ["legendItem"], d(y.prototype, s), Array.prototype.push.apply(t2.keepProps, y.keepProps), y;
      }), i(e, "masters/modules/coloraxis.src.js", [e["Core/Globals.js"], e["Core/Axis/Color/ColorAxis.js"]], function(t2, e2) {
        return t2.ColorAxis = t2.ColorAxis || e2, t2.ColorAxis.compose(t2.Chart, t2.Fx, t2.Legend, t2.Series), t2;
      }), i(e, "Maps/MapNavigationDefaults.js", [], function() {
        return { lang: { zoomIn: "Zoom in", zoomOut: "Zoom out" }, mapNavigation: { buttonOptions: { alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { color: "#666666", fontSize: "1em", fontWeight: "bold" }, theme: { fill: "#ffffff", stroke: "#e6e6e6", "stroke-width": 1, "text-align": "center" } }, buttons: { zoomIn: { onclick: function() {
          this.mapZoom(0.5);
        }, text: "+", y: 0 }, zoomOut: { onclick: function() {
          this.mapZoom(2);
        }, text: "-", y: 28 } }, mouseWheelSensitivity: 1.1 } };
      }), i(e, "Maps/MapPointer.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { defined: i2, extend: s, pick: o, wrap: r } = t2;
        return function(t3) {
          let e3, a = 0;
          function n(t4) {
            let e4 = this.chart;
            t4 = this.normalize(t4), e4.options.mapNavigation.enableDoubleClickZoomTo ? e4.pointer.inClass(t4.target, "highcharts-tracker") && e4.hoverPoint && e4.hoverPoint.zoomTo() : e4.isInsidePlot(t4.chartX - e4.plotLeft, t4.chartY - e4.plotTop) && e4.mapZoom(0.5, void 0, void 0, t4.chartX, t4.chartY);
          }
          function l(t4) {
            let s2 = this.chart, o2 = i2((t4 = this.normalize(t4)).wheelDelta) && -t4.wheelDelta / 120 || t4.deltaY || t4.detail;
            Math.abs(o2) >= 1 && (a += Math.abs(o2), e3 && clearTimeout(e3), e3 = setTimeout(() => {
              a = 0;
            }, 50)), a < 10 && s2.isInsidePlot(t4.chartX - s2.plotLeft, t4.chartY - s2.plotTop) && s2.mapView && s2.mapView.zoomBy(-((s2.options.mapNavigation.mouseWheelSensitivity - 1) * o2), void 0, [t4.chartX, t4.chartY], !(1 > Math.abs(o2)) && void 0);
          }
          function h(t4, e4, i3) {
            let o2 = this.chart;
            if (e4 = t4.call(this, e4, i3), o2 && o2.mapView) {
              let t5 = o2.mapView.pixelsToLonLat({ x: e4.chartX - o2.plotLeft, y: e4.chartY - o2.plotTop });
              t5 && s(e4, t5);
            }
            return e4;
          }
          function p(t4) {
            let e4 = this.chart.options.mapNavigation;
            e4 && o(e4.enableTouchZoom, e4.enabled) && (this.chart.zooming.pinchType = "xy"), t4.apply(this, [].slice.call(arguments, 1));
          }
          t3.compose = function(t4) {
            let e4 = t4.prototype;
            e4.onContainerDblClick || (s(e4, { onContainerDblClick: n, onContainerMouseWheel: l }), r(e4, "normalize", h), r(e4, "zoomOption", p));
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Maps/MapSymbols.js", [], function() {
        let t2;
        function e2(e3, i3, s, o, r) {
          if (r) {
            let t3 = (r == null ? void 0 : r.r) || 0;
            r.brBoxY = i3 - t3, r.brBoxHeight = o + t3;
          }
          return t2.roundedRect(e3, i3, s, o, r);
        }
        function i2(e3, i3, s, o, r) {
          if (r) {
            let t3 = (r == null ? void 0 : r.r) || 0;
            r.brBoxHeight = o + t3;
          }
          return t2.roundedRect(e3, i3, s, o, r);
        }
        return { compose: function(s) {
          (t2 = s.prototype.symbols).bottombutton = e2, t2.topbutton = i2;
        } };
      }), i(e, "Maps/MapNavigation.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Maps/MapNavigationDefaults.js"], e["Maps/MapPointer.js"], e["Maps/MapSymbols.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { setOptions: a } = t2, { composed: n } = e2, { addEvent: l, extend: h, merge: p, objectEach: d, pick: c, pushUnique: u } = r;
        function m(t3) {
          t3 && (t3.preventDefault && t3.preventDefault(), t3.stopPropagation && t3.stopPropagation(), t3.cancelBubble = true);
        }
        class g {
          static compose(t3, e3, r2) {
            s.compose(e3), o.compose(r2), u(n, "Map.Navigation") && (l(t3, "beforeRender", function() {
              this.mapNavigation = new g(this), this.mapNavigation.update();
            }), a(i2));
          }
          constructor(t3) {
            this.chart = t3, this.navButtons = [];
          }
          update(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.navButtons, o2 = function(t4) {
              this.handler.call(i3, t4), m(t4);
            }, r2 = i3.options.mapNavigation;
            for (t3 && (r2 = i3.options.mapNavigation = p(i3.options.mapNavigation, t3)); s2.length; )
              s2.pop().destroy();
            if (!i3.renderer.forExport && c(r2.enableButtons, r2.enabled)) {
              e3.navButtonsGroup || (e3.navButtonsGroup = i3.renderer.g().attr({ zIndex: 7 }).add()), d(r2.buttons, (t5, a2) => {
                var _a;
                let n2 = { padding: (t5 = p(r2.buttonOptions, t5)).padding };
                !i3.styledMode && t5.theme && (h(n2, t5.theme), n2.style = p(t5.theme.style, t5.style));
                let { text: d2, width: c2 = 0, height: u2 = 0, padding: g2 = 0 } = t5, f = i3.renderer.button("+" !== d2 && "-" !== d2 && d2 || "", 0, 0, o2, n2, void 0, void 0, void 0, "zoomIn" === a2 ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[a2]).attr({ width: c2, height: u2, title: i3.options.lang[a2], zIndex: 5 }).add(e3.navButtonsGroup);
                if ("+" === d2 || "-" === d2) {
                  let e4 = c2 + 1, s3 = [["M", g2 + 3, g2 + u2 / 2], ["L", g2 + e4 - 3, g2 + u2 / 2]];
                  "+" === d2 && s3.push(["M", g2 + e4 / 2, g2 + 3], ["L", g2 + e4 / 2, g2 + u2 - 3]), i3.renderer.path(s3).addClass("highcharts-button-symbol").attr(i3.styledMode ? {} : { stroke: (_a = t5.style) == null ? void 0 : _a.color, "stroke-width": 3, "stroke-linecap": "round" }).add(f);
                }
                if (f.handler = t5.onclick, l(f.element, "dblclick", m), s2.push(f), h(t5, { width: f.width, height: 2 * (f.height || 0) }), i3.hasLoaded)
                  f.align(t5, false, t5.alignTo);
                else {
                  let e4 = l(i3, "load", () => {
                    f.element && f.align(t5, false, t5.alignTo), e4();
                  });
                }
              });
              let t4 = (t5, e4) => !(e4.x >= t5.x + t5.width || e4.x + e4.width <= t5.x || e4.y >= t5.y + t5.height || e4.y + e4.height <= t5.y);
              i3.hasLoaded || l(i3, "render", function() {
                let s3 = i3.exportingGroup && i3.exportingGroup.getBBox();
                if (s3) {
                  let i4 = e3.navButtonsGroup.getBBox();
                  if (t4(s3, i4)) {
                    let t5 = -i4.y - i4.height + s3.y - 5, o3 = s3.y + s3.height - i4.y + 5, a2 = r2.buttonOptions && r2.buttonOptions.verticalAlign;
                    e3.navButtonsGroup.attr({ translateY: "bottom" === a2 ? t5 : o3 });
                  }
                }
              });
            }
            this.updateEvents(r2);
          }
          updateEvents(t3) {
            let e3 = this.chart;
            c(t3.enableDoubleClickZoom, t3.enabled) || t3.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || l(e3.container, "dblclick", function(t4) {
              e3.pointer.onContainerDblClick(t4);
            }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()), c(t3.enableMouseWheelZoom, t3.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || l(e3.container, "wheel", function(t4) {
              return e3.pointer.inClass(t4.target, "highcharts-no-mousewheel") || (e3.pointer.onContainerMouseWheel(t4), m(t4)), false;
            }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel());
          }
        }
        return g;
      }), i(e, "Series/ColorMapComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { column: { prototype: o } } = t2.seriesTypes, { addEvent: r, defined: a } = i2;
        return function(t3) {
          function i3(t4) {
            let i4 = this.series, s2 = i4.chart.renderer;
            this.moveToTopOnHover && this.graphic && (i4.stateMarkerGraphic || (i4.stateMarkerGraphic = new e2(s2, "use").css({ pointerEvents: "none" }).add(this.graphic.parentGroup)), (t4 == null ? void 0 : t4.state) === "hover" ? (this.graphic.attr({ id: this.id }), i4.stateMarkerGraphic.attr({ href: `${s2.url}#${this.id}`, visibility: "visible" })) : i4.stateMarkerGraphic.attr({ href: "" }));
          }
          t3.pointMembers = { dataLabelOnNull: true, moveToTopOnHover: true, isValid: function() {
            return null !== this.value && this.value !== 1 / 0 && this.value !== -1 / 0 && (void 0 === this.value || !isNaN(this.value));
          } }, t3.seriesMembers = { colorKey: "value", axisTypes: ["xAxis", "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"], pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function(t4) {
            let e3 = {};
            return a(t4.color) && (!t4.state || "normal" === t4.state) && (e3[this.colorProp || "fill"] = t4.color), e3;
          }, pointAttribs: o.pointAttribs }, t3.compose = function(t4) {
            return r(t4.prototype.pointClass, "afterSetState", i3), t4;
          };
        }(s || (s = {})), s;
      }), i(e, "Core/Chart/MapChart.js", [e["Core/Chart/Chart.js"], e["Core/Defaults.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { getOptions: r } = e2, { isNumber: a, merge: n, pick: l } = s;
        class h extends t2 {
          init(t3, e3) {
            let i3 = r().credits, s2 = n({ chart: { panning: { enabled: true, type: "xy" }, type: "map" }, credits: { mapText: l(i3.mapText, ' © <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: l(i3.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: false } }, t3);
            super.init(s2, e3);
          }
          mapZoom(t3, e3, i3, s2, o2) {
            this.mapView && (a(t3) && (t3 = Math.log(t3) / Math.log(0.5)), this.mapView.zoomBy(t3, a(e3) && a(i3) ? this.mapView.projection.inverse([e3, i3]) : void 0, a(s2) && a(o2) ? [s2, o2] : void 0));
          }
          update(t3) {
            var _a;
            t3.chart && "map" in t3.chart && ((_a = this.mapView) == null ? void 0 : _a.recommendMapView(this, [t3.chart.map, ...(this.options.series || []).map((t4) => t4.mapData)], true)), super.update.apply(this, arguments);
          }
        }
        return (o = h || (h = {})).maps = {}, o.mapChart = function(t3, e3, i3) {
          return new o(t3, e3, i3);
        }, o.splitPath = function(t3) {
          let e3;
          return e3 = "string" == typeof t3 ? (t3 = t3.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, "")).split(/[ ,;]+/).map((t4) => /[A-Za-z]/.test(t4) ? t4 : parseFloat(t4)) : t3, i2.prototype.pathToSegments(e3);
        }, h;
      }), i(e, "Maps/MapUtilities.js", [], function() {
        return { boundsFromPath: function(t2) {
          let e2 = -Number.MAX_VALUE, i2 = Number.MAX_VALUE, s = -Number.MAX_VALUE, o = Number.MAX_VALUE, r;
          if (t2.forEach((t3) => {
            let a = t3[t3.length - 2], n = t3[t3.length - 1];
            "number" == typeof a && "number" == typeof n && (i2 = Math.min(i2, a), e2 = Math.max(e2, a), o = Math.min(o, n), s = Math.max(s, n), r = true);
          }), r)
            return { x1: i2, y1: o, x2: e2, y2: s };
        }, pointInPolygon: function({ x: t2, y: e2 }, i2) {
          let s, o, r = false;
          for (s = 0, o = i2.length - 1; s < i2.length; o = s++)
            i2[s][1] > e2 != i2[o][1] > e2 && t2 < (i2[o][0] - i2[s][0]) * (e2 - i2[s][1]) / (i2[o][1] - i2[s][1]) + i2[s][0] && (r = !r);
          return r;
        } };
      }), i(e, "Series/Map/MapPoint.js", [e["Series/ColorMapComposition.js"], e["Maps/MapUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { boundsFromPath: o } = e2, r = i2.seriesTypes.scatter.prototype.pointClass, { extend: a, isNumber: n, pick: l } = s;
        class h extends r {
          static getProjectedPath(t3, e3) {
            return t3.projectedPath || (e3 && t3.geometry ? (e3.hasCoordinates = true, t3.projectedPath = e3.path(t3.geometry)) : t3.projectedPath = t3.path), t3.projectedPath || [];
          }
          applyOptions(t3, e3) {
            let i3 = this.series, s2 = super.applyOptions(t3, e3), o2 = i3.joinBy;
            if (i3.mapData && i3.mapMap) {
              let t4 = o2[1], e4 = super.getNestedProperty(t4), r2 = void 0 !== e4 && i3.mapMap[e4];
              r2 ? a(s2, { ...r2, name: s2.name ?? r2.name }) : -1 !== i3.pointArrayMap.indexOf("value") && (s2.value = s2.value || null);
            }
            return s2;
          }
          getProjectedBounds(t3) {
            let e3 = o(h.getProjectedPath(this, t3)), i3 = this.properties, s2 = this.series.chart.mapView;
            if (e3) {
              let o2 = i3 && i3["hc-middle-lon"], r2 = i3 && i3["hc-middle-lat"];
              if (s2 && n(o2) && n(r2)) {
                let i4 = t3.forward([o2, r2]);
                e3.midX = i4[0], e3.midY = i4[1];
              } else {
                let t4 = i3 && i3["hc-middle-x"], s3 = i3 && i3["hc-middle-y"];
                e3.midX = e3.x1 + (e3.x2 - e3.x1) * l(this.middleX, n(t4) ? t4 : 0.5);
                let o3 = l(this.middleY, n(s3) ? s3 : 0.5);
                this.geometry || (o3 = 1 - o3), e3.midY = e3.y2 - (e3.y2 - e3.y1) * o3;
              }
              return e3;
            }
          }
          onMouseOver(t3) {
            s.clearTimeout(this.colorInterval), !this.isNull && this.visible || this.series.options.nullInteraction ? super.onMouseOver.call(this, t3) : this.series.onMouseOut();
          }
          setVisible(t3) {
            this.visible = this.options.visible = !!t3, this.dataLabel && this.dataLabel[t3 ? "show" : "hide"](), this.graphic && this.graphic.attr(this.series.pointAttribs(this));
          }
          zoomTo(t3) {
            let e3 = this.series.chart, i3 = e3.mapView, s2 = this.bounds;
            if (i3 && s2) {
              let o2 = n(this.insetIndex) && i3.insets[this.insetIndex];
              if (o2) {
                let t4 = o2.projectedUnitsToPixels({ x: s2.x1, y: s2.y1 }), e4 = o2.projectedUnitsToPixels({ x: s2.x2, y: s2.y2 }), r2 = i3.pixelsToProjectedUnits({ x: t4.x, y: t4.y }), a2 = i3.pixelsToProjectedUnits({ x: e4.x, y: e4.y });
                s2 = { x1: r2.x, y1: r2.y, x2: a2.x, y2: a2.y };
              }
              i3.fitToBounds(s2, void 0, false), this.series.isDirty = true, e3.redraw(t3);
            }
          }
        }
        return a(h.prototype, { dataLabelOnNull: t2.pointMembers.dataLabelOnNull, moveToTopOnHover: t2.pointMembers.moveToTopOnHover, isValid: t2.pointMembers.isValid }), h;
      }), i(e, "Series/Map/MapSeriesDefaults.js", [e["Core/Utilities.js"]], function(t2) {
        let { isNumber: e2 } = t2;
        return { affectsMapView: true, animation: false, dataLabels: { crop: false, formatter: function() {
          let { numberFormatter: t3 } = this.series.chart, { value: i2 } = this.point;
          return e2(i2) ? t3(i2, -1) : this.point.name;
        }, inside: true, overflow: false, padding: 0, verticalAlign: "middle" }, linecap: "round", marker: null, nullColor: "#f7f7f7", stickyTracking: false, tooltip: { followPointer: true, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: true, borderColor: "#e6e6e6", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: void 0, borderColor: "#666666", borderWidth: 2 }, normal: { animation: true }, select: { color: "#cccccc" } }, legendSymbol: "rectangle" };
      }), i(e, "Maps/MapViewDefaults.js", [], function() {
        return { center: [0, 0], fitToGeometry: void 0, maxZoom: void 0, padding: 0, projection: { name: void 0, parallels: void 0, rotation: void 0 }, zoom: void 0, insetOptions: { borderColor: "#cccccc", borderWidth: 1, padding: "10%", relativeTo: "mapBoundingBox", units: "percent" } };
      }), i(e, "Maps/GeoJSONComposition.js", [e["Core/Globals.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { win: o } = t2, { format: r } = e2, { error: a, extend: n, merge: l, wrap: h } = i2;
        return function(t3) {
          function e3(t4) {
            return this.mapView && this.mapView.lonLatToProjectedUnits(t4);
          }
          function i3(t4) {
            return this.mapView && this.mapView.projectedUnitsToLonLat(t4);
          }
          function s2(t4, e4) {
            let i4 = this.options.chart.proj4 || o.proj4;
            if (!i4) {
              a(21, false, this);
              return;
            }
            let { jsonmarginX: s3 = 0, jsonmarginY: r2 = 0, jsonres: n2 = 1, scale: l2 = 1, xoffset: h2 = 0, xpan: p2 = 0, yoffset: d2 = 0, ypan: c2 = 0 } = e4, u = i4(e4.crs, [t4.lon, t4.lat]), m = e4.cosAngle || e4.rotation && Math.cos(e4.rotation), g = e4.sinAngle || e4.rotation && Math.sin(e4.rotation), f = e4.rotation ? [u[0] * m + u[1] * g, -u[0] * g + u[1] * m] : u;
            return { x: ((f[0] - h2) * l2 + p2) * n2 + s3, y: -(((d2 - f[1]) * l2 + c2) * n2 - r2) };
          }
          function p(t4, e4) {
            let i4 = this.options.chart.proj4 || o.proj4;
            if (!i4) {
              a(21, false, this);
              return;
            }
            if (null === t4.y)
              return;
            let { jsonmarginX: s3 = 0, jsonmarginY: r2 = 0, jsonres: n2 = 1, scale: l2 = 1, xoffset: h2 = 0, xpan: p2 = 0, yoffset: d2 = 0, ypan: c2 = 0 } = e4, u = { x: ((t4.x - s3) / n2 - p2) / l2 + h2, y: ((t4.y - r2) / n2 + c2) / l2 + d2 }, m = e4.cosAngle || e4.rotation && Math.cos(e4.rotation), g = e4.sinAngle || e4.rotation && Math.sin(e4.rotation), f = i4(e4.crs, "WGS84", e4.rotation ? { x: u.x * m + -(u.y * g), y: u.x * g + u.y * m } : u);
            return { lat: f.y, lon: f.x };
          }
          function d(t4, e4) {
            e4 || (e4 = Object.keys(t4.objects)[0]);
            let i4 = t4.objects[e4];
            if (i4["hc-decoded-geojson"] && i4["hc-decoded-geojson"].title === t4.title)
              return i4["hc-decoded-geojson"];
            let s3 = t4.arcs;
            if (t4.transform) {
              let e5, i5, o3;
              let r3 = t4.arcs, { scale: a3, translate: n3 } = t4.transform;
              s3 = [];
              for (let t5 = 0, l2 = r3.length; t5 < l2; ++t5) {
                let l3 = r3[t5];
                s3.push(e5 = []), i5 = 0, o3 = 0;
                for (let t6 = 0, s4 = l3.length; t6 < s4; ++t6)
                  e5.push([(i5 += l3[t6][0]) * a3[0] + n3[0], (o3 += l3[t6][1]) * a3[1] + n3[1]]);
              }
            }
            let o2 = (t5) => "number" == typeof t5[0] ? t5.reduce((t6, e5, i5) => {
              let o3 = e5 < 0 ? s3[~e5] : s3[e5];
              return e5 < 0 ? (o3 = o3.slice(0, 0 === i5 ? o3.length : o3.length - 1)).reverse() : i5 && (o3 = o3.slice(1)), t6.concat(o3);
            }, []) : t5.map(o2), r2 = i4.geometries, a2 = [];
            for (let t5 = 0, e5 = r2.length; t5 < e5; ++t5)
              a2.push({ type: "Feature", properties: r2[t5].properties, geometry: { type: r2[t5].type, coordinates: r2[t5].coordinates || o2(r2[t5].arcs) } });
            let n2 = { type: "FeatureCollection", copyright: t4.copyright, copyrightShort: t4.copyrightShort, copyrightUrl: t4.copyrightUrl, features: a2, "hc-recommended-mapview": i4["hc-recommended-mapview"], bbox: t4.bbox, title: t4.title };
            return i4["hc-decoded-geojson"] = n2, n2;
          }
          function c(t4, e4) {
            e4 = l(true, this.options.credits, e4), this.mapCredits && (e4.href = void 0), t4.call(this, e4), this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull });
          }
          t3.compose = function(t4) {
            let o2 = t4.prototype;
            o2.transformFromLatLon || (o2.fromLatLonToPoint = e3, o2.fromPointToLatLon = i3, o2.transformFromLatLon = s2, o2.transformToLatLon = p, h(o2, "addCredits", c));
          }, t3.geojson = function(t4, e4 = "map", i4) {
            var _a, _b;
            let s3 = [], o2 = "Topology" === t4.type ? d(t4) : t4, a2 = o2.features;
            for (let t5 = 0, i5 = a2.length; t5 < i5; ++t5) {
              let i6;
              let o3 = a2[t5], r2 = o3.geometry || {}, l2 = r2.type, h2 = r2.coordinates, p2 = o3.properties;
              if (("map" === e4 || "mapbubble" === e4) && ("Polygon" === l2 || "MultiPolygon" === l2) ? h2.length && (i6 = { geometry: { coordinates: h2, type: l2 } }) : "mapline" === e4 && ("LineString" === l2 || "MultiLineString" === l2) ? h2.length && (i6 = { geometry: { coordinates: h2, type: l2 } }) : "mappoint" === e4 && "Point" === l2 && h2.length && (i6 = { geometry: { coordinates: h2, type: l2 } }), i6) {
                let t6 = p2 && (p2.name || p2.NAME), e5 = p2 && p2.lon, o4 = p2 && p2.lat;
                s3.push(n(i6, { lat: "number" == typeof o4 ? o4 : void 0, lon: "number" == typeof e5 ? e5 : void 0, name: "string" == typeof t6 ? t6 : void 0, properties: p2 }));
              }
            }
            return i4 && o2.copyrightShort && (i4.chart.mapCredits = r((_a = i4.chart.options.credits) == null ? void 0 : _a.mapText, { geojson: o2 }), i4.chart.mapCreditsFull = r((_b = i4.chart.options.credits) == null ? void 0 : _b.mapTextFull, { geojson: o2 })), s3;
          }, t3.topo2geo = d;
        }(s || (s = {})), s;
      }), i(e, "Core/Geometry/PolygonClip.js", [], function() {
        function t2(t3, s, o = true) {
          let r = s[s.length - 1], a, n, l, h = t3;
          for (let t4 = 0; t4 < s.length; t4++) {
            let p = h;
            a = s[t4], h = [], n = o ? p[p.length - 1] : p[0];
            for (let t5 = 0; t5 < p.length; t5++)
              e2(r, a, l = p[t5]) ? (e2(r, a, n) || h.push(i2(r, a, n, l)), h.push(l)) : e2(r, a, n) && h.push(i2(r, a, n, l)), n = l;
            r = a;
          }
          return h;
        }
        function e2(t3, e3, i3) {
          return (e3[0] - t3[0]) * (i3[1] - t3[1]) > (e3[1] - t3[1]) * (i3[0] - t3[0]);
        }
        function i2(t3, e3, i3, s) {
          let o = [t3[0] - e3[0], t3[1] - e3[1]], r = [i3[0] - s[0], i3[1] - s[1]], a = t3[0] * e3[1] - t3[1] * e3[0], n = i3[0] * s[1] - i3[1] * s[0], l = 1 / (o[0] * r[1] - o[1] * r[0]), h = [(a * r[0] - n * o[0]) * l, (a * r[1] - n * o[1]) * l];
          return h.isIntersection = true, h;
        }
        return { clipLineString: function(e3, i3) {
          let s = [], o = t2(e3, i3, false);
          for (let t3 = 1; t3 < o.length; t3++)
            o[t3].isIntersection && o[t3 - 1].isIntersection && (s.push(o.splice(0, t3)), t3 = 0), t3 === o.length - 1 && s.push(o);
          return s;
        }, clipPolygon: t2 };
      }), i(e, "Maps/Projections/LambertConformalConic.js", [], function() {
        let t2 = Math.sign || ((t3) => 0 === t3 ? 0 : t3 > 0 ? 1 : -1), e2 = Math.PI / 180, i2 = Math.PI / 2, s = (t3) => Math.tan((i2 + t3) / 2);
        return class {
          constructor(i3) {
            let o = (i3.parallels || []).map((t3) => t3 * e2), r = o[0] || 0, a = o[1] ?? r, n = Math.cos(r);
            "object" == typeof i3.projectedBounds && (this.projectedBounds = i3.projectedBounds);
            let l = r === a ? Math.sin(r) : Math.log(n / Math.cos(a)) / Math.log(s(a) / s(r));
            1e-10 > Math.abs(l) && (l = 1e-10 * (t2(l) || 1)), this.n = l, this.c = n * Math.pow(s(r), l) / l;
          }
          forward(t3) {
            let { c: o, n: r, projectedBounds: a } = this, n = t3[0] * e2, l = t3[1] * e2;
            o > 0 ? l < -i2 + 1e-6 && (l = -i2 + 1e-6) : l > i2 - 1e-6 && (l = i2 - 1e-6);
            let h = o / Math.pow(s(l), r), p = h * Math.sin(r * n) * 63.78137, d = (o - h * Math.cos(r * n)) * 63.78137, c = [p, d];
            return a && (p < a.x1 || p > a.x2 || d < a.y1 || d > a.y2) && (c.outside = true), c;
          }
          inverse(s2) {
            let { c: o, n: r } = this, a = s2[0] / 63.78137, n = o - s2[1] / 63.78137, l = t2(r) * Math.sqrt(a * a + n * n), h = Math.atan2(a, Math.abs(n)) * t2(n);
            return n * r < 0 && (h -= Math.PI * t2(a) * t2(n)), [h / r / e2, (2 * Math.atan(Math.pow(o / l, 1 / r)) - i2) / e2];
          }
        };
      }), i(e, "Maps/Projections/EqualEarth.js", [], function() {
        let t2 = Math.sqrt(3) / 2;
        return class {
          constructor() {
            this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 };
          }
          forward(e2) {
            let i2 = Math.PI / 180, s = Math.asin(t2 * Math.sin(e2[1] * i2)), o = s * s, r = o * o * o;
            return [e2[0] * i2 * Math.cos(s) * 74.03120656864502 / (t2 * (1.340264 + -0.24331799999999998 * o + r * (0.0062510000000000005 + 0.034164 * o))), 74.03120656864502 * s * (1.340264 + -0.081106 * o + r * (893e-6 + 3796e-6 * o))];
          }
          inverse(e2) {
            let i2 = e2[0] / 74.03120656864502, s = e2[1] / 74.03120656864502, o = 180 / Math.PI, r = s, a, n, l, h;
            for (let t3 = 0; t3 < 12 && (n = (a = r * r) * a * a, l = r * (1.340264 + -0.081106 * a + n * (893e-6 + 3796e-6 * a)) - s, r -= h = l / (1.340264 + -0.24331799999999998 * a + n * (0.0062510000000000005 + 0.034164 * a)), !(1e-9 > Math.abs(h))); ++t3)
              ;
            n = (a = r * r) * a * a;
            let p = o * t2 * i2 * (1.340264 + -0.24331799999999998 * a + n * (0.0062510000000000005 + 0.034164 * a)) / Math.cos(r), d = o * Math.asin(Math.sin(r) / t2);
            return Math.abs(p) > 180 ? [NaN, NaN] : [p, d];
          }
        };
      }), i(e, "Maps/Projections/Miller.js", [], function() {
        let t2 = Math.PI / 4, e2 = Math.PI / 180;
        return class {
          constructor() {
            this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063, y2: 146.91480769173063 };
          }
          forward(i2) {
            return [i2[0] * e2 * 63.78137, 79.7267125 * Math.log(Math.tan(t2 + 0.4 * i2[1] * e2))];
          }
          inverse(i2) {
            return [i2[0] / 63.78137 / e2, 2.5 * (Math.atan(Math.exp(i2[1] / 63.78137 * 0.8)) - t2) / e2];
          }
        };
      }), i(e, "Maps/Projections/Orthographic.js", [], function() {
        let t2 = Math.PI / 180;
        return class {
          constructor() {
            this.antimeridianCutting = false, this.bounds = { x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007, y2: 63.78460826781007 };
          }
          forward(e2) {
            let i2 = e2[0], s = e2[1] * t2, o = [Math.cos(s) * Math.sin(i2 * t2) * 63.78460826781007, 63.78460826781007 * Math.sin(s)];
            return (i2 < -90 || i2 > 90) && (o.outside = true), o;
          }
          inverse(e2) {
            let i2 = e2[0] / 63.78460826781007, s = e2[1] / 63.78460826781007, o = Math.sqrt(i2 * i2 + s * s), r = Math.asin(o), a = Math.sin(r);
            return [Math.atan2(i2 * a, o * Math.cos(r)) / t2, Math.asin(o && s * a / o) / t2];
          }
        };
      }), i(e, "Maps/Projections/WebMercator.js", [], function() {
        let t2 = Math.PI / 180;
        return class {
          constructor() {
            this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -200.3750834278071, y2: 200.3750834278071 }, this.maxLatitude = 85.0511287798;
          }
          forward(e2) {
            let i2 = Math.sin(e2[1] * t2), s = [63.78137 * e2[0] * t2, 63.78137 * Math.log((1 + i2) / (1 - i2)) / 2];
            return Math.abs(e2[1]) > this.maxLatitude && (s.outside = true), s;
          }
          inverse(e2) {
            return [e2[0] / (63.78137 * t2), (2 * Math.atan(Math.exp(e2[1] / 63.78137)) - Math.PI / 2) / t2];
          }
        };
      }), i(e, "Maps/Projections/ProjectionRegistry.js", [e["Maps/Projections/LambertConformalConic.js"], e["Maps/Projections/EqualEarth.js"], e["Maps/Projections/Miller.js"], e["Maps/Projections/Orthographic.js"], e["Maps/Projections/WebMercator.js"]], function(t2, e2, i2, s, o) {
        return { EqualEarth: e2, LambertConformalConic: t2, Miller: i2, Orthographic: s, WebMercator: o };
      }), i(e, "Maps/Projection.js", [e["Core/Geometry/PolygonClip.js"], e["Maps/Projections/ProjectionRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { clipLineString: s, clipPolygon: o } = t2, { clamp: r, erase: a } = i2, n = 2 * Math.PI / 360, l = (t3) => (t3 < -180 && (t3 += 360), t3 > 180 && (t3 -= 360), t3), h = (t3) => (1 - Math.cos(t3)) / 2, p = (t3, e3) => {
          let i3 = Math.cos, s2 = t3[1] * n, o2 = t3[0] * n, r2 = e3[1] * n, a2 = e3[0] * n;
          return h(r2 - s2) + i3(s2) * i3(r2) * h(a2 - o2);
        };
        class d {
          static add(t3, e3) {
            d.registry[t3] = e3;
          }
          static distance(t3, e3) {
            let { atan2: i3, sqrt: s2 } = Math, o2 = p(t3, e3);
            return 2 * i3(s2(o2), s2(1 - o2)) * 6371e3;
          }
          static geodesic(t3, e3, i3, s2 = 5e5) {
            let { atan2: o2, cos: r2, sin: a2, sqrt: l2 } = Math, h2 = d.distance, p2 = t3[1] * n, c = t3[0] * n, u = e3[1] * n, m = e3[0] * n, g = r2(p2) * r2(c), f = r2(u) * r2(m), b = r2(p2) * a2(c), y = r2(u) * a2(m), x = a2(p2), M = a2(u), C = h2(t3, e3), j = C / 6371e3, v = a2(j), w = Math.round(C / s2), S = [];
            if (i3 && S.push(t3), w > 1) {
              let t4 = 1 / w;
              for (let e4 = t4; e4 < 0.999; e4 += t4) {
                let t5 = a2((1 - e4) * j) / v, i4 = a2(e4 * j) / v, s3 = t5 * g + i4 * f, r3 = t5 * b + i4 * y, h3 = o2(t5 * x + i4 * M, l2(s3 * s3 + r3 * r3)), p3 = o2(r3, s3);
                S.push([p3 / n, h3 / n]);
              }
            }
            return i3 && S.push(e3), S;
          }
          static insertGeodesics(t3) {
            let e3 = t3.length - 1;
            for (; e3--; )
              if (Math.max(Math.abs(t3[e3][0] - t3[e3 + 1][0]), Math.abs(t3[e3][1] - t3[e3 + 1][1])) > 10) {
                let i3 = d.geodesic(t3[e3], t3[e3 + 1]);
                i3.length && t3.splice(e3 + 1, 0, ...i3);
              }
          }
          static toString(t3) {
            let { name: e3, rotation: i3 } = t3 || {};
            return [e3, i3 && i3.join(",")].join(";");
          }
          constructor(t3 = {}) {
            this.hasCoordinates = false, this.hasGeoProjection = false, this.maxLatitude = 90, this.options = t3;
            let { name: e3, projectedBounds: i3, rotation: s2 } = t3;
            this.rotator = s2 ? this.getRotator(s2) : void 0;
            let o2 = e3 ? d.registry[e3] : void 0;
            o2 && (this.def = new o2(t3));
            let { def: r2, rotator: a2 } = this;
            r2 && (this.maxLatitude = r2.maxLatitude || 90, this.hasGeoProjection = true), a2 && r2 ? (this.forward = (t4) => r2.forward(a2.forward(t4)), this.inverse = (t4) => a2.inverse(r2.inverse(t4))) : r2 ? (this.forward = (t4) => r2.forward(t4), this.inverse = (t4) => r2.inverse(t4)) : a2 && (this.forward = a2.forward, this.inverse = a2.inverse), this.bounds = "world" === i3 ? r2 && r2.bounds : i3;
          }
          lineIntersectsBounds(t3) {
            let { x1: e3, x2: i3, y1: s2, y2: o2 } = this.bounds || {}, r2 = (t4, e4, i4) => {
              let [s3, o3] = t4, r3 = e4 ? 0 : 1;
              if ("number" == typeof i4 && s3[e4] >= i4 != o3[e4] >= i4) {
                let t5 = (i4 - s3[e4]) / (o3[e4] - s3[e4]), a3 = s3[r3] + t5 * (o3[r3] - s3[r3]);
                return e4 ? [a3, i4] : [i4, a3];
              }
            }, a2, n2 = t3[0];
            return (a2 = r2(t3, 0, e3)) ? (n2 = a2, t3[1] = a2) : (a2 = r2(t3, 0, i3)) && (n2 = a2, t3[1] = a2), (a2 = r2(t3, 1, s2)) ? n2 = a2 : (a2 = r2(t3, 1, o2)) && (n2 = a2), n2;
          }
          getRotator(t3) {
            let e3 = t3[0] * n, i3 = (t3[1] || 0) * n, s2 = (t3[2] || 0) * n, o2 = Math.cos(i3), r2 = Math.sin(i3), a2 = Math.cos(s2), l2 = Math.sin(s2);
            if (0 !== e3 || 0 !== i3 || 0 !== s2)
              return { forward: (t4) => {
                let i4 = t4[0] * n + e3, s3 = t4[1] * n, h2 = Math.cos(s3), p2 = Math.cos(i4) * h2, d2 = Math.sin(i4) * h2, c = Math.sin(s3), u = c * o2 + p2 * r2;
                return [Math.atan2(d2 * a2 - u * l2, p2 * o2 - c * r2) / n, Math.asin(u * a2 + d2 * l2) / n];
              }, inverse: (t4) => {
                let i4 = t4[0] * n, s3 = t4[1] * n, h2 = Math.cos(s3), p2 = Math.cos(i4) * h2, d2 = Math.sin(i4) * h2, c = Math.sin(s3), u = c * a2 - d2 * l2;
                return [(Math.atan2(d2 * a2 + c * l2, p2 * o2 + u * r2) - e3) / n, Math.asin(u * o2 - p2 * r2) / n];
              } };
          }
          forward(t3) {
            return t3;
          }
          inverse(t3) {
            return t3;
          }
          cutOnAntimeridian(t3, e3) {
            let i3;
            let s2 = [], o2 = [t3];
            for (let i4 = 0, o3 = t3.length; i4 < o3; ++i4) {
              let o4 = t3[i4], a2 = t3[i4 - 1];
              if (!i4) {
                if (!e3)
                  continue;
                a2 = t3[t3.length - 1];
              }
              let n2 = a2[0], l2 = o4[0];
              if ((n2 < -90 || n2 > 90) && (l2 < -90 || l2 > 90) && n2 > 0 != l2 > 0) {
                let t4 = r((180 - (n2 + 360) % 360) / ((l2 + 360) % 360 - (n2 + 360) % 360), 0, 1), e4 = a2[1] + t4 * (o4[1] - a2[1]);
                s2.push({ i: i4, lat: e4, direction: n2 < 0 ? 1 : -1, previousLonLat: a2, lonLat: o4 });
              }
            }
            if (s2.length) {
              if (e3) {
                s2.length % 2 == 1 && (i3 = s2.slice().sort((t4, e5) => Math.abs(e5.lat) - Math.abs(t4.lat))[0], a(s2, i3));
                let e4 = s2.length - 2;
                for (; e4 >= 0; ) {
                  let i4 = s2[e4].i, r2 = l(180 + 1e-6 * s2[e4].direction), a2 = l(180 - 1e-6 * s2[e4].direction), n2 = t3.splice(i4, s2[e4 + 1].i - i4, ...d.geodesic([r2, s2[e4].lat], [r2, s2[e4 + 1].lat], true));
                  n2.push(...d.geodesic([a2, s2[e4 + 1].lat], [a2, s2[e4].lat], true)), o2.push(n2), e4 -= 2;
                }
                if (i3)
                  for (let t4 = 0; t4 < o2.length; t4++) {
                    let { direction: e5, lat: s3 } = i3, r2 = o2[t4], a2 = r2.indexOf(i3.lonLat);
                    if (a2 > -1) {
                      let t5 = (s3 < 0 ? -1 : 1) * this.maxLatitude, o3 = l(180 + 1e-6 * e5), n2 = l(180 - 1e-6 * e5), h2 = d.geodesic([o3, s3], [o3, t5], true);
                      for (let i4 = o3 + 120 * e5; i4 > -180 && i4 < 180; i4 += 120 * e5)
                        h2.push([i4, t5]);
                      h2.push(...d.geodesic([n2, t5], [n2, i3.lat], true)), r2.splice(a2, 0, ...h2);
                      break;
                    }
                  }
              } else {
                let e4 = s2.length;
                for (; e4--; ) {
                  let i4 = s2[e4].i, r2 = t3.splice(i4, t3.length, [l(180 + 1e-6 * s2[e4].direction), s2[e4].lat]);
                  r2.unshift([l(180 - 1e-6 * s2[e4].direction), s2[e4].lat]), o2.push(r2);
                }
              }
            }
            return o2;
          }
          path(t3) {
            let e3;
            let { bounds: i3, def: r2, rotator: a2 } = this, n2 = [], l2 = "Polygon" === t3.type || "MultiPolygon" === t3.type, h2 = this.hasGeoProjection, p2 = !r2 || false !== r2.antimeridianCutting, c = p2 ? a2 : void 0, u = p2 && r2 || this;
            i3 && (e3 = [[i3.x1, i3.y1], [i3.x2, i3.y1], [i3.x2, i3.y2], [i3.x1, i3.y2]]);
            let m = (t4) => {
              let r3 = t4.map((t5) => {
                if (p2) {
                  c && (t5 = c.forward(t5));
                  let e4 = t5[0];
                  1e-6 > Math.abs(e4 - 180) && (e4 = e4 < 180 ? 179.999999 : 180.000001), t5 = [e4, t5[1]];
                }
                return t5;
              }), a3 = [r3];
              h2 && (d.insertGeodesics(r3), p2 && (a3 = this.cutOnAntimeridian(r3, l2))), a3.forEach((t5) => {
                let r4, a4;
                if (t5.length < 2)
                  return;
                let c2 = false, m2 = false, g = (t6) => {
                  c2 ? n2.push(["L", t6[0], t6[1]]) : (n2.push(["M", t6[0], t6[1]]), c2 = true);
                }, f = false, b = false, y = t5.map((t6) => {
                  let e4 = u.forward(t6);
                  return e4.outside ? f = true : b = true, e4[1] === 1 / 0 ? e4[1] = 1e10 : e4[1] === -1 / 0 && (e4[1] = -1e10), e4;
                });
                if (p2) {
                  if (l2 && y.push(y[0]), f) {
                    if (!b)
                      return;
                    if (e3) {
                      if (l2)
                        y = o(y, e3);
                      else if (i3) {
                        s(y, e3).forEach((t6) => {
                          c2 = false, t6.forEach(g);
                        });
                        return;
                      }
                    }
                  }
                  y.forEach(g);
                } else
                  for (let e4 = 0; e4 < y.length; e4++) {
                    let i4 = t5[e4], s2 = y[e4];
                    s2.outside ? m2 = true : (l2 && !r4 && (r4 = i4, t5.push(i4), y.push(s2)), m2 && a4 && (l2 && h2 ? d.geodesic(a4, i4).forEach((t6) => g(u.forward(t6))) : c2 = false), g(s2), a4 = i4, m2 = false);
                  }
              });
            };
            return "LineString" === t3.type ? m(t3.coordinates) : "MultiLineString" === t3.type ? t3.coordinates.forEach((t4) => m(t4)) : "Polygon" === t3.type ? (t3.coordinates.forEach((t4) => m(t4)), n2.length && n2.push(["Z"])) : "MultiPolygon" === t3.type && (t3.coordinates.forEach((t4) => {
              t4.forEach((t5) => m(t5));
            }), n2.length && n2.push(["Z"])), n2;
          }
        }
        return d.registry = e2, d;
      }), i(e, "Maps/MapView.js", [e["Core/Globals.js"], e["Maps/MapViewDefaults.js"], e["Maps/GeoJSONComposition.js"], e["Maps/MapUtilities.js"], e["Maps/Projection.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { composed: a } = t2, { topo2geo: n } = i2, { boundsFromPath: l, pointInPolygon: h } = s, { addEvent: p, clamp: d, crisp: c, fireEvent: u, isArray: m, isNumber: g, isObject: f, isString: b, merge: y, pick: x, pushUnique: M, relativeLength: C } = r, j = {};
        function v(t3, e3) {
          let { width: i3, height: s2 } = e3;
          return Math.log(400.979322 / Math.max((t3.x2 - t3.x1) / (i3 / 256), (t3.y2 - t3.y1) / (s2 / 256))) / Math.log(2);
        }
        function w(t3) {
          var _a, _b;
          t3.seriesOptions.mapData && ((_b = this.mapView) == null ? void 0 : _b.recommendMapView(this, [this.options.chart.map, t3.seriesOptions.mapData], (_a = this.options.drilldown) == null ? void 0 : _a.mapZooming));
        }
        class S {
          static compose(t3) {
            M(a, "MapView") && (j = t3.maps, p(t3, "afterInit", function() {
              this.mapView = new S(this, this.options.mapView);
            }, { order: 0 }), p(t3, "addSeriesAsDrilldown", w), p(t3, "afterDrillUp", w));
          }
          static compositeBounds(t3) {
            if (t3.length)
              return t3.slice(1).reduce((t4, e3) => (t4.x1 = Math.min(t4.x1, e3.x1), t4.y1 = Math.min(t4.y1, e3.y1), t4.x2 = Math.max(t4.x2, e3.x2), t4.y2 = Math.max(t4.y2, e3.y2), t4), y(t3[0]));
          }
          static mergeInsets(t3, e3) {
            let i3 = (t4) => {
              let e4 = {};
              return t4.forEach((t5, i4) => {
                e4[t5 && t5.id || `i${i4}`] = t5;
              }), e4;
            }, s2 = y(i3(t3), i3(e3));
            return Object.keys(s2).map((t4) => s2[t4]);
          }
          constructor(t3, i3) {
            var _a;
            this.allowTransformAnimation = true, this.eventsToUnbind = [], this.insets = [], this.padding = [0, 0, 0, 0], this.recommendedMapView = {}, this instanceof P || this.recommendMapView(t3, [t3.options.chart.map, ...(t3.options.series || []).map((t4) => t4.mapData)]), this.userOptions = i3 || {};
            let s2 = y(e2, this.recommendedMapView, i3), r2 = (_a = this.recommendedMapView) == null ? void 0 : _a.insets, a2 = i3 && i3.insets;
            r2 && a2 && (s2.insets = S.mergeInsets(r2, a2)), this.chart = t3, this.center = s2.center, this.options = s2, this.projection = new o(s2.projection), this.playingField = t3.plotBox, this.zoom = s2.zoom || 0, this.minZoom = s2.minZoom, this.createInsets(), this.eventsToUnbind.push(p(t3, "afterSetChartSize", () => {
              this.playingField = this.getField(), (void 0 === this.minZoom || this.minZoom === this.zoom) && (this.fitToBounds(void 0, void 0, false), !this.chart.hasRendered && g(this.userOptions.zoom) && (this.zoom = this.userOptions.zoom), this.userOptions.center && y(true, this.center, this.userOptions.center));
            })), this.setUpEvents();
          }
          createInsets() {
            let t3 = this.options, e3 = t3.insets;
            e3 && e3.forEach((e4) => {
              let i3 = new P(this, y(t3.insetOptions, e4));
              this.insets.push(i3);
            });
          }
          fitToBounds(t3, e3, i3 = true, s2) {
            let o2 = t3 || this.getProjectedBounds();
            if (o2) {
              let r2 = x(e3, t3 ? 0 : this.options.padding), a2 = this.getField(false), n2 = m(r2) ? r2 : [r2, r2, r2, r2];
              this.padding = [C(n2[0], a2.height), C(n2[1], a2.width), C(n2[2], a2.height), C(n2[3], a2.width)], this.playingField = this.getField();
              let l2 = v(o2, this.playingField);
              t3 || (this.minZoom = l2);
              let h2 = this.projection.inverse([(o2.x2 + o2.x1) / 2, (o2.y2 + o2.y1) / 2]);
              this.setView(h2, l2, i3, s2);
            }
          }
          getField(t3 = true) {
            let e3 = t3 ? this.padding : [0, 0, 0, 0];
            return { x: e3[3], y: e3[0], width: this.chart.plotWidth - e3[1] - e3[3], height: this.chart.plotHeight - e3[0] - e3[2] };
          }
          getGeoMap(t3) {
            if (b(t3))
              return j[t3] && "Topology" === j[t3].type ? n(j[t3]) : j[t3];
            if (f(t3, true)) {
              if ("FeatureCollection" === t3.type)
                return t3;
              if ("Topology" === t3.type)
                return n(t3);
            }
          }
          getMapBBox() {
            let t3 = this.getProjectedBounds(), e3 = this.getScale();
            if (t3) {
              let i3 = this.padding, s2 = this.projectedUnitsToPixels({ x: t3.x1, y: t3.y2 });
              return { width: (t3.x2 - t3.x1) * e3 + i3[1] + i3[3], height: (t3.y2 - t3.y1) * e3 + i3[0] + i3[2], x: s2.x - i3[3], y: s2.y - i3[0] };
            }
          }
          getProjectedBounds() {
            let t3 = this.projection, e3 = this.chart.series.reduce((t4, e4) => {
              let i4 = e4.getProjectedBounds && e4.getProjectedBounds();
              return i4 && false !== e4.options.affectsMapView && t4.push(i4), t4;
            }, []), i3 = this.options.fitToGeometry;
            if (i3) {
              if (!this.fitToGeometryCache) {
                if ("MultiPoint" === i3.type) {
                  let e4 = i3.coordinates.map((e5) => t3.forward(e5)), s2 = e4.map((t4) => t4[0]), o2 = e4.map((t4) => t4[1]);
                  this.fitToGeometryCache = { x1: Math.min.apply(0, s2), x2: Math.max.apply(0, s2), y1: Math.min.apply(0, o2), y2: Math.max.apply(0, o2) };
                } else
                  this.fitToGeometryCache = l(t3.path(i3));
              }
              return this.fitToGeometryCache;
            }
            return this.projection.bounds || S.compositeBounds(e3);
          }
          getScale() {
            return 256 / 400.979322 * Math.pow(2, this.zoom);
          }
          getSVGTransform() {
            let { x: t3, y: e3, width: i3, height: s2 } = this.playingField, o2 = this.projection.forward(this.center), r2 = this.projection.hasCoordinates ? -1 : 1, a2 = this.getScale(), n2 = a2 * r2, l2 = t3 + i3 / 2 - o2[0] * a2, h2 = e3 + s2 / 2 - o2[1] * n2;
            return { scaleX: a2, scaleY: n2, translateX: l2, translateY: h2 };
          }
          lonLatToPixels(t3) {
            let e3 = this.lonLatToProjectedUnits(t3);
            if (e3)
              return this.projectedUnitsToPixels(e3);
          }
          lonLatToProjectedUnits(t3) {
            let e3 = this.chart, i3 = e3.mapTransforms;
            if (i3) {
              for (let s3 in i3)
                if (Object.hasOwnProperty.call(i3, s3) && i3[s3].hitZone) {
                  let o2 = e3.transformFromLatLon(t3, i3[s3]);
                  if (o2 && h(o2, i3[s3].hitZone.coordinates[0]))
                    return o2;
                }
              return e3.transformFromLatLon(t3, i3.default);
            }
            for (let e4 of this.insets)
              if (e4.options.geoBounds && h({ x: t3.lon, y: t3.lat }, e4.options.geoBounds.coordinates[0])) {
                let i4 = e4.projection.forward([t3.lon, t3.lat]), s3 = e4.projectedUnitsToPixels({ x: i4[0], y: i4[1] });
                return this.pixelsToProjectedUnits(s3);
              }
            let s2 = this.projection.forward([t3.lon, t3.lat]);
            if (!s2.outside)
              return { x: s2[0], y: s2[1] };
          }
          projectedUnitsToLonLat(t3) {
            let e3 = this.chart, i3 = e3.mapTransforms;
            if (i3) {
              for (let s3 in i3)
                if (Object.hasOwnProperty.call(i3, s3) && i3[s3].hitZone && h(t3, i3[s3].hitZone.coordinates[0]))
                  return e3.transformToLatLon(t3, i3[s3]);
              return e3.transformToLatLon(t3, i3.default);
            }
            let s2 = this.projectedUnitsToPixels(t3);
            for (let t4 of this.insets)
              if (t4.hitZone && h(s2, t4.hitZone.coordinates[0])) {
                let e4 = t4.pixelsToProjectedUnits(s2), i4 = t4.projection.inverse([e4.x, e4.y]);
                return { lon: i4[0], lat: i4[1] };
              }
            let o2 = this.projection.inverse([t3.x, t3.y]);
            return { lon: o2[0], lat: o2[1] };
          }
          recommendMapView(t3, e3, i3 = false) {
            var _a;
            this.recommendedMapView = {};
            let s2 = e3.map((t4) => this.getGeoMap(t4)), o2 = [];
            s2.forEach((t4) => {
              if (t4 && (Object.keys(this.recommendedMapView).length || (this.recommendedMapView = t4["hc-recommended-mapview"] || {}), t4.bbox)) {
                let [e4, i4, s3, r3] = t4.bbox;
                o2.push({ x1: e4, y1: i4, x2: s3, y2: r3 });
              }
            });
            let r2 = o2.length && S.compositeBounds(o2);
            u(this, "onRecommendMapView", { geoBounds: r2, chart: t3 }, function() {
              if (r2 && this.recommendedMapView) {
                if (!this.recommendedMapView.projection) {
                  let { x1: t4, y1: e4, x2: i4, y2: s3 } = r2;
                  this.recommendedMapView.projection = i4 - t4 > 180 && s3 - e4 > 90 ? { name: "EqualEarth", parallels: [0, 0], rotation: [0] } : { name: "LambertConformalConic", parallels: [e4, s3], rotation: [-(t4 + i4) / 2] };
                }
                this.recommendedMapView.insets || (this.recommendedMapView.insets = void 0);
              }
            }), this.geoMap = s2[0], i3 && t3.hasRendered && !((_a = t3.userOptions.mapView) == null ? void 0 : _a.projection) && this.recommendedMapView && this.update(this.recommendedMapView);
          }
          redraw(t3) {
            this.chart.series.forEach((t4) => {
              t4.useMapGeometry && (t4.isDirty = true);
            }), this.chart.redraw(t3);
          }
          setView(t3, e3, i3 = true, s2) {
            t3 && (this.center = t3), "number" == typeof e3 && ("number" == typeof this.minZoom && (e3 = Math.max(e3, this.minZoom)), "number" == typeof this.options.maxZoom && (e3 = Math.min(e3, this.options.maxZoom)), g(e3) && (this.zoom = e3));
            let o2 = this.getProjectedBounds();
            if (o2) {
              let t4 = this.projection.forward(this.center), { x: e4, y: i4, width: s3, height: r2 } = this.playingField, a2 = this.getScale(), n2 = this.projectedUnitsToPixels({ x: o2.x1, y: o2.y1 }), l2 = this.projectedUnitsToPixels({ x: o2.x2, y: o2.y2 }), h2 = [(o2.x1 + o2.x2) / 2, (o2.y1 + o2.y2) / 2];
              if (!this.chart.series.some((t5) => t5.isDrilling)) {
                let o3 = n2.x, p2 = l2.y, d2 = l2.x, c2 = n2.y;
                d2 - o3 < s3 ? t4[0] = h2[0] : o3 < e4 && d2 < e4 + s3 ? t4[0] += Math.max(o3 - e4, d2 - s3 - e4) / a2 : d2 > e4 + s3 && o3 > e4 && (t4[0] += Math.min(d2 - s3 - e4, o3 - e4) / a2), c2 - p2 < r2 ? t4[1] = h2[1] : p2 < i4 && c2 < i4 + r2 ? t4[1] -= Math.max(p2 - i4, c2 - r2 - i4) / a2 : c2 > i4 + r2 && p2 > i4 && (t4[1] -= Math.min(c2 - r2 - i4, p2 - i4) / a2), this.center = this.projection.inverse(t4);
              }
              this.insets.forEach((t5) => {
                t5.options.field && (t5.hitZone = t5.getHitZone(), t5.playingField = t5.getField());
              }), this.render();
            }
            u(this, "afterSetView"), i3 && this.redraw(s2);
          }
          projectedUnitsToPixels(t3) {
            let e3 = this.getScale(), i3 = this.projection.forward(this.center), s2 = this.playingField, o2 = s2.x + s2.width / 2, r2 = s2.y + s2.height / 2;
            return { x: o2 - e3 * (i3[0] - t3.x), y: r2 + e3 * (i3[1] - t3.y) };
          }
          pixelsToLonLat(t3) {
            return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(t3));
          }
          pixelsToProjectedUnits(t3) {
            let { x: e3, y: i3 } = t3, s2 = this.getScale(), o2 = this.projection.forward(this.center), r2 = this.playingField, a2 = r2.x + r2.width / 2, n2 = r2.y + r2.height / 2;
            return { x: o2[0] + (e3 - a2) / s2, y: o2[1] - (i3 - n2) / s2 };
          }
          setUpEvents() {
            let t3, e3, i3;
            let { chart: s2 } = this, o2 = (o3) => {
              let { lastTouches: r2, pinchDown: a2 } = s2.pointer, n2 = this.projection, l2 = o3.touches, { mouseDownX: h2, mouseDownY: p2 } = s2, c2 = 0;
              if ((a2 == null ? void 0 : a2.length) === 1 ? (h2 = a2[0].chartX, p2 = a2[0].chartY) : (a2 == null ? void 0 : a2.length) === 2 && (h2 = (a2[0].chartX + a2[1].chartX) / 2, p2 = (a2[0].chartY + a2[1].chartY) / 2), (l2 == null ? void 0 : l2.length) === 2 && r2 && (c2 = Math.log(Math.sqrt(Math.pow(r2[0].chartX - r2[1].chartX, 2) + Math.pow(r2[0].chartY - r2[1].chartY, 2)) / Math.sqrt(Math.pow(l2[0].chartX - l2[1].chartX, 2) + Math.pow(l2[0].chartY - l2[1].chartY, 2))) / Math.log(0.5)), g(h2) && g(p2)) {
                let r3 = `${h2},${p2}`, { chartX: a3, chartY: u2 } = o3.originalEvent;
                (l2 == null ? void 0 : l2.length) === 2 && (a3 = (l2[0].chartX + l2[1].chartX) / 2, u2 = (l2[0].chartY + l2[1].chartY) / 2), r3 !== e3 && (e3 = r3, t3 = this.projection.forward(this.center), i3 = (this.projection.options.rotation || [0, 0]).slice());
                let m2 = n2.def && n2.def.bounds, f2 = m2 && v(m2, this.playingField) || -1 / 0;
                if ("Orthographic" === n2.options.name && 2 > ((l2 == null ? void 0 : l2.length) || 0) && (this.minZoom || 1 / 0) < 1.3 * f2) {
                  let t4 = 440 / (this.getScale() * Math.min(s2.plotWidth, s2.plotHeight));
                  if (i3) {
                    let e4 = (h2 - a3) * t4 - i3[0], o4 = d(-i3[1] - (p2 - u2) * t4, -80, 80), r4 = this.zoom;
                    this.update({ projection: { rotation: [-e4, -o4] } }, false), this.fitToBounds(void 0, void 0, false), this.zoom = r4, s2.redraw(false);
                  }
                } else if (g(a3) && g(u2)) {
                  let e4 = this.getScale(), i4 = this.projection.hasCoordinates ? 1 : -1, s3 = this.projection.inverse([t3[0] + (h2 - a3) / e4, t3[1] - (p2 - u2) / e4 * i4]);
                  isNaN(s3[0] + s3[1]) || this.zoomBy(c2, s3, void 0, false);
                }
                o3.preventDefault();
              }
            };
            p(s2, "pan", o2), p(s2, "touchpan", o2), p(s2, "selection", (t4) => {
              if (t4.resetSelection)
                this.zoomBy();
              else {
                let e4 = t4.x - s2.plotLeft, i4 = t4.y - s2.plotTop, { y: o3, x: r2 } = this.pixelsToProjectedUnits({ x: e4, y: i4 }), { y: a2, x: n2 } = this.pixelsToProjectedUnits({ x: e4 + t4.width, y: i4 + t4.height });
                this.fitToBounds({ x1: r2, y1: o3, x2: n2, y2: a2 }, void 0, true, !t4.originalEvent.touches && void 0), /^touch/.test(t4.originalEvent.type) || s2.showResetZoom(), t4.preventDefault();
              }
            });
          }
          render() {
            this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add());
          }
          update(t3, e3 = true, i3) {
            let s2 = t3.projection, r2 = s2 && o.toString(s2) !== o.toString(this.options.projection), a2 = false;
            y(true, this.userOptions, t3), y(true, this.options, t3), "insets" in t3 && (this.insets.forEach((t4) => t4.destroy()), this.insets.length = 0, a2 = true), (r2 || "fitToGeometry" in t3) && delete this.fitToGeometryCache, (r2 || a2) && (this.chart.series.forEach((t4) => {
              let e4 = t4.transformGroups;
              if (t4.clearBounds && t4.clearBounds(), t4.isDirty = true, t4.isDirtyData = true, a2 && e4)
                for (; e4.length > 1; ) {
                  let t5 = e4.pop();
                  t5 && t5.destroy();
                }
            }), r2 && (this.projection = new o(this.options.projection)), a2 && this.createInsets(), !t3.center && Object.hasOwnProperty.call(t3, "zoom") && !g(t3.zoom) && this.fitToBounds(void 0, void 0, false)), t3.center || g(t3.zoom) ? this.setView(this.options.center, t3.zoom, false) : "fitToGeometry" in t3 && this.fitToBounds(void 0, void 0, false), e3 && this.chart.redraw(i3);
          }
          zoomBy(t3, e3, i3, s2) {
            let o2 = this.chart, r2 = this.projection.forward(this.center);
            if ("number" == typeof t3) {
              let a2, n2, l2;
              let h2 = this.zoom + t3;
              if (i3) {
                let [t4, e4] = i3, s3 = this.getScale(), a3 = t4 - o2.plotLeft - o2.plotWidth / 2, h3 = e4 - o2.plotTop - o2.plotHeight / 2;
                n2 = r2[0] + a3 / s3, l2 = r2[1] + h3 / s3;
              }
              if ("number" == typeof n2 && "number" == typeof l2) {
                let t4 = 1 - Math.pow(2, this.zoom) / Math.pow(2, h2), e4 = r2[0] - n2, i4 = r2[1] - l2;
                r2[0] -= e4 * t4, r2[1] += i4 * t4, a2 = this.projection.inverse(r2);
              }
              this.setView(e3 || a2, h2, void 0, s2);
            } else
              this.fitToBounds(void 0, void 0, void 0, s2);
          }
        }
        class P extends S {
          constructor(t3, e3) {
            if (super(t3.chart, e3), this.id = e3.id, this.mapView = t3, this.options = y({ center: [0, 0] }, t3.options.insetOptions, e3), this.allBounds = [], this.options.geoBounds) {
              let e4 = t3.projection.path(this.options.geoBounds);
              this.geoBoundsProjectedBox = l(e4), this.geoBoundsProjectedPolygon = e4.map((t4) => [t4[1] || 0, t4[2] || 0]);
            }
          }
          getField(t3 = true) {
            let e3 = this.hitZone;
            if (e3) {
              let i3 = t3 ? this.padding : [0, 0, 0, 0], s2 = e3.coordinates[0], o2 = s2.map((t4) => t4[0]), r2 = s2.map((t4) => t4[1]), a2 = Math.min.apply(0, o2) + i3[3], n2 = Math.max.apply(0, o2) - i3[1], l2 = Math.min.apply(0, r2) + i3[0], h2 = Math.max.apply(0, r2) - i3[2];
              if (g(a2) && g(l2))
                return { x: a2, y: l2, width: n2 - a2, height: h2 - l2 };
            }
            return super.getField.call(this, t3);
          }
          getHitZone() {
            let { chart: t3, mapView: e3, options: i3 } = this, { coordinates: s2 } = i3.field || {};
            if (s2) {
              let o2 = s2[0];
              if ("percent" === i3.units) {
                let s3 = "mapBoundingBox" === i3.relativeTo && e3.getMapBBox() || y(t3.plotBox, { x: 0, y: 0 });
                o2 = o2.map((t4) => [C(`${t4[0]}%`, s3.width, s3.x), C(`${t4[1]}%`, s3.height, s3.y)]);
              }
              return { type: "Polygon", coordinates: [o2] };
            }
          }
          getProjectedBounds() {
            return S.compositeBounds(this.allBounds);
          }
          isInside(t3) {
            let { geoBoundsProjectedBox: e3, geoBoundsProjectedPolygon: i3 } = this;
            return !!(e3 && t3.x >= e3.x1 && t3.x <= e3.x2 && t3.y >= e3.y1 && t3.y <= e3.y2 && i3 && h(t3, i3));
          }
          render() {
            let { chart: t3, mapView: e3, options: i3 } = this, s2 = i3.borderPath || i3.field;
            if (s2 && e3.group) {
              let o2 = true;
              this.border || (this.border = t3.renderer.path().addClass("highcharts-mapview-inset-border").add(e3.group), o2 = false), t3.styledMode || this.border.attr({ stroke: i3.borderColor, "stroke-width": i3.borderWidth });
              let r2 = this.border.strokeWidth(), a2 = "mapBoundingBox" === i3.relativeTo && e3.getMapBBox() || e3.playingField, n2 = (s2.coordinates || []).reduce((e4, s3) => s3.reduce((e5, s4, o3) => {
                let [n3, l2] = s4;
                return "percent" === i3.units && (n3 = t3.plotLeft + C(`${n3}%`, a2.width, a2.x), l2 = t3.plotTop + C(`${l2}%`, a2.height, a2.y)), n3 = c(n3, r2), l2 = c(l2, r2), e5.push(0 === o3 ? ["M", n3, l2] : ["L", n3, l2]), e5;
              }, e4), []);
              this.border[o2 ? "animate" : "attr"]({ d: n2 });
            }
          }
          destroy() {
            this.border && (this.border = this.border.destroy()), this.eventsToUnbind.forEach((t3) => t3());
          }
          setUpEvents() {
          }
        }
        return S;
      }), i(e, "Series/Map/MapSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Series/ColorMapComposition.js"], e["Series/CenteredUtilities.js"], e["Core/Globals.js"], e["Core/Chart/MapChart.js"], e["Series/Map/MapPoint.js"], e["Series/Map/MapSeriesDefaults.js"], e["Maps/MapView.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l, h) {
        let { animObject: p, stop: d } = t2, { noop: c } = s, { splitPath: u } = o, { column: m, scatter: g } = l.seriesTypes, { extend: f, find: b, fireEvent: y, getNestedProperty: x, isArray: M, defined: C, isNumber: j, isObject: v, merge: w, objectEach: S, pick: P, splat: L } = h;
        class A extends g {
          constructor() {
            super(...arguments), this.processedData = [];
          }
          animate(t3) {
            let { chart: e3, group: i3 } = this, s2 = p(this.options.animation);
            t3 ? i3.attr({ translateX: e3.plotLeft + e3.plotWidth / 2, translateY: e3.plotTop + e3.plotHeight / 2, scaleX: 1e-3, scaleY: 1e-3 }) : i3.animate({ translateX: e3.plotLeft, translateY: e3.plotTop, scaleX: 1, scaleY: 1 }, s2);
          }
          clearBounds() {
            this.points.forEach((t3) => {
              delete t3.bounds, delete t3.insetIndex, delete t3.projectedPath;
            }), delete this.bounds;
          }
          doFullTranslate() {
            return !!(this.isDirtyData || this.chart.isResizing || !this.hasRendered);
          }
          drawMapDataLabels() {
            super.drawDataLabels(), this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect);
          }
          drawPoints() {
            let t3 = this, { chart: e3, group: i3, transformGroups: s2 = [] } = this, { mapView: o2, renderer: r2 } = e3;
            if (o2) {
              this.transformGroups = s2, s2[0] || (s2[0] = r2.g().add(i3));
              for (let t4 = 0, e4 = o2.insets.length; t4 < e4; ++t4)
                s2[t4 + 1] || s2.push(r2.g().add(i3));
              this.doFullTranslate() && (this.points.forEach((t4) => {
                let { graphic: e4 } = t4;
                t4.group = s2["number" == typeof t4.insetIndex ? t4.insetIndex + 1 : 0], e4 && e4.parentGroup !== t4.group && e4.add(t4.group);
              }), m.prototype.drawPoints.apply(this), this.points.forEach((i4) => {
                let s3 = i4.graphic;
                if (s3) {
                  let o3 = s3.animate, r3 = "";
                  i4.name && (r3 += "highcharts-name-" + i4.name.replace(/ /g, "-").toLowerCase()), i4.properties && i4.properties["hc-key"] && (r3 += " highcharts-key-" + i4.properties["hc-key"].toString().toLowerCase()), r3 && s3.addClass(r3), e3.styledMode && s3.css(this.pointAttribs(i4, i4.selected && "select" || void 0)), s3.attr({ visibility: !i4.visible && (i4.visible || i4.isNull) ? "hidden" : "inherit" }), s3.animate = function(i5, r4, a2) {
                    let n2 = j(i5["stroke-width"]) && !j(s3["stroke-width"]), l2 = j(s3["stroke-width"]) && !j(i5["stroke-width"]);
                    if (n2 || l2) {
                      let o4 = P(t3.getStrokeWidth(t3.options), 1) / (e3.mapView && e3.mapView.getScale() || 1);
                      n2 && (s3["stroke-width"] = o4), l2 && (i5["stroke-width"] = o4);
                    }
                    return o3.call(s3, i5, r4, l2 ? function() {
                      s3.element.removeAttribute("stroke-width"), delete s3["stroke-width"], a2 && a2.apply(this, arguments);
                    } : a2);
                  };
                }
              })), s2.forEach((i4, s3) => {
                let a2 = (0 === s3 ? o2 : o2.insets[s3 - 1]).getSVGTransform(), n2 = P(this.getStrokeWidth(this.options), 1), l2 = a2.scaleX, h2 = a2.scaleY > 0 ? 1 : -1, c2 = (e4) => {
                  (t3.points || []).forEach((t4) => {
                    let i5;
                    let s4 = t4.graphic;
                    s4 && s4["stroke-width"] && (i5 = this.getStrokeWidth(t4.options)) && s4.attr({ "stroke-width": i5 / e4 });
                  });
                };
                if (r2.globalAnimation && e3.hasRendered && o2.allowTransformAnimation) {
                  let t4 = Number(i4.attr("translateX")), e4 = Number(i4.attr("translateY")), s4 = Number(i4.attr("scaleX")), o3 = (o4, r3) => {
                    let p2 = s4 + (l2 - s4) * r3.pos;
                    i4.attr({ translateX: t4 + (a2.translateX - t4) * r3.pos, translateY: e4 + (a2.translateY - e4) * r3.pos, scaleX: p2, scaleY: p2 * h2, "stroke-width": n2 / p2 }), c2(p2);
                  }, d2 = w(p(r2.globalAnimation)), u2 = d2.step;
                  d2.step = function() {
                    u2 && u2.apply(this, arguments), o3.apply(this, arguments);
                  }, i4.attr({ animator: 0 }).animate({ animator: 1 }, d2, (function() {
                    "boolean" != typeof r2.globalAnimation && r2.globalAnimation.complete && r2.globalAnimation.complete({ applyDrilldown: true }), y(this, "mapZoomComplete");
                  }).bind(this));
                } else
                  d(i4), i4.attr(w(a2, { "stroke-width": n2 / l2 })), c2(l2);
              }), this.isDrilling || this.drawMapDataLabels();
            }
          }
          getProjectedBounds() {
            if (!this.bounds && this.chart.mapView) {
              let { insets: t3, projection: e3 } = this.chart.mapView, i3 = [];
              (this.points || []).forEach((s2) => {
                if (s2.path || s2.geometry) {
                  if ("string" == typeof s2.path ? s2.path = u(s2.path) : M(s2.path) && "M" === s2.path[0] && (s2.path = this.chart.renderer.pathToSegments(s2.path)), !s2.bounds) {
                    let i4 = s2.getProjectedBounds(e3);
                    if (i4) {
                      s2.labelrank = P(s2.labelrank, (i4.x2 - i4.x1) * (i4.y2 - i4.y1));
                      let { midX: e4, midY: o2 } = i4;
                      if (t3 && j(e4) && j(o2)) {
                        let r2 = b(t3, (t4) => t4.isInside({ x: e4, y: o2 }));
                        r2 && (delete s2.projectedPath, (i4 = s2.getProjectedBounds(r2.projection)) && r2.allBounds.push(i4), s2.insetIndex = t3.indexOf(r2));
                      }
                      s2.bounds = i4;
                    }
                  }
                  s2.bounds && void 0 === s2.insetIndex && i3.push(s2.bounds);
                }
              }), this.bounds = n.compositeBounds(i3);
            }
            return this.bounds;
          }
          getStrokeWidth(t3) {
            let e3 = this.pointAttrToOptions;
            return t3[e3 && e3["stroke-width"] || "borderWidth"];
          }
          hasData() {
            return !!this.processedXData.length;
          }
          pointAttribs(t3, e3) {
            let { mapView: i3, styledMode: s2 } = t3.series.chart, o2 = s2 ? this.colorAttribs(t3) : m.prototype.pointAttribs.call(this, t3, e3), r2 = this.getStrokeWidth(t3.options);
            if (e3) {
              let i4 = w(this.options.states && this.options.states[e3], t3.options.states && t3.options.states[e3] || {}), s3 = this.getStrokeWidth(i4);
              C(s3) && (r2 = s3), o2.stroke = i4.borderColor ?? t3.color;
            }
            r2 && i3 && (r2 /= i3.getScale());
            let a2 = this.getStrokeWidth(this.options);
            return o2.dashstyle && i3 && j(a2) && (r2 = a2 / i3.getScale()), t3.visible || (o2.fill = this.options.nullColor), C(r2) ? o2["stroke-width"] = r2 : delete o2["stroke-width"], o2["stroke-linecap"] = o2["stroke-linejoin"] = this.options.linecap, o2;
          }
          updateData() {
            return !this.processedData && super.updateData.apply(this, arguments);
          }
          setData(t3, e3 = true, i3, s2) {
            delete this.bounds, super.setData(t3, false, void 0, s2), this.processData(), this.generatePoints(), e3 && this.chart.redraw(i3);
          }
          processData() {
            let t3, e3, i3;
            let o2 = this.options, a2 = o2.data, n2 = this.chart, l2 = n2.options.chart, h2 = this.joinBy, p2 = o2.keys || this.pointArrayMap, d2 = [], c2 = {}, u2 = this.chart.mapView, m2 = u2 && (v(o2.mapData, true) ? u2.getGeoMap(o2.mapData) : u2.geoMap), g2 = n2.mapTransforms = l2.mapTransforms || m2 && m2["hc-transform"] || n2.mapTransforms;
            g2 && S(g2, (t4) => {
              t4.rotation && (t4.cosAngle = Math.cos(t4.rotation), t4.sinAngle = Math.sin(t4.rotation));
            }), M(o2.mapData) ? i3 = o2.mapData : m2 && "FeatureCollection" === m2.type && (this.mapTitle = m2.title, i3 = s.geojson(m2, this.type, this)), this.processedData = [];
            let f2 = this.processedData;
            if (a2) {
              let t4;
              for (let e4 = 0, i4 = a2.length; e4 < i4; ++e4) {
                if (j(t4 = a2[e4]))
                  f2[e4] = { value: t4 };
                else if (M(t4)) {
                  let i5 = 0;
                  f2[e4] = {}, !o2.keys && t4.length > p2.length && "string" == typeof t4[0] && (f2[e4]["hc-key"] = t4[0], ++i5);
                  for (let s2 = 0; s2 < p2.length; ++s2, ++i5)
                    p2[s2] && void 0 !== t4[i5] && (p2[s2].indexOf(".") > 0 ? r.prototype.setNestedProperty(f2[e4], t4[i5], p2[s2]) : f2[e4][p2[s2]] = t4[i5]);
                } else
                  f2[e4] = a2[e4];
                h2 && "_i" === h2[0] && (f2[e4]._i = e4);
              }
            }
            if (i3) {
              this.mapData = i3, this.mapMap = {};
              for (let s2 = 0; s2 < i3.length; s2++)
                e3 = (t3 = i3[s2]).properties, t3._i = s2, h2[0] && e3 && e3[h2[0]] && (t3[h2[0]] = e3[h2[0]]), c2[t3[h2[0]]] = t3;
              if (this.mapMap = c2, h2[1]) {
                let t4 = h2[1];
                f2.forEach((e4) => {
                  let i4 = x(t4, e4);
                  c2[i4] && d2.push(c2[i4]);
                });
              }
              if (o2.allAreas) {
                if (h2[1]) {
                  let t5 = h2[1];
                  f2.forEach((e4) => {
                    d2.push(x(t5, e4));
                  });
                }
                let t4 = "|" + d2.map(function(t5) {
                  return t5 && t5[h2[0]];
                }).join("|") + "|";
                i3.forEach((e4) => {
                  h2[0] && -1 !== t4.indexOf("|" + e4[h2[0]] + "|") || f2.push(w(e4, { value: null }));
                });
              }
            }
            this.processedXData = Array(f2.length);
          }
          setOptions(t3) {
            let e3 = super.setOptions(t3), i3 = e3.joinBy;
            return null === e3.joinBy && (i3 = "_i"), (i3 = this.joinBy = L(i3))[1] || (i3[1] = i3[0]), e3;
          }
          translate() {
            let t3 = this.doFullTranslate(), e3 = this.chart.mapView, i3 = e3 && e3.projection;
            if (this.chart.hasRendered && (this.isDirtyData || !this.hasRendered) && (this.processData(), this.generatePoints(), delete this.bounds, !e3 || e3.userOptions.center || j(e3.userOptions.zoom) || e3.zoom !== e3.minZoom ? this.getProjectedBounds() : e3.fitToBounds(void 0, void 0, false)), e3) {
              let s2 = e3.getSVGTransform();
              this.points.forEach((o2) => {
                let a2 = j(o2.insetIndex) && e3.insets[o2.insetIndex].getSVGTransform() || s2;
                a2 && o2.bounds && j(o2.bounds.midX) && j(o2.bounds.midY) && (o2.plotX = o2.bounds.midX * a2.scaleX + a2.translateX, o2.plotY = o2.bounds.midY * a2.scaleY + a2.translateY), t3 && (o2.shapeType = "path", o2.shapeArgs = { d: r.getProjectedPath(o2, i3) }), o2.hiddenInDataClass || (o2.projectedPath && !o2.projectedPath.length ? o2.setVisible(false) : o2.visible || o2.setVisible(true));
              });
            }
            y(this, "afterTranslate");
          }
          update(t3) {
            var _a;
            t3.mapData && ((_a = this.chart.mapView) == null ? void 0 : _a.recommendMapView(this.chart, [this.chart.options.chart.map, ...(this.chart.options.series || []).map((e3, i3) => i3 === this._i ? t3.mapData : e3.mapData)], true)), super.update.apply(this, arguments);
          }
        }
        return A.defaultOptions = w(g.defaultOptions, a), f(A.prototype, { type: "map", axisTypes: e2.seriesMembers.axisTypes, colorAttribs: e2.seriesMembers.colorAttribs, colorKey: e2.seriesMembers.colorKey, directTouch: true, drawDataLabels: c, drawGraph: c, forceDL: true, getCenter: i2.getCenter, getExtremesFromAll: true, getSymbol: c, isCartesian: false, parallelArrays: e2.seriesMembers.parallelArrays, pointArrayMap: e2.seriesMembers.pointArrayMap, pointClass: r, preserveAspectRatio: true, searchPoint: c, trackerGroups: e2.seriesMembers.trackerGroups, useMapGeometry: true }), e2.compose(A), l.registerSeriesType("map", A), A;
      }), i(e, "Series/MapLine/MapLineSeriesDefaults.js", [], function() {
        return { lineWidth: 1, fillColor: "none", legendSymbol: "lineMarker" };
      }), i(e, "Series/MapLine/MapLineSeries.js", [e["Series/MapLine/MapLineSeriesDefaults.js"], e["Series/Map/MapSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { extend: o, merge: r } = s;
        class a extends e2 {
          pointAttribs(t3, e3) {
            let i3 = super.pointAttribs(t3, e3);
            return i3.fill = this.options.fillColor, i3;
          }
        }
        return a.defaultOptions = r(e2.defaultOptions, t2), o(a.prototype, { type: "mapline", colorProp: "stroke", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }), i2.registerSeriesType("mapline", a), a;
      }), i(e, "Series/MapPoint/MapPointPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { scatter: i2 } = t2.seriesTypes, { isNumber: s } = e2;
        class o extends i2.prototype.pointClass {
          isValid() {
            return !!(this.options.geometry || s(this.x) && s(this.y) || s(this.options.lon) && s(this.options.lat));
          }
        }
        return o;
      }), i(e, "Series/MapPoint/MapPointSeriesDefaults.js", [], function() {
        return { dataLabels: { crop: false, defer: false, enabled: true, formatter: function() {
          return this.point.name;
        }, overflow: false, style: { color: "#000000" } }, legendSymbol: "lineMarker" };
      }), i(e, "Series/MapPoint/MapPointSeries.js", [e["Core/Globals.js"], e["Series/MapPoint/MapPointPoint.js"], e["Series/MapPoint/MapPointSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { noop: a } = t2, { map: n, scatter: l } = s.seriesTypes, { extend: h, fireEvent: p, isNumber: d, merge: c } = r;
        class u extends l {
          constructor() {
            super(...arguments), this.clearBounds = n.prototype.clearBounds;
          }
          drawDataLabels() {
            super.drawDataLabels(), this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect);
          }
          projectPoint(t3) {
            let e3 = this.chart.mapView;
            if (e3) {
              let { geometry: i3, lon: s2, lat: o2 } = t3, r2 = i3 && "Point" === i3.type && i3.coordinates;
              if (d(s2) && d(o2) && (r2 = [s2, o2]), r2)
                return e3.lonLatToProjectedUnits({ lon: r2[0], lat: r2[1] });
            }
          }
          translate() {
            let t3 = this.chart.mapView;
            if (this.processedXData || this.processData(), this.generatePoints(), this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()), t3) {
              let e3 = t3.getSVGTransform(), { hasCoordinates: i3 } = t3.projection;
              this.points.forEach((s2) => {
                let o2, { x: r2, y: a2 } = s2, n2 = d(s2.insetIndex) && t3.insets[s2.insetIndex].getSVGTransform() || e3, l2 = this.projectPoint(s2.options) || s2.properties && this.projectPoint(s2.properties);
                if (l2 ? (r2 = l2.x, a2 = l2.y) : s2.bounds && (r2 = s2.bounds.midX, a2 = s2.bounds.midY, n2 && d(r2) && d(a2) && (s2.plotX = r2 * n2.scaleX + n2.translateX, s2.plotY = a2 * n2.scaleY + n2.translateY, o2 = true)), d(r2) && d(a2)) {
                  if (!o2) {
                    let e4 = t3.projectedUnitsToPixels({ x: r2, y: a2 });
                    s2.plotX = e4.x, s2.plotY = i3 ? e4.y : this.chart.plotHeight - e4.y;
                  }
                } else
                  s2.y = s2.plotX = s2.plotY = void 0;
                s2.isInside = this.isPointInside(s2), s2.zone = this.zones.length ? s2.getZone() : void 0;
              });
            }
            p(this, "afterTranslate");
          }
        }
        return u.defaultOptions = c(l.defaultOptions, i2), o.prototype.symbols.mapmarker = (t3, e3, i3, s2, o2) => {
          let r2, a2;
          let n2 = o2 && "legend" === o2.context;
          n2 ? (r2 = t3 + i3 / 2, a2 = e3 + s2) : o2 && "number" == typeof o2.anchorX && "number" == typeof o2.anchorY ? (r2 = o2.anchorX, a2 = o2.anchorY) : (r2 = t3 + i3 / 2, a2 = e3 + s2 / 2, e3 -= s2);
          let l2 = n2 ? s2 / 3 : s2 / 2;
          return [["M", r2, a2], ["C", r2, a2, r2 - l2, e3 + 1.5 * l2, r2 - l2, e3 + l2], ["A", l2, l2, 1, 1, 1, r2 + l2, e3 + l2], ["C", r2 + l2, e3 + 1.5 * l2, r2, a2, r2, a2], ["Z"]];
        }, h(u.prototype, { type: "mappoint", axisTypes: ["colorAxis"], forceDL: true, isCartesian: false, pointClass: e2, searchPoint: a, useMapGeometry: true }), s.registerSeriesType("mappoint", u), u;
      }), i(e, "Series/Bubble/BubbleLegendDefaults.js", [], function() {
        return { borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: false, labels: { className: void 0, allowOverlap: false, format: "", formatter: void 0, align: "right", style: { fontSize: "0.9em", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: false, zIndex: 1, zThreshold: 0 };
      }), i(e, "Series/Bubble/BubbleLegendItem.js", [e["Core/Color/Color.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { parse: o } = t2, { noop: r } = i2, { arrayMax: a, arrayMin: n, isNumber: l, merge: h, pick: p, stableSort: d } = s;
        return class {
          constructor(t3, e3) {
            this.setState = r, this.init(t3, e3);
          }
          init(t3, e3) {
            this.options = t3, this.visible = true, this.chart = e3.chart, this.legend = e3;
          }
          addToLegend(t3) {
            t3.splice(this.options.legendIndex, 0, this);
          }
          drawLegendSymbol(t3) {
            let e3;
            let i3 = p(t3.options.itemDistance, 20), s2 = this.legendItem || {}, o2 = this.options, r2 = o2.ranges, a2 = o2.connectorDistance;
            if (!r2 || !r2.length || !l(r2[0].value)) {
              t3.options.bubbleLegend.autoRanges = true;
              return;
            }
            d(r2, function(t4, e4) {
              return e4.value - t4.value;
            }), this.ranges = r2, this.setOptions(), this.render();
            let n2 = this.getMaxLabelSize(), h2 = this.ranges[0].radius, c = 2 * h2;
            e3 = (e3 = a2 - h2 + n2.width) > 0 ? e3 : 0, this.maxLabel = n2, this.movementX = "left" === o2.labels.align ? e3 : 0, s2.labelWidth = c + e3 + i3, s2.labelHeight = c + n2.height / 2;
          }
          setOptions() {
            let t3 = this.ranges, e3 = this.options, i3 = this.chart.series[e3.seriesIndex], s2 = this.legend.baseline, r2 = { zIndex: e3.zIndex, "stroke-width": e3.borderWidth }, a2 = { zIndex: e3.zIndex, "stroke-width": e3.connectorWidth }, n2 = { align: this.legend.options.rtl || "left" === e3.labels.align ? "right" : "left", zIndex: e3.zIndex }, l2 = i3.options.marker.fillOpacity, d2 = this.chart.styledMode;
            t3.forEach(function(c, u) {
              d2 || (r2.stroke = p(c.borderColor, e3.borderColor, i3.color), r2.fill = p(c.color, e3.color, 1 !== l2 ? o(i3.color).setOpacity(l2).get("rgba") : i3.color), a2.stroke = p(c.connectorColor, e3.connectorColor, i3.color)), t3[u].radius = this.getRangeRadius(c.value), t3[u] = h(t3[u], { center: t3[0].radius - t3[u].radius + s2 }), d2 || h(true, t3[u], { bubbleAttribs: h(r2), connectorAttribs: h(a2), labelAttribs: n2 });
            }, this);
          }
          getRangeRadius(t3) {
            let e3 = this.options, i3 = this.options.seriesIndex, s2 = this.chart.series[i3], o2 = e3.ranges[0].value, r2 = e3.ranges[e3.ranges.length - 1].value, a2 = e3.minSize, n2 = e3.maxSize;
            return s2.getRadius.call(this, r2, o2, a2, n2, t3);
          }
          render() {
            let t3 = this.legendItem || {}, e3 = this.chart.renderer, i3 = this.options.zThreshold;
            for (let s2 of (this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }), t3.symbol = e3.g("bubble-legend"), t3.label = e3.g("bubble-legend-item").css(this.legend.itemStyle || {}), t3.symbol.translateX = 0, t3.symbol.translateY = 0, t3.symbol.add(t3.label), t3.label.add(t3.group), this.ranges))
              s2.value >= i3 && this.renderRange(s2);
            this.hideOverlappingLabels();
          }
          renderRange(t3) {
            let e3 = this.ranges[0], i3 = this.legend, s2 = this.options, o2 = s2.labels, r2 = this.chart, a2 = r2.series[s2.seriesIndex], n2 = r2.renderer, l2 = this.symbols, h2 = l2.labels, p2 = t3.center, d2 = Math.abs(t3.radius), c = s2.connectorDistance || 0, u = o2.align, m = i3.options.rtl, g = s2.borderWidth, f = s2.connectorWidth, b = e3.radius || 0, y = p2 - d2 - g / 2 + f / 2, x = (y % 1 ? 1 : 0.5) - (f % 2 ? 0 : 0.5), M = n2.styledMode, C = m || "left" === u ? -c : c;
            "center" === u && (C = 0, s2.connectorDistance = 0, t3.labelAttribs.align = "center"), l2.bubbleItems.push(n2.circle(b, p2 + x, d2).attr(M ? {} : t3.bubbleAttribs).addClass((M ? "highcharts-color-" + a2.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (s2.className || "")).add(this.legendItem.symbol)), l2.connectors.push(n2.path(n2.crispLine([["M", b, y], ["L", b + C, y]], s2.connectorWidth)).attr(M ? {} : t3.connectorAttribs).addClass((M ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (s2.connectorClassName || "")).add(this.legendItem.symbol));
            let j = n2.text(this.formatLabel(t3)).attr(M ? {} : t3.labelAttribs).css(M ? {} : o2.style).addClass("highcharts-bubble-legend-labels " + (s2.labels.className || "")).add(this.legendItem.symbol), v = { x: b + C + s2.labels.x, y: y + s2.labels.y + 0.4 * j.getBBox().height };
            j.attr(v), h2.push(j), j.placed = true, j.alignAttr = v;
          }
          getMaxLabelSize() {
            let t3, e3;
            return this.symbols.labels.forEach(function(i3) {
              e3 = i3.getBBox(true), t3 = t3 ? e3.width > t3.width ? e3 : t3 : e3;
            }), t3 || {};
          }
          formatLabel(t3) {
            let i3 = this.options, s2 = i3.labels.formatter, o2 = i3.labels.format, { numberFormatter: r2 } = this.chart;
            return o2 ? e2.format(o2, t3) : s2 ? s2.call(t3) : r2(t3.value, 1);
          }
          hideOverlappingLabels() {
            let t3 = this.chart, e3 = this.options.labels.allowOverlap, i3 = this.symbols;
            !e3 && i3 && (t3.hideOverlappingLabels(i3.labels), i3.labels.forEach(function(t4, e4) {
              t4.newOpacity ? t4.newOpacity !== t4.oldOpacity && i3.connectors[e4].show() : i3.connectors[e4].hide();
            }));
          }
          getRanges() {
            let t3 = this.legend.bubbleLegend, e3 = t3.chart.series, i3 = t3.options.ranges, s2, o2, r2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE;
            return e3.forEach(function(t4) {
              t4.isBubble && !t4.ignoreSeries && (o2 = t4.zData.filter(l)).length && (r2 = p(t4.options.zMin, Math.min(r2, Math.max(n(o2), false === t4.options.displayNegative ? t4.options.zThreshold : -Number.MAX_VALUE))), d2 = p(t4.options.zMax, Math.max(d2, a(o2))));
            }), s2 = r2 === d2 ? [{ value: d2 }] : [{ value: r2 }, { value: (r2 + d2) / 2 }, { value: d2, autoRanges: true }], i3.length && i3[0].radius && s2.reverse(), s2.forEach(function(t4, e4) {
              i3 && i3[e4] && (s2[e4] = h(i3[e4], t4));
            }), s2;
          }
          predictBubbleSizes() {
            let t3 = this.chart, e3 = t3.legend.options, i3 = e3.floating, s2 = "horizontal" === e3.layout, o2 = s2 ? t3.legend.lastLineHeight : 0, r2 = t3.plotSizeX, a2 = t3.plotSizeY, n2 = t3.series[this.options.seriesIndex], l2 = n2.getPxExtremes(), h2 = Math.ceil(l2.minPxSize), p2 = Math.ceil(l2.maxPxSize), d2, c = n2.options.maxSize;
            return i3 || !/%$/.test(c) ? d2 = p2 : (d2 = (Math.min(a2, r2) + o2) * (c = parseFloat(c)) / 100 / (c / 100 + 1), (s2 && a2 - d2 >= r2 || !s2 && r2 - d2 >= a2) && (d2 = p2)), [h2, Math.ceil(d2)];
          }
          updateRanges(t3, e3) {
            let i3 = this.legend.options.bubbleLegend;
            i3.minSize = t3, i3.maxSize = e3, i3.ranges = this.getRanges();
          }
          correctSizes() {
            let t3 = this.legend, e3 = this.chart.series[this.options.seriesIndex].getPxExtremes();
            Math.abs(Math.ceil(e3.maxPxSize) - this.options.maxSize) > 1 && (this.updateRanges(this.options.minSize, e3.maxPxSize), t3.render());
          }
        };
      }), i(e, "Series/Bubble/BubbleLegendComposition.js", [e["Series/Bubble/BubbleLegendDefaults.js"], e["Series/Bubble/BubbleLegendItem.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { setOptions: r } = i2, { composed: a } = s, { addEvent: n, objectEach: l, pushUnique: h, wrap: p } = o;
        function d(t3, e3, i3) {
          let s2, o2, r2;
          let a2 = this.legend, n2 = c(this) >= 0;
          a2 && a2.options.enabled && a2.bubbleLegend && a2.options.bubbleLegend.autoRanges && n2 ? (s2 = a2.bubbleLegend.options, o2 = a2.bubbleLegend.predictBubbleSizes(), a2.bubbleLegend.updateRanges(o2[0], o2[1]), s2.placed || (a2.group.placed = false, a2.allItems.forEach((t4) => {
            (r2 = t4.legendItem || {}).group && (r2.group.translateY = void 0);
          })), a2.render(), s2.placed || (this.getMargins(), this.axes.forEach(function(t4) {
            t4.visible && t4.render(), s2.placed || (t4.setScale(), t4.updateNames(), l(t4.ticks, function(t5) {
              t5.isNew = true, t5.isNewLabel = true;
            }));
          }), this.getMargins()), s2.placed = true, t3.call(this, e3, i3), a2.bubbleLegend.correctSizes(), f(a2, u(a2))) : (t3.call(this, e3, i3), a2 && a2.options.enabled && a2.bubbleLegend && (a2.render(), f(a2, u(a2))));
        }
        function c(t3) {
          let e3 = t3.series, i3 = 0;
          for (; i3 < e3.length; ) {
            if (e3[i3] && e3[i3].isBubble && e3[i3].visible && e3[i3].zData.length)
              return i3;
            i3++;
          }
          return -1;
        }
        function u(t3) {
          let e3 = t3.allItems, i3 = [], s2 = e3.length, o2, r2, a2, n2 = 0, l2 = 0;
          for (n2 = 0; n2 < s2; n2++)
            if (r2 = e3[n2].legendItem || {}, a2 = (e3[n2 + 1] || {}).legendItem || {}, r2.labelHeight && (e3[n2].itemHeight = r2.labelHeight), e3[n2] === e3[s2 - 1] || r2.y !== a2.y) {
              for (i3.push({ height: 0 }), o2 = i3[i3.length - 1]; l2 <= n2; l2++)
                e3[l2].itemHeight > o2.height && (o2.height = e3[l2].itemHeight);
              o2.step = n2;
            }
          return i3;
        }
        function m(t3) {
          let i3 = this.bubbleLegend, s2 = this.options, o2 = s2.bubbleLegend, r2 = c(this.chart);
          i3 && i3.ranges && i3.ranges.length && (o2.ranges.length && (o2.autoRanges = !!o2.ranges[0].autoRanges), this.destroyItem(i3)), r2 >= 0 && s2.enabled && o2.enabled && (o2.seriesIndex = r2, this.bubbleLegend = new e2(o2, this), this.bubbleLegend.addToLegend(t3.allItems));
        }
        function g(t3) {
          let e3;
          if (t3.defaultPrevented)
            return false;
          let i3 = this.chart, s2 = this.visible, o2 = this.chart.legend;
          o2 && o2.bubbleLegend && (this.visible = !s2, this.ignoreSeries = s2, e3 = c(i3) >= 0, o2.bubbleLegend.visible !== e3 && (o2.update({ bubbleLegend: { enabled: e3 } }), o2.bubbleLegend.visible = e3), this.visible = s2);
        }
        function f(t3, e3) {
          let i3 = t3.allItems, s2 = t3.options.rtl, o2, r2, a2, n2, l2 = 0;
          i3.forEach((t4, i4) => {
            (n2 = t4.legendItem || {}).group && (o2 = n2.group.translateX || 0, r2 = n2.y || 0, ((a2 = t4.movementX) || s2 && t4.ranges) && (a2 = s2 ? o2 - t4.options.maxSize / 2 : o2 + a2, n2.group.attr({ translateX: a2 })), i4 > e3[l2].step && l2++, n2.group.attr({ translateY: Math.round(r2 + e3[l2].height / 2) }), n2.y = r2 + e3[l2].height / 2);
          });
        }
        return { compose: function(e3, i3, s2) {
          h(a, "Series.BubbleLegend") && (r({ legend: { bubbleLegend: t2 } }), p(e3.prototype, "drawChartBox", d), n(i3, "afterGetAllItems", m), n(s2, "legendItemClick", g));
        } };
      }), i(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { seriesTypes: { scatter: { prototype: { pointClass: s } } } } = e2, { extend: o } = i2;
        class r extends s {
          haloPath(e3) {
            return t2.prototype.haloPath.call(this, 0 === e3 ? 0 : (this.marker && this.marker.radius || 0) + e3);
          }
        }
        return o(r.prototype, { ttBelow: false }), r;
      }), i(e, "Series/Bubble/BubbleSeries.js", [e["Series/Bubble/BubbleLegendComposition.js"], e["Series/Bubble/BubblePoint.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { parse: a } = i2, { composed: n, noop: l } = s, { series: h, seriesTypes: { column: { prototype: p }, scatter: d } } = o, { addEvent: c, arrayMax: u, arrayMin: m, clamp: g, extend: f, isNumber: b, merge: y, pick: x, pushUnique: M } = r;
        function C() {
          let t3 = this.len, { coll: e3, isXAxis: i3, min: s2 } = this, o2 = i3 ? "xData" : "yData", r2 = (this.max || 0) - (s2 || 0), a2 = 0, n2 = t3, l2 = t3 / r2, h2;
          ("xAxis" === e3 || "yAxis" === e3) && (this.series.forEach((t4) => {
            if (t4.bubblePadding && t4.reserveSpace()) {
              this.allowZoomOutside = true, h2 = true;
              let e4 = t4[o2];
              if (i3 && ((t4.onPoint || t4).getRadii(0, 0, t4), t4.onPoint && (t4.radii = t4.onPoint.radii)), r2 > 0) {
                let i4 = e4.length;
                for (; i4--; )
                  if (b(e4[i4]) && this.dataMin <= e4[i4] && e4[i4] <= this.max) {
                    let o3 = t4.radii && t4.radii[i4] || 0;
                    a2 = Math.min((e4[i4] - s2) * l2 - o3, a2), n2 = Math.max((e4[i4] - s2) * l2 + o3, n2);
                  }
              }
            }
          }), h2 && r2 > 0 && !this.logarithmic && (n2 -= t3, l2 *= (t3 + Math.max(0, a2) - Math.min(n2, t3)) / t3, [["min", "userMin", a2], ["max", "userMax", n2]].forEach((t4) => {
            void 0 === x(this.options[t4[0]], this[t4[1]]) && (this[t4[0]] += t4[2] / l2);
          })));
        }
        class j extends d {
          static compose(e3, i3, s2, o2) {
            t2.compose(i3, s2, o2), M(n, "Series.Bubble") && c(e3, "foundExtremes", C);
          }
          animate(t3) {
            !t3 && this.points.length < this.options.animationLimit && this.points.forEach(function(t4) {
              let { graphic: e3, plotX: i3 = 0, plotY: s2 = 0 } = t4;
              e3 && e3.width && (this.hasRendered || e3.attr({ x: i3, y: s2, width: 1, height: 1 }), e3.animate(this.markerAttribs(t4), this.options.animation));
            }, this);
          }
          getRadii() {
            let t3 = this.zData, e3 = this.yData, i3 = [], s2, o2, r2, a2 = this.chart.bubbleZExtremes, { minPxSize: n2, maxPxSize: l2 } = this.getPxExtremes();
            if (!a2) {
              let t4, e4 = Number.MAX_VALUE, i4 = -Number.MAX_VALUE;
              this.chart.series.forEach((s3) => {
                if (s3.bubblePadding && s3.reserveSpace()) {
                  let o3 = (s3.onPoint || s3).getZExtremes();
                  o3 && (e4 = Math.min(x(e4, o3.zMin), o3.zMin), i4 = Math.max(x(i4, o3.zMax), o3.zMax), t4 = true);
                }
              }), t4 ? (a2 = { zMin: e4, zMax: i4 }, this.chart.bubbleZExtremes = a2) : a2 = { zMin: 0, zMax: 0 };
            }
            for (o2 = 0, s2 = t3.length; o2 < s2; o2++)
              r2 = t3[o2], i3.push(this.getRadius(a2.zMin, a2.zMax, n2, l2, r2, e3 && e3[o2]));
            this.radii = i3;
          }
          getRadius(t3, e3, i3, s2, o2, r2) {
            let a2 = this.options, n2 = "width" !== a2.sizeBy, l2 = a2.zThreshold, h2 = e3 - t3, p2 = 0.5;
            if (null === r2 || null === o2)
              return null;
            if (b(o2)) {
              if (a2.sizeByAbsoluteValue && (o2 = Math.abs(o2 - l2), e3 = h2 = Math.max(e3 - l2, Math.abs(t3 - l2)), t3 = 0), o2 < t3)
                return i3 / 2 - 1;
              h2 > 0 && (p2 = (o2 - t3) / h2);
            }
            return n2 && p2 >= 0 && (p2 = Math.sqrt(p2)), Math.ceil(i3 + p2 * (s2 - i3)) / 2;
          }
          hasData() {
            return !!this.processedXData.length;
          }
          markerAttribs(t3, e3) {
            let i3 = super.markerAttribs(t3, e3), { height: s2 = 0, width: o2 = 0 } = i3;
            return this.chart.inverted ? f(i3, { x: (t3.plotX || 0) - o2 / 2, y: (t3.plotY || 0) - s2 / 2 }) : i3;
          }
          pointAttribs(t3, e3) {
            let i3 = this.options.marker.fillOpacity, s2 = h.prototype.pointAttribs.call(this, t3, e3);
            return 1 !== i3 && (s2.fill = a(s2.fill).setOpacity(i3).get("rgba")), s2;
          }
          translate() {
            super.translate.call(this), this.getRadii(), this.translateBubble();
          }
          translateBubble() {
            let { data: t3, options: e3, radii: i3 } = this, { minPxSize: s2 } = this.getPxExtremes(), o2 = t3.length;
            for (; o2--; ) {
              let r2 = t3[o2], a2 = i3 ? i3[o2] : 0;
              "z" === this.zoneAxis && (r2.negative = (r2.z || 0) < (e3.zThreshold || 0)), b(a2) && a2 >= s2 / 2 ? (r2.marker = f(r2.marker, { radius: a2, width: 2 * a2, height: 2 * a2 }), r2.dlBox = { x: r2.plotX - a2, y: r2.plotY - a2, width: 2 * a2, height: 2 * a2 }) : (r2.shapeArgs = r2.plotY = r2.dlBox = void 0, r2.isInside = false);
            }
          }
          getPxExtremes() {
            let t3 = Math.min(this.chart.plotWidth, this.chart.plotHeight), e3 = (e4) => {
              let i4;
              return "string" == typeof e4 && (i4 = /%$/.test(e4), e4 = parseInt(e4, 10)), i4 ? t3 * e4 / 100 : e4;
            }, i3 = e3(x(this.options.minSize, 8)), s2 = Math.max(e3(x(this.options.maxSize, "20%")), i3);
            return { minPxSize: i3, maxPxSize: s2 };
          }
          getZExtremes() {
            let t3 = this.options, e3 = (this.zData || []).filter(b);
            if (e3.length) {
              let i3 = x(t3.zMin, g(m(e3), false === t3.displayNegative ? t3.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)), s2 = x(t3.zMax, u(e3));
              if (b(i3) && b(s2))
                return { zMin: i3, zMax: s2 };
            }
          }
        }
        return j.defaultOptions = y(d.defaultOptions, { dataLabels: { formatter: function() {
          let { numberFormatter: t3 } = this.series.chart, { z: e3 } = this.point;
          return b(e3) ? t3(e3, -1) : "";
        }, inside: true, verticalAlign: "middle" }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: 0.5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: false, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z" }), f(j.prototype, { alignDataLabel: p.alignDataLabel, applyZones: l, bubblePadding: true, isBubble: true, pointArrayMap: ["y", "z"], pointClass: e2, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }), c(j, "updatedData", (t3) => {
          delete t3.target.chart.bubbleZExtremes;
        }), c(j, "remove", (t3) => {
          delete t3.target.chart.bubbleZExtremes;
        }), o.registerSeriesType("bubble", j), j;
      }), i(e, "Series/MapBubble/MapBubblePoint.js", [e["Series/Bubble/BubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { seriesTypes: { map: { prototype: { pointClass: { prototype: s } } } } } = e2, { extend: o } = i2;
        class r extends t2 {
          isValid() {
            return "number" == typeof this.z;
          }
        }
        return o(r.prototype, { applyOptions: s.applyOptions, getProjectedBounds: s.getProjectedBounds }), r;
      }), i(e, "Series/MapBubble/MapBubbleSeries.js", [e["Series/Bubble/BubbleSeries.js"], e["Series/MapBubble/MapBubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { seriesTypes: { map: { prototype: o }, mappoint: { prototype: r } } } = i2, { extend: a, merge: n } = s;
        class l extends t2 {
          constructor() {
            super(...arguments), this.clearBounds = o.clearBounds;
          }
          searchPoint(t3, e3) {
            return this.searchKDTree({ plotX: t3.chartX - this.chart.plotLeft, plotY: t3.chartY - this.chart.plotTop }, e3, t3);
          }
          translate() {
            r.translate.call(this), this.getRadii(), this.translateBubble();
          }
          updateParallelArrays(t3, e3, i3) {
            super.updateParallelArrays.call(this, t3, e3, i3);
            let s2 = this.processedXData, o2 = this.xData;
            s2 && o2 && (s2.length = o2.length);
          }
        }
        return l.defaultOptions = n(t2.defaultOptions, { lineWidth: 0, animationLimit: 500, joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" } }), a(l.prototype, { type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: o.getProjectedBounds, isCartesian: false, pointArrayMap: ["z"], pointClass: e2, processData: o.processData, projectPoint: r.projectPoint, kdAxisArray: ["plotX", "plotY"], setData: o.setData, setOptions: o.setOptions, updateData: o.updateData, useMapGeometry: true, xyFromShape: true }), i2.registerSeriesType("mapbubble", l), l;
      }), i(e, "Series/Heatmap/HeatmapPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { scatter: { prototype: { pointClass: i2 } } } = t2.seriesTypes, { clamp: s, defined: o, extend: r, pick: a } = e2;
        class n extends i2 {
          applyOptions(t3, e3) {
            return (this.isNull || null === this.value) && delete this.color, super.applyOptions(t3, e3), this.formatPrefix = this.isNull || null === this.value ? "null" : "point", this;
          }
          getCellAttributes() {
            let t3 = this.series, e3 = t3.options, i3 = (e3.colsize || 1) / 2, r2 = (e3.rowsize || 1) / 2, n2 = t3.xAxis, l = t3.yAxis, h = this.options.marker || t3.options.marker, p = t3.pointPlacementToXValue(), d = a(this.pointPadding, e3.pointPadding, 0), c = { x1: s(Math.round(n2.len - n2.translate(this.x - i3, false, true, false, true, -p)), -n2.len, 2 * n2.len), x2: s(Math.round(n2.len - n2.translate(this.x + i3, false, true, false, true, -p)), -n2.len, 2 * n2.len), y1: s(Math.round(l.translate(this.y - r2, false, true, false, true)), -l.len, 2 * l.len), y2: s(Math.round(l.translate(this.y + r2, false, true, false, true)), -l.len, 2 * l.len) };
            for (let t4 of [["width", "x"], ["height", "y"]]) {
              let e4 = t4[0], i4 = t4[1], s2 = i4 + "1", r3 = i4 + "2", a2 = Math.abs(c[s2] - c[r3]), p2 = h && h.lineWidth || 0, u = Math.abs(c[s2] + c[r3]) / 2, m = h && h[e4];
              if (o(m) && m < a2) {
                let t5 = m / 2 + p2 / 2;
                c[s2] = u - t5, c[r3] = u + t5;
              }
              d && (("x" === i4 && n2.reversed || "y" === i4 && !l.reversed) && (s2 = r3, r3 = i4 + "1"), c[s2] += d, c[r3] -= d);
            }
            return c;
          }
          haloPath(t3) {
            if (!t3)
              return [];
            let { x: e3 = 0, y: i3 = 0, width: s2 = 0, height: o2 = 0 } = this.shapeArgs || {};
            return [["M", e3 - t3, i3 - t3], ["L", e3 - t3, i3 + o2 + t3], ["L", e3 + s2 + t3, i3 + o2 + t3], ["L", e3 + s2 + t3, i3 - t3], ["Z"]];
          }
          isValid() {
            return this.value !== 1 / 0 && this.value !== -1 / 0;
          }
        }
        return r(n.prototype, { dataLabelOnNull: true, moveToTopOnHover: true, ttBelow: false }), n;
      }), i(e, "Series/Heatmap/HeatmapSeriesDefaults.js", [e["Core/Utilities.js"]], function(t2) {
        let { isNumber: e2 } = t2;
        return { animation: false, borderRadius: 0, borderWidth: 0, interpolation: false, nullColor: "#f7f7f7", dataLabels: { formatter: function() {
          let { numberFormatter: t3 } = this.series.chart, { value: i2 } = this.point;
          return e2(i2) ? t3(i2, -1) : "";
        }, inside: true, verticalAlign: "middle", crop: false, overflow: "allow", padding: 0 }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: true, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: false, brightness: 0.2 } }, legendSymbol: "rectangle" };
      }), i(e, "Series/InterpolationUtilities.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { doc: i2 } = t2, { defined: s, pick: o } = e2;
        return { colorFromPoint: function(t3, e3) {
          let i3 = e3.series.colorAxis;
          if (i3) {
            let r = i3.toColor(t3 || 0, e3).split(")")[0].split("(")[1].split(",").map((t4) => o(parseFloat(t4), parseInt(t4, 10)));
            return r[3] = 255 * o(r[3], 1), s(t3) && e3.visible || (r[3] = 0), r;
          }
          return [0, 0, 0, 0];
        }, getContext: function(t3) {
          let { canvas: e3, context: s2 } = t3;
          return e3 && s2 ? (s2.clearRect(0, 0, e3.width, e3.height), s2) : (t3.canvas = i2.createElement("canvas"), t3.context = t3.canvas.getContext("2d", { willReadFrequently: true }) || void 0, t3.context);
        } };
      }), i(e, "Series/Heatmap/HeatmapSeries.js", [e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Series/Heatmap/HeatmapPoint.js"], e["Series/Heatmap/HeatmapSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"], e["Series/InterpolationUtilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { series: l, seriesTypes: { column: h, scatter: p } } = o, { prototype: { symbols: d } } = r, { addEvent: c, extend: u, fireEvent: m, isNumber: g, merge: f, pick: b } = a, { colorFromPoint: y, getContext: x } = n;
        class M extends p {
          constructor() {
            super(...arguments), this.valueMax = NaN, this.valueMin = NaN, this.isDirtyCanvas = true;
          }
          drawPoints() {
            let t3 = this, e3 = t3.options, i3 = e3.interpolation, s2 = e3.marker || {};
            if (i3) {
              let { image: e4, chart: i4, xAxis: s3, yAxis: o2 } = t3, { reversed: r2 = false, len: a2 } = s3, { reversed: n2 = false, len: l2 } = o2, h2 = { width: a2, height: l2 };
              if (!e4 || t3.isDirtyData || t3.isDirtyCanvas) {
                let a3 = x(t3), { canvas: l3, options: { colsize: p2 = 1, rowsize: d2 = 1 }, points: c2, points: { length: u2 } } = t3, m2 = i4.colorAxis && i4.colorAxis[0];
                if (l3 && a3 && m2) {
                  let { min: m3, max: g2 } = s3.getExtremes(), { min: f2, max: b2 } = o2.getExtremes(), x2 = g2 - m3, M2 = b2 - f2, C = Math.round(x2 / p2 / 8 * 8), j = Math.round(M2 / d2 / 8 * 8), [v, w] = [[C, C / x2, r2, "ceil"], [j, j / M2, !n2, "floor"]].map(([t4, e5, i5, s4]) => i5 ? (i6) => Math[s4](t4 - e5 * i6) : (t5) => Math[s4](e5 * t5)), S = l3.width = C + 1, P = S * (l3.height = j + 1), L = (u2 - 1) / P, A = new Uint8ClampedArray(4 * P), T = (t4, e5) => 4 * Math.ceil(S * w(e5 - f2) + v(t4 - m3));
                  t3.buildKDTree();
                  for (let t4 = 0; t4 < P; t4++) {
                    let e5 = c2[Math.ceil(L * t4)], { x: i5, y: s4 } = e5;
                    A.set(y(e5.value, e5), T(i5, s4));
                  }
                  a3.putImageData(new ImageData(A, S), 0, 0), e4 ? e4.attr({ ...h2, href: l3.toDataURL("image/png", 1) }) : (t3.directTouch = false, t3.image = i4.renderer.image(l3.toDataURL("image/png", 1)).attr(h2).add(t3.group));
                }
                t3.isDirtyCanvas = false;
              } else
                (e4.width !== a2 || e4.height !== l2) && e4.attr(h2);
            } else
              (s2.enabled || t3._hasPointMarkers) && (l.prototype.drawPoints.call(t3), t3.points.forEach((e4) => {
                e4.graphic && (e4.graphic[t3.chart.styledMode ? "css" : "animate"](t3.colorAttribs(e4)), null === e4.value && e4.graphic.addClass("highcharts-null-point"));
              }));
          }
          getExtremes() {
            let { dataMin: t3, dataMax: e3 } = l.prototype.getExtremes.call(this, this.valueData);
            return g(t3) && (this.valueMin = t3), g(e3) && (this.valueMax = e3), l.prototype.getExtremes.call(this);
          }
          getValidPoints(t3, e3) {
            return l.prototype.getValidPoints.call(this, t3, e3, true);
          }
          hasData() {
            return !!this.processedXData.length;
          }
          init() {
            super.init.apply(this, arguments);
            let t3 = this.options;
            t3.pointRange = b(t3.pointRange, t3.colsize || 1), this.yAxis.axisPointRange = t3.rowsize || 1, d.ellipse = d.circle, t3.marker && g(t3.borderRadius) && (t3.marker.r = t3.borderRadius);
          }
          markerAttribs(t3, e3) {
            let i3 = t3.shapeArgs || {};
            if (t3.hasImage)
              return { x: t3.plotX, y: t3.plotY };
            if (e3 && "normal" !== e3) {
              let s2 = t3.options.marker || {}, o2 = this.options.marker || {}, r2 = o2.states && o2.states[e3] || {}, a2 = s2.states && s2.states[e3] || {}, n2 = (a2.width || r2.width || i3.width || 0) + (a2.widthPlus || r2.widthPlus || 0), l2 = (a2.height || r2.height || i3.height || 0) + (a2.heightPlus || r2.heightPlus || 0);
              return { x: (i3.x || 0) + ((i3.width || 0) - n2) / 2, y: (i3.y || 0) + ((i3.height || 0) - l2) / 2, width: n2, height: l2 };
            }
            return i3;
          }
          pointAttribs(e3, i3) {
            let s2 = l.prototype.pointAttribs.call(this, e3, i3), o2 = this.options || {}, r2 = this.chart.options.plotOptions || {}, a2 = r2.series || {}, n2 = r2.heatmap || {}, h2 = e3 && e3.options.borderColor || o2.borderColor || n2.borderColor || a2.borderColor, p2 = e3 && e3.options.borderWidth || o2.borderWidth || n2.borderWidth || a2.borderWidth || s2["stroke-width"];
            if (s2.stroke = e3 && e3.marker && e3.marker.lineColor || o2.marker && o2.marker.lineColor || h2 || this.color, s2["stroke-width"] = p2, i3 && "normal" !== i3) {
              let r3 = f(o2.states && o2.states[i3], o2.marker && o2.marker.states && o2.marker.states[i3], e3 && e3.options.states && e3.options.states[i3] || {});
              s2.fill = r3.color || t2.parse(s2.fill).brighten(r3.brightness || 0).get(), s2.stroke = r3.lineColor || s2.stroke;
            }
            return s2;
          }
          translate() {
            let { borderRadius: t3, marker: e3 } = this.options, i3 = e3 && e3.symbol || "rect", s2 = d[i3] ? i3 : "rect", o2 = -1 !== ["circle", "square"].indexOf(s2);
            for (let e4 of (this.generatePoints(), this.points)) {
              let r2 = e4.getCellAttributes(), a2 = Math.min(r2.x1, r2.x2), n2 = Math.min(r2.y1, r2.y2), l2 = Math.max(Math.abs(r2.x2 - r2.x1), 0), h2 = Math.max(Math.abs(r2.y2 - r2.y1), 0);
              if (e4.hasImage = 0 === (e4.marker && e4.marker.symbol || i3 || "").indexOf("url"), o2) {
                let t4 = Math.abs(l2 - h2);
                a2 = Math.min(r2.x1, r2.x2) + (l2 < h2 ? 0 : t4 / 2), n2 = Math.min(r2.y1, r2.y2) + (l2 < h2 ? t4 / 2 : 0), l2 = h2 = Math.min(l2, h2);
              }
              e4.hasImage && (e4.marker = { width: l2, height: h2 }), e4.plotX = e4.clientX = (r2.x1 + r2.x2) / 2, e4.plotY = (r2.y1 + r2.y2) / 2, e4.shapeType = "path", e4.shapeArgs = f(true, { x: a2, y: n2, width: l2, height: h2 }, { d: d[s2](a2, n2, l2, h2, { r: g(t3) ? t3 : 0 }) });
            }
            m(this, "afterTranslate");
          }
        }
        return M.defaultOptions = f(p.defaultOptions, s), c(M, "afterDataClassLegendClick", function() {
          this.isDirtyCanvas = true, this.drawPoints();
        }), u(M.prototype, { axisTypes: e2.seriesMembers.axisTypes, colorKey: e2.seriesMembers.colorKey, directTouch: true, getExtremesFromAll: true, parallelArrays: e2.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: i2, specialGroup: "group", trackerGroups: e2.seriesMembers.trackerGroups, alignDataLabel: h.prototype.alignDataLabel, colorAttribs: e2.seriesMembers.colorAttribs, getSymbol: l.prototype.getSymbol }), e2.compose(M), o.registerSeriesType("heatmap", M), M;
      }), i(e, "masters/modules/map.src.js", [e["Core/Globals.js"], e["Maps/MapNavigation.js"], e["Series/ColorMapComposition.js"], e["Series/MapBubble/MapBubbleSeries.js"], e["Maps/GeoJSONComposition.js"], e["Core/Chart/MapChart.js"], e["Maps/MapView.js"], e["Maps/Projection.js"]], function(t2, e2, i2, s, o, r, a, n) {
        return t2.ColorMapComposition = i2, t2.MapChart = t2.MapChart || r, t2.MapNavigation = t2.MapNavigation || e2, t2.MapView = t2.MapView || a, t2.Projection = t2.Projection || n, t2.mapChart = t2.Map = t2.MapChart.mapChart, t2.maps = t2.MapChart.maps, t2.geojson = o.geojson, t2.topo2geo = o.topo2geo, o.compose(t2.Chart), s.compose(t2.Axis, t2.Chart, t2.Legend, t2.Series), e2.compose(r, t2.Pointer, t2.SVGRenderer), a.compose(r), t2;
      });
    });
  }
});
export default require_map();
//# sourceMappingURL=highcharts_modules_map.js.map
