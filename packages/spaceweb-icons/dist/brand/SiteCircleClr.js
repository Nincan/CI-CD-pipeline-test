"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSiteCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSiteCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.466 3.26H3.534a.275.275 0 00-.275.274v6.932c0 .152.123.275.275.275h6.932a.274.274 0 00.275-.275V3.534a.275.275 0 00-.275-.275zm-4.571.904H9.73v.57H5.895v-.57zm-1.64-.267h1.106v1.104H4.256V3.897zm5.55 5.908h-5.61V5.767h5.61v4.038z" })] })));
}
exports.default = BrandSiteCircleClr;
