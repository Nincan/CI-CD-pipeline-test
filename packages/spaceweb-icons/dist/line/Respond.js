"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineRespond(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 16 16", "data-icon-name": "LineRespond" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.193 5.99H2.613l1.768-1.7a.75.75 0 10-1.039-1.08L.231 6.2A.745.745 0 00.22 7.27l2.99 2.99a.747.747 0 001.06 0 .75.75 0 000-1.06L2.561 7.49h10.632c.219 0 1.307.059 1.307 1.212v.98c0 1.105-1.002 1.207-1.311 1.212a.75.75 0 00.004 1.5c1.129 0 2.807-.722 2.807-2.711v-.981c0-1.99-1.678-2.712-2.807-2.712" }, void 0) }), void 0));
}
exports.default = LineRespond;
