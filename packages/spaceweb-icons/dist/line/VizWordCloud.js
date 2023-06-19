"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineVizWordCloud(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 13 12", "data-icon-name": "LineVizWordCloud" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 3.6l-.6 2c-.1.5-.2.8-.3 1.2-.1-.5-.2-.8-.3-1.2l-.5-2h-1l-.5 2L5.4 7c-.1-.5-.2-1-.3-1.4l-.4-2H3.6L4.9 8h1l.5-1.8.4-1.4c0 .6.2 1 .3 1.4L7.6 8h1L10 3.6H9zM4.3 2.5H5V2h-.5c-.5 0-.8-.2-.8-.7s.3-.8.8-.8h.4V0h-.6s-.7 0-1.1.5c-.2.4-.2.7-.2.8 0 .7.4 1.2 1.2 1.2h.1zm.2 8c0 .5-.1.7-.5.7-.3 0-.4-.3-.4-.7V8.9H3v1.6c0 1 .5 1.2 1 1.2.7 0 1.1-.5 1.1-1.2V8.8h-.6v1.7zm6.8-4c-1 0-1.6.7-1.6 1.8 0 1 .6 1.7 1.5 1.7 1 0 1.7-.7 1.7-1.8 0-1-.7-1.7-1.6-1.7zm0 2.9c-.6 0-.9-.6-.9-1.2 0-.5.2-1.1.9-1.1.6 0 .8.5.8 1.1s-.2 1.2-.8 1.2zm0-6.9h-1V.4h-.6V3h1.6v-.5z", fillRule: "evenodd", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 6.3V3.1h1.1c.9 0 1.6.6 1.6 1.6S2 6.3 1.1 6.3H0zm1.1-.5c.6 0 1-.4 1-1.1 0-.7-.5-1.1-1-1.1H.5v2.2h.6z" })] })));
}
exports.default = LineVizWordCloud;
