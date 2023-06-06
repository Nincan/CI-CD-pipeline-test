"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Code.svg instead.
 */
function LineCode(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineCode" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.433 13.147a.605.605 0 01-.585-.76l2.94-11.084a.605.605 0 111.17.31l-2.94 11.084a.607.607 0 01-.585.45zm5.152-2.732a.604.604 0 01-.436-1.027l2.395-2.478-2.388-2.389a.606.606 0 01.858-.856l2.809 2.81a.606.606 0 01.007.849l-2.81 2.906a.605.605 0 01-.435.185zm-7.169 0a.603.603 0 01-.428-.178l-2.81-2.81A.605.605 0 01.17 6.58l2.81-2.907a.605.605 0 11.871.842L1.455 6.992l2.389 2.389a.606.606 0 01-.428 1.034z" }, void 0) }), void 0));
}
exports.default = LineCode;
