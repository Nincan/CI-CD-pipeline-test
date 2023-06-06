"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidLinkedInHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 13.162", "data-icon-name": "SolidLinkedInHome" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.069 3.76V.787h-1.931v1.839L7 .787 0 4.892v1.207h1.448v3.863a2.413 2.413 0 0 0 2.414 2.413h1.931V8.512H8.69v3.862h1.93a2.413 2.413 0 0 0 2.414-2.413V6.098H14V4.891Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidLinkedInHome;
