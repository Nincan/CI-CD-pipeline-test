"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidShapes(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidShapes" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "5.811", height: "5.811", rx: ".5" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "10.613", cy: "6.786", r: "3.387" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.616 7.832a.5.5 0 00-.866 0L1.623 13.25a.5.5 0 00.433.75H8.31a.5.5 0 00.433-.75z" }, void 0)] }), void 0));
}
exports.default = SolidShapes;
