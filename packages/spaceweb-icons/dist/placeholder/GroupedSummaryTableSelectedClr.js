"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderGroupedSummaryTableSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 38 29", "data-icon-name": "PlaceholderGroupedSummaryTableSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 9h38v6H0zm0-9h8v8H0z", fill: "#40A3F5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M0 16h38v6H0zM9 0h29v4H9z", fill: "#4CD2E0" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M0 23h38v6H0zM9 5h14v3H9zm15 0h14v3H24z", fill: "#CBD756" }, void 0)] }), void 0));
}
exports.default = PlaceholderGroupedSummaryTableSelectedClr;
