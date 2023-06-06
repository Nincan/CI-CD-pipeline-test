"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandHubspotCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandHubspotCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#ff7a59" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M9.283 5.476V4.414a.818.818 0 00.472-.738v-.024a.818.818 0 00-.819-.818h-.024a.818.818 0 00-.818.818v.024a.818.818 0 00.471.738v1.062a2.317 2.317 0 00-1.101.486l-2.915-2.27a.92.92 0 10-.89.69.912.912 0 00.454-.123l2.87 2.233a2.324 2.324 0 00.035 2.618l-.873.873a.772.772 0 10.504.504l.864-.864a2.328 2.328 0 101.77-4.147m-.358 3.495a1.195 1.195 0 11-.064-2.388h.064a1.195 1.195 0 01.001 2.388" }, void 0)] }), void 0));
}
exports.default = BrandHubspotCircleClr;
