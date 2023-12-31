"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAutomation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAutomation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.045 3.962l-.437-.972-.971-.437a.347.347 0 010-.631l.971-.437.437-.972a.347.347 0 01.632 0l.437.972.971.437a.347.347 0 010 .631l-.971.437-.437.972a.347.347 0 01-.632 0zm2.248 3.282l-.222-.5a.347.347 0 00-.63 0l-.223.5-.506.222a.347.347 0 000 .631l.5.222.221.507a.347.347 0 00.632 0l.222-.5.506-.222a.347.347 0 000-.631zM9.796 8.389l.854.645a.698.698 0 01.18.902l-1.124 1.943a.685.685 0 01-.867.291l-.992-.416a4.631 4.631 0 01-.444.256l-.133 1.07a.696.696 0 01-.687.61h-2.24a.696.696 0 01-.687-.61l-.132-1.069a4.086 4.086 0 01-.444-.256l-.992.416a.685.685 0 01-.867-.291L.097 9.936a.7.7 0 01.18-.902l.853-.645v-.257c0-.083 0-.174.007-.257L.284 7.23a.698.698 0 01-.18-.902l1.123-1.943a.685.685 0 01.868-.291l.992.416a4.63 4.63 0 01.444-.257l.132-1.068a.684.684 0 01.68-.604h2.241a.696.696 0 01.687.61l.132 1.07a4.084 4.084 0 01.444.256l.992-.416a.685.685 0 01.867.291l1.124 1.943a.7.7 0 01-.18.902l-.854.645c.007.083.007.167.007.257s0 .166-.007.25zm-2.248-.257a2.082 2.082 0 10-2.081 2.081 2.079 2.079 0 002.081-2.081z" }) })));
}
exports.default = SolidAutomation;
