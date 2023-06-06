"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Move.svg instead.
 */
function LineMove(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineMove" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2.718 10.613a.588.588 0 01.588.588 1.877 1.877 0 00.396 1.155 1.1 1.1 0 00.837.426h7.052a1.441 1.441 0 001.233-1.581V2.799a1.441 1.441 0 00-1.233-1.58H4.54a1.441 1.441 0 00-1.233 1.58.588.588 0 01-1.176 0A2.604 2.604 0 014.54.042h7.052A2.604 2.604 0 0114 2.799v8.402a2.604 2.604 0 01-2.409 2.757H4.54a2.254 2.254 0 01-1.738-.846 3.043 3.043 0 01-.67-1.911.588.588 0 01.587-.588z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.987 6.916a.582.582 0 00-.125-.287l-.036-.04-1.595-1.663a.588.588 0 10-.849.815l.644.67H.588a.588.588 0 000 1.177h5.438l-.644.67a.588.588 0 00.85.815l1.597-1.666.001-.002.002-.001v-.001l.002-.001.001-.001a.587.587 0 00.156-.357.576.576 0 00-.004-.128z" }, void 0)] }), void 0));
}
exports.default = LineMove;
