"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRotateClockwise(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRotateClockwise" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.723 6.578L9.2 4.092a1.35 1.35 0 011.907.01l2.467 2.466a1.37 1.37 0 010 1.917l-2.467 2.467a1.37 1.37 0 01-1.917 0L6.723 8.485a1.34 1.34 0 010-1.907z" }), (0, jsx_runtime_1.jsx)("path", { d: "M1.816 3.317a6.086 6.086 0 014.303-1.782V.974A.677.677 0 017.27.49L8.5 1.73a.672.672 0 010 .956l-1.23 1.23a.672.672 0 01-1.152-.472v-.561a4.676 4.676 0 00-3.683 1.772 4.722 4.722 0 003.683 7.69 4.63 4.63 0 001.546-.255.647.647 0 01.689.177.666.666 0 01-.226 1.093A6.083 6.083 0 011.816 3.317z" })] })));
}
exports.default = SolidRotateClockwise;
