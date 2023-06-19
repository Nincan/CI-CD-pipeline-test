"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWebSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidWebSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.3.305H.7a.709.709 0 0 0-.7.7v11.99a.702.702 0 0 0 .7.7h10.92l-1.4-1.4H1.41v-7.88h11.18v5.39l1.41 1.41V1.005a.709.709 0 0 0-.7-.7Z", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.163 9.752a2.933 2.933 0 1 0-2.531 1.459 2.913 2.913 0 0 0 1.468-.397l2.397 2.397a.516.516 0 0 0 .502.145 1.073 1.073 0 0 0 .705-.706.51.51 0 0 0-.145-.502ZM9 10.119A1.87 1.87 0 0 1 6.796 8.64a1.857 1.857 0 0 1 1.468-2.193A1.872 1.872 0 1 1 9 10.12Z", fillRule: "evenodd" })] })));
}
exports.default = SolidWebSearch;
