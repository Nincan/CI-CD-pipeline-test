"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDoubleTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDoubleTick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.849 4.252l-4.961 6.465a.766.766 0 0 1-.524.283h-.07a.775.775 0 0 1-.503-.184L5.512 8.845l-1.306 1.721a.708.708 0 0 1-.524.29h-.07a.723.723 0 0 1-.496-.185L.25 8.201A.644.644 0 0 1 0 7.724a.637.637 0 0 1 .208-.495.716.716 0 0 1 .507-.235.723.723 0 0 1 .527.195l2.264 1.938L7.965 3.3a.703.703 0 0 1 .473-.291.732.732 0 0 1 .547.133c.168.1.282.263.314.448a.629.629 0 0 1-.146.518L6.358 7.715l1.803 1.564 4.5-5.835a.704.704 0 0 1 .475-.287.731.731 0 0 1 .545.136c.165.1.278.262.31.445a.628.628 0 0 1-.142.514z" }) })));
}
exports.default = LineDoubleTick;
