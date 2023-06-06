"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidError(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 11.77", "data-icon-name": "SolidError" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.87 10.4L7.77.42a.9.9 0 00-1.54 0L.13 10.4a.9.9 0 00.78 1.38h12.18a.9.9 0 00.78-1.38zM6.49 3.44a.46.46 0 01.51-.4.46.46 0 01.5.4v2.83a.46.46 0 01-.5.4.46.46 0 01-.5-.4zM7 9.29a.76.76 0 11.76-.76.76.76 0 01-.76.76z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidError;
