"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidContent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidContent" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.448 1.672a1.72 1.72 0 0 0-.005-.141.45.45 0 0 0-.145-.297.518.518 0 0 0-.379-.13h-2.802c-.12 0-.119 0-.12-.117 0-.24-.002-.481-.005-.722C9.99.105 9.89.006 9.731.001L9.674 0H4.34c-.035 0-.071 0-.107.004a.247.247 0 0 0-.198.132c-.031.055-.03.115-.03.175v.694c0 .095-.004.098-.098.098H2.176l-1.117.001c-.248.001-.432.137-.49.355a.75.75 0 0 0-.017.19v11.875a.475.475 0 0 0 .346.457c.07.021.141.019.213.019h11.773c.064 0 .128.001.19-.013.235-.052.374-.243.374-.508V1.672zm-1.617 10.586c0 .124 0 .124-.124.124h-9.41c-.126 0-.126 0-.126-.128v-9.41c0-.121 0-.121.12-.121H3.9c.103 0 .105.002.105.103v.609c0 .13.11.246.24.25h5.447c.046 0 .093.003.139-.014a.246.246 0 0 0 .16-.218c.014-.212.004-.424.007-.637.002-.087.006-.093.093-.093h1.64c.098 0 .1.003.1.103v9.432z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.44 7.278a.75.75 0 0 1-.004-1.5l5.302-.024h.004a.75.75 0 0 1 .004 1.5l-5.303.024H4.44zm0 2.942a.75.75 0 0 1-.004-1.5l5.302-.025h.004a.75.75 0 0 1 .004 1.5l-5.303.025H4.44z" })] })));
}
exports.default = SolidContent;
