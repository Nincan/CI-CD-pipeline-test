"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidOutgoingCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidOutgoingCall" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.32 9.32a1.31 1.31 0 00-1.11-.22s-1.29.76-1.55.89c-.27.12-.66-.23-.66-.23S4.52 6.4 4.23 6c-.28-.4.27-1.37.67-1.77.6-.62-.08-1.56-.08-1.56A26.93 26.93 0 003 .36C2.05-.7.8.88.37 1.51a2.1 2.1 0 00-.33 1.32 19.98 19.98 0 004.3 7.01 13 13 0 006.57 4.04 1.92 1.92 0 001.45-.07 15.47 15.47 0 001.48-1.69 1.15 1.15 0 00-.15-1.21s-1.8-1.2-2.37-1.6z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.44 0h-3.18a.54.54 0 00-.38.92l.92.92L8.05 4.6a.94.94 0 00.66 1.6.93.93 0 00.67-.27l2.75-2.76.92.93a.53.53 0 00.92-.38V.54a.53.53 0 00-.53-.54z" }, void 0)] }), void 0));
}
exports.default = SolidOutgoingCall;
