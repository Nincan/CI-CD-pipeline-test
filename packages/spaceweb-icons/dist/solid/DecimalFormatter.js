"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDecimalFormatter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDecimalFormatter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.518 8.094a.768.768 0 00-1.085 1.088l.986.985H2.084a.768.768 0 000 1.536H9.42l-.986.986a.77.77 0 000 1.087.769.769 0 001.085 0l2.32-2.32a.767.767 0 00-.036-1.077zM1.51 6.468a1.375 1.375 0 00-.083-.656H.115a1.37 1.37 0 00-.082.656 1.374 1.374 0 00.082.657h1.312a1.374 1.374 0 00.083-.657zm3.378 1.358c1.474 0 2.629-1.719 2.629-3.913S6.362 0 4.888 0 2.261 1.719 2.261 3.913s1.154 3.913 2.627 3.913zm0-6.425c.58 0 1.228 1.074 1.228 2.512s-.648 2.512-1.228 2.512S3.662 5.35 3.662 3.913 4.309 1.4 4.888 1.4zM11.34 0C9.866 0 8.71 1.719 8.71 3.913s1.155 3.913 2.629 3.913 2.627-1.719 2.627-3.913S12.813 0 11.34 0zm0 6.425c-.58 0-1.228-1.074-1.228-2.512S10.76 1.4 11.34 1.4s1.226 1.074 1.226 2.512-.647 2.512-1.226 2.512z" }) })));
}
exports.default = SolidDecimalFormatter;
