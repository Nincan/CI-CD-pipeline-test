"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMessageQueueCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMessageQueueCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 .07A6.93 6.93 0 1013.93 7 6.93 6.93 0 007 .07zM4.365 3.214h4.968a.226.226 0 010 .451H4.365a.226.226 0 010-.451zm-.225.903h5.418a.452.452 0 110 .903H4.14a.452.452 0 010-.903zm5.913 5.42a.763.763 0 01-.107 0H8.768v1.256a.429.429 0 01-.244.406.404.404 0 01-.169.037.458.458 0 01-.299-.118l-1.81-1.571-2.194-.01a.783.783 0 01-.816-.749q-.002-.034 0-.07V6.292a.835.835 0 01.816-.818h5.894a.802.802 0 01.613.245.828.828 0 01.203.602l.001 2.4a.766.766 0 01-.71.817z" }, void 0) }), void 0));
}
exports.default = SolidMessageQueueCircle;
