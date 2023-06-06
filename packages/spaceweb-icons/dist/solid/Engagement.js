"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEngagement(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEngagement" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.25 7V1.15A.652.652 0 0 0 9.6.5H1.15a.652.652 0 0 0-.65.65v9.1l2.6-2.6h6.5c.358 0 .65-.292.65-.65zm2.6-3.9h-1.3v5.85H3.1v1.3c0 .358.292.65.65.65h7.15l2.6 2.6V3.75a.652.652 0 0 0-.65-.65z" }, void 0) }), void 0));
}
exports.default = SolidEngagement;
