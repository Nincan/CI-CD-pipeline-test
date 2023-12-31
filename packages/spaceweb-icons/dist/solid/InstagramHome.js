"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInstagramHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInstagramHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "m7.421.171 6.02 5.87a.596.596 0 0 1 .18.426v7.234a.3.3 0 0 1-.3.299H9.106a.3.3 0 0 1-.301-.3v-3.293a1.8 1.8 0 0 0-1.7-1.792L7 8.61a1.802 1.802 0 0 0-1.803 1.691l-.003.105v3.294a.3.3 0 0 1-.3.299H.68a.3.3 0 0 1-.296-.245L.379 13.7V6.467a.596.596 0 0 1 .18-.427L6.58.171a.604.604 0 0 1 .842 0Z", fillRule: "evenodd" }) })));
}
exports.default = SolidInstagramHome;
