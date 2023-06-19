"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use brand/Flickr.svg instead.
 */
function BrandFlikr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 11.999 5.618", "data-icon-name": "BrandFlikr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.938.012a2.805 2.805 0 11-.267 5.603A2.805 2.805 0 012.938.012zm6.39-.009a2.805 2.805 0 11-.267 5.603A2.805 2.805 0 019.328.003z", fillRule: "evenodd", clipRule: "evenodd" }) })));
}
exports.default = BrandFlikr;
