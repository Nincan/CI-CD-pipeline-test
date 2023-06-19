"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTimePositionVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTimePositionVertical" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.947 1.518a.702.702 0 0 0-.38-.381.698.698 0 0 0-.268-.054H.7a.702.702 0 0 0-.648.435.706.706 0 0 0-.053.27v10.491a.702.702 0 0 0 .701.704H13.3a.702.702 0 0 0 .648-.434.707.707 0 0 0 .053-.27V1.787a.707.707 0 0 0-.053-.27Zm-1.35 10.057H1.403V2.492h11.194Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.809 3.471h2.45a.35.35 0 0 1 .35.35v4.55a.35.35 0 0 1-.35.35h-2.45a.35.35 0 0 1-.35-.35v-4.55a.35.35 0 0 1 .35-.35ZM9.859 9.546h1.4a.35.35 0 0 1 .35.35v.35a.35.35 0 0 1-.35.35h-1.4a.35.35 0 0 1-.35-.35v-.35a.35.35 0 0 1 .35-.35Z" })] })));
}
exports.default = SolidTimePositionVertical;
