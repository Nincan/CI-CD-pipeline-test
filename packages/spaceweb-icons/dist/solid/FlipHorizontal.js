"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFlipHorizontal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFlipHorizontal" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.82 9.691a.647.647 0 00-.64.655v2.367h-1.142a.655.655 0 000 1.309h1.324a1.034 1.034 0 001.097-.984v-2.692a.647.647 0 00-.64-.655zM2.977 12.713H1.835v-2.367a.647.647 0 00-.64-.655.647.647 0 00-.64.655v2.692a1.034 1.034 0 001.097.984h1.325a.655.655 0 000-1.31zM8.121 12.713H5.893a.655.655 0 000 1.309H8.12a.655.655 0 000-1.31zM13.3 6.95H.7a.7.7 0 000 1.402h12.6a.7.7 0 000-1.402z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { x: ".555", width: "12.904", height: "5.344", rx: "1.001" }, void 0)] }), void 0));
}
exports.default = SolidFlipHorizontal;
