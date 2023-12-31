"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidManualSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidManualSchedule" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.17 11.86h-5.8V5h9.71a2.47 2.47 0 011.3.37v-2.6A1.38 1.38 0 0011 1.4h-.69V.7a.69.69 0 10-1.37 0v.69h-5.5V.7a.69.69 0 00-1.38 0v.69h-.68A1.37 1.37 0 000 2.76v9.64a1.37 1.37 0 001.37 1.38h5.8a1.37 1.37 0 01-.02-.2v-1.4l.02-.3z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.98 10.07H13l-.12-.1a2.73 2.73 0 00-.17-.1 2.76 2.76 0 00-.27-.15l-.17-.09a2.7 2.7 0 00-.35-.1l-.13-.04a2.67 2.67 0 00-.52-.05h-.4a2.67 2.67 0 00-.52.05c-.05 0-.1.03-.14.04a2.72 2.72 0 00-.34.1l-.18.09a2.77 2.77 0 00-.27.14l-.16.12-.12.08h.01a2.73 2.73 0 00-1.02 2.12v1.4a.41.41 0 00.41.4h5.05a.41.41 0 00.41-.4v-1.4a2.73 2.73 0 00-1.02-2.11zm-1.91-4.1a1.52 1.52 0 101.52 1.52 1.52 1.52 0 00-1.52-1.52z" })] })));
}
exports.default = SolidManualSchedule;
