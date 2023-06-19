"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFilterSegment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFilterSegment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.04 6.257a7.015 7.015 0 0 0 6.243 7.719V.014A7.025 7.025 0 0 0 .04 6.257ZM13.613 5.918a1.502 1.502 0 0 1 .286.038A6.997 6.997 0 0 0 7.7.014v5.908c.01 0 .02-.004.03-.004ZM13.962 7.184a.362.362 0 0 0-.349-.199H7.73a.39.39 0 0 0-.349.2.372.372 0 0 0 .05.398l2.194 2.952v3.072a.37.37 0 0 0 .21.35.4.4 0 0 0 .15.029.346.346 0 0 0 .248-.1l1.217-.957.11-.09.14-.13.01-.09c0-.02.01-.129.01-.229v-1.845l2.203-2.962a.39.39 0 0 0 .04-.399Z" }) })));
}
exports.default = SolidFilterSegment;
