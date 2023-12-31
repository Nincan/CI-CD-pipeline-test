"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandHubspot(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandHubspot" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.586 4.623V2.958a1.282 1.282 0 00.739-1.156v-.038A1.282 1.282 0 0010.043.482h-.038a1.282 1.282 0 00-1.282 1.282v.038a1.282 1.282 0 00.739 1.156v1.665a3.63 3.63 0 00-1.726.76L3.17 1.827a1.432 1.432 0 00.051-.36 1.444 1.444 0 10-1.447 1.441h.001a1.429 1.429 0 00.711-.193l4.496 3.498a3.642 3.642 0 00.056 4.102l-1.367 1.368a1.21 1.21 0 10.79.79l1.352-1.353a3.648 3.648 0 102.773-6.497m-.561 5.475a1.872 1.872 0 01-.1-3.742h.1a1.872 1.872 0 01.002 3.741" }) })));
}
exports.default = BrandHubspot;
