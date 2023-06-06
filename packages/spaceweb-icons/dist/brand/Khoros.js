"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandKhoros(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandKhoros" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.561 6.734a7.5 7.5 0 01-3.898 1.09.824.824 0 010-1.648A5.835 5.835 0 009.48.657h1.68a7.52 7.52 0 01-3.6 6.077m3.567 6.642H9.44a5.91 5.91 0 00-3.766-5.154c.033 0 .05-.021.11-.035a4.804 4.804 0 00.497-.145 2.856 2.856 0 00.755-.318c.203-.102.436-.26.63-.365a7.442 7.442 0 013.46 6.017M11.793.359V.027H8.85v.332a5.194 5.194 0 01-5.187 5.187A1.45 1.45 0 002.208 7a1.471 1.471 0 001.455 1.454 5.194 5.194 0 015.187 5.187v.332h2.942v-.332a8.154 8.154 0 00-3.467-6.674A7.946 7.946 0 0011.792.359" }, void 0) }), void 0));
}
exports.default = BrandKhoros;
