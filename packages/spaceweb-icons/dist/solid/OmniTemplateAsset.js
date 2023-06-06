"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidOmniTemplateAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidOmniTemplateAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.067 0H3.982C3.05 0 3.05.848 3.05.992v1.432h6.969c1.037 0 1.733.72 1.733 1.791V8.46h1.316C14 8.46 14 7.456 14 7.312V.992C14 .848 14 0 13.067 0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M2.758 14a.41.41 0 00.23-.076L5.64 11.84a.843.843 0 01.448-.158h3.929c.933 0 .933-1.004.933-1.148v-6.32c0-.143 0-.991-.933-.991H.933C0 3.224 0 4.072 0 4.215v6.303c0 .144 0 1.165.933 1.165h1.37c.136 0 .248.118.248.262v1.821c0 .178.1.234.207.234z" }, void 0)] }), void 0));
}
exports.default = SolidOmniTemplateAsset;
