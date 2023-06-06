"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMobile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMobile" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.928 0h-5.56a1.773 1.773 0 00-1.77 1.77v10.46A1.767 1.767 0 004.368 14h5.56a1.767 1.767 0 001.77-1.77V1.77A1.767 1.767 0 009.928 0zm-2.83 12.23a.43.43 0 110-.86.43.43 0 110 .86zm3.6-2.17h-7.09V3.49h7.09z" }, void 0) }), void 0));
}
exports.default = SolidMobile;
