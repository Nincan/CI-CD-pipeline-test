"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCrosshair(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCrosshair" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.29434,6.29926h-.83772A5.5177,5.5177,0,0,0,7.69926,1.54289V.70615a.70566.70566,0,0,0-1.41132,0v.83693A5.51211,5.51211,0,0,0,1.54135,6.29926H.70566a.70566.70566,0,0,0,0,1.41132h.83588A5.50674,5.50674,0,0,0,6.28794,12.457v.83686a.70566.70566,0,0,0,1.41132,0v-.83668a5.51227,5.51227,0,0,0,4.75717-4.74659h.83791a.70566.70566,0,0,0,0-1.41132ZM7.69926,11.025V10.01849a.70566.70566,0,0,0-1.41132,0v1.00633A4.087,4.087,0,0,1,2.97371,7.71058h.97385a.70566.70566,0,1,0,0-1.41132h-.974A4.09149,4.09149,0,0,1,6.28794,2.97537V3.9323a.70566.70566,0,1,0,1.41132,0V2.97518a4.09672,4.09672,0,0,1,3.32506,3.32408h-.97286a.70566.70566,0,0,0,0,1.41132h.97268A4.09249,4.09249,0,0,1,7.69926,11.025Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "6.99908", cy: "6.99988", r: "0.99391" })] })));
}
exports.default = SolidCrosshair;
