"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTwitterComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.943.225a36.74 36.74 0 00-4-.085A6.79 6.79 0 001.35 1.605 4.493 4.493 0 000 5.035c0 4.279 3.83 5.253 5.17 5.451l-.028 2.92a.508.508 0 00.217.406.489.489 0 00.254.066.395.395 0 00.208-.047C11.17 11.195 14 8.152 14 5.034A4.852 4.852 0 009.943.225M6.094 12.64l.02-2.56a.484.484 0 00-.444-.482C5.472 9.588.943 9.286.943 5.034a3.633 3.633 0 011.048-2.74 5.729 5.729 0 013.717-1.218.879.879 0 01.217.009c.028 0 2.952-.066 3.877.076a3.895 3.895 0 013.255 3.873c0 2.56-2.472 5.254-6.963 7.606", fillRule: "evenodd" }) })));
}
exports.default = LineTwitterComment;
