"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoImage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoImage" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M21.524 13.631a3.187 3.187 0 103.061 3.19 3.132 3.132 0 00-3.061-3.19z" }), (0, jsx_runtime_1.jsx)("path", { d: "M39.943 10.202a.992.992 0 00-.016-.112.984.984 0 00-.01-.115c-.002-.01-.008-.018-.01-.028a.993.993 0 00-.054-.138.824.824 0 00-.346-.428.999.999 0 00-.117-.079c-.008-.003-.013-.01-.02-.013a.997.997 0 00-.122-.039.985.985 0 00-.11-.04L4.297 1.753a1.021 1.021 0 00-.843.195L.388 4.365.38 4.37l-.004.003c-.005.004-.007.01-.012.015a1.005 1.005 0 00-.235.299c-.014.026-.028.05-.04.076a1.008 1.008 0 00-.085.38c0 .008-.005.015-.005.023l.057 24.64a1.018 1.018 0 00.805.993l34.83 7.446a1.031 1.031 0 00.213.023.707.707 0 00.438-.114 1 1 0 00.189-.102l3.077-2.405a1.017 1.017 0 00.391-.805zm-11.495 14.37a1.74 1.74 0 00-1.707-.813c-.715.124-1.125.622-1.726 1.34a4.412 4.412 0 00-.287.364l-5.694 6.623-6.582-15.074a2.48 2.48 0 00-2.827-1.541c-1.144.368-1.639 1.335-2.21 2.556L2.157 28.996l-.068-.015L2.04 6.424l32.793 7.02.029 12.46.023 10.088-.253-.054z" })] })));
}
exports.default = PlaceholderNoImage;
