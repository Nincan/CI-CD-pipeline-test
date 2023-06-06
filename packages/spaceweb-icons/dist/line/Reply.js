"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Reply.svg instead.
 */
function LineReply(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineReply" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.84 12.43c-.06-.14-1.59-3.46-6.83-3.09v2.25a.6.6 0 01-1.03.42L.18 7.1a.6.6 0 010-.85l4.8-4.86a.6.6 0 011.03.43v2.1a9.13 9.13 0 015.68 2.26A8.04 8.04 0 0114 12.19a.6.6 0 01-.48.6.59.59 0 01-.12 0 .6.6 0 01-.56-.36zm-7.4-7.32a.64.64 0 01-.45-.17.6.6 0 01-.18-.44V3.28L1.45 6.67l3.36 3.44V8.79a.6.6 0 01.53-.6c3.72-.42 5.96.77 7.22 1.92a6.06 6.06 0 00-1.7-3.06 8.22 8.22 0 00-5.33-1.94h-.1z" }, void 0) }), void 0));
}
exports.default = LineReply;
