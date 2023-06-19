"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTimePositionHorizontal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTimePositionHorizontal" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.947 1.507a.702.702 0 0 0-.648-.433H.7A.701.701 0 0 0 0 1.775v10.45a.701.701 0 0 0 .701.701H13.3a.701.701 0 0 0 .701-.701V1.775a.702.702 0 0 0-.053-.268Zm-1.35 10.017H1.403V2.476h11.194Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.942 5.38h2.454a.35.35 0 0 1 .35.35v4.558a.35.35 0 0 1-.35.35H5.942a.35.35 0 0 1-.35-.35V5.731a.35.35 0 0 1 .35-.35ZM9.829 9.587h1.402a.35.35 0 0 1 .35.35v.351a.35.35 0 0 1-.35.35H9.83a.35.35 0 0 1-.35-.35v-.35a.35.35 0 0 1 .35-.351Z" })] })));
}
exports.default = SolidTimePositionHorizontal;
