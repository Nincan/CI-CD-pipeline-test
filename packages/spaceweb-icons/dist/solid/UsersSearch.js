"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUsersSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUsersSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.025 4.497a3.72 3.72 0 0 0-2.67 1.11.592.592 0 0 0 0 .85l.125.127a3.637 3.637 0 0 1 4.925 4.424l.37.37c.247-.007.433-.01.49-.01a.604.604 0 0 0 .6-.61v-2.42a3.841 3.841 0 0 0-3.84-3.84ZM10.045 3.697a1.823 1.823 0 0 0 1.3-.54 1.853 1.853 0 0 0 0-2.6 1.872 1.872 0 0 0-2.6 0 1.835 1.835 0 0 0 0 2.6 1.823 1.823 0 0 0 1.3.54ZM4.295 5.667a1.975 1.975 0 0 0 1.4-3.37 2.03 2.03 0 0 0-2.79 0 1.934 1.934 0 0 0-.58 1.4 1.992 1.992 0 0 0 .58 1.4 1.925 1.925 0 0 0 1.39.57ZM5.415 10.838A3.59 3.59 0 0 1 6.567 7.16a4.087 4.087 0 0 0-2.242-.673h-.07a4.133 4.133 0 0 0-4.12 4.12v2.74a.623.623 0 0 0 .62.62h7.07a.615.615 0 0 0 .589-.468 3.627 3.627 0 0 1-2.999-2.661Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.215 11.237a2.634 2.634 0 1 0-.96.96l1.62 1.62a.486.486 0 0 0 .46.13.946.946 0 0 0 .63-.63.479.479 0 0 0-.13-.46Zm-1.96.32a1.682 1.682 0 1 1 1.32-1.98 1.675 1.675 0 0 1-1.32 1.98Z" })] })));
}
exports.default = SolidUsersSearch;
