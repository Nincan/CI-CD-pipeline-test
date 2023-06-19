"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidYoutubeHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidYoutubeHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0 .778 5.444V14h4.666V9.333h3.112V14h4.666V5.444L7 0z" }) })));
}
exports.default = SolidYoutubeHome;
