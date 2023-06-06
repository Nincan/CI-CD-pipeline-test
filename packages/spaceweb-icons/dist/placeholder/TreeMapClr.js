"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderTreeMapClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 40 26", "data-icon-name": "PlaceholderTreeMapClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M20.21.9h18.82v11.6H20.21zm0 12.6H30.7v11.6H20.21zm11.49 6.3h7.33v5.3H31.7z", opacity: ".5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M.97.9h18.24v24.2H.97zM31.7 13.5h7.33v5.3H31.7z" }, void 0)] }), void 0));
}
exports.default = PlaceholderTreeMapClr;
