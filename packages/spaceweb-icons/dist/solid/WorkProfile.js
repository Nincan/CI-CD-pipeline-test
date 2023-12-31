"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWorkProfile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidWorkProfile" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.954 7.486a1.632 1.632 0 01.15-.52 4.59 4.59 0 00-.33-.3l.022-.009c-.06-.05-.13-.087-.193-.133a4.346 4.346 0 00-.268-.186 4.396 4.396 0 00-.424-.23c-.094-.046-.185-.094-.282-.133a4.31 4.31 0 00-.552-.172c-.074-.019-.144-.046-.219-.06a4.265 4.265 0 00-.827-.086h-.643a4.264 4.264 0 00-.828.086c-.075.014-.145.041-.219.06a4.334 4.334 0 00-.551.172c-.098.039-.19.087-.283.133a4.412 4.412 0 00-.424.23c-.092.059-.18.12-.268.186-.063.046-.133.084-.193.133l.022.008a4.36 4.36 0 00-1.625 3.376v2.237a.657.657 0 00.657.657h5.07l.003-3.81a1.638 1.638 0 011.634-1.64z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.254 8.392h-1.471V7.66a.73.73 0 00-.728-.733H9.584a.73.73 0 00-.733.728v.738H7.385a.727.727 0 00-.73.725v.008l-.003 4.031a.73.73 0 00.728.733h5.869a.73.73 0 00.733-.728V9.125a.73.73 0 00-.728-.733zm-2.204 0H9.584V7.66h1.466zM4.718 4.969a2.43 2.43 0 10-2.429-2.43 2.431 2.431 0 002.43 2.43z" })] })));
}
exports.default = SolidWorkProfile;
