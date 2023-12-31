"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAppleBusinessChatCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandAppleBusinessChatCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .1C3.2.1.1 3.2.1 7s3.1 6.9 6.9 6.9c3.8 0 6.9-3.1 6.9-6.9S10.8.1 7 .1zm2.8 9.4c-.8.7-1.8 1-2.8.9-.6 0-1.1-.1-1.7-.3-.4.3-.9.5-1.4.5-.3 0-.6-.1-.9-.2.3 0 .5-.1.7-.3.3-.1.4-.4.4-.7v-.1c-.4-.2-.7-.6-.9-1-.2-.5-.3-.9-.3-1.4 0-.5.1-1 .3-1.4.2-.4.5-.8.9-1.1.1-.1.2-.2.3-.2l.3-.3c.7-.4 1.5-.6 2.3-.6 1-.1 2 .3 2.8.9.8.7 1.3 1.6 1.3 2.6 0 1.1-.5 2.1-1.3 2.7z" }) })));
}
exports.default = BrandAppleBusinessChatCircle;
