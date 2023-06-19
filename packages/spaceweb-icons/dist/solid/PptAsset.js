"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPptAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPptAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.425 5.664H6.87v1.209h.536a.542.542 0 00.567-.61.529.529 0 00-.548-.6z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.158 0H2.032a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM7.631 7.807h-.76v1.377H5.78V4.729h1.85a1.426 1.426 0 011.452 1.534A1.435 1.435 0 017.63 7.807z" })] })));
}
exports.default = SolidPptAsset;
