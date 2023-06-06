"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChatTriggerBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChatTriggerBox" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.187 4.5h-8.71a.5.5 0 110-1h8.71a.5.5 0 110 1zm-3 2.92h-5.71a.5.5 0 110-1h5.71a.5.5 0 110 1zM12.659.54H1.273C-.16.541.006 1.915.006 1.915v7.388c0 1.1.897 1.187 1.182 1.187a.978.978 0 00.085-.003h3.584c.518 0 .678.16.678.16l4.534 2.773c.11.027.207.039.293.039.669 0 .694-.72.694-.72v-2.252h1.58C13.924 10.487 14 9.27 14 9.27V1.756C14 .586 12.836.54 12.659.54z" }, void 0) }), void 0));
}
exports.default = SolidChatTriggerBox;
