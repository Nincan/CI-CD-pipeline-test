"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineClose(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineClose" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.8 12.7c.3-.3.3-.8 0-1L8 7l4.6-4.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0L6.9 6 2.3 1.3C2 1 1.5 1 1.2 1.3s-.3.7 0 1L5.9 7l-4.7 4.7c-.3.3-.3.8 0 1.1.3.3.8.3 1 0l4.7-4.7 4.7 4.6c.3.3.8.3 1.2 0z" }) })));
}
exports.default = LineClose;
