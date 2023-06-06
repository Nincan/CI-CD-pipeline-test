"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImageFeatured(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidImageFeatured" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.12 3.95a1.36 1.36 0 1 0 .96-.4 1.36 1.36 0 0 0-.96.4Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.86 9a1.34 1.34 0 0 1 1.17-.92L9.86 8l.32-.77a1.33 1.33 0 0 1 .42-.53L8.97 5.08a.45.45 0 0 0-.64 0L4.55 8.85l-1.5-1.5a.45.45 0 0 0-.64 0L.9 8.85V2.96a.45.45 0 0 1 .45-.45h10.03a.45.45 0 0 1 .45.45V6.5a1.33 1.33 0 0 1 .81.74l.1.23v-4.5a1.37 1.37 0 0 0-1.36-1.37H1.37A1.37 1.37 0 0 0 0 2.96v7.44a1.37 1.37 0 0 0 1.37 1.36H8.7l.18-.78-.63-.55a1.34 1.34 0 0 1-.4-1.44Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "m13.72 9.12-1.46-.13-.57-1.34a.3.3 0 0 0-.55 0l-.57 1.34-1.46.12a.3.3 0 0 0-.17.53l1.1.96-.33 1.43a.3.3 0 0 0 .45.32l1.26-.75 1.25.76a.3.3 0 0 0 .45-.33l-.33-1.43 1.1-.96a.3.3 0 0 0-.17-.52Z" }, void 0)] }), void 0));
}
exports.default = SolidImageFeatured;
