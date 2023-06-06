"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandWebinar(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandWebinar" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.918 6.083c-.172-.097-.312-.016-.312.18v2.532c0 .196.14.278.312.18l2.23-1.268c.17-.099.17-.257 0-.354Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.24 10.246a.497.497 0 0 1-.496-.496V4.792h12.394v3.704l.744.599V1.074a.493.493 0 0 0-.454-.487V.578H.453v.009A.493.493 0 0 0 0 1.074v9.42a.498.498 0 0 0 .496.496h8.803v-.744H1.24ZM.743 4.049v-.992h12.394v.992H.743Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "m14 10.462-3.714-2.99.007 4.768 1.315-1.16 1.123 2.342.663-.318-1.122-2.341Z" }, void 0)] }), void 0));
}
exports.default = BrandWebinar;
