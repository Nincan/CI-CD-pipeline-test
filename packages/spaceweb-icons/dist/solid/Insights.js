"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidInsights(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidInsights" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.45.017A6.996 6.996 0 0114 6.567l-1 .3a.14.14 0 000 .267l1 .299a6.996 6.996 0 01-6.55 6.55l-.3-1a.14.14 0 00-.267 0l-.3 1a6.996 6.996 0 01-6.549-6.55l1-.299a.14.14 0 000-.268l-1-.299a6.996 6.996 0 016.55-6.55l.299 1a.14.14 0 00.267 0zm3.431 3.225a.23.23 0 00-.311-.096L5.883 5.613a.768.768 0 00-.323.325l-2.397 4.607a.23.23 0 00.31.31l4.758-2.46a.768.768 0 00.333-.337l2.319-4.605a.23.23 0 00-.002-.21zm-3.864 2.71A1.047 1.047 0 115.97 7a1.047 1.047 0 011.047-1.047z" }, void 0) }), void 0));
}
exports.default = SolidInsights;
