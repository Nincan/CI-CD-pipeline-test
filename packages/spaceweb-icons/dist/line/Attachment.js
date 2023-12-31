"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAttachment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAttachment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 14c-.13 0-.26 0-.38-.02a4.02 4.02 0 01-3.53-4.06V2.9A2.88 2.88 0 015.97 0l.28.01a2.97 2.97 0 012.61 3v6.38a1.85 1.85 0 01-.16.76 1.86 1.86 0 01-1.12 1.02 1.89 1.89 0 01-.58.09 1.85 1.85 0 01-.2-.01A1.93 1.93 0 015.15 9.3V3.4a.67.67 0 01.66-.66.66.66 0 01.66.66v6a.54.54 0 001.08 0V2.88A1.56 1.56 0 005.8 1.33a1.63 1.63 0 00-1.4 1.65v7.1a2.6 2.6 0 002.6 2.6 2.48 2.48 0 00.25-.02 2.67 2.67 0 002.34-2.7V3.4a.67.67 0 01.66-.66.66.66 0 01.67.66v6.68a3.86 3.86 0 01-.34 1.59 3.93 3.93 0 01-.95 1.31 3.89 3.89 0 01-1.4.82 3.95 3.95 0 01-1.24.2z" }) })));
}
exports.default = LineAttachment;
