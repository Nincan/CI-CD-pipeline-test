"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPostAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPostAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.914 7.483c.082.066.2.067.28-.002l6.494-5.392a.869.869 0 00-.57-.222H.882a.87.87 0 00-.572.224l6.605 5.392z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.039 8.498a1.537 1.537 0 01-.986.355 1.54 1.54 0 01-.975-.345L0 3.545v7.707c0 .487.395.881.881.881H13.12a.881.881 0 00.881-.881V3.549L8.04 8.499z" })] })));
}
exports.default = SolidPostAsset;
