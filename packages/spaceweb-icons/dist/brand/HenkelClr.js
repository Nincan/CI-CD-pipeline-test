"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandHenkelClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandHenkelClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#d93832", fillRule: "evenodd", d: "M.48 7C.48 5.17 3.41 3.68 7 3.68c3.6 0 6.52 1.49 6.52 3.32S10.59 10.32 7 10.32C3.4 10.32.48 8.83.48 7zM14 7c0-2.01-3.13-3.65-7-3.65S0 5 0 7s3.13 3.65 7 3.65S14 9 14 7z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#d93832", fillRule: "evenodd", d: "M2.25 8.03h-.52V5.84h.52v.82h.81v-.82h.52v2.19h-.52v-.94h-.81v.94zm3.4-.46a.77.77 0 01-.84.51.79.79 0 01-.86-.85.82.82 0 01.9-.85.8.8 0 01.83.88v.09H4.45a.38.38 0 00.38.42.32.32 0 00.33-.2zm-.47-.49c0-.34-.22-.38-.34-.38-.06 0-.35 0-.4.38h.74zm1.28-.45a.68.68 0 01.56-.25c.21 0 .53.06.53.65v1h-.48V7.1c0-.16-.01-.41-.27-.41-.32 0-.32.36-.32.43v.9H6V6.44h.46v.2zm2.51-.19h.58l-.63.63.69.96h-.57l-.45-.66-.17.16v.5h-.48V5.84h.48v1.2l.55-.6zm1.23.64c.04-.39.33-.38.4-.38.1 0 .32.04.33.38h-.73zm.7.49a.32.32 0 01-.32.2.38.38 0 01-.38-.42h1.23v-.09a.8.8 0 00-.83-.88.82.82 0 00-.9.85.79.79 0 00.86.85.77.77 0 00.84-.51zm1.33-1.73v2.19h-.48V5.84h.48z" })] })));
}
exports.default = BrandHenkelClr;
