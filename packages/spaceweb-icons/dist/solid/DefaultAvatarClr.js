"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDefaultAvatarClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDefaultAvatarClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#e9edf1", d: "M13.936 7.002a6.943 6.943 0 01-6.94 6.93 6.827 6.827 0 01-4.64-1.79A6.932 6.932 0 016.996.062a6.944 6.944 0 016.94 6.94z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#839fb4", d: "M11.646 12.142a6.922 6.922 0 01-9.29 0 4.424 4.424 0 011.57-2.7h-.02c.06-.05.13-.09.19-.14.09-.06.18-.13.27-.18a3.548 3.548 0 01.43-.23 2.433 2.433 0 01.28-.14 5.008 5.008 0 01.55-.17c.08-.02.15-.05.22-.06a4.58 4.58 0 01.83-.09h.65a4.58 4.58 0 01.83.09 1.654 1.654 0 01.21.06 5.18 5.18 0 01.56.17 2.433 2.433 0 01.28.14 3.548 3.548 0 01.43.23c.09.05.18.12.27.18.06.05.13.09.19.14h-.02a4.424 4.424 0 011.57 2.7zM7.01 7.746a2.435 2.435 0 10-2.436-2.435A2.437 2.437 0 007.01 7.746z" })] })));
}
exports.default = SolidDefaultAvatarClr;
