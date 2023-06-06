"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTemplate(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 18 14.4", "data-icon-name": "SolidTemplate" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.83 2.7H4.1a.5.5 0 00-.5.5v3.87c0 .28.22.5.5.5h3.73a.5.5 0 00.5-.5V3.2a.5.5 0 00-.5-.5zm6.07 0h-2.71a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h2.71a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5zM7.82 9.74H4.1a.5.5 0 00-.5.5v.96c0 .28.22.5.5.5h3.73a.5.5 0 00.5-.5v-.96a.5.5 0 00-.5-.5zM16 0a2 2 0 012 2v10.4a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h14z" }, void 0) }), void 0));
}
exports.default = SolidTemplate;
