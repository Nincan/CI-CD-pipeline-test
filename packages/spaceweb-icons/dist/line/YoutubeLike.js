"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineYoutubeLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.264 5.834h-3.29l1.182-3.842A1.28 1.28 0 008.85.39a1.621 1.621 0 00-1.182.505L3.11 5.834H0v7.776h11.222a1.695 1.695 0 001.703-1.251l1.042-4.667a1.612 1.612 0 00-1.703-1.858zM3.11 12.833H.778V6.61H3.11zm10.094-5.304l-1.042 4.666a.92.92 0 01-.941.638H3.888V6.137l4.355-4.713a.823.823 0 01.607-.257.588.588 0 01.49.234.416.416 0 01.07.366l-1.182 3.84-.311 1.004h4.347a1.023 1.023 0 01.8.358.659.659 0 01.14.56z" }, void 0) }), void 0));
}
exports.default = LineYoutubeLike;
