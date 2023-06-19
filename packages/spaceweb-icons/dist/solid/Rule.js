"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRule" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.876 10.216v-2.95a1.1 1.1 0 00-1.1-1.1H7.6V3.779h2.198a.5.5 0 00.5-.5V.659a.5.5 0 00-.5-.5H4.482a.5.5 0 00-.5.5v2.62a.5.5 0 00.5.5H6.4v2.387H2.224a1.1 1.1 0 00-1.1 1.1v2.95a1.897 1.897 0 101.2-.115V7.365H6.4v2.79a1.896 1.896 0 101.2 0v-2.79h4.077v2.736a1.895 1.895 0 101.199.115z" }) })));
}
exports.default = SolidRule;
