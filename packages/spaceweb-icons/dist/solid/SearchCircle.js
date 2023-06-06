"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSearchCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSearchCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.045 4.53a1.6 1.6 0 101.127 2.732l.002-.003.003-.002a1.599 1.599 0 00-1.132-2.728z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm3.411 10.493a.601.601 0 01-.848.001L7.549 8.482a2.816 2.816 0 11.849-.849l2.012 2.012a.6.6 0 01.001.848z" }, void 0)] }), void 0));
}
exports.default = SolidSearchCircle;
