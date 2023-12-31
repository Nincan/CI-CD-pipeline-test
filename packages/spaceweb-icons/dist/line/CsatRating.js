"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineCsatRating(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCsatRating" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.053.433a2.053 2.053 0 102.053 2.053A2.055 2.055 0 002.053.433zm0 3.159a1.105 1.105 0 111.105-1.106 1.107 1.107 0 01-1.105 1.106zM11.947.433A2.053 2.053 0 1014 2.486 2.055 2.055 0 0011.947.433zm0 3.159a1.105 1.105 0 111.105-1.106 1.107 1.107 0 01-1.105 1.106zM2.969 7.797h.896v5.658h-.928v-4.73h-.03c-.22.12-1.023.63-1.314.834v-.901a17.701 17.701 0 011.377-.862zm2.269 2.926h1.868v.822H5.238zm7.2.85a1.974 1.974 0 01-2.12 1.994 1.747 1.747 0 01-1.951-1.587h.879a1.01 1.01 0 001.115.821 1.153 1.153 0 001.144-1.162v-.029a1.112 1.112 0 00-1.136-1.176 1.168 1.168 0 00-1.12.667h-.812l.286-3.308h3.291v.78H9.49l-.166 1.602h.03a1.562 1.562 0 011.214-.484 1.83 1.83 0 011.87 1.882zM5.36 2.882a.395.395 0 010-.79h.79a.395.395 0 010 .79zm3.28 0h-.789a.395.395 0 010-.79h.79a.395.395 0 110 .79z" }) })));
}
exports.default = LineCsatRating;
