"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSync(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSync" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.116 6.972a5.853 5.853 0 001.729 4.155L1.74 12.23a.368.368 0 00.265.625H5.16a.364.364 0 00.368-.367V9.332a.364.364 0 00-.625-.257L3.889 10.09a4.394 4.394 0 011.22-7.097.698.698 0 00.42-.626v-.132a.685.685 0 00-.978-.61 5.89 5.89 0 00-3.435 5.347zm10.878-5.884H8.839a.364.364 0 00-.368.367v3.156a.364.364 0 00.625.257l1.015-1.015a4.394 4.394 0 01-1.22 7.097.698.698 0 00-.42.626v.132a.685.685 0 00.978.61 5.871 5.871 0 001.706-9.502l1.104-1.103a.368.368 0 00-.265-.625z" }, void 0) }), void 0));
}
exports.default = SolidSync;
