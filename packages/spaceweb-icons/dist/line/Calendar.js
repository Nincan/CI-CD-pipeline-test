"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Calender.svg instead.
 */
function LineCalendar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCalendar" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "3.86", cy: "7.773", r: ".797" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "7.015", cy: "7.773", r: ".797" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "10.14", cy: "7.773", r: ".797" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M11.808 1.051h-1.03V.617a.6.6 0 10-1.199 0v.434H4.378V.617a.6.6 0 10-1.2 0v.434h-.986C.982 1.051 0 2.033 0 3.244v8.547c0 1.21.982 2.192 2.192 2.192h9.616c1.21 0 2.192-.981 2.192-2.192V3.244a2.193 2.193 0 00-2.192-2.193zm-9.616 1.2h.987v.366a.6.6 0 101.199 0V2.25h5.201v.366a.6.6 0 101.2 0V2.25h1.029c.547 0 .992.446.992.993v1.15H1.2v-1.15c0-.547.445-.993.992-.993zm9.616 10.532H2.192a.994.994 0 01-.992-.992V5.594h11.6v6.197a.994.994 0 01-.992.992z" }, void 0)] }), void 0));
}
exports.default = LineCalendar;
