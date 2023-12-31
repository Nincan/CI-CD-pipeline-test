"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHelpCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15 15", "data-icon-name": "SolidHelpCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.512 9.3c.377 0 .628-.228.628-.57v-.455c0-.456.188-.855.565-1.026.942-.455 1.444-1.424 1.256-2.392-.189-.911-1.005-1.652-2.01-1.823-.753-.114-1.507.057-2.072.513C5.314 4.003 5 4.629 5 5.313c0 .341.251.57.628.57s.628-.229.628-.57c0-.342.188-.684.44-.855.313-.228.69-.285 1.067-.228.502.057.942.456 1.005.912.125.455-.126.968-.628 1.196-.754.399-1.256 1.14-1.256 1.994v.398c0 .342.251.57.628.57zm.988 1.945c0-.643-.457-1.045-1.005-1.045-.55 0-.995.402-.995.9s.445.9.995.9c.548 0 .993-.402 1.005-.755zM0 7.5C0 3.364 3.364 0 7.5 0S15 3.364 15 7.5 11.636 15 7.5 15 0 11.636 0 7.5z" }) })));
}
exports.default = SolidHelpCircle;
