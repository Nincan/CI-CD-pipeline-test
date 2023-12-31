"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x3C(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3C" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.417 2.223H.587a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h4.186l.015.003.014-.003h8.615a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-4.61 8.55h-3.52v-3.34h3.52zm0-4.34h-3.52v-3.21h3.52zm-4.52-3.21v3.21h-3.2v-3.21zm-3.2 4.21h3.2v3.34h-3.2zm11.83 3.34h-3.11v-3.34h3.11z" }) })));
}
exports.default = SolidGrid2x3C;
