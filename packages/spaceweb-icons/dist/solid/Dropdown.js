"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDropdown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDropdown" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1 6h12c.6 0 1-.5 1-1V2.1c0-.6-.5-1-1-1H1c-.6 0-1 .5-1 1V5c0 .5.5 1 1 1zm12 1.8H8.7c-.6 0-1 .5-1 1v2.9c0 .6.5 1 1 1H13c.6 0 1-.5 1-1V8.9c0-.6-.5-1.1-1-1.1zm-8.3.4C4.5 8 4.4 8 4.2 8c-.4 0-.7.3-.7.6v1.2H1.2v-2c0-.3-.3-.6-.6-.6s-.6.3-.6.6v2.6c0 .4.3.7.7.6h2.9v1.2c0 .2.1.4.2.5.2.3.6.3.9.1L6.5 11v-.1c.1-.1.1-.2.1-.3v-.1c0-.1-.1-.3-.2-.4L4.7 8.2z" }) })));
}
exports.default = SolidDropdown;
