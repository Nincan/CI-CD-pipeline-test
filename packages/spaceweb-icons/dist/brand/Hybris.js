"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandHybris(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandHybris" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.336.005v2.05L3.79 2.2a14.987 14.987 0 000 9.545l1.545.146V14a15.827 15.827 0 01-3.388-.322 18.63 18.63 0 010-13.409A15.894 15.894 0 015.336.005zm3.328 0v2.05l1.545.146a14.987 14.987 0 010 9.545l-1.545.146V14a15.826 15.826 0 003.388-.322 18.63 18.63 0 000-13.409A15.893 15.893 0 008.664.005z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.45 4.092a4.05 4.05 0 00-1.662-.212 13.602 13.602 0 01-.875 2.154 21.572 21.572 0 01-.759-2.184 4.823 4.823 0 00-1.604.273 18.258 18.258 0 002.538 6.37 5.356 5.356 0 001.954-.272 36.23 36.23 0 01-1.138-2.063A13.211 13.211 0 009.45 4.092z" }, void 0)] }), void 0));
}
exports.default = BrandHybris;
