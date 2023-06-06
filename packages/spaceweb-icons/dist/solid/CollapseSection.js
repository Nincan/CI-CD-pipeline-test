"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCollapseSection(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCollapseSection" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.303 7.743H.755a.701.701 0 00-.006 1.402h12.554a.701.701 0 000-1.402zM7.528 3.378h5.775a.701.701 0 000-1.402h-5.77a.701.701 0 10-.005 1.402zM13.303 4.86H6.73a.701.701 0 10-.005 1.401h6.58a.701.701 0 000-1.402zM13.303 10.626H.755a.701.701 0 00-.006 1.402h12.554a.701.701 0 000-1.402zM2.48 5.422h.01a.45.45 0 00.14.1.557.557 0 00.08.05.576.576 0 00.26.05.602.602 0 00.26-.05c.01 0 .02-.02.04-.03a.517.517 0 00.18-.12l2.28-2.28a.691.691 0 00-.01-.97.676.676 0 00-.52-.19v-.01H.67v.01a.657.657 0 00-.47.19.682.682 0 000 .97z" }, void 0) }), void 0));
}
exports.default = SolidCollapseSection;
