"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderSummaryTableClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 30", "data-icon-name": "PlaceholderSummaryTableClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 0v7h27v7H10v1h27v7H10v1h27v6H10v1h28V0z" }), (0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M9 0H0v30h9z" })] })));
}
exports.default = PlaceholderSummaryTableClr;
