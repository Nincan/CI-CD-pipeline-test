"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidExpandWindow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidExpandWindow" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.443 0H1.557A1.55 1.55 0 0 0 0 1.557v10.886A1.55 1.55 0 0 0 1.557 14h10.886A1.557 1.557 0 0 0 14 12.443V1.557A1.564 1.564 0 0 0 12.443 0Zm0 12.443H1.557v-9.33h10.886Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.068 8.825a.5.5 0 0 0 .414.141.68.68 0 0 0 .607-.627l.12-3.042a.496.496 0 0 0-.525-.536l-3.042.131a.672.672 0 0 0-.435.203.58.58 0 0 0-.05.818ZM4.317 11.2l3.042-.121a.68.68 0 0 0 .627-.607.5.5 0 0 0-.142-.414l-2.91-2.911a.592.592 0 0 0-.83.05.671.671 0 0 0-.202.435l-.121 3.042a.491.491 0 0 0 .536.526Z", fill: "#0a0a12" })] })));
}
exports.default = SolidExpandWindow;
