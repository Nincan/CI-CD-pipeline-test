"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderColumnSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 30 26", "data-icon-name": "PlaceholderColumnSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M0 12h6v14H0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M8 4h6v22H8z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M16 9h6v17h-6z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#87BD66", d: "M24 0h6v26h-6z" }, void 0)] }), void 0));
}
exports.default = PlaceholderColumnSelectedClr;
