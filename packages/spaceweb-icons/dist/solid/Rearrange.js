"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRearrange(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRearrange" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 3.111a1.556 1.556 0 111.556-1.555A1.556 1.556 0 0110 3.11zM10 8.556A1.556 1.556 0 1111.556 7 1.556 1.556 0 0110 8.556zM8.444 12.444A1.556 1.556 0 1010 10.89a1.556 1.556 0 00-1.556 1.555z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "4", cy: "1.556", r: "1.556" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "4", cy: "7", r: "1.556", transform: "rotate(-80.783 4 7)" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M2.444 12.444A1.556 1.556 0 104 10.89a1.556 1.556 0 00-1.556 1.555z" }, void 0)] }), void 0));
}
exports.default = SolidRearrange;
