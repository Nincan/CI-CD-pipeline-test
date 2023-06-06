"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductProduct(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductProduct" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.012 11.608A2.4 2.4 0 003.404 14h7.107c1.248 0 2.427-1.057 2.427-2.323l.05-6.626c0-.76-.624-1.374-1.384-1.374l-.973-.002A3.606 3.606 0 006.51.034C4.724.281 3.42 1.858 3.42 3.662v.013h-.982c-.76 0-1.375.616-1.375 1.376l-.05 6.557zm8.995-6.65c.33 0 .59.26.59.59 0 .329-.26.589-.59.589-.33 0-.59-.26-.59-.59s.278-.59.59-.59zm-2.982-3.64a2.286 2.286 0 012.288 2.288v.07H4.754v-.07a2.26 2.26 0 012.271-2.289zm-2.982 3.64c.33 0 .59.26.59.59 0 .329-.278.589-.59.589-.329 0-.589-.26-.589-.59s.26-.59.59-.59z" }, void 0) }), void 0));
}
exports.default = ProductProduct;
