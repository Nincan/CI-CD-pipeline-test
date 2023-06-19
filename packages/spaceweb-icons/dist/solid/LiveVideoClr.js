"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLiveVideoClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 23.5 15.7", "data-icon-name": "SolidLiveVideoClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "#F7B500", d: "M7.5 6.6a1.8 1.8 0 102.6 2.6 1.8 1.8 0 10-2.6-2.6zm-3-2.4a5.2 5.2 0 000 7.4.9.9 0 001.2 0c.3-.3.3-.8 0-1.2a3.5 3.5 0 010-5 .9.9 0 00-1.2-1.2zm7.4 0c-.3.3-.3.8 0 1.2a3.5 3.5 0 010 5 .9.9 0 101.2 1.2 5.2 5.2 0 000-7.4.9.9 0 00-1.2 0zm11.3-2.4c.2.2.3.4.3.7V12a1 1 0 01-1.7.6L19 10V4.7l2.8-2.9a1 1 0 011.4 0zM14.9 0a3 3 0 013 3v9.7a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h11.9z" }) })));
}
exports.default = SolidLiveVideoClr;
