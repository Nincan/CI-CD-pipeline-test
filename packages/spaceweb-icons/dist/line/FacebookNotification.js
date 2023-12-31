"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineFacebookNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineFacebookNotification" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.812 7.862 11.366 6.44a2.418 2.418 0 0 1-.655-1.28A4.49 4.49 0 0 0 8.7 2.192a4.796 4.796 0 0 0-1.5-.626l-.016-.093A1.784 1.784 0 0 0 5.102.058a1.744 1.744 0 0 0-1.13.73 1.78 1.78 0 0 0-.294 1.34 1.1 1.1 0 0 0 .025.11 4.585 4.585 0 0 0-2 3.331 4.012 4.012 0 0 0 .063 1.306 2.062 2.062 0 0 1-.134 1.318l-.814 1.829a1.767 1.767 0 0 0 .226 1.797 1.745 1.745 0 0 0 1.706.649l.524-.096a2.495 2.495 0 0 0 2.324 1.599 2.368 2.368 0 0 0 .466-.049 2.48 2.48 0 0 0 1.593-1.032 2.396 2.396 0 0 0 .43-1.374l3.796-.667a1.763 1.763 0 0 0 .93-2.987Zm-6.01 3.882a1.265 1.265 0 0 1-.19.443 1.211 1.211 0 0 1-.787.508 1.254 1.254 0 0 1-1.28-.553ZM4.94 1.638a.592.592 0 0 1 .065-.126.57.57 0 0 1 .343-.23.5.5 0 0 1 .39.078.656.656 0 0 1 .114.105 5.26 5.26 0 0 0-.69.11c-.075.019-.15.04-.222.063ZM2.996 6.63a3.482 3.482 0 0 1-.042-.934A3.293 3.293 0 0 1 5.45 2.81a3.1 3.1 0 0 1 .795-.098 3.316 3.316 0 0 1 3.236 2.69 3.59 3.59 0 0 0 1.004 1.93l1.446 1.425a.499.499 0 0 1 .12.51.524.524 0 0 1-.394.355L2.53 11.24a.527.527 0 0 1-.505-.194.486.486 0 0 1-.057-.521l.816-1.83a3.45 3.45 0 0 0 .212-2.065Z" }) })));
}
exports.default = LineFacebookNotification;
