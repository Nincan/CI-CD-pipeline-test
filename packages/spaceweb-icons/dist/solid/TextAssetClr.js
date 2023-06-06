"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTextAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTextAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#3FBF41", d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zm-9.543.734h2.876c.307 0 .556.267.556.595s-.25.596-.556.596H3.553c-.308 0-.557-.267-.557-.596s.25-.595.557-.595zm5.753 6.823H3.553c-.308 0-.557-.267-.557-.595 0-.329.25-.596.557-.596h5.753c.307 0 .556.267.556.596 0 .328-.25.595-.556.595zm0-2.84H3.553c-.308 0-.557-.267-.557-.596 0-.328.25-.595.557-.595h5.753c.307 0 .556.267.556.595 0 .329-.25.596-.556.596z" }, void 0) }), void 0));
}
exports.default = SolidTextAssetClr;
