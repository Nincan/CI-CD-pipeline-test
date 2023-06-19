"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Macro.svg instead.
 */
function LineMacro(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineMacro" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M5.4 3.4l.7.2a.7.7 0 00.4-1.3l-.8-.2a.7.7 0 00-.8.5.7.7 0 00.5.8zm6.1.3l-.7-.2a.7.7 0 00-.4 1.3l.7.2a.7.7 0 00.4-1.3zm-1.5-1a.7.7 0 00.5-.2l.5-.6a.7.7 0 10-1-1l-.5.6a.7.7 0 00.5 1.2zM7.2 1.6A.7.7 0 008 2a.7.7 0 00.5-.9L8.3.5A.7.7 0 007 .8l.2.8zm2.5 4a.7.7 0 00-1.3.3l.2.7a.7.7 0 101.3-.3l-.2-.8zM9 4a.8.8 0 00.2-.5A.8.8 0 009 3a.8.8 0 00-1.1 0 .8.8 0 00-.3.6c0 .2.1.4.3.5.1.2.3.3.5.3L9 4zm-2.6.6L.2 10.8a.7.7 0 101 1l6.1-6.2a.7.7 0 10-1-1z" }) })));
}
exports.default = LineMacro;
