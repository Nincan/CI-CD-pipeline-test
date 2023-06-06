"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid1x2(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid1x2" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.405 2.224H.575a.5.5 0 00-.5.5v8.552a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V2.724a.5.5 0 00-.5-.5zm-12.33 1H6.49v7.552H1.076zm11.83 7.552H7.49V3.224h5.415z" }, void 0) }), void 0));
}
exports.default = SolidGrid1x2;
