"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/SwitchVertical.svg instead.
 */
function LineSwitchVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 16 16", "data-icon-name": "LineSwitchVertical" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.416 15.719A.763.763 0 004 16c.23 0 .438-.108.584-.281l3.181-3.535a.96.96 0 000-1.257.744.744 0 00-1.13 0L4.8 12.965V.89C4.8.399 4.442 0 4 0c-.442 0-.8.398-.8.889v12.076l-1.834-2.038a.744.744 0 00-1.131 0 .96.96 0 000 1.257l3.181 3.535zM11.2 3.035L9.366 5.073a.744.744 0 01-1.131 0 .96.96 0 010-1.257L11.416.281A.763.763 0 0112 0c.23 0 .438.108.584.28l3.181 3.536a.959.959 0 010 1.257.744.744 0 01-1.13 0L12.8 3.035V15.11c0 .49-.358.889-.8.889-.442 0-.8-.398-.8-.889V3.035z" }) })));
}
exports.default = LineSwitchVertical;
