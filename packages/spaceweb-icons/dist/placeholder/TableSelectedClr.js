"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderTableSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 29", "data-icon-name": "PlaceholderTableSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 9h38v6H0zm0-9h10v8H0z", fill: "#40A3F5" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 16h38v6H0zM11 0h10v8H11z", fill: "#4CD2E0" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 23h38v6H0zM22 0h16v8H22z", fill: "#CBD756" })] })));
}
exports.default = PlaceholderTableSelectedClr;
