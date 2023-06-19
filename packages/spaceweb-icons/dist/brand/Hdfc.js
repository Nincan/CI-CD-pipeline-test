"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandHdfc(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandHdfc" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.45 7.701H0V14h6.3v-2.449H2.45v-3.85zM2.45 2.45H6.3V0H0v6.302h2.45V2.45zM7.7 0v2.45h3.851v3.852H14V0H7.7zM11.551 11.551H7.7V14H14V7.701h-2.449v3.85zM4.901 4.9h4.2v4.2h-4.2z" }) })));
}
exports.default = BrandHdfc;
