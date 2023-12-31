"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/ImageAsset.svg instead.
 */
function LineImageAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineImageAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.5 3.4l-3.4-3c-.3-.3-.6-.4-1-.4H1.5C.6 0 0 .7 0 1.5v11c0 .8.6 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5v-8c-.1-.4-.3-.8-.6-1.1zm-12-2.2h7.6c.1 0 .1 0 .2.1l3.4 3c.1.1.1.1.1.2v5.8l-2-2.3c-.4-.5-1-.8-1.7-.8s-1.3.3-1.7.8l-1.6 2-.6-.7c-.3-.4-.7-.6-1.2-.6s-1 .2-1.2.5l-1.6 1.5V1.5c0-.2.1-.3.3-.3zm11 11.6h-11c-.2 0-.3-.1-.3-.3v-.2L3.6 10c.1-.1.2-.1.4-.1.1 0 .2.1.3.2l1.1 1.3c.1.1.3.2.5.2s.4-.1.5-.2l2-2.7c.1-.2.4-.3.7-.3s.6.1.8.4l3 3.4v.4c-.1.1-.2.2-.4.2z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4 7.2c.9 0 1.6-.7 1.6-1.6S4.9 3.9 4 3.9s-1.6.8-1.6 1.6.7 1.7 1.6 1.7zm0-2.3c.3 0 .6.3.6.6s-.2.7-.6.7-.6-.3-.6-.7.3-.6.6-.6z" })] })));
}
exports.default = LineImageAsset;
