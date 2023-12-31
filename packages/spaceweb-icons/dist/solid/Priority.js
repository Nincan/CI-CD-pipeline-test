"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPriority(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPriority" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.691 12.032a.79.79 0 110-1.578h1.726a3.013 3.013 0 002.226-.989 2.981 2.981 0 00.767-2.319A3.112 3.112 0 009.278 4.44h-.107v.447a.438.438 0 01-.138.324.449.449 0 01-.306.121.433.433 0 01-.314-.135L7.18 3.962a.442.442 0 010-.63l1.236-1.235a.431.431 0 01.309-.13.445.445 0 01.447.441v.454h.087A4.674 4.674 0 0113.96 6.84a4.591 4.591 0 01-4.544 5.191zm-6.902 0a.79.79 0 010-1.578H4.93a.79.79 0 010 1.578zm0-3.796a.79.79 0 010-1.578H4.93a.79.79 0 110 1.578zm0-3.797a.789.789 0 110-1.577H4.93a.789.789 0 110 1.577z" }) })));
}
exports.default = SolidPriority;
