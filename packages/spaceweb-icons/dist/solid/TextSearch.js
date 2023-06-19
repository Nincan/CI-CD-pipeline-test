"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTextSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTextSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "m13.455 12.31-2.63-2.66.24-.35a5.953 5.953 0 1 0-1.87 1.76l.23-.14 2.71 2.71a.93.93 0 0 0 .66.27.946.946 0 0 0 .66-.27.93.93 0 0 0 .27-.66.983.983 0 0 0-.27-.66Zm-7.28-2.01a4.3 4.3 0 1 1 4.3-4.3 4.3 4.3 0 0 1-4.3 4.3Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.135 3.53h-3.93a.6.6 0 0 0 0 1.2h3.93a.6.6 0 1 0 0-1.2ZM8.135 5.4h-3.93a.6.6 0 0 0 0 1.2h3.93a.6.6 0 1 0 0-1.2ZM8.135 7.26h-3.93a.6.6 0 1 0 0 1.2h3.93a.6.6 0 1 0 0-1.2Z" })] })));
}
exports.default = SolidTextSearch;
