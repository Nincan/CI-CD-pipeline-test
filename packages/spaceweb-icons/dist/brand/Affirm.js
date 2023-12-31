"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAffirm(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAffirm" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2.29 11.949a5.63 5.63 0 1 1 9.418 0h1.576A7 7 0 1 0 0 8.869a6.956 6.956 0 0 0 .715 3.08h1.574Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.093 5.543a5.075 5.075 0 0 0-2.845.994l.584 1.23a3.365 3.365 0 0 1 2.093-.87c.712 0 1.105.238 1.105.717 0 .323-.262.504-.753.55-1.847.17-3.282.746-3.282 2.164 0 1.125.81 1.803 2.144 1.803a2.256 2.256 0 0 0 1.97-1.15v.967h1.663V7.896c.001-1.673-1.163-2.353-2.678-2.353Zm-.485 5.29c-.54 0-.835-.232-.835-.61 0-.79.965-.98 2.223-.98a1.486 1.486 0 0 1-1.388 1.59Z" })] })));
}
exports.default = BrandAffirm;
