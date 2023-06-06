"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMergeCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMergeCircle" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .02A6.98 6.98 0 1013.98 7 6.98 6.98 0 007 .02zm.585 7.605a1.068 1.068 0 01-.32.76l-2.29 2.29a.58.58 0 01-.82 0 .586.586 0 010-.83l2.29-2.29-.03-2.55h-1.02a.349.349 0 01-.32-.21.341.341 0 01.08-.37l1.6-1.6a.325.325 0 01.24-.1.349.349 0 01.24.1l1.6 1.6a.34.34 0 01.08.37.33.33 0 01-.32.21h-1.01zm2.26 3.04a.554.554 0 01-.41.18.607.607 0 01-.42-.17l-1.38-1.39.83-.83 1.38 1.38a.586.586 0 010 .83z" }, void 0) }), void 0));
}
exports.default = SolidMergeCircle;
