"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandJiraCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandJiraCircleClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", (0, tslib_1.__assign)({ id: "jiraCircle_clr__a", x1: "8.76", x2: "7.17", y1: "11.07", y2: "9.38", gradientTransform: "matrix(1 0 0 -1 0 16)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: ".18", stopColor: "#0052cc" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#2684ff" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("linearGradient", { href: "#jiraCircle_clr__a", id: "jiraCircle_clr__b", x1: "6.97", x2: "5.12", y1: "9.2", y2: "7.35" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", fill: "#f2f2f2", rx: "7" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#2684ff", d: "M10.48 3.11H6.62a1.72 1.72 0 001.74 1.7h.71v.65a1.72 1.72 0 001.74 1.7V3.43a.32.32 0 00-.33-.33z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "url(#jiraCircle_clr__a)", d: "M8.57 4.98H4.72a1.72 1.72 0 001.73 1.68h.72v.68A1.72 1.72 0 008.9 9.02V5.3a.33.33 0 00-.34-.32z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "url(#jiraCircle_clr__)", d: "M6.67 6.85H2.8a1.72 1.72 0 001.74 1.69h.71v.66A1.72 1.72 0 007 10.89V7.17a.33.33 0 00-.33-.32z" }, void 0)] }), void 0));
}
exports.default = BrandJiraCircleClr;
