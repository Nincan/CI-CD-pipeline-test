"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEndCallCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEndCallCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm3.485 8.313a12.518 12.518 0 01-1.356-.157s-.536-.085-.537-.485c-.001-.264-.137-.76-.364-.801-.228-.042-2.476 0-2.476 0s-.245.016-.29.145c-.046.13-.219.802-.219.802a.614.614 0 01-.437.29c-.324.06-1.305.258-1.305.258s-.38-.044-.448-.348a7.156 7.156 0 01-.07-1.041s.047-.246.457-.498a6.047 6.047 0 013.489-.843 9.264 9.264 0 013.712.888.964.964 0 01.326.544c.065.344.175 1.281-.482 1.246z" }, void 0) }), void 0));
}
exports.default = SolidEndCallCircle;
