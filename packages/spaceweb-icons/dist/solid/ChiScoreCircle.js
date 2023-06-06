"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChiScoreCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChiScoreCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.8 6.08a3.63 3.63 0 00.38 2.74 3.38 3.38 0 00.8-.27 3.69 3.69 0 001.15-.87 4.72 4.72 0 00.75-1.14l.03-.05c.04-.09.02-.14-.05-.2l-.7-.55-.09-.08.39-.03 1.31-.12.8-.06c.06-.01.08 0 .1.07l.3 1.78.12.72a.8.8 0 010 .1h-.02l-.11-.08-.63-.52c-.1-.09-.1-.08-.17.03a4.96 4.96 0 01-1.54 1.68 4.2 4.2 0 01-1.5.64 3.27 3.27 0 001.03.5 3.33 3.33 0 004.1-2.45 3.52 3.52 0 00-2.34-4.3 3.33 3.33 0 00-4.1 2.46zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidChiScoreCircle;
