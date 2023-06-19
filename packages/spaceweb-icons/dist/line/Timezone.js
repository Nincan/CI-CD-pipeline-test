"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTimezone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTimezone" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 12.6A5.6 5.6 0 1112.6 7 5.6 5.6 0 017 12.6zM7 0a7 7 0 107 7 7 7 0 00-7-7zm2.97 4.03A4.18 4.18 0 007 2.8V7L4.03 9.97a4.2 4.2 0 105.94-5.94z" }) })));
}
exports.default = LineTimezone;
