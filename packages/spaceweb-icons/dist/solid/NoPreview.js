"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNoPreview(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoPreview" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.67a3.143 3.143 0 013.03 4.11l1.946 1.947A7.51 7.51 0 0014 6.845 7.533 7.533 0 004.684 2.44l1.38 1.381A3.271 3.271 0 017 3.669zM1.088 1.543a.634.634 0 000 .897l1.254 1.254A7.568 7.568 0 000 6.85a7.509 7.509 0 009.743 4.251l1.73 1.73a.634.634 0 00.898-.896L1.99 1.544a.641.641 0 00-.903 0zM7 10.033A3.183 3.183 0 013.818 6.85a3.125 3.125 0 01.312-1.36l1 1a2.185 2.185 0 00-.04.362A1.907 1.907 0 007 8.761a1.715 1.715 0 00.363-.045l.999.999A3.063 3.063 0 017 10.033zM8.89 6.64a1.89 1.89 0 00-1.68-1.68z" }) })));
}
exports.default = SolidNoPreview;
