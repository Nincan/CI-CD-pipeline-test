"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidDraft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidDraft" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 8.579L1.783 5.317 7 2.263l5.217 3.054L7 8.579zm6.31-3.158c0-.455-.237-.85-.594-1.074L7 1 1.284 4.347c-.357.225-.6.62-.6 1.074v6.316c0 .698.565 1.263 1.263 1.263h10.106c.698 0 1.263-.565 1.263-1.263l-.007-6.316z" }, void 0) }), void 0));
}
exports.default = SolidDraft;
