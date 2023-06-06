"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderBubbleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 26 26", "data-icon-name": "PlaceholderBubbleClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ opacity: ".5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.11 18C1.72 18 .6 19.12.6 20.5S1.72 23 3.11 23c1.39 0 2.51-1.12 2.51-2.5S4.5 18 3.11 18z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "21.5", cy: "21.47", rx: "4.5", ry: "4.47" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "11.59", cy: "12.56", rx: "5.59", ry: "5.56" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "22.5", cy: "10.49", rx: "2.5", ry: "2.49" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "8.5", cy: "2.5", r: "2.5" }, void 0)] }), void 0));
}
exports.default = PlaceholderBubbleClr;
