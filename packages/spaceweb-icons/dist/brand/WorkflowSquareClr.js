"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandWorkflowSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandWorkflowSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#082fc3", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.3 5a.882.882 0 0 1 .9-.8.646.646 0 0 1 .5.2 4.56 4.56 0 0 1 1.4 3.8l-.1.1a4.055 4.055 0 0 0-2-2.4.928.928 0 0 1-.7-.9Zm7.1-.1a1.135 1.135 0 0 0-1.2-1.1c-1.4 0-3.3 3.7-2.2 7-.1.1 0 .1 0 .1A6.16 6.16 0 0 1 9.8 6a1.078 1.078 0 0 0 .6-1.1ZM2.6 8.3a.828.828 0 0 0 .8.7 3.74 3.74 0 0 1 2.5 1c.1 0 .1 0 0-.1a3.54 3.54 0 0 0-2.5-2.4.789.789 0 0 0-.8.8Zm8.8 0a.709.709 0 0 1-.8.7 3.74 3.74 0 0 0-2.5 1c-.1 0-.1 0 0-.1a3.42 3.42 0 0 1 2.5-2.3.666.666 0 0 1 .8.7Z", fill: "#fff" })] })));
}
exports.default = BrandWorkflowSquareClr;
