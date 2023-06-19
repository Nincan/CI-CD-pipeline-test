"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDeleteRow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDeleteRow" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.98 2.757a.665.665 0 00.02-.098.665.665 0 00-.02-.097V1.68a.706.706 0 00-.705-.706H.705A.706.706 0 000 1.68v10.64a.706.706 0 00.706.706h12.569a.706.706 0 00.705-.706v-1.215a.665.665 0 00.02-.098.665.665 0 00-.02-.097zM12.57 10.3H1.412V3.365h11.157z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.545 9.278a.706.706 0 00.998 0L6.99 7.831l1.447 1.447a.706.706 0 00.998-.998L7.988 6.833l1.447-1.447a.706.706 0 00-.998-.998L6.99 5.835 5.543 4.388a.706.706 0 00-.998.998l1.447 1.447L4.545 8.28a.706.706 0 000 .998z" })] })));
}
exports.default = LineDeleteRow;
