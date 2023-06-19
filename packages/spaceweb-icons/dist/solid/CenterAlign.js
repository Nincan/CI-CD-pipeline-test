"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCenterAlign(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCenterAlign" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.77 4.86a.32.32 0 00.45 0L9 3.1a.32.32 0 00-.22-.54H7.64V.64a.64.64 0 00-1.28 0v1.9H5.22A.32.32 0 005 3.1zm.45 4.28a.31.31 0 00-.45 0L5 10.9a.32.32 0 00.22.54h1.14v1.91a.64.64 0 101.28 0v-1.9h1.14A.32.32 0 009 10.9zM12.1 6.3H1.9a.7.7 0 100 1.4h10.2a.7.7 0 100-1.4z" }) })));
}
exports.default = SolidCenterAlign;
