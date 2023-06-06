"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/RejectCircle.svg instead.
 */
function LineRejectCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineRejectCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.4 4.6c-.2-.2-.6-.2-.8 0L7 6.2 5.4 4.6c-.2-.2-.6-.2-.8 0s-.2.6 0 .8L6.2 7 4.6 8.6c-.2.2-.2.6 0 .8.1.1.2.2.4.2s.3-.1.4-.2L7 7.8l1.6 1.6c.1.1.2.2.4.2s.3-.1.4-.2c.2-.2.2-.6 0-.8L7.8 7l1.6-1.6c.3-.2.3-.6 0-.8z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.1 0 0 3.1 0 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12.8c-3.2 0-5.8-2.6-5.8-5.8S3.8 1.2 7 1.2s5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z" }, void 0)] }), void 0));
}
exports.default = LineRejectCircle;
