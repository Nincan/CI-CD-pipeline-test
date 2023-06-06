"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/SwitchHorizontal.svg instead.
 */
function LineSwitch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSwitch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.047 7.167a.6.6 0 01.848.016L13.6 9.998a.6.6 0 01.1.158c.005.01.014.013.019.03a.578.578 0 01.004.453c-.01.024-.03.042-.04.065-.025.042-.045.085-.079.121l-2.733 2.916a.601.601 0 01-.876-.82l1.787-1.906H1.766a.6.6 0 110-1.2h9.992L10.03 8.016a.6.6 0 01.016-.85zm-6.329-7a.6.6 0 00-.848.016L.167 2.998a.6.6 0 00-.1.158c-.005.01-.014.013-.02.03a.578.578 0 00-.004.453c.01.024.03.042.041.065.024.042.044.085.078.121l2.734 2.916a.601.601 0 00.876-.82L1.984 4.014h11.182a.6.6 0 100-1.199H2.008l1.726-1.799a.6.6 0 00-.016-.85z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineSwitch;
