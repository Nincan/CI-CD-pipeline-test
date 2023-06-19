"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInfoComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInfoComment" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.885 12.7l-1.398-2.75a6.568 6.568 0 10-5.87 3.618 6.499 6.499 0 003.615-1.085l2.92 1.05a.597.597 0 00.733-.832zM7.504 6.25v4.166a.7.7 0 11-1.4.005V6.25a.7.7 0 111.4-.005zm-.701-1.574a.898.898 0 11.898-.897.898.898 0 01-.898.897z" }) })));
}
exports.default = SolidInfoComment;
