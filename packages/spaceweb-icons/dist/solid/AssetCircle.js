"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAssetCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAssetCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 .001A6.999 6.999 0 1 0 13.999 7 6.999 6.999 0 0 0 7 .001Zm4.124 10.586H2.876a.375.375 0 0 1-.376-.376V7.117a.377.377 0 0 1 .044-.178l1.782-3.328a.376.376 0 0 1 .331-.198l4.679.003a.375.375 0 0 1 .33.198l1.784 3.325a.376.376 0 0 1 .045.177l.005 3.095a.376.376 0 0 1-.376.376Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "m9.112 4.167-4.23-.002-1.38 2.576h1.616v.376c0 .705.372.775.487.78h2.73a.502.502 0 0 0 .39-.14.962.962 0 0 0 .18-.615l-.027-.4h1.613ZM8.7 6.048H5.228a.376.376 0 1 1 0-.751H8.7a.376.376 0 1 1 0 .751Z" }, void 0)] }), void 0));
}
exports.default = SolidAssetCircle;
