"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTwitterSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterSearch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.5 11.233a6.346 6.346 0 1 1 .751-.749l2.593 2.582a.528.528 0 0 1 0 .749.533.533 0 0 1-.752 0Zm1.196-4.85A5.317 5.317 0 1 1 6.38 1.088a5.305 5.305 0 0 1 5.316 5.293Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineTwitterSearch;
