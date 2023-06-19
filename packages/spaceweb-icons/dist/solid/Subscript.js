"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSubscript(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSubscript" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.92 11.978h-1.41v.83H14v.83h-3.07a.25.25 0 0 1-.249-.25v-1.16a1.082 1.082 0 0 1 1.08-1.08h1.41v-.83h-2.49V9.49h2.24A1.082 1.082 0 0 1 14 10.57v.33a1.082 1.082 0 0 1-1.08 1.08Zm-12.67 0h1.614a.25.25 0 0 0 .212-.117l2.747-4.38h.1l2.748 4.38a.25.25 0 0 0 .21.117h1.614a.25.25 0 0 0 .21-.384L6.18 6.081a.25.25 0 0 1 0-.27L9.447.748a.25.25 0 0 0-.21-.385H7.61a.25.25 0 0 0-.213.119L4.923 4.503h-.1L2.333.48A.25.25 0 0 0 2.12.362H.509a.25.25 0 0 0-.21.384l3.252 5.066a.25.25 0 0 1 0 .269L.04 11.595a.25.25 0 0 0 .21.383Z" }) })));
}
exports.default = SolidSubscript;
