"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandKochavaCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandKochavaCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#D90B14", d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3.974 6.166L8.56 7.902l.758 2.828c.016.057-.05.1-.097.064L7 9.034 4.89 10.792a.061.061 0 01-.099-.06l.652-2.83-2.416-1.736a.061.061 0 01.036-.111l2.975.015.905-2.834a.061.061 0 01.117 0l.904 2.834 2.975-.015c.06 0 .085.076.036.11z" }) })));
}
exports.default = BrandKochavaCircleClr;
