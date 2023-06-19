"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMappedArrowCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 24 24", "data-icon-name": "SolidMappedArrowCircleClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "12", fill: "#81c1fe" }), (0, jsx_runtime_1.jsx)("path", { d: "M18.984 9.312a.589.589 0 00-.035-.298l-.001-.01c-.005-.012-.017-.017-.023-.027a.586.586 0 00-.096-.151l-2.679-2.79a.6.6 0 10-.865.83l1.704 1.775H6.41a.6.6 0 100 1.2h10.6l-1.762 1.88a.6.6 0 10.875.821l2.71-2.89c.01-.01.009-.024.017-.034a.582.582 0 00.118-.236.552.552 0 00.015-.07z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { "data-name": "Path", d: "M17.59 14.158H6.988L8.75 12.28a.6.6 0 10-.875-.82l-2.71 2.889c-.01.01-.009.024-.017.034a.582.582 0 00-.118.236.553.553 0 00-.015.07.589.589 0 00.035.298l.001.01c.005.012.017.017.023.027a.586.586 0 00.096.151l2.679 2.79a.6.6 0 00.865-.831L7.01 15.36h10.58a.6.6 0 000-1.2z", fill: "#fff" })] }) })));
}
exports.default = SolidMappedArrowCircleClr;
