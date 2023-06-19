"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGroup(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGroup" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.95 2.05A7 7 0 1 0 14 7a7 7 0 0 0-2.05-4.95Zm-.992 8.908A5.595 5.595 0 1 1 12.6 7a5.607 5.607 0 0 1-1.642 3.958Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 4.95 2.05A7 7 0 0 0 7 0Zm0 12.6a5.606 5.606 0 1 1 3.958-1.642A5.6 5.6 0 0 1 7 12.6Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 5.762a.696.696 0 0 1-.385-.117.69.69 0 0 1-.294-.71.695.695 0 0 1 .544-.545.682.682 0 0 1 .134-.013.703.703 0 0 1 .267.053A.693.693 0 0 1 7 5.762Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 3.377a1.692 1.692 0 1 0 .648.129A1.692 1.692 0 0 0 7 3.377ZM4.83 9.379a.69.69 0 0 1-.614-.502.676.676 0 0 1 .015-.417.698.698 0 0 1 .254-.336A.688.688 0 0 1 4.88 8a.69.69 0 1 1-.001 1.38Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.88 7a1.69 1.69 0 0 0-.117 3.377q.06.004.118.004A1.69 1.69 0 0 0 4.879 7ZM9.073 9.379a.69.69 0 0 1-.614-.502.685.685 0 0 1 .014-.42.697.697 0 0 1 .254-.333A.685.685 0 0 1 9.121 8a.69.69 0 0 1 .36 1.28.686.686 0 0 1-.36.1Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.121 7a1.69 1.69 0 0 0-.116 3.377q.06.004.118.004A1.69 1.69 0 0 0 9.12 7Z" })] })));
}
exports.default = SolidGroup;
