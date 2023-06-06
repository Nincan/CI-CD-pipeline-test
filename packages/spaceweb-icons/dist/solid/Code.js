"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCode(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCode" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.629 9.37a.78.78 0 001.098.124l2.846-2.272a.78.78 0 00-.006-1.226L10.721 3.77A.781.781 0 009.759 5l2.066 1.617-2.072 1.656a.78.78 0 00-.124 1.097zM7.13 1.417l-2.143 10.11a.783.783 0 00.603.926.844.844 0 00.163.017.782.782 0 00.764-.62L8.66 1.74a.783.783 0 00-.603-.927.792.792 0 00-.927.604zM4.188 3.825a.78.78 0 00-1.1-.117L.34 5.935a.783.783 0 00-.007 1.21l2.748 2.273a.783.783 0 00.997-1.207L2.067 6.55l2.005-1.625a.782.782 0 00.116-1.1z" }, void 0) }), void 0));
}
exports.default = SolidCode;
