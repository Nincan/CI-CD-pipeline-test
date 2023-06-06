"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSearch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.019 5.529a5.487 5.487 0 10-2.736 4.75l3.378 3.379a.96.96 0 00.947.266 2.001 2.001 0 001.316-1.315.96.96 0 00-.266-.948l-3.379-3.378a5.464 5.464 0 00.74-2.754zM2.1 6.213a3.496 3.496 0 112.745 2.745A3.5 3.5 0 012.1 6.213z" }, void 0) }), void 0));
}
exports.default = SolidSearch;
