"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidScreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.25 1.361H.75a.75.75 0 00-.75.75v10.073a.75.75 0 00.75.751h12.5a.75.75 0 00.75-.75V2.111a.75.75 0 00-.75-.75zM9.556 7.496H2.129a.6.6 0 110-1.2h7.428a.6.6 0 110 1.2zM11.87 4.68H2.13a.6.6 0 110-1.199h9.742a.6.6 0 110 1.2z" }, void 0) }), void 0));
}
exports.default = SolidScreen;
