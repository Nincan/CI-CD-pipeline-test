"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTransitionMessageOngoing(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTransitionMessageOngoing" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4 0H1.6A1.54 1.54 0 00.08 1.54v12.25a.2.2 0 00.36.14l2.81-3.15h5.08V9.5a1.18 1.18 0 011.8-1 3.35 3.35 0 013.81.49V1.54A1.55 1.55 0 0012.4 0zm-1.87 5.86v.01L8.65 7.83a.69.69 0 01-1.19-.48V6.08h-3.5a.7.7 0 010-1.38h3.48V3.44a.68.68 0 01.22-.5.7.7 0 01.98.01l1.87 1.96a.8.8 0 01.04.05.7.7 0 01-.03.9z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.84 10.3a1.63 1.63 0 01.33.47.4.4 0 00.4.23.37.37 0 00.36-.37.36.36 0 00-.04-.16 2.44 2.44 0 00-2.2-1.42 2.4 2.4 0 00-1.65.65l-.37-.37a.24.24 0 00-.17-.07.25.25 0 00-.25.24v1.25a.25.25 0 00.25.25h1.25a.24.24 0 00.24-.24.25.25 0 00-.07-.18l-.33-.33a1.64 1.64 0 012.25.06zm.84 1.67h-1.25a.24.24 0 00-.17.42l.33.32A1.64 1.64 0 0110 12.2a.4.4 0 00-.4-.22.37.37 0 00-.36.37.36.36 0 00.04.16 2.44 2.44 0 002.2 1.42 2.42 2.42 0 001.65-.65l.37.37a.25.25 0 00.35 0 .25.25 0 00.07-.18v-1.25a.25.25 0 00-.25-.24z" })] })));
}
exports.default = SolidTransitionMessageOngoing;
