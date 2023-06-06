"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidVariableList(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidVariableList" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M12.807 2.372L10.342.302A1.293 1.293 0 009.511 0H2.079a.919.919 0 00-.92.919V13.08a.919.919 0 00.92.919H12.24a.919.919 0 00.919-.919V3.13a.99.99 0 00-.353-.758zm-8.75 2.03h3.102a.5.5 0 010 1H4.057a.5.5 0 010-1zm6.204 6.671H4.057a.5.5 0 010-1h6.204a.5.5 0 110 1zm0-2.86H4.057a.5.5 0 010-1h6.204a.5.5 0 010 1zm-.297-5.277V1.552l1.648 1.384z" }, void 0) }), void 0));
}
exports.default = SolidVariableList;
