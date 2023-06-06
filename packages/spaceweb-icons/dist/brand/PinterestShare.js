"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandPinterestShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandPinterestShare" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.298 7.694a.702.702 0 0 0-.701.701v4.144H1.403V8.395a.702.702 0 0 0-1.403 0v4.846a.702.702 0 0 0 .702.701h12.596a.702.702 0 0 0 .702-.701V8.395a.702.702 0 0 0-.702-.701Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M2.876 5.937a.717.717 0 0 0 .512-.214L6.274 2.84v6.755a.726.726 0 0 0 1.452 0V2.84l2.886 2.884a.725.725 0 1 0 1.026-1.025L8.231 1.29l.002-.001L7 .058 5.768 1.29h.001L2.363 4.699a.726.726 0 0 0 .513 1.239Z" }, void 0)] }), void 0));
}
exports.default = BrandPinterestShare;
