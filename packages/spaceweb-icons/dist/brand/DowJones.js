"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDowJones(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDowJones" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.571 2.429H8.11a2.35 2.35 0 012.252 1.689 2.574 2.574 0 01.083.596h2.27a4.359 4.359 0 00-.05-.679A4.59 4.59 0 008.11.126H1.27v13.748h4.604v-2.27H3.57z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.429 7v2.236a2.291 2.291 0 01-2.27 2.352v2.276a4.667 4.667 0 004.572-4.595V7zM8.16 13.874v-.01c-.034 0-.066.01-.1.01z" }, void 0)] }), void 0));
}
exports.default = BrandDowJones;
