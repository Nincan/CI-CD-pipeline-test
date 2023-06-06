"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTopAlign(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTopAlign" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.83 6.22h1.4v7a.78.78 0 101.55 0v-7h1.4a.39.39 0 00.26-.66L7.27 3.4a.39.39 0 00-.55 0L4.55 5.56a.39.39 0 00.28.66zm7.26-4.82H1.91a.7.7 0 110-1.4h10.18a.7.7 0 010 1.4z" }, void 0) }), void 0));
}
exports.default = SolidTopAlign;
