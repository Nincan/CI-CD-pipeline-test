"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBarGraph(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16.9 15.6", "data-icon-name": "SolidBarGraph" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.906 14.612h.745a.248.248 0 01.249.247v.494a.248.248 0 01-.249.247H.25A.248.248 0 010 15.353v-.494a.248.248 0 01.249-.247h.745v-3.458a.496.496 0 01.497-.494H3.48a.496.496 0 01.497.494v3.458h.995V9.178a.496.496 0 01.497-.494h1.988a.496.496 0 01.497.494v5.434h.994v-7.41a.496.496 0 01.497-.495h1.988a.496.496 0 01.497.494v7.41h.995V5.226a.496.496 0 01.497-.494h1.988a.496.496 0 01.497.494zM8.69.66l.128-.477a.249.249 0 01.305-.175l1.797.479a.494.494 0 01.351.605l-.481 1.786a.249.249 0 01-.305.175l-.48-.128a.247.247 0 01-.176-.303l.171-.634-5.417 3.11a.25.25 0 01-.34-.091l-.248-.428a.246.246 0 01.09-.337l5.418-3.11-.638-.17A.247.247 0 018.691.66z", fillRule: "evenodd" }) })));
}
exports.default = SolidBarGraph;
