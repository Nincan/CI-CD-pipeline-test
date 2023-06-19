"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSurveyCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSurveyCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", rx: "7", fill: "#5e96d2" }), (0, jsx_runtime_1.jsx)("path", { d: "m10.8 2.858-1.106.007v1.663H4.312v-.002h-.013V2.865L3.2 2.858a.2.2 0 0 0-.2.2v8.124a.2.2 0 0 0 .2.201h7.6a.2.2 0 0 0 .2-.2V3.058a.2.2 0 0 0-.2-.2ZM9.563 6.773l-.013.013-2.956 2.956a.377.377 0 0 1-.267.11l-.001.001a.377.377 0 0 1-.259-.102L4.71 8.472a.378.378 0 0 1 .519-.55l1.09 1.025 2.696-2.696a.378.378 0 0 1 .548.522Z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.254 2.264h3.492a.154.154 0 0 1 .154.154v1.16a.154.154 0 0 1-.154.154H5.254a.154.154 0 0 1-.154-.154v-1.16a.154.154 0 0 1 .154-.154Z", fill: "#fff" })] })));
}
exports.default = BrandSurveyCircleClr;
