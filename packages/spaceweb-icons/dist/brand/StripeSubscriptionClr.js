"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandStripeSubscriptionClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandStripeSubscriptionClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#8ebc5e", d: "M0 0h14v14H0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M7.001 6.85 8.215 4.9l-1.214-.275V6.85z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 3.236A3.764 3.764 0 1 0 10.764 7 3.768 3.768 0 0 0 7 3.236Zm0 6.627A2.863 2.863 0 1 1 9.864 7 2.866 2.866 0 0 1 7 9.863Z", fill: "#fff" }, void 0)] }), void 0));
}
exports.default = BrandStripeSubscriptionClr;
