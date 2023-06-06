"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSparkle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSparkle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.538 6.398a.225.225 0 0 0-.226-.226c-2.045 0-3.708-1.97-3.708-4.394a.226.226 0 1 0-.452 0c0 2.423-1.665 4.394-3.709 4.394a.226.226 0 1 0 0 .451c2.044 0 3.71 1.97 3.71 4.394a.226.226 0 0 0 .45 0c0-2.423 1.664-4.394 3.71-4.394a.226.226 0 0 0 .225-.225ZM7.712 2.297a1.504 1.504 0 0 1 1.346 1.62.226.226 0 0 0 .451 0 1.504 1.504 0 0 1 1.346-1.62.226.226 0 0 0 0-.452A1.504 1.504 0 0 1 9.51.225a.226.226 0 0 0-.451 0 1.504 1.504 0 0 1-1.346 1.62.226.226 0 0 0 0 .452ZM13.557 10.648a2.49 2.49 0 0 1-2.245-2.673.226.226 0 1 0-.451 0 2.49 2.49 0 0 1-2.244 2.673.226.226 0 1 0 0 .451 2.49 2.49 0 0 1 2.244 2.675.226.226 0 1 0 .451 0 2.49 2.49 0 0 1 2.245-2.675.226.226 0 1 0 0-.451Z" }, void 0) }), void 0));
}
exports.default = SolidSparkle;
