"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAudio(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAudio" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.837 0a1.47 1.47 0 00-.743.203l-3.792 3.5h-2.24A1.477 1.477 0 00.586 5.178v3.644a1.477 1.477 0 001.476 1.476h2.241l3.627 3.375.16.122a1.466 1.466 0 00.747.205 1.492 1.492 0 001.024-.412 1.458 1.458 0 00.453-1.064V1.477A1.478 1.478 0 008.837 0zm3.51 3.744a.592.592 0 00-1.022.596A6.696 6.696 0 0112.23 7a4.768 4.768 0 01-.861 2.596.591.591 0 10.935.724A5.898 5.898 0 0013.414 7a7.978 7.978 0 00-1.067-3.256z" }, void 0) }), void 0));
}
exports.default = SolidAudio;
