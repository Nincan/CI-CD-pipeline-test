"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineSortDesc(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16 13", "data-icon-name": "LineSortDesc" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.8 9.79l-2.68 2.79a.67.67 0 01-.48.2.65.65 0 01-.47-.2l-2.69-2.8a.72.72 0 010-.98.65.65 0 01.95 0l1.54 1.6V.91c0-.38.3-.7.67-.7.37 0 .67.32.67.7v9.5l1.54-1.61a.65.65 0 01.95 0c.27.27.27.71 0 .99zm-5.73-7.83a.7.7 0 00-.7-.7H.7a.7.7 0 100 1.4h8.67a.7.7 0 00.7-.7zm-2.01 4.2a.7.7 0 00-.7-.7H.7a.7.7 0 000 1.4h6.66a.7.7 0 00.7-.7zm-2.02 4.18a.7.7 0 00-.7-.7H.7a.7.7 0 000 1.4h4.64a.7.7 0 00.7-.7z" }) })));
}
exports.default = LineSortDesc;
