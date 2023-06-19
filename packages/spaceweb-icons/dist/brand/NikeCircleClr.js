"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNikeCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNikeCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#010101" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.492 5.754l-2.598.69-2.446.65a3.495 3.495 0 01-.625.13 1.418 1.418 0 01-.428-.021.687.687 0 01-.54-.632 1.23 1.23 0 01.035-.378 2.227 2.227 0 01.25-.596l.01-.02-.003-.001-.025.027-.144.158a6.626 6.626 0 00-.555.688 2.612 2.612 0 00-.353.703 1.327 1.327 0 00-.064.55.77.77 0 00.296.528.926.926 0 00.519.19 1.875 1.875 0 00.51-.035 3.644 3.644 0 00.728-.222c.365-.153.73-.309 1.094-.465l4.825-2.065.022-.01a.032.032 0 00-.018 0z", fill: "#fff" })] })));
}
exports.default = BrandNikeCircleClr;
