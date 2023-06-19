"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVizPost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 11 12", "data-icon-name": "LineVizPost" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10 .1H1C.7.1.4.4.4.7v10.7c0 .3.3.6.6.6s.6-.3.6-.6V8h7.9v3.3c0 .3.3.6.6.6s.6-.3.6-.6V.7c-.1-.4-.3-.6-.7-.6zm-.6 1.2v2.1H1.6V1.3h7.8zM7.2 6.8H1.6V4.6h7.9v2.2H7.2z" }) })));
}
exports.default = LineVizPost;
