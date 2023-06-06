"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Error.svg instead.
 */
function LineError(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 11.98", "data-icon-name": "LineError" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.78 9.73L8.26.7a1.48 1.48 0 00-2.53 0L.22 9.73a1.48 1.48 0 001.26 2.25h11.04a1.48 1.48 0 001.26-2.25zm-1 1.2a.5.5 0 01-.26.06H1.48a.5.5 0 01-.42-.75l5.52-9.02A.5.5 0 017 1a.49.49 0 01.26.07.48.48 0 01.16.16l5.52 9.02a.5.5 0 01-.16.68z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 7.6a.44.44 0 00.48-.37V4.55A.44.44 0 007 4.17a.44.44 0 00-.48.38v2.68A.44.44 0 007 7.6zM7 8.63a.72.72 0 10.72.72.72.72 0 00-.72-.72z" }, void 0)] }), void 0));
}
exports.default = LineError;
