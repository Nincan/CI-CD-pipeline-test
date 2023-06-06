"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTrust(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTrust" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.85 1.137L7.24.027a.738.738 0 00-.21 0l-5.83.9a.628.628 0 00-.48.41.696.696 0 00-.05.25l.01.54c.06 5.16.12 10.03 6.35 11.83a.984.984 0 00.17.02.695.695 0 00.2-.03c5.37-1.87 5.88-7.29 5.93-12.21a.611.611 0 00-.48-.6zM9.549 6.031L8.393 7.157l.273 1.59a.163.163 0 01-.236.171l-1.428-.75-1.428.75a.163.163 0 01-.236-.17l.273-1.59L4.456 6.03a.163.163 0 01.09-.277l1.596-.232.714-1.447a.163.163 0 01.292 0l.714 1.447 1.596.232a.162.162 0 01.09.277z" }, void 0) }), void 0));
}
exports.default = SolidTrust;
