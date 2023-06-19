"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineClearFormatting(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineClearFormatting" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.512 12.013H4.726L9.012 1.986h1.844a.96.96 0 000-1.919h-5.43a.96.96 0 100 1.919h1.786L2.924 12.013H1.082a.96.96 0 100 1.918h5.43a.96.96 0 000-1.918z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.164 11.204L13.668 9.7a.718.718 0 10-1.016-1.016l-1.504 1.503-1.503-1.503A.718.718 0 008.629 9.7l1.504 1.503-1.504 1.503a.718.718 0 001.016 1.015l1.503-1.503 1.504 1.503a.718.718 0 101.016-1.015z" })] })));
}
exports.default = LineClearFormatting;
