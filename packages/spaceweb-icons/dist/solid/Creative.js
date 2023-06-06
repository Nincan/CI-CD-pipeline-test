"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCreative(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCreative" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.89 1.457L12.61.176a.295.295 0 00-.422 0l-1.282 1.281a.28.28 0 00-.084.211l-.004 9.205h3.162v-9.2a.293.293 0 00-.089-.216zm-3.073 11.861a.594.594 0 00.594.595h1.973a.594.594 0 00.595-.595v-1.543h-3.162zM7.95.122H.516A.5.5 0 00.018.62v12.792a.5.5 0 00.5.5H7.95a1.5 1.5 0 001.5-1.5V1.622a1.5 1.5 0 00-1.5-1.5zm-.97 4.665l-1.028.992.238 1.395a.123.123 0 01-.055.147.11.11 0 01-.073.018c-.037 0-.055 0-.074-.018L4.74 6.66l-1.267.66a.14.14 0 01-.147 0 .123.123 0 01-.055-.146l.239-1.395-1.028-.992a.138.138 0 01-.019-.147.103.103 0 01.11-.092l1.396-.22.642-1.267a.123.123 0 01.129-.073.16.16 0 01.128.073l.625 1.267 1.395.22a.138.138 0 01.129.092.198.198 0 01-.037.147z" }, void 0) }), void 0));
}
exports.default = SolidCreative;
