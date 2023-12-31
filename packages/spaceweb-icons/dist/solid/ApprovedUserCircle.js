"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidApprovedUserCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidApprovedUserCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .11a6.98 6.98 0 106.98 6.99A6.98 6.98 0 007 .1zm-.39 2.13A1.67 1.67 0 114.95 3.9 1.67 1.67 0 016.6 2.24zm-2.77 8.8a.45.45 0 01-.45-.45V9.06A3.01 3.01 0 016.4 6.05h.43a3 3 0 012.5 1.35l-1.3 1.3-.97-1a.25.25 0 00-.34 0l-.58.67-.5.58a.16.16 0 000 .25l1.24 1.24.58.58.04.02zm4.44-.06a.25.25 0 01-.33 0l-.57-.57-1.22-1.22a.15.15 0 010-.24l.57-.65a.25.25 0 01.33 0L8.1 9.36l3.15-3.15a.25.25 0 01.32 0l.6.63a.15.15 0 010 .24z" }) })));
}
exports.default = SolidApprovedUserCircle;
