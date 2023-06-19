"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTextArea(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTextArea" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.6 4.609a.6.6 0 0 1-.6-.6V.6A.6.6 0 0 1 .6 0h3.41a.6.6 0 1 1 0 1.2H1.2v2.81a.6.6 0 0 1-.6.6zm12.8 0a.6.6 0 0 1-.6-.6V1.2H9.99a.6.6 0 1 1 0-1.2h3.41a.6.6 0 0 1 .6.6v3.41a.6.6 0 0 1-.6.6zm0 9.391H9.99a.6.6 0 1 1 0-1.2h2.81V9.992a.6.6 0 1 1 1.2 0V13.4a.6.6 0 0 1-.6.6zm-9.391 0H.6a.6.6 0 0 1-.6-.6V9.992a.6.6 0 1 1 1.2 0V12.8h2.81a.6.6 0 1 1 0 1.2zm5.707-9.955H4.284a.6.6 0 1 0 0 1.2H6.4v5.31a.6.6 0 1 0 1.2 0v-5.31h2.116a.6.6 0 1 0 0-1.2z" }) })));
}
exports.default = LineTextArea;
