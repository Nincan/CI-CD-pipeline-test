"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidListenInfo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidListenInfo" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.49 4.99a4.5 4.5 0 104.49 4.5A4.5 4.5 0 004.48 5zm.5 6.54a.5.5 0 11-1 0v-2.3a.5.5 0 011 0zm-.04-4.16a.46.46 0 01-.11.16.57.57 0 01-.16.11.43.43 0 01-.19.04.4.4 0 01-.19-.04.61.61 0 01-.17-.11.55.55 0 01-.14-.35.4.4 0 01.04-.19.58.58 0 01.1-.17.58.58 0 01.17-.1.5.5 0 01.38 0 .53.53 0 01.16.1.61.61 0 01.11.17.4.4 0 01.04.19.64.64 0 01-.04.19z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.48 2.57a.6.6 0 100 1.2A4.54 4.54 0 0110 8.32a.6.6 0 101.2 0 5.75 5.75 0 00-5.73-5.75z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6 .06a.6.6 0 100 1.2 6.8 6.8 0 016.78 6.8.6.6 0 001.2 0A8 8 0 006 .07z" })] })));
}
exports.default = SolidListenInfo;
