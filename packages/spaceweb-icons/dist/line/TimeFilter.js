"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/TimeFilter.svg instead.
 */
function LineTimeFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 15", "data-icon-name": "LineTimeFilter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6 2.035c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6s6-2.691 6-6c0-3.308-2.691-6-6-6m0 10.83a4.836 4.836 0 01-4.83-4.83A4.836 4.836 0 016 3.205a4.836 4.836 0 014.83 4.83A4.836 4.836 0 016 12.865zm.585-4.798v-3.33a.585.585 0 00-1.17 0v3.572a.59.59 0 00.172.414l1.693 1.693a.582.582 0 00.826 0 .583.583 0 000-.827L6.585 8.067zM4.214 1.17a.585.585 0 010-1.17h3.573a.584.584 0 110 1.17H4.214z", fillRule: "evenodd" }) })));
}
exports.default = LineTimeFilter;
