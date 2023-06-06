"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineLinkedInShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineLinkedInShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.048 1.094l-1.283.962 2.646 3.525H5.8c-3.659 0-4.982 1.66-5.446 2.65a4.404 4.404 0 00.822 4.675l1.23-1.026a2.83 2.83 0 01-.601-2.97c.515-1.097 1.97-1.726 3.994-1.726h5.684l-2.736 3.951 1.317.913L14 6.364z" }, void 0) }), void 0));
}
exports.default = LineLinkedInShare;
