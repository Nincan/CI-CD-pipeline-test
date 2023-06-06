"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTiktokDuet(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTiktokDuet" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.98679,6.99954a5.495,5.495,0,0,1,1.9969-4.23848A4.46354,4.46354,0,0,0,4.507,2.493a4.507,4.507,0,1,0,0,9.01394,4.46341,4.46341,0,0,0,1.47693-.26809A5.49668,5.49668,0,0,1,3.98679,6.99954Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.493,2.493A4.507,4.507,0,1,0,14,7,4.507,4.507,0,0,0,9.493,2.493ZM8.968,6.54981a.69948.69948,0,0,1-1.39895,0V5.70206a.69948.69948,0,1,1,1.39895,0Zm2.44864.05171a.69948.69948,0,0,1-1.399,0V5.75376a.69948.69948,0,0,1,1.399,0Z" }, void 0)] }), void 0));
}
exports.default = SolidTiktokDuet;
