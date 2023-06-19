"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Add.svg instead.
 */
function LineAdd(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAdd" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.35 6.4H7.6V.65a.6.6 0 10-1.2 0V6.4H.65a.6.6 0 000 1.2H6.4v5.75a.6.6 0 001.2 0V7.6h5.75a.6.6 0 000-1.2z" }) })));
}
exports.default = LineAdd;
