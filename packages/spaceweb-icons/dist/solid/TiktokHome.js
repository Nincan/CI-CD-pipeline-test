"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTiktokHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTiktokHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.29.803a.452.452 0 0 0-.58 0L.219 6.213a.602.602 0 0 0 .386 1.065h.99l.243 4.88a1.205 1.205 0 0 0 1.204 1.144h2.905a.452.452 0 0 0 .452-.452V9.086a.301.301 0 0 1 .3-.302h.603a.301.301 0 0 1 .301.302v3.764a.452.452 0 0 0 .452.452h2.905a1.205 1.205 0 0 0 1.204-1.145l.244-4.879h.99a.602.602 0 0 0 .385-1.065Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidTiktokHome;
