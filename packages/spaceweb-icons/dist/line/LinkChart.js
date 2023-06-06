"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineLinkChart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 12", "data-icon-name": "LineLinkChart" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 1H2c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5s.5-.2.5-.5V6.4h7v5.1c0 .3.2.5.5.5s.5-.2.5-.5v-10c0-.3-.2-.5-.5-.5zm-.5 4.4h-7V2h7v3.4z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M3.6 8.3H5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H3.6c-.3 0-.5.2-.5.5s.2.5.5.5zm4.7 1H3.6c-.3 0-.5.2-.5.5s.2.5.5.5h4.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" }, void 0)] }), void 0));
}
exports.default = LineLinkChart;
