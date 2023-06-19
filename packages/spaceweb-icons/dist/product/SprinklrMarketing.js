"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function ProductSprinklrMarketing(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrMarketing" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.65 0H1.612A1.615 1.615 0 0 0 0 1.613v10.995A1.616 1.616 0 0 0 .812 14l.64-1.486a2.963 2.963 0 0 1 5.357 0L7.45 14a1.609 1.609 0 0 0 .812-1.392V1.613A1.615 1.615 0 0 0 6.649 0ZM4.13 10.222A1.673 1.673 0 1 1 5.804 8.55a1.676 1.676 0 0 1-1.673 1.673Z" }), (0, jsx_runtime_1.jsx)("rect", { x: "9.593", y: "4.148", width: "1.662", height: "5.473", rx: ".746" }), (0, jsx_runtime_1.jsx)("rect", { x: "12.338", y: "2.077", width: "1.662", height: "9.615", rx: ".746" })] })));
}
exports.default = ProductSprinklrMarketing;
