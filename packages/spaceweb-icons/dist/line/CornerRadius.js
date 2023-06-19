"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineCornerRadius(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCornerRadius" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.961 0H9.72a8.484 8.484 0 0 0-8.473 8.474v4.734a.792.792 0 0 0 1.584 0V8.474a6.897 6.897 0 0 1 6.889-6.89h2.241a.792.792 0 1 0 0-1.584Z" }) })));
}
exports.default = LineCornerRadius;
