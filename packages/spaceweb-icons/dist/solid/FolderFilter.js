"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFolderFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolderFilter" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.162 7.681a1.235 1.235 0 0 1-.125-1.303 1.266 1.266 0 0 1 1.123-.694h4.624V3.662a1.425 1.425 0 0 0-1.421-1.421H6.388L5.387 1.239a1.426 1.426 0 0 0-1.01-.42H1.415A1.42 1.42 0 0 0 0 2.242l-.007 7.816a1.425 1.425 0 0 0 1.421 1.421h7.618v-1.253Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.971 6.773a.354.354 0 0 0-.326-.188H8.174a.344.344 0 0 0-.285.563L9.933 9.93v2.89a.35.35 0 0 0 .193.327.325.325 0 0 0 .141.033.375.375 0 0 0 .234-.087l1.13-.905.1-.081.13-.123.013-.09a2.183 2.183 0 0 0 .009-.22v-1.74l2.048-2.787a.354.354 0 0 0 .04-.374Z" }, void 0)] }), void 0));
}
exports.default = SolidFolderFilter;
