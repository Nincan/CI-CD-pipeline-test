"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizSpline(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 7", "data-icon-name": "LineVizSpline" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1 7.5H.9a.5.5 0 01-.4-.6c.2-.7 1.2-4 3-4 .8 0 1.3.6 1.7 1 .5.7.8 1 1.6.7.9-.3 1.3-1.2 1.8-2 .5-1 1-2 2.1-2.1 2 0 2.7 3.7 2.8 4.5 0 .3-.2.5-.4.6a.5.5 0 01-.6-.4c-.2-1.5-1-3.7-1.7-3.7-.6 0-.9.6-1.3 1.5C9 4 8.4 5 7.2 5.5c-1.6.6-2.3-.3-2.8-1-.4-.4-.6-.6-1-.6-.7 0-1.6 1.9-2 3.2 0 .3-.2.4-.4.4z" }, void 0) }), void 0));
}
exports.default = LineVizSpline;
