"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSharedFolder(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSharedFolder" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.814 2.557H7.08a.24.24 0 01-.247-.233 1.18 1.18 0 00-1.186-1.17h-4.46A1.18 1.18 0 000 2.324v9.352a1.18 1.18 0 001.186 1.17h11.63A1.18 1.18 0 0014 11.676V3.727a1.18 1.18 0 00-1.187-1.17zM3.073 5.018a1.132 1.132 0 011.553 0 1.097 1.097 0 11-1.876.774 1.083 1.083 0 01.323-.774zm3.246 6.406a.363.363 0 01-.367.36H1.745a.364.364 0 01-.368-.36V9.829a2.427 2.427 0 012.45-2.398h.042a2.427 2.427 0 012.45 2.398z" }, void 0) }), void 0));
}
exports.default = SolidSharedFolder;
