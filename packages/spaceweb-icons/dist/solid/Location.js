"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLocation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLocation" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.6 9.873c-.176.279-.368.569-.577.87 1.753.257 2.65.807 2.65 1.08 0 .365-1.59 1.22-4.673 1.22-3.084 0-4.674-.855-4.674-1.22 0-.273.897-.823 2.65-1.08a26.55 26.55 0 0 1-.577-.87c-1.73.32-3.05.977-3.05 1.95C1.349 13.254 4.192 14 7 14s5.651-.748 5.651-2.176c0-.974-1.32-1.631-3.05-1.951" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 11.701c.347 0 .673-.161.878-.436 1.31-1.752 3.63-5.1 3.63-6.85C11.508 1.978 9.489 0 7 0 4.51 0 2.492 1.977 2.492 4.416c0 1.749 2.319 5.097 3.63 6.85.206.274.532.435.878.435M5.125 4.33c0-1.015.84-1.837 1.875-1.837 1.035 0 1.875.822 1.875 1.837S8.035 6.165 7 6.165c-1.036 0-1.875-.822-1.875-1.836" })] })) })));
}
exports.default = SolidLocation;
