"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandZendesk(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandZendesk" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.467 4.496v7.809H0l6.467-7.809zm0-2.801a3.234 3.234 0 01-6.467 0zm1.066 10.61a3.23 3.23 0 116.46 0zm0-2.801V1.695H14L7.533 9.504z" }, void 0) }), void 0));
}
exports.default = BrandZendesk;
