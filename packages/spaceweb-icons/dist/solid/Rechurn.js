"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRechurn(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRechurn" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.626 5.05a2.488 2.488 0 10-2.488-2.487 2.49 2.49 0 002.488 2.488zm3.367 1.954c-.078-.073-.154-.148-.237-.216l.022-.008c-.062-.05-.133-.09-.198-.137a4.79 4.79 0 00-.275-.19 4.512 4.512 0 00-.434-.236c-.096-.047-.189-.096-.289-.136a4.413 4.413 0 00-.565-.176c-.076-.02-.147-.047-.224-.062a4.367 4.367 0 00-.847-.088h-.659a4.367 4.367 0 00-.847.088c-.077.015-.149.043-.225.062a4.45 4.45 0 00-.564.176c-.1.04-.194.09-.29.136a4.536 4.536 0 00-.434.236 4.57 4.57 0 00-.274.19c-.065.047-.137.086-.199.137l.023.008a4.466 4.466 0 00-1.665 3.458v2.29a.673.673 0 00.674.673h5.37a4.033 4.033 0 012.137-6.205z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.05 8.489a.466.466 0 00-.333-.136.488.488 0 00-.319.12l-.162.196a3.041 3.041 0 10-2.092 5.256 3.001 3.001 0 00.312-.016 3.055 3.055 0 002.432-1.72.473.473 0 00-.215-.628.466.466 0 00-.21-.047.46.46 0 00-.41.253 2.11 2.11 0 01-1.904 1.217 2.07 2.07 0 01-.888-.198 2.107 2.107 0 01.89-4.015 2.22 2.22 0 011.42.542l-.497.497a.467.467 0 00-.138.33.464.464 0 00.466.47h1.318a.471.471 0 00.468-.468V8.821a.475.475 0 00-.137-.332z" })] })));
}
exports.default = SolidRechurn;
