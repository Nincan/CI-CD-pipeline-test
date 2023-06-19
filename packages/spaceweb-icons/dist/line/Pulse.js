"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LinePulse(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LinePulse" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.27 6.595h-2.508a.7.7 0 00-.66.467l-1.03 2.91-3.089-8.235a.738.738 0 00-.673-.454.7.7 0 00-.65.49L3.143 6.596H.73a.7.7 0 000 1.4h2.927a.7.7 0 00.667-.49l1.063-3.374 3.05 8.132a.7.7 0 00.654.454h.007a.7.7 0 00.653-.467l1.507-4.255h2.014a.7.7 0 000-1.4z" }) })));
}
exports.default = LinePulse;
