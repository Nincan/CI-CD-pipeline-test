"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSpam(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpam" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.85 1.139L7.24.029a.738.738 0 00-.21 0l-5.83.9a.626.626 0 00-.48.41.697.697 0 00-.05.25l.01.54c.06 5.16.12 10.03 6.35 11.83a1.112 1.112 0 00.17.02.644.644 0 00.2-.03c5.37-1.87 5.88-7.29 5.93-12.21a.611.611 0 00-.48-.6zm-6.548 2.56a.7.7 0 111.4 0v3.68a.7.7 0 01-1.4 0zM7 10.74a.79.79 0 11.79-.79.79.79 0 01-.79.79z" }, void 0) }), void 0));
}
exports.default = SolidSpam;
