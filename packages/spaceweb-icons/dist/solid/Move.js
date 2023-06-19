"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMove(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMove" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.811 6.665L11.596 4.45a.541.541 0 00-.747-.013.496.496 0 00-.154.386l-.013 1.288v.222h-3.09V3.292h1.496a.607.607 0 00.386-.155.561.561 0 00.142-.373.453.453 0 00-.155-.374L7.26.175A.516.516 0 006.886.02a.459.459 0 00-.374.142L4.297 2.377a.541.541 0 00-.013.747.496.496 0 00.386.155l1.288.013h.237v3.041H3.318v-1.51a.607.607 0 00-.154-.386.561.561 0 00-.374-.142.453.453 0 00-.373.155L.202 6.652a.516.516 0 00-.155.373.459.459 0 00.142.374l2.215 2.215a.541.541 0 00.747.013.496.496 0 00.154-.386l.013-1.288V7.73h2.877v2.977H4.67a.607.607 0 00-.386.155.56.56 0 00-.142.374.453.453 0 00.155.373l2.202 2.215a.516.516 0 00.374.155.459.459 0 00.373-.142l2.215-2.215a.541.541 0 00.013-.747.497.497 0 00-.386-.155L7.8 10.708h-.207V7.731h3.089v1.51a.608.608 0 00.154.386.561.561 0 00.374.142.453.453 0 00.373-.155l2.215-2.202a.516.516 0 00.155-.374.459.459 0 00-.142-.373z" }) })));
}
exports.default = SolidMove;
