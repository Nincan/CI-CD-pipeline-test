"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandReviews(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandReviews" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.171 0H.83A.829.829 0 000 .829v9.531c0 .458.371.829.829.829h2.925V14l2.596-2.571a.829.829 0 01.583-.24h6.238A.829.829 0 0014 10.36V.83a.829.829 0 00-.829-.83zm-3.69 8.705c.01.06-.025.085-.079.057L7.355 7.666a.23.23 0 00-.194 0L5.113 8.76c-.053.028-.089.003-.079-.057l.392-2.321a.24.24 0 00-.06-.186L3.71 4.553c-.043-.042-.029-.084.03-.093l2.29-.337c.06-.009.13-.06.157-.115l1.026-2.11c.026-.055.07-.055.096 0l1.024 2.11a.234.234 0 00.157.115l2.289.339c.06.009.074.051.031.093L9.15 6.198a.24.24 0 00-.06.186l.391 2.321z" }, void 0) }), void 0));
}
exports.default = BrandReviews;
