"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNetwork(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNetwork" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.824 8.098h.823a.824.824 0 0 1 .824.824v1.647a.823.823 0 0 1-.824.823H.824A.824.824 0 0 1 0 10.568V8.922a.824.824 0 0 1 .824-.824Z" }), (0, jsx_runtime_1.jsx)("rect", { x: "3.843", y: "6.451", width: "2.471", height: "4.941", rx: ".824" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.51 4.53h.823a.824.824 0 0 1 .824.823v5.216a.823.823 0 0 1-.824.823H8.51a.824.824 0 0 1-.824-.823V5.353a.823.823 0 0 1 .824-.824Z" }), (0, jsx_runtime_1.jsx)("rect", { x: "11.529", y: "2.608", width: "2.471", height: "8.784", rx: ".824" })] })));
}
exports.default = SolidNetwork;
