"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Unlock.svg instead.
 */
function LineUnlock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineUnlock" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.177 4.862H4.95V3.118c0-1.052.857-1.91 1.91-1.91a1.907 1.907 0 0 1 1.868 1.51.604.604 0 1 0 1.182-.254A3.113 3.113 0 0 0 6.86 0C5.14 0 3.741 1.4 3.741 3.118v1.744h-.917c-.772 0-1.401.629-1.401 1.401V12.6c0 .772.629 1.4 1.4 1.4h8.354c.772 0 1.4-.628 1.4-1.4V6.263c0-.772-.628-1.4-1.4-1.4zm.192 7.738a.192.192 0 0 1-.192.191H2.824a.192.192 0 0 1-.193-.191V6.263c0-.106.086-.192.193-.192h8.353c.106 0 .192.086.192.192V12.6z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.98 9.557a.98.98 0 1 0-1.96 0c0 .32.164.59.4.77v1.248a.604.604 0 1 0 1.209 0v-1.281a.964.964 0 0 0 .351-.737z" })] })));
}
exports.default = LineUnlock;
