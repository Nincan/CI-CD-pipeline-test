"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAudioWave(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAudioWave" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.234 2.63a.7.7 0 00-.7.7v7.312a.7.7 0 101.4 0V3.329a.7.7 0 00-.7-.7zM4.165.155a.7.7 0 00-.7.7v12.261a.7.7 0 101.4 0V.855a.7.7 0 00-.7-.7zm2.933 1.237a.7.7 0 00-.7.7v9.806a.7.7 0 001.4 0V2.092a.7.7 0 00-.7-.7zM10.03.155a.7.7 0 00-.7.7v12.261a.7.7 0 101.4 0V.855a.7.7 0 00-.7-.7zm2.932 2.475a.7.7 0 00-.7.7v7.312a.7.7 0 101.4 0V3.329a.7.7 0 00-.7-.7z" }) })));
}
exports.default = LineAudioWave;
