"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTicket(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTicket" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M13.76 6.1a.696.696 0 01-.492.204.696.696 0 000 1.392.696.696 0 01.696.697v2.786a.696.696 0 01-.696.696H.732a.696.696 0 01-.696-.696V8.393a.696.696 0 01.696-.697.696.696 0 000-1.392.696.696 0 01-.696-.697V2.821a.696.696 0 01.696-.696h12.536a.696.696 0 01.696.696v2.786a.696.696 0 01-.204.493zM4.91 4.214a.696.696 0 00-.696.697v4.178a.696.696 0 001.393 0V4.911a.696.696 0 00-.696-.697z" }, void 0) }), void 0));
}
exports.default = SolidTicket;
