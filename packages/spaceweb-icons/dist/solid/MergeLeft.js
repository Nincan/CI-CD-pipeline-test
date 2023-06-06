"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMergeLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMergeLeft" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.504 10.987a.502.502 0 0 1-.502.502H6.491v1.496h6.506A1.003 1.003 0 0 0 14 11.982V9.244h-1.496zm.493-9.972H6.49V2.51h5.511a.502.502 0 0 1 .502.502v1.742H14V2.018a1.003 1.003 0 0 0-1.003-1.003z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { width: "4.967", height: "11.971", y: "1.015", rx: "1" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.304 6.368H9.787V5.12c0-.01-.006-.02-.006-.03a.696.696 0 0 0-1.198-.486L6.685 6.583l-.001.002-.002.001-.001.002H6.68v.001l-.002.002a.696.696 0 0 0-.185.423.702.702 0 0 0 .153.492q.02.025.043.048l1.894 1.974a.698.698 0 0 0 .987.024.69.69 0 0 0 .212-.516c0-.01.005-.017.005-.026V7.765h3.517a.698.698 0 0 0 0-1.397z" }, void 0)] }), void 0));
}
exports.default = SolidMergeLeft;
