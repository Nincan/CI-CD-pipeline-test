"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPointerDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPointerDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.128 13.987a.88.88 0 0 0 .471-.204c.026-.026.051-.038.077-.064l2.739-2.624a.97.97 0 0 0 .043-1.37l-.005-.006a.952.952 0 0 0-.726-.293c-.013 0-.013-.013-.025-.013H7.9V.906a.906.906 0 0 0-1.812 0v8.507h-1.8c-.014 0-.026.013-.04.013a.924.924 0 0 0-.7.293.98.98 0 0 0 .026 1.376l2.752 2.637h.012a.964.964 0 0 0 .586.268 1.098 1.098 0 0 0 .204-.013Z" }) })));
}
exports.default = SolidPointerDown;
