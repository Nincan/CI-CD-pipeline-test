"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLaunchpad(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLaunchpad" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "1.495", cy: "1.498", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "1.498", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12.505", cy: "1.498", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "1.495", cy: "7", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12.505", cy: "7", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "1.495", cy: "12.502", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "12.502", r: "1.495" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12.505", cy: "12.502", r: "1.495" })] })));
}
exports.default = SolidLaunchpad;
