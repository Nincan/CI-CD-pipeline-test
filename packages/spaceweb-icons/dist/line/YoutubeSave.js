"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineYoutubeSave(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineYoutubeSave" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M14 7.7h-2.8v2.8H9.8V7.7H7V6.3h2.8V3.5h1.4v2.8H14zM8.4 3.5H0v.7h8.4zM0 7h5.6v-.7H0zm0 2.8h5.6v-.7H0z" }) })));
}
exports.default = LineYoutubeSave;
