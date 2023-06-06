"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidConfirmMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidConfirmMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h9.15a1.55 1.55 0 001.54-1.54v-7.7A1.55 1.55 0 0012.4 0zm-2.13 3.96L6.42 7.8a.67.67 0 01-.14.09.7.7 0 01-.1.06.69.69 0 01-.51 0 .73.73 0 01-.07-.05.67.67 0 01-.16-.1L3.73 6.06a.7.7 0 01.99-.98l1.21 1.24L9.3 2.98a.7.7 0 11.98.98z" }, void 0) }), void 0));
}
exports.default = SolidConfirmMessage;
