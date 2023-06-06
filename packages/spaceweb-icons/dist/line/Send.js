"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Send.svg instead.
 */
function LineSend(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSend" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.041 8.655a.6.6 0 01-.43-1.018L12.827.23a.6.6 0 11.86.837L6.47 8.475a.6.6 0 01-.43.18z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.743 6.182a.6.6 0 01-.22-1.158L13.037.089a.6.6 0 11.44 1.116L.963 6.14a.603.603 0 01-.22.042z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.514 13.953a.6.6 0 01-.544-.346l-2.38-5.1L.488 6.126a.6.6 0 11.508-1.087l5.298 2.473a.6.6 0 01.29.29l1.867 4L12.694.439a.6.6 0 011.125.42L9.076 13.563a.6.6 0 01-.539.39z" }, void 0)] }), void 0));
}
exports.default = LineSend;
