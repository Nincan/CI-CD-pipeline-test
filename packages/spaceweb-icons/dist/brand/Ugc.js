"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandUgc(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandUgc" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.097 0H.903A.908.908 0 0 0 0 .903v12.194A.907.907 0 0 0 .903 14h12.194a.907.907 0 0 0 .903-.903V.903A.908.908 0 0 0 13.097 0ZM8.832 3.407h2.387v2.387H8.832Zm1.974 3.335v1.56h-1.56v-1.56Zm-3.597-2.69h.83v.832H7.21v-.832ZM5.996 2.945h.555V3.5h-.554v-.554ZM4.62 4.208h1.045v1.047H4.62Zm-2.361.603h1.57v1.57H2.257v-1.57ZM3.32 9.98h-.553v-.555h.554v.555Zm.192-2.78H4.62v1.108H3.512Zm.93 3.855v-.084c.004-.163.003-.326.013-.49a.65.65 0 0 1 .147-.399.613.613 0 0 1 .28-.183c.14-.044.284-.08.428-.117a3.659 3.659 0 0 0 .564-.17.864.864 0 0 0 .238-.14.35.35 0 0 0 .11-.408 2.857 2.857 0 0 0-.128-.28 3.83 3.83 0 0 1-.36-.99 1.843 1.843 0 0 1 .004-.836 1.109 1.109 0 0 1 .886-.854 1.375 1.375 0 0 1 .814.056 1.09 1.09 0 0 1 .682.765 1.569 1.569 0 0 1 .051.537 3.078 3.078 0 0 1-.274 1.058c-.064.148-.14.292-.21.439a.567.567 0 0 0-.058.22.358.358 0 0 0 .15.307 1.078 1.078 0 0 0 .383.187c.217.06.437.113.656.17a1.228 1.228 0 0 1 .295.114.553.553 0 0 1 .283.406 2.575 2.575 0 0 1 .03.328c.005.12 0 .24 0 .364Zm7.302-.832h-1.047V9.177h1.047Z" }) })));
}
exports.default = BrandUgc;
