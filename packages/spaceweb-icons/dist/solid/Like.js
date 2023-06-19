"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.694 12.977H2.33c.383 0 .694-.31.694-.694V6.546a.694.694 0 0 0-.694-.694H.694A.694.694 0 0 0 0 6.546v5.737c0 .383.31.694.694.694zm4.926.199h5.613c.048.006.119.01.205.01.754 0 1.625-.418 1.81-1.594l.743-4.736a.666.666 0 0 0 .006-.062c.008-.12.025-.749-.425-1.23-.202-.215-.571-.472-1.182-.472H9.31l-.018-2.616C9.272 1.798 8.83.813 7.695.813c-.08 0-.163.005-.252.016a.694.694 0 0 0-.607.689v2.118c-.003.05-.09 1.629-2.36 2.38A.694.694 0 0 0 4 6.675v4.88c.012.66.454 1.621 1.62 1.621z" }) })));
}
exports.default = SolidLike;
