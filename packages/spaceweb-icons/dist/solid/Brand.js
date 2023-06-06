"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBrand(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBrand" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.634 7.286a4.314 4.314 0 0 0-1.48-.628c-.182-.039-.365-.071-.559-.109-.008-.087-.016-.163-.022-.24-.017-.207-.026-.416-.05-.622a7.53 7.53 0 0 0-1.282-3.448A7.517 7.517 0 0 0 8.179.229c-.372-.246-.564-.207-.825.157a4.175 4.175 0 0 0-.667 1.447c-.047.195-.081.393-.125.61-.129.011-.26.026-.39.032a7.901 7.901 0 0 0-3.178.829C1.812 3.892.867 4.744.129 5.824c-.239.348-.198.553.155.798.534.371 1.12.615 1.765.723.113.019.226.044.34.067.007.062.015.107.016.152.012.52.074 1.033.19 1.54.449 1.975 1.517 3.537 3.216 4.678.305.206.568.22.815-.14.388-.567.652-1.178.753-1.855.013-.09.036-.177.054-.267.075-.005.13-.01.184-.012.977-.048 1.928-.224 2.833-.6 1.525-.634 2.739-1.627 3.571-3.05v-.186c-.08-.177-.23-.284-.387-.386M4.75 6.999c.994-.5 1.731-1.203 2.243-2.186a4.938 4.938 0 0 0 2.197 2.18 5.04 5.04 0 0 0-1.288.918 4.891 4.891 0 0 0-.914 1.27c-.52-.97-1.238-1.693-2.238-2.182" }, void 0) }), void 0));
}
exports.default = SolidBrand;