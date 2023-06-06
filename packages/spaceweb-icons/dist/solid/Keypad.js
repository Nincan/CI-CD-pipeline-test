"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidKeypad(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidKeypad" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.192.097a1.189 1.189 0 10.534.43 1.189 1.189 0 00-.534-.43zM3.968.522a1.189 1.189 0 10.211.657 1.187 1.187 0 00-.21-.657zM2.764 7.748a1.188 1.188 0 10.69.072 1.19 1.19 0 00-.69-.072zm1.214-3.354a1.189 1.189 0 10.201.663 1.188 1.188 0 00-.201-.663zm2.671 3.353a1.188 1.188 0 10.688.075 1.188 1.188 0 00-.688-.075zm0 3.853a1.188 1.188 0 10.688.075 1.188 1.188 0 00-.688-.075zm1.208-7.204a1.189 1.189 0 10.2.66 1.19 1.19 0 00-.2-.66zm3.361 3.428a1.188 1.188 0 10.527.447 1.187 1.187 0 00-.527-.447zM7.847.524a1.189 1.189 0 10.21.655 1.19 1.19 0 00-.21-.655zm3.888 3.875a1.189 1.189 0 10.2.658 1.189 1.189 0 00-.2-.659z" }, void 0) }), void 0));
}
exports.default = SolidKeypad;
