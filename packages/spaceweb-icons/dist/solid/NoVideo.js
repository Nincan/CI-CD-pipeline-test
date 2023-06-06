"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNoVideo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoVideo" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.21 4.577a1.68 1.68 0 00-1.68-1.68H4.672l5.538 5.538zm2.82-1.09l-1.94 1.11v4.718l1.127 1.127.813.465c.53.31.97.06.97-.56v-6.3c0-.62-.44-.86-.97-.56zM1.248.918a.7.7 0 00-.99.99l1.038 1.039A1.668 1.668 0 000 4.577v5.24a1.68 1.68 0 001.68 1.68h6.85a1.675 1.675 0 00.989-.328l2.626 2.626a.7.7 0 00.99-.99z" }, void 0) }), void 0));
}
exports.default = SolidNoVideo;
