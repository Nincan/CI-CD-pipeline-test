"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Edit.svg instead.
 */
function LineEdit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 8.5", "data-icon-name": "LineEdit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.4 8.5H.5a.5.5 0 110-1h2.9a.5.5 0 01.5.5.5.5 0 01-.5.5zm8.1-8C11-.2 10-.2 9.3.4l-4 4a1.5 1.5 0 00-.4.8l-.3 1.5a.5.5 0 00.5.6L6.8 7c.3 0 .5-.2.7-.4l4-4a1.5 1.5 0 00.5-1.2 1.6 1.6 0 00-.5-1zm-.7 1.4l-4 4a.6.6 0 01-.3.2l-.8.2.2-.9a.5.5 0 01.1-.3l4-4a.6.6 0 01.8 0 .6.6 0 010 .8z" }, void 0) }), void 0));
}
exports.default = LineEdit;
