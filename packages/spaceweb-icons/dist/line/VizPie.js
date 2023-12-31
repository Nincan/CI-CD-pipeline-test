"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVizPie(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineVizPie" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.5 7c0-3.4-2.6-6.2-6-6.5h-1A6.5 6.5 0 00.5 7c0 3.4 2.6 6.2 6 6.5h1c3.3-.3 6-3 6-6.5zM7 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-.5-8v2c-1 .2-1.8.7-2.4 1.5l-2-.6a5.5 5.5 0 014.4-2.9zM1.5 7c0-.5 0-1 .2-1.5v-.2l2 .6-.1.4-.1.7c0 1.8 1.3 3.2 3 3.5v2c-2.8-.3-5-2.6-5-5.5zm6 5.5v-2c1.7-.3 3-1.7 3-3.5 0-1.7-1.3-3.2-3-3.4v-2a5.5 5.5 0 010 10.9z" }) })));
}
exports.default = LineVizPie;
