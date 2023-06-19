"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSlackClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSlackClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#36c5f0", fillRule: "evenodd", d: "M5.123 0a1.4 1.4 0 000 2.8h1.398V1.4A1.4 1.4 0 005.123 0m0 3.733H1.397a1.4 1.4 0 000 2.8h3.726a1.4 1.4 0 000-2.8z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#2eb67d", fillRule: "evenodd", d: "M13.972 5.133a1.397 1.397 0 10-2.795 0v1.4h1.398a1.399 1.399 0 001.397-1.4zm-3.726 0V1.4a1.397 1.397 0 10-2.794 0v3.733a1.397 1.397 0 102.794 0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#ecb22e", fillRule: "evenodd", d: "M8.849 14a1.4 1.4 0 000-2.8H7.45v1.4a1.4 1.4 0 001.4 1.4zm0-3.734h3.726a1.4 1.4 0 000-2.8H8.85a1.4 1.4 0 000 2.8z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#e01e5a", fillRule: "evenodd", d: "M0 8.866a1.397 1.397 0 102.795 0v-1.4H1.397A1.399 1.399 0 000 8.867zm3.726 0V12.6a1.397 1.397 0 102.794 0V8.868a1.397 1.397 0 10-2.794-.002" })] })));
}
exports.default = BrandSlackClr;
