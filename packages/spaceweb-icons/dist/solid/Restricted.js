"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRestricted(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRestricted" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.142 3.291h-.7A3.278 3.278 0 007.168.015H6.69A3.278 3.278 0 003.415 3.29H2.86a1.755 1.755 0 00-1.753 1.753v7.19a1.755 1.755 0 001.753 1.753h8.282a1.755 1.755 0 001.753-1.753v-7.19a1.753 1.753 0 00-1.752-1.752zm-4.45-1.965h.476A1.967 1.967 0 019.132 3.29l.002.001H4.727a1.966 1.966 0 011.964-1.965zm2.597 8.526a.7.7 0 01-.99.99L7 9.544l-1.298 1.298a.7.7 0 11-.99-.99L6.01 8.554l-1.3-1.299a.7.7 0 11.99-.99L7 7.563l1.298-1.298a.7.7 0 01.99.99L7.99 8.554z" }) })));
}
exports.default = SolidRestricted;
