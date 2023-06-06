"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMedalliaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMedalliaClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#4153be", d: "M5.322 1.62 7 3.355l1.678-1.677L7 0 5.322 1.62z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#384044", d: "M7.029 7.174 2.864 1.678H.665V14h2.372V5.959l3.876 4.801h.174l3.876-4.859V14h2.372V1.678h-2.199L7.029 7.174z" }, void 0)] }), void 0));
}
exports.default = BrandMedalliaClr;
