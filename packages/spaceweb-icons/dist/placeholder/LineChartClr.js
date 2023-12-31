"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderLineChartClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 39 29", "data-icon-name": "PlaceholderLineChartClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M36.5 17.5c-.16 0-.32.03-.47.06l-3.54-3.97 1.13-.97c.32.19.7.3 1.1.3 1.22 0 2.21-.99 2.21-2.21s-1-2.21-2.22-2.21-2.21.99-2.21 2.21c0 .45.14.88.37 1.23l-1.05.9-5.72-6.42c.5-.41.82-1.01.82-1.7 0-1.22-.99-2.21-2.21-2.21s-2.21.98-2.21 2.2c0 .42.12.81.33 1.14l-4.38 3.5c-.41-.52-1.03-.86-1.73-.86-.47 0-.91.15-1.27.4L4.81 3.38c.07-.21.11-.43.11-.67a2.21 2.21 0 10-2.21 2.21c.63 0 1.19-.26 1.59-.68l10.47 5.44c-.17.31-.27.66-.27 1.03a2.21 2.21 0 004.42 0c0-.14-.02-.29-.04-.42l4.64-3.72a2.187 2.187 0 001.65.3l5.89 6.62-8.86 7.6a2.19 2.19 0 00-1.49-.59c-.91 0-1.7.56-2.04 1.35l-4.83-2.6c.04-.17.07-.35.07-.54 0-1.22-.99-2.21-2.21-2.21s-2.2.99-2.2 2.21c0 .27.06.54.15.78l-5.87 5.29c-.32-.17-.68-.28-1.07-.28a2.21 2.21 0 102.21 2.21c0-.47-.15-.9-.4-1.26l5.69-5.13c.39.37.92.6 1.5.6.67 0 1.27-.31 1.68-.78l5.13 2.76c.1 1.13 1.04 2.02 2.19 2.02 1.22 0 2.21-.99 2.21-2.21 0-.28-.06-.55-.15-.79l8.96-7.68 3.4 3.81c-.38.36-.63.88-.63 1.45 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z" }) })));
}
exports.default = PlaceholderLineChartClr;
