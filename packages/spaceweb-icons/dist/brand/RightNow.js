"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRightNow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRightNow" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.427 11.427a4.427 4.427 0 110-8.854h5.146a4.427 4.427 0 110 8.854zM9.46 9.865a2.865 2.865 0 100-5.73H4.54a2.865 2.865 0 100 5.73z" }) })));
}
exports.default = BrandRightNow;
