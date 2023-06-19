"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSignalWire(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSignalWire" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "7.71", height: "2.199", x: ".059", y: "1.957", rx: "1.1", transform: "rotate(-45 3.914 3.057)" }), (0, jsx_runtime_1.jsx)("path", { d: "M2.888 5.927a1.3 1.3 0 01-1.21.346l3.407 3.406A1.1 1.1 0 006.64 8.124L3.665 5.149z" }), (0, jsx_runtime_1.jsx)("rect", { width: "7.71", height: "2.199", x: "6.231", y: "9.844", rx: "1.1", transform: "rotate(135 10.086 10.943)" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.112 8.073a1.3 1.3 0 011.21-.346L8.914 4.321A1.1 1.1 0 007.36 5.876l2.975 2.975z" })] })));
}
exports.default = BrandSignalWire;
