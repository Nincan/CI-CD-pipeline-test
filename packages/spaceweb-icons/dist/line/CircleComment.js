"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Suggestion.svg instead.
 */
function LineCircleComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCircleComment" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.385 13.6a.6.6 0 01-.203-.036l-2.934-1.055A6.532 6.532 0 016.615 13.6c-3.639 0-6.6-2.96-6.6-6.6S2.976.4 6.615.4a6.607 6.607 0 015.9 9.563l1.404 2.765a.6.6 0 01-.534.872zm-6.77-12c-2.977 0-5.4 2.422-5.4 5.4s2.423 5.4 5.4 5.4c1.157 0 2.26-.36 3.19-1.043a.606.606 0 01.557-.082l1.802.648-.863-1.695a.6.6 0 01.013-.569A5.374 5.374 0 0012.015 7c0-2.978-2.422-5.4-5.4-5.4z" }, void 0) }), void 0));
}
exports.default = LineCircleComment;
