"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSortAsc(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 16 13", "data-icon-name": "LineSortAsc" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.8 4.2a.65.65 0 01-.95 0l-1.54-1.6v9.49c0 .38-.3.7-.67.7a.69.69 0 01-.67-.7v-9.5L10.43 4.2a.65.65 0 01-.95 0 .72.72 0 010-.99L12.17.42a.67.67 0 01.47-.2.65.65 0 01.48.2l2.68 2.8c.27.27.27.7 0 .98zm-6.43 6.14H.7a.7.7 0 100 1.4h8.67a.7.7 0 000-1.4zM7.36 6.15H.7a.7.7 0 100 1.4h6.66a.7.7 0 100-1.4zM5.34 1.96H.7a.7.7 0 100 1.4h4.64a.7.7 0 000-1.4z" }, void 0) }), void 0));
}
exports.default = LineSortAsc;
