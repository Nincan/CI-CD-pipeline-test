"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidColourPicker(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidColourPicker" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.703 2.099L11.902.298a.766.766 0 00-1.085 0l-2.401 2.4-.947-.93a.767.767 0 00-1.085 1.085l.554.554L.19 10.156a.378.378 0 00-.115.277v3.109a.381.381 0 00.385.385h3.109a.361.361 0 00.27-.116l6.748-6.749.554.554a.767.767 0 001.085-1.085l-.939-.939 2.402-2.4a.763.763 0 00.015-1.093M3.09 12.388L1.613 10.91l6.203-6.203 1.478 1.478z" }, void 0) }), void 0));
}
exports.default = SolidColourPicker;
