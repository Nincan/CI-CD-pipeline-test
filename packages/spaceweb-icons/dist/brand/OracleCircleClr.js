"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandOracleCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 24 24", "data-icon-name": "BrandOracleCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12.003", cy: "11.978", r: "11.947", fill: "#ED2224" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M8.905 17.338c-2.94 0-5.338-2.398-5.338-5.338s2.398-5.338 5.338-5.338h6.19c2.94 0 5.338 2.398 5.338 5.338s-2.398 5.338-5.338 5.338h-6.19z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#ED2224", d: "M14.94 15.404A3.384 3.384 0 0018.344 12a3.384 3.384 0 00-3.404-3.404H9.06c-1.934 0-3.404 1.547-3.404 3.404s1.547 3.404 3.404 3.404h5.88z" })] })));
}
exports.default = BrandOracleCircleClr;
