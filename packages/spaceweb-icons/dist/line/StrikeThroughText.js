"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineStrikeThroughText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineStrikeThroughText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.234 6.146H9.606c-.046-.017-.084-.038-.132-.055a20.555 20.555 0 00-2.052-.584 32.57 32.57 0 01-1.297-.348 4.007 4.007 0 01-.776-.328 1.846 1.846 0 01-.603-.503 1.124 1.124 0 01-.22-.694 1.347 1.347 0 01.644-1.11 2.86 2.86 0 011.695-.461 2.578 2.578 0 011.644.424 3.458 3.458 0 01.877 1.183 3.144 3.144 0 00.526.764.987.987 0 00.707.232 1.086 1.086 0 00.854-.389 1.272 1.272 0 00.343-.871 2.454 2.454 0 00-.274-1.087 3.373 3.373 0 00-.868-1.064A4.497 4.497 0 009.182.44 6.69 6.69 0 007.048.135a7.124 7.124 0 00-2.686.463 3.796 3.796 0 00-1.745 1.319 3.334 3.334 0 00-.602 1.964 3.201 3.201 0 00.571 1.942 3.662 3.662 0 00.312.323H.766a.7.7 0 100 1.4h4.68c.342.106.704.207 1.1.299q1.076.247 1.722.466a2.618 2.618 0 011.049.636 1.475 1.475 0 01.407 1.081 1.69 1.69 0 01-.754 1.403 3.2 3.2 0 01-1.959.561 3.082 3.082 0 01-1.416-.28 2.21 2.21 0 01-.835-.706 5.37 5.37 0 01-.553-1.07 2.165 2.165 0 00-.506-.812 1.035 1.035 0 00-.727-.274 1.186 1.186 0 00-1.215 1.196 3.263 3.263 0 00.572 1.75 4.363 4.363 0 001.483 1.439 6.44 6.44 0 003.27.749 6.864 6.864 0 002.86-.549 4.17 4.17 0 001.832-1.516 3.94 3.94 0 00.625-2.183 3.702 3.702 0 00-.362-1.714 3.208 3.208 0 00-.321-.475h1.516a.7.7 0 000-1.4z" }) })));
}
exports.default = LineStrikeThroughText;
