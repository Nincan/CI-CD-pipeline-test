"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTiktok(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTiktok" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M12.898 4.025v-.52a3.463 3.463 0 01-2-.71h-.011A3.508 3.508 0 019.699.63a3.675 3.675 0 01-.052-.584H7.313v9.096a4.587 4.587 0 01-.125 1.126 1.982 1.982 0 01-2.876.885h-.01a1.423 1.423 0 01-.583-.656 1.987 1.987 0 012.333-2.803V5.161C1.478 4.442-.46 10.194 2.51 12.778a.01.01 0 00.01.01 4.826 4.826 0 001.761.948 4.707 4.707 0 002.063.073 4.305 4.305 0 003.293-4.522V4.703a5.69 5.69 0 003.271 1.156c0-2.188-.01.104-.01-1.834z" }) })));
}
exports.default = BrandTiktok;
