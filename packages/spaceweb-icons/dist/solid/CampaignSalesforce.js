"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCampaignSalesforce(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCampaignSalesforce" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7.02 7.02 0 0 0-7-7Zm0 12.25A5.25 5.25 0 1 1 12.25 7 5.265 5.265 0 0 1 7 12.25Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 2.917A4.083 4.083 0 1 0 11.083 7 4.095 4.095 0 0 0 7 2.917Zm0 6.416A2.333 2.333 0 1 1 9.333 7 2.34 2.34 0 0 1 7 9.333Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 5.833A1.167 1.167 0 1 0 8.167 7 1.17 1.17 0 0 0 7 5.833Z" })] })));
}
exports.default = SolidCampaignSalesforce;
