"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductSurvey(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductSurvey" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.834.911l-1.698.01v2.554l-8.263.002v-.003h-.02V.922L1.165.912a.308.308 0 00-.307.306v12.474c0 .17.138.308.307.308h11.668a.308.308 0 00.307-.307V1.218a.308.308 0 00-.307-.307zm-6.867 10.74a.58.58 0 01-.398-.158L3.484 9.532a.58.58 0 11.796-.847l1.674 1.576 4.139-4.139a.58.58 0 11.821.821L6.377 11.48a.579.579 0 01-.41.17z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.705 2.254h-5.41a.213.213 0 01-.213-.213V.213c0-.118.095-.213.213-.213h5.41c.118 0 .213.095.213.213V2.04a.213.213 0 01-.213.213z" }, void 0)] }), void 0));
}
exports.default = ProductSurvey;
