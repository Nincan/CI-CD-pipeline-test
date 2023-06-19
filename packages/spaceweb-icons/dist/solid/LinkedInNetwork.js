"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkedInNetwork(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkedInNetwork" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "4.038", cy: "3.231", r: "3.231" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.654 7.538H2.423A1.615 1.615 0 0 0 .808 9.153V14h6.461V9.153a1.615 1.615 0 0 0-1.615-1.615Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "10.769", cy: "5.115", r: "2.423" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.577 8.615H9.96a1.616 1.616 0 0 0-1.615 1.616V14h4.846v-3.769a1.616 1.616 0 0 0-1.615-1.616Z" })] })));
}
exports.default = SolidLinkedInNetwork;
