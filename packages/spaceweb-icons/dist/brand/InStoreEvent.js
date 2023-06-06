"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandInStoreEvent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandInStoreEvent" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.4 8.62h-.59a.115.115 0 00-.117.111v1.562a.115.115 0 00.118.112h.59a.115.115 0 00.118-.112V8.731A.115.115 0 004.4 8.62zm4.496-1.595L5.914 8.566a.575.575 0 01-.222.054H5.11a.115.115 0 00-.118.111v2.837a.115.115 0 00.118.112h.565a.115.115 0 00.118-.112v-1.051a.309.309 0 01.01-.112c.004 0 .058.016.12.035l2.965.938A.08.08 0 009 11.301V7.083c0-.062-.047-.087-.103-.058zm1.284-.479h-.59a.115.115 0 00-.119.11v5.135a.115.115 0 00.118.111h.59a.115.115 0 00.118-.111V6.658a.115.115 0 00-.118-.112h.001z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.628 4.435h-1.734l-3.47-2.69a1.45 1.45 0 10-2.84-.007L2.106 4.435H.372A.372.372 0 000 4.807v8.821A.373.373 0 00.372 14h13.256a.372.372 0 00.372-.372v-8.82a.372.372 0 00-.371-.373zM6.096 2.571a1.419 1.419 0 001.806.009l2.45 1.855H3.587l2.508-1.864zm6.738 9.959a.372.372 0 01-.372.372H1.54a.372.372 0 01-.373-.371V5.976a.373.373 0 01.373-.372h10.92a.373.373 0 01.373.372v6.554z" }, void 0)] }), void 0));
}
exports.default = BrandInStoreEvent;
