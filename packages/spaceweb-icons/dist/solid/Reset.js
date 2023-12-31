"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C5.4 0 3.7.6 2.5 1.7L2 1.3 1.4.7C1.1.4.5.4.2.7c-.1.2-.2.4-.2.6v3c0 .5.4.8.8.8h3c.5 0 .8-.4.8-.8 0-.2-.1-.4-.2-.6l-1-1c2.4-2 5.9-1.7 7.8.7s1.7 5.9-.7 7.8c-1 .8-2.3 1.3-3.6 1.3-.8 0-1.6-.2-2.3-.5-.2-.1-.4-.2-.5-.3.5-1 0-2.3-1.1-2.7S.6 9 .2 10.1c-.5 1.1.1 2.4 1.2 2.8.3.1.5.2.8.2.4 0 .7-.1 1-.3.3.2.6.4.9.5.9.5 1.9.7 2.9.7 3.9 0 7-3.1 7-7s-3.1-7-7-7zM1.4 10.9c0-.4.3-.7.7-.7s.7.3.7.7c0 .4-.3.7-.7.7-.4.1-.7-.2-.7-.7z" }) })));
}
exports.default = SolidReset;
