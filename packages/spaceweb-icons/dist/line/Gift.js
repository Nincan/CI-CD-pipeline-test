"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineGift(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineGift" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M4.253 1.68a.741.741 0 00-.016 1.483h1.681A4.56 4.56 0 005.74 2.8a1.776 1.776 0 00-1.487-1.12zm-2.311.741a2.31 2.31 0 00.122.742H.895a.785.785 0 00-.785.784V7a.785.785 0 00.785.785h.436v5.32a.785.785 0 00.785.785h9.768a.785.785 0 00.785-.785v-5.32h.436A.785.785 0 0013.89 7V3.947a.785.785 0 00-.785-.784h-1.169A2.311 2.311 0 009.747.11 3.229 3.229 0 007 1.844 3.229 3.229 0 004.253.11a2.311 2.311 0 00-2.311 2.311zm7.821.742H8.082c.052-.12.111-.242.178-.363a1.776 1.776 0 011.487-1.12.741.741 0 01.016 1.483zm-1.978 1.57v1.482h4.535V4.732H9.747zm-6.105 0h4.535v1.482H1.68zm4.535 3.052H2.901v4.535h3.314zm1.57 4.535V7.785h3.314v4.535z" }) })));
}
exports.default = LineGift;
