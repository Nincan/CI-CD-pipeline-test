"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidArchive(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidArchive" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.577 1.786L12.507.492A1.118 1.118 0 0011.62.07H2.379a1.144 1.144 0 00-.893.423L.423 1.786a1.508 1.508 0 00-.354.978v9.627a1.545 1.545 0 001.54 1.54H12.39a1.545 1.545 0 001.54-1.54V2.764a1.508 1.508 0 00-.354-.978zm-4.18 6.831l-2.149 2.149a.381.381 0 01-.547 0L4.553 8.617a.385.385 0 01.277-.654h1.378V5.62a.77.77 0 011.54 0v2.342h1.38a.381.381 0 01.269.654zM1.925 2.38l.639-.77h8.872l.647.77z" }) })));
}
exports.default = SolidArchive;
