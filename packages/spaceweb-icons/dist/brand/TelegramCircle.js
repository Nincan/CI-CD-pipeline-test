"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTelegramCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTelegramCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.1 0 0 3.1 0 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3 6.9l-.5 3.2s0 .5-.4.5-.7-.1-1-.4c-.1-.1-1.5-1-2-1.4-.1 0-.1 0-.2-.1v-.2c0-.1 0-.1.1-.2s0-.1.1-.1c.7-.7 1.4-1.3 2.1-2 .2-.3.5-.8-.5-.2L4.8 8c-.1 0-.3.1-.4.1s-.4 0-.5-.1c-.6-.2-1.3-.4-1.3-.4s-.5-.3.3-.7L7.6 5l2-.8s.7-.3.7.4c0 .2-.1 1.2-.3 2.3z" }, void 0) }), void 0));
}
exports.default = BrandTelegramCircle;
