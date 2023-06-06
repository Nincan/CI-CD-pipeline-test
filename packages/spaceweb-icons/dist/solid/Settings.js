"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSettings(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSettings" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.2 7.68c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7a5.14 5.14 0 0 0-1.18-.69L8.75.29A.364.364 0 0 0 8.4 0H5.6c-.17 0-.32.13-.35.3l-.26 1.85c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15L.24 4.71c-.09.15-.05.34.08.45L1.8 6.32c-.03.22-.05.45-.05.68s.02.46.05.69L.32 8.85c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15l1.4-2.42c.09-.15.05-.34-.08-.45L12.2 7.68zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, void 0) }), void 0));
}
exports.default = SolidSettings;
