"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHeadphone(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHeadphone" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C4.484 0 2.444 2 2.444 4.468v1.49h-.151c-1.086 0-1.974.87-1.974 1.936v1.191c0 1.065.888 1.936 1.974 1.936H3.81a.469.469 0 00.456-.447v-4.17a.469.469 0 00-.456-.447h-.455V4.468C3.356 2.48 4.973.894 7 .894s3.644 1.586 3.644 3.574v1.49h-.455a.477.477 0 00-.456.446v4.17a.47.47 0 00.456.447h.38c-.092.272-.27.523-.565.745-.398.299-1.014.535-1.884.586A1.224 1.224 0 007 11.617c-.666 0-1.215.539-1.215 1.192C5.785 13.46 6.335 14 7 14c.51 0 .95-.313 1.13-.754 1.03-.053 1.846-.33 2.429-.768.515-.387.836-.904.95-1.457h.198c1.086 0 1.974-.871 1.974-1.936V7.894c0-1.065-.888-1.937-1.974-1.937h-.151V4.468C11.556 2 9.516 0 7 0z" }) })));
}
exports.default = SolidHeadphone;
