"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidStyling(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidStyling" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .078a6.922 6.922 0 000 13.844 1.731 1.731 0 001.73-1.73 1.76 1.76 0 00-.443-1.157.365.365 0 01-.09-.228.343.343 0 01.347-.346h1.225a4.156 4.156 0 004.153-4.153c0-3.433-3.108-6.23-6.922-6.23zm3.807 7.614a1.038 1.038 0 111.038-1.038 1.037 1.037 0 01-1.038 1.038zM8.73 4.923a1.038 1.038 0 111.04-1.038 1.037 1.037 0 01-1.04 1.038zm-6.575 1.73a1.038 1.038 0 111.038 1.04 1.037 1.037 0 01-1.038-1.04zm4.153-2.768A1.038 1.038 0 115.27 2.847a1.037 1.037 0 011.038 1.038z" }, void 0) }), void 0));
}
exports.default = SolidStyling;
