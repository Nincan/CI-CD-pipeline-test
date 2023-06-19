"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPointerUp(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPointerUp" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.872.013A.88.88 0 0 0 6.4.217c-.026.026-.051.038-.077.064L3.585 2.905a.97.97 0 0 0-.043 1.37l.005.006a.952.952 0 0 0 .726.293c.013 0 .013.013.025.013H6.1v8.507a.906.906 0 0 0 1.812 0V4.587h1.8c.014 0 .026-.013.04-.013a.925.925 0 0 0 .7-.293.98.98 0 0 0-.026-1.376L7.674.268h-.012a.964.964 0 0 0-.586-.267 1.098 1.098 0 0 0-.204.012Z" }) })));
}
exports.default = SolidPointerUp;
