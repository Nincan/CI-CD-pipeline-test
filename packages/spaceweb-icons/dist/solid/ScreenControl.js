"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidScreenControl(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidScreenControl" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.21 13.989l-.36.01a1.693 1.693 0 01-.23-.01zm3.517-6.543l-3.51-1.27c-.178-.068-.25-.1-.25-.24l-.01-3.38a.9.9 0 00-1.79 0v6.976L2.697 7.88a.82.82 0 00-.991 1.29l3.89 4.125.011.01a3.134 3.134 0 001.65.672h3.28a2.002 2.002 0 002-2.01v-2.62c0-1.27-1.01-1.67-1.81-1.9z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.58 4.926V2.709a1.488 1.488 0 112.976 0v2.217a2.677 2.677 0 10-3.718-.734 2.582 2.582 0 00.742.734z" })] })));
}
exports.default = SolidScreenControl;
