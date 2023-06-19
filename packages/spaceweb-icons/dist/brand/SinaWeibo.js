"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSinaWeibo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 9.927", "data-icon-name": "BrandSinaWeibo" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.967 4.774c-.328-.089-.086-.425 0-.787a1.011 1.011 0 00-.086-.675c-.573-.88-2.456-.227-2.74-.115-.285.115-.352.047-.264-.246.088-.293.088-.721.088-.721-.242-1.578-2.412-.383-2.412-.383C.792 3.56.137 5.723.137 5.723c-1.382 4.978 8.129 5.451 9.97 1.867 1.069-2.08-.811-2.725-1.14-2.816zM6.11 9.24c-2.44.446-5.916-.63-4.515-3.041 0 0 1.149-2.166 5.107-1.441 2.827.518 2.127 3.987-.591 4.482zm2.42-7.561s1.041-.147 1.542.623c.182.28.354.682.255 1.257 0 0 0 .406-.374.473 0 0-.449.01-.417-.418.034-.426.143-1.204-.941-1.149 0 0-.406-.02-.417-.36-.01-.337.286-.394.351-.426z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.276.022s1.71-.248 2.818.924c0 0 1.139 1.035.862 2.93 0 0-.095.843-.666.697 0 0-.34-.09-.263-.812.077-.72.045-1.564-.667-2.219C9.645.888 8.89.935 8.32.957c0 0-.504-.033-.55-.417-.042-.383.385-.485.505-.518zM6.65 6.94c-.118-.914-1.063-1.54-2.106-1.395C3.5 5.689 2.748 6.55 2.869 7.464c.12.914 1.063 1.54 2.107 1.397 1.047-.145 1.796-1.004 1.674-1.92zM4.224 8.086c-.389.054-.74-.178-.782-.518-.046-.339.234-.659.62-.713.39-.055.74.178.785.519.045.34-.233.66-.623.712z" })] })));
}
exports.default = BrandSinaWeibo;
