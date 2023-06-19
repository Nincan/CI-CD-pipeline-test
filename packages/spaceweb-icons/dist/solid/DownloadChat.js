"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDownloadChat(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDownloadChat" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.848 0H9.061v3h.565a1.438 1.438 0 011.334.899 1.466 1.466 0 01-.314 1.586L8.192 7.929a1.428 1.428 0 01-2.06-.03L3.706 5.475a1.427 1.427 0 010-2.05A1.403 1.403 0 014.727 3h.556V0H2.152A2.095 2.095 0 00.06 2.09v11.021a.877.877 0 00.565.828A.959.959 0 00.95 14a.904.904 0 00.666-.293l2.323-2.596h7.91a2.095 2.095 0 002.09-2.09V2.09A2.095 2.095 0 0011.85 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.424 4.758L6.87 7.212a.433.433 0 00.616 0l2.444-2.444a.44.44 0 00-.303-.758H8.051V0H6.293v4.01H4.727a.434.434 0 00-.303.748z" })] })));
}
exports.default = SolidDownloadChat;
