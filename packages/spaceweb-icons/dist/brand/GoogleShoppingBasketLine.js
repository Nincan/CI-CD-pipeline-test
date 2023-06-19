"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGoogleShoppingBasketLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleShoppingBasketLine" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.852 5.232h-2.794L7.503 1.405c-.111-.163-.298-.245-.485-.245s-.373.082-.484.25L3.98 5.233H1.185a.585.585 0 00-.56.74l1.482 5.408c.134.49.583.852 1.12.852h7.583c.537 0 .986-.362 1.126-.852l1.482-5.408.017-.157a.585.585 0 00-.583-.583zm-5.834-2.45l1.634 2.45H5.385l1.633-2.45zm3.792 8.283l-7.577.006-1.284-4.673h10.144l-1.283 4.667zm-3.792-3.5a1.17 1.17 0 00-1.166 1.167c0 .641.525 1.166 1.166 1.166s1.167-.525 1.167-1.166a1.17 1.17 0 00-1.167-1.167z" }) })));
}
exports.default = BrandGoogleShoppingBasketLine;
