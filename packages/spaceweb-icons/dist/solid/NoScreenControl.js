"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNoScreenControl(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoScreenControl" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.31 1.756a.947.947 0 00-.837.598l1.741 1.741-.004-1.539a.911.911 0 00-.9-.8zm6.48 7.59c0-1.27-1.01-1.67-1.81-1.9l-.65-.235 2.46 2.46zm-7.37.186L1.95 7.88a.82.82 0 00-.991 1.29l3.89 4.125.011.01a3.134 3.134 0 001.65.672h3.28a1.98 1.98 0 001.17-.384l-6.54-6.54zm8.813 2.98L1.745 1.022a.692.692 0 00-.978.979L12.255 13.49a.692.692 0 00.978-.978z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.305 1.216A1.492 1.492 0 016.798 2.71v1.97l.135.135A2.671 2.671 0 003.82.474a2.646 2.646 0 00-.626.601l.85.851a1.474 1.474 0 011.26-.71z" }, void 0)] }), void 0));
}
exports.default = SolidNoScreenControl;
