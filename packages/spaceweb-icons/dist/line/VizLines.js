"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVizLines(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 6", "data-icon-name": "LineVizLines" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1 6.5H.7a.5.5 0 01-.1-.8L3 2.1l.4-.2h.3l2.4 1.7 3.2-4 .4-.1c.1 0 .3 0 .4.2l3.3 4c.2.3.1.6 0 .8-.3.1-.6.1-.8-.1L9.7.8 6.6 4.6c-.2.2-.5.3-.7 0L3.6 3.2 1.4 6.3l-.4.2z" }, void 0) }), void 0));
}
exports.default = LineVizLines;
