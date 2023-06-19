"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAlipayClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAlipayClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 .6h12.8v12.8H0Z", fill: "#1c9fe5", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.242 8.192q2.178.86 4.42 1.54c.818.34 0 2.266-.863 1.869-.978-.427-2.944-1.298-4.439-2.043A5.392 5.392 0 0 1 4.363 11.8a2.456 2.456 0 1 1-.035-4.878 10.834 10.834 0 0 1 3.514.77 10.003 10.003 0 0 0 .612-1.536L3.66 6.154v-.74l2.465.006v-.968H3.123v-.728l3.003.002v-1.08a.393.393 0 0 1 .417-.446h1.256v1.53l2.977.003v.722H7.8v.972l2.435.007a10.331 10.331 0 0 1-.993 2.758ZM2.276 9.316v-.002c0 .695.54 1.396 1.856 1.396a3.943 3.943 0 0 0 2.964-1.809 6.145 6.145 0 0 0-2.94-.943c-.957 0-1.88.466-1.88 1.358Z", fill: "#fff" })] })));
}
exports.default = BrandAlipayClr;
