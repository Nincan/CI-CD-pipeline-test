"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Conversation.svg instead.
 */
function LineConversation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 12", "data-icon-name": "LineConversation" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 4.5L5.972 6.56 2.915 4.423a.5.5 0 00-.573.82L5.68 7.579a.506.506 0 00.568.003l3.43-2.337a.498.498 0 00.132-.694C9.655 4.32 9.345 4.263 9 4.5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.821 1.25H2.205A2.222 2.222 0 000 3.462v5.076c0 1.21.996 2.212 2.205 2.212h7.617C11.03 10.75 12 9.747 12 8.538V3.462c0-1.21-.97-2.212-2.179-2.212M11 8.538A1.19 1.19 0 019.821 9.75H2.205A1.222 1.222 0 011 8.538V3.462c0-.658.548-1.212 1.205-1.212h7.616c.657 0 1.179.554 1.179 1.212v5.076z" }, void 0)] }), void 0));
}
exports.default = LineConversation;
