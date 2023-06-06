"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Video.svg instead.
 */
function LineVideo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineVideo" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.48 3.82c-.44-.35-1-.24-1.29-.11l-2 .92V4.2c0-.88-.72-1.6-1.6-1.6h-7C.71 2.6 0 3.33 0 4.2v5.6c0 .88.71 1.6 1.6 1.6h6.99c.88 0 1.6-.72 1.6-1.6v-.44l2 .9a1.3 1.3 0 001.11.02c.52-.2.66-.74.69-.85L14 9.3V5.07c0-.82-.29-1.13-.52-1.25zM9.05 9.8c0 .25-.2.46-.46.46h-7a.46.46 0 01-.46-.46V4.2c0-.25.21-.46.46-.46h7c.25 0 .46.2.46.46v5.6zm3.82-.59c-.01.02-.02.04-.04.04-.01.01-.07.03-.16-.01l-2.49-1.12V5.87l2.49-1.13.1-.03.07.05c.01.06.03.15.03.31v4.14z" }, void 0) }), void 0));
}
exports.default = LineVideo;
