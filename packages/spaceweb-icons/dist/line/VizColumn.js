"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizColumn(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 11 12", "data-icon-name": "LineVizColumn" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 4C.7 4 0 4.7 0 5.5v5a1.5 1.5 0 103 0v-5C3 4.7 2.3 4 1.5 4zm.5 6.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5s.5.2.5.5v5zM5.5 0C4.7 0 4 .7 4 1.5v9a1.5 1.5 0 103 0v-9C7 .7 6.3 0 5.5 0zM6 10.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5s.5.2.5.5v9zM9.5 3C8.7 3 8 3.7 8 4.5v6a1.5 1.5 0 103 0v-6c0-.8-.7-1.5-1.5-1.5zm.5 7.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6z" }, void 0) }), void 0));
}
exports.default = LineVizColumn;
