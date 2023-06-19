"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidOutboundMessages(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidOutboundMessages" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.789 7.697A.7.7 0 0010.486 7V.726a.7.7 0 00-.697-.698H.726a.699.699 0 00-.698.698v9.76l2.79-2.789z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.274 2.817H11.88v6.274H2.817v1.395a.7.7 0 00.697.697h7.669l2.789 2.789V3.514a.7.7 0 00-.698-.697z" })] })));
}
exports.default = SolidOutboundMessages;
