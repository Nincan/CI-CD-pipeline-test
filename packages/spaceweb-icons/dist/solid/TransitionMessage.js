"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTransitionMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTransitionMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h9.15a1.55 1.55 0 001.54-1.54v-7.7A1.55 1.55 0 0012.4 0zm-1.87 5.86v.01L8.65 7.83a.69.69 0 01-1.19-.48V6.08h-3.5a.7.7 0 010-1.38h3.48V3.44a.68.68 0 01.22-.5.7.7 0 01.98.01l1.87 1.96.04.05a.7.7 0 01-.03.9z" }, void 0) }), void 0));
}
exports.default = SolidTransitionMessage;
