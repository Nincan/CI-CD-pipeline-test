"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNetcore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNetcore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.38 3.37a3.6 3.6 0 00-3.11 1.78l-.05.08-.03.05c-.24.43-.65 1.33-.83 1.62a13.44 13.44 0 01-.78 1.24 2.75 2.75 0 01-.92.77 2.06 2.06 0 01-1.02.27 2.04 2.04 0 01-1.53-.65 2.15 2.15 0 010-3.06 2.06 2.06 0 011.53-.64 2.06 2.06 0 011.03.27 2.44 2.44 0 01.45.33 3.8 3.8 0 01.42.46l.29.42.8-1.36-.13-.17a3.28 3.28 0 00-1.12-.96 3.59 3.59 0 00-4.3.63A3.5 3.5 0 000 7a3.5 3.5 0 001.07 2.57 3.52 3.52 0 002.57 1.06 3.7 3.7 0 001.73-.44 4.68 4.68 0 00.73-.51 6.44 6.44 0 00.97-1.22 3.95 3.95 0 00.24.44 3.6 3.6 0 00.55.71V9.6a3.62 3.62 0 102.52-6.22m0 5.8A2.17 2.17 0 1112.55 7a2.18 2.18 0 01-2.17 2.17" }) })));
}
exports.default = BrandNetcore;
