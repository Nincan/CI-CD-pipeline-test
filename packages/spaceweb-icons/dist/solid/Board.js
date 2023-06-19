"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBoard(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15 15", "data-icon-name": "SolidBoard" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.4 15H1.05C.48 15 0 14.52 0 13.94V1.06C0 .48.48 0 1.06 0H5.4c.59 0 1.07.48 1.07 1.06v12.88c0 .58-.48 1.06-1.07 1.06zM15 3.61V1.17C15 .53 14.47 0 13.83 0H9.7c-.65 0-1.17.53-1.17 1.17v2.44c0 .65.52 1.17 1.17 1.17h4.13c.64 0 1.17-.52 1.17-1.17zm0 10.25V7.93c0-.63-.5-1.13-1.14-1.13h-4.2c-.62 0-1.13.5-1.13 1.13v5.93c0 .63.5 1.14 1.13 1.14h4.2c.63 0 1.14-.5 1.14-1.14z" }) })));
}
exports.default = SolidBoard;
