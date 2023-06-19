"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineYoutubeSubscription(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeSubscription" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.4 2.8h11.2v.7H1.4zM3.5.7h7v.7h-7zM5.6 7v4.2l3.5-2.1L5.6 7z" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 4.9v8.4h14V4.9Zm13.3 7.7H.7v-7h12.6Z" })] })));
}
exports.default = LineYoutubeSubscription;
