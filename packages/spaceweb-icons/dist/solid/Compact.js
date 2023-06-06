"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCompact(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCompact" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.441 10.37h-.86V3.362h.842c.009 0 .018-.009.027-.009a.563.563 0 00.4-.163.555.555 0 00-.02-.78L12.263.906v-.01a.617.617 0 00-.335-.144.6.6 0 00-.127.009.466.466 0 00-.263.118c-.018.009-.027.018-.046.027l-1.56 1.505a.553.553 0 00.39.952h.86v7.006h-.841c-.01 0-.018.009-.027.009a.562.562 0 00-.4.163.555.555 0 00.019.78l1.569 1.505v.01a.616.616 0 00.335.144.601.601 0 00.127-.009.467.467 0 00.263-.117c.018-.01.027-.019.045-.028l1.56-1.505a.553.553 0 00-.39-.952z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { width: "9.023", height: "3.924", y: ".752", rx: ".5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.708 7.32h7.604a.7.7 0 000-1.4H.708a.7.7 0 000 1.4zm7.605 1.283H.709a.7.7 0 100 1.4h7.604a.7.7 0 100-1.4zm-.001 2.785H.708a.7.7 0 000 1.4h7.604a.7.7 0 000-1.4z" }, void 0)] }), void 0));
}
exports.default = SolidCompact;
