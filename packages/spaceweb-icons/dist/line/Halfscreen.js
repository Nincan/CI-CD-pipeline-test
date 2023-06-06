"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineHalfscreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineHalfscreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.467 1.556v3.11H0V0h4.4v1.556H1.467zM0 9.333h1.467v3.111H4.4V14H0V9.333zM7 1v12h6V1H7zm7-1H6v14h8V0z" }, void 0) }), void 0));
}
exports.default = LineHalfscreen;
