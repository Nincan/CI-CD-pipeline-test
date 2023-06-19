"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDownload(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDownload" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.288 6.351A4.37 4.37 0 003.12 5.185 3.499 3.499 0 003.5 12.16h7.583a2.908 2.908 0 00.205-5.81zM8.71 8.84l-1.353 1.353a.498.498 0 01-.163.109l-.003.002a.5.5 0 01-.376 0l-.003-.002a.499.499 0 01-.153-.101l-.009-.006-.001-.002L5.29 8.84a.5.5 0 11.705-.709l.507.505V6.139a.5.5 0 011 0v2.493l.5-.5a.5.5 0 11.707.707z" }) })));
}
exports.default = SolidDownload;
