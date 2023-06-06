"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandKakao(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandKakao" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.069 0H.931A.931.931 0 000 .931V13.07A.931.931 0 00.931 14H13.07a.931.931 0 00.931-.931V.931A.931.931 0 0013.069 0zM9.272 7.202a6.2 6.2 0 01-2.42 4.614.23.23 0 01-.264-.054l-1.196-1.34a.229.229 0 01.024-.333 3.624 3.624 0 001.4-2.347H5.104s-.452-.047-.452-.45V3.606a.455.455 0 01.452-.45H8.87a.478.478 0 01.403.45z" }, void 0) }), void 0));
}
exports.default = BrandKakao;
