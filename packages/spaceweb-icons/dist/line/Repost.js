"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Repost.svg instead.
 */
function LineRepost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineRepost" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.12 9.96h-3.1V3.85l1.8 1.8a.6.6 0 10.85-.84L3.85 1.98a.6.6 0 00-.2-.13.6.6 0 00-.14-.04.6.6 0 00-.08-.01h-.01a.55.55 0 00-.39.16L3 1.97.17 4.8a.6.6 0 10.85.85l1.8-1.8v6.71a.6.6 0 00.6.6h3.7a.6.6 0 000-1.2z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.77 7.3a.6.6 0 00-.85 0l-1.8 1.81V2.4a.6.6 0 00-.6-.6h-3.7a.6.6 0 000 1.2h3.1V9.1l-1.8-1.8a.6.6 0 00-.85.85l2.82 2.83a.57.57 0 00.06.03.6.6 0 00.14.1.6.6 0 00.46 0 .59.59 0 00.13-.1.56.56 0 00.06-.03l2.83-2.83a.6.6 0 000-.85z" }, void 0)] }), void 0));
}
exports.default = LineRepost;
