"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidQuickFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidQuickFilter" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.168 9.16a1.378 1.378 0 0 1 .2-1.45c.41-.69.99-1.65 1.69-2.81l2.2-3.62a1.377 1.377 0 0 1 .908-.64.714.714 0 0 0-.158-.04H.648a.675.675 0 0 0-.62.34.667.667 0 0 0 .08.7l3.86 5.16v5.35a.649.649 0 0 0 .37.61.66.66 0 0 0 .27.06.884.884 0 0 0 .45-.14L7.198 11l.19-.15.24-.23.02-.17a3.378 3.378 0 0 0 .02-.41v-.2h-.26a1.301 1.301 0 0 1-1.24-.68Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.698 6.2h-2.45l.63-4.15a.39.39 0 0 0-.4-.43.407.407 0 0 0-.35.19c-1.74 2.88-3.06 5.04-3.94 6.5-.01.02-.39.51.22.51h2.44l-.63 4.15a.39.39 0 0 0 .4.43.407.407 0 0 0 .35-.19q.57-.945 4.01-6.58c.15-.31 0-.43-.28-.43Z" }, void 0)] }), void 0));
}
exports.default = SolidQuickFilter;
