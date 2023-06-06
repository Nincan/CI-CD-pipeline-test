"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandUnderArmour(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandUnderArmour" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.2 8c-.5-.4-1-.7-1.6-.9-.1 0-.1 0-.2-.1.1 0 .1-.1.2-.1.6-.2 1.2-.6 1.7-1 .3-.3.6-.7.7-1.1 0-.2 0-.2-.1-.2l-.1-.1c-.8-.3-1.6-.6-2.4-.8-.3-.1-.7-.1-1-.2v2c0 .4-.1.7-.4.9 0 0-.1.1-.1 0-.7.1-1.3 0-1.9-.1-.8-.1-1.6-.1-2.5 0-.4.1-.8.2-1.3.3h-.1c-.2-.3-.4-.6-.4-.9V3.6h-.1c-.6.1-1.2.2-1.8.4-.6.2-1.2.4-1.7.6-.1.1-.1.1-.1.2.1.4.3.8.6 1.1.5.4 1 .8 1.6 1 .1 0 .2.1.4.1-.2.1-.4.1-.5.2-.6.2-1.1.6-1.5 1-.3.2-.5.5-.6.9 0 .3 0 .2.2.3 1.1.5 2.2.8 3.3.9h.2V8.4c0-.4.1-.7.4-.9h.1c.9.1 1.8.2 2.7.2 1 0 1.9-.1 2.8-.2h.1c.2.2.4.5.4.8v2.1h.2c.9-.1 1.7-.3 2.5-.6.3-.1.7-.3 1-.4.1-.1.1-.1.1-.2s0-.2-.1-.3c-.1-.4-.4-.7-.7-.9zM4.8 7c1.4-.6 3-.6 4.4 0-1.4.6-3 .6-4.4 0z" }, void 0) }), void 0));
}
exports.default = BrandUnderArmour;
