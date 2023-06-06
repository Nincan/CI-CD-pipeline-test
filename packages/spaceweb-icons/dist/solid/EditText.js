"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Edit.svg instead.
 */
function SolidEditText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEditText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.95 9.628H.7a.552.552 0 0 0-.39.16.56.56 0 0 0-.17.4.538.538 0 0 0 .17.39.522.522 0 0 0 .39.17h3.25a.522.522 0 0 0 .39-.17.538.538 0 0 0 .17-.39.56.56 0 0 0-.17-.4.552.552 0 0 0-.39-.16ZM13.01 1.678a1.756 1.756 0 0 0-2.46 0l-4.48 4.48a1.67 1.67 0 0 0-.44.89l-.34 1.68a.53.53 0 0 0 .01.25.46.46 0 0 0 .11.22.427.427 0 0 0 .2.15.494.494 0 0 0 .24.05l1.9-.33a1.168 1.168 0 0 0 .79-.45l4.47-4.48a1.51 1.51 0 0 0 .43-.6 1.73 1.73 0 0 0 .13-.74 1.728 1.728 0 0 0-.56-1.12Z" }, void 0) }), void 0));
}
exports.default = SolidEditText;
