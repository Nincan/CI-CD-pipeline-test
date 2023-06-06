"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNoMedia(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoMedia" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.57 2.39a1.3 1.3 0 11-1.3 1.3 1.3 1.3 0 011.3-1.3zm2.7 5.42a2.42 2.42 0 00-1.2.31l3.31 3.3a2.43 2.43 0 00-2.11-3.6zM8.15 9.05a2.43 2.43 0 003.3 3.3zM8.61.03a4.45 4.45 0 014.46 4.45v1.74a4.89 4.89 0 00-1.12-.58V4.48a3.34 3.34 0 00-3.18-3.33H4.45a3.34 3.34 0 00-3.33 3.18V5.88l1.64-1.94a.7.7 0 011.05-.03l2.82 3.04a4.9 4.9 0 00-.35 6.15H4.2A4.2 4.2 0 010 8.9V4.48A4.45 4.45 0 014.45.03zm1.66 6.47a3.73 3.73 0 11-3.74 3.74 3.73 3.73 0 013.74-3.74z" }, void 0) }), void 0));
}
exports.default = SolidNoMedia;
