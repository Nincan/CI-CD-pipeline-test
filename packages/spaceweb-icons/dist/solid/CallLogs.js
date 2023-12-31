"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCallLogs(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallLogs" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.036 9.542a1.245 1.245 0 00-1.049-.21s-1.215.72-1.466.84c-.25.12-.628-.21-.628-.21S4.598 6.777 4.329 6.39c-.266-.389.25-1.299.629-1.681.576-.58-.074-1.476-.074-1.476a25.51 25.51 0 00-1.725-2.184v-.001C2.262.048 1.072 1.56.67 2.15a1.98 1.98 0 00-.314 1.256 18.926 18.926 0 004.067 6.64 12.318 12.318 0 006.233 3.822 1.815 1.815 0 001.374-.061 14.652 14.652 0 001.4-1.604 1.088 1.088 0 00-.146-1.148s-1.697-1.13-2.248-1.513z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.09 4.782a.713.713 0 00.506-.21L9.7 2.47l.705.706a.408.408 0 00.577.005.41.41 0 00.122-.295V.459A.404.404 0 0010.7.046H8.266a.41.41 0 00-.41.405.404.404 0 00.121.296l.706.706L6.58 3.557a.718.718 0 00.51 1.225zm2.528-.072a.408.408 0 00-.7.289v2.427a.408.408 0 00.404.413h2.433a.411.411 0 00.29-.702l-.706-.706 2.104-2.104a.718.718 0 00-.51-1.224.71.71 0 00-.506.208l-2.104 2.103z" })] })));
}
exports.default = SolidCallLogs;
