"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Priority.svg instead.
 */
function LinePriority(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LinePriority" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.405 7.316H.6a.6.6 0 100 1.201h5.804a.6.6 0 100-1.2zm0-3.856H.6a.6.6 0 100 1.202h5.804a.6.6 0 100-1.201zm0 7.712H.6a.6.6 0 100 1.2h5.804a.6.6 0 100-1.2zM9.99 3.506l.963-.82a.6.6 0 10-.778-.915L8.118 3.52a.6.6 0 00-.088.822l1.6 2.095a.6.6 0 00.842.112.6.6 0 00.113-.842l-.78-1.02c1.67.137 2.993 1.524 2.993 3.229a3.259 3.259 0 01-3.255 3.255.6.6 0 100 1.2A4.458 4.458 0 0014 7.918c0-2.304-1.765-4.183-4.01-4.411z" }, void 0) }), void 0));
}
exports.default = LinePriority;
