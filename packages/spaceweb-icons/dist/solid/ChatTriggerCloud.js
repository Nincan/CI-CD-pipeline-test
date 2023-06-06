"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChatTriggerCloud(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChatTriggerCloud" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0A6.932 6.932 0 00.068 6.932c0 1.648.494 3.034 1.454 4.224L.505 13.633a.258.258 0 00.289.36l3.675-.634c.911.296 1.544.494 2.531.506h.078c3.793 0 6.854-3.13 6.854-6.933A6.932 6.932 0 007 0zM3.087 7.783a.782.782 0 110-1.565.782.782 0 010 1.565zm3.913 0a.782.782 0 110-1.565.782.782 0 010 1.565zm3.913 0a.782.782 0 110-1.565.782.782 0 010 1.565z" }, void 0) }), void 0));
}
exports.default = SolidChatTriggerCloud;
