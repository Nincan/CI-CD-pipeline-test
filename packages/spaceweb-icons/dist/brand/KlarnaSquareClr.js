"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandKlarnaSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandKlarnaSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0Z", fill: "#ffb3c7", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.122 3.063a4.522 4.522 0 0 1-1.804 3.64l-.688.526 2.68 3.693h2.202l-2.467-3.4a6.283 6.283 0 0 0 1.823-4.46Zm-4.497 0h1.788v7.86H2.625Zm7.167 6.853a1.01 1.01 0 1 1 1.01 1.022 1.016 1.016 0 0 1-1.01-1.022Z", fill: "#0a0b09" })] })));
}
exports.default = BrandKlarnaSquareClr;
