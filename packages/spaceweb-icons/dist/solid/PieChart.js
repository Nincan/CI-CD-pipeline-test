"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPieChart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPieChart" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.67 7.51H6.53V2.37a.465.465 0 00-.46-.46 6.026 6.026 0 10.07 12.05 6.066 6.066 0 005.99-5.99.465.465 0 00-.46-.46z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.93.04a.467.467 0 00-.46.47v5.6a.465.465 0 00.46.46h5.6a.467.467 0 00.47-.46A6.073 6.073 0 007.93.04z" }, void 0)] }), void 0));
}
exports.default = SolidPieChart;
