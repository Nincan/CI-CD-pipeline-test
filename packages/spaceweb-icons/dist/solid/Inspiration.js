"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInspiration(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInspiration" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.613 11.041h-3.2a.635.635 0 0 0 0 1.27h3.2a.635.635 0 0 0 0-1.27m-3.341 1.965c.192.613.858.994 1.74.994.88 0 1.548-.381 1.74-.994l.086-.275H5.186l.086.275zM7.002 0a4.9 4.9 0 0 0-1.206.154A4.54 4.54 0 0 0 2.728 2.79c-.54 1.3-.499 2.705.109 3.933l1.485 3.897h5.36l1.468-3.866.02-.044A4.656 4.656 0 0 0 7.002 0v-.001zm2.96 5.93a.404.404 0 0 1-.404-.404c0-1.884-1.302-3.416-2.901-3.416a.404.404 0 0 1 0-.808c2.045 0 3.71 1.895 3.71 4.224a.404.404 0 0 1-.404.404z" }) })));
}
exports.default = SolidInspiration;
