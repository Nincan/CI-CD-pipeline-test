"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandKochavaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandKochavaClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { opacity: ".9", fill: "#D90B14", d: "M5.436 5.488L.6 5.464a.1.1 0 00-.058.18l3.926 2.821-1.059 4.599a.1.1 0 00.16.098L7 10.305l3.608 2.86a.1.1 0 00.158-.104L9.533 8.465l3.925-2.82a.1.1 0 00-.058-.18l-4.835.023L7.095.883a.1.1 0 00-.19 0l-1.47 4.605z" }, void 0) }), void 0));
}
exports.default = BrandKochavaClr;