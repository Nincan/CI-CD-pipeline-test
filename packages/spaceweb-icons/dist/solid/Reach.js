"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReach(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReach" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.1 3.85a1.67 1.67 0 00-1.67 1.67.84.84 0 000 .08l.03.26-2.36.82L8 6.5a2.08 2.08 0 00-1.8-1.03H6l-.07-.2-.28-1.2.19-.08a2.08 2.08 0 10-.87.2h.2l.33 1.4-.18.08a2.1 2.1 0 00-.85.7l-.12.18-.82-.38.03-.24a.89.89 0 00.01-.12A1.67 1.67 0 101.9 7.48a1.65 1.65 0 001.34-.69l.12-.16.81.38-.03.19a2 2 0 00.36 1.58l.12.16-1.05 1.2-.17-.1a2.07 2.07 0 00-.96-.23 2.1 2.1 0 102.1 2.1 2.07 2.07 0 00-.46-1.3l-.13-.17 1.03-1.17.18.1a2.03 2.03 0 002.1 0l.17-.11 1.32 1.44-.1.16a1.63 1.63 0 00-.23.85 1.64 1.64 0 101.64-1.64 1.61 1.61 0 00-.78.2l-.17.1-1.32-1.44.12-.16a2.08 2.08 0 00.39-1.2 1.04 1.04 0 00-.01-.14l-.04-.29 2.38-.82.1.16a1.67 1.67 0 101.37-2.63z" }) })));
}
exports.default = SolidReach;
