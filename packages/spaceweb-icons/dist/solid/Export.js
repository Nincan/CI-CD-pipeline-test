"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidExport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidExport" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.214 5.43h1.31v4.117a.826.826 0 0 0 .823.823H8.64a.826.826 0 0 0 .823-.823V5.429h1.31a.826.826 0 0 0 .585-1.408L7.579.24a.82.82 0 0 0-1.162 0l-3.78 3.78a.824.824 0 0 0 .577 1.408Zm-1.979 7.746A.826.826 0 0 0 2.06 14h9.882a.824.824 0 0 0 0-1.647H2.06a.826.826 0 0 0-.824.823Z" }, void 0) }), void 0));
}
exports.default = SolidExport;