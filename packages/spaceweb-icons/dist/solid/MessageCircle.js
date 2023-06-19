"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMessageCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMessageCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.6 4H4.4a.4.4 0 00-.4.4V10l1.6-1.6h4A.4.4 0 0010 8V4.4a.4.4 0 00-.4-.4zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidMessageCircle;
