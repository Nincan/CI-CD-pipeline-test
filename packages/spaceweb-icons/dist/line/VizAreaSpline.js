"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizAreaSpline(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 9", "data-icon-name": "LineVizAreaSpline" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13 8.5H1A.5.5 0 01.5 8V6.9c.2-.7 1.2-4 3-4 .8 0 1.3.6 1.7 1 .5.7.8 1 1.6.7.9-.3 1.3-1.2 1.8-2 .5-1 1-2 2.1-2.1 2 0 2.7 3.7 2.8 4.5v3c0 .3-.2.5-.5.5zm-11.5-1h11V5.1c-.2-1.4-1-3.6-1.7-3.6-.6 0-.9.6-1.3 1.5C9 4 8.4 5 7.2 5.5c-1.6.6-2.3-.3-2.8-1-.4-.4-.6-.6-1-.6C2.8 3.9 2 5.7 1.6 7v.4z" }, void 0) }), void 0));
}
exports.default = LineVizAreaSpline;
