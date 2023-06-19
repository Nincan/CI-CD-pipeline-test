"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInvalidMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInvalidMessage" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h9.15a1.55 1.55 0 001.54-1.54v-7.7A1.55 1.55 0 0012.4 0zM6.26 3.02a.7.7 0 011.4 0v2.71a.7.7 0 01-1.4 0zm.7 5.41a.76.76 0 11.76-.75.76.76 0 01-.76.75z" }) })));
}
exports.default = SolidInvalidMessage;
