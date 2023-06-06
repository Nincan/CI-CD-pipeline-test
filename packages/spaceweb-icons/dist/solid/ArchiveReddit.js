"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidArchiveReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidArchiveReddit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.69.376h12.62a.61.61 0 01.611.61v1.98a.61.61 0 01-.61.61H.689a.61.61 0 01-.61-.61V.987a.61.61 0 01.61-.61zM12.77 4.072H1.23a.61.61 0 00-.61.61v8.468a.61.61 0 00.61.61h11.54a.61.61 0 00.61-.61V4.682a.61.61 0 00-.61-.61zM9.273 7.666H4.727a.61.61 0 110-1.22h4.546a.61.61 0 010 1.22z" }, void 0) }), void 0));
}
exports.default = SolidArchiveReddit;
