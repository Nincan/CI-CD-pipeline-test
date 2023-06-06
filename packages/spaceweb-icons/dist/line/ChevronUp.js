"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineChevronUp(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineChevronUp" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.272 10.693a.931.931 0 001.316-.001L7 5.282l5.41 5.41a.93.93 0 101.318-1.314l-6.07-6.07a.93.93 0 00-1.316 0L.272 9.377a.931.931 0 000 1.316z" }, void 0) }), void 0));
}
exports.default = LineChevronUp;