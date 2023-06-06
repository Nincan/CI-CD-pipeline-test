"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCursor(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCursor" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.70976,7.51632l-7.85-7.21a.514.514,0,0,0-.49-.11.53253.53253,0,0,0-.37.54l.29,10.85a.57722.57722,0,0,0,.29.48.50332.50332,0,0,0,.54-.03l1.86-1.38,1.31,2.9a.5047.5047,0,0,0,.3.29.46878.46878,0,0,0,.4-.02l2.36-1.13a.55466.55466,0,0,0,.27-.31.60735.60735,0,0,0-.03-.42l-1.31-2.91,2.22-.59a.54975.54975,0,0,0,.38-.4A.618.618,0,0,0,11.70976,7.51632Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidCursor;
