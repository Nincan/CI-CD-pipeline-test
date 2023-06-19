"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDebt(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDebt" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.825.055H5.11a.957.957 0 00-.96.964v1.487l1.124 1.406h7.55v2.41a.483.483 0 01-.482.482H7.588l.771.965h4.466a.96.96 0 00.964-.965V1.02a.96.96 0 00-.964-.964zm0 1.928H5.11V1.02h7.714zM9.441 9.54a2.286 2.286 0 00-.346-.027 2.217 2.217 0 00-.563.072L2.547 2.102a.123.123 0 00-.096-.046.116.116 0 00-.07.025 2.493 2.493 0 00-.93 2.386A3.55 3.55 0 002.453 6.4l1.723 1.702L2.99 9.587a2.22 2.22 0 00-.563-.072 2.288 2.288 0 00-.347.026 2.216 2.216 0 00.346 4.404h.131a2.215 2.215 0 001.932-3.021l1.27-1.256 1.27 1.256a2.215 2.215 0 001.934 3.02h.131a2.215 2.215 0 00.346-4.405zM2.42 12.597a.868.868 0 11.868-.868.868.868 0 01-.869.868zm6.668 0a.868.868 0 11.868-.868.868.868 0 01-.868.868z" }) })));
}
exports.default = SolidDebt;
