"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleAdsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleAdsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7.01", cy: "7", r: "7", fill: "#fff" }), (0, jsx_runtime_1.jsx)("rect", { width: "2.94", height: "8.752", x: "4.08", y: "2.635", fill: "#fbbc05", rx: "1.47", transform: "rotate(30 5.55 7.01)" }), (0, jsx_runtime_1.jsx)("rect", { width: "2.94", height: "8.752", x: "7.002", y: "2.613", fill: "#4285f4", rx: "1.47", transform: "rotate(-30 8.472 6.99)" }), (0, jsx_runtime_1.jsx)("circle", { cx: "4.117", cy: "9.506", r: "1.49", fill: "#34a853" })] })));
}
exports.default = BrandGoogleAdsCircleClr;
