"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandZendeskSupportClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandZendeskSupportClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.685 2.83c-.018.06-.035.114-.05.17q-1.33 4.694-2.654 9.39c-.055.2-.129.225-.312.173Q2.432 11.92.19 11.296c-.163-.045-.225-.09-.169-.288Q1.365 6.303 2.688 1.59c.052-.186.12-.23.31-.176 1.491.43 2.986.847 4.478 1.273.077.022.206.002.209.143z", fill: "#78a301" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.154 12.605c-.134.017-.109-.122-.13-.194-.258-.892-.508-1.786-.76-2.679-.174-.617-.343-1.235-.526-1.85-.047-.155-.019-.212.139-.256q2.284-.634 4.563-1.287c.175-.05.211.01.25.15q.64 2.28 1.287 4.558c.034.12.05.184-.1.226q-2.326.648-4.647 1.308l-.076.024z", fill: "#02373e" })] })));
}
exports.default = BrandZendeskSupportClr;
