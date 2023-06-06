"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineNewsFeed(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineNewsFeed" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.298.158v7.327H.158v4.58c0 1.155 1.027 1.778 1.994 1.778h9.82c.961 0 1.87-.91 1.87-1.87V.158H3.299zm9.421 4.46H4.421V1.281h8.298v3.337zm-.747 8.102H4.158c.166-.295.263-.609.263-.88v-6.1h8.298v6.232c0 .341-.405.747-.747.747zM1.281 8.608h2.017v3.232c0 .22-.356.88-.88.88h-.266c-.009 0-.871-.018-.871-.655V8.608z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.37 7.708H6.552a.6.6 0 0 0 0 1.2h3.818a.6.6 0 0 0 0-1.2z" }, void 0)] }), void 0));
}
exports.default = LineNewsFeed;
