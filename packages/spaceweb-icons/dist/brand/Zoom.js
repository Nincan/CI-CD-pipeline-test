"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandZoom(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandZoom" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.825 4.802A5.601 5.601 0 0 0 9.198.175a13.885 13.885 0 0 0-4.396 0A5.601 5.601 0 0 0 .175 4.802a13.881 13.881 0 0 0 0 4.396 5.601 5.601 0 0 0 4.627 4.627 13.885 13.885 0 0 0 4.396 0 5.601 5.601 0 0 0 4.627-4.627 13.886 13.886 0 0 0 0-4.396ZM8.5 8.75a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 8V5.25a.75.75 0 0 1 .75-.75H7A1.5 1.5 0 0 1 8.5 6Zm2.5 0a.375.375 0 0 1-.6.3l-1.1-.825a.75.75 0 0 1-.3-.6v-1.25a.75.75 0 0 1 .3-.6l1.1-.825a.375.375 0 0 1 .6.3Z" }, void 0) }), void 0));
}
exports.default = BrandZoom;
