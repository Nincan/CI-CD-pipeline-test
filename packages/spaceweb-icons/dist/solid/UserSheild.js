"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserSheild(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserSheild" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.868 1.121 7.24.008a.742.742 0 0 0-.21 0L1.181.91a.631.631 0 0 0-.481.412.7.7 0 0 0-.05.25l.01.542C.72 7.29.78 12.174 7.03 13.98a1.024 1.024 0 0 0 .17.02.694.694 0 0 0 .2-.03c5.386-1.876 5.898-7.312 5.948-12.247a.613.613 0 0 0-.481-.602ZM7 3.052a1.45 1.45 0 1 1-1.45 1.45A1.452 1.452 0 0 1 7 3.052ZM4.08 9.169A2.884 2.884 0 0 1 7 6.529a2.884 2.884 0 0 1 2.92 2.64Z" }) })));
}
exports.default = SolidUserSheild;
