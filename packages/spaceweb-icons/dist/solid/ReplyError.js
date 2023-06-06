"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReplyError(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReplyError" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.98523,5.60832a1.95317,1.95317,0,0,1,.029-.28728,8.66075,8.66075,0,0,0-2.41284-1.1818,9.90352,9.90352,0,0,0-2.36645-.408H6.21459V1.63a.61283.61283,0,0,0-.49977-.6426.59981.59981,0,0,0-.4897.12237l-.09178.09179Q2.68525,3.63437.23715,6.06711a.624.624,0,0,0,0,.97926l1.63213,1.6422L5.113,11.9629a.69638.69638,0,0,0,.47937.23462h.07145a.61037.61037,0,0,0,.55082-.64267V9.29045l.17336-.0102c.22442-.0102.42845-.02046.65287-.0102a8.06644,8.06644,0,0,1,3.17228.58141,6.24462,6.24462,0,0,1,1.19659.66959,1.94686,1.94686,0,0,1-.42446-1.20063Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.96253,10.279a.95852.95852,0,0,0,.95856-.95856V5.60783a.95859.95859,0,0,0-1.91717,0V9.32048A.95856.95856,0,0,0,12.96253,10.279Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.96253,10.94751A1.03747,1.03747,0,1,0,14,11.985,1.03961,1.03961,0,0,0,12.96253,10.94751Z" }, void 0)] }), void 0));
}
exports.default = SolidReplyError;
