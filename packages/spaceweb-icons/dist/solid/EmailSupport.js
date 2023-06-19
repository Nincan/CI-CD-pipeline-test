"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEmailSupport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16.766 12.502", "data-icon-name": "SolidEmailSupport" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.194 5.614L13.688.222a.869.869 0 00-.57-.222H.883A.87.87 0 00.31.224l6.605 5.392c.082.066.2.067.28-.002z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.451 4.844c.188 0 .367.032.549.056V1.682l-5.961 4.95a1.537 1.537 0 01-.986.354 1.54 1.54 0 01-.975-.345L0 1.678v7.707c0 .487.395.882.882.882h8.417a4.26 4.26 0 01-.162-1.109 4.32 4.32 0 014.314-4.314z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.442 5.844c-1.828 0-3.314 1.487-3.314 3.314s1.486 3.315 3.314 3.315 3.314-1.487 3.314-3.315-1.486-3.314-3.314-3.314zm0 5.888a.517.517 0 11-.001-1.034.517.517 0 010 1.034zm.64-2.707c-.2.091-.3.303-.3.544v.242c0 .181-.134.302-.334.302s-.333-.121-.333-.302v-.212c0-.453.267-.845.666-1.057.267-.12.4-.393.333-.634-.033-.242-.266-.453-.532-.483-.2-.03-.4 0-.566.12a.57.57 0 00-.233.453c0 .182-.134.303-.334.303s-.333-.121-.333-.303c0-.362.167-.694.467-.936.3-.241.699-.332 1.098-.272.533.09.966.484 1.066.967.1.513-.166 1.027-.666 1.268z" })] })));
}
exports.default = SolidEmailSupport;
