"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFillColourCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFillColourCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.076 7.422a3.918 3.918 0 002.28.979 5.797 5.797 0 002.71-1.5L6.833 4.664z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 .033A6.967 6.967 0 1013.967 7 6.967 6.967 0 007 .033zm-.435 10.522a.393.393 0 01-.555 0L3.199 7.743a.39.39 0 01-.084-.126.381.381 0 01-.012-.052.236.236 0 01-.009-.153.379.379 0 01.016-.08.39.39 0 01.033-.06.38.38 0 01.032-.058l.014-.01c.004-.005.005-.011.01-.016L6.277 4.11 6.167 4a.393.393 0 01.556-.555l3.588 3.589a.393.393 0 01-.556.555l-.112-.112zm3.638-.278a.714.714 0 01-.712-.712c0-.473.712-1.245.712-1.245s.712.772.712 1.245a.714.714 0 01-.712.712z" })] })));
}
exports.default = SolidFillColourCircle;
