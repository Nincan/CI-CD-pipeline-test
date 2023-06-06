"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderTextClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderTextClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M20.22.51L20.21.5h-.04c.01.01.03.01.05.01zm6.28 6.33v-.05l-.01-.01c0 .02 0 .04.01.06zm-1 1.12V31h1V7.37c-.12.3-.46.51-1 .59zM19.62.5H2C1.06.5.5 1.06.5 2v29h1V2c0-.39.11-.5.5-.5h17.04c.08-.53.28-.88.58-1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5 6h9v1H5zm0 3.5h17v1H5zm0 3h17v1H5zM5 19h9v1H5zm0 3.5h17v1H5zm0 3h17v1H5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M19 2c0-1.66.95-2.05 2.12-.88l4.76 4.76C27.05 7.05 26.65 8 25 8h-3c-1.66 0-3-1.35-3-3V2z" }, void 0)] }), void 0));
}
exports.default = PlaceholderTextClr;
