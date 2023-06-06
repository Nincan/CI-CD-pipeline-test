"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProductCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProductCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.31 5.83a.34.34 0 000 .68.34.34 0 00.34-.34.33.33 0 00-.34-.34zm3.41 0a.34.34 0 00-.34.34.34.34 0 10.34-.34zm-.78-1.69A1.3 1.3 0 007 3.75a1.3 1.3 0 00-1.3 1.31v.04h2.61v-.04a1.3 1.3 0 00-.38-.92z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm3.4 9.67A1.4 1.4 0 019 11H4.96a1.37 1.37 0 01-1.37-1.37l.03-3.74a.79.79 0 01.78-.79h.56a2.06 2.06 0 114.12 0h.56a.79.79 0 01.8.79z" }, void 0)] }), void 0));
}
exports.default = SolidProductCircle;
