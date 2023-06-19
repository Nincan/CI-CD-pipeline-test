"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineNotification" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.95 9.04a3.46 3.46 0 01-1.22-2.65V4.72A4.75 4.75 0 007.66.05 6.08 6.08 0 007.01 0a6.72 6.72 0 00-.69.05 4.75 4.75 0 00-4.05 4.67V6.4a3.46 3.46 0 01-1.23 2.65 1.59 1.59 0 001.03 2.8h2.31A2.72 2.72 0 007 14a2.77 2.77 0 002.62-2.16h2.3a1.59 1.59 0 001.03-2.8zM7 12.9a1.56 1.56 0 01-1.46-1.07h2.92A1.58 1.58 0 017 12.9zm4.93-2.16H2.07a.5.5 0 01-.5-.5.5.5 0 01.17-.38A4.55 4.55 0 003.36 6.4V4.72a3.64 3.64 0 017.28 0V6.4a4.54 4.54 0 001.6 3.47.5.5 0 01-.31.9z" }) })));
}
exports.default = LineNotification;
