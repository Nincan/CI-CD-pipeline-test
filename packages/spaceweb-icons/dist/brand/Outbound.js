"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandOutbound(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandOutbound" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 2.877h4.258v1.334H0Zm1.148 2.506h3.111v1.334H1.148Zm1.293 2.506h1.817v1.334H2.441ZM14 3.645V2.311l-8.47.017v1.334h.003v6.693h-.02v1.334H14v-1.334H6.867V4.278l3.622 4.17h-.001l.606.712L14 5.388V3.963l-2.936 3.75-3.598-4.055Z" }, void 0) }), void 0));
}
exports.default = BrandOutbound;
