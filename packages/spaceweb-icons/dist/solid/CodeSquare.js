"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCodeSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCodeSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.5 0h-11A1.5 1.5 0 000 1.5v11A1.5 1.5 0 001.5 14h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0012.5 0zM4.77 8.222a.606.606 0 01-.773.934l-2.128-1.76a.606.606 0 01.005-.938l2.128-1.724.001-.001a.606.606 0 01.761.943L3.211 6.934zM8.316 3.21l-1.66 7.83a.606.606 0 01-.591.48.656.656 0 01-.126-.013.606.606 0 01-.467-.718l1.66-7.83a.613.613 0 01.717-.467.606.606 0 01.467.718zm3.805 4.245l-2.204 1.76-.002.001a.604.604 0 01-.848-.097l-.002-.001a.604.604 0 01.097-.85l1.605-1.281-1.6-1.252a.605.605 0 11.745-.953l2.204 1.724a.604.604 0 01.005.95z" }, void 0) }), void 0));
}
exports.default = SolidCodeSquare;
