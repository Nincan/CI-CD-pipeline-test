"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineSquareCorners(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13.95 13.95", "data-icon-name": "LineSquareCorners" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.6 5.71a.6.6 0 00.6-.6V2.39A1.19 1.19 0 012.39 1.2h2.76a.6.6 0 000-1.2H2.4A2.39 2.39 0 000 2.39V5.1a.6.6 0 00.6.6zM5.16 12.75H2.4a1.19 1.19 0 01-1.2-1.19v-2.8a.6.6 0 00-1.19 0v2.8a2.39 2.39 0 002.39 2.39h2.77a.6.6 0 000-1.2zM13.35 8.21a.6.6 0 00-.6.6v2.75a1.19 1.19 0 01-1.19 1.19H8.8a.6.6 0 000 1.2h2.76a2.39 2.39 0 002.39-2.39V8.81a.6.6 0 00-.6-.6zM11.56 0H8.79a.6.6 0 000 1.2h2.77a1.19 1.19 0 011.19 1.19v3.7a.6.6 0 101.2 0v-3.7A2.39 2.39 0 0011.56 0z" }) })));
}
exports.default = LineSquareCorners;
