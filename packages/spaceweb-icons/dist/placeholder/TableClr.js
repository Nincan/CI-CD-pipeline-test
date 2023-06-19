"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderTableClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 30", "data-icon-name": "PlaceholderTableClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M38 29l-1 1v-1h1zM1 30l-1-1h1v1zM37 4h1v26H0V4h1v25h36V4zM1 30l-1-1h1v1zm37-1l-1 1v-1h1zm0-23.5V30H0V0h10v7H1v7h36V7H22V0h16v5.5zM37 23H1v6h36v-6zM1 22h36v-7H1v7z" }), (0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M21 0H11v7h10z" })] })));
}
exports.default = PlaceholderTableClr;
