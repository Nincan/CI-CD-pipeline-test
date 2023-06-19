"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGame(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGame" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.98 9.98L13.188 4.4a2.912 2.912 0 00-2.886-2.5H3.699A2.912 2.912 0 00.813 4.4L.02 9.98a1.853 1.853 0 003.148 1.574l1.647-1.64h4.372l1.64 1.64A1.858 1.858 0 0013.98 9.98zM6.069 6.407H4.95v1.12a.5.5 0 11-1 0v-1.12H2.831a.5.5 0 010-1h1.118V4.288a.5.5 0 011 0v1.12h1.12a.5.5 0 010 1zm3.008-.687a1.067 1.067 0 111.067-1.068A1.068 1.068 0 019.076 5.72zm1.405 2.647a1.067 1.067 0 010-2.135 1.056 1.056 0 01.43.093.726.726 0 01.256.174 1.051 1.051 0 01.382.8 1.068 1.068 0 01-1.068 1.068z" }) })));
}
exports.default = SolidGame;
