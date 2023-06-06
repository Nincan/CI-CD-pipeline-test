"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSpacingVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpacingVertical" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", (0, tslib_1.__assign)({ id: "solid_spacingVertical__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M.368 0h13.263v14H.368z" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("g", (0, tslib_1.__assign)({ clipPath: "url(#solid_spacingVertical__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.872 8.74h-.928V5.26h.852c.01 0 .02-.01.029-.01.019 0 .028.01.047.01a.63.63 0 0 0 .446-.19.7.7 0 0 0 0-.97L7.764 2.45a.617.617 0 0 0-.91 0L5.301 4.11a.703.703 0 0 0 0 .96.622.622 0 0 0 .454.2h.92v3.48h-.853c-.01 0-.02.01-.029.01-.019 0-.028-.01-.047-.01a.63.63 0 0 0-.445.19.7.7 0 0 0 0 .97l1.563 1.65a.617.617 0 0 0 .91 0l1.562-1.65a.703.703 0 0 0 0-.96.63.63 0 0 0-.464-.21ZM.937 1.2h12.126a.587.587 0 0 0 .569-.6.587.587 0 0 0-.569-.6H.937a.587.587 0 0 0-.569.6.587.587 0 0 0 .569.6Zm12.126 11.6H.937a.6.6 0 0 0 0 1.2h12.126a.6.6 0 0 0 0-1.2Z" }, void 0) }), void 0)] }), void 0));
}
exports.default = SolidSpacingVertical;
