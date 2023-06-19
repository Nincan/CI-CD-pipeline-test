"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidReschedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidReschedule" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.993 1.493h-.933V0H9.567v1.493H4.34V0H2.847v1.493h-.84A1.636 1.636 0 00.42 3.08v9.427A1.555 1.555 0 002.007 14h9.986a1.555 1.555 0 001.587-1.493V3.08a1.636 1.636 0 00-1.587-1.587zm-.389 6.7L10.391 9.41a.292.292 0 01-.21.09.297.297 0 01-.208-.085L8.755 8.192a.297.297 0 01.208-.508h.778c-.003-.07-.018-.138-.026-.208a3.06 3.06 0 00-3.017-2.675 3.03 3.03 0 00-2.959 2.923 2.956 2.956 0 002.906 3.003h.002a3.012 3.012 0 001.867-.625.514.514 0 01.319-.11.507.507 0 01.363.15.523.523 0 01.15.407.497.497 0 01-.193.367 3.954 3.954 0 01-2.437.844h-.013a4 4 0 01-3.998-4.002l.002-.108a4.063 4.063 0 013.88-3.881l.112-.002a4.007 4.007 0 013.999 3.996l.032-.002.664-.077a.298.298 0 01.301.292.294.294 0 01-.09.217zm-3.535.47a.407.407 0 01-.207.757h-.003a.41.41 0 01-.208-.055L6.295 8.56a.523.523 0 01-.253-.445v-1.6a.407.407 0 01.814-.006v1.48z" }) })));
}
exports.default = SolidReschedule;
