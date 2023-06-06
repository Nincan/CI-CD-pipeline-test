"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderTitleSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderTitleSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#4CD2E0" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M25.004.5H1.996C1.17.5.5 1.172.5 1.998V31h26V1.998C26.5 1.172 25.83.5 25.004.5zM22 26.5H5v-1h17v1zm0-3H5v-1h17v1zm0-3H5v-1h17v1zm0-3H5v-1h17v1zm0-4.5H5V6h17v7z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6 7h15v5H6z" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M6 7h15v5H6z" }, void 0)] }), void 0));
}
exports.default = PlaceholderTitleSelectedClr;
