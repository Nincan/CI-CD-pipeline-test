"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSwitchHorizontal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSwitchHorizontal" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.162 6.807l1.652-1.647a.675.675 0 00-.001-.954l-1.65-1.65a.676.676 0 00-1.153.476v.002l-.002.012v.961H5.71a.674.674 0 000 1.348h5.298v.9c0 .012.005.021.006.032-.001.018-.01.034-.01.051a.667.667 0 00.189.468.68.68 0 00.97.001zm-10.324.505L.186 8.959a.675.675 0 00.001.954l1.65 1.65a.676.676 0 001.153-.476v-.002l.002-.012v-.961H8.29a.674.674 0 000-1.348H2.992v-.9c0-.012-.005-.021-.006-.032.001-.018.01-.034.01-.051a.667.667 0 00-.189-.468.68.68 0 00-.97-.001z" }, void 0) }), void 0));
}
exports.default = SolidSwitchHorizontal;
