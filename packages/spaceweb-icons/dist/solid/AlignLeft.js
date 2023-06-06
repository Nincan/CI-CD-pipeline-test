"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAlignLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 15.516 13", "data-icon-name": "SolidAlignLeft" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M15.516 8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1zm-4.786-4a1 1 0 0 1-1 1H3.516a1 1 0 0 1 0-2H9.73a1 1 0 0 1 1 1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.25 0A.25.25 0 0 1 .5.25v12.5a.25.25 0 1 1-.5 0V.25A.25.25 0 0 1 .25 0z" }, void 0)] }), void 0));
}
exports.default = SolidAlignLeft;
