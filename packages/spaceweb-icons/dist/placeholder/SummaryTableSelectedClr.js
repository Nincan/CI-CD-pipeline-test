"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderSummaryTableSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 38 30", "data-icon-name": "PlaceholderSummaryTableSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 0h28v8H10zm0 17h28v6H10z", fill: "#CBD756" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M10 30v-6h28v6z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10 9h28v7H10zM0 0h9v30H0z", fill: "#40A3F5" }, void 0)] }), void 0));
}
exports.default = PlaceholderSummaryTableSelectedClr;
