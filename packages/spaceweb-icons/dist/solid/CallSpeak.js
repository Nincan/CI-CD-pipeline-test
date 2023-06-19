"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCallSpeak(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallSpeak" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.68 10.923s-1.79-1.191-2.37-1.596a1.313 1.313 0 00-1.106-.222s-1.282.761-1.546.887c-.265.127-.663-.221-.663-.221S4.521 6.413 4.238 6.003c-.281-.41.264-1.369.663-1.772.607-.613-.079-1.557-.079-1.557A26.882 26.882 0 003.004.372L3.003.37C2.059-.683.804.91.38 1.534a2.087 2.087 0 00-.331 1.324A19.955 19.955 0 004.336 9.86a12.987 12.987 0 006.573 4.03 1.914 1.914 0 001.448-.064 15.452 15.452 0 001.476-1.691 1.147 1.147 0 00-.154-1.21z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.056 3.615a3.843 3.843 0 012.817 3.512.734.734 0 00.732.696l.039-.001a.735.735 0 00.695-.771A5.31 5.31 0 007.446 2.2a.734.734 0 10-.39 1.415z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.153 1.47a5.42 5.42 0 013.975 5.023.734.734 0 00.732.706.255.255 0 00.028 0 .733.733 0 00.706-.761A6.88 6.88 0 008.548.057a.734.734 0 10-.395 1.413z" })] })));
}
exports.default = SolidCallSpeak;
