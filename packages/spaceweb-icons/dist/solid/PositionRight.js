"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPositionRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPositionRight" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.289 1.083H.71a.7.7 0 00-.7.7v10.434a.7.7 0 00.7.7h12.58a.7.7 0 00.7-.7V1.783a.7.7 0 00-.7-.7zm-.7 10.433H1.411V2.484h11.176z" }), (0, jsx_runtime_1.jsx)("rect", { width: "3.177", height: "5.516", x: "8.408", y: "5.106", rx: ".7" })] })));
}
exports.default = SolidPositionRight;
