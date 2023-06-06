"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/ArchiveReddit.svg instead.
 */
function LineArchiveReddit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineArchiveReddit" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.783 4.203H1.217a.612.612 0 00-.612.611V13.3a.612.612 0 00.612.612h11.566a.611.611 0 00.611-.612V4.814a.611.611 0 00-.611-.611zm-.611 8.486H1.828V5.426h10.344z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.722 7.805h4.556a.612.612 0 000-1.224H4.722a.612.612 0 100 1.224zM13.325.499H.675a.612.612 0 00-.612.611v1.984a.612.612 0 00.612.612h12.65a.611.611 0 00.612-.612V1.11A.612.612 0 0013.325.5zm-.61 1.983H1.286v-.76h11.427z" }, void 0)] }), void 0));
}
exports.default = LineArchiveReddit;
