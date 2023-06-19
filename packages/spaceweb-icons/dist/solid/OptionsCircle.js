"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidOptionsCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidOptionsCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM3.399 8.08A1.08 1.08 0 114.479 7 1.08 1.08 0 013.4 8.08zM7 8.08A1.08 1.08 0 118.08 7 1.08 1.08 0 017 8.08zm3.601 0A1.08 1.08 0 1111.681 7a1.08 1.08 0 01-1.08 1.08z" }) })));
}
exports.default = SolidOptionsCircle;
