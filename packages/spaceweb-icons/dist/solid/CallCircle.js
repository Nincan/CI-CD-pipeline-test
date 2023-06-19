"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCallCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.99 3.68c-.48-.53-1.1.27-1.32.58a1.04 1.04 0 00-.17.66 10 10 0 002.16 3.51 6.53 6.53 0 003.3 2.02.97.97 0 00.73-.03 7.73 7.73 0 00.75-.85.57.57 0 00-.08-.6l-.54-.36-.21-.15c-.18-.11-.35-.23-.44-.3a.66.66 0 00-.56-.1l-.29.17-.2.1a6.4 6.4 0 01-.29.17c-.13.06-.33-.11-.33-.11S5.75 6.71 5.61 6.5s.13-.69.33-.89c.3-.3-.04-.78-.04-.78A13.42 13.42 0 005 3.68zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidCallCircle;
