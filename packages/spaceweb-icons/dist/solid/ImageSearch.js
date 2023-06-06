"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImageSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidImageSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.383 3.148a1.188 1.188 0 0 0-.35.84 1.148 1.148 0 0 0 .35.84 1.164 1.164 0 0 0 .84.35 1.178 1.178 0 0 0 1.19-1.19 1.206 1.206 0 0 0-.35-.84 1.188 1.188 0 0 0-.84-.35 1.164 1.164 0 0 0-.84.35ZM13.843 12.718l-1.62-1.62a2.635 2.635 0 1 0-.96.96l1.62 1.62a.486.486 0 0 0 .46.13.947.947 0 0 0 .63-.63.486.486 0 0 0-.13-.46Zm-3.58-1.3a1.677 1.677 0 1 1 1.32-1.97 1.675 1.675 0 0 1-1.32 1.97Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.424 10.708a3.577 3.577 0 0 1-.066-.4 3.557 3.557 0 0 1 .436-2.35 3.61 3.61 0 0 1 3.994-1.705L9.163 4.628a.396.396 0 0 0-.15-.1.467.467 0 0 0-.17-.03.393.393 0 0 0-.18.04.651.651 0 0 0-.15.1l-3.81 3.81-1.52-1.52a.482.482 0 0 0-.32-.13.463.463 0 0 0-.32.13l-1.18 1.18v-6.58h10.54v5.208c.084.054.156.117.234.176a3.692 3.692 0 0 1 .355.309c.041.041.083.082.123.125a3.535 3.535 0 0 1 .289.363 3.627 3.627 0 0 1 .36.623V.858a.68.68 0 0 0-.68-.68H.693a.674.674 0 0 0-.68.68v10.12a.674.674 0 0 0 .68.68h6.153a4.424 4.424 0 0 1-.221-.412 3.615 3.615 0 0 1-.202-.538Z" }, void 0)] }), void 0));
}
exports.default = SolidImageSearch;
