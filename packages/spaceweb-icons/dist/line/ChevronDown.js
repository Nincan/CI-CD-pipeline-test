"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineChevronDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineChevronDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.728 3.307a.931.931 0 00-1.316.001L7 8.718l-5.41-5.41a.932.932 0 00-1.318 0 .929.929 0 000 1.314l6.07 6.07a.931.931 0 001.316 0l6.07-6.069a.931.931 0 000-1.316z" }) })));
}
exports.default = LineChevronDown;
