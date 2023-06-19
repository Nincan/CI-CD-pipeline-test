"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPluckSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPluckSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#d44c33", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "6.968", cy: "5.971", r: "1.117", fill: "#fff" }), (0, jsx_runtime_1.jsx)("circle", { cx: "9.948", cy: "6.39", r: "1.117", fill: "#fff" }), (0, jsx_runtime_1.jsx)("circle", { cx: "4.046", cy: "6.405", r: "1.117", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.95 8.383a.488.488 0 0 0-.34-.413.878.878 0 0 0-.314-.051L7 7.92l-4.44.002a.565.565 0 0 0-.52.481 5.525 5.525 0 0 0-.028.562.167.167 0 0 0 .169.174L7 9.143l4.841.003s.152-.039.147-.136c-.009-.21-.016-.42-.038-.627Z", fill: "#fff" })] })));
}
exports.default = BrandPluckSquareClr;
