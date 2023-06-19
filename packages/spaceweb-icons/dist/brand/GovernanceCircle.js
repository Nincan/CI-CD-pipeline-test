"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGovernanceCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGovernanceCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "5.986", r: ".852" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 7.178a1.695 1.695 0 00-1.716 1.55h3.432A1.695 1.695 0 007 7.179z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 .01a7 7 0 107 7 7 7 0 00-7-7zm3.524 7a3.457 3.457 0 01-.053.605.318.318 0 00.11.306l.39.317a.316.316 0 01.075.403l-.587 1.017a.316.316 0 01-.386.137l-.474-.181a.314.314 0 00-.316.057 3.479 3.479 0 01-1.05.608.315.315 0 00-.209.245l-.08.5a.317.317 0 01-.312.266H6.46a.315.315 0 01-.312-.266l-.08-.5a.315.315 0 00-.209-.245 3.48 3.48 0 01-1.051-.608.314.314 0 00-.316-.057l-.473.18a.316.316 0 01-.386-.136l-.722-1.25.604-.49a.309.309 0 00.106-.298 3.516 3.516 0 010-1.222.307.307 0 00-.106-.297l-.603-.49.72-1.25a.316.316 0 01.387-.137l.473.181a.312.312 0 00.316-.057 3.48 3.48 0 011.051-.608.315.315 0 00.208-.245l.08-.5a.316.316 0 01.313-.266h1.172a.315.315 0 01.312.266l.08.5a.316.316 0 00.208.244 3.466 3.466 0 011.052.608.312.312 0 00.315.058l.474-.181a.315.315 0 01.386.137l.587 1.016a.315.315 0 01-.074.404l-.395.32a.307.307 0 00-.107.297 3.548 3.548 0 01.054.611z" })] })));
}
exports.default = BrandGovernanceCircle;
