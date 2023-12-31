"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Settings.svg instead.
 */
function LineSettings(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSettings" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.3 7.3v-.7l1.1-.9c.3-.3.4-.8.2-1.2l-1.3-2.2c-.2-.3-.6-.4-1.1-.3l-1.2.6c-.2-.2-.4-.3-.6-.4L9.2.8C9.1.4 8.7.1 8.3.1H5.7c-.4 0-.8.3-.9.8l-.2 1.3c-.2.1-.4.2-.6.4L2.8 2c-.4-.2-.9 0-1.1.4L.4 4.6c-.3.4-.2.9.2 1.2l1.1.8v.7l-1.1.9c-.4.3-.5.8-.2 1.2l1.3 2.2c.2.4.6.5 1.1.4l1.2-.6c.2.1.4.2.6.4l.2 1.4c.1.4.5.8.9.8h2.5c.4 0 .8-.3.9-.8l.2-1.3.6-.3 1.3.5c.4.2.9 0 1.1-.4l1.3-2.2c.2-.4.1-.9-.2-1.2l-1.1-1zm-.9 3.4L9.7 10l-.3.2c-.3.2-.6.4-.9.5l-.2.3-.3 1.7H6L5.7 11l-.3-.1c-.3-.1-.6-.3-.9-.5l-.3-.2-1.7.7-1-1.9 1.4-1.1V6.3L1.5 5l1-1.8 1.7.7.3-.2c.3-.2.6-.4.9-.5l.3-.2.3-1.7h2L8.3 3l.3.1c.3.1.6.3.9.5l.3.2 1.7-.7 1 1.8L11.1 6v1.6L12.5 9l-1.1 1.7z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 4.6C5.7 4.6 4.6 5.7 4.6 7S5.7 9.4 7 9.4 9.4 8.3 9.4 7 8.3 4.6 7 4.6zm0 3.6c-.7 0-1.2-.5-1.2-1.2S6.3 5.8 7 5.8s1.2.5 1.2 1.2S7.7 8.2 7 8.2z" })] })));
}
exports.default = LineSettings;
