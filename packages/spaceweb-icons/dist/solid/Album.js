"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAlbum(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 15.68 15.53", "data-icon-name": "SolidAlbum" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.04 0c.96 0 1.74.78 1.74 1.74v9.3c0 .96-.78 1.74-1.74 1.74h-9.3C.78 12.78 0 12 0 11.04v-9.3C0 .78.78 0 1.74 0h9.3zm3.19 2.75c.8.03 1.45.68 1.45 1.49v7.9a3.38 3.38 0 01-3.39 3.39H4.4A1.5 1.5 0 012.9 14.2l.05.01h8.96a2.33 2.33 0 002.33-2.33V2.92l-.02-.17zM1.74 11.1h9.29c.25 0 .4-.3.25-.5L8.16 6.45a.31.31 0 00-.5.01l-2.01 2.9a.24.24 0 01-.38.02L3.93 7.86a.31.31 0 00-.48.03l-1.96 2.72c-.15.21 0 .5.25.5zM4.03 2a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3z" }, void 0) }), void 0));
}
exports.default = SolidAlbum;
