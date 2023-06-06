"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMarketoCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 24 24", "data-icon-name": "BrandMarketoCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#563e94", d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM8.4 14.9l-2.1.5V7.9l2.1.3v6.7zm4.3.9L10 17V6.5l2.8.8v8.5zm5 .1l-3.4 2.7V5.3l3.4 1.8v8.8z" }, void 0) }), void 0));
}
exports.default = BrandMarketoCircleClr;
