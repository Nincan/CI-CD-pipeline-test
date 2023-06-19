"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Calender.svg instead.
 */
function SolidCalendar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15 15", "data-icon-name": "SolidCalendar" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.8 1.6c.9 0 1.7.8 1.7 1.7v1.2H.4V3.3c0-.9.8-1.7 1.7-1.7H3V0h1.6v1.6h5.6V0h1.6v1.6h1zM.4 13.4V6.1h14.1v7.3c0 .9-.8 1.6-1.7 1.6H2.1c-.9 0-1.7-.7-1.7-1.6z" }) })));
}
exports.default = SolidCalendar;
