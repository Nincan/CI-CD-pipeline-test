"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAdSets(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAdSets" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.832 7.012L8.829 7l.003-.012a1.834 1.834 0 00-1.826-1.819H7l-.007-.001a1.834 1.834 0 00-1.825 1.825l.002.006-.002.007A1.834 1.834 0 006.99 8.83H7l.01.002a1.834 1.834 0 001.822-1.819zM7.5 4.218a2.83 2.83 0 012.282 2.281H14v-5A1.5 1.5 0 0012.5 0h-5zM4.218 6.5A2.83 2.83 0 016.5 4.217V0h-5A1.5 1.5 0 000 1.5v5zM14 7.5H9.782A2.83 2.83 0 017.5 9.781V14h5a1.5 1.5 0 001.5-1.5v-5zM6.5 14V9.781a2.83 2.83 0 01-2.282-2.283H0V12.5A1.5 1.5 0 001.5 14h5z" }, void 0) }), void 0));
}
exports.default = SolidAdSets;
