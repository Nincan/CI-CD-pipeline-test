"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTelegramSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTelegramSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "telegramSquare_clr_a", x1: "9.705", x2: "5.109", y1: ".688", y2: "11.413", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#37aee2" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#1e96c8" })] })) }), (0, jsx_runtime_1.jsx)("path", { fill: "url(#telegramSquare_clr_a)", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M2.913 6.94l4.714-1.943c.466-.202 2.044-.85 2.044-.85s.728-.283.668.405c-.02.283-.182 1.275-.344 2.347l-.507 3.176s-.04.466-.384.547a1.665 1.665 0 01-1.011-.364c-.081-.061-1.518-.971-2.044-1.417a.383.383 0 01.02-.647 78.034 78.034 0 002.124-2.023c.243-.243.486-.81-.526-.122L4.816 7.971a1.188 1.188 0 01-.93.02c-.607-.182-1.317-.425-1.317-.425s-.485-.303.344-.627z" })] })));
}
exports.default = BrandTelegramSquareClr;
