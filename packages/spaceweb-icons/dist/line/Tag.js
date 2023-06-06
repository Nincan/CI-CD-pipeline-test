"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Tag.svg instead.
 */
function LineTag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 16 16", "data-icon-name": "LineTag" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.081 5.269c0-.91-.74-1.65-1.649-1.65s-1.649.74-1.649 1.65c0 .91.74 1.649 1.65 1.649.908 0 1.648-.74 1.648-1.65m-.823 0a.825.825 0 11-1.65 0 .825.825 0 011.65 0" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.197 1h-4.66c-.75 0-1.36.607-1.366 1.356l-.03 4.69a1.36 1.36 0 00.4.975l5.893 5.894a2.729 2.729 0 003.862 0l2.761-2.755a2.732 2.732 0 00.002-3.864L8.163 1.4a1.368 1.368 0 00-.966-.4m0 1.093c.073 0 .142.028.193.08l5.896 5.894c.309.31.48.722.48 1.16 0 .438-.171.849-.482 1.16l-2.76 2.755c-.31.31-.72.48-1.158.48a1.63 1.63 0 01-1.159-.48L2.314 7.25a.273.273 0 01-.08-.196l.03-4.69a.274.274 0 01.274-.27h4.66" }, void 0)] }), void 0));
}
exports.default = LineTag;
