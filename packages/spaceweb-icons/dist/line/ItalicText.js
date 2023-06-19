"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineItalicText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineItalicText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.683 12.055L6.405 1.453A1.879 1.879 0 016.948.28a1.078 1.078 0 01.948-.239 1.192 1.192 0 01.838.588 1.965 1.965 0 01.143 1.31L7.156 12.543a1.874 1.874 0 01-.548 1.18 1.11 1.11 0 01-.971.235 1.155 1.155 0 01-.809-.59 1.974 1.974 0 01-.145-1.312z" }) })));
}
exports.default = LineItalicText;
