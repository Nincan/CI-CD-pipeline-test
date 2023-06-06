"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidIncomingCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidIncomingCall" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.312 9.343a1.304 1.304 0 00-1.098-.22s-1.273.756-1.536.88c-.263.127-.658-.219-.658-.219S4.57 6.448 4.288 6.041c-.28-.407.262-1.36.658-1.76.603-.608-.078-1.546-.078-1.546A26.713 26.713 0 003.062.448V.447C2.123-.599.876.984.455 1.603a2.074 2.074 0 00-.329 1.315 19.822 19.822 0 004.259 6.954 12.9 12.9 0 006.528 4.002 1.9 1.9 0 001.439-.063 15.345 15.345 0 001.465-1.68 1.14 1.14 0 00-.152-1.203s-1.777-1.183-2.354-1.585z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.707 2.183a.53.53 0 00-.908.377v3.15a.53.53 0 00.524.537h3.159a.534.534 0 00.376-.912l-.916-.917 2.732-2.732a.932.932 0 00-.663-1.589.922.922 0 00-.656.27L9.623 3.1z" }, void 0)] }), void 0));
}
exports.default = SolidIncomingCall;
