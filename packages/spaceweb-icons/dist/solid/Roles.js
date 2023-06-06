"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRoles(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRoles" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.698.669H7.633a1.27 1.27 0 00-1.266 1.266v2.216h.95a1.27 1.27 0 011.266 1.266v3.134a3.772 3.772 0 002.216.297 3.903 3.903 0 003.165-3.887V1.935A1.27 1.27 0 0012.698.669M8.266 3.518a.633.633 0 11.633.633.635.635 0 01-.633-.633m3.07 2.773H8.983a.32.32 0 01-.279-.475A1.679 1.679 0 0110.16 5.1a1.668 1.668 0 011.456.722.316.316 0 01-.278.469m.095-2.14a.633.633 0 11.633-.633.635.635 0 01-.633.633" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.367 5.1H1.302A1.27 1.27 0 00.036 6.367v3.032a3.891 3.891 0 003.298 3.9 3.803 3.803 0 004.3-3.767V6.367A1.27 1.27 0 006.366 5.1M1.935 7.95a.633.633 0 11.633.632.635.635 0 01-.633-.633m3.356 2.058a1.66 1.66 0 01-1.456.722 1.668 1.668 0 01-1.457-.722.32.32 0 01.279-.475h2.355a.32.32 0 01.279.475M5.1 8.582a.633.633 0 11.633-.633.635.635 0 01-.633.633" }, void 0)] }), void 0));
}
exports.default = SolidRoles;
