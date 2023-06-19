"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserKey(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserKey" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.71 8.283a3.35 3.35 0 0 1 2.19.821 4.875 4.875 0 0 0-1.433-1.948A1.116 1.116 0 0 0 8.28 7a4.756 4.756 0 0 0-.293-.202 4.805 4.805 0 0 0-.462-.252c-.103-.05-.202-.103-.309-.145a4.708 4.708 0 0 0-.603-.188c-.08-.02-.156-.05-.238-.066a4.654 4.654 0 0 0-.903-.093H4.77a4.653 4.653 0 0 0-.903.093c-.083.016-.159.046-.24.066a4.729 4.729 0 0 0-.602.188c-.106.042-.206.095-.308.145a4.823 4.823 0 0 0-.463.252c-.1.063-.197.131-.292.202a1.096 1.096 0 0 0-.188.155A4.76 4.76 0 0 0 0 10.84v2.442A.717.717 0 0 0 .717 14h4.607a3.355 3.355 0 0 1 2.387-5.717Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.932 10.855a2.358 2.358 0 1 0 0 1.573h1.71V14h1.572v-1.572H14v-1.573ZM7.71 12.428a.786.786 0 1 1 .786-.787.789.789 0 0 1-.786.787ZM5.13 5.304A2.652 2.652 0 1 0 2.48 2.652 2.654 2.654 0 0 0 5.13 5.304Z" })] })));
}
exports.default = SolidUserKey;
