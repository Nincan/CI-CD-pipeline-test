"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReport" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.351.912a.5.5 0 01.5-.5h2.294a.5.5 0 01.5.5v12.176a.5.5 0 01-.5.5H5.851a.5.5 0 01-.5-.5zM-.001 7.06a.5.5 0 01.5-.5h2.295a.5.5 0 01.5.5v6.027a.5.5 0 01-.5.5H.499a.5.5 0 01-.5-.5zm11.207-3.136a.5.5 0 00-.5.5v8.663a.5.5 0 00.5.5h2.295a.5.5 0 00.5-.5V4.425a.5.5 0 00-.5-.5z" }, void 0) }), void 0));
}
exports.default = SolidReport;
