"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPeopleCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPeopleCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.21 3.76a.96.96 0 00-1.32 0 .92.92 0 000 1.31.94.94 0 001.32 0 .92.92 0 000-1.3zm-2.88.88a1.04 1.04 0 00-1.42 0 .98.98 0 000 1.4 1.02 1.02 0 001.42 0 .99.99 0 000-1.4zm2.21 1.1a1.93 1.93 0 00-1.36.56.3.3 0 000 .43 6 6 0 01.8.94 3.04 3.04 0 01.24 1.44.12.12 0 00.13.13 259 259 0 011.84-.05.3.3 0 00.31-.3V7.52a1.95 1.95 0 00-1.8-1.77zm-2.9 1h-.19A2.08 2.08 0 003.5 8.82v1.45a.31.31 0 00.32.24h3.67a.31.31 0 00.25-.31V8.81l-.01-.14a2.1 2.1 0 00-2.1-1.93zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidPeopleCircle;
