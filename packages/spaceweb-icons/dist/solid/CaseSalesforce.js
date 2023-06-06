"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCaseSalesforce(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCaseSalesforce" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.792 3.208h1.166a.276.276 0 0 0 .292-.291v-.584h3.5v.584a.276.276 0 0 0 .292.291h1.166a.276.276 0 0 0 .292-.291v-.73A1.618 1.618 0 0 0 8.896.583H5.075A1.568 1.568 0 0 0 3.5 2.158v.759a.276.276 0 0 0 .292.291ZM12.833 4.375H1.167A1.17 1.17 0 0 0 0 5.542v6.708a1.17 1.17 0 0 0 1.167 1.167h11.666A1.17 1.17 0 0 0 14 12.25V5.542a1.17 1.17 0 0 0-1.167-1.167Z" }, void 0) }), void 0));
}
exports.default = SolidCaseSalesforce;
