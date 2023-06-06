"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidReplyAll(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidReplyAll" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.11 7.85a6.22 6.22 0 00-3.73-2.88 8.06 8.06 0 00-1.93-.33h-.02V2.92a.5.5 0 00-.4-.52.49.49 0 00-.4.1l-.08.08-3.99 3.96a.5.5 0 000 .8L3.9 8.67l2.64 2.67a.57.57 0 00.4.2h.05a.5.5 0 00.45-.53V9.16h.14c.19-.01.35-.02.53-.01a6.57 6.57 0 012.59.47 4.33 4.33 0 012.33 2.08.5.5 0 00.45.3.34.34 0 00.1-.01.5.5 0 00.4-.48 6.09 6.09 0 00-.86-3.66z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.2 6.97l4.11-4.11a.5.5 0 00-.7-.71L.15 6.62a.49.49 0 00-.08.12.52.52 0 00-.03.05.5.5 0 00-.02.06.33.33 0 000 .25.49.49 0 00.02.06.52.52 0 00.03.05.49.49 0 00.08.12l4.36 4.36a.5.5 0 10.7-.7z" }, void 0)] }), void 0));
}
exports.default = SolidReplyAll;
