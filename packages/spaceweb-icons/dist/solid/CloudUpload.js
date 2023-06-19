"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCloudUpload(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCloudUpload" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.288 6.351A4.37 4.37 0 003.12 5.185 3.499 3.499 0 003.5 12.16h7.583a2.908 2.908 0 00.205-5.81zM8.71 7.725a.5.5 0 01-.707.002l-.507-.504V9.72a.5.5 0 01-1 0V7.227l-.5.5a.5.5 0 01-.707-.707l1.353-1.353a.496.496 0 01.699-.007l.008.005.001.002L8.71 7.018a.5.5 0 01.002.707z" }) })));
}
exports.default = SolidCloudUpload;
