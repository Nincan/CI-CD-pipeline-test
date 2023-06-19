"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRestartPendingMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRestartPendingMessage" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h3.9a1.5 1.5 0 01-.08-.45V9.09A1.53 1.53 0 019 7.63a3.89 3.89 0 014.94.84V1.54A1.55 1.55 0 0012.4 0zM4.3 6.24a.85.85 0 110-1.7.85.85 0 110 1.7zm2.7 0a.85.85 0 11.85-.85.85.85 0 01-.85.85zm2.7 0a.85.85 0 11.86-.85.85.85 0 01-.86.85z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.26 8.17a2.97 2.97 0 00-.3-.02 2.93 2.93 0 00-1.93.73l-.08-.1a.55.55 0 00-.37-.14.53.53 0 00-.38.15.54.54 0 00-.15.38v1.22a.53.53 0 00.53.53H9.8a.53.53 0 00.37-.9l-.38-.39a1.95 1.95 0 011.17-.41 1.86 1.86 0 01.79 3.54 1.84 1.84 0 01-.79.17 1.86 1.86 0 01-1.68-1.07.53.53 0 00-.46-.3.52.52 0 00-.24.06.53.53 0 00-.25.71 2.93 2.93 0 002.34 1.65 2.92 2.92 0 00.6-5.81z" })] })));
}
exports.default = SolidRestartPendingMessage;
