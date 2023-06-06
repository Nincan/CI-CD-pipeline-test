"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReject(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReject" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.197 4.466a.525.525 0 00-.67.804L6.257 7l-1.73 1.73-.06.073a.526.526 0 00.73.73l.073-.06L7 7.743l1.73 1.73.073.06a.525.525 0 00.67-.803L7.743 7l1.73-1.73.06-.073a.526.526 0 00-.73-.73l-.073.06L7 6.257l-1.73-1.73-.073-.06zM6.585.117a.794.794 0 01.83 0l1.026.63a.793.793 0 00.415.118h.022l1.204-.033h.022c.29 0 .558.16.697.415l.573 1.059a.793.793 0 00.32.32l1.059.573c.263.142.423.42.415.72l-.033 1.203a.793.793 0 00.117.437l.63 1.026a.793.793 0 010 .83l-.63 1.026a.793.793 0 00-.117.437l.033 1.204a.793.793 0 01-.415.719l-1.059.573a.793.793 0 00-.32.32l-.573 1.059a.793.793 0 01-.697.415h-.022l-1.204-.033h-.022c-.146 0-.29.04-.415.117l-1.026.63a.794.794 0 01-.83 0l-1.026-.63a.793.793 0 00-.415-.117h-.022l-1.204.033h-.022a.793.793 0 01-.697-.415l-.573-1.059a.793.793 0 00-.32-.32l-1.059-.573a.793.793 0 01-.415-.72l.033-1.203a.793.793 0 00-.117-.437l-.63-1.026a.793.793 0 010-.83l.63-1.026a.793.793 0 00.117-.437L.832 3.918a.793.793 0 01.415-.719l1.059-.573a.793.793 0 00.32-.32l.573-1.059a.793.793 0 01.697-.415h.022l1.204.033h.022c.146 0 .29-.04.415-.117l1.026-.63z" }, void 0) }), void 0));
}
exports.default = SolidReject;
