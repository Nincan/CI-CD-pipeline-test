"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRotateCounterClockwise(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRotateCounterClockwise" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.277 6.578L4.8 4.092a1.35 1.35 0 00-1.907.01L.426 6.567a1.37 1.37 0 000 1.917l2.467 2.467a1.37 1.37 0 001.917 0l2.467-2.467a1.34 1.34 0 000-1.907z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.184 3.317a6.086 6.086 0 00-4.303-1.782V.974A.677.677 0 006.73.49L5.5 1.731a.672.672 0 000 .956l1.23 1.23a.672.672 0 001.152-.472v-.561a4.676 4.676 0 013.683 1.772 4.722 4.722 0 01-3.683 7.69 4.63 4.63 0 01-1.546-.255.647.647 0 00-.689.177.666.666 0 00.226 1.093 6.083 6.083 0 006.312-10.044z" }, void 0)] }), void 0));
}
exports.default = SolidRotateCounterClockwise;
