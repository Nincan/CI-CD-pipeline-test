"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineFormatText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineFormatText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.234 13.992H.766a.7.7 0 010-1.4h12.468a.7.7 0 010 1.4zM9.317 9.585L8.813 8.26H4.522l-.504 1.354a4.707 4.707 0 01-.504 1.069.8.8 0 01-.684.277 1 1 0 01-.713-.295.907.907 0 01-.31-.67 1.511 1.511 0 01.072-.446q.072-.23.238-.64l2.7-6.855q.114-.295.278-.71A3.426 3.426 0 015.44.658a1.395 1.395 0 01.481-.443 1.483 1.483 0 01.74-.17 1.487 1.487 0 01.744.17 1.442 1.442 0 01.484.436 3.12 3.12 0 01.308.572q.127.306.32.817l2.759 6.812a3.427 3.427 0 01.324 1.13.932.932 0 01-.307.673 1.002 1.002 0 01-.737.306.948.948 0 01-.432-.09.877.877 0 01-.303-.245 2.126 2.126 0 01-.262-.475 23.62 23.62 0 01-.242-.565zm-4.234-2.93h3.154L6.646 2.299z" }) })));
}
exports.default = LineFormatText;
