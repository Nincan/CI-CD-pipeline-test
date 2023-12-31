"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandYextCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandYextCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#4E6372", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.89 2.78s2.066 2.777 3.053 4.085c.077.103.077.167 0 .27A1076.57 1076.57 0 004.89 11.22H2.806s2.077-2.788 3.076-4.114c.062-.082.062-.132 0-.214-.735-.975-3.076-4.114-3.076-4.114H4.89zm6.304 0S9.146 5.525 8.536 6.337c-.023.031-.049.061-.081.102-.03-.033-.057-.06-.08-.089-.295-.393-.588-.79-.888-1.18-.063-.082-.058-.134.003-.215.517-.683 1.62-2.177 1.62-2.177h2.084zM9.11 11.22a210.313 210.313 0 00-1.62-2.176c-.061-.08-.066-.133-.003-.215.302-.394.598-.794.896-1.191.018-.024.04-.046.066-.076.024.026.046.045.064.068.878 1.17 2.681 3.59 2.681 3.59H9.11z", fill: "#FFF" })] })));
}
exports.default = BrandYextCircleClr;
