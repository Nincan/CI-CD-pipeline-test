"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEmailLink(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmailLink" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.2.4H.8a.8.8 0 0 0-.8.8v8.22a.8.8 0 0 0 .8.8h5.84a2.77 2.77 0 0 1 .43-.58l1.07-1.07.42-.42.42-.42 1.07-1.07a2.78 2.78 0 0 1 3.94 0l.01.02V1.2a.8.8 0 0 0-.8-.8Zm-.53 2.33L7.36 6.7a.58.58 0 0 1-.07.04.56.56 0 0 1-.06.03.6.6 0 0 1-.23.05.6.6 0 0 1-.23-.05.56.56 0 0 1-.06-.03.58.58 0 0 1-.07-.04L1.33 2.73a.6.6 0 0 1 .72-.96L7 5.47l4.95-3.7a.6.6 0 0 1 .72.96Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.28 7.37a1.78 1.78 0 0 0-2.52 0l-1.2 1.2.74.75 1.2-1.2a.73.73 0 0 1 1.04 0l.2.2a.73.73 0 0 1 0 1.02l-1.2 1.2.74.75 1.2-1.2a1.79 1.79 0 0 0 0-2.52ZM9.75 12.33a.73.73 0 0 1-1.03 0l-.2-.2a.73.73 0 0 1 0-1.04l1.2-1.2-.74-.74-1.2 1.2a1.78 1.78 0 0 0 0 2.52l.2.2a1.78 1.78 0 0 0 2.52 0l1.2-1.2-.74-.75Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.44 11.41a.42.42 0 0 0 .6 0l1.78-1.78a.42.42 0 0 0-.6-.6l-1.78 1.79a.42.42 0 0 0 0 .6Z" })] })));
}
exports.default = SolidEmailLink;
