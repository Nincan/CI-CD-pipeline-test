"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidOverview(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidOverview" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 4.955a1.91 1.91 0 101.91 1.91A1.907 1.907 0 007 4.954z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 2.092a7.526 7.526 0 00-7 4.772 7.52 7.52 0 0014 0 7.526 7.526 0 00-7-4.772zm0 7.954a3.182 3.182 0 113.182-3.182A3.183 3.183 0 017 10.046z" }, void 0)] }), void 0));
}
exports.default = SolidOverview;
