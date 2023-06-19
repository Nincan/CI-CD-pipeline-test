"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAggregation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineAggregation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.116 6.409h5.174l-1.547 1.65a.519.519 0 10.758.71l2.368-2.525c.03-.03.046-.069.067-.105.01-.019.027-.035.035-.056a.518.518 0 00.039-.194.518.518 0 00-.041-.198c-.005-.016-.014-.019-.017-.026a.514.514 0 00-.087-.136L9.524 3.091a.52.52 0 00-.75.72l1.497 1.559H5.116V.52a.52.52 0 00-.52-.52H.52a.52.52 0 100 1.038h3.557v9.924H.52A.52.52 0 10.52 12h4.076a.52.52 0 00.52-.52V6.41z" }) })));
}
exports.default = LineAggregation;
