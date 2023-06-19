"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Pin.svg instead.
 */
function LinePin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LinePin" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.075 12.737a.252.252 0 00-.003.352l.799.834.002.002a.252.252 0 00.356.002l1.88-1.843-1.196-1.196zM13.787 4.775l-2.283-2.282L9.224.216a.724.724 0 00-.516-.214V0a.724.724 0 00-.726.721v.001H7.98l-.012 1.143L3.8 6.032l-3.028.022v.004a.723.723 0 00-.556 1.236L3.46 10.54l3.245 3.246a.723.723 0 001.022.007l.003-.003a.724.724 0 00.213-.561h.002l.021-3.03 4.168-4.166 1.141-.011.003-.005a.726.726 0 00.508-1.24zm-2.546.364L7.073 9.303a1.264 1.264 0 00-.37.885l-.012 1.793-2.337-2.336-2.338-2.337 1.792-.013a1.264 1.264 0 00.885-.368l4.168-4.17a1.263 1.263 0 00.363-.756l1.388 1.388L12 4.775a1.264 1.264 0 00-.758.364z" }) })));
}
exports.default = LinePin;
