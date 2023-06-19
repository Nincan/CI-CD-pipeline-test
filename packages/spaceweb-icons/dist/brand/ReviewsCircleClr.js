"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandReviewsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandReviewsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40a3f5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.2 4H3.8c-.2 0-.4.2-.4.5v4.9c0 .2.2.4.4.4h1.5v1.5L6.7 10c0-.1.2-.2.3-.2h3.2c.2 0 .4-.2.4-.4V4.5c0-.3-.2-.5-.4-.5z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { fill: "#40a3f5", d: "M6.5 6.2s.1-.1 0 0L7.1 5h.1l.5 1.1.1.1 1.2.2-.9.9v.1l.2 1.2L7.2 8h-.1L6 8.6l.2-1.2v-.1l-.9-.9 1.2-.2z" })] })));
}
exports.default = BrandReviewsCircleClr;
