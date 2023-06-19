"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "10.58", height: "10.59", x: ".02", y: "3.41", rx: ".99" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.04 0H4.43a.992.992 0 00-.99.99v1.507h7.048a.99.99 0 01.98.99v7.103h1.571a.984.984 0 00.98-.99V.99a.99.99 0 00-.98-.99z" })] })));
}
exports.default = SolidCopy;
