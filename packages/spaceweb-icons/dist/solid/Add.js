"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAdd(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAdd" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.02 5.721H8.28V.98a.8.8 0 00-.8-.799h-.958a.8.8 0 00-.8.799v4.741H.98a.8.8 0 00-.8.8v.958a.8.8 0 00.8.8h4.74v4.74a.8.8 0 00.801.8h.957a.8.8 0 00.8-.8v-4.74h4.742a.8.8 0 00.8-.8v-.958a.8.8 0 00-.8-.8z" }) })));
}
exports.default = SolidAdd;
