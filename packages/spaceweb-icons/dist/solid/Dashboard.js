"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidDashboard(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidDashboard" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M9.34 3.925l-.371 2.289a4.658 4.658 0 012.734 3.733.55.55 0 00.554.48h1.175a.56.56 0 00.409-.173.543.543 0 00.148-.413 6.935 6.935 0 00-4.65-5.916zm-1.4-.333A7.042 7.042 0 002.6 5.026 6.822 6.822 0 00.01 9.84a.542.542 0 00.15.413.56.56 0 00.408.173h1.175a.55.55 0 00.553-.48 4.7 4.7 0 014.58-4.163zm.83-.412a.178.178 0 01.137.058.173.173 0 01.043.14L7.904 9.84a1.132 1.132 0 01-.815.935 1.155 1.155 0 01-1.197-.359 1.112 1.112 0 01-.147-1.223l2.869-5.915a.171.171 0 01.156-.098z" }, void 0) }), void 0));
}
exports.default = SolidDashboard;
