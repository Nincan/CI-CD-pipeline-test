"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMedium(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMedium" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.948 3.024A3.976 3.976 0 1 1 0 7a3.962 3.962 0 0 1 3.948-3.976Zm6.306.233c1.09 0 1.974 1.676 1.974 3.743s-.884 3.743-1.974 3.743S8.28 9.067 8.28 7s.884-3.743 1.974-3.743Zm3.052.39C13.689 3.647 14 5.148 14 7c0 1.851-.31 3.353-.694 3.353S12.61 8.852 12.61 7s.311-3.353.695-3.353Z" }) })));
}
exports.default = BrandMedium;
