"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineEngage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineEngage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.86 2.63l-.01-.05a.58.58 0 00-.04-.17c-.01-.04-.04-.08-.06-.11l-.05-.08L11.78.19a.59.59 0 10-.86.8l.98 1.04H5.7c-1.42 0-3.03.2-4.21 1.63A6.26 6.26 0 00.15 7.9a.6.6 0 101.18-.06 5.14 5.14 0 011.08-3.43c.81-.99 1.9-1.2 3.3-1.2h6.15l-.93.95a.6.6 0 10.85.83l1.9-1.95c.03-.02.04-.05.06-.08l.07-.1a.6.6 0 00.04-.23zm-.63 2.91a.59.59 0 00-.56.62 5.14 5.14 0 01-1.08 3.43c-.81.99-1.9 1.2-3.3 1.2H2.15l.93-.95A.6.6 0 102.22 9l-1.9 1.95c-.03.02-.04.05-.06.08l-.07.1a.6.6 0 00-.05.23l.01.06a.58.58 0 00.04.17c.01.04.04.07.06.1l.05.08 1.92 2.03a.59.59 0 00.83.03.6.6 0 00.03-.84l-.98-1.03h6.2c1.42 0 3.03-.2 4.21-1.63a6.25 6.25 0 001.34-4.24.6.6 0 00-.62-.56z" }) })));
}
exports.default = LineEngage;
