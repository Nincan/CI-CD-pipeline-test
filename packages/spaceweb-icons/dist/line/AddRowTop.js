"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineAddRowTop(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineAddRowTop" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.293.964H.707A.707.707 0 000 1.67v10.66a.707.707 0 00.707.706h12.586A.707.707 0 0014 12.33V1.67a.707.707 0 00-.707-.706zm-.707 8.42H1.414V2.376h11.173z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.887 6.525h1.614V8.14a.645.645 0 101.289 0V6.525h1.614a.645.645 0 100-1.289H7.79V3.622a.645.645 0 00-1.29 0v1.614H4.888a.645.645 0 000 1.29z" }, void 0)] }), void 0));
}
exports.default = LineAddRowTop;
