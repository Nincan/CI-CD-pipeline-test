"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Screen.svg instead.
 */
function LineScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 12", "data-icon-name": "LineScreen" }, props, { children: (0, jsx_runtime_1.jsx)("switch", { children: (0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.44 3.64h-8.4a.54.54 0 01-.55-.55c0-.31.23-.55.54-.55h8.41c.31 0 .55.24.55.55 0 .31-.24.55-.55.55zM9.46 5.79H3.02a.53.53 0 01-.53-.55c0-.31.23-.55.53-.55h6.44c.3 0 .53.24.53.55 0 .32-.23.55-.53.55zM12.8 1.2v9.6H1.2V1.2h11.6m0-1.2H1.2C.54 0 0 .54 0 1.2v9.6c0 .66.54 1.2 1.2 1.2h11.6c.66 0 1.2-.54 1.2-1.2V1.2c0-.66-.54-1.2-1.2-1.2z" }, void 0) }, void 0) }, void 0) }), void 0));
}
exports.default = LineScreen;
