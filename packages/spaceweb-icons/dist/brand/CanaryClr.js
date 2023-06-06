"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandCanaryClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandCanaryClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.165 6.936a2.604 2.604 0 0 1 2.633-2.633A2.697 2.697 0 0 1 11.11 5.65L14 3.981a5.981 5.981 0 0 0-10.917 1.22L0 7l3.083 1.798A5.981 5.981 0 0 0 14 10.018l-2.89-1.67a2.673 2.673 0 0 1-2.312 1.35 2.848 2.848 0 0 1-2.633-2.762Z", fill: "#00076b", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = BrandCanaryClr;
