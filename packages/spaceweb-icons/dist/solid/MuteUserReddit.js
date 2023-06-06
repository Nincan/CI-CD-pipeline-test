"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMuteUserReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMuteUserReddit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.718 1.078H5.25A5.172 5.172 0 00.083 6.244v.147a5.172 5.172 0 005.166 5.166h3.129v1.706a.51.51 0 00.915.308l2.12-2.793a5.152 5.152 0 002.472-4.387v-.147a5.172 5.172 0 00-5.167-5.166zm.96 6.853a.61.61 0 11-.862.864L6.984 6.963 5.152 8.795a.61.61 0 11-.863-.864L6.12 6.1 4.29 4.267a.61.61 0 01.863-.864l1.832 1.832 1.832-1.832a.61.61 0 01.863.864L7.847 6.1z" }, void 0) }), void 0));
}
exports.default = SolidMuteUserReddit;
