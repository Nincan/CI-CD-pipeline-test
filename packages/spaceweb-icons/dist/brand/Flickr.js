"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandFlickr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandFlickr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.428 3.735a3.274 3.274 0 01-.311 6.54 3.274 3.274 0 01.311-6.54zM10.884 3.725a3.274 3.274 0 01-.311 6.54 3.274 3.274 0 01.311-6.54z" }, void 0) }), void 0));
}
exports.default = BrandFlickr;