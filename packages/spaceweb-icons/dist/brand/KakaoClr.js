"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandKakaoClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandKakaoClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.05 14H.912a.931.931 0 01-.931-.931V.931A.931.931 0 01.91 0H13.05a.931.931 0 01.93.931V13.07a.931.931 0 01-.93.931z", fill: "#f5c046", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.253 3.606v3.596a6.2 6.2 0 01-2.42 4.614.23.23 0 01-.265-.054l-1.195-1.34a.229.229 0 01.024-.333 3.624 3.624 0 001.4-2.347H5.085s-.452-.047-.452-.45V3.606a.455.455 0 01.452-.45H8.85a.478.478 0 01.403.45z", fill: "#fff", fillRule: "evenodd" })] })));
}
exports.default = BrandKakaoClr;
