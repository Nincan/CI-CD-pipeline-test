"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/ExitFullScreen.svg instead.
 */
function LineExitFullScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineExitFullScreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.6 7.7c.1 0 .2 0 .3.1.1 0 .3.2.3.3 0 .1.1.2.1.3v2.8c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-1.1l-3.7 3.7c-.3.3-.7.3-1 0s-.3-.7 0-1l3.7-3.7H2.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h2.8zM13.3 0c.2 0 .4.1.5.2.1.1.2.3.2.5s-.1.4-.2.5l-3.7 3.7h1.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H8.4c-.1 0-.2 0-.3-.1-.1 0-.3-.2-.3-.3 0-.1-.1-.2-.1-.3V2.8c0-.4.3-.7.7-.7.4 0 .7.3.7.7v1.1L12.8.2c.1-.1.3-.2.5-.2z" }, void 0) }), void 0));
}
exports.default = LineExitFullScreen;
