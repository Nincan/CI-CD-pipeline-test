"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidIpLocation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidIpLocation" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M9.6 9.87q-.26.42-.58.87c1.76.26 2.65.81 2.65 1.08 0 .37-1.59 1.22-4.67 1.22s-4.67-.85-4.67-1.22c0-.27.9-.82 2.65-1.08q-.32-.45-.58-.87c-1.73.32-3.05.98-3.05 1.95C1.35 13.25 4.19 14 7 14c2.8 0 5.65-.75 5.65-2.18 0-.97-1.32-1.63-3.05-1.95zm-.8-5.1a.66.66 0 00.34-.24.69.69 0 00.12-.42.71.71 0 00-.18-.5 1.22 1.22 0 00-.85-.21H7.6v1.44h.64a1.92 1.92 0 00.56-.07z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 11.7a1.1 1.1 0 00.88-.43c1.3-1.76 3.63-5.1 3.63-6.85A4.46 4.46 0 007 0a4.46 4.46 0 00-4.5 4.42c0 1.74 2.31 5.1 3.62 6.85a1.1 1.1 0 00.88.43zm-.36-8.43a.6.6 0 01.14-.45.66.66 0 01.46-.14h1.22a3.2 3.2 0 01.84.09 1.24 1.24 0 01.5.26 1.2 1.2 0 01.31.46 1.6 1.6 0 01.11.6 1.34 1.34 0 01-.44 1.1 2.01 2.01 0 01-1.32.36H7.6v1.33a.62.62 0 01-.13.44.47.47 0 01-.69 0 .62.62 0 01-.13-.43zm-.96 3.61a.62.62 0 01-.13.44.45.45 0 01-.35.14.44.44 0 01-.34-.14.63.63 0 01-.13-.44v-3.7a.62.62 0 01.13-.43.44.44 0 01.34-.15.45.45 0 01.35.15.62.62 0 01.13.43z" })] })));
}
exports.default = SolidIpLocation;
