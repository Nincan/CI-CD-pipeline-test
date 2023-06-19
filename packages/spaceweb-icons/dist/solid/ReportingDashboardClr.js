"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReportingDashboardClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReportingDashboardClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", tslib_1.__assign({ id: "solid_reportingDashboard_clr__a", y1: "-645.432", x2: "14", y2: "-657.932", gradientTransform: "matrix(1 0 0 -1 0 -644.682)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#66c89b" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#53a680" })] })), (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "solid_reportingDashboard_clr__b" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M4.5 4.25h5v5h-5z" }) }))] }), (0, jsx_runtime_1.jsx)("rect", { y: ".75", width: "14", height: "12.5", rx: "1.5", fill: "url(#solid_reportingDashboard_clr__a)" }), (0, jsx_runtime_1.jsx)("g", tslib_1.__assign({ clipPath: "url(#solid_reportingDashboard_clr__b)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.411 4.464a.214.214 0 0 1 .215-.214h.747a.214.214 0 0 1 .215.214v4.278a.214.214 0 0 1-.215.214h-.747a.214.214 0 0 1-.215-.214ZM4.5 6.66a.214.214 0 0 1 .214-.214h.748a.214.214 0 0 1 .214.215v2.08a.214.214 0 0 1-.214.215h-.748a.214.214 0 0 1-.214-.214Zm4.038-1.155a.214.214 0 0 0-.214.214v3.023a.214.214 0 0 0 .214.214h.748a.214.214 0 0 0 .214-.214V5.719a.214.214 0 0 0-.214-.214Z", fill: "#fff", fillRule: "evenodd" }) }))] })));
}
exports.default = SolidReportingDashboardClr;
