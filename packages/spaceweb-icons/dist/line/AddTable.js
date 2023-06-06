"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineAddTable(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineAddTable" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.35 10.55h-1.6v-1.6a.6.6 0 00-1.2 0v1.6h-1.6a.6.6 0 000 1.2h1.6v1.6a.6.6 0 001.2 0v-1.6h1.6a.6.6 0 000-1.2z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.5 10.55V6.5h4.05V7.8a.97.97 0 011.2 0V1.15a1.1 1.1 0 00-1.1-1.1h-9.5a1.1 1.1 0 00-1.1 1.1v9.5a1.1 1.1 0 001.1 1.1h6.67a1.12 1.12 0 010-1.2zm4.05-5.25H6.5V1.25h4.05zM5.3 1.25V5.3H1.25V1.25zM1.25 6.5H5.3v4.05H1.25z" }, void 0)] }), void 0));
}
exports.default = LineAddTable;
