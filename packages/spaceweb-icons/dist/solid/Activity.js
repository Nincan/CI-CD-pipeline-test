"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidActivity(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 20 20", "data-icon-name": "SolidActivity" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.573 12.55H9.979c-.971 0-1.786.633-2.078 1.506H5.504A2.191 2.191 0 004.427 12.8V7.199c.505-.26.892-.704 1.076-1.249h2.376a2.19 2.19 0 002.075 1.5h6.595a2.2 2.2 0 000-4.4H9.954a2.19 2.19 0 00-2.075 1.5H5.503A2.192 2.192 0 004.427 3.3V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v2.8c-.71.366-1.2 1.097-1.2 1.95s.49 1.584 1.2 1.95v5.6c-.71.366-1.2 1.097-1.2 1.95s.49 1.584 1.2 1.95v2.8a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-2.8c.503-.26.89-.702 1.074-1.244h2.404a2.193 2.193 0 002.074 1.494h6.594a2.2 2.2 0 000-4.4z" }) })));
}
exports.default = SolidActivity;
