"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAppointmentPassed(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAppointmentPassed" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.216 13.17A6.22 6.22 0 01.002 6.778 6.29 6.29 0 016.037.743L6.213.74a6.224 6.224 0 016.216 6.217l1.177-.05a.388.388 0 01.275.668L11.97 9.492a.388.388 0 01-.556 0l-1.91-1.918a.378.378 0 01-.089-.421.386.386 0 01.363-.245h1.233A4.82 4.82 0 006.21 2.212a4.845 4.845 0 00-4.74 4.677 4.733 4.733 0 007.645 3.81.737.737 0 01.454-.157.726.726 0 01.517.215.754.754 0 01.214.579.714.714 0 01-.273.522 6.127 6.127 0 01-3.812 1.312zm1.821-3.684a.564.564 0 01-.287-.078L5.613 8.141a.741.741 0 01-.36-.632v-2.52a.563.563 0 011.127-.007V7.31l1.948 1.129a.563.563 0 01-.29 1.047zm3.003-2.534l1.429.05" }, void 0) }), void 0));
}
exports.default = SolidAppointmentPassed;
