"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCart" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.216 11.172a1.39 1.39 0 101.39 1.391 1.389 1.389 0 00-1.39-1.39zM.044.742a.697.697 0 00.695.695h.695l2.504 5.278-.939 1.697a1.393 1.393 0 001.217 2.065h7.649a.695.695 0 000-1.39h-7.65l.766-1.392h5.18a1.384 1.384 0 001.217-.716l2.49-4.513a.693.693 0 00-.605-1.029H2.97L2.505.443A.69.69 0 001.88.046H.74a.697.697 0 00-.695.696zm11.126 10.43a1.39 1.39 0 101.39 1.391 1.389 1.389 0 00-1.39-1.39z" }) })));
}
exports.default = SolidCart;
