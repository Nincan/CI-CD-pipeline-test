"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/TestTube.svg instead.
 */
function LineTestTube(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTestTube" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.786 5.136L8.745.171a.594.594 0 10-.834.847l.314.309L.892 8.77c-1.168 1.234-1.14 3.14.09 4.364A3.098 3.098 0 003.135 14c.815 0 1.627-.317 2.233-.947l7.27-7.38.313.31a.592.592 0 00.84-.007.593.593 0 00-.005-.84zm-9.27 7.088a1.923 1.923 0 01-2.722.042c-.743-.74-.76-1.916-.013-2.704l2.807-2.85a.49.49 0 01.107-.008c.405.005.814.261.997.622.047.094.083.193.12.292.064.171.13.341.22.5.118.21.266.383.393.525.237.263.534.543.931.698l-2.84 2.883zM8.36 8.32c-.056.02-.272.019-.549-.07-.177-.059-.353-.236-.503-.402a1.951 1.951 0 01-.242-.315c-.06-.105-.099-.218-.141-.331a4.154 4.154 0 00-.173-.412c-.25-.495-.683-.86-1.184-1.073L9.07 2.16l2.72 2.678L8.36 8.32z" }), (0, jsx_runtime_1.jsx)("circle", { transform: "rotate(-81.193 4.65 8.64)", cx: "4.651", cy: "8.639", r: ".574" }), (0, jsx_runtime_1.jsx)("circle", { transform: "rotate(-81.194 3.913 11.005)", cx: "3.913", cy: "11.005", r: ".859" })] })));
}
exports.default = LineTestTube;
