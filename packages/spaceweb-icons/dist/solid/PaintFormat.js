"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPaintFormat(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPaintFormat" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.85 1.4V.7a.702.702 0 00-.7-.7h-8.4a.702.702 0 00-.7.7v2.8a.702.702 0 00.7.7h8.4a.702.702 0 00.7-.7v-.7h.7v2.8h-6.3a.702.702 0 00-.7.7v7a.702.702 0 00.7.7h1.4a.702.702 0 00.7-.7V7h4.9a.702.702 0 00.7-.7V2.1a.702.702 0 00-.7-.7z" }, void 0) }), void 0));
}
exports.default = SolidPaintFormat;
