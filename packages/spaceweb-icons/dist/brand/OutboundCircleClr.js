"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandOutboundCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandOutboundCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#5e96d2" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.049 7.732h1.642v.672H4.049ZM2.706 5.194h2.985v.672H2.706Zm.598 1.266h2.388v.672H3.304Zm3.489 2.904v-3.27l2.575 2.543.838-.785v-1.13l-.852.786-2.202-2.085h3.054V4.67l-4.16-.004-.004 5.448h4.164v-.74Z", fill: "#fff" }, void 0)] }), void 0));
}
exports.default = BrandOutboundCircleClr;
