"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSigma(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 11.654 14", "data-icon-name": "LineSigma" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.363 11.669H2.648l3.594-3.594c.007-.006.017-.004.024-.011l.824-.824c.114-.114.12-.292.013-.399l-.02-.02-.824-.824-3.666-3.666h8.77a.29.29 0 00.291-.291V.291A.29.29 0 0011.363 0H.291A.29.29 0 000 .291v1.748c0 .015.014.024.016.038a.255.255 0 00.067.216l4.734 4.734-4.724 4.724a.288.288 0 00-.093.21v1.748c0 .161.13.291.291.291h11.071a.29.29 0 00.291-.291v-1.748a.29.29 0 00-.29-.292z" }, void 0) }), void 0));
}
exports.default = LineSigma;
