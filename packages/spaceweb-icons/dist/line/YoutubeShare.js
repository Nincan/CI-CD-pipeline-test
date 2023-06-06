"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineYoutubeShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.1 2.54L13.06 7 9.1 11.459V8.4h-.7a10.461 10.461 0 00-6.825 2.163 8.348 8.348 0 016.922-4.97l.603-.091V2.54zM8.4.7v4.2C2.953 5.69.776 9.33 0 13.3a9.378 9.378 0 018.4-4.2v4.2L14 7z" }, void 0) }), void 0));
}
exports.default = LineYoutubeShare;
