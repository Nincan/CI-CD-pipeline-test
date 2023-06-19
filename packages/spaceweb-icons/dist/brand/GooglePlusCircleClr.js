"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGooglePlusCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGooglePlusCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 14a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7z", fill: "#cc5542" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.176 7.63V6.37h3.05c.213 1.525-.428 3.812-3.05 3.812a3.182 3.182 0 112.137-5.536 9.862 9.862 0 00-.696.706c-.062.07-.118.133-.208.222a1.798 1.798 0 00-1.233-.464 1.89 1.89 0 000 3.78 1.57 1.57 0 001.717-1.262l-1.717.002zm5.723-2.3v1.103H12v.787h-1.1v1.134h-.787V7.22H8.981v-.787h1.132V5.33z", fill: "#fff" })] })));
}
exports.default = BrandGooglePlusCircleClr;
