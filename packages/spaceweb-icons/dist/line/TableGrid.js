"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTableGrid(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTableGrid" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.925 9.063v-3.04m0-.194v-3.04a.66.66 0 00.02-.098.66.66 0 00-.02-.096V1.72a.7.7 0 00-.7-.7H.755a.7.7 0 00-.7.7v10.556a.7.7 0 00.7.7h4.061c.007 0 .013.004.02.004s.012-.003.019-.003h4.31c.008 0 .013.003.02.003s.013-.003.02-.003h4.02a.7.7 0 00.7-.7v-3.02m-8.39-.797V6.626h2.95V8.46zm2.95 1.4v1.716h-2.95V9.86zm0-6.468v1.834h-2.95V3.392zm1.4 0h2.64v1.834h-2.64zm-5.75 0v1.834h-2.68V3.392zm-2.68 3.234h2.68V8.46h-2.68zm8.43 0h2.64V8.46h-2.64zM1.455 9.86h2.68v1.716h-2.68zm8.43 1.716V9.86h2.64v1.716z" }, void 0) }), void 0));
}
exports.default = LineTableGrid;
