"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMessages(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMessages" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M3.253.134a.25.25 0 00-.25.25v7.813a1.283 1.283 0 00.25.012h4.63a.874.874 0 01.449.15l2.901 2.187c.11.083.2.038.2-.1V8.46a.25.25 0 01.25-.25h2.06a1.283 1.283 0 00.25-.012V.383a.25.25 0 00-.25-.25zm4.944 9.721a.874.874 0 00-.449-.15h-5.9a.25.25 0 01-.25-.25V4.421a.25.25 0 00-.25-.25H.257a.25.25 0 00-.25.25v6.745a.25.25 0 00.25.25h2.06a.25.25 0 01.25.249v2.013c0 .137.09.182.2.1L5.7 11.566a.874.874 0 01.45-.15h3.868c.137 0 .16-.068.05-.151zm3.548-5.684a.75.75 0 10-.75.75.75.75 0 00.75-.75zm-3.247-.749a.75.75 0 11-.75.75.75.75 0 01.75-.75zm-1.748.75A.75.75 0 106 4.92a.75.75 0 00.75-.75z" }) })));
}
exports.default = SolidMessages;
