"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSentimentSad(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentSad" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7.066.02A6.934 6.934 0 1014 6.954 6.942 6.942 0 007.066.02zm1.98 3.962a.99.99 0 11-.99.99.99.99 0 01.99-.99zm-3.962 0a.99.99 0 11-.99.99.99.99 0 01.99-.99zm5.084 5.685a.44.44 0 01-.251.23.453.453 0 01-.563-.264 2.25 2.25 0 00-4.233 0 .443.443 0 01-.564.262.441.441 0 01-.264-.565 3.132 3.132 0 015.89 0 .438.438 0 01-.015.337z" }, void 0) }), void 0));
}
exports.default = SolidSentimentSad;
