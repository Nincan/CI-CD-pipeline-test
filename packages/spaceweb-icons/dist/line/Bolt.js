"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/LightningBolt.svg instead.
 */
function LineBolt(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineBolt" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.5 7c0-.2-.2-.4-.4-.5l-2-.9L11 1.3a.6.6 0 00-.5-.8l-.4.1-7.4 5.7a.6.6 0 00.2 1l2.2 1v.1l-2 4.3c0 .2 0 .5.2.7.2.2.6.2.8 0l7.2-5.8.2-.6zm-6.2 4l1.1-2.7c.1-.1.1-.3 0-.4 0-.2-.1-.3-.3-.3l-1.8-.9L8.9 3 7.7 5.7a.6.6 0 00.3.8l1.8.7L5.3 11z" }, void 0) }), void 0));
}
exports.default = LineBolt;
