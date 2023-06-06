"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidNomination(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidNomination" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.364 5.989a1.46 1.46 0 01-.716-.18l-1.594-.908a1.495 1.495 0 01-.728-1.252V.33a1.184 1.184 0 01.066-.326H1.439A.918.918 0 00.52.923v12.154a.918.918 0 00.918.919h10.156a.918.918 0 00.918-.919V5.563l-.429.244a1.465 1.465 0 01-.72.182zM3.416 4.403h3.1a.5.5 0 010 1h-3.1a.5.5 0 110-1zm6.2 6.668h-6.2a.5.5 0 110-1h6.2a.5.5 0 010 1zm0-2.858h-6.2a.5.5 0 110-1h6.2a.5.5 0 010 1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.171.028h-3.62A.304.304 0 009.25.33v3.318a.576.576 0 00.262.45l1.591.907a.605.605 0 00.524 0l1.591-.907a.576.576 0 00.262-.45V.33a.31.31 0 00-.308-.302zm-.78 2.397l-.849.849a.252.252 0 01-.356 0l-.848-.849a.252.252 0 010-.356l.848-.848a.252.252 0 01.356 0l.848.848a.252.252 0 010 .356z" }, void 0)] }), void 0));
}
exports.default = SolidNomination;
