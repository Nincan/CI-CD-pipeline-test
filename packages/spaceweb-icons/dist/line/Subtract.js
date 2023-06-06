"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSubtract(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSubtract" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.37 7.6H.63a.6.6 0 010-1.2h12.74a.6.6 0 110 1.2z" }, void 0) }), void 0));
}
exports.default = LineSubtract;
