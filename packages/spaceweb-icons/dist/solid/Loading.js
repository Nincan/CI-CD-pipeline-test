"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidLoading(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidLoading" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.694 6.998a.798.798 0 00-.795-.796l-2.17.001A.799.799 0 00.76 7.797h.08l2.12-.007a.798.798 0 00.733-.792zM3.129 2.008a.802.802 0 00-1.08.047.818.818 0 00.032 1.158l1.505 1.495a.795.795 0 001.076-1.17zM9.901 4.898a.793.793 0 00.564-.233l1.533-1.532a.799.799 0 00-.614-1.311.848.848 0 00-.592.263L9.295 3.59a.794.794 0 00.606 1.308zM4.098 9.1a.789.789 0 00-.563.234l-1.533 1.532a.8.8 0 00.614 1.312.849.849 0 00.592-.264l1.497-1.504a.795.795 0 00-.607-1.31zM13.16 6.202l-2.123.008a.795.795 0 00.064 1.588h2.161l.009-.001A.795.795 0 0014 6.998a.82.82 0 00-.84-.796zM10.414 9.292a.796.796 0 00-1.076 1.17l1.532 1.53a.798.798 0 00.513.187h.001a.795.795 0 00.566-.234.818.818 0 00-.03-1.158zM6.998 10.302a.796.796 0 00-.796.796v2.166a.805.805 0 00.798.728.82.82 0 00.799-.84l-.008-2.119a.8.8 0 00-.793-.73zM7.002 3.699a.796.796 0 00.795-.798V.736A.805.805 0 007 .008a.82.82 0 00-.799.84l.007 2.12a.8.8 0 00.794.73z" }, void 0) }), void 0));
}
exports.default = SolidLoading;
