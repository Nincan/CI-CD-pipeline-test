"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.32 7.504c-.07-.057-.125-.11-.198-.164a5.033 5.033 0 00-.311-.215 5.1 5.1 0 00-.49-.267c-.11-.053-.215-.109-.328-.154a5.002 5.002 0 00-.64-.2c-.085-.02-.166-.052-.253-.069a4.938 4.938 0 00-.958-.099h-.745a4.938 4.938 0 00-.958.1c-.087.016-.168.047-.254.069a5.026 5.026 0 00-.638.2c-.113.044-.22.1-.328.153a5.114 5.114 0 00-.49.267c-.108.068-.21.14-.311.215-.073.054-.129.107-.199.164.009.003-.009-.003 0 0a5.051 5.051 0 00-1.882 3.91v2.108a.502.502 0 00.501.501h9.863a.502.502 0 00.502-.501v-2.108a5.05 5.05 0 00-1.883-3.91c.009-.003-.008.003 0 0zM6.251 5.377A2.704 2.704 0 104.13 3.255a2.707 2.707 0 002.12 2.122z" }) })));
}
exports.default = SolidUser;
