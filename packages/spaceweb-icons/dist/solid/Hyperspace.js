"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHyperspace(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHyperspace" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.004 5.161a1.835 1.835 0 101.835 1.836A1.835 1.835 0 007.004 5.16zM2.585 0H.43A.442.442 0 000 .45V13.55A.442.442 0 00.43 14h2.155a.442.442 0 00.43-.451V.45A.442.442 0 002.586 0zM13.57 0h-2.155a.442.442 0 00-.43.451V13.55a.442.442 0 00.43.451h2.154A.442.442 0 0014 13.55V.45A.442.442 0 0013.57 0z" }, void 0) }), void 0));
}
exports.default = SolidHyperspace;
