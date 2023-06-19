"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidToggleLableFull(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidToggleLableFull" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13 2.21H1a1 1 0 00-1 1v7.58a1 1 0 001 1h12a1 1 0 001-1V3.21a1 1 0 00-1-1zM2.849 8.282A1.283 1.283 0 114.13 7 1.283 1.283 0 012.85 8.283zm7.805.796H6.208a.6.6 0 110-1.2h4.446a.6.6 0 110 1.2zm1.78-2.959H6.209a.6.6 0 110-1.2h6.227a.6.6 0 110 1.2z" }) })));
}
exports.default = SolidToggleLableFull;
