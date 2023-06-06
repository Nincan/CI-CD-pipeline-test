"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGridRow1x1(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGridRow1x1" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.409 4.43H.575a.5.5 0 00-.5.5l.004.014V9.28a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V4.93a.5.5 0 00-.5-.5zM1.079 8.78V5.43h11.83v3.35z" }, void 0) }), void 0));
}
exports.default = SolidGridRow1x1;
