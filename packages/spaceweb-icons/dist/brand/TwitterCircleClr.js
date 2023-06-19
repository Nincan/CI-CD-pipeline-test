"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTwitterCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTwitterCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#55ACEE", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.75 4.66a3.287 3.287 0 0 1-.817.213c.693-.534.604-.854.604-.854-.48.356-.942.391-.942.391s-.782-.888-1.813-.337c-1.03.55-.8 1.777-.8 1.777-2.221-.142-3.27-1.635-3.27-1.635-.569 1.333.444 2.026.444 2.026-.39.071-.622-.071-.622-.071.107 1.19 1.262 1.475 1.262 1.475-.337.125-.71.071-.71.071.461 1.013 1.368 1.049 1.368 1.049-.8.764-2.204.71-2.204.71.373.356 3.288 1.405 5.172-.373 1.884-1.777 1.6-3.643 1.6-3.643.586-.355.728-.8.728-.8z" })] })));
}
exports.default = BrandTwitterCircleClr;
