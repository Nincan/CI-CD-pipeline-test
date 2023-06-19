"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDeleteColumn(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDeleteColumn" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.52 9.453a.707.707 0 001 0l1.449-1.449 1.448 1.45a.707.707 0 001-1l-1.449-1.45 1.449-1.448a.707.707 0 00-1-1l-1.449 1.45-1.449-1.45a.707.707 0 00-.999 1l1.449 1.449L4.52 8.454a.707.707 0 000 1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.3.964H.713a.707.707 0 00-.706.707v10.655a.707.707 0 00.706.707H2.04c.007 0 .013.004.02.004s.013-.004.02-.004h9.78c.007 0 .013.004.02.004s.012-.004.02-.004h1.4a.707.707 0 00.708-.707V1.671A.707.707 0 0013.3.964zm-2.128 10.655H2.766V2.377h8.406z" })] })));
}
exports.default = LineDeleteColumn;
