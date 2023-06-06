"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCardView(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCardView" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.74 13.4h12.52a.67.67 0 00.74-.57v-.57a.67.67 0 00-.74-.57H.74a.67.67 0 00-.74.57v.57a.67.67 0 00.74.57zM13.26.6H.74a.81.81 0 00-.74.87v5.21a.81.81 0 00.74.87h12.52a.81.81 0 00.74-.87V1.47a.81.81 0 00-.74-.87zM0 9.43v.55c0 .3.33.56.74.56h12.52c.4 0 .74-.25.74-.56v-.55c0-.3-.33-.56-.74-.56H.74c-.4 0-.74.25-.74.56z" }, void 0) }), void 0));
}
exports.default = SolidCardView;
