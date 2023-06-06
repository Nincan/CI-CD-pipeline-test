"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductSprinklrSocial(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrSocial" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.32 3.484a1.51 1.51 0 1 0-2.247-.76l-1.52 1.002a5.275 5.275 0 1 0-.308 6.536l1.274.942a1.505 1.505 0 1 0 .428-.584l-1.269-.937a5.245 5.245 0 0 0 .247-5.342l1.536-1.008a1.507 1.507 0 0 0 1.848.156Zm-8.048.046a1.314 1.314 0 1 1-1.314 1.314A1.315 1.315 0 0 1 5.272 3.53ZM7.79 9.024a3.556 3.556 0 0 1-5.04 0v-.036a2.528 2.528 0 0 1 5.035.02v.016h.005Z" }, void 0) }), void 0));
}
exports.default = ProductSprinklrSocial;
