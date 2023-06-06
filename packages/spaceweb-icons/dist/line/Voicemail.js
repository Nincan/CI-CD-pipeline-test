"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineVoicemail(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineVoicemail" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.07 5.053a2.91 2.91 0 00-2.906 2.905 2.875 2.875 0 00.433 1.505H5.38a2.875 2.875 0 00.432-1.505 2.906 2.906 0 10-2.906 2.906c.063 0 .121-.015.182-.019a.653.653 0 00.092.019h7.89a2.905 2.905 0 000-5.81zM1.4 7.958a1.505 1.505 0 111.505 1.505A1.506 1.506 0 011.4 7.958zm9.668 1.505a1.505 1.505 0 111.505-1.505 1.506 1.506 0 01-1.505 1.505z" }, void 0) }), void 0));
}
exports.default = LineVoicemail;
