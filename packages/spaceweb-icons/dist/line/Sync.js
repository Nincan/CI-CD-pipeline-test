"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Sync.svg instead.
 */
function LineSync(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSync" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.14.13c6.62 1.63 7.97 9.43 2.28 12.27l1.4.27a.67.67 0 11-.25 1.3l-3.71-.72.63-3.25c.17-.87 1.65-.58 1.49.28l-.17.87c4.36-2.38 3.18-8.46-2.01-9.73A.67.67 0 118.14.13zM6.2 12.6a.67.67 0 11-.34 1.28C-.75 12.25-2.1 4.45 3.54 1.6l-1.4-.27a.67.67 0 11.25-1.3l3.75.73L5.51 4c-.17.87-1.7.57-1.52-.3l.17-.86C-.16 5.24.97 11.3 6.2 12.59z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineSync;
