"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidConnection(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidConnection" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.9 0a2.095 2.095 0 01.7 4.07V5.6a2.1 2.1 0 01-2.1 2.1H9.1v1.4H7.7V4.9h1.4v1.4h1.4a.7.7 0 00.7-.7V4.07A2.095 2.095 0 0111.9 0zm-7 4.9h1.4v4.2H4.9V7.7H3.5a.7.7 0 00-.7.7v1.53a2.1 2.1 0 11-1.4 0V8.4a2.1 2.1 0 012.1-2.1h1.4z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidConnection;
