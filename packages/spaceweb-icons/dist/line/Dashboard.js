"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineDashboard(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineDashboard" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.536 2.042a.292.292 0 01-.292.292H.328a.292.292 0 01-.292-.292V.292C.036.131.167 0 .328 0h2.917c.161 0 .292.131.292.292v1.75zM8.75 13.708a.292.292 0 01-.292.292H5.542a.292.292 0 01-.292-.292v-1.75c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v1.75zm-5.25 0a.292.292 0 01-.292.292H.292A.292.292 0 010 13.708v-8.75c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v8.75zm5.268-4.666a.292.292 0 01-.292.292H5.56a.292.292 0 01-.292-.292V.292c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v8.75zM14 3.245a.292.292 0 01-.292.292h-2.917a.292.292 0 01-.292-.292V.328c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v2.917zm0 5.232a.292.292 0 01-.292.292h-2.917a.292.292 0 01-.292-.292V5.56c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v2.917zm0 5.231a.292.292 0 01-.292.292h-2.917a.292.292 0 01-.292-.292v-2.917c0-.161.131-.292.292-.292h2.917c.161 0 .292.131.292.292v2.917z" }, void 0) }), void 0));
}
exports.default = LineDashboard;
