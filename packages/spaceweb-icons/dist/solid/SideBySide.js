"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSideBySide(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSideBySide" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { y: ".054", width: "11.643", height: "6.257", rx: ".703" }), (0, jsx_runtime_1.jsx)("rect", { y: "7.689", width: "14", height: "6.257", rx: ".703" })] })));
}
exports.default = SolidSideBySide;
