"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidQuickMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidQuickMessage" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15H9a1.43 1.43 0 01.11-.21l2.04-3.43a1.24 1.24 0 011.06-.6 1.22 1.22 0 011.24 1.19v.1L13.27 9h.1a1.28 1.28 0 01.56.13V1.54A1.55 1.55 0 0012.4 0zM4.3 6.24a.85.85 0 110-1.7.85.85 0 110 1.7zm2.7 0a.85.85 0 11.85-.85.85.85 0 01-.85.85zm2.7 0a.85.85 0 11.86-.85.85.85 0 01-.86.85z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.37 10.12h-1.29l.33-2.23a.2.2 0 000-.03.2.2 0 00-.2-.2.21.21 0 00-.2.1l-2.07 3.5s-.2.27.12.27h1.28l-.33 2.24a.21.21 0 000 .03.2.2 0 00.21.2.21.21 0 00.19-.1l2.1-3.54c.09-.17 0-.24-.14-.24z" })] })));
}
exports.default = SolidQuickMessage;
