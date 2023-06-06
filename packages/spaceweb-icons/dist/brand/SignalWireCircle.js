"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandSignalWireCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandSignalWireCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm-.259 8.925a.79.79 0 01-1.117 0L3.177 6.477a.934.934 0 00.869-.248l.558-.559 2.137 2.137a.79.79 0 010 1.118zm0-5.6l-2.799 2.8a.79.79 0 01-1.117-1.117l2.8-2.8A.79.79 0 016.74 3.327zm.518 1.75a.79.79 0 011.117 0l2.447 2.447a.934.934 0 00-.869.249l-.558.559-2.137-2.137a.79.79 0 010-1.118zm3.916 3.917l-2.8 2.8a.79.79 0 01-1.116-1.118l2.799-2.8a.79.79 0 011.117 1.118z" }, void 0) }), void 0));
}
exports.default = BrandSignalWireCircle;
