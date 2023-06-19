"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMacro(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMacro" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M10.875 4.369l-.734.734a.326.326 0 01-.46.01l-.807-.807a.326.326 0 01.01-.46l.733-.734a.326.326 0 01.46-.01l.808.807a.326.326 0 01-.01.46zM6.531 3.87l.826.222a.763.763 0 00.394-1.474l-.825-.221a.763.763 0 10-.395 1.474zm6.903.27l-.827-.222a.765.765 0 00-.394 1.475l.825.221a.764.764 0 10.396-1.475zM11.76 2.991a.753.753 0 00.536-.22l.61-.604a.763.763 0 10-1.076-1.083l-.607.603a.761.761 0 00.536 1.304zM8.594 1.774a.764.764 0 001.476-.393L9.848.554a.765.765 0 00-1.475.393l.22.826zm2.776 4.463a.763.763 0 00-1.474.393l.223.827a.762.762 0 101.472-.395zm-2.452-.356l-.798-.798a.34.34 0 00-.48 0l-7.31 7.31a.904.904 0 001.28 1.277l7.309-7.31a.34.34 0 000-.48z" }) })));
}
exports.default = SolidMacro;
