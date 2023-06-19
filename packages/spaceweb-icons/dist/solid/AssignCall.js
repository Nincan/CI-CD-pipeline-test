"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAssignCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAssignCall" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 8.392v-.018c.007-.216.03-.431.078-.643a2.43 2.43 0 0 1 .957-1.46 3.38 3.38 0 0 1 1.05-.508 4.327 4.327 0 0 1 .912-.172V4.522c0-.031-.001-.063 0-.094.003-.06.043-.08.094-.048.027.016.052.036.077.054l2.527 1.831c.062.046.126.09.188.137.061.045.062.106.002.153a6523.365 6523.365 0 0 1-2.77 2.016.184.184 0 0 1-.04.024c-.034.014-.063-.002-.07-.038a.287.287 0 0 1-.006-.057V7.248l-.02-.001a9.99 9.99 0 0 0-.843.022c-.23.017-.46.047-.686.098a2.59 2.59 0 0 0-.857.34 1.534 1.534 0 0 0-.577.657c-.003.008-.008.015-.015.028zm9.388-.24c1.54 0 4.612.773 4.612 2.307v.576c0 .317-.26.577-.576.577H5.353a.578.578 0 0 1-.577-.577v-.576c0-1.534 3.073-2.306 4.612-2.306zm0-1.152a2.305 2.305 0 1 1-.001-4.61A2.305 2.305 0 0 1 9.388 7z" }) })));
}
exports.default = SolidAssignCall;
