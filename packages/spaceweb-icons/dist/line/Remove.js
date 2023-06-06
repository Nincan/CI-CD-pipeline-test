"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Remove.svg instead.
 */
function LineRemove(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineRemove" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a6.98 6.98 0 106.98 6.98A6.98 6.98 0 007 0zm0 12.559a5.58 5.58 0 115.58-5.58A5.586 5.586 0 017 12.56z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.96 6.28H4.04a.7.7 0 100 1.4h5.92a.7.7 0 100-1.4z" }, void 0)] }), void 0));
}
exports.default = LineRemove;
