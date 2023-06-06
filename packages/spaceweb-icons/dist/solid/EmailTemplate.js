"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEmailTemplate(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmailTemplate" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.92 5.66a1.03 1.03 0 0 0-.72-.28h-.3v-.46l.02-3.86A1.06 1.06 0 0 0 10.86 0H3.14a1.052 1.052 0 0 0-1.05 1.06v4.32H1.8a.495.495 0 0 0-.17.02 1.066 1.066 0 0 0-.9 1.06l-.01 6.47A1.073 1.073 0 0 0 1.8 14h10.4a1.073 1.073 0 0 0 1.08-1.07V6.46a1.057 1.057 0 0 0-.36-.8ZM3.81 1.82h6.31a.5.5 0 0 1 .5.49.493.493 0 0 1-.5.49H3.81a.49.49 0 1 1 0-.98Zm5.38 2.77a.248.248 0 0 1-.01.09.512.512 0 0 1-.49.41H3.81a.49.49 0 0 1-.47-.41.248.248 0 0 1-.01-.09.48.48 0 0 1 .48-.48h4.88a.491.491 0 0 1 .5.48Zm3.01 8.34H1.8V7.54l.29.16 3.84 2.06.15.08.73.39.78-.39.16-.08.66-.33.31-.15 3.48-1.74Zm-.31-6.32v.01L6.81 9.15l-1.64-.88-1.89-1.02-1.19-.64-.29-.15h10.4Z" }, void 0) }), void 0));
}
exports.default = SolidEmailTemplate;
