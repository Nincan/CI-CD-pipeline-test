"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTextDocument(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTextDocument" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.096 3.406L9.876.367A1.328 1.328 0 008.964 0H1.817a1.432 1.432 0 00-1.38 1.475v11.05A1.432 1.432 0 001.817 14h10.366a1.43 1.43 0 001.38-1.474V4.512a1.523 1.523 0 00-.467-1.106zm-9.543.734h2.876a.597.597 0 010 1.191H3.553a.597.597 0 010-1.191zm5.753 6.823H3.553a.597.597 0 010-1.191h5.753a.597.597 0 010 1.191zm0-2.84H3.553a.597.597 0 010-1.191h5.753a.597.597 0 010 1.191z" }, void 0) }), void 0));
}
exports.default = SolidTextDocument;
