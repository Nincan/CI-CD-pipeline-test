"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFastBackward(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFastBackward" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.69 2.95L7.91 6.32l-.07.07V3.63a.83.83 0 00-1.3-.68l-4.8 3.37-.1.1V2.86a.83.83 0 00-1.65 0v8.3a.83.83 0 001.66 0V7.57l.09.1 4.78 3.38a.83.83 0 001.31-.68V7.6l.07.07 4.78 3.38a.83.83 0 001.31-.68V3.63a.83.83 0 00-1.31-.68z" }) })));
}
exports.default = SolidFastBackward;
