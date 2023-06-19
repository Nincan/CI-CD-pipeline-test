"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandClientCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandClientCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3.018 11.063l-3.041-.767-.372-.951 3.575.185-.162 1.533zm.209-2.206H8.764L8.486 5.05l-.163.07-.255 3.737H6.93L6.396 5.7l-.139.047.023 3.11H5.236l-.627-2.6-.14.047.163 2.553H3.611l-.766-3.552 4.99-2.367 2.926.72-.534 5.2z" }) })));
}
exports.default = BrandClientCircleClr;
