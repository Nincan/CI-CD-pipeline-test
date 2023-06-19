"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandJiveCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandJiveCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.8 3.8V2.5H5.9v1.1c.4.1 1 .2 1.9.2zm0 .6c-1-.1-1.6-.2-1.9-.3v4.7s0 .4-.2.6c-.3.5-.7.5-.7.5l.7 1.6s.4-.1.8-.3c.5-.2.8-.5 1.1-.9.3-.5.2-1 .2-1V4.4z", fill: "#FFF" })] })));
}
exports.default = BrandJiveCircleClr;
