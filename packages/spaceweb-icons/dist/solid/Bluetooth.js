"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBluetooth(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBluetooth" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.1 3.37L7.987.256a.726.726 0 00-1.241.507V5.25L3.923 2.426A.723.723 0 002.9 3.449l3.55 3.548-3.55 3.548a.723.723 0 101.024 1.023l2.822-2.822v4.484a.728.728 0 001.24.515l3.114-3.12a.723.723 0 000-1.023L8.495 6.997 11.1 4.4a.731.731 0 000-1.03zm-2.903-.85l1.364 1.364L8.197 5.25zm1.364 7.59l-1.364 1.364V8.746z" }, void 0) }), void 0));
}
exports.default = SolidBluetooth;
