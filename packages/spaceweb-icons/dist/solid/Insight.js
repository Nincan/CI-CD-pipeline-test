"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInsight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInsight" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.735 12.454l-2.66-2.66c-.02.026-.044.047-.063.073A6.105 6.105 0 0 0 12.28 6.14a6.14 6.14 0 1 0-6.14 6.14 6.106 6.106 0 0 0 3.727-1.269c-.025.02-.047.044-.073.064l2.66 2.66a.905.905 0 1 0 1.28-1.28zm-7.595-1.69a4.625 4.625 0 1 1 0-9.249 4.625 4.625 0 0 1 0 9.25z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.245 5.586c0-.084.076-.151.168-.151H4.49c.093 0 .168.069.168.15V8.59c0 .083-.076.15-.168.15H3.413c-.093 0-.168-.069-.168-.15V5.586zm2.188-.946c0-.084.076-.152.168-.152h1.078c.093 0 .168.067.168.151v3.95c0 .083-.076.15-.168.15H5.601c-.093 0-.168-.066-.168-.15v-3.95zm2.188-.95c0-.083.076-.15.168-.15h1.078c.093 0 .168.066.168.15v4.9c0 .082-.076.15-.168.15H7.79c-.093 0-.168-.066-.168-.15v-4.9z" })] })) })));
}
exports.default = SolidInsight;
