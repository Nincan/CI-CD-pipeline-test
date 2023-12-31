"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLockReset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLockReset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.74 11.37a1.54 1.54 0 0 1-.4-1.02V9.12a1.53 1.53 0 0 1 1.54-1.53 1.56 1.56 0 0 1 .4.05 3.95 3.95 0 0 1 1.98-.54l.4.02a3.97 3.97 0 0 1 .83.19V6a1.34 1.34 0 0 0-1.34-1.33H9.5V3.33a3.33 3.33 0 0 0-6.67 0v1.34h-.67A1.34 1.34 0 0 0 .82 6v6.67A1.34 1.34 0 0 0 2.15 14h5.57a3.9 3.9 0 0 1-1-1.29 1.52 1.52 0 0 1 .02-1.34ZM4.15 3.33a2 2 0 1 1 4 0v1.34h-4Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.53 9.18a2.9 2.9 0 0 0-1.97-1.06 2.97 2.97 0 0 0-.3-.02 2.93 2.93 0 0 0-1.93.74l-.08-.1a.55.55 0 0 0-.37-.15.53.53 0 0 0-.38.15.54.54 0 0 0-.16.38v1.22a.53.53 0 0 0 .53.54H9.1a.53.53 0 0 0 .37-.91l-.38-.39a1.95 1.95 0 0 1 1.17-.41 1.86 1.86 0 0 1 .78 3.54 1.84 1.84 0 0 1-.78.17 1.86 1.86 0 0 1-1.68-1.07.53.53 0 0 0-.47-.29.52.52 0 0 0-.24.06.53.53 0 0 0-.24.7 2.93 2.93 0 0 0 2.34 1.66 2.93 2.93 0 0 0 2.56-4.76Z" })] })));
}
exports.default = SolidLockReset;
