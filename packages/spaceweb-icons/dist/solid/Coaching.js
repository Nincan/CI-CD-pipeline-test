"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCoaching(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCoaching" }, props, { children: (0, jsx_runtime_1.jsx)("path", { xmlns: "http://www.w3.org/2000/svg", d: "M12.545.7h-11a1.538 1.538 0 00-1.5 1.5v6.9a1.504 1.504 0 001 1.4v1.8a1.002 1.002 0 001 1h5a1.002 1.002 0 001-1v-1.7h4.4a1.538 1.538 0 001.5-1.5V2.2a1.391 1.391 0 00-1.4-1.5zm-9.6 4.1a1.845 1.845 0 01.5-1.2 1.825 1.825 0 012.4 0 1.634 1.634 0 010 2.4 2.078 2.078 0 01-1.2.5 1.685 1.685 0 01-1.7-1.7zm5.7 2.6l-1.9 2a2.958 2.958 0 01.2 1v1.8h-4.7v-1.8a2.263 2.263 0 012.3-2.3 2.232 2.232 0 011.4.3l1.9-1.9a.746.746 0 01.9 0 .633.633 0 01-.1.9z" }, void 0) }), void 0));
}
exports.default = SolidCoaching;
