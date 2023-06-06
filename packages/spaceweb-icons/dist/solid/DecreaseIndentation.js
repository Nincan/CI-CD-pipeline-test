"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidDecreaseIndentation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidDecreaseIndentation" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.733 2.697h12.535a.7.7 0 000-1.4H.733a.7.7 0 100 1.4zm12.535 1.935H7a.7.7 0 100 1.4h6.268a.7.7 0 000-1.4zm0 3.336H7a.7.7 0 100 1.4h6.268a.7.7 0 000-1.4zm0 3.335H.733a.7.7 0 100 1.4h12.535a.7.7 0 000-1.4zM1.023 3.95a.553.553 0 00-.185.442L.822 5.864v3.577a.677.677 0 00.186.442.694.694 0 00.448.162.558.558 0 00.448-.177L4.812 7.35a.576.576 0 00.185-.427.51.51 0 00-.17-.427L1.92 3.965a.673.673 0 00-.897-.014z" }, void 0) }), void 0));
}
exports.default = SolidDecreaseIndentation;
