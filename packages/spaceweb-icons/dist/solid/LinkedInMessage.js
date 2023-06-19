"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkedInMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 13.162", "data-icon-name": "SolidLinkedInMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 4.948A4.667 4.667 0 0 1 4.667.28h4.666a4.667 4.667 0 0 1 2.794 8.405L7 12.881V9.614H4.667A4.667 4.667 0 0 1 0 4.948Zm5.133 0a.933.933 0 1 1-.933-.934.933.933 0 0 1 .933.933ZM7 5.88a.933.933 0 1 0-.933-.934.933.933 0 0 0 .933.934Zm3.733-.934a.933.933 0 1 1-.933-.933.933.933 0 0 1 .933.933Z", fillRule: "evenodd" }) })));
}
exports.default = SolidLinkedInMessage;
