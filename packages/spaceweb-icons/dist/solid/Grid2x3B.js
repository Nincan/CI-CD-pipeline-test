"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGrid2x3B(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x3B" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.446 2.223H.626a.5.5 0 00-.5.5v8.55a.5.5 0 00.5.5h12.82a.5.5 0 00.5-.5v-8.55a.5.5 0 00-.5-.5zm-.5 4.21h-3.1v-3.21h3.1zm-7.619 1h3.52v3.34h-3.52zm-1-4.21v3.21h-3.2v-3.21zm-3.2 4.21h3.2v3.34h-3.2zm8.72 3.34v-3.34h3.1v3.34z" }, void 0) }), void 0));
}
exports.default = SolidGrid2x3B;
