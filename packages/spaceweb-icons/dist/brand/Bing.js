"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandBing(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandBing" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.601 13.957l-3.167-2.22V.043l3.187.976v7.863L1.526 11.64l7.552-3.973-2.094-.947-1.417-3.072 6.999 2.145v3.42l-7.965 4.744z" }) })));
}
exports.default = BrandBing;
