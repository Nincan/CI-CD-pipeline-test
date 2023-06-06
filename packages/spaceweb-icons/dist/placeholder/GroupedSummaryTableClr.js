"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderGroupedSummaryTableClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 38 30", "data-icon-name": "PlaceholderGroupedSummaryTableClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M38 0H10v4h28z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10 5h13v3H10z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M24 5v3h13v6H1V8h8V0H0v30h38V5H24zm13 10v7H1v-7h36zm0 14H1v-6h36v6z" }, void 0)] }), void 0));
}
exports.default = PlaceholderGroupedSummaryTableClr;
