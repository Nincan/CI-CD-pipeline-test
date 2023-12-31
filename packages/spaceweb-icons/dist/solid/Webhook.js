"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWebhook(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidWebhook" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.727 10.244a1.375 1.375 0 102.492-.8L6.177 6.19a.544.544 0 00-.171-.74 2.044 2.044 0 112.228-3.427 2.05 2.05 0 01.838 2.32.547.547 0 00.36.684.56.56 0 00.162.025.544.544 0 00.52-.384 3.136 3.136 0 10-5.12 1.372l-1.71 2.843a1.376 1.376 0 00-1.557 1.361z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.12 8.076a3.168 3.168 0 00-2.27-.964 3.124 3.124 0 00-1.147.217L8.206 4.606a1.375 1.375 0 10-1.086.532q.065 0 .13-.006l1.794 3.25.097.098.12.071.147.041.14-.002.122-.03.098-.048a2.045 2.045 0 11-.307 3.229.546.546 0 10-.744.798 3.136 3.136 0 004.403-4.463z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.854 11.618a1.374 1.374 0 001.28-1.87 1.382 1.382 0 00-1.28-.877 1.375 1.375 0 00-1.268.845l-3.855.051a.565.565 0 00-.54.613 2.045 2.045 0 01-2.04 1.929l-.117-.003a2.044 2.044 0 01-.433-4.01.546.546 0 00-.293-1.053 3.136 3.136 0 00.839 6.158 3.138 3.138 0 003.082-2.55l3.371-.045a1.382 1.382 0 001.254.812z" })] })));
}
exports.default = SolidWebhook;
