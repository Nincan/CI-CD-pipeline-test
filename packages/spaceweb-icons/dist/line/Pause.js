"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Pause.svg instead.
 */
function LinePause(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LinePause" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4 14c1.5 0 1.5-1.712 1.5-2V2c0-.575 0-2-1.5-2-1.647 0-1.5 1.678-1.5 2v10c0 .39-.003 2 1.5 2zm6.003 0c1.5 0 1.5-1.712 1.5-2V2c0-.575 0-2-1.5-2-1.647 0-1.5 1.678-1.5 2v10c0 .39-.003 2 1.5 2z" }, void 0) }), void 0));
}
exports.default = LinePause;
