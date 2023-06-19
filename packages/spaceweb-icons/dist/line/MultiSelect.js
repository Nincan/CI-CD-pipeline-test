"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineMultiSelect(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 13", "data-icon-name": "LineMultiSelect" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 11a.5.5 0 10.5.5.5.5 0 00-.5-.5zm0 2A1.5 1.5 0 113 11.5 1.502 1.502 0 011.5 13zm0-7a.5.5 0 10.5.5.5.5 0 00-.5-.5zm0 2A1.5 1.5 0 113 6.5 1.502 1.502 0 011.5 8zm0-5A1.5 1.5 0 100 1.5 1.5 1.5 0 001.5 3zm11.9 9.1H5.24a.6.6 0 010-1.2h8.16a.6.6 0 110 1.2zm0-10H5.24a.6.6 0 110-1.2h8.16a.6.6 0 110 1.2zm0 5H5.24a.6.6 0 110-1.2h8.16a.6.6 0 110 1.2z" }) })));
}
exports.default = LineMultiSelect;
