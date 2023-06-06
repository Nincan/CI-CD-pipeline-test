"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAddCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 7a7 7 0 107-7 7.008 7.008 0 00-7 7zm7.71-2.95v2.24h2.24a.71.71 0 010 1.42H7.71v2.24a.71.71 0 01-1.42 0V7.71H4.05a.71.71 0 010-1.42h2.24V4.05a.71.71 0 011.42 0z" }, void 0) }), void 0));
}
exports.default = SolidAddCircle;
