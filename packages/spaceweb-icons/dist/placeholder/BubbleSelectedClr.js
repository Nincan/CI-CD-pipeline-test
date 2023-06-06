"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderBubbleSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 26 26", "data-icon-name": "PlaceholderBubbleSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("ellipse", { fill: "#4CD2E0", cx: "11.591", cy: "12.559", rx: "5.591", ry: "5.559" }, void 0), (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#CBD756" }, { children: [(0, jsx_runtime_1.jsx)("ellipse", { cx: "3.112", cy: "20.5", rx: "2.515", ry: "2.5" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "22.5", cy: "10.485", rx: "2.5", ry: "2.485" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#40A3F5" }, { children: [(0, jsx_runtime_1.jsx)("ellipse", { cx: "21.5", cy: "21.474", rx: "4.5", ry: "4.474" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "8.5", cy: "2.5", r: "2.5" }, void 0)] }), void 0)] }), void 0));
}
exports.default = PlaceholderBubbleSelectedClr;
