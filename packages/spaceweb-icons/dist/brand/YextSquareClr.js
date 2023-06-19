"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandYextSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandYextSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#526370", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.89 2.781s2.066 2.777 3.053 4.085a.187.187 0 0 1 0 .27Q6.412 9.175 4.89 11.221H2.806s2.077-2.788 3.076-4.114a.146.146 0 0 0 0-.214c-.735-.975-3.076-4.114-3.076-4.114H4.89Zm6.304 0S9.146 5.526 8.536 6.338c-.023.031-.049.061-.081.102-.03-.033-.057-.06-.08-.089-.295-.393-.588-.79-.888-1.18a.148.148 0 0 1 .003-.215c.517-.683 1.62-2.177 1.62-2.177h2.084Zm-2.084 8.44q-.803-1.093-1.62-2.176a.148.148 0 0 1-.003-.215c.302-.394.598-.794.896-1.191.018-.024.04-.046.066-.076.024.026.046.045.064.068.878 1.17 2.681 3.59 2.681 3.59Z", fill: "#fff" })] })));
}
exports.default = BrandYextSquareClr;
