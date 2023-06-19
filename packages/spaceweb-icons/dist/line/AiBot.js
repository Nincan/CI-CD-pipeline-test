"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAiBot(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAiBot" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm.24 10.63q-5.8.12-5.8-3.28c0-4.09 4.08-3.81 5.58-3.81s5.52-.1 5.52 3.53q0 3.63-5.3 3.56z", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.52 5.52a1.26 1.26 0 00-.89 1.53 1.26 1.26 0 001.32 1.17 1.26 1.26 0 00.88-1.52 1.26 1.26 0 00-1.31-1.18zM4.69 5.43A1.26 1.26 0 003.4 6.65a1.26 1.26 0 00.94 1.5 1.26 1.26 0 001.28-1.22 1.26 1.26 0 00-.94-1.5z", fillRule: "evenodd" })] })));
}
exports.default = LineAiBot;
