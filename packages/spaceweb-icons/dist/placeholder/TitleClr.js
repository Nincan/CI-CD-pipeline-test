"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderTitleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderTitleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M25 .5H2C1.17.5.5 1.17.5 2v29h1V2c0-.27.23-.5.5-.5h23c.27 0 .5.22.5.5v29h1V2c0-.83-.67-1.5-1.5-1.5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5 16.5h17v1H5zm0 6h17v1H5zm0 3h17v1H5zm0-6h17v1H5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5 6h17v6H5z", opacity: ".5" }, void 0)] }), void 0));
}
exports.default = PlaceholderTitleClr;
