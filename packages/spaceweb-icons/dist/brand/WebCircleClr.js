"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandWebCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandWebCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#4C98D8", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M9.67 6.578c.057-.314.03-.853-.477-1.23a1.176 1.176 0 00-1.428.031v1.616h.746c.04 0 .11.038.056.095L7.36 8.717c-.025.035-.046.035-.07 0L6.081 7.09c-.038-.048-.035-.097.004-.095h.933V4.712c0-.017-.006-.076-.011-.143-.68-.403-1.48-.22-1.831.013-.474.315-1.018.919-.811 1.987a1.523 1.523 0 00-1.116 1.468c0 .84.744 1.631 1.57 1.631h4.535c.826 0 1.395-.791 1.395-1.631 0-.693-.416-1.248-1.08-1.46z" })] })));
}
exports.default = BrandWebCircleClr;
