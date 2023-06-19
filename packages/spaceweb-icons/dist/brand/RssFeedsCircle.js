"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRssFeedsCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRssFeedsCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM4.902 10.33a1.007 1.007 0 111.007-1.007 1.007 1.007 0 01-1.007 1.007zm2.529-.046a3.484 3.484 0 00-1.02-2.477 3.446 3.446 0 00-2.462-1.024V5.348a4.932 4.932 0 014.915 4.936zm2.532.002a6.034 6.034 0 00-6.012-6.044V2.809a7.47 7.47 0 017.446 7.477z" }) })));
}
exports.default = BrandRssFeedsCircle;
