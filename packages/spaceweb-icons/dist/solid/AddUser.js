"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.788 5.012a2.506 2.506 0 10-2.49-2.506 2.498 2.498 0 002.49 2.506zm3.16 1.752a3.738 3.738 0 00-.47.17 4.07 4.07 0 00-1.38.927 4.32 4.32 0 00-.92 1.379 4.252 4.252 0 00.4 3.985.051.051 0 01.01.015.054.054 0 00.01.016h-4.96a.688.688 0 01-.67-.685v-2.315a4.521 4.521 0 014.5-4.529h.64a4.415 4.415 0 012.84 1.037zm2.67 1.328a3.249 3.249 0 011.35 3.311 3.282 3.282 0 01-.88 1.65 3.175 3.175 0 01-3.48.705 3.222 3.222 0 01-1.98-2.979 3.324 3.324 0 01.24-1.238 3.502 3.502 0 01.69-1.056 3.475 3.475 0 011.05-.695 3.212 3.212 0 013.01.302zm-1.28 3.19h.64a.503.503 0 000-1.006h-.64v-.648a.51.51 0 00-.5-.503.493.493 0 00-.505.503v.648h-.645a.503.503 0 000 1.006h.645v.646a.513.513 0 00.505.5.5.5 0 00.5-.5z" }) })));
}
exports.default = SolidAddUser;
