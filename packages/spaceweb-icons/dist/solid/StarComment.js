"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStarComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStarComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.885 12.7l-1.398-2.75a6.568 6.568 0 10-5.87 3.618 6.499 6.499 0 003.615-1.085l2.92 1.05a.597.597 0 00.733-.832zm-3.628-6.114L8.671 7.961l.476 2.046a.407.407 0 01-.053.322.424.424 0 01-.592.143L6.71 9.388l-1.798 1.084a.432.432 0 01-.64-.47l.476-2.041-1.591-1.375a.444.444 0 01-.148-.29.436.436 0 01.396-.466l2.089-.18.82-1.924a.4.4 0 01.227-.227.428.428 0 01.565.227l.82 1.924 2.093.18a.444.444 0 01.291.148.429.429 0 01-.053.608z" }) })));
}
exports.default = SolidStarComment;
