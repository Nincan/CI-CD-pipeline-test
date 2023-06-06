"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidComment" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.891 1.149A1.23 1.23 0 0012.66.43H1.27A1.2 1.2 0 00.01 1.8v7.4a1.1 1.1 0 001.18 1.18q.04.002.08 0h3.59a1 1 0 01.67.16l4.54 2.77a.8.8 0 00.3.04c.66 0 .68-.72.68-.72v-2.25h1.58A1.3 1.3 0 0014 9.16V1.64a1.23 1.23 0 00-.109-.491zm-2.716 6.158h-8.35a.744.744 0 010-1.485h8.35a.744.744 0 010 1.485zm0-2.873h-8.35a.722.722 0 01-.695-.743.722.722 0 01.695-.742h8.35a.722.722 0 01.695.742.722.722 0 01-.695.743z" }, void 0) }), void 0));
}
exports.default = SolidComment;
