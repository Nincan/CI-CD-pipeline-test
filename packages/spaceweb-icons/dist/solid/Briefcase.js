"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBriefcase(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBriefcase" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.537 3.193H9.768V1.81A1.38 1.38 0 008.384.425H5.616a1.38 1.38 0 00-1.384 1.384v1.384H1.463A1.374 1.374 0 00.086 4.578L.079 12.19a1.38 1.38 0 001.384 1.384h11.074a1.38 1.38 0 001.384-1.384V4.578a1.38 1.38 0 00-1.384-1.385zm-4.153 0H5.616V1.81h2.768z" }) })));
}
exports.default = SolidBriefcase;
