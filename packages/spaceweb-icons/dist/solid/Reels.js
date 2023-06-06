"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReels(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReels" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.924 3.251A3.848 3.848 0 0010.158.166h-.55l1.716 3.085zM9.592 3.251L7.876.167H4.317l1.715 3.084h3.56zM2.684.345A3.855 3.855 0 00.076 3.251H4.3zM0 4.765v5.227a3.846 3.846 0 003.842 3.842h6.316A3.846 3.846 0 0014 9.992V4.765zm9.15 4.74l-3.293 1.76a.672.672 0 01-.99-.593v-3.52a.672.672 0 01.99-.594l3.294 1.76a.672.672 0 010 1.186z" }, void 0) }), void 0));
}
exports.default = SolidReels;
