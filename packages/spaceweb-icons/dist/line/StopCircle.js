"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineStopCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 455 455", "data-icon-name": "LineStopCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M227.5 0C101.761 0 0 101.75 0 227.5 0 353.239 101.75 455 227.5 455 353.24 455 455 353.25 455 227.5 455 101.761 353.25 0 227.5 0zm0 425C118.598 425 30 336.402 30 227.5S118.598 30 227.5 30 425 118.598 425 227.5 336.403 425 227.5 425z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M289.139 142.359H165.862c-12.959 0-23.502 10.543-23.502 23.502v123.278c0 12.959 10.543 23.502 23.502 23.502h123.277c12.96 0 23.503-10.543 23.503-23.502V165.861c0-12.959-10.543-23.502-23.503-23.502zm-6.497 140.283H172.36V172.359h110.282v110.283z" }, void 0)] }), void 0));
}
exports.default = LineStopCircle;
