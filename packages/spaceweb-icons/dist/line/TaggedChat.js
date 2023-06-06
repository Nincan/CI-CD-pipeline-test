"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTaggedChat(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTaggedChat" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.72.79H1.82A1.15 1.15 0 00.61 2.11v2.57l1.24-1.2V2.02A.14.14 0 011.9 2h10.72a.66.66 0 01.13.03v7l-.03.07a.4.4 0 01-.12 0h-1.48a1.14 1.14 0 00-1.14 1.15v1.3l-3.42-2.1a2.18 2.18 0 00-1.28-.34h-.93v1.19h.9a.95.95 0 01.64.15l4.34 2.65a.95.95 0 00.28.04c.64 0 .66-.69.66-.69v-2.15h1.52A1.26 1.26 0 0014 9.14v-7.2A1.18 1.18 0 0012.72.8z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.7 4.22a.13.13 0 00-.24-.08C7 4.81 5.74 6.08 2.98 5.82a.13.13 0 01-.12-.13V4.43a.13.13 0 00-.22-.09L.04 7.01a.13.13 0 000 .18l2.6 2.63a.13.13 0 00.22-.1V8.55a.13.13 0 01.12-.13A5.11 5.11 0 006.35 7.2 4.56 4.56 0 007.7 4.22z" }, void 0)] }), void 0));
}
exports.default = LineTaggedChat;
