"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandOkta(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandOkta" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 6.998 6.998 0 0 0-7-7Zm0 10.5A3.5 3.5 0 1 1 10.5 7 3.492 3.492 0 0 1 7 10.5Z", fill: "#337cbb" }, void 0) }), void 0));
}
exports.default = BrandOkta;
