"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidClose(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidClose" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.33744,13.99494a.77026.77026,0,0,1-.52716-.21289L7.00507,8.96669,2.18972,13.78205a.72685.72685,0,0,1-.52715.21289.77026.77026,0,0,1-.52716-.21289l-.92252-.92252a.74664.74664,0,0,1,0-1.04418L5.03838,7,.223,2.19478a.74661.74661,0,0,1,0-1.04417L1.14555.22809a.7362.7362,0,0,1,.52715-.223A.77028.77028,0,0,1,2.19986.218L7.00507,5.03331,11.82042.218a.72758.72758,0,0,1,.517-.21289A.78958.78958,0,0,1,12.86459.218l.92252.92252a.74664.74664,0,0,1,0,1.04418L8.97177,7l4.81534,4.81535a.74664.74664,0,0,1,0,1.04418l-.92252.92252A.77026.77026,0,0,1,12.33744,13.99494Z" }) })));
}
exports.default = SolidClose;
