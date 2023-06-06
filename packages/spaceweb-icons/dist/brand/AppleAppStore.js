"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandAppleAppStore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandAppleAppStore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.99 2.83v8.34A2.83 2.83 0 0111.17 14H2.83a2.82 2.82 0 01-2.82-2.83V2.83A2.82 2.82 0 012.83 0h8.33A2.83 2.83 0 0114 2.83zm-7.3-.1a.64.64 0 10-1.1.63l.65 1.13-2.08 3.6H2.54a.64.64 0 000 1.28h5.78a.87.87 0 00-.72-1.28H5.63l2.73-4.73a.64.64 0 10-1.1-.63l-.29.49zM3.26 9.65l-.46.79a.64.64 0 101.1.63l.62-1.06a1.09 1.09 0 00-1.26-.36zM7.9 4.85A1.76 1.76 0 007.69 7l2.35 4.07a.64.64 0 101.1-.63l-.62-1.08h.92a.64.64 0 000-1.27H9.78L7.91 4.85z" }, void 0) }), void 0));
}
exports.default = BrandAppleAppStore;
