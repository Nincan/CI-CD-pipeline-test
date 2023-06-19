"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHeart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeart" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.97 5a4.22 4.22 0 00-2.21-3.73C9.29-.1 7.01 2.2 7.01 2.2h-.04S4.7-.1 2.22 1.27A4.22 4.22 0 000 5s-.34 2.2 3.03 5.19a17.76 17.76 0 003.69 2.41.65.65 0 00.52 0 17.76 17.76 0 003.69-2.41C14.3 7.2 13.97 5 13.97 5z" }) })));
}
exports.default = SolidHeart;
