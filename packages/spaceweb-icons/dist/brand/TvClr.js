"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandTvClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandTvClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M12.984 3.406H8.656L10.193.884a.464.464 0 10-.792-.482l-1.83 3.004H6.43L4.599.402a.464.464 0 00-.792.482l1.537 2.522H1.016C.456 3.406 0 3.86 0 4.42v8.384c0 .56.456 1.016 1.016 1.016h11.968c.56 0 1.016-.456 1.016-1.016V4.421c0-.56-.456-1.015-1.016-1.015zm-3.166 8.18a.552.552 0 01-.552.553H2.2a.552.552 0 01-.552-.552V5.64c0-.305.247-.552.552-.552h7.066c.305 0 .552.247.552.552v5.947zm2.043-.176a.96.96 0 010-1.916.96.96 0 010 1.916zm0-3.677a.96.96 0 010-1.917.96.96 0 010 1.917z" }) })));
}
exports.default = BrandTvClr;
