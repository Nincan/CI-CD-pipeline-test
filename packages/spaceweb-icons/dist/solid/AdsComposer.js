"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAdsComposer(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAdsComposer" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.441.599A.593.593 0 008.85.006H2.19A1.417 1.417 0 00.774 1.421V12.58a1.417 1.417 0 001.415 1.415h6.66a.592.592 0 100-1.184H2.188a.23.23 0 01-.23-.231V1.42a.231.231 0 01.23-.23H8.85a.592.592 0 00.592-.592z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.493 8.791l.002.001a.5.5 0 00.5-.5V3.418a.5.5 0 00-.5-.5H3.408a.5.5 0 00-.5.5v4.873a.5.5 0 00.5.5zm-5.799 2.077a.592.592 0 00.592.591h5.33a.592.592 0 100-1.184h-5.33a.592.592 0 00-.592.593zM11.18.006h1.838a.208.208 0 01.208.209v.805a.208.208 0 01-.208.209H11.18a.208.208 0 01-.209-.209V.215a.208.208 0 01.209-.209zm1.9 2.012h-1.963a.146.146 0 00-.146.146h.001v9.657a.741.741 0 00.084.344l.914 1.75a.144.144 0 00.257 0l.914-1.75a.744.744 0 00.085-.344V2.164a.146.146 0 00-.146-.146z" }, void 0)] }), void 0));
}
exports.default = SolidAdsComposer;
