"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineMappedArrow(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineMappedArrow" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.953 4.18a.588.588 0 00-.035-.297l-.002-.01c-.004-.012-.017-.017-.022-.027a.585.585 0 00-.096-.15L11.123.91a.599.599 0 00-.864.83l1.702 1.771H1.399a.6.6 0 000 1.198h10.584l-1.76 1.877a.6.6 0 10.874.82l2.706-2.886c.01-.01.009-.024.017-.034a.581.581 0 00.118-.235.552.552 0 00.015-.07zM12.56 9.02H1.975l1.76-1.877a.599.599 0 00-.874-.82L.155 9.21c-.009.01-.008.024-.017.034a.581.581 0 00-.117.236.552.552 0 00-.015.07.588.588 0 00.035.298l.001.01c.005.011.017.016.023.027a.585.585 0 00.095.15l2.675 2.786a.599.599 0 10.864-.83l-1.701-1.772H12.56a.6.6 0 000-1.198z" }) })));
}
exports.default = LineMappedArrow;
