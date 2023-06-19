"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGraphSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGraphSquare" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.5 12.86a.5.5 0 0 1-.5-.5V1.64a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v10.72a.5.5 0 0 1-.5.5Zm7.129-1.327a1 1 0 0 0 .596.196h1.997a1 1 0 0 0 1-1v-2.79a1.59 1.59 0 0 0-1.586-1.586h-.819a1.584 1.584 0 0 0-.784.208V3.863A1.587 1.587 0 0 0 7.45 2.27h-.822a1.595 1.595 0 0 0-1.592 1.59v.534a1.586 1.586 0 0 0-.84-.247h-.828a1.599 1.599 0 0 0-1.59 1.59v4.99a1 1 0 0 0 1 1h1.997a.997.997 0 0 0 .63-.223.997.997 0 0 0 .631.224h1.997a1 1 0 0 0 .596-.196Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 2.14v3.604a2.575 2.575 0 0 0-1.364-.391h-.603V3.869a2.575 2.575 0 0 0-.655-1.73H12m-7.304 0a2.6 2.6 0 0 0-.558 1.01h-.772A2.575 2.575 0 0 0 2 3.542V2.14h2.696m7.804-2h-11A1.5 1.5 0 0 0 0 1.64v10.72a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V1.64a1.5 1.5 0 0 0-1.5-1.5ZM6.036 10.73V3.862a.594.594 0 0 1 .593-.592h.819a.588.588 0 0 1 .585.59v6.868Zm-3.258 0V5.74a.594.594 0 0 1 .593-.592h.818a.588.588 0 0 1 .586.59v4.991Zm6.447 0V7.938a.593.593 0 0 1 .592-.586h.819a.587.587 0 0 1 .586.586v2.79Z" })] })));
}
exports.default = SolidGraphSquare;
