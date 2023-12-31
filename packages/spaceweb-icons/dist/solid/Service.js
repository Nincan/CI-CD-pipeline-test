"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidService(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidService" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.79 2.76a.58.58 0 0 0 .63-.58.8.8 0 0 1 .33-.64 1.01 1.01 0 0 1 .61-.2 1.33 1.33 0 0 1 .21.02.87.87 0 0 1 .76.7.78.78 0 0 1-.48.89 2.02 2.02 0 0 0-1.1 1.76v.34a.63.63 0 0 0 1.25 0v-.38a.8.8 0 0 1 .42-.78 1.94 1.94 0 0 0 1.1-2.12 2.14 2.14 0 0 0-1.76-1.6 2.54 2.54 0 0 0-.4-.04 2.27 2.27 0 0 0-1.42.48 2 2 0 0 0-.78 1.57.58.58 0 0 0 .63.58Zm1.57 3.56a.66.66 0 1 0 .66.66.66.66 0 0 0-.66-.66Zm1.93 2.75a1.05 1.05 0 0 0-.82.1l-2.4 1.14a1.23 1.23 0 0 1-.54.14c-.52-.02-1.04-.09-1.56-.14a1.19 1.19 0 0 1-.14-.03v-.04l.2-.08c.45-.11.9-.21 1.35-.36a.97.97 0 0 0 .5-1.45 1 1 0 0 0-1.16-.4 6.97 6.97 0 0 1-2.34.28c-.8-.07-1.61-.05-2.42-.09a1.35 1.35 0 0 0-1.01.34c-.28.25-.57.48-.85.71-.42.34-.84.68-1.23 1.04a1.05 1.05 0 0 0-.18.2.28.28 0 0 0-.31.03l-.26.2a.28.28 0 0 0-.04.4l2.17 2.7a.28.28 0 0 0 .4.05l.25-.21a.28.28 0 0 0 .1-.28l.75-.52a1.53 1.53 0 0 1 1.1-.29q1.73.18 3.48.33a1.47 1.47 0 0 0 .54-.05 16.51 16.51 0 0 0 3.12-1.2c.49-.25 1-.46 1.49-.72a.91.91 0 0 0 .5-.95.95.95 0 0 0-.69-.85Z" }) })));
}
exports.default = SolidService;
