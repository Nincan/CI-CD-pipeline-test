"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandZoomSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandZoomSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#0d5cfe", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.5 8.75a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 8V5.25a.75.75 0 0 1 .75-.75H7A1.5 1.5 0 0 1 8.5 6Zm1.9-3.8-1.1.825a.75.75 0 0 0-.3.6v1.25a.75.75 0 0 0 .3.6l1.1.825a.375.375 0 0 0 .6-.3v-3.5a.375.375 0 0 0-.6-.3Z", fill: "#fff" })] })));
}
exports.default = BrandZoomSquareClr;
