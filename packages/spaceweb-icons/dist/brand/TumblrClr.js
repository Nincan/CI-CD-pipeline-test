"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTumblrClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTumblrClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13 14H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z", fill: "#2d4d69" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.227 2.25v2.334h2.271v1.4H7.227l-.021 2.494c0 .569.03.932.088 1.094.06.162.167.29.327.385.211.13.453.195.724.195.483 0 1.13-.113 1.607-.435v1.4c-.407.199-.944.433-1.273.512a4.5 4.5 0 01-1.072.121c-.436 0-.821-.057-1.157-.17a2.457 2.457 0 01-.856-.483 1.758 1.758 0 01-.493-.669c-.091-.236-.136-.577-.136-1.026V5.964l-.916.02v-1.4c.374-.126.558-.312.825-.544.266-.234.48-.515.643-.843.161-.326.287-.441.348-.947h1.362z", fill: "#fff" })] })));
}
exports.default = BrandTumblrClr;
