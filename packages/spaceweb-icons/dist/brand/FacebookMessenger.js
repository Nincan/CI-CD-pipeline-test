"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandFacebookMessenger(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandFacebookMessenger" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a6.756 6.756 0 00-7 6.79 6.644 6.644 0 002.198 5.022.553.553 0 01.187.399l.039 1.246a.56.56 0 00.786.495l1.389-.612a.563.563 0 01.375-.028 7.655 7.655 0 002.026.27 6.756 6.756 0 007-6.79A6.758 6.758 0 007-.002zm4.205 5.225l-2.058 3.26a1.05 1.05 0 01-1.519.28L5.992 7.538a.42.42 0 00-.506.002L3.278 9.217a.332.332 0 01-.482-.441l2.057-3.262a1.05 1.05 0 011.519-.28L8.008 6.46a.42.42 0 00.506-.001l2.208-1.677a.333.333 0 01.483.443z" }, void 0) }), void 0));
}
exports.default = BrandFacebookMessenger;
