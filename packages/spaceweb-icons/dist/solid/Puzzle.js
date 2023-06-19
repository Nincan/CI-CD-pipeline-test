"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPuzzle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPuzzle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.04 12.69a.41.41 0 01-.31-.15.43.43 0 01-.09-.32 7.27 7.27 0 01.22-.9.99.99 0 00.02-.55.95.95 0 00-.67-.65.94.94 0 00-1.16.9.86.86 0 00.04.28 5.7 5.7 0 01.23.9.42.42 0 01-.1.32.41.41 0 01-.3.15H3.05a.4.4 0 01-.4-.4V9.88c-.13.03-.25.08-.37.1a1.71 1.71 0 01-1.9-.57 1.73 1.73 0 01.9-2.76 1.77 1.77 0 011 .03 2.66 2.66 0 00.37.1v-2.4a.4.4 0 01.4-.4h2.41l-.1-.39a1.72 1.72 0 01.57-1.9 1.72 1.72 0 011.49-.33A1.74 1.74 0 018.69 2.6a1.79 1.79 0 01-.03 1 2.68 2.68 0 00-.1.38h2.4a.4.4 0 01.39.4V6.8c.13-.03.25-.08.37-.1a1.77 1.77 0 011-.04 1.74 1.74 0 011.24 1.27 1.79 1.79 0 01-.33 1.5 1.71 1.71 0 01-1.9.57 2.88 2.88 0 00-.38-.1v2.42a.42.42 0 01-.41.37z", fillRule: "evenodd" }) })));
}
exports.default = SolidPuzzle;
