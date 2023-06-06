"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSortAscending(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSortAscending" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.687 6.276H6.53a.675.675 0 0 1 0 1.35H.68a.675.675 0 0 1 .006-1.35ZM.687 10.047h4.326a.675.675 0 0 1 .001 1.35H.686a.675.675 0 0 1 0-1.35ZM9.536 4.372l1.65-1.65a.675.675 0 0 1 .954-.001l1.648 1.651.008.009a.68.68 0 0 1-.01.96.667.667 0 0 1-.467.19c-.018 0-.034-.01-.051-.01-.011 0-.02.006-.032.006h-.9v5.297a.674.674 0 0 1-1.349 0V5.527h-.96l-.012-.002h-.002a.675.675 0 0 1-.477-1.153ZM8.193 3.853H.681a.675.675 0 0 1 .006-1.349h7.51a.675.675 0 1 1-.004 1.35Z" }, void 0) }), void 0));
}
exports.default = SolidSortAscending;
