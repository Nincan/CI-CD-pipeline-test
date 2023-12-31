"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVisualRegion(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineVisualRegion" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 4.667C5.709 4.667 4.667 5.709 4.667 7S5.709 9.333 7 9.333 9.333 8.291 9.333 7 8.291 4.667 7 4.667zm5.444 7.777h-3.11V14h3.11C13.3 14 14 13.3 14 12.444v-3.11h-1.556v3.11zm0-12.444h-3.11v1.556h3.11v3.11H14v-3.11C14 .7 13.3 0 12.444 0zM1.556 1.556h3.11V0h-3.11C.7 0 0 .7 0 1.556v3.11h1.556v-3.11zm0 7.777H0v3.111C0 13.3.7 14 1.556 14h3.11v-1.556h-3.11v-3.11z" }) })));
}
exports.default = LineVisualRegion;
