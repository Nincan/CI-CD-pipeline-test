"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineSearchCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSearchCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1.08A5.92 5.92 0 107 1.08a5.92 5.92 0 000 11.84zm3.02-3.57L8.6 7.96a2.48 2.48 0 00-2.08-3.92A2.52 2.52 0 004 6.54a2.52 2.52 0 003.97 2.05l1.41 1.4a.45.45 0 00.77-.32.44.44 0 00-.13-.32zM8.16 6.54c0 .88-.73 1.6-1.63 1.6-.9 0-1.63-.72-1.63-1.6 0-.89.73-1.6 1.63-1.6.9 0 1.63.71 1.63 1.6z" }) })));
}
exports.default = LineSearchCircle;
