"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineYoutubeDownload(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeDownload" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.144 13.232H7.363l5.126-5.98a.384.384 0 00-.583-.501l-4.994 5.827V.384a.384.384 0 10-.768 0v12.194L1.148 6.751a.384.384 0 00-.584.5l5.129 5.981H.856a.384.384 0 100 .768h12.288a.384.384 0 100-.768z" }, void 0) }), void 0));
}
exports.default = LineYoutubeDownload;
