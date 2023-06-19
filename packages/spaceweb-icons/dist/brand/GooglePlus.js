"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGooglePlus(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGooglePlus" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.85 7.88l-2.404.002V6.118h4.27c.298 2.135-.599 5.337-4.27 5.337a4.455 4.455 0 112.993-7.75 13.796 13.796 0 00-.975.987c-.087.098-.166.187-.291.312a2.517 2.517 0 00-1.727-.65A2.607 2.607 0 001.85 7a2.607 2.607 0 002.597 2.646A2.2 2.2 0 006.85 7.88zm5.61-3.217v1.543H14V7.31h-1.54v1.588h-1.101V7.309H9.774V6.206h1.585V4.663z", fillRule: "evenodd" }) })));
}
exports.default = BrandGooglePlus;
