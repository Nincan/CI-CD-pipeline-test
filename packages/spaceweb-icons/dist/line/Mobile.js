"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Mobile.svg instead.
 */
function LineMobile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMobile" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7.011", cy: "11.806", r: ".433" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.038 0H3.962c-.976 0-1.767.791-1.767 1.767v10.466c0 .976.79 1.767 1.767 1.767h6.076c.976 0 1.767-.791 1.767-1.767V1.767C11.805.79 11.015 0 10.038 0zM3.962 1h6.076c.423 0 .767.344.767.767v.859h-7.61v-.86c0-.422.344-.766.767-.766zm6.843 2.495v6.564h-7.61V3.495h7.61zM10.038 13H3.962a.768.768 0 0 1-.767-.767v-1.305h7.61v1.305a.768.768 0 0 1-.767.767z" })] })));
}
exports.default = LineMobile;
