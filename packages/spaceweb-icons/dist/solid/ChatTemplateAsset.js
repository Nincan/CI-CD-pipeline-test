"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChatTemplateAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChatTemplateAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.818 4.404a1.003 1.003 0 110 2.007 1.003 1.003 0 010-2.007zm3.182 0A1.003 1.003 0 117 6.41a1.003 1.003 0 010-2.007zm3.182 0a1.004 1.004 0 110 2.007 1.004 1.004 0 010-2.007zM1.193 0C0 0 0 1.084 0 1.268v8.08c0 .183 0 1.466 1.193 1.466h5.023c.175 0 .433.09.573.202l3.392 2.663c.14.11.558.211.558-.202V11.15c0-.184.143-.335.318-.335h1.75C14 10.814 14 9.51 14 9.325V1.268C14 1.084 14 0 12.807 0H1.193z" }, void 0) }), void 0));
}
exports.default = SolidChatTemplateAsset;
