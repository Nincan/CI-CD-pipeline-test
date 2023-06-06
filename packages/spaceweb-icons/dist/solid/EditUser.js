"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEditUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEditUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.444 5.304a2.652 2.652 0 1 0-2.652-2.652 2.654 2.654 0 0 0 2.652 2.652zM8.78 7.156c-.066-.054-.118-.104-.187-.155A4.712 4.712 0 0 0 8.3 6.8a4.804 4.804 0 0 0-.462-.252c-.103-.05-.202-.103-.309-.145a4.717 4.717 0 0 0-.603-.188c-.08-.02-.156-.05-.238-.066a4.654 4.654 0 0 0-.903-.093h-.702a4.653 4.653 0 0 0-.903.093c-.083.016-.159.046-.24.066a4.73 4.73 0 0 0-.602.188c-.106.042-.206.095-.308.145a4.822 4.822 0 0 0-.463.252c-.1.063-.197.131-.292.202-.07.05-.122.1-.188.155A4.761 4.761 0 0 0 .313 10.84v2.442A.718.718 0 0 0 1.03 14h5.98a1.372 1.372 0 0 1-.052-.616l.212-1.236a2.22 2.22 0 0 1 .604-1.176l2.262-2.262A4.909 4.909 0 0 0 8.78 7.156zm4.547 1.394a1.294 1.294 0 0 0-1.717 0l-3.115 3.115a1.238 1.238 0 0 0-.34.652l-.21 1.228a.391.391 0 0 0 .319.448.21.21 0 0 0 .068.007l1.269-.265a1.198 1.198 0 0 0 .604-.325l3.129-3.13a1.178 1.178 0 0 0 .353-.861 1.227 1.227 0 0 0-.36-.869z" }, void 0) }), void 0));
}
exports.default = SolidEditUser;
