"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandInstagramGrid(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandInstagramGrid" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.4 0H.6a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6h12.8a.6.6 0 0 0 .6-.6V.6a.6.6 0 0 0-.6-.6ZM1.2 5.341h3.317v2.941H1.2Zm4.517 0H8.66v2.941H5.717ZM8.66 9.482V12.8H5.717V9.482Zm-2.942-5.34V1.2H8.66v2.941Zm4.142 1.2H12.8v2.94H9.859Zm2.941-1.2H9.859V1.2H12.8ZM4.517 1.2v2.941H1.2V1.2ZM1.2 9.482h3.317V12.8H1.2ZM9.859 12.8V9.482H12.8V12.8Z" }) })));
}
exports.default = BrandInstagramGrid;
