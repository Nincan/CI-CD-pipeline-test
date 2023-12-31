"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFlipVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFlipVertical" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.017.551H10.33a.646.646 0 00-.654.639.646.646 0 00.654.639h2.363v1.14a.654.654 0 001.307 0V1.646a1.033 1.033 0 00-.983-1.095zM13.346 10.378a.646.646 0 00-.653.64v1.14H10.33a.64.64 0 100 1.277h2.687A1.033 1.033 0 0014 12.34v-1.323a.646.646 0 00-.654-.639zM13.346 5.241a.646.646 0 00-.653.64v2.225a.654.654 0 001.307 0V5.88a.646.646 0 00-.654-.639zM7.639.01a.7.7 0 00-.7.7v12.58a.7.7 0 001.4 0V.71a.7.7 0 00-.7-.7z" }), (0, jsx_runtime_1.jsx)("rect", { y: ".551", width: "5.336", height: "12.884", rx: ".999" })] })));
}
exports.default = SolidFlipVertical;
