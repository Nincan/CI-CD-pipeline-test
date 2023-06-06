"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Rule.svg instead.
 */
function LineBranch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineBranch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.9 1.2H5.1a.13.13 0 00-.14.12v1.91a.13.13 0 00.13.13h3.82a.13.13 0 00.13-.13v-1.9a.13.13 0 00-.13-.14zm3.25 9.98a.8.8 0 10.8.8.8.8 0 00-.8-.8zm-5.15 0a.8.8 0 10.8.8.8.8 0 00-.8-.8zm-5.15 0a.8.8 0 10.8.8.8.8 0 00-.8-.8zm7.06-11a1.15 1.15 0 011.14 1.14v1.91a1.15 1.15 0 01-1.14 1.15H7.58v2.18h3.46a1.7 1.7 0 011.7 1.7v1.96a1.85 1.85 0 11-1.06-.04V8.25a.64.64 0 00-.64-.64H7.58v2.6a1.85 1.85 0 11-1.05-.03V7.61H3.08a.64.64 0 00-.65.64v1.97a1.85 1.85 0 11-1.05-.04V8.25a1.7 1.7 0 011.7-1.7h3.45V4.39H5.1a1.15 1.15 0 01-1.14-1.06V1.33A1.15 1.15 0 015.09.17z" }, void 0) }), void 0));
}
exports.default = LineBranch;
