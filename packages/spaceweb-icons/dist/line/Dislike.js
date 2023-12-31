"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Dislike.svg instead.
 */
function LineDislike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDislike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.604 8.79c.271.29.762.635 1.558.635h2.611l.014 2.143c.032 1.068.782 2.174 2.111 2.174.1 0 .206-.006.318-.02a1.2 1.2 0 001.05-1.19v-2.138c.007-.092.139-1.298 2.038-1.927.04-.013.073-.04.111-.057.199.145.43.248.695.248h1.652a1.2 1.2 0 001.2-1.2V1.67a1.2 1.2 0 00-1.2-1.2H11.11c-.29 0-.545.116-.753.287A2.06 2.06 0 008.991.269H3.356a2.384 2.384 0 00-.234-.011C1.907.258.997 1.056.802 2.29L.054 7.067a1 1 0 00-.012.107c-.01.159-.032.98.563 1.616zm12.158-7.12v5.788H11.11V7.43c.003-.035.017-.067.017-.103V2.404c-.001-.052-.012-.103-.017-.155v-.58h1.652zM1.238 7.253l.75-4.777c.143-.91.82-1.018 1.134-1.018.099 0 .162.01.162.01H8.99c.694 0 .873.534.92.795v5.071c-2.819.942-2.846 3.06-2.846 3.06v2.137a1.22 1.22 0 01-.167.011c-.881 0-.91-.982-.91-.982l-.019-2.743c0-.53-.592-.592-.592-.592H2.162c-.988 0-.924-.972-.924-.972z" }) })));
}
exports.default = LineDislike;
