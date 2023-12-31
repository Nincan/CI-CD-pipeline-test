"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDeleteTable(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDeleteTable" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.286 4.937a.7.7 0 00-.99 0L6.86 6.372 5.425 4.937a.7.7 0 00-.99.99L5.87 7.362 4.435 8.798a.7.7 0 00.99.99L6.86 8.353l1.436 1.435a.7.7 0 00.99-.99L7.851 7.362l1.435-1.435a.7.7 0 000-.99z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.945 2.693a.66.66 0 00-.02-.101v-.87a.7.7 0 00-.7-.7H.755a.7.7 0 00-.7.7v10.556a.7.7 0 00.7.7h12.47a.7.7 0 00.7-.7V2.795a.66.66 0 00.02-.102zm-12.49 8.885V3.394h11.07v8.184z" })] })));
}
exports.default = LineDeleteTable;
