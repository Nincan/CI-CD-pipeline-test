"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPrinter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPrinter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.9 4.2H2.1A2.097 2.097 0 0 0 0 6.3v4.2h2.8v2.8h8.4v-2.8H14V6.3a2.097 2.097 0 0 0-2.1-2.1Zm-2.1 7.7H4.2V8.4h5.6ZM11.9 7a.7.7 0 1 1 .7-.7.702.702 0 0 1-.7.7ZM11 .7H3a.2.2 0 0 0-.2.2v2.4a.2.2 0 0 0 .2.2h8a.2.2 0 0 0 .2-.2V.9a.2.2 0 0 0-.2-.2Z" }, void 0) }), void 0));
}
exports.default = SolidPrinter;
