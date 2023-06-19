"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSwitchDiagonal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSwitchDiagonal" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2.96489,4.57376l.67523-.675c.00852-.00851.01121-.01978.01905-.02873.01415-.01219.03259-.01709.04595-.0305a.70731.70731,0,0,0,.20949-.49239.72069.72069,0,0,0-.71345-.72791l-.01287-.00006L.71456,2.61593a.71617.71617,0,0,0-.71419.71548L0,5.80661a.7163.7163,0,0,0,1.22164.507l.00117-.00178L1.23322,6.305l.72069-.7205,3.9714,3.97262a.71481.71481,0,0,0,1.011-1.01074Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.98431,8.176a.71631.71631,0,0,0-1.22489-.49912l-.00117.00184-.01035.00692-.716.7251L8.03487,4.464A.71481.71481,0,1,0,7.02652,5.47742l.00386.0038,3.99706,3.94683-.67082.67934c-.00845.00858-.01109.01991-.01887.02885-.01409.01225-.03246.01734-.04576.03081a.707.707,0,0,0-.20625.49373.72063.72063,0,0,0,.71812.72326c.00428.00006.00857,0,.01286-.00006l2.47373-.01274A.71626.71626,0,0,0,14,10.65117Z" })] })));
}
exports.default = SolidSwitchDiagonal;
