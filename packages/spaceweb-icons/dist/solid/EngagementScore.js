"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEngagementScore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEngagementScore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.6 0H1.4A1.398 1.398 0 00.007 1.4L0 14l2.8-2.8h9.8A1.404 1.404 0 0014 9.8V1.4A1.404 1.404 0 0012.6 0zM4.312 8.035a.522.522 0 01-.562.469.522.522 0 01-.563-.47V5.613a.522.522 0 01.563-.469.522.522 0 01.562.469zm2.37 0a.522.522 0 01-.563.469.522.522 0 01-.562-.47V3.189a.522.522 0 01.562-.469.522.522 0 01.563.469zm2.37.101c0 .203-.252.368-.563.368s-.562-.165-.562-.368v-3.8c0-.202.252-.367.562-.367s.562.165.562.367zm2.37-.101a.571.571 0 01-1.125 0V3.188a.572.572 0 011.124 0z" }, void 0) }), void 0));
}
exports.default = SolidEngagementScore;
