"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Bot.svg instead.
 */
function LineBot(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineBot" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.7 7.55a.99.99 0 10-1.99 0 .99.99 0 001.98 0zm3.66-.99a.99.99 0 100 1.98.99.99 0 000-1.98zM8.25 10.1h-2.5a.5.5 0 100 1h2.5a.5.5 0 100-1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.16 7.06h-.31V5.73c0-.96-.78-1.73-1.73-1.73H7.59v-.49a1.55 1.55 0 10-1.3-.04V4h-3.3c-.95 0-1.72.77-1.72 1.73v1.33H.84A.84.84 0 000 7.9v1.66c0 .46.38.84.84.84h.43v1.33c0 .95.77 1.73 1.72 1.73h8.13c.95 0 1.73-.78 1.73-1.73V10.4h.31c.46 0 .84-.38.84-.84V7.9a.84.84 0 00-.84-.84zm-1.61 4.67c0 .24-.2.43-.43.43H2.99a.43.43 0 01-.43-.43v-6c0-.24.2-.43.43-.43h8.13c.23 0 .43.2.43.43v6z" })] }) })));
}
exports.default = LineBot;
