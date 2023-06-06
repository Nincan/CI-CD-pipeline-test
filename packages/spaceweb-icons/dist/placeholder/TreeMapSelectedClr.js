"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderTreeMapSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 42 28", "data-icon-name": "PlaceholderTreeMapSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M21.205 1.899h18.824V13.5H21.205z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M21.206 14.498h10.495V26.1H21.206z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.97 1.899h18.235V26.1H1.97zM32.7 14.5h7.329v5.299H32.7z", fill: "#4CD2E0" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#87BD66", d: "M32.7 20.799h7.329v5.303H32.7z" }, void 0)] }), void 0));
}
exports.default = PlaceholderTreeMapSelectedClr;
