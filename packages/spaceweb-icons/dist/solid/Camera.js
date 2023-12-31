"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCamera(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 11.063", "data-icon-name": "SolidCamera" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.979 4.274c-1.128 0-2.081.951-2.083 2.08A2.101 2.101 0 007 8.48a2.1 2.1 0 002.102-2.099 2.1 2.1 0 00-2.123-2.107z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.5 2.063h-3.052c-.02-.016-.039-.031-.057-.058C9.99 1.386 9.581.772 9.184.151 9.108.032 9.024 0 8.891 0 7.616.004 6.34.004 5.065.001c-.09 0-.143.026-.192.101-.42.635-.844 1.267-1.262 1.903a.202.202 0 01-.059.058H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5zM7.351 9.858c-2.052.198-3.653-1.335-3.832-3.115a3.501 3.501 0 013.396-3.865 3.496 3.496 0 013.582 3.372 3.494 3.494 0 01-3.146 3.608z" })] })));
}
exports.default = SolidCamera;
