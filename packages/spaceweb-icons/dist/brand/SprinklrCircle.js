"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandSprinklrCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandSprinklrCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM5.531 10.015a4.915 4.915 0 00-2.851-1 .886.886 0 11-.029-1.77c1.126 0 2.672 1.687 2.978 2.708.02.068-.048.102-.098.063zm.276-1.872c-.01.08-.103.077-.125 0a5.022 5.022 0 00-2.47-2.893.992.992 0 01-.717-1.008.93.93 0 01.986-.877.99.99 0 01.605.224 5.417 5.417 0 011.721 4.554zm1.098 3.025C5.63 7.178 7.92 2.814 9.625 2.775a1.416 1.416 0 011.522 1.374 1.299 1.299 0 01-.758 1.249 7.427 7.427 0 00-3.36 5.769c-.01.08-.1.075-.124 0zm4.415-2.153a5.101 5.101 0 00-2.85 1c-.05.04-.118.006-.099-.062.305-1.022 1.851-2.709 2.978-2.709a.886.886 0 11-.029 1.77z" }, void 0) }), void 0));
}
exports.default = BrandSprinklrCircle;
