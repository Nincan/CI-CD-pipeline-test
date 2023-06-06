"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTablet(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTablet" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.083 0H2.917a1.459 1.459 0 00-1.459 1.458v11.084A1.459 1.459 0 002.917 14h8.166a1.459 1.459 0 001.459-1.458V1.458A1.459 1.459 0 0011.083 0zM7 13.417a.875.875 0 11.875-.875.874.874 0 01-.875.875zm4.375-2.334h-8.75V1.75h8.75z" }, void 0) }), void 0));
}
exports.default = SolidTablet;
