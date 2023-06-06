"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProfile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProfile" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .063A6.937 6.937 0 1013.937 7 6.943 6.943 0 007 .063zm0 2.775a2.203 2.203 0 11-2.197 2.196A2.196 2.196 0 017 2.838zm3.78 8.498A5.731 5.731 0 017 12.78a5.673 5.673 0 01-3.607-1.306 6.006 6.006 0 01-.474-.405 4.063 4.063 0 01-.37-.428 5.634 5.634 0 014.543-2.694 5.783 5.783 0 014.487 2.532z" }, void 0) }), void 0));
}
exports.default = SolidProfile;
