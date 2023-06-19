"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSecurity(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 19 19", "data-icon-name": "SolidSecurity" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M16.81 2.74L9.66.03a.5.5 0 00-.32 0L2.19 2.74a.45.45 0 00-.29.43v5.81c0 8.26 7.43 10 7.5 10.01l.1.01h.1c.03-.02 5.1-.58 7.29-7.73.14-.7.21-1.45.21-2.29V3.17a.45.45 0 00-.29-.43zM6.46 4.35l-1.43.6v1.82a.69.69 0 11-1.38 0V4.5c0-.28.16-.53.42-.64l1.86-.78a.69.69 0 01.53 1.27z" }) })));
}
exports.default = SolidSecurity;
