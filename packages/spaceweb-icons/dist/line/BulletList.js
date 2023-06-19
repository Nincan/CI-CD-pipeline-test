"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineBulletList(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineBulletList" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.245 5.714A1.114 1.114 0 102.36 6.828a1.112 1.112 0 00-1.114-1.114zm0-4.455A1.114 1.114 0 102.36 2.373a1.112 1.112 0 00-1.114-1.114zm0 8.91a1.114 1.114 0 101.114 1.114 1.117 1.117 0 00-1.114-1.114zm2.97 1.857h8.91a.745.745 0 00.743-.743.745.745 0 00-.742-.742h-8.91a.745.745 0 00-.743.742.745.745 0 00.743.743zm0-4.455h8.91a.745.745 0 00.743-.743.745.745 0 00-.742-.742h-8.91a.745.745 0 00-.743.742.745.745 0 00.743.743zm-.742-5.198a.745.745 0 00.743.743h8.91a.745.745 0 00.742-.743.745.745 0 00-.742-.743h-8.91a.745.745 0 00-.743.743z" }) })));
}
exports.default = LineBulletList;
