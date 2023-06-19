"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFacebookWowClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFacebookWowClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#FFD854", d: "M7 14c3.855 0 7-3.145 7-7s-3.145-7-7-7-7 3.145-7 7 3.145 7 7 7z" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "7", cy: "9.715", rx: "2.011", ry: "2.735" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.564 2.059a.28.28 0 01-.299-.475 1.55 1.55 0 011.027-.225c.35.046.685.208.935.48a.281.281 0 01-.413.38.992.992 0 00-1.25-.16zm.46 1.814c-.522.082-.858.767-.75 1.53.107.762.616 1.313 1.138 1.23.521-.082.857-.767.75-1.53-.107-.762-.617-1.313-1.138-1.23zm-6.048 0c.522.082.857.767.75 1.53-.107.762-.616 1.313-1.138 1.23-.521-.082-.857-.767-.75-1.53.107-.762.617-1.313 1.138-1.23zm.759-2.289a.28.28 0 01-.3.475.992.992 0 00-1.249.16.281.281 0 01-.413-.38c.25-.272.585-.434.935-.48a1.55 1.55 0 011.027.225z" })] })) })));
}
exports.default = SolidFacebookWowClr;
