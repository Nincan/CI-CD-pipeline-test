"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTargetAudience(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTargetAudience" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.309 6.328l-.69-.004a5.608 5.608 0 00-4.863-4.856L7.76.751a.695.695 0 00-.691-.7h-.004a.696.696 0 00-.695.692l-.004.726A5.607 5.607 0 001.51 6.328H.695a.695.695 0 000 1.39h.816a5.608 5.608 0 004.855 4.86l.004.679a.695.695 0 00.695.691h.004a.696.696 0 00.691-.699l-.004-.67a5.609 5.609 0 004.865-4.864l.68.003h.004a.695.695 0 00.004-1.39zm-7.57-1.63a1.571 1.571 0 01.64-.574 1.683 1.683 0 01.68-.146 1.572 1.572 0 01.706.16 1.63 1.63 0 01.64.56 1.567 1.567 0 01.266.892 1.606 1.606 0 01-3.212 0 1.483 1.483 0 01.28-.893zm1.32 6.53c-.036 0-.072-.003-.108-.004a4.183 4.183 0 01-.464-.047c-.031-.006-.064-.008-.095-.016a3.86 3.86 0 01-.422-.089c-.067-.018-.132-.04-.198-.06a3.806 3.806 0 01-.71-.307l-.05-.027a3.742 3.742 0 01-.392-.263.81.81 0 01-.187-.133 3.66 3.66 0 01-.347-.293 3.074 3.074 0 01-.266-.32 4.104 4.104 0 013.305-1.96 4.205 4.205 0 013.279 1.853l-.587.613c-.093.08-.186.16-.293.24a4.234 4.234 0 01-1.708.744 4.274 4.274 0 01-.45.046c-.103.008-.203.023-.307.023z" }) })));
}
exports.default = SolidTargetAudience;
