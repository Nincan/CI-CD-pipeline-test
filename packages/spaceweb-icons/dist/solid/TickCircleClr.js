"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTickCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTickCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#3fbf41", opacity: ".2" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.264 10.675a.599.599 0 01-.424-.176L2.603 8.263a.6.6 0 01.849-.848l1.812 1.812 5.285-5.284a.6.6 0 01.847.849l-5.708 5.707a.599.599 0 01-.424.176z", fill: "#3fbf41" }, void 0)] }), void 0));
}
exports.default = SolidTickCircleClr;
