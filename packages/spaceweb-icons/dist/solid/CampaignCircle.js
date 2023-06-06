"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCampaignCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCampaignCircle" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 .001A6.999 6.999 0 1 0 13.999 7 6.999 6.999 0 0 0 7 .001Zm4.493 10.368a.395.395 0 0 1-.282.386.4.4 0 0 1-.492-.273l-.16-.558h-1.34v-.006h-.273v-.007H8.45a2.094 2.094 0 0 1-4.11 0h-.27a1.429 1.429 0 0 1-1.424-1.035c-.04-.137-.088-.273-.116-.412a1.413 1.413 0 0 1 .615-1.476Q4.736 5.942 6.33 4.902l2.354-1.54-.13-.456a.398.398 0 1 1 .765-.22l1.725 6.03.352 1.184c.035.117.075.235.1.355a.264.264 0 0 1-.002.114Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "m7.945 4.702 1.428 4.636c.287 0 .691-.021 1.01-.027L8.862 3.984c-.263.188-.687.568-.916.718ZM6.394 10.831a1.323 1.323 0 0 0 1.255-.92H5.14a1.323 1.323 0 0 0 1.255.92Z" }, void 0)] }), void 0));
}
exports.default = SolidCampaignCircle;
