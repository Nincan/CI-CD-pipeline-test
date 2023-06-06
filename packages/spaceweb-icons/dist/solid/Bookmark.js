"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBookmark(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBookmark" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.579 0H2.8a1.553 1.553 0 00-1.548 1.556L1.245 14l5.445-2.333L12.134 14V1.556A1.56 1.56 0 0010.58 0z" }, void 0) }), void 0));
}
exports.default = SolidBookmark;
