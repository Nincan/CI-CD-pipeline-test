"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSpacingHorizontal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpacingHorizontal" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "solid_spacingHorizontal__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M0 .368h14v13.263H0z" }) })) }), (0, jsx_runtime_1.jsx)("g", tslib_1.__assign({ clipPath: "url(#solid_spacingHorizontal__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.26 8.872v-.928h3.48v.852c0 .01.01.02.01.029 0 .019-.01.028-.01.047a.63.63 0 0 0 .19.446.7.7 0 0 0 .97 0l1.65-1.554a.617.617 0 0 0 0-.91L9.89 5.301a.703.703 0 0 0-.96 0 .622.622 0 0 0-.2.454v.92H5.25v-.853c0-.01-.01-.02-.01-.029 0-.019.01-.028.01-.047a.63.63 0 0 0-.19-.445.7.7 0 0 0-.97 0L2.44 6.864a.617.617 0 0 0 0 .91l1.65 1.562a.703.703 0 0 0 .96 0 .63.63 0 0 0 .21-.464ZM12.8.937v12.126a.6.6 0 0 0 1.2 0V.937a.6.6 0 0 0-1.2 0ZM1.2 13.063V.937A.587.587 0 0 0 .6.368a.587.587 0 0 0-.6.569v12.126a.587.587 0 0 0 .6.569.587.587 0 0 0 .6-.569Z" }) }))] })));
}
exports.default = SolidSpacingHorizontal;
