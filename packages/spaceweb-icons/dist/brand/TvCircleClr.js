"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTvCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTvCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.875 4.315H8.073l.995-1.633a.3.3 0 10-.513-.312L7.37 4.315h-.738L5.445 2.37a.3.3 0 00-.513.312l.996 1.633H3.125a.658.658 0 00-.658.658v5.429c0 .363.295.658.658.658h7.75a.658.658 0 00.658-.658v-5.43a.659.659 0 00-.658-.657zm-2.05 5.298c0 .197-.16.357-.358.357H3.892a.358.358 0 01-.358-.357V5.762c0-.197.16-.358.358-.358h4.575c.198 0 .358.16.358.358v3.85zm1.323-.114a.621.621 0 11.001-1.243.621.621 0 01-.001 1.243zm0-2.382a.621.621 0 11.001-1.242.621.621 0 01-.001 1.242z" })] })));
}
exports.default = BrandTvCircleClr;
