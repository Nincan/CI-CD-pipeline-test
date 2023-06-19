"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSuperscript(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSuperscript" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.919 2.851H11.51v.83H14v.83h-3.068a.251.251 0 0 1-.251-.252V3.102a1.084 1.084 0 0 1 1.08-1.08h1.41v-.83h-2.49v-.83h2.238A1.084 1.084 0 0 1 14 1.442v.328a1.084 1.084 0 0 1-1.081 1.081ZM.252 13.638h1.61a.251.251 0 0 0 .213-.117l2.747-4.38h.1l2.747 4.38a.251.251 0 0 0 .213.117h1.61a.251.251 0 0 0 .211-.386L6.18 7.742a.251.251 0 0 1 0-.272L9.443 2.41a.251.251 0 0 0-.21-.388H7.61a.251.251 0 0 0-.214.12L4.922 6.16h-.1l-2.49-4.02a.251.251 0 0 0-.214-.12H.511a.251.251 0 0 0-.212.387l3.25 5.063a.251.251 0 0 1 0 .27L.04 13.252a.251.251 0 0 0 .213.386Z" }) })));
}
exports.default = SolidSuperscript;
