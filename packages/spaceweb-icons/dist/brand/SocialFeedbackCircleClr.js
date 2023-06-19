"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSocialFeedbackCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSocialFeedbackCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#0828CC", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.697 8.737c0 1.008 1.166 1.825 2.603 1.825.433 0 .84-.074 1.198-.204.132-.046.623.138.86.41.088.101-.256-.71-.156-.784.436-.326.703-.764.703-1.247 0-1.007-1.166-1.824-2.604-1.824-1.438 0-2.604.817-2.604 1.824z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.944 8.276c0-1.113 1.253-2.017 2.796-2.017.529 0 1.023.106 1.446.291.037-.154.057-.311.057-.473 0-1.576-1.824-2.854-4.075-2.854-2.249 0-4.073 1.278-4.073 2.854 0 .754.417 1.44 1.099 1.95.158.118-.38 1.386-.243 1.228.37-.428 1.137-.717 1.343-.643.54.197 1.153.312 1.802.32a1.503 1.503 0 01-.152-.656z" })] }))] })));
}
exports.default = BrandSocialFeedbackCircleClr;
