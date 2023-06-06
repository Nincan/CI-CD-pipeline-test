"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCompleteMessageFlow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCompleteMessageFlow" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.14 6a4.8 4.8 0 013.46.24V1.7A1.36 1.36 0 0012.24.34H1.36A1.36 1.36 0 000 1.7v11.76a.2.2 0 00.34.14l2.38-2.38H6.8a2.86 2.86 0 01.02-.34 2.92 2.92 0 01-.01-.52 4.8 4.8 0 013.33-4.37z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.8 8.25a.68.68 0 00-.96 0l-2.4 2.4-.96-.95a.68.68 0 00-.96.96l1.44 1.44a.68.68 0 00.96 0l2.88-2.9a.68.68 0 000-.95z" }, void 0)] }), void 0));
}
exports.default = SolidCompleteMessageFlow;
