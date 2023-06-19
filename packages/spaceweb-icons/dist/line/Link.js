"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineLink(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineLink" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.394 5.292a1.98 1.98 0 0 1-.264 1.113l-3.117 5.4a1.99 1.99 0 0 1-1.218.933 1.996 1.996 0 0 1-1.52-.2 1.991 1.991 0 0 1-.933-1.217 1.99 1.99 0 0 1 .2-1.521l3.117-5.4a1.993 1.993 0 0 1 1.738-1.002c.348 0 .69.09 1 .269.191.11.354.255.496.416l.62-1.073a3.197 3.197 0 0 0-4.887.795L.51 9.205A3.2 3.2 0 0 0 3.271 14c.278 0 .558-.036.833-.11a3.172 3.172 0 0 0 1.941-1.49L9.162 7a3.188 3.188 0 0 0 .039-3.105l-.807 1.397z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.808 2.369a3.177 3.177 0 0 0-1.49-1.941 3.2 3.2 0 0 0-4.365 1.17l-3.119 5.4a3.188 3.188 0 0 0-.039 3.104l.807-1.398a1.988 1.988 0 0 1 .265-1.11l3.118-5.4a1.993 1.993 0 0 1 1.738-1.003c.348 0 .69.091 1 .27.464.267.794.7.933 1.216s.068 1.057-.2 1.521l-3.118 5.4a1.99 1.99 0 0 1-1.217.934 1.996 1.996 0 0 1-1.52-.2 1.997 1.997 0 0 1-.498-.418l-.62 1.074a3.196 3.196 0 0 0 4.887-.794l3.119-5.4c.426-.74.54-1.6.319-2.425z" })] })));
}
exports.default = LineLink;
