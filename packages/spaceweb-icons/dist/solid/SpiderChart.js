"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSpiderChart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpiderChart" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.797 5.14 7.29.412a.495.495 0 0 0-.58 0L.203 5.14a.493.493 0 0 0-.179.552L2.51 13.34a.494.494 0 0 0 .47.342h8.043a.494.494 0 0 0 .469-.342l2.485-7.648a.493.493 0 0 0-.18-.552Zm-6.303-.375 1.913 1.39-1.913.526Zm-.988 1.916-1.913-.526 1.913-1.39Zm0-3.136L3.375 5.82l-1.76-.485L6.506 1.78Zm-.305 4.077-1.34 1.95-.827-2.546Zm.799.58 1.427 2.078H5.573Zm-2.104 3.066h4.209l.979 1.426H3.916Zm2.903-3.646 2.167-.596-.828 2.546Zm2.826-1.802L7.494 3.545V1.78l4.891 3.555Zm-9.379.439 1.649.453L4.157 10.6 3.14 12.083Zm9.616 5.824-1.02-1.484 1.264-3.887 1.648-.453Z" }) })));
}
exports.default = SolidSpiderChart;
