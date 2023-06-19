"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDoubleHeart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDoubleHeart" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.088 11.341l-.014-.006-.015.006zm4.204 1.671l-.009-.004-.009.004h.018zM5.607 8.838a3.245 3.245 0 011.75-2.816 2.614 2.614 0 011.283-.323 3.224 3.224 0 011.643.483 3.224 3.224 0 011.642-.483l.02.002a2.992 2.992 0 00.16-1.077 3.679 3.679 0 00-1.91-3.251c-2.13-1.205-4.107.802-4.107.802H6.06S4.083.168 1.951 1.373A3.679 3.679 0 00.042 4.624S-.25 6.539 2.66 9.142a14.65 14.65 0 003.414 2.193c.11-.043.223-.106.335-.158a3.558 3.558 0 01-.802-2.339z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.96 8.916a2.243 2.243 0 00-1.163-1.983 2.213 2.213 0 00-2.505.49h-.018a2.213 2.213 0 00-2.505-.49 2.243 2.243 0 00-1.164 1.983s-.18 1.168 1.596 2.755a8.937 8.937 0 002.082 1.337 8.938 8.938 0 002.081-1.337c1.776-1.587 1.597-2.755 1.597-2.755z" })] })));
}
exports.default = SolidDoubleHeart;
