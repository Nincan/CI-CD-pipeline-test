"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x3(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.415 2.224H.585a.5.5 0 00-.5.5v8.552a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V2.724a.5.5 0 00-.5-.5zm-.5 4.206H9.809V3.224h3.106zm-7.627 0V3.224h3.521V6.43zm3.521 1v3.346H5.288V7.43zM4.288 3.224V6.43H1.085V3.224zM1.085 7.43h3.203v3.346H1.085zm8.724 3.346V7.43h3.106v3.346z" }) })));
}
exports.default = SolidGrid2x3;
