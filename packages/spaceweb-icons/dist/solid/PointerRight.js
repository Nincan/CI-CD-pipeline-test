"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPointerRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPointerRight" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.98729,6.87192a.8799.8799,0,0,0-.20385-.47137c-.02548-.02555-.03826-.05092-.06368-.07646L11.09542,3.585A.96965.96965,0,0,0,9.7195,3.54688a.95169.95169,0,0,0-.29308.72613c0,.01272-.01265.01272-.01265.02543V6.1H.906a.906.906,0,0,0,0,1.812H9.41377V9.71281c0,.01278.01265.02549.01265.03827a.9245.9245,0,0,0,.29308.70064.98084.98084,0,0,0,1.37592-.02549l2.637-2.75171V7.66174A.96426.96426,0,0,0,14,7.0757,1.09748,1.09748,0,0,0,13.98729,6.87192Z" }, void 0) }), void 0));
}
exports.default = SolidPointerRight;
