"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPauseCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPauseCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.4 3.8a.96.96 0 00-.96.96v4.48a.96.96 0 101.92 0V4.76a.96.96 0 00-.96-.96zm3.2 0a.96.96 0 00-.96.96v4.48a.96.96 0 001.92 0V4.76a.96.96 0 00-.96-.96zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidPauseCircle;
