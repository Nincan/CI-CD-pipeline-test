"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandBingClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandBingClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#f4bd27", d: "M5.438 13.957l-3.167-2.22V.043l3.186.976v7.863L2.363 11.64l7.551-3.973-2.093-.947-1.417-3.072 6.999 2.145v3.42l-7.965 4.744z" }, void 0) }), void 0));
}
exports.default = BrandBingClr;
