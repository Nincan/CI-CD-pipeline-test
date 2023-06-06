"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Refresh.svg instead.
 */
function LineRefresh(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineRefresh" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.435.768a.65.65 0 00-.803.445l-.35 1.22C10.936.857 9.002-.04 6.939 0 3.11.056.04 3.24.095 7.1.149 10.925 3.254 14 7.037 14h.1a6.974 6.974 0 005.903-3.478.649.649 0 00-1.124-.65 5.594 5.594 0 01-4.799 2.83h-.08c-3.075 0-5.6-2.505-5.645-5.621C1.348 3.937 3.844 1.344 6.957 1.3A5.559 5.559 0 0111.059 3l-1.038-.224a.65.65 0 00-.274 1.268l2.63.57a.646.646 0 00.762-.456l.742-2.587a.65.65 0 00-.446-.803z" }, void 0) }), void 0));
}
exports.default = LineRefresh;
