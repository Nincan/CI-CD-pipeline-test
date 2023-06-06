"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMergeRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMergeRight" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.496 3.013a.502.502 0 0 1 .502-.502h5.511V1.015H1.003A1.003 1.003 0 0 0 0 2.018v2.737h1.496zm-.493 9.972H7.51V11.49H1.998a.502.502 0 0 1-.502-.502V9.244H0v2.738a1.003 1.003 0 0 0 1.003 1.003z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { width: "4.967", height: "11.971", x: "9.033", y: "1.015", rx: "1" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.696 7.632h3.517V8.88c0 .01.006.02.006.03a.696.696 0 0 0 1.198.485l1.898-1.978.001-.002.002-.001.001-.002h.001V7.41l.002-.002a.696.696 0 0 0 .185-.423.702.702 0 0 0-.153-.492q-.02-.025-.043-.048L5.417 4.472a.698.698 0 0 0-.987-.024.691.691 0 0 0-.212.516c0 .01-.005.017-.005.026v1.245H.696a.698.698 0 0 0 0 1.397z" }, void 0)] }), void 0));
}
exports.default = SolidMergeRight;
