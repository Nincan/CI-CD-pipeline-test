"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineCrop(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCrop" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.166 9.226h1.269V3.829a1.272 1.272 0 00-1.269-1.268H4.787v1.268h5.38zm-6.341.945V.658A.636.636 0 003.19.024a.636.636 0 00-.634.634v1.903H.654a.636.636 0 00-.635.634.636.636 0 00.635.634h1.902v6.342a1.272 1.272 0 001.269 1.268h6.342v1.903a.636.636 0 00.634.634.636.636 0 00.634-.634v-1.903h1.903a.636.636 0 00.634-.634.636.636 0 00-.634-.634z" }, void 0) }), void 0));
}
exports.default = LineCrop;
