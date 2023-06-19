"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineSingleSelect(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSingleSelect" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "3" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 1.2A5.8 5.8 0 111.2 7 5.807 5.807 0 017 1.2M7 0a7 7 0 107 7 7 7 0 00-7-7z" })] })));
}
exports.default = LineSingleSelect;
