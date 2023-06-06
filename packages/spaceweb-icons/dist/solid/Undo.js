"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUndo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUndo" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.325 4.21a7.3 7.3 0 00-4.814 1.813L1.193 4.705A.698.698 0 000 5.193v3.9a.7.7 0 00.698.698h3.9a.7.7 0 00.495-1.193L3.76 7.265a5.556 5.556 0 018.588 1.828.858.858 0 001.047.446.875.875 0 00.523-1.2 7.35 7.35 0 00-6.593-4.13z" }, void 0) }), void 0));
}
exports.default = SolidUndo;
