"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizTable(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 13 11", "data-icon-name": "LineVizTable" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.2 1H.5c-.3 0-.5.2-.5.5v8.9c0 .3.2.5.5.5h11.7c.3 0 .5-.2.5-.5V1.5c0-.3-.2-.5-.5-.5zM1 5h3v2H1V5zm4 0h6.7v2H5V5zm6.7-1H5V2h6.8v2zM4 2v2H1V2h3zM1 8h3v1.9H1v-2zm10.7 1.9H5v-2h6.8v2z" }, void 0) }), void 0));
}
exports.default = LineVizTable;
