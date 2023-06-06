"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandStripeCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandStripeCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: ".003", width: "13.997", height: "13.997", rx: "6.998", fill: "#635bff" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.397 5.28c0-.365.3-.505.795-.505a5.214 5.214 0 012.318.598V3.177a6.165 6.165 0 00-2.318-.43c-1.898 0-3.16.99-3.16 2.645 0 2.58 3.552 2.169 3.552 3.281 0 .43-.374.57-.897.57a5.819 5.819 0 01-2.552-.747v2.225a6.48 6.48 0 002.552.532c1.944 0 3.281-.962 3.281-2.636-.01-2.786-3.571-2.29-3.571-3.337z", fill: "#fff", fillRule: "evenodd" }, void 0)] }), void 0));
}
exports.default = BrandStripeCircleClr;
