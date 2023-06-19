"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTaskCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTaskCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.35 3.5h-2.7a.1.1 0 00-.1.1v.92a.1.1 0 00.1.1h2.7a.1.1 0 00.1-.1v-.91a.1.1 0 00-.1-.11zm1.57.46h-.85v1.28H4.93V3.96h-.9a.15.15 0 00-.1.15v6.28a.15.15 0 00.15.11h5.89a.15.15 0 00.1-.15V4.06a.15.15 0 00-.15-.1zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidTaskCircle;
