"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandFacebook(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandFacebook" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.202 7.083a14.73 14.73 0 01.011-1.504.826.826 0 01.855-.813c.17-.02.341-.016.512-.02.153-.003.307 0 .494 0V2.942a5.159 5.159 0 00-2.553.007 2.444 2.444 0 00-1.693 2.364c-.014.57-.003 1.141-.003 1.75H4.093v1.954h1.698v4.903C2.785 13.798-.054 10.412 0 7.01A7.061 7.061 0 016.718.07a7.022 7.022 0 017.278 6.744 6.875 6.875 0 01-5.807 7.119V9.056h1.61l.33-1.973z" }, void 0) }), void 0));
}
exports.default = BrandFacebook;
