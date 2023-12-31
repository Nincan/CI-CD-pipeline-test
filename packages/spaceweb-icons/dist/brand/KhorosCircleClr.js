"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandKhorosCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandKhorosCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "6.973", fill: "#2e1cd4" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M6.851 6.826A4.909 4.909 0 014.3 7.54a.539.539 0 110-1.078A3.818 3.818 0 008.107 2.85h1.1A4.921 4.921 0 016.85 6.826m2.334 4.346H8.081A3.868 3.868 0 005.617 7.8c.021 0 .032-.014.071-.023a3.144 3.144 0 00.326-.095 1.87 1.87 0 00.494-.208c.133-.067.285-.17.412-.24a4.87 4.87 0 012.265 3.938m.435-8.518v-.218H7.694v.218A3.4 3.4 0 014.3 6.048.949.949 0 003.348 7a.963.963 0 00.952.952 3.4 3.4 0 013.394 3.394v.218H9.62v-.218a5.336 5.336 0 00-2.27-4.368 5.2 5.2 0 002.27-4.324" })] })));
}
exports.default = BrandKhorosCircleClr;
