"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGif(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGif" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.985 0H2.002A2.002 2.002 0 000 2.002v9.983a2.002 2.002 0 002.002 2.002h9.983a2.002 2.002 0 002.002-2.002V2.002A2.002 2.002 0 0011.985 0zM6.07 8.184a1.714 1.714 0 01-1.567.697 1.793 1.793 0 01-1.988-1.873 1.847 1.847 0 011.994-1.889 1.84 1.84 0 011.43.575l-.598.58a1.22 1.22 0 00-.833-.31.919.919 0 00-.978 1.044.943.943 0 00.978 1.023 1.29 1.29 0 00.702-.183V7.39h-.92V6.6h1.78zm1.744.601H6.789V5.221h1.025zm3.671-2.719H9.71v.667h1.665v.824H9.71v1.227H8.69V5.22h2.795z" }, void 0) }), void 0));
}
exports.default = SolidGif;
