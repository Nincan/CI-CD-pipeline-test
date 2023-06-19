"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMessageCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMessageCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#00CD00", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.2 4.04H3.8a.43.43 0 00-.43.43v4.943c0 .237.192.43.43.43h1.517V11.3l1.346-1.333a.43.43 0 01.302-.124H10.2a.43.43 0 00.43-.43V4.47a.43.43 0 00-.43-.43z" })] })));
}
exports.default = BrandMessageCircleClr;
