"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidExclude(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidExclude" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.872 3.018a1.313 1.313 0 0 1 .802-.64l1.604-.46H.326a.326.326 0 0 0-.327.326v9.158a.326.326 0 0 0 .327.328H3.13L.766 4.04a1.339 1.339 0 0 1 .106-1.022Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.159 1.041a.346.346 0 0 0-.41-.23l-3.14.91-1.89.54-.63.18-3.14.9a.322.322 0 0 0-.23.4l2.84 9.23a.317.317 0 0 0 .15.19.294.294 0 0 0 .16.04.277.277 0 0 0 .09-.01l8.8-2.52a.328.328 0 0 0 .23-.41Zm-.818 5.53L5.816 8.104a.7.7 0 1 1-.45-1.327l4.526-1.534a.7.7 0 0 1 .449 1.326Z" })] })));
}
exports.default = SolidExclude;
