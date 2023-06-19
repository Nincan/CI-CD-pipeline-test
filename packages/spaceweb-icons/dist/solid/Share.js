"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.82 6.24l-4.8-4.86a.62.62 0 00-.66-.13.59.59 0 00-.37.56v2.1a9.19 9.19 0 00-5.68 2.26A8.06 8.06 0 000 12.19a.6.6 0 00.48.59.49.49 0 00.12.01.6.6 0 00.56-.36c.06-.14 1.59-3.46 6.83-3.09v2.25a.59.59 0 00.37.56.6.6 0 00.66-.14l4.81-4.92a.6.6 0 00-.01-.85z" }) })));
}
exports.default = SolidShare;
