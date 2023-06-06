"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/NoPreview.svg instead.
 */
function LineNoPreview(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineNoPreview" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 12.067c-3.183 0-5.714-2.835-6.654-4.053a1.659 1.659 0 0 1 0-2.028C1.286 4.768 3.818 1.933 7 1.933c3.184 0 5.714 2.835 6.654 4.053a1.66 1.66 0 0 1 0 2.028c-.94 1.218-3.47 4.053-6.654 4.053zm0-8.934c-2.65 0-4.872 2.508-5.704 3.587a.457.457 0 0 0 0 .56C2.127 8.359 4.348 10.867 7 10.867c2.652 0 4.873-2.508 5.704-3.586a.458.458 0 0 0 0-.56C11.873 5.64 9.652 3.132 7 3.132z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 5.765c.681 0 1.235.554 1.235 1.235S7.681 8.235 7 8.235 5.765 7.681 5.765 7 6.32 5.765 7 5.765m0-1.2a2.435 2.435 0 1 0 0 4.87 2.435 2.435 0 0 0 0-4.87z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.932 12.967a.6.6 0 0 1-.397-1.05L12.67 1.185a.6.6 0 1 1 .795.898L1.329 12.816a.598.598 0 0 1-.397.151z" }, void 0)] }), void 0));
}
exports.default = LineNoPreview;
