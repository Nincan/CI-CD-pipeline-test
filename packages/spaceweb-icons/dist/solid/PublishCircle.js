"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPublishCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPublishCircle" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .014A6.986 6.986 0 1013.986 7 6.986 6.986 0 007 .014zm3.788 3.926c0 .01-.005.02-.006.03l-.007.032a.325.325 0 01-.01.049l-.003.005v.003l-3.01 6.546a.32.32 0 01-.281.182h-.014a.324.324 0 01-.282-.158l-.893-1.56a.545.545 0 01.027-.582l1.448-2.073-2.136 1.454a.545.545 0 01-.554.035l-1.686-.86a.3.3 0 01-.168-.279.305.305 0 01.193-.265l6.933-2.839h.003l.006-.003a.28.28 0 01.05-.009.248.248 0 01.032-.006c.012 0 .024-.006.035-.006h.003a.338.338 0 01.035.006.372.372 0 01.036.007.316.316 0 01.046.008l.006.003h.003a.367.367 0 01.041.027.326.326 0 01.055.035l.004.002.002.003a.288.288 0 01.04.056.237.237 0 01.025.035l.001.003.003.005a.301.301 0 01.01.047.27.27 0 01.007.035c0 .01.006.02.006.029z" }) })));
}
exports.default = SolidPublishCircle;
