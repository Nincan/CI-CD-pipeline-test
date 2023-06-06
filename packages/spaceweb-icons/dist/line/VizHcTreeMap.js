"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizHcTreeMap(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 16 13", "data-icon-name": "LineVizHcTreeMap" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15 1H1c-.3 0-.5.2-.5.5v10.9c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V1.5c0-.3-.2-.5-.5-.5zm-.5 5.4H8.4V2h6.1v4.4zM1.5 2h5.9v9.9H1.5v-10zm10 9.9H8.4V7.4h3.1V12zm3 0h-2V7.4h2V12z" }, void 0) }), void 0));
}
exports.default = LineVizHcTreeMap;
