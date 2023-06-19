"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMaximize(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16 16", "data-icon-name": "SolidMaximize" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.865 1.163a.999.999 0 00-.618-.923 1.013 1.013 0 00-.383-.078l-5.998-.1a1 1 0 000 2l3.585.101-3.394 3.413A1 1 0 1010.47 6.99l3.394-3.412.119 3.603a1 1 0 102 0l-.119-6.018zM.182 14.89a.999.999 0 00.617.923.996.996 0 00.383.077l5.999.1a1 1 0 000-2l-3.585-.1 3.398-3.399A1 1 0 105.58 9.078l-3.398 3.398-.12-3.603a1 1 0 10-2 0l.12 6.018z" }) })));
}
exports.default = SolidMaximize;
