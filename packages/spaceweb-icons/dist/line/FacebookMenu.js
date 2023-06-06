"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineFacebookMenu(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineFacebookMenu" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.746 2.83h12.508a.746.746 0 1 0 0-1.491H.746a.746.746 0 0 0 0 1.492ZM13.254 6.254H.746a.746.746 0 0 0 0 1.491h12.508a.746.746 0 1 0 0-1.491ZM13.254 11.17H.746a.746.746 0 0 0 0 1.49h12.508a.746.746 0 1 0 0-1.49Z" }, void 0) }), void 0));
}
exports.default = LineFacebookMenu;
