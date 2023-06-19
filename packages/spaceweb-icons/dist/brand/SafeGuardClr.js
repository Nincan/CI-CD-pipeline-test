"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSafeGuardClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSafeGuardClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#e5843c", d: "M10.13 4.7a2.43 2.43 0 01.85.14 1.5 1.5 0 01.96 1.33 3.5 3.5 0 01.01.35v5a1.08 1.08 0 00.1.44l.83 1.96a.2.2 0 010 .05V14l-1.08-.45-1.28-.56a.48.48 0 00-.2-.02H2.79a1.66 1.66 0 01-1.27-.5 1.49 1.49 0 01-.41-1.04c-.01-1.73-.02-3.45 0-5.17A1.53 1.53 0 012.7 4.71H8zM6.58 6.39H3.5c-.39 0-.5.1-.5.48v3.94c0 .4.11.5.5.5h6.15c.38 0 .5-.12.5-.5V6.87c0-.38-.12-.5-.51-.5H6.58z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#848689", d: "M10.13 4.7H8.01V3.69a1.43 1.43 0 00-.65-1.24 1.4 1.4 0 00-2.15.92 9 9 0 00-.03 1.35H3.05c0-.46-.02-.91.02-1.37A3.49 3.49 0 014.95.44 3.24 3.24 0 017.63.17 3.55 3.55 0 019.6 1.73a3.8 3.8 0 01.53 1.96v1.02z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#e5843c", d: "M12.89 13.97l.01.02c0 .02-.02.01-.03 0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#848689", d: "M7.3 8.32a.67.67 0 01-.2.48.63.63 0 00-.2.49 3.44 3.44 0 010 .37.34.34 0 01-.34.36.35.35 0 01-.32-.38 2.2 2.2 0 010-.22.77.77 0 00-.22-.64.62.62 0 01-.04-.81.74.74 0 01.8-.3.7.7 0 01.52.65z" })] })));
}
exports.default = BrandSafeGuardClr;
