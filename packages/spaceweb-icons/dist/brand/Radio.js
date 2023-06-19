"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRadio(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRadio" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "4.559", cy: "8.8", r: "1.436" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.861 3.893H6.413l5.359-1.794a1.02 1.02 0 1 0-.343-1.021L3.024 3.893H1.14A1.14 1.14 0 0 0 0 5.033v7.534a1.14 1.14 0 0 0 1.139 1.14h11.722A1.14 1.14 0 0 0 14 12.567V5.032a1.14 1.14 0 0 0-1.139-1.139Zm-8.302 7.653a2.746 2.746 0 1 1 0-5.492 2.746 2.746 0 0 1 0 5.492Zm7.96-.754H9.746a.7.7 0 1 1-.001-1.4h2.774Zm0-2.585H9.746a.7.7 0 0 1 0-1.4h2.773Z" })] })));
}
exports.default = BrandRadio;
