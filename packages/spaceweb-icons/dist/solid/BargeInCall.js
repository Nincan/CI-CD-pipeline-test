"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBargeInCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBargeInCall" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6 9.76s-.4.35-.67.23c-.26-.13-1.55-.9-1.55-.9a1.31 1.31 0 00-1.1.23L.3 10.92a1.15 1.15 0 00-.15 1.21 15.48 15.48 0 001.48 1.7 1.92 1.92 0 001.45.06A13 13 0 008.5 11L6.63 9.15l-.64.61zm7.62-8.24C13.19.89 11.94-.7 10.99.35a26.93 26.93 0 00-1.82 2.3s-.69.95-.08 1.57c.4.4.95 1.36.67 1.77a9.91 9.91 0 01-.7.74l1.77 1.74a19.97 19.97 0 003.12-5.63 2.1 2.1 0 00-.33-1.32z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.2 9.08a.72.72 0 00-.5.21v.01l-.72.73-5.22-5.18a.71.71 0 10-1 1.02l5.21 5.17-.67.68c0 .01 0 .02-.02.03l-.04.03a.7.7 0 00-.2.5.72.72 0 00.71.72h.01l2.48-.01a.72.72 0 00.7-.72l-.01-2.48a.72.72 0 00-.72-.7z" })] })));
}
exports.default = SolidBargeInCall;
