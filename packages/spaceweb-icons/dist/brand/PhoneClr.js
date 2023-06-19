"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPhoneClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPhoneClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#40A3F5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.996 12.653H1.322c-.065 0-.13-.001-.194-.003-.077-.003-.12-.044-.123-.121-.068-1.391.075-2.747.711-4.011C2.52 6.92 3.8 5.902 5.53 5.455a5.873 5.873 0 012.223-.133 5.824 5.824 0 012.936 1.213c.896.708 1.515 1.618 1.895 2.691a7.43 7.43 0 01.415 2.27c.01.342-.005.685-.006 1.028 0 .082-.043.12-.117.125-.068.005-.136.004-.204.004H6.996zm.013-5.5c-.993 0-1.751.752-1.752 1.737-.001 1.004.745 1.76 1.74 1.762 1.002.001 1.757-.755 1.758-1.764.002-.978-.76-1.735-1.746-1.735z" }), (0, jsx_runtime_1.jsx)("path", { d: "M1.255 5.906L0 4.143s.454-.455.695-.664c1.067-.926 2.317-1.49 3.68-1.824.736-.18 1.485-.278 2.243-.302 1.59-.049 3.128.199 4.597.825 1.051.45 1.981 1.073 2.745 1.932l.04.05-1.227 1.743c-.048-.024-.093-.046-.137-.07-.667-.37-1.329-.748-2.004-1.103a1.004 1.004 0 01-.533-.707 4.432 4.432 0 01-.078-.536c-.007-.062-.036-.09-.084-.115-.347-.182-.72-.284-1.1-.358a9.34 9.34 0 00-1.639-.16c-.77-.013-1.53.04-2.28.219-.29.068-.572.16-.836.302-.052.028-.069.061-.073.12-.026.336-.07.67-.271.956a.652.652 0 01-.202.191c-.755.423-1.514.84-2.28 1.264z" })] })) })));
}
exports.default = BrandPhoneClr;
