"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLogin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLogin" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.828 9.538a.788.788 0 01-.55-.223.806.806 0 01-.246-.586l-.004-.917H.796a.81.81 0 010-1.621h4.23v-.888a.838.838 0 01.25-.618.784.784 0 01.549-.224.799.799 0 01.579.25l1.63 1.726a.863.863 0 01.218.451.773.773 0 01.006.173.823.823 0 01-.212.493L6.404 9.291a.789.789 0 01-.576.247z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.521 0H3.822a1.49 1.49 0 00-1.479 1.5v3.69h1.688a1.827 1.827 0 01.55-1.225 1.769 1.769 0 011.244-.504 1.8 1.8 0 011.305.564L8.761 5.75a1.92 1.92 0 01.482 1.004 1.706 1.706 0 01.012.385 1.83 1.83 0 01-.47 1.089L7.13 9.978a1.797 1.797 0 01-3.097-1.166h-1.69V12.5a1.49 1.49 0 001.48 1.5h8.698A1.49 1.49 0 0014 12.5v-11A1.49 1.49 0 0012.521 0z" })] })));
}
exports.default = SolidLogin;
