"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSprinklrChatCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSprinklrChatCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#47DDFA", cx: "7", cy: "7", r: "6.977" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M10.73 4.181c-.53-.679-1.51-1.281-2.352-1.45C4.905 2.028 3.01 4.348 2.72 5.627c-.59 3.098.942 4.866 1.774 5.709.057.058.14.104.133.002C4.521 9.483 5.65 9.2 8.146 9.289c.91.03 2.824-.754 3.138-2.293.208-1.017.249-1.786-.555-2.815zM4.667 6.894a.508.508 0 110-1.015.508.508 0 010 1.015zm2.37 0a.508.508 0 110-1.015.508.508 0 010 1.015zm2.37 0a.508.508 0 110-1.015.508.508 0 010 1.015z" })] })));
}
exports.default = BrandSprinklrChatCircleClr;
