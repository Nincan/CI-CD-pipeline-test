"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/ViewDetail.svg instead.
 */
function LineViewDetail(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineViewDetail" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.878 6.607a.502.502 0 01-.503-.502v-2.52l-2.518.002a.502.502 0 110-1.005l3.02-.001a.502.502 0 01.503.502v3.022a.502.502 0 01-.502.502z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.705 0h-7.33C2.692 0 2.14.554 2.14 1.234v4.961h1.005v-4.96a.23.23 0 01.23-.23h7.33a.23.23 0 01.229.23v7.33a.23.23 0 01-.229.23H5.866v1.004h4.84c.68 0 1.233-.553 1.233-1.234v-7.33C11.939.553 11.385 0 10.705 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.135 12h-3.84a1.235 1.235 0 01-1.234-1.234v-3.84c0-.68.554-1.233 1.235-1.233h3.839c.68 0 1.234.553 1.234 1.234v3.839c0 .68-.554 1.234-1.234 1.234zm-3.84-5.302a.23.23 0 00-.229.229v3.839c0 .126.103.23.23.23h3.839a.23.23 0 00.229-.23v-3.84a.23.23 0 00-.23-.228H1.297z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.233 2.728a.502.502 0 00-.71 0L5.487 5.764c.34.103.62.336.766.655l2.98-2.98a.502.502 0 000-.711z" })] })));
}
exports.default = LineViewDetail;
