"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDecreaseCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDecreaseCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.4 4.6l-.1.03-.08.05-.06.05a.55.55 0 00-.1.63l.05.09.05.05L5.5 7.86a.55.55 0 00.63.1l.09-.05.06-.05 1.18-1.18 1.65 1.65h-.55a.54.54 0 00-.49.3l-.03.08-.03.1v.07a.55.55 0 00.38.52l.1.02.07.01h1.9a.54.54 0 00.1-.01l.04-.01.03-.01a.44.44 0 00.05-.02l.03-.02a.51.51 0 00.12-.09.54.54 0 00.15-.28v-.03l.01-.08V7a.55.55 0 00-1.07-.17l-.02.1V7.55L7.85 5.5a.55.55 0 00-.63-.1l-.09.05-.06.05L5.9 6.7 3.94 4.73a.54.54 0 00-.55-.14zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidDecreaseCircle;
