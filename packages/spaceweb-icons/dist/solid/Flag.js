"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFlag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFlag" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.141 1.647L8.944.66A.822.822 0 008.136 0H2.224A.826.826 0 001.4.824v12.352a.826.826 0 00.824.824.826.826 0 00.823-.824v-4.94H7.66l.197.988a.814.814 0 00.808.658h4.265a.826.826 0 00.824-.823V2.47a.826.826 0 00-.824-.824z" }, void 0) }), void 0));
}
exports.default = SolidFlag;
