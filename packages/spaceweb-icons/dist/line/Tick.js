"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Tick.svg instead.
 */
function LineTick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTick" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.677 11.939a.618.618 0 01-.435-.178L.186 7.771a.621.621 0 11.871-.886l3.618 3.56 8.266-8.203a.621.621 0 11.876.881L5.115 11.76a.62.62 0 01-.438.18z" }, void 0) }), void 0));
}
exports.default = LineTick;
