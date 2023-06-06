"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEmail(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmail" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.06 1.94H.94a.946.946 0 00-.94.948v8.078a.946.946 0 00.94.947h12.12a.946.946 0 00.94-.947V2.888a.946.946 0 00-.94-.947zm-.841 7.709a.398.398 0 01.03.554.39.39 0 01-.55.03L8.365 7.22l-1.128.88a.386.386 0 01-.241.083.379.379 0 01-.24-.083l-1.093-.854-3.369 2.991a.369.369 0 01-.258.101.395.395 0 01-.293-.135h.001l-.01-.012a.385.385 0 01.049-.54L5.04 6.76 1.801 4.223l-.005-.004a.391.391 0 01-.065-.546l.004-.005a.384.384 0 01.542-.065l3.61 2.823 1.11.872 4.729-3.699.003-.002a.385.385 0 01.543.07l.003.005a.392.392 0 01-.071.547l-3.21 2.51z" }, void 0) }), void 0));
}
exports.default = SolidEmail;
