"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Login.svg instead.
 */
function LineLogin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 11.6", "data-icon-name": "LineLogin" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("g", (0, tslib_1.__assign)({ "data-name": "Layer 2" }, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ "data-name": "Layer 1" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 5.8a.5.5 0 00.5.5h4.8l-.82.87a.5.5 0 00.72.68l1.6-1.69a.47.47 0 000-.07.48.48 0 00.12-.09.49.49 0 000-.37.49.49 0 00-.05-.09.47.47 0 000-.07L5.2 3.75a.5.5 0 10-.72.68l.82.87H.5a.5.5 0 00-.5.5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10 0H3.69a2.17 2.17 0 00-1.93 2.25.48.48 0 00.46.49.48.48 0 00.46-.49A1.21 1.21 0 013.81 1H10a1.2 1.2 0 011.09 1.26v7.1A1.21 1.21 0 0110 10.62H3.78a1.2 1.2 0 01-1.1-1.27.48.48 0 00-.46-.49.48.48 0 00-.46.49 2.14 2.14 0 002 2.24h6.35A2.17 2.17 0 0012 9.35v-7.1A2.14 2.14 0 0010 0zm0 .18zM3.81 10.79z" }, void 0)] }), void 0) }), void 0) }), void 0));
}
exports.default = LineLogin;
