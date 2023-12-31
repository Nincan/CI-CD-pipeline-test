"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFacebookClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFacebookClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 7a7 7 0 10-8.094 6.915V9.023H4.13V7h1.777V5.458A2.47 2.47 0 018.55 2.734a10.765 10.765 0 011.567.137v1.723h-.883a1.012 1.012 0 00-1.14 1.093V7h1.941l-.31 2.023H8.094v4.892A7.002 7.002 0 0014 7z", fill: "#3578e9" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.725 9.023L10.035 7H8.094V5.687a1.012 1.012 0 011.14-1.093h.883V2.87a10.765 10.765 0 00-1.567-.137 2.47 2.47 0 00-2.644 2.724V7H4.13v2.023h1.777v4.892a7.076 7.076 0 002.188 0V9.023z", fill: "#fff" })] })));
}
exports.default = BrandFacebookClr;
