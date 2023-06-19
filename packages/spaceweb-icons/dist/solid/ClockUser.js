"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidClockUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidClockUser" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.12 9.39a1.03 1.03 0 01.15-.13l.25-.17.22-.12a2.62 2.62 0 01-.55-1.6 2.64 2.64 0 014.57-1.8 6.4 6.4 0 10-6.35 7.25l.24-.01v-.37A3.95 3.95 0 018.11 9.4zm-1-2.98a.71.71 0 01-.21.5l-1.99 2a.7.7 0 01-1 0 .7.7 0 010-1.01L5.7 6.12V3.56a.71.71 0 111.42 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.9 10.16h.02l-.14-.1a2.9 2.9 0 00-.18-.12 2.96 2.96 0 00-.28-.16l-.2-.09a2.92 2.92 0 00-.37-.11l-.15-.05a2.88 2.88 0 00-.56-.05h-.43a2.88 2.88 0 00-.56.05l-.15.05a2.94 2.94 0 00-.37.11l-.2.1a2.98 2.98 0 00-.28.15 3 3 0 00-.18.12.9.9 0 00-.12.1 2.95 2.95 0 00-1.1 2.28v1.12a.44.44 0 00.45.44h5.46a.44.44 0 00.44-.44v-1.12a2.95 2.95 0 00-1.1-2.28zM9.2 7.37a1.64 1.64 0 101.63-1.64A1.64 1.64 0 009.2 7.37z" })] })));
}
exports.default = SolidClockUser;
