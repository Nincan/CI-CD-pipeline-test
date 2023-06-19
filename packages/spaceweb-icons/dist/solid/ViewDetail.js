"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidViewDetail(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidViewDetail" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.298 0H3.486a.702.702 0 00-.703.702V5.9H7.05l2.59-2.59H6.971a.702.702 0 110-1.405h4.364a.705.705 0 01.703.702v4.364a.702.702 0 11-1.405 0V4.303L8.11 6.825v4.402h5.188a.702.702 0 00.702-.702V.702A.702.702 0 0013.298 0z" }), (0, jsx_runtime_1.jsx)("rect", { x: ".029", y: "6.877", width: "7.117", height: "7.117", rx: ".682" })] })));
}
exports.default = SolidViewDetail;
