"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGlassdoor(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGlassdoor" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.042 0H3.959a1.973 1.973 0 0 0-1.962 1.984v3.973c0 1.378.002 2.757-.003 4.136 0 .149.036.2.192.197.522-.01 1.045-.004 1.568-.004.249 0 .249 0 .249-.245v-7.8c0-.236 0-.236.244-.236Q8.021 2 11.795 2.01c.19 0 .217-.058.201-.226A1.996 1.996 0 0 0 10.042 0Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.777 11.997c-2.528-.006-5.056-.002-7.584-.008-.178 0-.207.052-.194.215a2.004 2.004 0 0 0 1.965 1.794h5.961q.083.004.166 0a1.994 1.994 0 0 0 1.911-2.074v-3.9c0-1.366-.003-2.733.004-4.1.001-.18-.054-.225-.226-.222q-.785.015-1.568 0c-.174-.003-.226.046-.226.225.006 2.617.002 5.235.008 7.853 0 .176-.041.218-.217.217Z" })] })));
}
exports.default = BrandGlassdoor;
