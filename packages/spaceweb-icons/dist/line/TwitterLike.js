"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTwitterLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.843 3.585A3.922 3.922 0 0010.414.402a4.115 4.115 0 00-3.419 1.93 4.082 4.082 0 00-3.41-1.93A3.913 3.913 0 00.157 3.585c-.33 1.291-.838 5.831 6.622 9.957a.447.447 0 00.226.056.5.5 0 00.226-.056c7.45-4.116 6.942-8.657 6.612-9.957m-6.838 9.006C.374 8.833.779 4.932 1.07 3.82a3.021 3.021 0 012.514-2.477 3.465 3.465 0 012.977 2.128.481.481 0 00.443.302.493.493 0 00.433-.302 3.45 3.45 0 012.976-2.128 3.031 3.031 0 012.515 2.477c.283 1.121.697 5.02-5.924 8.77", fillRule: "evenodd" }) })));
}
exports.default = LineTwitterLike;
