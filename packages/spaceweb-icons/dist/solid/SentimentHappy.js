"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSentimentHappy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentHappy" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 .02a6.935 6.935 0 106.935 6.934A6.942 6.942 0 007 .02zm1.618 3.962a.963.963 0 11-.963.964.963.963 0 01.963-.964zm-3.41 0a.963.963 0 11-.962.964.963.963 0 01.963-.964zm5.549 4.294a3.995 3.995 0 01-7.513 0 .563.563 0 01.336-.72.566.566 0 01.72.333 2.87 2.87 0 005.4 0 .578.578 0 01.718-.335.563.563 0 01.339.722z" }) })));
}
exports.default = SolidSentimentHappy;
