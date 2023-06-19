"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/FullScreen.svg instead.
 */
function LineFullScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 18 18", "data-icon-name": "LineFullScreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.6 10.1c.3-.3.9-.3 1.3 0 .3.3.3.9 0 1.3l-4.7 4.7h1.4c.5 0 .9.4.9.9s-.4.9-.9.9H1c-.1 0-.2 0-.3-.1-.2-.1-.4-.3-.5-.5 0-.1-.1-.2-.1-.3v-3.6c0-.5.4-.9.9-.9s.9.4.9.9v1.4l4.7-4.7zM17 .1c.1 0 .2 0 .3.1.2.1.4.3.5.5 0 .1.1.2.1.3v3.6c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.2l-4.7 4.7c-.2.2-.4.3-.6.3-.2 0-.5-.1-.6-.3-.2-.2-.3-.4-.3-.6 0-.2.1-.5.3-.6L14.9 2h-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9H17z" }) })));
}
exports.default = LineFullScreen;
