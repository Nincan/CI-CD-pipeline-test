"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderStackedBarClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 30 30", "data-icon-name": "PlaceholderStackedBarClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 0h7v6H9zm6 8h12v6H15zm-5 8h12v6H10zm7 8h13v6H17z", opacity: ".5" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 0h8v6H0zm0 8h14v6H0zm0 8h9v6H0zm0 8h16v6H0z" })] })));
}
exports.default = PlaceholderStackedBarClr;
