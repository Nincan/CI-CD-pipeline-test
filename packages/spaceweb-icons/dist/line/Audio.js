"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Audio.svg instead.
 */
function LineAudio(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineAudio" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.837 14c-.26 0-.52-.07-.747-.205l-.16-.122-3.627-3.375H2.062A1.477 1.477 0 0 1 .586 8.822V5.178c0-.813.662-1.475 1.476-1.475h2.24l3.792-3.5A1.47 1.47 0 0 1 8.837 0c.815 0 1.477.662 1.477 1.477v11.047c0 .406-.16.784-.453 1.064A1.492 1.492 0 0 1 8.837 14zm-.086-1.19c.048 0 .211 0 .292-.076a.284.284 0 0 0 .088-.21V1.477a.297.297 0 0 0-.44-.252l-3.863 3.57a.907.907 0 0 1-.395.091H2.062a.292.292 0 0 0-.292.292v3.644c0 .161.13.292.292.292h2.37a.91.91 0 0 1 .391.089l.148.101 3.773 3.511c-.003-.004 0-.005.007-.005zm3.085-2.26a.592.592 0 0 1-.467-.954c.007-.01.861-1.144.861-2.596 0-.912-.653-2.229-.905-2.66a.592.592 0 0 1 1.022-.596c.043.074 1.067 1.84 1.067 3.256 0 1.867-1.065 3.262-1.11 3.32a.59.59 0 0 1-.468.23z" }, void 0) }), void 0));
}
exports.default = LineAudio;
