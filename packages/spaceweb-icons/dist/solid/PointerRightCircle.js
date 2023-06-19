"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPointerRightCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPointerRightCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm4.328 7.425v.009L9.632 9.203a.63.63 0 0 1-.884.016.595.595 0 0 1-.188-.45c0-.009-.009-.017-.009-.025V7.586H3.082a.582.582 0 0 1 0-1.165h5.47V5.263c0-.008.008-.008.008-.016a.612.612 0 0 1 .188-.467l.003-.003a.623.623 0 0 1 .881.028l1.688 1.76c.016.017.024.033.04.05a.566.566 0 0 1 .132.303.703.703 0 0 1 .008.13.62.62 0 0 1-.172.377Z" }) })));
}
exports.default = SolidPointerRightCircle;
