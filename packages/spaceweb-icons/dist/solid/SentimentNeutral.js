"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSentimentNeutral(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentNeutral" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 .02a6.934 6.934 0 106.934 6.934A6.942 6.942 0 007 .02zm1.98 3.962a.99.99 0 11-.99.99.99.99 0 01.99-.99zm-3.961 0a.99.99 0 11-.991.99.99.99 0 01.99-.99zM9.52 9.218H4.527a.5.5 0 110-.999H9.52a.5.5 0 010 .999z" }) })));
}
exports.default = SolidSentimentNeutral;
