"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidImport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidImport" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.78 4.941H9.47V.824A.826.826 0 0 0 8.648 0H5.353a.826.826 0 0 0-.824.824V4.94H3.22a.826.826 0 0 0-.585 1.408l3.78 3.78a.82.82 0 0 0 1.161 0l3.78-3.78a.824.824 0 0 0-.576-1.408Zm-9.545 8.235A.826.826 0 0 0 2.06 14h9.882a.824.824 0 0 0 0-1.647H2.06a.826.826 0 0 0-.824.823Z" }) })));
}
exports.default = SolidImport;
