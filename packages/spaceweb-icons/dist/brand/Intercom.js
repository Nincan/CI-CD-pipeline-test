"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandIntercom(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandIntercom" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.133 7.697a.467.467 0 0 1-.933 0V3.5a.467.467 0 0 1 .933 0Zm-.163 2.921A7.93 7.93 0 0 1 7 12.131a7.93 7.93 0 0 1-4.97-1.513.467.467 0 0 1 .606-.71A7.161 7.161 0 0 0 7 11.199a7.071 7.071 0 0 0 4.363-1.288.467.467 0 0 1 .607.708ZM1.867 3.5a.467.467 0 0 1 .933 0v4.197a.467.467 0 0 1-.933 0V3.5ZM4.2 2.567a.467.467 0 0 1 .933 0V8.8a.467.467 0 0 1-.933 0V2.567Zm2.333-.236A.467.467 0 0 1 7 1.864a.467.467 0 0 1 .467.466v6.767a.467.467 0 0 1-.934 0V2.331Zm2.334.236a.467.467 0 0 1 .933 0V8.8a.467.467 0 0 1-.933 0V2.567ZM12.25 0H1.75A1.75 1.75 0 0 0 0 1.75v10.5A1.75 1.75 0 0 0 1.75 14h10.5A1.75 1.75 0 0 0 14 12.25V1.75A1.75 1.75 0 0 0 12.25 0Z" }, void 0) }), void 0));
}
exports.default = BrandIntercom;
