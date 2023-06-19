"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandLivechatCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandLivechatCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#F25621", cx: "6.997", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.713 9.01c-.32.05-1.66-.277-1.68-2.133-.019-1.857 1.719-1.839 1.719-1.839.926.11.658-.593.658-.593s-.097-.234-.81-.314c-.714-.08-1.81.456-2.27 1.213-.46.757-.328 1.707-.296 2.295.032.587.362 1.287.952 1.84.59.552 1.925.343 2.224.394.298.05.344-.447.23-.693-.114-.246-.408-.22-.727-.17zM4.624 4.209H3.497v5.637h2.929V8.718H4.624z", fill: "#FFF" })] })));
}
exports.default = BrandLivechatCircleClr;
