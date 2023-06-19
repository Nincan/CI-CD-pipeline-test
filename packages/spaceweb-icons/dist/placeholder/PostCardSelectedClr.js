"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderPostCardSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 27 33", "data-icon-name": "PlaceholderPostCardSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M24.611.5H2.39C1.347.5.5 1.47.5 2.664V33h1V20.5h24V33h1V2.664C26.5 1.471 25.652.5 24.611.5zM1.5 10.5V2.664c0-.63.407-1.164.889-1.164H24.61c.49 0 .889.522.889 1.164V10.5h-24z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4 25.5h18v1H4zm0 3h18v1H4zM4 4h9v1H4zm0 3.5h18v1H4z", fill: "#CBD756" })] })));
}
exports.default = PlaceholderPostCardSelectedClr;
