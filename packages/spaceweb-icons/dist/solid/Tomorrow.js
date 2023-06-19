"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTomorrow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTomorrow" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.9 1.4h-.7V.7a.7.7 0 00-1.4 0v.7H4.2V.7a.7.7 0 00-1.4 0v.7h-.7A1.4 1.4 0 00.7 2.8v9.8A1.4 1.4 0 002.1 14h9.8a1.4 1.4 0 001.4-1.4V2.8a1.4 1.4 0 00-1.4-1.4zm0 11.2H2.1v-7h9.8z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.05 10.24a.63.63 0 00.45 1.06.62.62 0 00.44-.18l1.58-1.58a.41.41 0 00.08-.1.68.68 0 00.1-.34.6.6 0 00-.07-.28.61.61 0 00-.1-.17l-1.6-1.57a.63.63 0 00-.88 0 .63.63 0 000 .88l1.18 1.1z" })] })));
}
exports.default = SolidTomorrow;
