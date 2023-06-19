"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStage" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { y: "9.603", width: "14", height: "3", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "2", y: "5.551", width: "10", height: "3", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "4", y: "1.397", width: "6", height: "3", rx: "1" })] })));
}
exports.default = SolidStage;
