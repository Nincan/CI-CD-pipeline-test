"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddDocument(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddDocument" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.609 11.594a4.238 4.238 0 0 1-.077-.632H3.118a.597.597 0 0 1 0-1.19h3.53a4.14 4.14 0 0 1 .81-1.65h-4.34a.597.597 0 0 1 0-1.19h5.751a.55.55 0 0 1 .065.018 4.221 4.221 0 0 1 4.191.308V4.513a1.522 1.522 0 0 0-.467-1.106L9.44.369a1.328 1.328 0 0 0-.912-.367H1.382a1.431 1.431 0 0 0-1.38 1.474v11.048a1.431 1.431 0 0 0 1.38 1.474h6.66c-.093-.078-.189-.15-.275-.237a4.22 4.22 0 0 1-1.158-2.167ZM3.118 4.14h2.875a.597.597 0 0 1 0 1.19H3.118a.597.597 0 0 1 0-1.19Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.046 8.482a3.23 3.23 0 1 0 .949 2.286 3.239 3.239 0 0 0-.949-2.286Zm-.487 2.806h-.006l-1.298-.015-.015 1.299a.5.5 0 0 1-.5.494h-.005a.5.5 0 0 1-.494-.506l.015-1.298-1.3-.015a.5.5 0 0 1-.493-.506.522.522 0 0 1 .506-.494l1.298.015.015-1.298a.494.494 0 0 1 .505-.494.5.5 0 0 1 .494.506l-.014 1.297 1.297.015a.5.5 0 0 1-.005 1Z" })] })));
}
exports.default = SolidAddDocument;
