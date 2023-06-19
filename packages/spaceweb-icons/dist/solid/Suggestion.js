"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSuggestion(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSuggestion" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.926 12.668l-1.398-2.75a6.568 6.568 0 10-5.87 3.617 6.499 6.499 0 003.615-1.085l2.919 1.05a.597.597 0 00.734-.832zm-8.73-2.502a.17.17 0 01-.127.054H3.971a.179.179 0 01-.18-.18V8.94a.177.177 0 01.054-.13l3.94-3.94L9.14 6.225zm4.991-4.988l-.66.66-1.355-1.354.66-.66a.36.36 0 01.51 0l.845.844a.36.36 0 010 .51z" }) })));
}
exports.default = SolidSuggestion;
