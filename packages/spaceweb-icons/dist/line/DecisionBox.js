"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/DecisionBox.svg instead.
 */
function LineDecisionBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineDecisionBox" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "-713.726", y: "-734.315" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.172 1.202h.005-.005M7 1.374L12.626 7 7 12.626 1.374 7 7 1.374M7 0c-.264 0-.527.1-.728.302l-5.97 5.97a1.03 1.03 0 000 1.456l5.97 5.97a1.027 1.027 0 001.456 0l5.97-5.97a1.03 1.03 0 000-1.456L7.728.302A1.026 1.026 0 007 0z" }, void 0)] }), void 0));
}
exports.default = LineDecisionBox;
