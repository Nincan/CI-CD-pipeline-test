"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDataFlowCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDataFlowCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#1c6cfd" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.7 8.5V6.4H7.2V5h1.1V3.1H5.6V5h1.1v1.4H3.3v2.1c-.6.1-1 .6-1 1.2 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c0-.6-.4-1.1-1-1.2V6.9h3v1.6c-.6.1-1 .6-1 1.2 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c0-.6-.4-1.1-1-1.2V6.9h3v1.6c-.6.1-1 .6-1 1.2 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c.2-.6-.2-1.1-.8-1.2z", fill: "#fff" })] })));
}
exports.default = SolidDataFlowCircleClr;
