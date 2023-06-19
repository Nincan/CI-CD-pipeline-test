"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddContent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddContent" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.12 6.002a.75.75 0 0 1-.004-1.5l5.302-.024h.004a.75.75 0 0 1 .004 1.5l-5.303.024h-.004z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.242 12.25H1.75V1.75h10.5v4.47A4.764 4.764 0 0 1 14 7.234V.514A.514.514 0 0 0 13.486 0H.514A.514.514 0 0 0 0 .514v12.972c0 .284.23.514.514.514h6.75a4.767 4.767 0 0 1-1.022-1.75z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.774 7.555c-1.773 0-3.215 1.437-3.215 3.203S9 13.96 10.774 13.96s3.215-1.437 3.215-3.202-1.442-3.203-3.215-3.203zm1.825 3.617c0 .075-.038.113-.114.113H11.16v1.32c0 .076-.038.114-.114.114h-.681c-.076 0-.114-.038-.114-.114v-1.32H8.926c-.076 0-.114-.038-.114-.113v-.679c0-.075.038-.113.114-.113h1.325V9.06c0-.076.038-.113.114-.113h.681c.076 0 .114.037.114.113v1.32h1.325c.076 0 .114.038.114.113v.679zM6.844 8.024l-2.728.012a.75.75 0 0 0 .003 1.5h.004l2.038-.01c.145-.543.37-1.053.683-1.502z" })] })));
}
exports.default = SolidAddContent;
