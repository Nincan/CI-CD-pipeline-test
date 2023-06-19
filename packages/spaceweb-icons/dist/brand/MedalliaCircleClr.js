"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMedalliaCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMedalliaCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", rx: "7", fill: "#4153be" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M5.921 3.541 7 4.657l1.079-1.078L7 2.5 5.921 3.541z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M7.019 7.112 4.341 3.579H2.928V11.5h1.524V6.331l2.492 3.086h.112l2.492-3.124V11.5h1.524V3.579H9.659l-2.64 3.533z" })] })));
}
exports.default = BrandMedalliaCircleClr;
