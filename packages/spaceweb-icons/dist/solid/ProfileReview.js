"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProfileReview(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProfileReview" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.12 12.03A5.03 5.03 0 0 1 8.46 2h.16a4.97 4.97 0 0 1 4.01 2c.04-.76.07-1.53.07-2.28a.61.61 0 0 0-.48-.6L6.6 0a.74.74 0 0 0-.2 0L.52.9a.63.63 0 0 0-.48.42.7.7 0 0 0-.05.25l.01.54C.07 7.3.13 12.18 6.38 13.98a.98.98 0 0 0 .17.02.7.7 0 0 0 .2-.03 7.82 7.82 0 0 0 3.3-2.14 5.02 5.02 0 0 1-1.43.22c-.16 0-.33 0-.5-.02Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.62 4.87A1.21 1.21 0 1 0 9.83 6.1a1.22 1.22 0 0 0-1.21-1.22Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.8 11.2 12 9.42a4.17 4.17 0 1 0-1.01 1l1.8 1.8a.71.71 0 0 0 1-1ZM11.03 9a3.2 3.2 0 0 0-2.42-1.31 3.14 3.14 0 0 0-2.38 1.36 3.1 3.1 0 0 1 2.3-5.1h.1a3.09 3.09 0 0 1 2.4 5.04Z" }, void 0)] }), void 0));
}
exports.default = SolidProfileReview;
