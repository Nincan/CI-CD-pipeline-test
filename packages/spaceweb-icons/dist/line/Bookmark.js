"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Bookmark.svg instead.
 */
function LineBookmark(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineBookmark" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.752 11.672L6.863 9.976l-3.889 1.696V1.56h7.778v10.11zm0-11.667H2.974c-.855 0-1.548.7-1.548 1.556L1.42 14.005l5.444-2.333 5.444 2.333V1.561c0-.856-.7-1.556-1.555-1.556z" }, void 0) }), void 0));
}
exports.default = LineBookmark;
