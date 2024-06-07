import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/highcharts/modules/full-screen.js
var require_full_screen = __commonJS({
  "node_modules/highcharts/modules/full-screen.js"(exports, module) {
    !/**
    * Highstock JS v11.4.3 (2024-05-22)
    *
    * Advanced Highcharts Stock tools
    *
    * (c) 2010-2024 Highsoft AS
    * Author: Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    function(e) {
      "object" == typeof module && module.exports ? (e.default = e, module.exports = e) : "function" == typeof define && define.amd ? define("highcharts/modules/full-screen", ["highcharts"], function(t) {
        return e(t), e.Highcharts = t, e;
      }) : e("undefined" != typeof Highcharts ? Highcharts : void 0);
    }(function(e) {
      "use strict";
      var t = e ? e._modules : {};
      function n(e2, t2, n2, s) {
        e2.hasOwnProperty(t2) || (e2[t2] = s.apply(null, n2), "function" == typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: t2, module: e2[t2] } })));
      }
      n(t, "Extensions/Exporting/Fullscreen.js", [t["Core/Renderer/HTML/AST.js"], t["Core/Globals.js"], t["Core/Utilities.js"]], function(e2, t2, n2) {
        let { composed: s } = t2, { addEvent: r, fireEvent: l, pushUnique: i } = n2;
        function o() {
          this.fullscreen = new u(this);
        }
        class u {
          static compose(e3) {
            i(s, "Fullscreen") && r(e3, "beforeRender", o);
          }
          constructor(e3) {
            this.chart = e3, this.isOpen = false;
            let t3 = e3.renderTo;
            !this.browserProps && ("function" == typeof t3.requestFullscreen ? this.browserProps = { fullscreenChange: "fullscreenchange", requestFullscreen: "requestFullscreen", exitFullscreen: "exitFullscreen" } : t3.mozRequestFullScreen ? this.browserProps = { fullscreenChange: "mozfullscreenchange", requestFullscreen: "mozRequestFullScreen", exitFullscreen: "mozCancelFullScreen" } : t3.webkitRequestFullScreen ? this.browserProps = { fullscreenChange: "webkitfullscreenchange", requestFullscreen: "webkitRequestFullScreen", exitFullscreen: "webkitExitFullscreen" } : t3.msRequestFullscreen && (this.browserProps = { fullscreenChange: "MSFullscreenChange", requestFullscreen: "msRequestFullscreen", exitFullscreen: "msExitFullscreen" }));
          }
          close() {
            let e3 = this, t3 = e3.chart, n3 = t3.options.chart;
            l(t3, "fullscreenClose", null, function() {
              e3.isOpen && e3.browserProps && t3.container.ownerDocument instanceof Document && t3.container.ownerDocument[e3.browserProps.exitFullscreen](), e3.unbindFullscreenEvent && (e3.unbindFullscreenEvent = e3.unbindFullscreenEvent()), t3.setSize(e3.origWidth, e3.origHeight, false), e3.origWidth = void 0, e3.origHeight = void 0, n3.width = e3.origWidthOption, n3.height = e3.origHeightOption, e3.origWidthOption = void 0, e3.origHeightOption = void 0, e3.isOpen = false, e3.setButtonText();
            });
          }
          open() {
            let e3 = this, t3 = e3.chart, n3 = t3.options.chart;
            l(t3, "fullscreenOpen", null, function() {
              if (n3 && (e3.origWidthOption = n3.width, e3.origHeightOption = n3.height), e3.origWidth = t3.chartWidth, e3.origHeight = t3.chartHeight, e3.browserProps) {
                let n4 = r(t3.container.ownerDocument, e3.browserProps.fullscreenChange, function() {
                  e3.isOpen ? (e3.isOpen = false, e3.close()) : (t3.setSize(null, null, false), e3.isOpen = true, e3.setButtonText());
                }), s2 = r(t3, "destroy", n4);
                e3.unbindFullscreenEvent = () => {
                  n4(), s2();
                };
                let l2 = t3.renderTo[e3.browserProps.requestFullscreen]();
                l2 && l2.catch(function() {
                  alert("Full screen is not supported inside a frame.");
                });
              }
            });
          }
          setButtonText() {
            let t3 = this.chart, n3 = t3.exportDivElements, s2 = t3.options.exporting, r2 = s2 && s2.buttons && s2.buttons.contextButton.menuItems, l2 = t3.options.lang;
            if (s2 && s2.menuItemDefinitions && l2 && l2.exitFullscreen && l2.viewFullscreen && r2 && n3) {
              let t4 = n3[r2.indexOf("viewFullscreen")];
              t4 && e2.setElementHTML(t4, this.isOpen ? l2.exitFullscreen : s2.menuItemDefinitions.viewFullscreen.text || l2.viewFullscreen);
            }
          }
          toggle() {
            this.isOpen ? this.close() : this.open();
          }
        }
        return u;
      }), n(t, "masters/modules/full-screen.src.js", [t["Core/Globals.js"], t["Extensions/Exporting/Fullscreen.js"]], function(e2, t2) {
        return e2.Fullscreen = e2.Fullscreen || t2, e2.Fullscreen.compose(e2.Chart), e2;
      });
    });
  }
});
export default require_full_screen();
//# sourceMappingURL=highcharts_modules_full-screen.js.map
