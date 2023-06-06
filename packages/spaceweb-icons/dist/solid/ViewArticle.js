"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidViewArticle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidViewArticle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.78 10.066V6.811a.406.406 0 00-.403-.414H3.122a.413.413 0 00-.298.706l1.044 1.044-2.916 2.917a.825.825 0 001.167 1.166l2.916-2.916 1.044 1.044a.408.408 0 00.7-.292z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.985 3.925V2.388A1.557 1.557 0 0012.425.83H1.567A1.554 1.554 0 00.019 2.39v.861c-.001.014-.008.025-.008.039v3.75a.7.7 0 001.4 0V3.948H12.59v7.822H7.197a.7.7 0 100 1.4h6.092a.7.7 0 00.7-.7V3.948c0-.008-.004-.014-.004-.022z" }, void 0)] }), void 0));
}
exports.default = SolidViewArticle;
