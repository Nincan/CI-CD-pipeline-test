"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizStackedColumn(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 11 12", "data-icon-name": "LineVizStackedColumn" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 4C.7 4 0 4.7 0 5.5v5a1.5 1.5 0 103 0v-5C3 4.7 2.3 4 1.5 4zM1 5.5c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5S1 7.8 1 7.5v-2zm.5 5.5a.5.5 0 01-.5-.5V8.9l.5.1H2v1.5c0 .3-.2.5-.5.5zm4-11C4.7 0 4 .7 4 1.5v9a1.5 1.5 0 103 0v-9C7 .7 6.3 0 5.5 0zM5 1.5c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5S5 4.8 5 4.5v-3zm.5 9.5a.5.5 0 01-.5-.5V5.9l.5.1H6v4.5c0 .3-.2.5-.5.5zm4-8C8.7 3 8 3.7 8 4.5v6a1.5 1.5 0 103 0v-6c0-.8-.7-1.5-1.5-1.5zM9 4.5c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5S9 5.8 9 5.5v-1zm.5 6.5a.5.5 0 01-.5-.5V6.9l.5.1h.5v3.5c0 .3-.2.5-.5.5z" }, void 0) }), void 0));
}
exports.default = LineVizStackedColumn;
