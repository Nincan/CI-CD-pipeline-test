"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTimeSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTimeSchedule" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.4 11.88v-6.9h9.65v.79a4.6 4.6 0 011.38.43V2.76a1.38 1.38 0 00-1.38-1.38h-.7V.69a.69.69 0 10-1.37 0v.69H3.46V.69a.69.69 0 00-1.38 0v.69h-.69A1.37 1.37 0 00.02 2.75v9.66a1.38 1.38 0 001.37 1.38H7.2a4.66 4.66 0 01-1.24-1.9z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.36 6.75A3.63 3.63 0 1014 10.37a3.63 3.63 0 00-3.63-3.62zm1.41 5.03a.4.4 0 01-.57 0l-1.12-1.12a.4.4 0 01-.12-.29v-1.6a.4.4 0 11.8 0v1.44l1.01 1a.4.4 0 010 .57z" }, void 0)] }), void 0));
}
exports.default = SolidTimeSchedule;
