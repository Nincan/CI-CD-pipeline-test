"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/HelpCircle.svg instead.
 */
function LineQuestionCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineQuestionCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 14A7 7 0 117.01-.01 7 7 0 017 14zM7 1.17a5.84 5.84 0 10.01 11.68A5.84 5.84 0 007 1.17zm.7 9.44c0 .27-.32.57-.7.57a.7.7 0 01-.7-.68.7.7 0 01.7-.7c.38 0 .7.32.7.8zM7 9.27c-.35 0-.59-.23-.59-.58v-.41c0-.88.47-1.64 1.18-2.04.47-.24.7-.76.59-1.23a1.12 1.12 0 00-.94-.93c-.36-.06-.71 0-1 .23-.24.18-.42.53-.42.88s-.23.58-.59.58-.59-.23-.59-.58a2.36 2.36 0 014.66-.47c.18 1-.3 1.98-1.18 2.45-.35.17-.53.58-.53 1.05v.47c0 .35-.24.58-.59.58z" }, void 0) }), void 0));
}
exports.default = LineQuestionCircle;
