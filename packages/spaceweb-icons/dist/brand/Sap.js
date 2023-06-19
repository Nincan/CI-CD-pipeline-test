"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSap(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSap" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", {}), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.303 4.017h-1.92V8.58L7.705 4.017H6.042L4.61 7.834C4.458 6.872 3.463 6.539 2.68 6.29c-.518-.166-1.066-.41-1.06-.68.003-.222.294-.428.868-.397a3.137 3.137 0 011.404.379L4.56 4.43a5.198 5.198 0 00-2.175-.515H2.38a2.642 2.642 0 00-1.92.702A1.622 1.622 0 000 5.737a1.504 1.504 0 00.66 1.34 4.505 4.505 0 001.305.598c.533.164.968.308.963.614a.441.441 0 01-.126.3.844.844 0 01-.619.194 2.659 2.659 0 01-1.59-.454L0 9.507a4.435 4.435 0 002.174.578l.1-.001a2.626 2.626 0 001.652-.554l.07-.06-.192.514h1.744l.293-.89a3.33 3.33 0 002.026.008l.282.882h2.844V8.14h.62c1.5 0 2.387-.763 2.387-2.043 0-1.426-.862-2.08-2.697-2.08zM6.866 7.924a1.741 1.741 0 01-.616-.108l.61-1.92h.012l.596 1.925a1.774 1.774 0 01-.602.103zm4.55-1.103h-.424V5.273h.424c.564 0 1.013.187 1.013.765 0 .595-.45.783-1.013.783" })] })));
}
exports.default = BrandSap;
