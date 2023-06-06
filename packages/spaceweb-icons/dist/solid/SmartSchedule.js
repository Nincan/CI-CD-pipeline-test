"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSmartSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSmartSchedule" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.83 13.72v-1.5a.25.25 0 00-.08-.13l-.24-.22H1.39V4.98h9.71a3.85 3.85 0 011.3.23V2.76a1.38 1.38 0 00-1.37-1.38h-.69v-.7a.69.69 0 00-1.38 0v.7h-5.5v-.7a.69.69 0 00-1.38 0v.7h-.7A1.37 1.37 0 00.03 2.75L0 12.4a1.38 1.38 0 001.38 1.38h7.58l-.05-.1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.92 6.64a2.86 2.86 0 00-2.44-.6 2.92 2.92 0 00-2.21 2.27 2.99 2.99 0 001.09 2.98 1.28 1.28 0 01.47.81.07.07 0 01.03 0h2.48a.04.04 0 01.02 0 1.41 1.41 0 01.53-.84 3 3 0 00.03-4.62zm-.27 2.5a.32.32 0 01-.31-.31 1.15 1.15 0 00-1.14-1.16.32.32 0 010-.64 1.78 1.78 0 011.76 1.8.32.32 0 01-.31.32zm-2.79 4a.76.76 0 00.72.86h1.03a.73.73 0 00.73-.74v-.53H9.86z" }, void 0)] }), void 0));
}
exports.default = SolidSmartSchedule;
