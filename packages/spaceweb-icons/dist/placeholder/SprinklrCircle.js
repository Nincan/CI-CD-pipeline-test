"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderSprinklrCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderSprinklrCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0Zm-2.28 24.954a8.286 8.286 0 0 0-4.768-1.723 1.442 1.442 0 1 1-.047-2.882c1.85 0 4.391 2.78 4.866 4.439.063.22.046.247-.051.166Zm.333-3.141c-.017.13-.167.125-.204 0a8.182 8.182 0 0 0-4.03-4.71 1.615 1.615 0 0 1-1.169-1.641 1.516 1.516 0 0 1 1.608-1.428 1.617 1.617 0 0 1 .988.365 8.808 8.808 0 0 1 2.807 7.414Zm1.825 5.027c-2.151-6.522 1.608-13.702 4.404-13.766a2.307 2.307 0 0 1 2.483 2.236 2.114 2.114 0 0 1-1.237 2.033 12.094 12.094 0 0 0-5.486 9.47c-.01.134-.138.16-.164.027Zm7.17-3.609a8.286 8.286 0 0 0-4.768 1.723c-.097.08-.114.054-.051-.166.475-1.66 3.017-4.44 4.866-4.44a1.442 1.442 0 1 1-.047 2.883Z" }, void 0) }), void 0));
}
exports.default = PlaceholderSprinklrCircle;
