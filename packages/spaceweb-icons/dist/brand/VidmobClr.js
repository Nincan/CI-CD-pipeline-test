"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandVidmobClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandVidmobClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.95 3.08a.9.9 0 00-.7-.59L1.06.3a.9.9 0 00-.85.3.86.86 0 00-.21.68V13.6l3.52-2.43.7 1.96a.92.92 0 00.7.59.46.46 0 00.12.01.9.9 0 00.74-.32l8-9.44a.9.9 0 00.17-.89" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M13.15 3.44l-8 9.44c-.03.02-.06.03-.08.02a.08.08 0 01-.06-.05L.83 1.2a.1.1 0 01.01-.09.06.06 0 01.08-.02l12.18 2.2a.08.08 0 01.06.06.12.12 0 010 .1" })] })));
}
exports.default = BrandVidmobClr;
