"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVisualization(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 14", "data-icon-name": "LineVisualization" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 2.6a.6.6 0 111.2 0v9.9a.6.6 0 01-1.2 0V2.6zM.4 1.5a.6.6 0 111.2 0v11a.6.6 0 01-1.2 0v-11zm3.3 4.4a.6.6 0 111.2 0v6.6a.6.6 0 01-1.2 0V5.9zm6.6 0a.6.6 0 011.2 0v6.6a.6.6 0 01-1.2 0V5.9z" }, void 0) }), void 0));
}
exports.default = LineVisualization;
