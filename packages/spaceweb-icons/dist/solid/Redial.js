"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRedial(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRedial" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.153 9.787a1.176 1.176 0 00-.991-.198s-1.148.681-1.385.794c-.237.114-.594-.198-.594-.198S4.071 7.176 3.817 6.809c-.252-.367.237-1.226.594-1.587.544-.549-.07-1.395-.07-1.395a24.095 24.095 0 00-1.63-2.063C1.865.82.741 2.248.361 2.806a1.87 1.87 0 00-.296 1.186 17.878 17.878 0 003.84 6.272 11.635 11.635 0 005.889 3.61 1.714 1.714 0 001.297-.057 13.84 13.84 0 001.322-1.515 1.027 1.027 0 00-.137-1.085s-1.603-1.067-2.123-1.43z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.752.872a.597.597 0 00-.426-.175.609.609 0 00-.425.175l-.237.242A4.037 4.037 0 009.892 0a4.054 4.054 0 00-3.14 1.495 4.053 4.053 0 003.13 6.607c.136 0 .275-.008.415-.022a4.065 4.065 0 003.232-2.286.605.605 0 00-.277-.805.599.599 0 00-.794.262 2.845 2.845 0 01-2.571 1.642 2.805 2.805 0 01-1.197-.266 2.845 2.845 0 011.2-5.422 2.81 2.81 0 011.918.769l-.665.666a.6.6 0 00.421 1.027h1.764a.601.601 0 00.599-.601V1.299a.601.601 0 00-.176-.427z" })] })));
}
exports.default = SolidRedial;
