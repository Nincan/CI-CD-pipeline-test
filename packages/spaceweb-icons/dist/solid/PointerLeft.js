"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPointerLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPointerLeft" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.01271,7.12808a.8799.8799,0,0,0,.20385.47137c.02548.02555.03826.05092.06368.07646L2.90458,10.415a.96965.96965,0,0,0,1.37592.03814A.95169.95169,0,0,0,4.57358,9.727c0-.01272.01265-.01272.01265-.02543V7.9H13.094a.906.906,0,0,0,0-1.812H4.58623V4.28719c0-.01278-.01265-.02549-.01265-.03827a.9245.9245,0,0,0-.29308-.70064.98084.98084,0,0,0-1.37592.02549L.26753,6.32548v.01278A.96426.96426,0,0,0,0,6.9243,1.09748,1.09748,0,0,0,.01271,7.12808Z" }) })));
}
exports.default = SolidPointerLeft;
