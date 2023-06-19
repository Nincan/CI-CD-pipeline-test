"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandClassifiedCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandClassifiedCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#102ccc", fillRule: "evenodd", d: "M6.964 0a6.964 6.964 0 104.925 2.04A6.964 6.964 0 006.964 0zm2.888 9.852a.724.724 0 01-.722.722H4.794a.721.721 0 01-.718-.722l.004-5.776a.721.721 0 01.718-.722h2.589a.721.721 0 01.509.21l1.743 1.743a.724.724 0 01.213.513zM6.324 6.467h-.66a.35.35 0 010-.7h.66a.35.35 0 110 .7zm1.93.64h-2.58a.361.361 0 000 .722h2.578a.361.361 0 100-.723zm0 1.29h-2.58a.361.361 0 100 .723h2.578a.361.361 0 000-.723zM7.43 5.775a.362.362 0 01-.106-.255V3.896L9.311 5.88H7.686a.362.362 0 01-.255-.106z" }) })));
}
exports.default = BrandClassifiedCircleClr;
