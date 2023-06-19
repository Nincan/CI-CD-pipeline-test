"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLiveEvent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLiveEvent" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.287 13.987v-3.863c.029-.006.029-.011.056-.018a.459.459 0 00.379-.472c0-.557.003-1.115-.003-1.672a.156.156 0 01.108-.165c.28-.132.558-.27.845-.411L7.084 4.97 2.478 8.884l.77 1.15 2.607-1.271v.83a.467.467 0 00.432.53v3.837A6.92 6.92 0 01.043 7.782a7 7 0 1113.956-.82q0 .172-.007.344a6.936 6.936 0 01-6.705 6.68zm4.157-8.898c-.003-.051-.003-.136-.014-.219a1.954 1.954 0 00-3.757-.476.165.165 0 00.018.13c.5.766 1.014 1.524 1.5 2.298a.426.426 0 00.507.242.247.247 0 01.039-.003 1.967 1.967 0 001.707-1.972z" }) })));
}
exports.default = BrandLiveEvent;
