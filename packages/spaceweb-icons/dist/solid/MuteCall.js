"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMuteCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMuteCall" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.152 6.337V2.21C9.152.987 8.164 0 6.942 0A2.195 2.195 0 0 0 4.76 1.953zm2.27.295a.618.618 0 0 0-.613.523 4.044 4.044 0 0 1-.162.685l.936.936a4.93 4.93 0 0 0 .464-1.43.632.632 0 0 0-.626-.714zM.831 1.149a.734.734 0 0 0 0 1.04L4.73 6.094v.317c0 .876.442 1.709 1.2 2.144a1.989 1.989 0 0 0 1.489.228l1.223 1.223a4.051 4.051 0 0 1-1.702.383c-1.872 0-3.596-1.304-3.868-3.234a.618.618 0 0 0-.612-.523.632.632 0 0 0-.626.714c.339 2.181 2.18 3.906 4.37 4.237v1.68c0 .405.33.737.736.737s.737-.332.737-.737v-1.68a5.253 5.253 0 0 0 1.879-.663l2.571 2.572a.734.734 0 1 0 1.04-1.04L1.871 1.15a.734.734 0 0 0-1.04 0z" }, void 0) }), void 0));
}
exports.default = SolidMuteCall;
