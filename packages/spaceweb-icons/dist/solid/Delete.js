"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDelete(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDelete" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.418 1.386h-5.8V.6a.582.582 0 00-1.166 0v.787H.582a.582.582 0 100 1.165h.34l1.096 8.442a.583.583 0 00.071.208c.417 1.845 1.39 2.754 2.983 2.754h4.071c1.37 0 2.43-1.163 2.755-2.973a.566.566 0 00.027-.082l1.121-8.35h.372a.582.582 0 100-1.164zm-8.624 9.711a.472.472 0 01-.052.002.58.58 0 01-.579-.53l-.51-5.837a.584.584 0 011.16-.102l.51 5.836a.583.583 0 01-.529.631zm2.81-.58a.582.582 0 11-1.164 0V4.66a.582.582 0 111.164 0zm2.267.05v.003a.58.58 0 01-.63.526h-.003a.58.58 0 01-.526-.63l.51-5.836a.582.582 0 111.16.102z" }) })));
}
exports.default = SolidDelete;
