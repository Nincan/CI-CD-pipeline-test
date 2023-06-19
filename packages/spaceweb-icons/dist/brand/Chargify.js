"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandChargify(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandChargify" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.89 6.8a.55.55 0 00.56-.55V.33a.34.34 0 00-.5-.3l-5.9 3.2a.96.96 0 00-.5.85v2.75c0 .24.26.03.5-.11l2.92-1.87a.32.32 0 01.43.12.26.26 0 01.04.16v1.12A.55.55 0 008 6.8zm-5.78.4a.55.55 0 00-.56.55v5.92a.34.34 0 00.5.3l5.9-3.2a.95.95 0 00.48-.83V7.9c0-.71-.31-.61-.52-.49L7 9.15a.32.32 0 01-.43-.12.18.18 0 01-.04-.16V7.75a.55.55 0 00-.56-.56z" }) })));
}
exports.default = BrandChargify;
