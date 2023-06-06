"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderAudienceStreamSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 26 20", "data-icon-name": "PlaceholderAudienceStreamSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.87 4.45h6.5v1h-6.5zm0 3.18h18.17v1H3.87zm0 3.17h18.18v1H3.87zm0 3h10v1h-10z", fill: "#CBD756" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M22.5 20h-19A3.5 3.5 0 010 16.5v-13A3.5 3.5 0 013.5 0h19A3.5 3.5 0 0126 3.5v13a3.5 3.5 0 01-3.5 3.5zM3.5 1A2.5 2.5 0 001 3.5v13A2.5 2.5 0 003.5 19h19a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0022.5 1h-19z" }, void 0)] }), void 0));
}
exports.default = PlaceholderAudienceStreamSelectedClr;
