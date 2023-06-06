"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandStripeSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandStripeSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#635bff", d: "M.011 0h13.997v13.997H.011z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.405 5.28c0-.365.299-.505.794-.505a5.214 5.214 0 012.319.598V3.177a6.165 6.165 0 00-2.319-.43c-1.897 0-3.16.99-3.16 2.645 0 2.58 3.553 2.169 3.553 3.281 0 .43-.374.57-.897.57a5.819 5.819 0 01-2.553-.747v2.225a6.48 6.48 0 002.553.532c1.944 0 3.28-.962 3.28-2.636-.009-2.786-3.57-2.29-3.57-3.337z", fill: "#fff", fillRule: "evenodd" }, void 0)] }), void 0));
}
exports.default = BrandStripeSquareClr;
