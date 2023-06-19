"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPluckCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPluckCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#E63E24", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "6.968", cy: "5.971", r: "1.117" }), (0, jsx_runtime_1.jsx)("circle", { cx: "9.948", cy: "6.39", r: "1.117" }), (0, jsx_runtime_1.jsx)("circle", { cx: "4.046", cy: "6.405", r: "1.117" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.95 8.383c-.021-.209-.156-.341-.34-.413a.878.878 0 00-.314-.051L7 7.92l-4.44.002a.565.565 0 00-.52.481 5.526 5.526 0 00-.028.562c-.003.173.169.174.169.174L7 9.143l4.841.003s.152-.039.147-.136c-.009-.21-.016-.42-.038-.627z" })] }))] })));
}
exports.default = BrandPluckCircleClr;
